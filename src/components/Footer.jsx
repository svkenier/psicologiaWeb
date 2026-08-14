import { Box, Container, Typography, Link } from "@mui/material";

const NAV_LINKS = [
  { name: "Servicios Clínicos", href: "#servicios" },
  { name: "Talleres Corporativos", href: "#empresas" },
  { name: "Sobre el Profesional", href: "#sobre-mi" },
  { name: "Preguntas Frecuentes", href: "#faq" },
];

export default function Footer() {
  return (
    <Box
      component="footer"
      sx={{
        bgcolor: "primary.main",
        color: "#FFFFFF",
        py: { xs: 8, md: 12 },
      }}
    >
      <Container maxWidth="lg">
        <Box
          sx={{
            display: "grid",
            gridTemplateColumns: { xs: "1fr", md: "1.5fr 1fr 1fr" },
            gap: 8,
          }}
        >
          {/* BRAND */}
          <Box>
            <Typography variant="h4" component="p" sx={{ fontWeight: 900, mb: 2, letterSpacing: "-0.02em" }}>
              Protege Tu Psique.
            </Typography>
            <Typography sx={{ color: "rgba(255,255,255,0.7)", mb: 4, maxWidth: 300, lineHeight: 1.6 }}>
              Psicología clínica basada en evidencia científica para resultados reales.
            </Typography>
            <Typography sx={{ color: "rgba(255,255,255,0.5)", fontSize: "0.85rem" }}>
              © {new Date().getFullYear()} Protege Tu Psique. <br />
              Todos los derechos reservados.
            </Typography>
          </Box>

          {/* LINKS */}
          <Box>
            <Typography sx={{ fontWeight: 700, mb: 3, letterSpacing: "0.1em", textTransform: "uppercase", fontSize: "0.75rem", color: "#7ED9A3" }}>
              Navegación
            </Typography>
            <Box sx={{ display: "flex", flexDirection: "column", gap: 2 }}>
              {NAV_LINKS.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  underline="none"
                  sx={{
                    color: "rgba(255,255,255,0.8)",
                    fontWeight: 500,
                    transition: "color 0.2s",
                    "&:hover": { color: "#FFFFFF" },
                  }}
                >
                  {link.name}
                </Link>
              ))}
            </Box>
          </Box>

          {/* CONTACT */}
          <Box>
            <Typography sx={{ fontWeight: 700, mb: 3, letterSpacing: "0.1em", textTransform: "uppercase", fontSize: "0.75rem", color: "#7ED9A3" }}>
              Contacto
            </Typography>
            <Typography sx={{ color: "rgba(255,255,255,0.8)", mb: 1, fontWeight: 500 }}>
              Maracaibo, Venezuela
            </Typography>
            <Typography sx={{ color: "rgba(255,255,255,0.8)", mb: 3, fontWeight: 500 }}>
              Modalidad Online Global
            </Typography>
            <Link
              href="https://wa.me/584127713052"
              target="_blank"
              rel="noopener noreferrer"
              underline="always"
              sx={{
                color: "#FFFFFF",
                fontWeight: 600,
                "&:hover": { color: "#7ED9A3" },
              }}
            >
              +58 412 771 3052
            </Link>
          </Box>
        </Box>
      </Container>
    </Box>
  );
}
