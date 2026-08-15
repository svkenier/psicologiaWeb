import { Box, Container, Typography, Link, SvgIcon, Grid, Divider } from "@mui/material";
import InstagramIcon from '@mui/icons-material/Instagram';
import { Link as RouterLink } from 'react-router-dom';

function TikTokIcon(props) {
  return (
    <SvgIcon {...props} viewBox="0 0 24 24">
      <path d="M12.53.02C13.84 0 15.14.01 16.44 0c.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.93-.01 2.92.01 5.84-.02 8.75-.08 1.4-.54 2.79-1.35 3.94-1.31 1.92-3.58 3.17-5.91 3.21-1.43.08-2.86-.31-4.08-1.03-2.02-1.12-3.44-3.17-3.8-5.46-.4-2.52.49-5.15 2.45-6.81 1.76-1.49 4.14-2.14 6.36-1.72v4.01c-1.02-.27-2.1-.21-3.07.13-1.04.38-1.9 1.15-2.39 2.11-.46.88-.63 1.9-.4 2.87.27 1.18 1.09 2.18 2.14 2.74 1.25.68 2.78.8 4.1.34 1.34-.44 2.37-1.5 2.77-2.88.16-.54.23-1.12.24-1.69.04-5.24.03-10.49.03-15.73h-.01z" />
    </SvgIcon>
  );
}

const NAV_LINKS = [
  { name: "Servicios Clínicos", href: "/#servicios" },
  { name: "Talleres Corporativos", href: "/#empresas" },
  { name: "Sobre el Profesional", href: "/#sobre-mi" },
  { name: "Preguntas Frecuentes", href: "/#faq" },
];

export default function Footer() {
  return (
    <Box
      component="footer"
      sx={{
        bgcolor: "primary.main",
        color: "#FFFFFF",
        pt: { xs: 8, md: 10 },
        pb: { xs: 4, md: 4 },
      }}
    >
      <Container maxWidth="lg">
        <Grid container spacing={4} sx={{ justifyContent: "space-between" }}>
          {/* BRAND & LOCATION */}
          <Grid size={{ xs: 12, md: 5 }}>
            <Typography variant="h4" component="p" sx={{ fontWeight: 900, mb: 2, letterSpacing: "-0.02em" }}>
              Protege Tu Psique.
            </Typography>
            <Typography sx={{ color: "rgba(255,255,255,0.7)", maxWidth: 300, lineHeight: 1.6, mb: 4 }}>
              Psicología clínica basada en evidencia científica para resultados reales.
            </Typography>

            <Typography variant="body2" sx={{ color: "rgba(255,255,255,0.5)", mb: 0.5 }}>
              Maracaibo, Venezuela
            </Typography>
            <Typography variant="body2" sx={{ color: "rgba(255,255,255,0.5)", mb: 2 }}>
              Modalidad Online Global
            </Typography>
            
            {/* Map */}
            <Box 
              component="iframe"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d251490.49162985807!2d-71.857077!3d10.655848!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8e899cb6333c5e83%3A0xe965b2067edc35!2sMaracaibo%2C%20Zulia%2C%20Venezuela!5e0!3m2!1sen!2sus!4v1700000000000!5m2!1sen!2sus"
              sx={{
                border: "none",
                width: "100%",
                height: "120px",
                borderRadius: 0,
                filter: "grayscale(80%) opacity(0.9)",
                display: "block",
              }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </Grid>

          {/* LINKS */}
          <Grid size={{ xs: 12, md: 3 }}>
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
          </Grid>

          {/* CONTACT */}
          <Grid size={{ xs: 12, md: 3 }}>
            <Typography sx={{ fontWeight: 700, mb: 3, letterSpacing: "0.1em", textTransform: "uppercase", fontSize: "0.75rem", color: "#7ED9A3" }}>
              Contacto
            </Typography>
            
            {/* Phone */}
            <Link
              href="https://wa.me/584127713052?text=Hola%2C%20vengo%20de%20la%20p%C3%A1gina%20web%20y%20me%20gustar%C3%ADa%20hacer%20una%20consulta%2C%20por%20favor."
              target="_blank"
              rel="noopener noreferrer"
              underline="always"
              sx={{
                color: "#FFFFFF",
                fontWeight: 700,
                fontSize: "1.1rem",
                display: "inline-block",
                mb: 3,
                "&:hover": { color: "#7ED9A3" },
              }}
            >
              +58 412 771 3052
            </Link>
            
            {/* Social Media List */}
            <Box sx={{ display: "flex", flexDirection: "column", gap: 2 }}>
              <Link 
                href="#" 
                target="_blank"
                underline="none"
                sx={{ 
                  display: "flex", 
                  alignItems: "center", 
                  gap: 1.5, 
                  color: "rgba(255,255,255,0.8)",
                  fontWeight: 500,
                  transition: "color 0.2s",
                  "&:hover": { color: "#7ED9A3" } 
                }}
              >
                <InstagramIcon fontSize="small" /> 
                @protegetupsique
              </Link>
              <Link 
                href="#" 
                target="_blank"
                underline="none"
                sx={{ 
                  display: "flex", 
                  alignItems: "center", 
                  gap: 1.5, 
                  color: "rgba(255,255,255,0.8)",
                  fontWeight: 500,
                  transition: "color 0.2s",
                  "&:hover": { color: "#7ED9A3" } 
                }}
              >
                <TikTokIcon sx={{ fontSize: "1.25rem" }} /> 
                @protegetupsique
              </Link>
            </Box>
          </Grid>
        </Grid>

        {/* SUB-FOOTER */}
        <Divider sx={{ my: 4, borderColor: "rgba(255,255,255,0.1)" }} />
        <Box 
          sx={{ 
            display: "flex", 
            justifyContent: "space-between", 
            alignItems: "center", 
            flexDirection: { xs: "column", sm: "row" },
            gap: 2 
          }}
        >
          <Typography sx={{ color: "rgba(255,255,255,0.5)", fontSize: "0.85rem", textAlign: { xs: "center", sm: "left" } }}>
            © {new Date().getFullYear()} Protege Tu Psique. Todos los derechos reservados.
          </Typography>
          <Link 
            component={RouterLink}
            to="/politica-privacidad"
            underline="hover" 
            sx={{ 
              color: "rgba(255,255,255,0.5)", 
              fontSize: "0.85rem",
              transition: "color 0.2s",
              "&:hover": { color: "#FFFFFF" }
            }}
          >
            Políticas de Privacidad
          </Link>
        </Box>
      </Container>
    </Box>
  );
}
