import { useState } from "react";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { useToast } from "@/hooks/use-toast";
import { Shield } from "lucide-react";

interface LeadFormModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const LeadFormModal = ({ isOpen, onClose }: LeadFormModalProps) => {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    designation: "",
    institutionName: "",
    institutionType: "",
    email: "",
    phone: "",
    studentStrength: "",
    startTimeline: "",
    message: "",
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSelectChange = (name: string, value: string) => {
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 1000));

    toast({
      title: "Thank you for your interest!",
      description: "Our team will get back to you within 24 hours.",
    });

    setFormData({
      name: "",
      designation: "",
      institutionName: "",
      institutionType: "",
      email: "",
      phone: "",
      studentStrength: "",
      startTimeline: "",
      message: "",
    });
    setIsSubmitting(false);
    onClose();
  };

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-h-[90vh] overflow-y-auto sm:max-w-[600px]">
        <DialogHeader>
          <DialogTitle className="text-2xl font-bold text-foreground">Schedule a Consultation</DialogTitle>
          <p className="text-muted-foreground">Fill out the form below and our team will reach out within 24 hours.</p>
        </DialogHeader>

        <form onSubmit={handleSubmit} className="mt-4 space-y-4">
          <div className="grid gap-4 sm:grid-cols-2">
            <div className="space-y-2">
              <Label htmlFor="name">Name *</Label>
              <Input
                id="name"
                name="name"
                value={formData.name}
                onChange={handleInputChange}
                placeholder="Your full name"
                required
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="designation">Designation *</Label>
              <Input
                id="designation"
                name="designation"
                value={formData.designation}
                onChange={handleInputChange}
                placeholder="e.g., Dean, HOD, Principal"
                required
              />
            </div>
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            <div className="space-y-2">
              <Label htmlFor="institutionName">Institution Name *</Label>
              <Input
                id="institutionName"
                name="institutionName"
                value={formData.institutionName}
                onChange={handleInputChange}
                placeholder="Your institution name"
                required
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="institutionType">Institution Type *</Label>
              <Select
                value={formData.institutionType}
                onValueChange={(value) => handleSelectChange("institutionType", value)}
                required
              >
                <SelectTrigger id="institutionType">
                  <SelectValue placeholder="Select type" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="engineering">Engineering College</SelectItem>
                  <SelectItem value="university">University</SelectItem>
                  <SelectItem value="polytechnic">Polytechnic</SelectItem>
                  <SelectItem value="arts-science">Arts & Science College</SelectItem>
                  <SelectItem value="autonomous">Autonomous Institution</SelectItem>
                  <SelectItem value="other">Other</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            <div className="space-y-2">
              <Label htmlFor="email">Email *</Label>
              <Input
                id="email"
                name="email"
                type="email"
                value={formData.email}
                onChange={handleInputChange}
                placeholder="your.email@institution.edu"
                required
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="phone">Phone *</Label>
              <Input
                id="phone"
                name="phone"
                type="tel"
                value={formData.phone}
                onChange={handleInputChange}
                placeholder="+91 XXXXX XXXXX"
                required
              />
            </div>
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            <div className="space-y-2">
              <Label htmlFor="studentStrength">Approx. Student Strength *</Label>
              <Select
                value={formData.studentStrength}
                onValueChange={(value) => handleSelectChange("studentStrength", value)}
                required
              >
                <SelectTrigger id="studentStrength">
                  <SelectValue placeholder="Select range" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="under-500">Under 500</SelectItem>
                  <SelectItem value="500-1000">500 - 1,000</SelectItem>
                  <SelectItem value="1000-2500">1,000 - 2,500</SelectItem>
                  <SelectItem value="2500-5000">2,500 - 5,000</SelectItem>
                  <SelectItem value="5000-plus">5,000+</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div className="space-y-2">
              <Label htmlFor="startTimeline">Start Timeline *</Label>
              <Select
                value={formData.startTimeline}
                onValueChange={(value) => handleSelectChange("startTimeline", value)}
                required
              >
                <SelectTrigger id="startTimeline">
                  <SelectValue placeholder="When to start" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="immediate">Immediately</SelectItem>
                  <SelectItem value="1-month">Within 1 Month</SelectItem>
                  <SelectItem value="1-3-months">1-3 Months</SelectItem>
                  <SelectItem value="next-semester">Next Semester</SelectItem>
                  <SelectItem value="next-academic-year">Next Academic Year</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>

          <div className="space-y-2">
            <Label htmlFor="message">Message (Optional)</Label>
            <Textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleInputChange}
              placeholder="Tell us about your specific requirements or questions..."
              rows={3}
            />
          </div>

          <div className="flex items-start gap-2 rounded-lg bg-section-alt p-3">
            <Shield className="mt-0.5 h-4 w-4 flex-shrink-0 text-primary" />
            <p className="text-xs text-muted-foreground">
              We respect your privacy. Your information is secure and will not be shared.
            </p>
          </div>

          <Button type="submit" className="w-full" size="lg" disabled={isSubmitting}>
            {isSubmitting ? "Submitting..." : "Submit Request"}
          </Button>
        </form>
      </DialogContent>
    </Dialog>
  );
};

export default LeadFormModal;
