import { NextResponse } from "next/server";

export interface Route {
  id: string;
  name: string;
  from: string;
  to: string;
  duration: string;
  status: "active" | "coming-soon";
}

const mockRoutes: Route[] = [
  {
    id: "1",
    name: "Marina Bay Loop",
    from: "Marina Bay Sands",
    to: "Gardens by the Bay",
    duration: "12 min",
    status: "active",
  },
  {
    id: "2",
    name: "Orchard Express",
    from: "Orchard Road",
    to: "Dhoby Ghaut",
    duration: "8 min",
    status: "active",
  },
  {
    id: "3",
    name: "Sentosa Connect",
    from: "HarbourFront",
    to: "Sentosa Gateway",
    duration: "15 min",
    status: "coming-soon",
  },
];

export async function GET() {
  return NextResponse.json(mockRoutes);
}
