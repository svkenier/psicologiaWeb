import { createTheme } from "@mui/material/styles";

const theme = createTheme({
  palette: {
    mode: "light",
    primary: {
      main: "#004AAD",       // Azul Corporativo
      light: "#2D6FD4",
      dark: "#003380",
      contrastText: "#FFFFFF",
    },
    secondary: {
      main: "#7ED9A3",       // Verde Menta / Acentos
      light: "#A8E8BE",
      dark: "#4CAF78",
      contrastText: "#0F172A",
    },
    background: {
      default: "#FFFFFF",    // Fondo principal limpio
      paper: "#F8FAFC",      // Fondos secundarios / Tarjetas
    },
    text: {
      primary: "#0F172A",    // Texto principal de alto contraste
      secondary: "#475569",  // Texto secundario / subtítulos
    },
    divider: "#E2E8F0",
  },
  typography: {
    fontFamily: '"Inter", "Roboto", "Helvetica", "Arial", sans-serif',
    h1: { fontWeight: 800, lineHeight: 1.15 },
    h2: { fontWeight: 700, lineHeight: 1.25 },
    h3: { fontWeight: 700, lineHeight: 1.3 },
    h4: { fontWeight: 600, lineHeight: 1.4 },
    h5: { fontWeight: 600 },
    h6: { fontWeight: 600 },
    subtitle1: { fontWeight: 500, color: "#475569" },
    subtitle2: { fontWeight: 500, color: "#475569" },
    body1: { lineHeight: 1.75 },
    body2: { lineHeight: 1.65 },
    button: {
      textTransform: "none",
      fontWeight: 600,
      letterSpacing: "0.01em",
    },
  },
  shape: {
    borderRadius: 0,         // Esquinas rectas — estilo corporativo
  },
  shadows: [
    "none",
    "0px 1px 3px rgba(0,74,173,0.06), 0px 1px 2px rgba(0,74,173,0.04)",
    "0px 4px 6px rgba(0,74,173,0.07), 0px 2px 4px rgba(0,74,173,0.05)",
    "0px 10px 15px rgba(0,74,173,0.08), 0px 4px 6px rgba(0,74,173,0.05)",
    "0px 20px 25px rgba(0,74,173,0.10), 0px 10px 10px rgba(0,74,173,0.06)",
    "0px 25px 50px rgba(0,74,173,0.12)",
    ...Array(19).fill("none"),
  ],
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: 0,
          padding: "10px 24px",
          fontSize: "0.9375rem",
          boxShadow: "none",
          "&:hover": {
            boxShadow: "0px 4px 12px rgba(0,74,173,0.25)",
          },
        },
        containedPrimary: {
          background: "linear-gradient(135deg, #004AAD 0%, #2D6FD4 100%)",
          "&:hover": {
            background: "linear-gradient(135deg, #003380 0%, #004AAD 100%)",
          },
        },
      },
    },
    MuiCard: {
      styleOverrides: {
        root: {
          borderRadius: 0,
          boxShadow: "0px 4px 20px rgba(0,74,173,0.08)",
          border: "1px solid #E2E8F0",
          transition: "box-shadow 0.3s ease, transform 0.3s ease",
          "&:hover": {
            boxShadow: "0px 12px 32px rgba(0,74,173,0.15)",
            transform: "translateY(-4px)",
          },
        },
      },
    },
    MuiAppBar: {
      styleOverrides: {
        root: {
          boxShadow: "none",
          borderBottom: "1px solid #E2E8F0",
        },
      },
    },
    MuiChip: {
      styleOverrides: {
        root: {
          fontWeight: 600,
          fontSize: "0.75rem",
        },
      },
    },
  },
});

export default theme;
