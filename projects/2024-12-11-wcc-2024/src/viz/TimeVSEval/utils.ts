import { format } from "d3-format";

export function formatTime(ms: number): string {
  if (ms >= 60 * 60 * 1000) { // If over an hour
    return format(".1f")(ms / (1000 * 60 * 60)) + "h";
  }
  if (ms >= 60 * 1000) { // If over a minute
    return format(".1f")(ms / (1000 * 60)) + "m";
  }
  return format(".1f")(ms / 1000) + "s";
} 