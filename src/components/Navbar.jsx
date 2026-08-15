import { useState, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
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

const WHATSAPP_URL = "https://wa.me/584127713052?text=Hola%20Carlos%2C%20visit%C3%A9%20tu%20p%C3%A1gina%20web%20y%20estoy%20interesado%2Fa%20en%20iniciar%20un%20proceso%20de%20terapia.%20%C2%BFMe%20podr%C3%ADas%20brindar%20m%C3%A1s%20informaci%C3%B3n%3F";

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
  const location = useLocation();
  const navigate = useNavigate();

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const handleNavClick = (e, href) => {
    e.preventDefault();
    if (mobileOpen) setMobileOpen(false);
    
    if (location.pathname !== "/") {
      navigate("/" + href);
    } else {
      const targetId = href.replace("#", "");
      const elem = document.getElementById(targetId);
      if (elem) elem.scrollIntoView({ behavior: "smooth" });
    }
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
              onClick={(e) => handleNavClick(e, item.href)}
              sx={{ borderRadius: 0 }}
            >
              <ListItemText 
                primary={
                  <Typography sx={{ fontWeight: 600, color: "text.primary", fontSize: "1.1rem" }}>
                    {item.name}
                  </Typography>
                }
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
          aria-label="Agendar Cita por WhatsApp"
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
                  if (location.pathname !== "/") {
                    navigate("/");
                  } else {
                    window.scrollTo({ top: 0, behavior: "smooth" });
                  }
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
                  alt="Consultorio Psicológico Protege Tu Psique - Carlos Torres"
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
                    onClick={(e) => handleNavClick(e, item.href)}
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
                  aria-label="Agendar Cita por WhatsApp"
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
        sx={{ "& .MuiDrawer-paper": { bgcolor: "#FFFFFF", width: 280 } }}
      >
        {drawer}
      </Drawer>
      <Toolbar sx={{ height: { xs: 70, md: 90 } }} />
    </>
  );
}
