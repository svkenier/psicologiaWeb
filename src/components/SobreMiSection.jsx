import {
  Box,
  Container,
  Typography,
  Chip,
  Stack,
  Divider,
} from "@mui/material";
import { motion } from "framer-motion";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import SchoolIcon from "@mui/icons-material/School";
import WorkHistoryIcon from "@mui/icons-material/WorkHistory";
import MilitaryTechIcon from "@mui/icons-material/MilitaryTech";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import LaptopMacIcon from "@mui/icons-material/LaptopMac";
import { fadeInUp, fadeInLeft, fadeInRight, staggerContainer, viewport } from "../utils/animations";

const CREDENCIALES = [
  {
    icon: SchoolIcon,
    titulo: "Licenciado en Psicología Clínica",
    detalle: "Formación universitaria de excelencia académica",
  },
  {
    icon: MilitaryTechIcon,
    titulo: "Formación certificada en DBT",
    detalle: "Terapia Dialéctica Conductual — metodología basada en evidencia",
  },
  {
    icon: WorkHistoryIcon,
    titulo: "7 años de experiencia clínica",
    detalle: "Trayectoria sólida en atención individual, de pareja y adolescentes",
  },
  {
    icon: LocationOnIcon,
    titulo: "Atención presencial en Maracaibo",
    detalle: "Consultorio privado con ambiente seguro y confidencial",
  },
  {
    icon: LaptopMacIcon,
    titulo: "Modalidad online disponible",
    detalle: "Sesiones por videollamada para Venezuela y el exterior",
  },
];

const AREAS = [
  "Ansiedad y ataques de pánico",
  "Depresión y estados de ánimo",
  "Regulación emocional (DBT)",
  "Relaciones interpersonales",
  "Autoestima e identidad",
  "Gestión del estrés y burnout",
];

export default function SobreMiSection() {
  return (
    <Box
      id="sobre-mi"
      component="section"
      aria-label="Sobre el profesional Carlos Torres"
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
          <Box sx={{ textAlign: "center", mb: { xs: 7, md: 9 } }}>
            <motion.div variants={fadeInUp}>
              <Chip
                label="El Profesional"
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
                sx={{ fontSize: { xs: "2rem", md: "2.6rem" }, mb: 2, letterSpacing: "-0.02em" }}
              >
                Conoce a{" "}
                <Box
                  component="span"
                  sx={{
                    color: "primary.main",
                    display: "inline-block",
                    borderBottom: "4px solid #7ED9A3",
                    paddingBottom: "2px",
                  }}
                >
                  Carlos Torres
                </Box>
              </Typography>
            </motion.div>
            <motion.div variants={fadeInUp}>
              <Typography
                variant="body1"
                color="text.secondary"
                sx={{ maxWidth: 560, mx: "auto", fontSize: "1.05rem", lineHeight: 1.8 }}
              >
                Un profesional comprometido con tu bienestar, con enfoque en resultados
                reales y un acompañamiento cercano y ético.
              </Typography>
            </motion.div>
          </Box>
        </motion.div>

        {/* ── Main grid: foto + contenido ── */}
        <Box
          sx={{
            display: "grid",
            gridTemplateColumns: { xs: "1fr", md: "1fr 1.4fr" },
            gap: { xs: 6, md: 9 },
            alignItems: "start",
          }}
        >
          {/* ══ LEFT: Fotografía cuadrada ══ */}
          <motion.div
            variants={fadeInLeft}
            initial="hidden"
            whileInView="visible"
            viewport={viewport}
          >
            <Box sx={{ position: "relative" }}>
              {/* Contenedor cuadrado estricto */}
              <Box
                sx={{
                  width: "100%",
                  aspectRatio: "1 / 1",
                  overflow: "hidden",
                  position: "relative",
                }}
              >
                <Box
                  component="img"
                  src="/foto-ct.JPG"
                  alt="Carlos Torres, Psicólogo Clínico"
                  sx={{
                    width: "100%",
                    height: "100%",
                    objectFit: "cover",
                    objectPosition: "top center",
                    display: "block",
                  }}
                />
              </Box>

              {/* Línea de acento inferior verde menta */}
              <Box
                sx={{
                  height: "5px",
                  bgcolor: "#7ED9A3",
                  width: "100%",
                }}
              />

              {/* Tarjeta de nombre bajo la foto */}
              <Box
                sx={{
                  bgcolor: "primary.main",
                  px: 3,
                  py: 2,
                }}
              >
                <Typography
                  variant="h6"
                  sx={{ color: "#FFFFFF", fontWeight: 700, lineHeight: 1.2 }}
                >
                  Carlos Torres
                </Typography>
                <Typography
                  variant="caption"
                  sx={{ color: "rgba(255,255,255,0.75)", display: "block", mt: 0.3 }}
                >
                  Psicólogo Clínico · Formación en DBT
                </Typography>
              </Box>
            </Box>
          </motion.div>

          {/* ══ RIGHT: Información y credenciales ══ */}
          <motion.div
            variants={fadeInRight}
            initial="hidden"
            whileInView="visible"
            viewport={viewport}
          >
            <motion.div variants={staggerContainer} initial="hidden" whileInView="visible" viewport={viewport}>

              {/* Bio */}
              <motion.div variants={fadeInUp}>
                <Typography
                  variant="body1"
                  color="text.secondary"
                  sx={{ fontSize: "1.05rem", lineHeight: 1.85, mb: 4 }}
                >
                  Soy Carlos Torres, Psicólogo Clínico con{" "}
                  <strong style={{ color: "#0F172A" }}>7 años de experiencia</strong>{" "}
                  acompañando a personas, parejas y familias en procesos de cambio significativo.
                  Me especializo en{" "}
                  <strong style={{ color: "#0F172A" }}>
                    Terapia Dialéctica Conductual (DBT)
                  </strong>
                  , una de las metodologías más respaldadas por la evidencia científica para
                  el manejo de emociones intensas, relaciones interpersonales y comportamientos
                  autodestructivos.
                </Typography>
              </motion.div>

              {/* Divisor con acento verde */}
              <motion.div variants={fadeInUp}>
                <Box sx={{ display: "flex", alignItems: "center", gap: 2, mb: 3.5 }}>
                  <Box sx={{ width: 32, height: 3, bgcolor: "#7ED9A3" }} />
                  <Typography
                    variant="overline"
                    sx={{
                      color: "#2E7D32",
                      fontWeight: 700,
                      letterSpacing: "0.1em",
                      fontSize: "0.72rem",
                    }}
                  >
                    Formación y credenciales
                  </Typography>
                </Box>
              </motion.div>

              {/* Credenciales */}
              <motion.div variants={fadeInUp}>
                <Stack spacing={2.5} sx={{ mb: 4.5 }}>
                  {CREDENCIALES.map(({ icon: CredIcon, titulo, detalle }) => (
                    <Box
                      key={titulo}
                      sx={{ display: "flex", alignItems: "flex-start", gap: 2 }}
                    >
                      <Box
                        sx={{
                          width: 38,
                          height: 38,
                          bgcolor: "#F0FDF4",
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                          flexShrink: 0,
                          mt: 0.2,
                        }}
                      >
                        <CredIcon sx={{ fontSize: 20, color: "#4CAF78" }} />
                      </Box>
                      <Box>
                        <Typography
                          variant="subtitle2"
                          sx={{ fontWeight: 700, color: "text.primary", lineHeight: 1.3 }}
                        >
                          {titulo}
                        </Typography>
                        <Typography
                          variant="body2"
                          color="text.secondary"
                          sx={{ lineHeight: 1.6, mt: 0.3 }}
                        >
                          {detalle}
                        </Typography>
                      </Box>
                    </Box>
                  ))}
                </Stack>
              </motion.div>

              {/* Divisor con acento verde */}
              <motion.div variants={fadeInUp}>
                <Box sx={{ display: "flex", alignItems: "center", gap: 2, mb: 3 }}>
                  <Box sx={{ width: 32, height: 3, bgcolor: "#7ED9A3" }} />
                  <Typography
                    variant="overline"
                    sx={{
                      color: "#2E7D32",
                      fontWeight: 700,
                      letterSpacing: "0.1em",
                      fontSize: "0.72rem",
                    }}
                  >
                    Áreas de especialización
                  </Typography>
                </Box>
              </motion.div>

              {/* Áreas */}
              <motion.div variants={fadeInUp}>
                <Box
                  sx={{
                    display: "grid",
                    gridTemplateColumns: "1fr 1fr",
                    gap: 1.5,
                  }}
                >
                  {AREAS.map((area) => (
                    <Box
                      key={area}
                      sx={{ display: "flex", alignItems: "center", gap: 1 }}
                    >
                      <CheckCircleIcon sx={{ fontSize: 16, color: "#7ED9A3", flexShrink: 0 }} />
                      <Typography
                        variant="body2"
                        sx={{ color: "text.secondary", lineHeight: 1.5 }}
                      >
                        {area}
                      </Typography>
                    </Box>
                  ))}
                </Box>
              </motion.div>
            </motion.div>
          </motion.div>
        </Box>
      </Container>
    </Box>
  );
}
