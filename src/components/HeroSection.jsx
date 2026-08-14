import {
  Box,
  Container,
  Typography,
  Button,
} from "@mui/material";
import { motion } from "framer-motion";
import { fadeInUp, staggerContainer } from "../utils/animations";

const WHATSAPP_URL = "https://wa.me/584127713052";

const STATS = [
  { value: "7+", label: "Años de experiencia" },
  { value: "DBT", label: "Formación clínica" },
  { value: "100+", label: "Pacientes atendidos" },
];

export default function HeroSection() {
  return (
    <Box
      id="hero"
      component="section"
      sx={{
        bgcolor: "#FFFFFF",
        pt: { xs: 14, md: 20 },
        pb: { xs: 10, md: 16 },
      }}
    >
      <Container maxWidth="lg">
        <Box
          sx={{
            display: "grid",
            gridTemplateColumns: { xs: "1fr", md: "1.2fr 1fr" },
            gap: { xs: 8, md: 12 },
          }}
        >
          {/* LEFT CONTENT */}
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            animate="visible"
          >
            <motion.div variants={fadeInUp}>
              <Typography
                variant="overline"
                sx={{
                  display: "block",
                  color: "text.primary",
                  fontWeight: 600,
                  letterSpacing: "0.15em",
                  fontSize: "0.75rem",
                  mb: 4,
                }}
              >
                Psicólogo Clínico <Box component="span" sx={{ color: "#7ED9A3", mx: 1 }}>/</Box> Terapia DBT
              </Typography>
            </motion.div>

            <motion.div variants={fadeInUp}>
              <Typography
                variant="h1"
                sx={{
                  color: "primary.main",
                  fontWeight: 900,
                  fontSize: { xs: "3rem", md: "4.5rem" },
                  lineHeight: 1.05,
                  letterSpacing: "-0.03em",
                  mb: 4,
                }}
              >
                El cambio que buscas comienza aquí.
              </Typography>
            </motion.div>

            <motion.div variants={fadeInUp}>
              <Typography
                variant="body1"
                sx={{
                  color: "text.secondary",
                  fontSize: { xs: "1.1rem", md: "1.25rem" },
                  lineHeight: 1.7,
                  maxWidth: 500,
                  mb: 6,
                }}
              >
                Terapia clínica basada en evidencia. Resultados reales mediante 
                estrategias estructuradas y adaptadas a tu situación particular.
              </Typography>
            </motion.div>

            <motion.div variants={fadeInUp}>
              <Button
                href={WHATSAPP_URL}
                target="_blank"
                rel="noopener noreferrer"
                sx={{
                  bgcolor: "primary.main",
                  color: "#FFFFFF",
                  px: 5,
                  py: 2,
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
                Contactar
              </Button>
            </motion.div>

            {/* STATS */}
            <motion.div variants={fadeInUp}>
              <Box 
                sx={{ 
                  display: "flex", 
                  gap: { xs: 4, md: 8 }, 
                  mt: { xs: 8, md: 12 },
                  pt: 4,
                  borderTop: "1px solid",
                  borderColor: "divider"
                }}
              >
                {STATS.map((stat) => (
                  <Box key={stat.label}>
                    <Typography 
                      sx={{ 
                        color: "primary.main", 
                        fontWeight: 900, 
                        fontSize: "2rem",
                        lineHeight: 1,
                        mb: 1
                      }}
                    >
                      {stat.value}
                    </Typography>
                    <Typography 
                      sx={{ 
                        color: "text.secondary", 
                        fontSize: "0.75rem", 
                        fontWeight: 600,
                        textTransform: "uppercase",
                        letterSpacing: "0.05em"
                      }}
                    >
                      {stat.label}
                    </Typography>
                  </Box>
                ))}
              </Box>
            </motion.div>

          </motion.div>

          {/* RIGHT IMAGE */}
          <motion.div
            variants={fadeInUp}
            initial="hidden"
            animate="visible"
          >
            <Box
              component="img"
              src="https://images.unsplash.com/photo-1573497620053-ea5300f94f21?auto=format&fit=crop&w=700&q=80"
              alt="Sesión de terapia clínica"
              sx={{
                width: "100%",
                height: "100%",
                minHeight: { xs: 400, md: 600 },
                objectFit: "cover",
                display: "block",
                filter: "grayscale(10%)",
              }}
            />
          </motion.div>
        </Box>
      </Container>
    </Box>
  );
}
