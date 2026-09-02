export const HUB_VERSION = "3.2.1";

export type ServiceStatus = "operational" | "degraded" | "outage";

export type Service = {
  id: string;
  name: string;
  description: string;
  status: ServiceStatus;
};

export type ChangelogEntry = {
  version: string;
  date: string;
  tag?: "latest" | "stable";
  changes: string[];
};

export const SERVICES: Service[] = [
  {
    id: "loader",
    name: "Loader API",
    description: "loadstring endpoint & auto-update",
    status: "operational",
  },
  {
    id: "cdn",
    name: "Script CDN",
    description: "Script delivery & caching",
    status: "operational",
  },
  {
    id: "website",
    name: "Website",
    description: "Landing & documentation",
    status: "operational",
  },
  {
    id: "discord",
    name: "Discord",
    description: "Support & announcements",
    status: "operational",
  },
];

export const CHANGELOG: ChangelogEntry[] = [
  {
    version: "3.2.1",
    date: "2026-09-01",
    tag: "latest",
    changes: [
      "Faster cold start on light executors",
      "Fixed ESP toggle desync on teleport",
      "Improved search ranking for universal scripts",
    ],
  },
  {
    version: "3.2.0",
    date: "2026-08-18",
    tag: "stable",
    changes: [
      "New premium UI panel with categories",
      "Keyless loader rewrite",
      "Multi-executor runtime detection",
    ],
  },
  {
    version: "3.1.4",
    date: "2026-07-30",
    changes: [
      "Auto-update reliability improvements",
      "Reduced loader payload size",
      "Minor stability fixes",
    ],
  },
  {
    version: "3.1.0",
    date: "2026-07-02",
    changes: [
      "Universal script library expansion",
      "Hitbox & farm modules updated",
      "New status endpoint",
    ],
  },
];

export function overallStatus(services: Service[] = SERVICES): ServiceStatus {
  if (services.some((s) => s.status === "outage")) return "outage";
  if (services.some((s) => s.status === "degraded")) return "degraded";
  return "operational";
}

export function statusLabel(status: ServiceStatus): string {
  switch (status) {
    case "operational":
      return "Operational";
    case "degraded":
      return "Degraded";
    case "outage":
      return "Outage";
  }
}
