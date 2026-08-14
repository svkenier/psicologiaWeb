import { ThemeProvider, CssBaseline, Divider } from "@mui/material";
import { Box, Fab, Tooltip } from "@mui/material";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import theme from "./theme";
import Navbar from "./components/Navbar";
import HeroSection from "./components/HeroSection";
import ServiciosSection from "./components/ServiciosSection";
import EmpresasSection from "./components/EmpresasSection";
import SobreMiSection from "./components/SobreMiSection";
import FAQSection from "./components/FAQSection";
import Footer from "./components/Footer";

const WHATSAPP_URL = "https://wa.me/584127713052";

export default function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />

      {/* ── NAVBAR ── */}
      <Navbar />

      {/* ── CONTENIDO PRINCIPAL ── */}
      <Box component="main">
        <HeroSection />
        <SobreMiSection />
        <Divider sx={{ borderBottomWidth: 4, borderColor: "#7ED9A3", opacity: 0.2 }} />
        <ServiciosSection />
        <EmpresasSection />
        <FAQSection />
      </Box>

      {/* ── FOOTER ── */}
      <Footer />

      {/* ── FAB FLOTANTE DE WHATSAPP — Cuadrado, colores corporativos ── */}
      <Tooltip title="Contactar por WhatsApp" placement="left" arrow>
        <Fab
          id="fab-whatsapp"
          aria-label="Contactar por WhatsApp"
          href={WHATSAPP_URL}
          target="_blank"
          rel="noopener noreferrer"
          sx={{
            position: "fixed",
            bottom: { xs: 24, md: 32 },
            right: { xs: 20, md: 32 },
            zIndex: 1200,
            /* Cuadrado — sin bordes redondeados */
            borderRadius: 0,
            width: { xs: 52, md: 58 },
            height: { xs: 52, md: 58 },
            /* Colores corporativos */
            bgcolor: "primary.main",
            color: "#FFFFFF",
            boxShadow: "0px 6px 20px rgba(0,74,173,0.40)",
            "&:hover": {
              bgcolor: "primary.dark",
              boxShadow:
                "0px 8px 28px rgba(0,74,173,0.50), 0 0 0 3px rgba(126,217,163,0.45)",
              transform: "scale(1.06)",
            },
            transition: "all 0.25s ease",
          }}
        >
          <WhatsAppIcon sx={{ fontSize: { xs: 26, md: 28 } }} />
        </Fab>
      </Tooltip>
    </ThemeProvider>
  );
}
