import { Box, Container, Typography, IconButton, Divider, Stack } from "@mui/material";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import InstagramIcon from "@mui/icons-material/Instagram";
import MusicNoteIcon from "@mui/icons-material/MusicNote";

const WHATSAPP_URL = "https://wa.me/584127713052";
const INSTAGRAM_URL = "https://www.instagram.com/protegetupsique";
const TIKTOK_URL = "https://www.tiktok.com/@protegetupsique";

const REDES = [
  {
    id: "instagram",
    icono: InstagramIcon,
    label: "@protegetupsique",
    url: INSTAGRAM_URL,
    red: "Instagram",
  },
  {
    id: "tiktok",
    icono: MusicNoteIcon,
    label: "@protegetupsique",
    url: TIKTOK_URL,
    red: "TikTok",
  },
];

const NAV_LINKS = [
  { label: "Servicios Clínicos", href: "#servicios" },
  { label: "Talleres para Empresas", href: "#empresas" },
  { label: "Sobre el Profesional", href: "#sobre-mi" },
  { label: "Preguntas Frecuentes", href: "#faq" },
];

export default function Footer() {
  const handleNavClick = (href) => {
    const target = document.querySelector(href);
    if (target) target.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <Box
      component="footer"
      aria-label="Pie de página — Protege Tu Psique"
      sx={{ bgcolor: "#0F172A" }}
    >
      {/* ── CTA Banner superior ── */}
      <Box
        sx={{
          bgcolor: "primary.main",
          py: { xs: 5, md: 7 },
          textAlign: "center",
          position: "relative",
          overflow: "hidden",
        }}
      >
        {/* Franja de acento verde superior */}
        <Box
          sx={{
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: "4px",
            bgcolor: "#7ED9A3",
          }}
        />
        <Container maxWidth="md">
          <Typography
            variant="h3"
            sx={{
              color: "#FFFFFF",
              fontSize: { xs: "1.6rem", md: "2.2rem" },
              mb: 1.5,
              letterSpacing: "-0.02em",
            }}
          >
            ¿Listo para dar el primer paso?
          </Typography>
          <Typography
            variant="body1"
            sx={{ color: "rgba(255,255,255,0.75)", mb: 3.5, fontSize: "1.05rem" }}
          >
            Escríbeme directamente por WhatsApp y agenda tu consulta hoy.
          </Typography>
          <Box
            component="a"
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            id="footer-cta-whatsapp"
            aria-label="Contactar por WhatsApp"
            sx={{
              display: "inline-flex",
              alignItems: "center",
              gap: 1.5,
              bgcolor: "#FFFFFF",
              color: "primary.main",
              fontWeight: 700,
              fontSize: "1rem",
              fontFamily: "Inter, sans-serif",
              px: 4,
              py: 1.6,
              textDecoration: "none",
              transition: "all 0.25s ease",
              "&:hover": {
                bgcolor: "#7ED9A3",
                color: "#0F172A",
                boxShadow: "0px 6px 20px rgba(126,217,163,0.4)",
              },
            }}
          >
            <WhatsAppIcon sx={{ fontSize: 22 }} />
            Contactar por WhatsApp
          </Box>
        </Container>
      </Box>

      {/* ── Footer principal ── */}
      <Container maxWidth="lg">
        <Box
          sx={{
            display: "grid",
            gridTemplateColumns: { xs: "1fr", sm: "1fr 1fr", md: "2fr 1fr 1fr" },
            gap: { xs: 5, md: 6 },
            py: { xs: 7, md: 9 },
          }}
        >
          {/* Columna 1: Marca */}
          <Box>
            <Box sx={{ mb: 2.5 }}>
              <Box
                component="img"
                src="/logo.jpg"
                alt="Protege Tu Psique"
                sx={{ height: { xs: 50, md: 64 }, width: "auto", display: "block" }}
                onError={(e) => {
                  e.target.style.display = "none";
                  e.target.nextSibling.style.display = "block";
                }}
              />
              {/* Fallback tipográfico */}
              <Typography
                variant="h6"
                sx={{
                  display: "none",
                  color: "#FFFFFF",
                  fontWeight: 800,
                  letterSpacing: "-0.5px",
                }}
              >
                Protege Tu Psique
              </Typography>
            </Box>

            <Typography
              variant="body2"
              sx={{
                color: "rgba(255,255,255,0.55)",
                lineHeight: 1.8,
                maxWidth: 320,
                mb: 3,
              }}
            >
              Consultorio de Psicología Clínica especializado en Terapia Dialéctica
              Conductual (DBT). Atención presencial en Maracaibo y modalidad online.
            </Typography>

            {/* Redes sociales */}
            <Stack direction="row" spacing={1}>
              {REDES.map(({ id, icono: Icon, label, url, red }) => (
                <Box key={id}>
                  <IconButton
                    id={`footer-social-${id}`}
                    component="a"
                    href={url}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`Seguir en ${red} — ${label}`}
                    sx={{
                      color: "rgba(255,255,255,0.55)",
                      border: "1px solid rgba(255,255,255,0.15)",
                      p: 1.25,
                      transition: "all 0.25s ease",
                      "&:hover": {
                        color: "#7ED9A3",
                        borderColor: "#7ED9A3",
                        bgcolor: "rgba(126,217,163,0.08)",
                      },
                    }}
                  >
                    <Icon sx={{ fontSize: 20 }} />
                  </IconButton>
                </Box>
              ))}
            </Stack>
          </Box>

          {/* Columna 2: Navegación */}
          <Box>
            <Typography
              variant="overline"
              sx={{
                color: "#7ED9A3",
                fontWeight: 700,
                letterSpacing: "0.12em",
                fontSize: "0.7rem",
                display: "block",
                mb: 2.5,
              }}
            >
              Navegación
            </Typography>
            <Stack spacing={1.5}>
              {NAV_LINKS.map(({ label, href }) => (
                <Box
                  key={href}
                  component="button"
                  id={`footer-nav-${href.replace("#", "")}`}
                  onClick={() => handleNavClick(href)}
                  aria-label={`Ir a la sección: ${label}`}
                  sx={{
                    background: "none",
                    border: "none",
                    cursor: "pointer",
                    p: 0,
                    textAlign: "left",
                    color: "rgba(255,255,255,0.55)",
                    fontFamily: "Inter, sans-serif",
                    fontSize: "0.9rem",
                    fontWeight: 500,
                    transition: "color 0.2s ease",
                    "&:hover": { color: "#7ED9A3" },
                  }}
                >
                  {label}
                </Box>
              ))}
            </Stack>
          </Box>

          {/* Columna 3: Contacto */}
          <Box>
            <Typography
              variant="overline"
              sx={{
                color: "#7ED9A3",
                fontWeight: 700,
                letterSpacing: "0.12em",
                fontSize: "0.7rem",
                display: "block",
                mb: 2.5,
              }}
            >
              Contacto
            </Typography>
            <Stack spacing={2}>
              <Box>
                <Typography
                  variant="caption"
                  sx={{ color: "rgba(255,255,255,0.35)", display: "block", mb: 0.5 }}
                >
                  Instagram
                </Typography>
                <Box
                  component="a"
                  href={INSTAGRAM_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  sx={{
                    color: "rgba(255,255,255,0.7)",
                    textDecoration: "none",
                    fontSize: "0.9rem",
                    fontFamily: "Inter, sans-serif",
                    fontWeight: 500,
                    "&:hover": { color: "#7ED9A3" },
                    transition: "color 0.2s ease",
                  }}
                >
                  @protegetupsique
                </Box>
              </Box>

              <Box>
                <Typography
                  variant="caption"
                  sx={{ color: "rgba(255,255,255,0.35)", display: "block", mb: 0.5 }}
                >
                  TikTok
                </Typography>
                <Box
                  component="a"
                  href={TIKTOK_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  sx={{
                    color: "rgba(255,255,255,0.7)",
                    textDecoration: "none",
                    fontSize: "0.9rem",
                    fontFamily: "Inter, sans-serif",
                    fontWeight: 500,
                    "&:hover": { color: "#7ED9A3" },
                    transition: "color 0.2s ease",
                  }}
                >
                  @protegetupsique
                </Box>
              </Box>

              <Box>
                <Typography
                  variant="caption"
                  sx={{ color: "rgba(255,255,255,0.35)", display: "block", mb: 0.5 }}
                >
                  Ubicación
                </Typography>
                <Typography
                  variant="body2"
                  sx={{ color: "rgba(255,255,255,0.7)", fontWeight: 500 }}
                >
                  Maracaibo, Venezuela
                </Typography>
              </Box>
            </Stack>
          </Box>
        </Box>

        {/* ── Copyright ── */}
        <Divider sx={{ borderColor: "rgba(255,255,255,0.08)" }} />
        <Box
          sx={{
            py: 3,
            display: "flex",
            flexDirection: { xs: "column", sm: "row" },
            justifyContent: "space-between",
            alignItems: "center",
            gap: 1,
          }}
        >
          <Typography
            variant="caption"
            sx={{ color: "rgba(255,255,255,0.3)", fontSize: "0.78rem" }}
          >
            © {new Date().getFullYear()} Protege Tu Psique. Carlos Torres, Psicólogo Clínico.
            Todos los derechos reservados.
          </Typography>
          <Typography
            variant="caption"
            sx={{ color: "rgba(255,255,255,0.2)", fontSize: "0.72rem" }}
          >
            Maracaibo, Venezuela · Atención presencial y online
          </Typography>
        </Box>
      </Container>
    </Box>
  );
}
