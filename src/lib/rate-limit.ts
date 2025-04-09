import "server-only";

import { Ratelimit } from "@upstash/ratelimit";
import { Redis } from "@upstash/redis";

// Initialize rate limiter
export const ratelimit = new Ratelimit({
  redis: Redis.fromEnv(),
  limiter: Ratelimit.slidingWindow(1, "1 m"), // 1 request per minute
  analytics: true,
});

export async function checkRateLimit(ip: string) {
  const { success, limit, reset, remaining } = await ratelimit.limit(ip);
  return { success, limit, reset, remaining };
}
