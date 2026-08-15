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
import PoliticaLegal from "./pages/PoliticaLegal";
import { useEffect } from "react";
import { Helmet } from "react-helmet-async";
import { Routes, Route, useLocation } from "react-router-dom";
import ScrollToTop from "./components/ScrollToTop";

const WHATSAPP_URL = "https://wa.me/584127713052?text=Hola%2C%20vengo%20de%20la%20p%C3%A1gina%20web%20y%20me%20gustar%C3%ADa%20hacer%20una%20consulta%2C%20por%20favor.";

export default function App() {
  const location = useLocation();

  useEffect(() => {
    if (location.pathname === "/" && location.hash) {
      setTimeout(() => {
        const id = location.hash.replace("#", "");
        const element = document.getElementById(id);
        if (element) {
          element.scrollIntoView({ behavior: "smooth" });
        }
      }, 100);
    }
  }, [location]);

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Helmet>
        <html lang="es-VE" />
        <title>Protege Tu Psique | Psicólogo Clínico y Terapia DBT</title>
        <meta name="description" content="Carlos Torres, psicólogo clínico con 7 años de experiencia. Terapia individual, de pareja y bienestar para empresas. Atención online y presencial en Maracaibo." />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href="https://protegetupsique.com" />
        <meta property="og:title" content="Protege Tu Psique | Psicólogo Clínico y Terapia DBT" />
        <meta property="og:description" content="Carlos Torres, psicólogo clínico con 7 años de experiencia. Terapia individual, de pareja y bienestar para empresas. Atención online y presencial en Maracaibo." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://protegetupsique.com" />
        <meta property="og:image" content="/foto-ct.JPG" />
        <meta property="og:locale" content="es_VE" />
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Physician",
            "name": "Protege Tu Psique",
            "image": "https://protegetupsique.com/logo.jpg",
            "telephone": "+584127713052",
            "priceRange": "$$",
            "founder": {
              "@type": "Person",
              "name": "Carlos Torres"
            },
            "employee": {
              "@type": "Person",
              "name": "Carlos Torres"
            },
            "description": "Psicología clínica basada en evidencia y consultoría de bienestar organizacional.",
            "location": {
              "@type": "Place",
              "name": "Maracaibo, Zulia, Venezuela."
            },
            "contactPoint": {
              "@type": "ContactPoint",
              "contactType": "WhatsApp (Atención online y presencial)",
              "telephone": "+584127713052"
            }
          })}
        </script>
      </Helmet>

      {/* ── NAVBAR ── */}
      <Navbar />

      {/* ── CONTENIDO PRINCIPAL ── */}
      <Box component="main">
        <ScrollToTop />
        <Routes>
          <Route path="/" element={
            <>
              <HeroSection />
              <SobreMiSection />
              <Divider sx={{ borderBottomWidth: 4, borderColor: "#7ED9A3", opacity: 0.2 }} />
              <ServiciosSection />
              <EmpresasSection />
              <FAQSection />
            </>
          } />
          <Route path="/politica-privacidad" element={<PoliticaLegal />} />
        </Routes>
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
