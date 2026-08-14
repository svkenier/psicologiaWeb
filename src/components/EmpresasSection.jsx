import { Box, Container, Typography, Button } from "@mui/material";
import { motion } from "framer-motion";
import { fadeInUp, staggerContainer, viewport } from "../utils/animations";

const WHATSAPP_B2B_URL = "https://wa.me/584127713052?text=Hola,%20me%20interesa%20informaci%C3%B3n%20sobre%20los%20talleres%20corporativos.";

const TEMAS = [
  "Liderazgo Resiliente y Gestión de Equipos",
  "Inteligencia Emocional en el Entorno Laboral",
  "Prevención del Síndrome de Burnout",
  "Comunicación Asertiva y Resolución de Conflictos",
  "Manejo del Estrés y Productividad Sostenible",
];

export default function EmpresasSection() {
  return (
    <Box
      id="empresas"
      component="section"
      sx={{
        bgcolor: "#FFFFFF",
        py: { xs: 12, md: 20 },
        borderTop: "1px solid",
        borderColor: "divider",
      }}
    >
      <Container maxWidth="lg">
        <Box
          sx={{
            display: "grid",
            gridTemplateColumns: { xs: "1fr", md: "1fr 1.2fr" },
            gap: { xs: 8, md: 16 },
          }}
        >
          {/* LEFT: TEXT */}
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={viewport}
          >
            <motion.div variants={fadeInUp}>
              <Typography
                variant="overline"
                sx={{
                  color: "primary.main",
                  fontWeight: 600,
                  letterSpacing: "0.15em",
                  fontSize: "0.75rem",
                  display: "block",
                  mb: 3,
                }}
              >
                Servicios B2B
              </Typography>
            </motion.div>
            <motion.div variants={fadeInUp}>
              <Typography
                variant="h2"
                sx={{
                  color: "text.primary",
                  fontWeight: 900,
                  fontSize: { xs: "2.5rem", md: "3.5rem" },
                  lineHeight: 1.1,
                  letterSpacing: "-0.03em",
                  mb: 5,
                }}
              >
                Salud mental para organizaciones que lideran.
              </Typography>
            </motion.div>
            <motion.div variants={fadeInUp}>
              <Typography
                variant="body1"
                sx={{
                  color: "text.secondary",
                  fontSize: "1.1rem",
                  lineHeight: 1.8,
                  mb: 6,
                  maxWidth: 480,
                }}
              >
                Diseñamos intervenciones clínicas y talleres especializados para empresas. 
                Fomentamos entornos de trabajo psicológicamente seguros, previniendo el burnout 
                y potenciando el rendimiento mediante la gestión emocional basada en evidencia.
              </Typography>
            </motion.div>
            <motion.div variants={fadeInUp}>
              <Button
                href={WHATSAPP_B2B_URL}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Solicitar Propuesta Corporativa por WhatsApp"
                sx={{
                  bgcolor: "primary.main",
                  color: "#FFFFFF",
                  px: 4,
                  py: 1.8,
                  borderRadius: 0,
                  fontWeight: 600,
                  letterSpacing: "0.05em",
                  textTransform: "none",
                  fontSize: "1rem",
                  "&:hover": {
                    bgcolor: "#003380",
                  },
                }}
              >
                Solicitar Propuesta Corporativa
              </Button>
            </motion.div>
          </motion.div>

          {/* RIGHT: LIST */}
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={viewport}
          >
            <Box sx={{ 
                pt: { xs: 0, md: 4 },
                display: "flex",
                flexDirection: "column",
                gap: 4
             }}>
              <Typography variant="h3" sx={{ fontWeight: 800, fontSize: "1.5rem", color: "primary.main", mb: 2 }}>
                Áreas de Intervención
              </Typography>
              {TEMAS.map((tema, index) => (
                <motion.div key={index} variants={fadeInUp}>
                  <Box sx={{ display: "flex", alignItems: "flex-start", gap: 3 }}>
                    <Typography 
                        sx={{ 
                            color: "#7ED9A3", 
                            fontWeight: 900, 
                            fontSize: "1.5rem", 
                            lineHeight: 1 
                        }}
                    >
                      {String(index + 1).padStart(2, '0')}
                    </Typography>
                    <Box sx={{ borderBottom: "1px solid", borderColor: "divider", pb: 3, flexGrow: 1 }}>
                        <Typography
                        variant="h4"
                        sx={{
                            color: "text.primary",
                            fontWeight: 600,
                            fontSize: "1.2rem",
                        }}
                        >
                        {tema}
                        </Typography>
                    </Box>
                  </Box>
                </motion.div>
              ))}
            </Box>
          </motion.div>
        </Box>
      </Container>
    </Box>
  );
}
