import { COOKIE_NAME } from "@shared/const";
import { getSessionCookieOptions } from "./_core/cookies";
import { systemRouter } from "./_core/systemRouter";
import { publicProcedure, protectedProcedure, router } from "./_core/trpc";
import { z } from "zod";
import * as db from "./db";

export const appRouter = router({
  system: systemRouter,
  auth: router({
    me: publicProcedure.query(opts => opts.ctx.user),
    logout: publicProcedure.mutation(({ ctx }) => {
      const cookieOptions = getSessionCookieOptions(ctx.req);
      ctx.res.clearCookie(COOKIE_NAME, { ...cookieOptions, maxAge: -1 });
      return {
        success: true,
      } as const;
    }),
  }),

  // Sermons
  sermons: router({
    list: publicProcedure.query(async () => {
      return db.getSermons();
    }),
    get: publicProcedure
      .input(z.object({ id: z.number() }))
      .query(async ({ input }) => {
        return db.getSermonById(input.id);
      }),
    create: protectedProcedure
      .input(z.object({
        title: z.string(),
        description: z.string().optional(),
        speaker: z.string().optional(),
        topic: z.string().optional(),
        videoUrl: z.string().optional(),
        audioUrl: z.string().optional(),
        sermonDate: z.date(),
      }))
      .mutation(async ({ input }) => {
        return db.createSermon(input);
      }),
  }),

  // Events
  events: router({
    list: publicProcedure.query(async () => {
      return db.getEvents();
    }),
    get: publicProcedure
      .input(z.object({ id: z.number() }))
      .query(async ({ input }) => {
        return db.getEventById(input.id);
      }),
    create: protectedProcedure
      .input(z.object({
        title: z.string(),
        description: z.string().optional(),
        eventDate: z.date(),
        eventTime: z.string().optional(),
        location: z.string().optional(),
        imageUrl: z.string().optional(),
      }))
      .mutation(async ({ input }) => {
        return db.createEvent(input);
      }),
  }),

  // Prayer Requests
  prayerRequests: router({
    create: publicProcedure
      .input(z.object({
        name: z.string(),
        email: z.string().email().optional(),
        phone: z.string().optional(),
        request: z.string(),
        isPublic: z.boolean().default(false),
      }))
      .mutation(async ({ input }) => {
        return db.createPrayerRequest(input);
      }),
    list: protectedProcedure.query(async () => {
      return db.getPrayerRequests();
    }),
  }),

  // Testimonies
  testimonies: router({
    create: publicProcedure
      .input(z.object({
        name: z.string(),
        email: z.string().email().optional(),
        testimony: z.string(),
      }))
      .mutation(async ({ input }) => {
        return db.createTestimony({ ...input, isApproved: false });
      }),
    listApproved: publicProcedure.query(async () => {
      return db.getApprovedTestimonies();
    }),
    list: protectedProcedure.query(async () => {
      return db.getTestimonies();
    }),
  }),

  // Gallery
  gallery: router({
    list: publicProcedure.query(async () => {
      return db.getGalleryImages();
    }),
    create: protectedProcedure
      .input(z.object({
        title: z.string().optional(),
        description: z.string().optional(),
        imageUrl: z.string(),
        category: z.string().optional(),
        order: z.number().default(0),
      }))
      .mutation(async ({ input }) => {
        return db.createGalleryImage(input);
      }),
  }),

  // Leadership
  leadership: router({
    list: publicProcedure.query(async () => {
      return db.getLeadership();
    }),
    create: protectedProcedure
      .input(z.object({
        name: z.string(),
        title: z.string(),
        bio: z.string().optional(),
        photoUrl: z.string().optional(),
        order: z.number().default(0),
      }))
      .mutation(async ({ input }) => {
        return db.createLeadership(input);
      }),
  }),

  // Donations
  donations: router({
    create: publicProcedure
      .input(z.object({
        donorName: z.string(),
        donorEmail: z.string().email().optional(),
        donorPhone: z.string().optional(),
        amount: z.string(),
        type: z.enum(["tithe", "offering", "partnership_seed", "other"]),
        message: z.string().optional(),
      }))
      .mutation(async ({ input }) => {
        return db.createDonation({ ...input, status: "pending" });
      }),
    list: protectedProcedure.query(async () => {
      return db.getDonations();
    }),
  }),
});

export type AppRouter = typeof appRouter;
