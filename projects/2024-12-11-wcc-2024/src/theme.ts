export const theme = {
  fonts: {
    title: "freight-text-pro, Georgia, serif",
    body: "proxima-nova, system-ui, sans-serif",
  },
  colors: {
    // Base backgrounds
    background: '#1a1a1f',      // App background
    chartBg: '#242428',         // Chart background
    stripeBg: '#2a2a2f',        // Alternating stripes

    // Grid and lines
    gridLine: '#353538',        // Grid lines
    zeroLine: '#454548',        // Zero reference line
    
    // Text
    text: '#919191',           // General text color

    // Player colors
    players: {
      player1: '#5c9dff',      // Gukesh
      player2: '#ff9f5c',      // Ding
    },

    // Chart element opacities
    opacity: {
      boxPlot: 0.4,
      whisker: 0.5,
      point: 0.25,
    }
  }
} as const;

// Helper to get player color
export function getPlayerColor(player: string) {
  return player === "Gukesh" ? theme.colors.players.player1 : theme.colors.players.player2;
} 