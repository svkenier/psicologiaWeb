import { Box, Container, Typography, Accordion, AccordionSummary, AccordionDetails } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import { motion } from "framer-motion";
import { fadeInUp, staggerContainer, viewport } from "../utils/animations";

const FAQS = [
  {
    pregunta: "¿Cuánto dura una sesión?",
    respuesta: "Cada sesión clínica tiene una duración de 50 minutos. Este es el tiempo estándar internacional que permite un desarrollo terapéutico óptimo sin fatiga cognitiva.",
  },
  {
    pregunta: "¿Trabajan con seguros médicos?",
    respuesta: "Actualmente no trabajamos con seguros médicos ni pólizas de salud. Todas nuestras consultas son de atención particular.",
  },
  {
    pregunta: "¿Cómo funciona la modalidad online?",
    respuesta: "Las sesiones online se realizan a través de Google Meet o Zoom, manteniendo exactamente el mismo rigor clínico y confidencialidad que una sesión presencial. Solo requieres una conexión estable y un espacio privado.",
  },
  {
    pregunta: "¿Qué esperar de la primera consulta?",
    respuesta: "La primera sesión es una entrevista de evaluación. Exploraremos el motivo principal de consulta, tu historia clínica básica y definiremos juntos los objetivos terapéuticos a trabajar.",
  },
];

export default function FAQSection() {
  return (
    <Box
      id="faq"
      component="section"
      sx={{
        bgcolor: "#FFFFFF",
        py: { xs: 12, md: 20 },
      }}
    >
      <Container maxWidth="md">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={viewport}
        >
          <motion.div variants={fadeInUp}>
            <Typography
              variant="h2"
              sx={{
                color: "primary.main",
                fontWeight: 900,
                fontSize: { xs: "2.5rem", md: "3.5rem" },
                lineHeight: 1.1,
                letterSpacing: "-0.03em",
                mb: 10,
              }}
            >
              Preguntas frecuentes.
            </Typography>
          </motion.div>

          <Box>
            {FAQS.map((faq, index) => (
              <motion.div key={index} variants={fadeInUp}>
                <Accordion
                  elevation={0}
                  disableGutters
                  square
                  sx={{
                    bgcolor: "transparent",
                    borderBottom: "1px solid",
                    borderColor: "divider",
                    "&:before": { display: "none" },
                  }}
                >
                  <AccordionSummary
                    expandIcon={<AddIcon sx={{ color: "primary.main" }} />}
                    sx={{
                      px: 0,
                      py: 2,
                      "& .MuiAccordionSummary-content": { my: 0 },
                    }}
                  >
                    <Typography
                      component="h3"
                      sx={{
                        fontWeight: 700,
                        fontSize: "1.25rem",
                        color: "text.primary",
                      }}
                    >
                      {faq.pregunta}
                    </Typography>
                  </AccordionSummary>
                  <AccordionDetails sx={{ px: 0, pb: 4 }}>
                    <Typography
                      sx={{
                        color: "text.secondary",
                        lineHeight: 1.7,
                        fontSize: "1.05rem",
                      }}
                    >
                      {faq.respuesta}
                    </Typography>
                  </AccordionDetails>
                </Accordion>
              </motion.div>
            ))}
          </Box>
        </motion.div>
      </Container>
    </Box>
  );
}
