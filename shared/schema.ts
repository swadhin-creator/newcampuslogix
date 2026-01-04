import { pgTable, serial, text, timestamp } from "drizzle-orm/pg-core";
import { z } from "zod";

export const consultationRequests = pgTable("consultation_requests", {
  id: serial("id").primaryKey(),
  name: text("name").notNull(),
  designation: text("designation").notNull(),
  institutionName: text("institution_name").notNull(),
  institutionType: text("institution_type").notNull(),
  email: text("email").notNull(),
  phone: text("phone").notNull(),
  studentStrength: text("student_strength").notNull(),
  startTimeline: text("start_timeline").notNull(),
  message: text("message"),
  createdAt: timestamp("created_at").defaultNow().notNull(),
});

export const insertConsultationRequestSchema = z.object({
  name: z.string().min(1),
  designation: z.string().min(1),
  institutionName: z.string().min(1),
  institutionType: z.string().min(1),
  email: z.string().email(),
  phone: z.string().min(1),
  studentStrength: z.string().min(1),
  startTimeline: z.string().min(1),
  message: z.string().optional(),
});

export type ConsultationRequest = typeof consultationRequests.$inferSelect;
export type InsertConsultationRequest = z.infer<typeof insertConsultationRequestSchema>;
