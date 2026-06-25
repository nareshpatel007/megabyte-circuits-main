import { pgTable, text, serial, timestamp, integer, real } from "drizzle-orm/pg-core";
import { createInsertSchema } from "drizzle-zod";
import { z } from "zod";

export const contactsTable = pgTable("contacts", {
  id: serial("id").primaryKey(),
  name: text("name").notNull(),
  email: text("email").notNull(),
  phone: text("phone"),
  company: text("company"),
  serviceType: text("service_type"),
  message: text("message").notNull(),
  createdAt: timestamp("created_at").defaultNow().notNull(),
});

export const insertContactSchema = createInsertSchema(contactsTable).omit({ id: true, createdAt: true });
export type InsertContact = any;
export type Contact = typeof contactsTable.$inferSelect;

export const quotesTable = pgTable("quotes", {
  id: serial("id").primaryKey(),
  name: text("name").notNull(),
  email: text("email").notNull(),
  phone: text("phone"),
  company: text("company"),
  pcbType: text("pcb_type").notNull(),
  layers: integer("layers").notNull(),
  boardWidth: real("board_width"),
  boardHeight: real("board_height"),
  quantity: integer("quantity").notNull(),
  thickness: text("thickness"),
  copperWeight: text("copper_weight"),
  surfaceFinish: text("surface_finish"),
  notes: text("notes"),
  estimatedCost: real("estimated_cost"),
  createdAt: timestamp("created_at").defaultNow().notNull(),
});

export const insertQuoteSchema = createInsertSchema(quotesTable).omit({ id: true, createdAt: true });
export type InsertQuote = any;
export type Quote = typeof quotesTable.$inferSelect;
