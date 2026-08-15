import { 
  Container, 
  Typography, 
  Box, 
  Link, 
  Divider, 
  List, 
  ListItem, 
  ListItemText, 
  ListItemIcon, 
  Grid 
} from '@mui/material';
import { Link as RouterLink } from 'react-router-dom';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import CircleIcon from '@mui/icons-material/Circle';
import { useTheme } from '@mui/material/styles';

const PrivacyPolicy = () => {
  const theme = useTheme();

  return (
    <Box sx={{ bgcolor: "#FAFAFA", minHeight: "100vh", py: { xs: 8, md: 12 } }}>
      <Container maxWidth="md">
        
        {/* Enlace de regreso */}
        <Link 
          component={RouterLink} 
          to="/"
          underline="none"
          sx={{
            display: "inline-flex",
            alignItems: "center",
            gap: 1,
            color: "text.secondary",
            fontWeight: 600,
            mb: 6,
            transition: "color 0.2s",
            "&:hover": { color: "primary.main" }
          }}
        >
          <ArrowBackIcon fontSize="small" /> Volver al inicio
        </Link>

        {/* Encabezado Principal */}
        <Box sx={{ mb: 8 }}>
          <Typography 
            variant="h2" 
            sx={{ 
              fontWeight: 900, 
              color: "primary.main", 
              letterSpacing: "-0.02em", 
              mb: 2, 
              fontSize: { xs: "2.5rem", md: "3.5rem" } 
            }}
          >
            Políticas de Privacidad
          </Typography>
          <Typography variant="body1" sx={{ color: "text.secondary", fontSize: "1.1rem" }}>
            Última actualización: {new Date().toLocaleDateString()}
          </Typography>
        </Box>

        {/* Secciones de Contenido */}
        <Box sx={{ display: "flex", flexDirection: "column", gap: 6 }}>
          
          {/* 1. Responsable del Tratamiento */}
          <Box>
            <Typography variant="h5" sx={{ fontWeight: 700, color: "primary.main", mb: 3 }}>
              1. Responsable del Tratamiento
            </Typography>
            <Box 
              sx={{ 
                pl: { xs: 2, md: 4 }, 
                borderLeft: `4px solid ${theme.palette.secondary.main}` 
              }}
            >
              <Typography sx={{ mb: 1.5, color: "text.primary", fontSize: "1.05rem" }}>
                <strong>Identidad:</strong> Protege Tu Psique S.L. (NIF: B12345678)
              </Typography>
              <Typography sx={{ mb: 1.5, color: "text.primary", fontSize: "1.05rem" }}>
                <strong>Dirección:</strong> Av. Principal, Maracaibo, Venezuela
              </Typography>
              <Typography sx={{ color: "text.primary", fontSize: "1.05rem" }}>
                <strong>Email:</strong>{" "}
                <Link 
                  href="mailto:contacto@protegetupsique.com" 
                  underline="hover"
                  sx={{ color: "primary.main", fontWeight: 600 }}
                >
                  contacto@protegetupsique.com
                </Link>
              </Typography>
            </Box>
          </Box>
          
          <Divider sx={{ opacity: 0.6 }} />

          {/* 2. Datos que Recopilamos y Finalidad */}
          <Box>
            <Typography variant="h5" sx={{ fontWeight: 700, color: "primary.main", mb: 3 }}>
              2. Datos que Recopilamos y Finalidad
            </Typography>
            <Typography sx={{ mb: 2, color: "text.primary", fontSize: "1.05rem", fontWeight: 700 }}>
              Tipos de datos recopilados:
            </Typography>
            <List disablePadding sx={{ mb: 4, pl: 2 }}>
              <ListItem disableGutters sx={{ alignItems: "flex-start", py: 1 }}>
                 <ListItemIcon sx={{ minWidth: 32, mt: 1 }}>
                    <CircleIcon sx={{ fontSize: 8, color: "secondary.main" }} />
                 </ListItemIcon>
                 <ListItemText 
                    primary={<Typography sx={{ fontWeight: 700, color: "text.primary", mb: 0.5 }}>Datos identificativos</Typography>}
                    secondary={<Typography sx={{ color: "text.secondary" }}>Nombre, email, número de teléfono.</Typography>}
                 />
              </ListItem>
              <ListItem disableGutters sx={{ alignItems: "flex-start", py: 1 }}>
                 <ListItemIcon sx={{ minWidth: 32, mt: 1 }}>
                    <CircleIcon sx={{ fontSize: 8, color: "secondary.main" }} />
                 </ListItemIcon>
                 <ListItemText 
                    primary={<Typography sx={{ fontWeight: 700, color: "text.primary", mb: 0.5 }}>Datos de salud</Typography>}
                    secondary={<Typography sx={{ color: "text.secondary" }}>Información estrictamente relevante para la terapia psicológica.</Typography>}
                 />
              </ListItem>
            </List>

            <Typography sx={{ mb: 2, color: "text.primary", fontSize: "1.05rem", fontWeight: 700 }}>
              Finalidades principales del tratamiento:
            </Typography>
            <List disablePadding sx={{ pl: 2 }}>
              {["Gestión y programación de citas y sesiones de terapia.", "Comunicación profesional y seguimiento del paciente.", "Mejora continua de nuestros servicios clínicos."].map((item, idx) => (
                <ListItem key={idx} disableGutters sx={{ alignItems: "center", py: 0.75 }}>
                   <ListItemIcon sx={{ minWidth: 32 }}>
                      <CircleIcon sx={{ fontSize: 8, color: "primary.main" }} />
                   </ListItemIcon>
                   <ListItemText primary={<Typography sx={{ color: "text.primary" }}>{item}</Typography>} />
                </ListItem>
              ))}
            </List>
          </Box>

          <Divider sx={{ opacity: 0.6 }} />

          {/* 3. Tus Derechos ARCO */}
          <Box>
            <Typography variant="h5" sx={{ fontWeight: 700, color: "primary.main", mb: 3 }}>
              3. Tus Derechos ARCO
            </Typography>
            <Typography sx={{ color: "text.secondary", fontSize: "1.05rem", mb: 4, lineHeight: 1.6 }}>
              En cualquier momento puedes ejercer tus derechos sobre tus datos enviando una solicitud formal a <strong>contacto@protegetupsique.com</strong>.
            </Typography>
            
            <Grid container spacing={3}>
              {[
                { title: "Acceso", desc: "Solicitar información detallada sobre tus datos almacenados y su uso." },
                { title: "Rectificación", desc: "Actualizar o corregir información inexacta en tu expediente." },
                { title: "Cancelación", desc: "Solicitar la eliminación definitiva de tus datos personales." },
                { title: "Oposición", desc: "Limitar o negarte al uso de tus datos para fines específicos." }
              ].map((derecho, idx) => (
                <Grid size={{ xs: 12, sm: 6 }} key={idx}>
                  <Box 
                    sx={{ 
                      p: 4, 
                      border: "1px solid", 
                      borderColor: "rgba(0,0,0,0.08)", 
                      borderRadius: 0, /* Estética premium y estricta */
                      height: "100%", 
                      bgcolor: "#FFFFFF",
                      transition: "box-shadow 0.2s",
                      "&:hover": {
                        boxShadow: "0px 10px 30px rgba(0, 74, 173, 0.05)"
                      }
                    }}
                  >
                    <Typography sx={{ fontWeight: 800, color: "primary.main", mb: 1, letterSpacing: "-0.01em" }}>
                      {derecho.title}
                    </Typography>
                    <Typography sx={{ color: "text.secondary", fontSize: "0.95rem", lineHeight: 1.6 }}>
                      {derecho.desc}
                    </Typography>
                  </Box>
                </Grid>
              ))}
            </Grid>
          </Box>

          <Divider sx={{ opacity: 0.6 }} />

          {/* 4. Política de Cookies */}
          <Box>
            <Typography variant="h5" sx={{ fontWeight: 700, color: "primary.main", mb: 3 }}>
              4. Política de Cookies
            </Typography>
            <Typography sx={{ color: "text.secondary", fontSize: "1.05rem", mb: 4, lineHeight: 1.6 }}>
              Utilizamos cookies para garantizar el correcto funcionamiento del sitio y mejorar la experiencia de usuario.
            </Typography>
            
            <Box sx={{ display: "flex", flexDirection: "column", gap: 3, mb: 5 }}>
              <Box sx={{ display: "flex", justifyContent: "space-between", alignItems: "center", borderBottom: "1px solid", borderColor: "rgba(0,0,0,0.08)", pb: 2 }}>
                <Typography sx={{ fontWeight: 700, color: "text.primary" }}>Cookies Esenciales</Typography>
                <Typography sx={{ color: "text.secondary", textAlign: "right" }}>Funcionamiento básico y seguridad del sitio.</Typography>
              </Box>
              <Box sx={{ display: "flex", justifyContent: "space-between", alignItems: "center", borderBottom: "1px solid", borderColor: "rgba(0,0,0,0.08)", pb: 2 }}>
                <Typography sx={{ fontWeight: 700, color: "text.primary" }}>Cookies Analíticas</Typography>
                <Typography sx={{ color: "text.secondary", textAlign: "right" }}>Métricas de Google Analytics (totalmente anonimizadas).</Typography>
              </Box>
            </Box>
            
            <Link 
              component={RouterLink} 
              to="/politica-cookies"
              underline="always"
              sx={{ 
                color: "primary.main", 
                fontWeight: 700, 
                letterSpacing: "-0.01em",
                "&:hover": { color: "secondary.main" } 
              }}
            >
              Consultar la política completa de cookies
            </Link>
          </Box>

        </Box>

        {/* Bloque de Contacto / DPO */}
        <Box 
          sx={{ 
            mt: 12, 
            p: { xs: 4, md: 6 }, 
            bgcolor: "primary.main", 
            color: "#FFFFFF", 
            borderRadius: 0, /* Consistencia con diseño estricto */
            textAlign: "center" 
          }}
        >
           <Typography variant="h4" sx={{ fontWeight: 900, mb: 2, letterSpacing: "-0.02em" }}>
             ¿Necesitas más información?
           </Typography>
           <Typography sx={{ color: "rgba(255,255,255,0.8)", mb: 4, fontSize: "1.1rem" }}>
             Ponte en contacto directo con nuestro Delegado de Protección de Datos.
           </Typography>
           <Link
             href="mailto:protecciondedatos@protegetupsique.com"
             underline="none"
             sx={{
               display: "inline-block",
               bgcolor: "secondary.main",
               color: "primary.main",
               px: 5,
               py: 2,
               fontWeight: 800,
               textTransform: "uppercase",
               letterSpacing: "0.05em",
               transition: "all 0.2s",
               "&:hover": {
                 bgcolor: "#FFFFFF",
                 transform: "translateY(-2px)"
               }
             }}
           >
             Contactar Ahora
           </Link>
        </Box>
      </Container>
    </Box>
  );
};

export default PrivacyPolicy;