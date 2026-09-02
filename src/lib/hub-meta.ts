export const HUB_VERSION = "1.2";

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
    version: "1.2",
    date: "2026-09-02",
    tag: "latest",
    changes: [
      "Public landing page with loadstring copy",
      "Status page and changelog",
      "Compatible executors showcase",
    ],
  },
  {
    version: "1.1",
    date: "2026-08-20",
    tag: "stable",
    changes: [
      "Keyless loader",
      "Auto-update pipeline",
      "Multi-executor support",
    ],
  },
  {
    version: "1.0",
    date: "2026-08-01",
    changes: [
      "Initial release",
      "Core script library",
      "Basic UI panel",
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
