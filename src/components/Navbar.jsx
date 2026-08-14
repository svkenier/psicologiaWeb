import { useState, useEffect } from "react";
import {
  AppBar,
  Toolbar,
  Box,
  Button,
  IconButton,
  Drawer,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  Container,
  useScrollTrigger,
  Slide,
  Divider,
  Typography,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";

const WHATSAPP_URL = "https://wa.me/584127713052";

const NAV_LINKS = [
  { label: "Servicios", href: "#servicios" },
  { label: "Empresas", href: "#empresas" },
  { label: "Sobre Mí", href: "#sobre-mi" },
  { label: "FAQ", href: "#faq" },
];

/**
 * Oculta la AppBar al hacer scroll hacia abajo,
 * la muestra al hacer scroll hacia arriba.
 */
function HideOnScroll({ children }) {
  const trigger = useScrollTrigger({ threshold: 80 });
  return (
    <Slide appear={false} direction="down" in={!trigger}>
      {children}
    </Slide>
  );
}

export default function Navbar() {
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  /* Detecta si el usuario bajó para añadir sombra suave al AppBar */
  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNavClick = (href) => {
    setDrawerOpen(false);
    // Scroll suave al elemento destino
    const target = document.querySelector(href);
    if (target) {
      target.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <>
      <HideOnScroll>
        <AppBar
          position="fixed"
          color="inherit"
          elevation={0}
          sx={{
            bgcolor: "background.default",
            borderBottom: scrolled ? "1px solid" : "1px solid transparent",
            borderColor: scrolled ? "divider" : "transparent",
            backdropFilter: scrolled ? "blur(12px)" : "none",
            bgcolor: scrolled
              ? "rgba(255,255,255,0.92)"
              : "background.default",
            transition: "all 0.3s ease",
          }}
        >
          <Container maxWidth="lg">
            <Toolbar
              disableGutters
              sx={{
                height: { xs: 64, md: 72 },
                justifyContent: "space-between",
              }}
            >
              {/* ── LOGO ── */}
              <Box
                component="a"
                href="#hero"
                onClick={(e) => {
                  e.preventDefault();
                  handleNavClick("#hero");
                }}
                sx={{
                  display: "flex",
                  alignItems: "center",
                  textDecoration: "none",
                  gap: 1,
                  cursor: "pointer",
                }}
                aria-label="Ir al inicio — Protege Tu Psique"
              >
                <Box
                  component="img"
                  src="/logo.jpg"
                  alt="Protege Tu Psique logo"
                  sx={{ height: { xs: 44, md: 52 }, width: "auto" }}
                  onError={(e) => {
                    e.target.style.display = "none";
                  }}
                />
                <Typography
                  variant="h6"
                  component="span"
                  sx={{
                    fontWeight: 800,
                    fontSize: { xs: "1.1rem", md: "1.25rem" },
                    color: "primary.main",
                    fontFamily: "Inter, sans-serif",
                    letterSpacing: "-0.5px",
                    display: { xs: "none", sm: "block" }
                  }}
                >
                  Protege Tu Psique
                </Typography>
              </Box>

              {/* ── LINKS DE NAVEGACIÓN (Desktop) ── */}
              <Box
                component="nav"
                aria-label="Navegación principal"
                sx={{
                  display: { xs: "none", md: "flex" },
                  alignItems: "center",
                  gap: 0.5,
                }}
              >
                {NAV_LINKS.map(({ label, href }) => (
                  <Button
                    key={href}
                    id={`nav-link-${label.toLowerCase().replace(/\s/g, "-")}`}
                    onClick={() => handleNavClick(href)}
                    sx={{
                      color: "text.primary",
                      fontWeight: 500,
                      fontSize: "0.9rem",
                      px: 1.5,
                      py: 0.75,
                      borderRadius: 0,
                      position: "relative",
                      "&::after": {
                        content: '""',
                        position: "absolute",
                        bottom: 0,
                        left: "50%",
                        transform: "translateX(-50%)",
                        width: 0,
                        height: "2px",
                        bgcolor: "#7ED9A3",
                        transition: "width 0.25s ease",
                      },
                      "&:hover": {
                        bgcolor: "transparent",
                        color: "primary.main",
                        "&::after": { width: "80%" },
                      },
                    }}
                  >
                    {label}
                  </Button>
                ))}

                {/* CTA Principal */}
                <Button
                  id="nav-cta-whatsapp"
                  variant="contained"
                  color="primary"
                  href={WHATSAPP_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  startIcon={<WhatsAppIcon />}
                  sx={{ ml: 1.5 }}
                >
                  Contactar
                </Button>
              </Box>

              {/* ── MENÚ HAMBURGUESA (Mobile) ── */}
              <IconButton
                id="nav-mobile-menu-btn"
                aria-label="Abrir menú de navegación"
                aria-expanded={drawerOpen}
                onClick={() => setDrawerOpen(true)}
                sx={{ display: { md: "none" }, color: "text.primary" }}
              >
                <MenuIcon />
              </IconButton>
            </Toolbar>
          </Container>
        </AppBar>
      </HideOnScroll>

      {/* ── TOOLBAR SPACER ── */}
      <Toolbar sx={{ height: { xs: 64, md: 72 } }} />

      {/* ── DRAWER MOBILE ── */}
      <Drawer
        anchor="right"
        open={drawerOpen}
        onClose={() => setDrawerOpen(false)}
        PaperProps={{
          sx: {
            width: { xs: "80vw", sm: 320 },
            bgcolor: "background.default",
            px: 2,
            py: 1,
          },
        }}
      >
        {/* Header del Drawer */}
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            py: 2,
            px: 1,
          }}
        >
          <Box
            component="span"
            sx={{
              fontWeight: 800,
              fontSize: "1rem",
              color: "primary.main",
              fontFamily: "Inter, sans-serif",
            }}
          >
            Protege Tu Psique
          </Box>
          <IconButton
            id="nav-mobile-close-btn"
            aria-label="Cerrar menú"
            onClick={() => setDrawerOpen(false)}
          >
            <CloseIcon />
          </IconButton>
        </Box>

        <Divider />

        {/* Links del Drawer */}
        <List sx={{ mt: 1 }}>
          {NAV_LINKS.map(({ label, href }) => (
            <ListItem key={href} disablePadding>
              <ListItemButton
                id={`nav-mobile-link-${label.toLowerCase().replace(/\s/g, "-")}`}
                onClick={() => handleNavClick(href)}
                sx={{
                  borderRadius: 0,
                  py: 1.5,
                  transition: "all 0.2s ease",
                  borderLeft: "4px solid transparent",
                  "&:hover": { bgcolor: "rgba(0,74,173,0.06)", borderLeftColor: "#7ED9A3" },
                }}
              >
                <ListItemText
                  primary={label}
                  primaryTypographyProps={{
                    fontWeight: 600,
                    color: "text.primary",
                  }}
                />
              </ListItemButton>
            </ListItem>
          ))}
        </List>

        <Divider sx={{ mt: 1 }} />

        {/* CTA en Drawer */}
        <Box sx={{ p: 2, mt: 1 }}>
          <Button
            id="nav-mobile-cta-whatsapp"
            variant="contained"
            color="primary"
            fullWidth
            size="large"
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            startIcon={<WhatsAppIcon />}
          >
            Contactar
          </Button>
        </Box>
      </Drawer>
    </>
  );
}
