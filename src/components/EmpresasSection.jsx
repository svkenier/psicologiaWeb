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
import BusinessCenterIcon from "@mui/icons-material/BusinessCenter";
import BoltIcon from "@mui/icons-material/Bolt";
import TimelineIcon from "@mui/icons-material/Timeline";
import GroupsIcon from "@mui/icons-material/Groups";
import TrendingDownIcon from "@mui/icons-material/TrendingDown";
import SentimentVeryDissatisfiedIcon from "@mui/icons-material/SentimentVeryDissatisfied";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import AssessmentIcon from "@mui/icons-material/Assessment";
import { fadeInUp, fadeInLeft, fadeInRight, staggerContainer, viewport } from "../utils/animations";

const WHATSAPP_URL = "https://wa.me/584127713052";

const PROBLEMS = [
  {
    icon: TrendingDownIcon,
    text: "Estrés laboral y burnout que reduce la productividad del equipo",
  },
  {
    icon: SentimentVeryDissatisfiedIcon,
    text: "Conflictos interpersonales que deterioran el clima organizacional",
  },
  {
    icon: GroupsIcon,
    text: "Alta rotación de personal por agotamiento emocional",
  },
];

const PAQUETES = [
  {
    id: "workshop-intensivo",
    icon: BoltIcon,
    iconBg: "#F0FDF4",
    iconColor: "#4CAF78",
    label: "Más popular",
    labelBg: "#F0FDF4",
    labelColor: "#4CAF78",
    title: "Workshop Intensivo",
    subtitle: "Intervención rápida y de alto impacto",
    formato: "1 sesión · 3 horas",
    participantes: "Hasta 30 personas",
    features: [
      "Diagnóstico grupal de necesidades",
      "Técnicas prácticas de regulación emocional",
      "Dinámicas de equipo y comunicación",
      "Material de apoyo digital",
    ],
    beneficio: "Resultados tangibles desde la primera sesión.",
  },
  {
    id: "programa-4-modulos",
    icon: TimelineIcon,
    iconBg: "#F0FDF4",
    iconColor: "#4CAF78",
    label: "Cambio sostenible",
    labelBg: "#F0FDF4",
    labelColor: "#4CAF78",
    title: "Programa de 4 Módulos",
    subtitle: "Transformación organizacional profunda",
    formato: "4 sesiones quincenales · 2h c/u",
    participantes: "Hasta 20 personas",
    features: [
      "Diagnóstico inicial y plan a medida",
      "Material didáctico completo por módulo",
      "Cultura organizacional saludable",
      "Seguimiento post-programa",
      "Informe ejecutivo para liderazgo",
    ],
    beneficio: "Cultura de bienestar sostenible en el tiempo.",
  },
];

export default function EmpresasSection() {
  return (
    <Box
      id="empresas"
      component="section"
      aria-label="Talleres y bienestar para empresas"
      sx={{
        py: { xs: 10, md: 14 },
        bgcolor: "#F0FDF4",
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* Decorative element */}
      <Box
        aria-hidden="true"
        sx={{
          position: "absolute",
          top: -100,
          right: -80,
          width: 400,
          height: 400,
          borderRadius: "50%",
          background: "radial-gradient(circle, rgba(0,74,173,0.05) 0%, transparent 70%)",
          pointerEvents: "none",
        }}
      />

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
                icon={<BusinessCenterIcon sx={{ fontSize: "1rem !important" }} />}
                label="Soluciones B2B"
                size="small"
                sx={{
                  mb: 2.5,
                  fontWeight: 700,
                  fontSize: "0.78rem",
                  bgcolor: "rgba(0,74,173,0.08)",
                  color: "primary.main",
                  px: 0.5,
                  "& .MuiChip-icon": { color: "primary.main" },
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
                Talleres y Bienestar{" "}
                <Box component="span" sx={{ color: "primary.main" }}>
                  para tu Empresa
                </Box>
              </Typography>
            </motion.div>

            <motion.div variants={fadeInUp}>
              <Typography
                variant="body1"
                color="text.secondary"
                sx={{ maxWidth: 600, mx: "auto", fontSize: "1.05rem", lineHeight: 1.8 }}
              >
                Equipos que cuidan su salud mental son más creativos, resilientes y
                productivos. Llevamos la psicología clínica al corazón de tu organización.
              </Typography>
            </motion.div>
          </Box>
        </motion.div>

        {/* ── Main grid: problems left / packages right ── */}
        <Box
          sx={{
            display: "grid",
            gridTemplateColumns: { xs: "1fr", md: "1fr 1.6fr" },
            gap: { xs: 5, md: 7 },
            alignItems: "start",
          }}
        >
          {/* ══ LEFT: Problem → Solution ══ */}
          <motion.div
            variants={fadeInLeft}
            initial="hidden"
            whileInView="visible"
            viewport={viewport}
          >
            <Box
              sx={{
                bgcolor: "background.default",
                p: { xs: 3, md: 4 },
                border: "1px solid",
                borderColor: "divider",
                boxShadow: "0px 4px 20px rgba(0,74,173,0.06)",
                position: "sticky",
                top: 90,
              }}
            >
              <Typography
                variant="overline"
                sx={{
                  fontSize: "0.68rem",
                  fontWeight: 700,
                  color: "primary.main",
                  letterSpacing: "0.1em",
                  display: "block",
                  mb: 2,
                }}
              >
                El problema
              </Typography>

              <Typography
                variant="h5"
                sx={{ fontWeight: 700, mb: 1.5, color: "text.primary" }}
              >
                ¿Reconoces alguna de estas situaciones en tu empresa?
              </Typography>

              <Typography
                variant="body2"
                color="text.secondary"
                sx={{ mb: 3, lineHeight: 1.75 }}
              >
                El estrés laboral no resuelto genera pérdidas en productividad,
                rotación y clima organizacional. No tiene que ser así.
              </Typography>

              <Stack spacing={2} sx={{ mb: 4 }}>
                {PROBLEMS.map(({ icon: ProbIcon, text }) => (
                  <Box
                    key={text}
                    sx={{
                      display: "flex",
                      alignItems: "flex-start",
                      gap: 1.5,
                      p: 1.5,
                      bgcolor: "rgba(211,47,47,0.04)",
                      border: "1px solid rgba(211,47,47,0.08)",
                    }}
                  >
                    <ProbIcon sx={{ color: "#C62828", fontSize: 20, mt: 0.1, flexShrink: 0 }} />
                    <Typography variant="body2" sx={{ color: "text.primary", lineHeight: 1.6 }}>
                      {text}
                    </Typography>
                  </Box>
                ))}
              </Stack>

              <Divider sx={{ mb: 3 }} />

              <Box sx={{ display: "flex", alignItems: "flex-start", gap: 1.5 }}>
                <CheckCircleIcon sx={{ color: "primary.main", fontSize: 22, mt: 0.1, flexShrink: 0 }} />
                <Box>
                  <Typography variant="subtitle2" sx={{ fontWeight: 700, mb: 0.5, color: "text.primary" }}>
                    Nuestra solución
                  </Typography>
                  <Typography variant="body2" color="text.secondary" sx={{ lineHeight: 1.7 }}>
                    Programas de bienestar diseñados a medida de tu equipo, con
                    metodología clínica y resultados medibles desde la primera
                    sesión.
                  </Typography>
                </Box>
              </Box>
            </Box>
          </motion.div>

          {/* ══ RIGHT: Package cards ══ */}
          <Box>
            <motion.div
              variants={staggerContainer}
              initial="hidden"
              whileInView="visible"
              viewport={viewport}
            >
              <Stack spacing={3}>
                {PAQUETES.map((pkg) => {
                  const PkgIcon = pkg.icon;
                  return (
                    <motion.div key={pkg.id} variants={fadeInRight}>
                      <Card
                        sx={{
                          border: "1px solid",
                          borderColor: "divider",
                          borderBottom: "1px solid",
                          borderBottomColor: "divider",
                          boxShadow: "0px 4px 20px rgba(0,74,173,0.07)",
                          transition: "all 0.3s cubic-bezier(0.22,1,0.36,1)",
                          bgcolor: "background.default",
                          "&:hover": {
                            boxShadow: "0px 16px 44px rgba(0,74,173,0.13)",
                            transform: "translateY(-4px)",
                            borderColor: "primary.main",
                            borderBottomColor: "#7ED9A3",
                            borderBottomWidth: "4px",
                          },
                        }}
                      >
                        <CardContent sx={{ p: { xs: 3, md: 4 } }}>
                          {/* Header row */}
                          <Box
                            sx={{
                              display: "flex",
                              alignItems: "flex-start",
                              justifyContent: "space-between",
                              mb: 2.5,
                              flexWrap: "wrap",
                              gap: 1,
                            }}
                          >
                            <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
                              <Box
                                aria-hidden="true"
                                sx={{
                                  width: 52,
                                  height: 52,
                                  bgcolor: pkg.iconBg,
                                  display: "flex",
                                  alignItems: "center",
                                  justifyContent: "center",
                                  flexShrink: 0,
                                }}
                              >
                                <PkgIcon sx={{ fontSize: 26, color: pkg.iconColor }} />
                              </Box>
                              <Box>
                                <Typography
                                  variant="h6"
                                  sx={{ fontWeight: 700, lineHeight: 1.2, color: "text.primary" }}
                                >
                                  {pkg.title}
                                </Typography>
                                <Typography variant="caption" color="text.secondary">
                                  {pkg.subtitle}
                                </Typography>
                              </Box>
                            </Box>
                            <Chip
                              label={pkg.label}
                              size="small"
                              sx={{
                                fontWeight: 700,
                                fontSize: "0.72rem",
                                bgcolor: pkg.labelBg,
                                color: pkg.labelColor,
                              }}
                            />
                          </Box>

                          {/* Format & participants */}
                          <Stack direction="row" spacing={2} sx={{ mb: 3, flexWrap: "wrap", gap: 1 }}>
                            <Box sx={{ display: "flex", alignItems: "center", gap: 0.75 }}>
                              <AccessTimeIcon sx={{ fontSize: 16, color: "text.secondary" }} />
                              <Typography variant="caption" sx={{ fontWeight: 600, color: "text.secondary" }}>
                                {pkg.formato}
                              </Typography>
                            </Box>
                            <Box sx={{ display: "flex", alignItems: "center", gap: 0.75 }}>
                              <GroupsIcon sx={{ fontSize: 16, color: "text.secondary" }} />
                              <Typography variant="caption" sx={{ fontWeight: 600, color: "text.secondary" }}>
                                {pkg.participantes}
                              </Typography>
                            </Box>
                          </Stack>

                          <Divider sx={{ mb: 2.5 }} />

                          {/* Features */}
                          <Stack spacing={1.2} sx={{ mb: 3 }}>
                            {pkg.features.map((feat) => (
                              <Box
                                key={feat}
                                sx={{ display: "flex", alignItems: "flex-start", gap: 1 }}
                              >
                                <CheckCircleIcon
                                  sx={{
                                    fontSize: 17,
                                    color: "secondary.dark",
                                    mt: 0.15,
                                    flexShrink: 0,
                                  }}
                                />
                                <Typography
                                  variant="body2"
                                  sx={{ color: "text.secondary", lineHeight: 1.55 }}
                                >
                                  {feat}
                                </Typography>
                              </Box>
                            ))}
                          </Stack>

                          {/* Benefit highlight */}
                          <Box
                            sx={{
                              display: "flex",
                              alignItems: "center",
                              gap: 1,
                              p: 1.5,
                              bgcolor: "rgba(0,74,173,0.04)",
                              border: "1px solid rgba(0,74,173,0.08)",
                              mb: 3,
                            }}
                          >
                            <AssessmentIcon sx={{ fontSize: 18, color: "primary.main", flexShrink: 0 }} />
                            <Typography
                              variant="body2"
                              sx={{ fontWeight: 600, color: "primary.main", fontSize: "0.82rem" }}
                            >
                              {pkg.beneficio}
                            </Typography>
                          </Box>

                          {/* CTA */}
                          <Button
                            id={`empresa-cta-${pkg.id}`}
                            variant="contained"
                            color="primary"
                            fullWidth
                            size="large"
                            href={WHATSAPP_URL}
                            target="_blank"
                            rel="noopener noreferrer"
                            startIcon={<WhatsAppIcon />}
                          >
                            Solicitar este programa
                          </Button>
                        </CardContent>
                      </Card>
                    </motion.div>
                  );
                })}
              </Stack>
            </motion.div>
          </Box>
        </Box>
      </Container>
    </Box>
  );
}
