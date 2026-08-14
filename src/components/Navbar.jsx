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

const NAV_LINKS = [
  { name: "Servicios", href: "#servicios" },
  { name: "Talleres B2B", href: "#empresas" },
  { name: "Sobre Mí", href: "#sobre-mi" },
  { name: "FAQ", href: "#faq" },
];

const WHATSAPP_URL = "https://wa.me/584127713052";

function HideOnScroll({ children }) {
  const trigger = useScrollTrigger();
  return (
    <Slide appear={false} direction="down" in={!trigger}>
      {children}
    </Slide>
  );
}

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const drawer = (
    <Box sx={{ width: 280, bgcolor: "#FFFFFF", height: "100%", pt: 2 }}>
      <Box sx={{ display: "flex", justifyContent: "space-between", alignItems: "center", px: 3, mb: 4 }}>
        <Typography variant="h6" sx={{ fontWeight: 800, color: "primary.main" }}>
          Protege Tu Psique
        </Typography>
        <IconButton onClick={handleDrawerToggle} edge="end" aria-label="Cerrar menú">
          <CloseIcon />
        </IconButton>
      </Box>
      <Divider />
      <List sx={{ px: 2, pt: 4 }}>
        {NAV_LINKS.map((item) => (
          <ListItem key={item.name} disablePadding sx={{ mb: 2 }}>
            <ListItemButton
              component="a"
              href={item.href}
              onClick={handleDrawerToggle}
              sx={{ borderRadius: 0 }}
            >
              <ListItemText 
                primary={item.name} 
                primaryTypographyProps={{ 
                  fontWeight: 600, 
                  color: "text.primary",
                  fontSize: "1.1rem"
                }} 
              />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
      <Box sx={{ p: 3, mt: "auto" }}>
        <Button
          fullWidth
          variant="contained"
          href={WHATSAPP_URL}
          target="_blank"
          rel="noopener noreferrer"
          sx={{
            py: 1.5,
            bgcolor: "primary.main",
            color: "#FFFFFF",
            borderRadius: 0,
            fontWeight: 600,
            "&:hover": { bgcolor: "primary.dark" }
          }}
        >
          Agendar Cita
        </Button>
      </Box>
    </Box>
  );

  return (
    <>
      <HideOnScroll>
        <AppBar
          position="fixed"
          elevation={0}
          sx={{
            bgcolor: "#FFFFFF",
            borderBottom: scrolled ? "1px solid" : "none",
            borderColor: "divider",
            transition: "all 0.3s ease",
          }}
        >
          <Container maxWidth="lg">
            <Toolbar
              disableGutters
              sx={{
                height: { xs: 70, md: 90 },
                display: "flex",
                justifyContent: "space-between",
              }}
            >
              {/* LOGO & BRAND */}
              <Box
                component="a"
                href="#hero"
                onClick={(e) => {
                  e.preventDefault();
                  window.scrollTo({ top: 0, behavior: "smooth" });
                }}
                sx={{
                  display: "flex",
                  alignItems: "center",
                  textDecoration: "none",
                  gap: 1.5,
                  cursor: "pointer",
                }}
              >
                <Box
                  component="img"
                  src="/logo.jpg"
                  alt="Protege Tu Psique logo"
                  sx={{ height: { xs: 40, md: 48 }, width: "auto" }}
                />
                <Typography
                  variant="h6"
                  component="span"
                  sx={{
                    fontWeight: 900,
                    fontSize: { xs: "1.1rem", md: "1.25rem" },
                    color: "primary.main",
                    letterSpacing: "-0.02em",
                    display: { xs: "none", sm: "block" }
                  }}
                >
                  Protege Tu Psique
                </Typography>
              </Box>

              {/* DESKTOP LINKS */}
              <Box
                component="nav"
                sx={{
                  display: { xs: "none", md: "flex" },
                  alignItems: "center",
                  gap: 4,
                }}
              >
                {NAV_LINKS.map((item) => (
                  <Typography
                    key={item.name}
                    component="a"
                    href={item.href}
                    sx={{
                      color: "text.primary",
                      textDecoration: "none",
                      fontWeight: 600,
                      fontSize: "0.9rem",
                      letterSpacing: "0.02em",
                      transition: "color 0.2s ease",
                      "&:hover": {
                        color: "#7ED9A3",
                      },
                    }}
                  >
                    {item.name}
                  </Typography>
                ))}
                
                <Button
                  href={WHATSAPP_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  sx={{
                    bgcolor: "primary.main",
                    color: "#FFFFFF",
                    px: 3,
                    py: 1.2,
                    fontWeight: 600,
                    borderRadius: 0,
                    textTransform: "none",
                    "&:hover": {
                      bgcolor: "primary.dark",
                    },
                  }}
                >
                  Agendar Cita
                </Button>
              </Box>

              {/* MOBILE MENU ICON */}
              <IconButton
                color="inherit"
                aria-label="Abrir menú"
                edge="end"
                onClick={handleDrawerToggle}
                sx={{ display: { md: "none" }, color: "primary.main" }}
              >
                <MenuIcon fontSize="large" />
              </IconButton>
            </Toolbar>
          </Container>
        </AppBar>
      </HideOnScroll>

      {/* MOBILE DRAWER */}
      <Drawer
        anchor="right"
        open={mobileOpen}
        onClose={handleDrawerToggle}
        ModalProps={{ keepMounted: true }}
        PaperProps={{ sx: { bgcolor: "#FFFFFF", width: 280 } }}
      >
        {drawer}
      </Drawer>
      <Toolbar sx={{ height: { xs: 70, md: 90 } }} />
    </>
  );
}
