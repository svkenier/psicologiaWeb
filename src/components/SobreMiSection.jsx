import { Box, Container, Typography } from "@mui/material";
import { motion } from "framer-motion";
import { fadeInUp, staggerContainer, viewport } from "../utils/animations";

export default function SobreMiSection() {
  return (
    <Box
      id="sobre-mi"
      component="section"
      sx={{
        bgcolor: "#FFFFFF",
        py: { xs: 12, md: 20 },
      }}
    >
      <Container maxWidth="lg">
        <Box
          sx={{
            display: "grid",
            gridTemplateColumns: { xs: "1fr", md: "0.8fr 1.2fr" },
            gap: { xs: 8, md: 16 },
            alignItems: "start",
          }}
        >
          {/* LEFT: PHOTO */}
          <motion.div
            variants={fadeInUp}
            initial="hidden"
            whileInView="visible"
            viewport={viewport}
          >
            <Box
              component="img"
              src="/foto-ct.JPG"
              alt="Consultorio Psicológico Protege Tu Psique - Carlos Torres"
              loading="lazy"
              width="600"
              height="600"
              sx={{
                width: "100%",
                height: "auto",
                display: "block",
                filter: "grayscale(10%)",
              }}
            />
          </motion.div>

          {/* RIGHT: TEXT */}
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
                Director Clínico
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
                Carlos Torres
              </Typography>
            </motion.div>
            
            <motion.div variants={fadeInUp}>
              <Typography
                variant="body1"
                sx={{
                  color: "text.secondary",
                  fontSize: "1.1rem",
                  lineHeight: 1.8,
                  mb: 4,
                  maxWidth: 600,
                }}
              >
                Soy Psicólogo Clínico enfocado en terapias basadas en evidencia, 
                especialmente en la <strong>Terapia Dialéctica Conductual (DBT)</strong>. 
                Mi objetivo es proporcionar un espacio donde la ciencia psicológica y 
                la empatía convergen para generar cambios medibles y sostenibles en la vida de mis pacientes.
              </Typography>
            </motion.div>

            <motion.div variants={fadeInUp}>
              <Typography
                variant="body1"
                sx={{
                  color: "text.secondary",
                  fontSize: "1.1rem",
                  lineHeight: 1.8,
                  mb: 8,
                  maxWidth: 600,
                }}
              >
                A través de mi experiencia, he diseñado intervenciones que no solo se enfocan 
                en el alivio sintomático, sino en el desarrollo de habilidades robustas 
                de regulación emocional y eficacia interpersonal.
              </Typography>
            </motion.div>

            <motion.div variants={fadeInUp}>
                <Box sx={{ borderTop: "1px solid", borderColor: "divider", pt: 5, display: "flex", gap: { xs: 4, md: 8 } }}>
                    <Box>
                        <Typography sx={{ color: "primary.main", fontWeight: 900, fontSize: "1.5rem", mb: 0.5 }}>FPV</Typography>
                        <Typography sx={{ color: "text.secondary", fontWeight: 600, fontSize: "0.75rem", letterSpacing: "0.05em", textTransform: "uppercase" }}>Colegiado Activo</Typography>
                    </Box>
                    <Box>
                        <Typography sx={{ color: "primary.main", fontWeight: 900, fontSize: "1.5rem", mb: 0.5 }}>UCV</Typography>
                        <Typography sx={{ color: "text.secondary", fontWeight: 600, fontSize: "0.75rem", letterSpacing: "0.05em", textTransform: "uppercase" }}>Egresado</Typography>
                    </Box>
                </Box>
            </motion.div>
          </motion.div>
        </Box>
      </Container>
    </Box>
  );
}
