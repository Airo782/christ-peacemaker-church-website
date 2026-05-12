import { eq, desc } from "drizzle-orm";
import { drizzle } from "drizzle-orm/mysql2";
import { InsertUser, users, sermons, events, prayerRequests, testimonies, galleryImages, leadership, donations } from "../drizzle/schema";
import { ENV } from './_core/env';

let _db: ReturnType<typeof drizzle> | null = null;

// Lazily create the drizzle instance so local tooling can run without a DB.
export async function getDb() {
  if (!_db && process.env.DATABASE_URL) {
    try {
      _db = drizzle(process.env.DATABASE_URL);
    } catch (error) {
      console.warn("[Database] Failed to connect:", error);
      _db = null;
    }
  }
  return _db;
}

export async function upsertUser(user: InsertUser): Promise<void> {
  if (!user.openId) {
    throw new Error("User openId is required for upsert");
  }

  const db = await getDb();
  if (!db) {
    console.warn("[Database] Cannot upsert user: database not available");
    return;
  }

  try {
    const values: InsertUser = {
      openId: user.openId,
    };
    const updateSet: Record<string, unknown> = {};

    const textFields = ["name", "email", "loginMethod"] as const;
    type TextField = (typeof textFields)[number];

    const assignNullable = (field: TextField) => {
      const value = user[field];
      if (value === undefined) return;
      const normalized = value ?? null;
      values[field] = normalized;
      updateSet[field] = normalized;
    };

    textFields.forEach(assignNullable);

    if (user.lastSignedIn !== undefined) {
      values.lastSignedIn = user.lastSignedIn;
      updateSet.lastSignedIn = user.lastSignedIn;
    }
    if (user.role !== undefined) {
      values.role = user.role;
      updateSet.role = user.role;
    } else if (user.openId === ENV.ownerOpenId) {
      values.role = 'admin';
      updateSet.role = 'admin';
    }

    if (!values.lastSignedIn) {
      values.lastSignedIn = new Date();
    }

    if (Object.keys(updateSet).length === 0) {
      updateSet.lastSignedIn = new Date();
    }

    await db.insert(users).values(values).onDuplicateKeyUpdate({
      set: updateSet,
    });
  } catch (error) {
    console.error("[Database] Failed to upsert user:", error);
    throw error;
  }
}

export async function getUserByOpenId(openId: string) {
  const db = await getDb();
  if (!db) {
    console.warn("[Database] Cannot get user: database not available");
    return undefined;
  }

  const result = await db.select().from(users).where(eq(users.openId, openId)).limit(1);

  return result.length > 0 ? result[0] : undefined;
}

// Sermon queries
export async function getSermons() {
  const db = await getDb();
  if (!db) return [];
  return db.select().from(sermons).orderBy(desc(sermons.sermonDate));
}

export async function getSermonById(id: number) {
  const db = await getDb();
  if (!db) return null;
  const result = await db.select().from(sermons).where(eq(sermons.id, id)).limit(1);
  return result.length > 0 ? result[0] : null;
}

export async function createSermon(data: typeof sermons.$inferInsert) {
  const db = await getDb();
  if (!db) throw new Error("Database not available");
  const result = await db.insert(sermons).values(data);
  return result;
}

// Events queries
export async function getEvents() {
  const db = await getDb();
  if (!db) return [];
  return db.select().from(events).orderBy(desc(events.eventDate));
}

export async function getEventById(id: number) {
  const db = await getDb();
  if (!db) return null;
  const result = await db.select().from(events).where(eq(events.id, id)).limit(1);
  return result.length > 0 ? result[0] : null;
}

export async function createEvent(data: typeof events.$inferInsert) {
  const db = await getDb();
  if (!db) throw new Error("Database not available");
  return db.insert(events).values(data);
}

// Prayer requests queries
export async function createPrayerRequest(data: typeof prayerRequests.$inferInsert) {
  const db = await getDb();
  if (!db) throw new Error("Database not available");
  return db.insert(prayerRequests).values(data);
}

export async function getPrayerRequests() {
  const db = await getDb();
  if (!db) return [];
  return db.select().from(prayerRequests).orderBy(desc(prayerRequests.createdAt));
}

// Testimonies queries
export async function createTestimony(data: typeof testimonies.$inferInsert) {
  const db = await getDb();
  if (!db) throw new Error("Database not available");
  return db.insert(testimonies).values(data);
}

export async function getApprovedTestimonies() {
  const db = await getDb();
  if (!db) return [];
  return db.select().from(testimonies).where(eq(testimonies.isApproved, true)).orderBy(desc(testimonies.createdAt));
}

export async function getTestimonies() {
  const db = await getDb();
  if (!db) return [];
  return db.select().from(testimonies).orderBy(desc(testimonies.createdAt));
}

// Gallery queries
export async function getGalleryImages() {
  const db = await getDb();
  if (!db) return [];
  return db.select().from(galleryImages).orderBy(desc(galleryImages.createdAt));
}

export async function createGalleryImage(data: typeof galleryImages.$inferInsert) {
  const db = await getDb();
  if (!db) throw new Error("Database not available");
  return db.insert(galleryImages).values(data);
}

// Leadership queries
export async function getLeadership() {
  const db = await getDb();
  if (!db) return [];
  return db.select().from(leadership).orderBy(desc(leadership.order));
}

export async function createLeadership(data: typeof leadership.$inferInsert) {
  const db = await getDb();
  if (!db) throw new Error("Database not available");
  return db.insert(leadership).values(data);
}

// Donations queries
export async function createDonation(data: typeof donations.$inferInsert) {
  const db = await getDb();
  if (!db) throw new Error("Database not available");
  return db.insert(donations).values(data);
}

export async function getDonations() {
  const db = await getDb();
  if (!db) return [];
  return db.select().from(donations).orderBy(desc(donations.createdAt));
}
