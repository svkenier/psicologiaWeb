import { useState } from "react";
import {
  Box,
  Container,
  Typography,
  Chip,
  Accordion,
  AccordionSummary,
  AccordionDetails,
} from "@mui/material";
import { motion } from "framer-motion";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { fadeInUp, staggerContainer, viewport } from "../utils/animations";

const FAQS = [
  {
    id: "duracion",
    pregunta: "¿Cuánto dura una sesión de terapia?",
    respuesta:
      "Cada sesión tiene una duración de 50 minutos. Este tiempo está diseñado para permitir una exploración profunda de los temas trabajados, manteniendo un ritmo terapéutico efectivo sin generar agotamiento.",
  },
  {
    id: "frecuencia",
    pregunta: "¿Con qué frecuencia debo asistir a terapia?",
    respuesta:
      "La frecuencia ideal es semanal, especialmente en las primeras etapas del proceso. A medida que avanzas, podemos espaciar las sesiones a quincenal. La consistencia es clave para obtener resultados sostenibles.",
  },
  {
    id: "online",
    pregunta: "¿Cómo funciona la modalidad online?",
    respuesta:
      "Las sesiones online se realizan por videollamada con la misma estructura y efectividad que la presencial. Solo necesitas un dispositivo con cámara, micrófono y una conexión estable a internet. La plataforma se coordina directamente por WhatsApp.",
  },
  {
    id: "dbt",
    pregunta: "¿Qué es la Terapia Dialéctica Conductual (DBT) y para qué sirve?",
    respuesta:
      "La DBT es una terapia cognitivo-conductual desarrollada por la Dra. Marsha Linehan. Está especialmente indicada para personas que experimentan emociones muy intensas, dificultades en relaciones interpersonales, comportamientos impulsivos o estados de ánimo inestables. Combina técnicas de mindfulness, regulación emocional, tolerancia al malestar y habilidades interpersonales.",
  },
  {
    id: "primera-sesion",
    pregunta: "¿Qué ocurre en la primera consulta?",
    respuesta:
      "La primera sesión es una evaluación inicial donde exploramos tu situación actual, tu historia y tus objetivos terapéuticos. No tiene ningún compromiso de continuidad. Al finalizar, recibirás una orientación profesional sobre el enfoque más adecuado para tu caso.",
  },
  {
    id: "confidencialidad",
    pregunta: "¿Las sesiones son completamente confidenciales?",
    respuesta:
      "Sí, absolutamente. Todo lo que se trabaja en consulta está protegido por el secreto profesional del psicólogo. La información compartida no será divulgada a terceros bajo ninguna circunstancia, salvo en los casos excepcionales establecidos por la ley (riesgo vital inminente).",
  },
  {
    id: "pareja",
    pregunta: "¿La terapia de pareja requiere que los dos asistan desde el inicio?",
    respuesta:
      "Lo ideal es que ambos miembros de la pareja participen desde la primera sesión. Sin embargo, si uno de los dos aún no está seguro, es posible comenzar con una consulta individual para aclarar dudas y definir si la terapia de pareja es el camino adecuado.",
  },
  {
    id: "precio",
    pregunta: "¿Cuál es el costo por sesión?",
    respuesta:
      "Los honorarios se informan directamente por WhatsApp, ya que pueden variar según la modalidad (presencial/online) y el tipo de servicio. Contáctame para recibir toda la información sin compromiso.",
  },
];

export default function FAQSection() {
  const [expanded, setExpanded] = useState(false);

  const handleChange = (panel) => (_event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };

  return (
    <Box
      id="faq"
      component="section"
      aria-label="Preguntas frecuentes"
      sx={{
        py: { xs: 10, md: 14 },
        bgcolor: "background.paper",
      }}
    >
      <Container maxWidth="md">
        {/* ── Section header ── */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={viewport}
        >
          <Box sx={{ textAlign: "center", mb: { xs: 6, md: 8 } }}>
            <motion.div variants={fadeInUp}>
              <Chip
                label="Preguntas Frecuentes"
                size="small"
                sx={{
                  mb: 2.5,
                  fontWeight: 700,
                  fontSize: "0.78rem",
                  bgcolor: "#F0FDF4",
                  color: "#2E7D32",
                  border: "1px solid #7ED9A3",
                  px: 0.5,
                }}
              />
            </motion.div>

            <motion.div variants={fadeInUp}>
              <Typography
                variant="h2"
                sx={{
                  fontSize: { xs: "2rem", md: "2.6rem" },
                  mb: 2,
                  letterSpacing: "-0.02em",
                }}
              >
                Todo lo que necesitas{" "}
                <Box
                  component="span"
                  sx={{
                    color: "primary.main",
                    display: "inline-block",
                    borderBottom: "4px solid #7ED9A3",
                    paddingBottom: "2px",
                  }}
                >
                  saber
                </Box>
              </Typography>
            </motion.div>

            <motion.div variants={fadeInUp}>
              <Typography
                variant="body1"
                color="text.secondary"
                sx={{ maxWidth: 500, mx: "auto", fontSize: "1.05rem", lineHeight: 1.8 }}
              >
                Resolvemos las dudas más comunes antes de que des el primer paso.
              </Typography>
            </motion.div>
          </Box>
        </motion.div>

        {/* ── Acordeones ── */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={viewport}
        >
          <Box sx={{ display: "flex", flexDirection: "column", gap: 1.5 }}>
            {FAQS.map((faq) => {
              const isOpen = expanded === faq.id;
              return (
                <motion.div key={faq.id} variants={fadeInUp}>
                  <Accordion
                    expanded={isOpen}
                    onChange={handleChange(faq.id)}
                    disableGutters
                    elevation={0}
                    sx={{
                      /* Esquinas 100% cuadradas */
                      borderRadius: "0 !important",
                      border: "1px solid",
                      borderColor: isOpen ? "#7ED9A3" : "divider",
                      /* Borde lateral verde cuando está expandido */
                      borderLeft: isOpen ? "4px solid #7ED9A3" : "4px solid transparent",
                      bgcolor: isOpen ? "#F0FDF4" : "background.default",
                      transition: "all 0.25s ease",
                      /* Eliminar la línea divisora interna de MUI */
                      "&:before": { display: "none" },
                      "&:not(:last-child)": {
                        borderBottom: "1px solid",
                        borderBottomColor: isOpen ? "#7ED9A3" : "divider",
                      },
                    }}
                  >
                    <AccordionSummary
                      expandIcon={
                        <ExpandMoreIcon
                          sx={{
                            color: isOpen ? "#4CAF78" : "text.secondary",
                            transition: "color 0.25s ease",
                          }}
                        />
                      }
                      aria-controls={`faq-${faq.id}-content`}
                      id={`faq-${faq.id}-header`}
                      sx={{
                        px: 3,
                        py: 0.5,
                        minHeight: 64,
                        "& .MuiAccordionSummary-content": { my: 1.5 },
                      }}
                    >
                      <Typography
                        variant="subtitle1"
                        sx={{
                          fontWeight: 600,
                          color: isOpen ? "primary.main" : "text.primary",
                          lineHeight: 1.45,
                          transition: "color 0.25s ease",
                        }}
                      >
                        {faq.pregunta}
                      </Typography>
                    </AccordionSummary>

                    <AccordionDetails sx={{ px: 3, pt: 0, pb: 3 }}>
                      <Typography
                        variant="body2"
                        color="text.secondary"
                        sx={{ lineHeight: 1.85, fontSize: "0.975rem" }}
                      >
                        {faq.respuesta}
                      </Typography>
                    </AccordionDetails>
                  </Accordion>
                </motion.div>
              );
            })}
          </Box>
        </motion.div>
      </Container>
    </Box>
  );
}
