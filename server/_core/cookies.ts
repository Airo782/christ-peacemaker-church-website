import { type Response } from "express";

export function setSessionCookie(res: Response, token: string) {
  res.cookie("session", token, {
    httpOnly: true,
    secure: process.env.NODE_ENV === "production",
    sameSite: "lax",
    maxAge: 60 * 60 * 24 * 30 * 1000, // 30 days
  });
}

export function clearSessionCookie(res: Response) {
  res.clearCookie("session");
}
