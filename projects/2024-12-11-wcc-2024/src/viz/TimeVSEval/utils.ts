import { format } from "d3-format";

export function formatTime(ms: number): string {
  const minutes = ms / (1000 * 60);
  if (minutes >= 1) {
    return format(".1f")(minutes) + "m";
  }
  return format(".1f")(ms / 1000) + "s";
} 