import { int, mysqlEnum, mysqlTable, text, timestamp, varchar, longtext, boolean } from "drizzle-orm/mysql-core";

/**
 * Core user table backing auth flow.
 * Extend this file with additional tables as your product grows.
 * Columns use camelCase to match both database fields and generated types.
 */
export const users = mysqlTable("users", {
  /**
   * Surrogate primary key. Auto-incremented numeric value managed by the database.
   * Use this for relations between tables.
   */
  id: int("id").autoincrement().primaryKey(),
  /** Manus OAuth identifier (openId) returned from the OAuth callback. Unique per user. */
  openId: varchar("openId", { length: 64 }).notNull().unique(),
  name: text("name"),
  email: varchar("email", { length: 320 }),
  loginMethod: varchar("loginMethod", { length: 64 }),
  role: mysqlEnum("role", ["user", "admin"]).default("user").notNull(),
  createdAt: timestamp("createdAt").defaultNow().notNull(),
  updatedAt: timestamp("updatedAt").defaultNow().onUpdateNow().notNull(),
  lastSignedIn: timestamp("lastSignedIn").defaultNow().notNull(),
});

export type User = typeof users.$inferSelect;
export type InsertUser = typeof users.$inferInsert;

/**
 * Leadership profiles for church leaders
 */
export const leadership = mysqlTable("leadership", {
  id: int("id").autoincrement().primaryKey(),
  name: varchar("name", { length: 255 }).notNull(),
  title: varchar("title", { length: 255 }).notNull(),
  bio: longtext("bio"),
  photoUrl: varchar("photoUrl", { length: 500 }),
  order: int("order").default(0),
  createdAt: timestamp("createdAt").defaultNow().notNull(),
  updatedAt: timestamp("updatedAt").defaultNow().onUpdateNow().notNull(),
});

export type Leadership = typeof leadership.$inferSelect;
export type InsertLeadership = typeof leadership.$inferInsert;

/**
 * Sermon archive with video and audio
 */
export const sermons = mysqlTable("sermons", {
  id: int("id").autoincrement().primaryKey(),
  title: varchar("title", { length: 500 }).notNull(),
  description: longtext("description"),
  speaker: varchar("speaker", { length: 255 }),
  topic: varchar("topic", { length: 255 }),
  videoUrl: varchar("videoUrl", { length: 500 }),
  audioUrl: varchar("audioUrl", { length: 500 }),
  sermonDate: timestamp("sermonDate").notNull(),
  createdAt: timestamp("createdAt").defaultNow().notNull(),
  updatedAt: timestamp("updatedAt").defaultNow().onUpdateNow().notNull(),
});

export type Sermon = typeof sermons.$inferSelect;
export type InsertSermon = typeof sermons.$inferInsert;

/**
 * Events calendar
 */
export const events = mysqlTable("events", {
  id: int("id").autoincrement().primaryKey(),
  title: varchar("title", { length: 500 }).notNull(),
  description: longtext("description"),
  eventDate: timestamp("eventDate").notNull(),
  eventTime: varchar("eventTime", { length: 10 }),
  location: varchar("location", { length: 500 }),
  imageUrl: varchar("imageUrl", { length: 500 }),
  createdAt: timestamp("createdAt").defaultNow().notNull(),
  updatedAt: timestamp("updatedAt").defaultNow().onUpdateNow().notNull(),
});

export type Event = typeof events.$inferSelect;
export type InsertEvent = typeof events.$inferInsert;

/**
 * Prayer requests
 */
export const prayerRequests = mysqlTable("prayer_requests", {
  id: int("id").autoincrement().primaryKey(),
  name: varchar("name", { length: 255 }).notNull(),
  email: varchar("email", { length: 320 }),
  phone: varchar("phone", { length: 20 }),
  request: longtext("request").notNull(),
  isPublic: boolean("isPublic").default(false),
  createdAt: timestamp("createdAt").defaultNow().notNull(),
});

export type PrayerRequest = typeof prayerRequests.$inferSelect;
export type InsertPrayerRequest = typeof prayerRequests.$inferInsert;

/**
 * Testimonies
 */
export const testimonies = mysqlTable("testimonies", {
  id: int("id").autoincrement().primaryKey(),
  name: varchar("name", { length: 255 }).notNull(),
  email: varchar("email", { length: 320 }),
  testimony: longtext("testimony").notNull(),
  isApproved: boolean("isApproved").default(false),
  createdAt: timestamp("createdAt").defaultNow().notNull(),
  updatedAt: timestamp("updatedAt").defaultNow().onUpdateNow().notNull(),
});

export type Testimony = typeof testimonies.$inferSelect;
export type InsertTestimony = typeof testimonies.$inferInsert;

/**
 * Gallery images
 */
export const galleryImages = mysqlTable("gallery_images", {
  id: int("id").autoincrement().primaryKey(),
  title: varchar("title", { length: 255 }),
  description: longtext("description"),
  imageUrl: varchar("imageUrl", { length: 500 }).notNull(),
  category: varchar("category", { length: 100 }),
  order: int("order").default(0),
  createdAt: timestamp("createdAt").defaultNow().notNull(),
  updatedAt: timestamp("updatedAt").defaultNow().onUpdateNow().notNull(),
});

export type GalleryImage = typeof galleryImages.$inferSelect;
export type InsertGalleryImage = typeof galleryImages.$inferInsert;

/**
 * Donations/Giving records
 */
export const donations = mysqlTable("donations", {
  id: int("id").autoincrement().primaryKey(),
  donorName: varchar("donorName", { length: 255 }).notNull(),
  donorEmail: varchar("donorEmail", { length: 320 }),
  donorPhone: varchar("donorPhone", { length: 20 }),
  amount: varchar("amount", { length: 20 }).notNull(),
  type: mysqlEnum("type", ["tithe", "offering", "partnership_seed", "other"]).notNull(),
  message: longtext("message"),
  status: mysqlEnum("status", ["pending", "completed", "failed"]).default("pending"),
  createdAt: timestamp("createdAt").defaultNow().notNull(),
  updatedAt: timestamp("updatedAt").defaultNow().onUpdateNow().notNull(),
});

export type Donation = typeof donations.$inferSelect;
export type InsertDonation = typeof donations.$inferInsert;
