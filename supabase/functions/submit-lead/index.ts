import { serve } from "https://deno.land/std@0.168.0/http/server.ts";

const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type',
};

interface LeadData {
  name: string;
  designation: string;
  institutionName: string;
  institutionType: string;
  email: string;
  phone: string;
  studentStrength: string;
  timeline: string;
  message?: string;
}

serve(async (req) => {
  // Handle CORS preflight requests
  if (req.method === 'OPTIONS') {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const webhookUrl = Deno.env.get('GOOGLE_SHEET_WEBHOOK_URL');
    
    if (!webhookUrl) {
      console.error('GOOGLE_SHEET_WEBHOOK_URL is not configured');
      throw new Error('Webhook URL not configured');
    }

    const leadData: LeadData = await req.json();
    console.log('Submitting lead data:', leadData);

    const response = await fetch(webhookUrl, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(leadData),
    });

    const responseText = await response.text();
    console.log('Webhook response status:', response.status);
    console.log('Webhook response body (first 800 chars):', responseText?.slice?.(0, 800) ?? responseText);

    if (!response.ok) {
      console.error('Google Sheets webhook error:', responseText);
      throw new Error(`Webhook failed: ${response.status}`);
    }

    // Apps Script can return 200 even on failure; validate the JSON payload.
    let parsed: any = null;
    try {
      parsed = JSON.parse(responseText);
    } catch {
      // Non-JSON responses are considered failures (often HTML error pages)
    }

    if (!parsed || parsed.success !== true) {
      const reason = parsed?.error ? String(parsed.error) : 'Invalid response from Apps Script (expected JSON {success:true}).';
      throw new Error(`Webhook rejected: ${reason}`);
    }

    console.log('Lead submitted successfully');

    return new Response(
      JSON.stringify({ success: true, message: 'Lead submitted successfully' }),
      { headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
    );
  } catch (error: unknown) {
    const errorMessage = error instanceof Error ? error.message : 'Unknown error';
    console.error('Error in submit-lead function:', errorMessage);
    return new Response(
      JSON.stringify({ success: false, error: errorMessage }),
      { status: 500, headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
    );
  }
});
