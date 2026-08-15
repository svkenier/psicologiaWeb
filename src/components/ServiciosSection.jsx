import {
  Box,
  Container,
  Typography,
} from "@mui/material";
import { motion } from "framer-motion";
import { fadeInUp, staggerContainer, viewport } from "../utils/animations";

const SERVICIOS = [
  {
    id: "terapia-individual",
    title: "Terapia Individual",
    description:
      "Un espacio terapéutico seguro para trabajar patrones emocionales, creencias disfuncionales y estrategias de afrontamiento. Enfoque en resultados concretos.",
    features: [
      "Depresión",
      "Ansiedad",
      "Duelo",
    ],
  },
  {
    id: "terapia-pareja",
    title: "Terapia de Pareja",
    description:
      "Mejora la comunicación, resuelve conflictos recurrentes y reconstruye la confianza con herramientas basadas en evidencias.",
    features: [
      "Comunicación asertiva",
      "Resolución de conflictos",
      "Reconstrucción del vínculo",
    ],
  },
  {
    id: "psicologia-adolescentes",
    title: "Terapia para Adolescentes",
    description:
      "Apoyo especializado para jóvenes que navegan identidad, relaciones sociales o conflictos familiares. Intervención temprana.",
    features: [
      "Autoconocimiento",
      "Gestión de Conducta",
      "Gestión Emocional",
    ],
  },
];

export default function ServiciosSection() {
  return (
    <Box
      id="servicios"
      component="section"
      sx={{
        bgcolor: "#FFFFFF",
        py: { xs: 12, md: 20 },
      }}
    >
      <Container maxWidth="lg">
        {/* HEADER */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={viewport}
        >
          <Box sx={{ mb: { xs: 10, md: 16 }, maxWidth: 700 }}>
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
                Área Clínica
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
                }}
              >
                Intervención especializada para cada etapa.
              </Typography>
            </motion.div>
          </Box>
        </motion.div>

        {/* GRID */}
        <Box
          sx={{
            display: "grid",
            gridTemplateColumns: { xs: "1fr", md: "repeat(3, 1fr)" },
            gap: { xs: 8, md: 12 },
          }}
        >
          {SERVICIOS.map((servicio, index) => (
            <motion.div
              key={servicio.id}
              variants={fadeInUp}
              initial="hidden"
              whileInView="visible"
              viewport={viewport}
              transition={{ delay: index * 0.1 }}
            >
              <Box
                sx={{
                  borderTop: "2px solid #004AAD",
                  pt: 4,
                  height: "100%",
                  display: "flex",
                  flexDirection: "column",
                  transition: "border-color 0.3s ease",
                  "&:hover": {
                    borderColor: "#7ED9A3",
                  }
                }}
              >
                <Typography
                  variant="h3"
                  sx={{
                    color: "primary.main",
                    fontWeight: 800,
                    fontSize: "1.5rem",
                    mb: 3,
                    letterSpacing: "-0.02em",
                  }}
                >
                  {servicio.title}
                </Typography>

                <Typography
                  variant="body1"
                  sx={{
                    color: "text.secondary",
                    lineHeight: 1.7,
                    mb: 5,
                  }}
                >
                  {servicio.description}
                </Typography>

                <Box sx={{ mt: "auto" }}>
                  {servicio.features.map((feat) => (
                    <Box
                      key={feat}
                      sx={{
                        display: "flex",
                        alignItems: "flex-start",
                        gap: 2,
                        mb: 2,
                      }}
                    >
                      <Box
                        sx={{
                          width: 4,
                          height: 4,
                          bgcolor: "#7ED9A3",
                          mt: 1.2,
                          flexShrink: 0,
                        }}
                      />
                      <Typography
                        variant="body2"
                        sx={{
                          color: "text.primary",
                          fontWeight: 500,
                          lineHeight: 1.5,
                        }}
                      >
                        {feat}
                      </Typography>
                    </Box>
                  ))}
                </Box>
              </Box>
            </motion.div>
          ))}
        </Box>
      </Container>
    </Box>
  );
}
