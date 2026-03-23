import type { Route } from "@/app/api/routes/route";

const BASE_URL = process.env.NEXT_PUBLIC_API_URL ?? "";

async function fetchJSON<T>(path: string, init?: RequestInit): Promise<T> {
  const res = await fetch(`${BASE_URL}${path}`, {
    ...init,
    headers: {
      "Content-Type": "application/json",
      ...init?.headers,
    },
  });

  if (!res.ok) {
    throw new Error(`API error: ${res.status} ${res.statusText}`);
  }

  return res.json() as Promise<T>;
}

export function getRoutes(): Promise<Route[]> {
  return fetchJSON<Route[]>("/api/routes");
}
