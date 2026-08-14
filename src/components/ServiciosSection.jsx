import {
  Box,
  Container,
  Typography,
  Button,
  Chip,
  Card,
  CardContent,
  Stack,
  Divider,
} from "@mui/material";
import { motion } from "framer-motion";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import PersonOutlineIcon from "@mui/icons-material/PersonOutlined";
import FavoriteOutlinedIcon from "@mui/icons-material/FavoriteOutlined";
import EmojiPeopleIcon from "@mui/icons-material/EmojiPeople";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import { fadeInUp, staggerContainer, viewport } from "../utils/animations";

const WHATSAPP_URL = "https://wa.me/584127713052";

const SERVICIOS = [
  {
    id: "terapia-individual",
    icon: PersonOutlineIcon,
    iconBg: "#F0FDF4",
    iconColor: "#4CAF78",
    tag: "Área Clínica",
    title: "Terapia Individual",
    description:
      "Un espacio terapéutico seguro y confidencial para trabajar patrones emocionales, creencias limitantes y estrategias de afrontamiento. Enfoque en resultados concretos y medibles.",
    features: [
      "Gestión emocional y regulación del estado de ánimo",
      "Manejo del estrés, ansiedad y depresión",
      "Autoconocimiento y crecimiento personal",
    ],
  },
  {
    id: "terapia-pareja",
    icon: FavoriteOutlinedIcon,
    iconBg: "#F0FDF4",
    iconColor: "#4CAF78",
    tag: "Área Clínica",
    title: "Terapia de Pareja",
    description:
      "Mejora la comunicación, resuelve conflictos recurrentes y reconstruye la confianza. Herramientas basadas en evidencia para construir una relación más sana y funcional.",
    features: [
      "Comunicación asertiva y escucha activa",
      "Resolución de conflictos y negociación",
      "Reconstrucción del vínculo y la intimidad",
    ],
  },
  {
    id: "psicologia-adolescentes",
    icon: EmojiPeopleIcon,
    iconBg: "#F0FDF4",
    iconColor: "#4CAF78",
    tag: "Área Clínica",
    title: "Psicología para Adolescentes",
    description:
      "Apoyo especializado para jóvenes que navegan identidad, relaciones sociales, presión académica o conflictos familiares. Intervención temprana para un desarrollo emocional saludable.",
    features: [
      "Construcción de identidad y autoestima",
      "Gestión de emociones y conducta",
      "Apoyo en contexto académico y social",
    ],
  },
];

export default function ServiciosSection() {
  return (
    <Box
      id="servicios"
      component="section"
      aria-label="Servicios clínicos"
      sx={{
        py: { xs: 10, md: 14 },
        bgcolor: "background.default",
      }}
    >
      <Container maxWidth="lg">
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
                label="Servicios Clínicos"
                size="small"
                sx={{
                  mb: 2.5,
                  fontWeight: 700,
                  fontSize: "0.78rem",
                  bgcolor: "rgba(0,74,173,0.08)",
                  color: "primary.main",
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
                Terapia especializada para{" "}
                <Box component="span" sx={{ color: "primary.main" }}>
                  cada etapa de tu vida
                </Box>
              </Typography>
            </motion.div>

            <motion.div variants={fadeInUp}>
              <Typography
                variant="body1"
                color="text.secondary"
                sx={{ maxWidth: 580, mx: "auto", fontSize: "1.05rem", lineHeight: 1.8 }}
              >
                Abordamos tus necesidades desde un enfoque clínico basado en evidencia,
                con técnicas DBT y estrategias adaptadas a tu situación particular.
              </Typography>
            </motion.div>
          </Box>
        </motion.div>

        {/* ── Service cards grid ── */}
        <Box
          sx={{
            display: "grid",
            gridTemplateColumns: {
              xs: "1fr",
              sm: "1fr 1fr",
              md: "repeat(3, 1fr)",
            },
            gap: 3,
          }}
        >
          {SERVICIOS.map((servicio, index) => {
            const IconComponent = servicio.icon;
            return (
              <motion.div
                key={servicio.id}
                variants={fadeInUp}
                initial="hidden"
                whileInView="visible"
                viewport={viewport}
                transition={{ delay: index * 0.1 }}
              >
                <Card
                  sx={{
                    height: "100%",
                    display: "flex",
                    flexDirection: "column",
                    border: "1px solid",
                    borderColor: "divider",
                    borderBottom: "1px solid",
                    borderBottomColor: "divider",
                    boxShadow: "0px 4px 20px rgba(0,74,173,0.07)",
                    transition: "all 0.3s cubic-bezier(0.22,1,0.36,1)",
                    "&:hover": {
                      boxShadow: "0px 16px 40px rgba(0,74,173,0.14)",
                      transform: "translateY(-6px)",
                      borderColor: "primary.main",
                      borderBottomColor: "#7ED9A3",
                      borderBottomWidth: "4px",
                    },
                  }}
                >
                  <CardContent sx={{ p: 3.5, display: "flex", flexDirection: "column", height: "100%" }}>
                    {/* Tag */}
                    <Typography
                      variant="overline"
                      sx={{
                        fontSize: "0.68rem",
                        fontWeight: 700,
                        color: "text.secondary",
                        letterSpacing: "0.1em",
                        mb: 2,
                        display: "block",
                      }}
                    >
                      {servicio.tag}
                    </Typography>

                    {/* Icon */}
                    <Box
                      aria-hidden="true"
                      sx={{
                        width: 56,
                        height: 56,
                        bgcolor: servicio.iconBg,
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        mb: 2.5,
                      }}
                    >
                      <IconComponent sx={{ fontSize: 28, color: servicio.iconColor }} />
                    </Box>

                    {/* Title */}
                    <Typography
                      variant="h5"
                      sx={{ fontWeight: 700, mb: 1.5, color: "text.primary" }}
                    >
                      {servicio.title}
                    </Typography>

                    {/* Description */}
                    <Typography
                      variant="body2"
                      color="text.secondary"
                      sx={{ lineHeight: 1.75, mb: 3 }}
                    >
                      {servicio.description}
                    </Typography>

                    <Divider sx={{ mb: 2.5 }} />

                    {/* Feature list */}
                    <Stack spacing={1.2} sx={{ mb: 3.5, flexGrow: 1 }}>
                      {servicio.features.map((feat) => (
                        <Box
                          key={feat}
                          sx={{ display: "flex", alignItems: "flex-start", gap: 1 }}
                        >
                          <CheckCircleIcon
                            sx={{
                              fontSize: 17,
                              color: "secondary.dark",
                              mt: 0.2,
                              flexShrink: 0,
                            }}
                          />
                          <Typography
                            variant="body2"
                            sx={{ color: "text.secondary", lineHeight: 1.5 }}
                          >
                            {feat}
                          </Typography>
                        </Box>
                      ))}
                    </Stack>

                    {/* CTA */}
                    <Button
                      id={`servicio-cta-${servicio.id}`}
                      variant="outlined"
                      color="primary"
                      fullWidth
                      href={WHATSAPP_URL}
                      target="_blank"
                      rel="noopener noreferrer"
                      startIcon={<WhatsAppIcon />}
                      sx={{
                        borderWidth: "1.5px",
                        "&:hover": { borderWidth: "1.5px" },
                        mt: "auto",
                      }}
                    >
                      Consultar por WhatsApp
                    </Button>
                  </CardContent>
                </Card>
              </motion.div>
            );
          })}
        </Box>
      </Container>
    </Box>
  );
}
