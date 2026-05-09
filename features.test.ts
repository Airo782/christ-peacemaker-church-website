import { describe, it, expect, beforeAll } from "vitest";
import { appRouter } from "./routers";
import type { TrpcContext } from "./_core/context";

// Mock context for testing
function createMockContext(): TrpcContext {
  const user = {
    id: 1,
    openId: "test-user",
    email: "test@example.com",
    name: "Test User",
    loginMethod: "test",
    role: "user" as const,
    createdAt: new Date(),
    updatedAt: new Date(),
    lastSignedIn: new Date(),
  };

  return {
    user,
    req: {
      protocol: "https",
      headers: {},
    } as TrpcContext["req"],
    res: {} as TrpcContext["res"],
  };
}

describe("Church Website tRPC Procedures", () => {
  let caller: ReturnType<typeof appRouter.createCaller>;

  beforeAll(() => {
    const ctx = createMockContext();
    caller = appRouter.createCaller(ctx);
  });

  describe("Sermons", () => {
    it("should list sermons", async () => {
      const sermons = await caller.sermons.list();
      expect(Array.isArray(sermons)).toBe(true);
    });
  });

  describe("Events", () => {
    it("should list events", async () => {
      const events = await caller.events.list();
      expect(Array.isArray(events)).toBe(true);
    });
  });

  describe("Prayer Requests", () => {
    it("should create a prayer request", async () => {
      const result = await caller.prayerRequests.create({
        name: "John Doe",
        email: "john@example.com",
        phone: "+234 906 7722638",
        request: "Please pray for my family",
        isPublic: false,
      });
      expect(result).toBeDefined();
      expect(result.id).toBeDefined();
    });

    it("should list prayer requests", async () => {
      const requests = await caller.prayerRequests.list();
      expect(Array.isArray(requests)).toBe(true);
    });
  });

  describe("Testimonies", () => {
    it("should create a testimony", async () => {
      const result = await caller.testimonies.create({
        name: "Jane Doe",
        email: "jane@example.com",
        title: "God's Healing Power",
        testimony: "God healed me from a serious illness",
      });
      expect(result).toBeDefined();
      expect(result.id).toBeDefined();
    });

    it("should list testimonies", async () => {
      const testimonies = await caller.testimonies.list();
      expect(Array.isArray(testimonies)).toBe(true);
    });
  });

  describe("Gallery", () => {
    it("should list gallery images", async () => {
      const images = await caller.gallery.list();
      expect(Array.isArray(images)).toBe(true);
    });
  });

  describe("Leadership", () => {
    it("should list leadership profiles", async () => {
      const leaders = await caller.leadership.list();
      expect(Array.isArray(leaders)).toBe(true);
    });
  });

  describe("Donations", () => {
    it("should create a donation record", async () => {
      const result = await caller.donations.create({
        type: "offering",
        donorName: "Donor Name",
        donorEmail: "donor@example.com",
        donorPhone: "+234 906 7722638",
        amount: "5000",
        message: "Supporting the ministry",
      });
      expect(result).toBeDefined();
      expect(result.id).toBeDefined();
    });
  });
});
