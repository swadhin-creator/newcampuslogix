import express from "express";
import cors from "cors";
import path from "path";
import { fileURLToPath } from "url";
import { db } from "./db";
import { consultationRequests, insertConsultationRequestSchema } from "../shared/schema";
import { desc } from "drizzle-orm";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
app.use(cors());
app.use(express.json());

app.post("/api/consultation", async (req, res) => {
  try {
    const validatedData = insertConsultationRequestSchema.parse(req.body);
    const [result] = await db
      .insert(consultationRequests)
      .values(validatedData)
      .returning();
    res.json({ success: true, data: result });
  } catch (error) {
    console.error("Error saving consultation request:", error);
    res.status(400).json({ success: false, error: "Invalid form data" });
  }
});

app.get("/api/consultations", async (req, res) => {
  try {
    const results = await db
      .select()
      .from(consultationRequests)
      .orderBy(desc(consultationRequests.createdAt));
    res.json({ success: true, data: results });
  } catch (error) {
    console.error("Error fetching consultations:", error);
    res.status(500).json({ success: false, error: "Failed to fetch data" });
  }
});

app.get("/api/consultations/export", async (req, res) => {
  try {
    const results = await db
      .select()
      .from(consultationRequests)
      .orderBy(desc(consultationRequests.createdAt));
    
    const headers = [
      "ID", "Name", "Designation", "Institution Name", "Institution Type",
      "Email", "Phone", "Student Strength", "Start Timeline", "Message", "Created At"
    ];
    
    const csvRows = [headers.join(",")];
    
    for (const row of results) {
      const values = [
        row.id,
        `"${(row.name || "").replace(/"/g, '""')}"`,
        `"${(row.designation || "").replace(/"/g, '""')}"`,
        `"${(row.institutionName || "").replace(/"/g, '""')}"`,
        `"${(row.institutionType || "").replace(/"/g, '""')}"`,
        `"${(row.email || "").replace(/"/g, '""')}"`,
        `"${(row.phone || "").replace(/"/g, '""')}"`,
        `"${(row.studentStrength || "").replace(/"/g, '""')}"`,
        `"${(row.startTimeline || "").replace(/"/g, '""')}"`,
        `"${(row.message || "").replace(/"/g, '""')}"`,
        row.createdAt.toISOString(),
      ];
      csvRows.push(values.join(","));
    }
    
    res.setHeader("Content-Type", "text/csv");
    res.setHeader("Content-Disposition", "attachment; filename=consultation_requests.csv");
    res.send(csvRows.join("\n"));
  } catch (error) {
    console.error("Error exporting consultations:", error);
    res.status(500).json({ success: false, error: "Failed to export data" });
  }
});

const isDev = process.env.NODE_ENV !== "production";
const PORT = process.env.PORT ? parseInt(process.env.PORT) : (isDev ? 3001 : 8080);

if (!isDev) {
  const distPath = path.resolve(__dirname, "../dist");
  app.use(express.static(distPath));
  app.use((req, res, next) => {
    if (!req.path.startsWith("/api")) {
      res.sendFile(path.join(distPath, "index.html"));
    } else {
      next();
    }
  });
}

app.listen(PORT, "0.0.0.0", () => {
  console.log(`Server running on port ${PORT}`);
});
