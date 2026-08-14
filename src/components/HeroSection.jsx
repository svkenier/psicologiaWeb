import {
  Box,
  Container,
  Typography,
  Button,
  Chip,
  Stack,
} from "@mui/material";
import { motion } from "framer-motion";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import LaptopMacIcon from "@mui/icons-material/LaptopMac";
import { fadeInUp, fadeInRight, staggerContainer, viewport } from "../utils/animations";

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
      aria-label="Presentación del consultorio Protege Tu Psique"
      sx={{
        position: "relative",
        overflow: "hidden",
        pt: { xs: 8, md: 11 },
        pb: { xs: 10, md: 14 },
        background:
          "linear-gradient(180deg, #F8FAFC 0%, #FFFFFF 100%)",
      }}
    >
      {/* ── Decorative radial blobs ── */}
      <Box
        aria-hidden="true"
        sx={{
          position: "absolute",
          top: -160,
          right: -160,
          width: { xs: 380, md: 620 },
          height: { xs: 380, md: 620 },
          borderRadius: "50%",
          background:
            "radial-gradient(circle, rgba(0,74,173,0.07) 0%, transparent 70%)",
          pointerEvents: "none",
        }}
      />
      <Box
        aria-hidden="true"
        sx={{
          position: "absolute",
          bottom: -100,
          left: -100,
          width: 360,
          height: 360,
          borderRadius: "50%",
          background:
            "radial-gradient(circle, rgba(126,217,163,0.09) 0%, transparent 70%)",
          pointerEvents: "none",
        }}
      />

      <Container maxWidth="lg">
        <Box
          sx={{
            display: "grid",
            gridTemplateColumns: { xs: "1fr", md: "1fr 1fr" },
            gap: { xs: 6, md: 10 },
            alignItems: "center",
          }}
        >
          {/* ══════════════════════════════════════════
              LEFT: Text content
          ══════════════════════════════════════════ */}
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            animate="visible"
          >
            {/* 4. Badge sutil — sin bordes ni fondos fuertes */}
            <motion.div variants={fadeInUp}>
              <Typography
                variant="overline"
                sx={{
                  display: "block",
                  mb: 2.5,
                  color: "text.secondary",
                  fontWeight: 600,
                  letterSpacing: "0.12em",
                  fontSize: "0.72rem",
                }}
              >
                Psicólogo Clínico · Formación en Terapia Dialéctica Conductual (DBT)
              </Typography>
            </motion.div>

            {/* Main headline */}
            <motion.div variants={fadeInUp}>
              <Typography
                variant="h1"
                sx={{
                  fontSize: { xs: "2.25rem", sm: "2.8rem", md: "3.3rem" },
                  color: "text.primary",
                  mb: 2.5,
                  letterSpacing: "-0.025em",
                  lineHeight: 1.1,
                }}
              >
                El cambio que{" "}
                <Box
                  component="span"
                  sx={{
                    color: "primary.main",
                    display: "inline-block",
                    borderBottom: "4px solid #7ED9A3",
                    paddingBottom: "2px",
                    lineHeight: 1.15,
                  }}
                >
                  buscas
                </Box>{" "}
                comienza aquí.
              </Typography>
            </motion.div>

            {/* Subtitle */}
            <motion.div variants={fadeInUp}>
              <Typography
                variant="body1"
                color="text.secondary"
                sx={{
                  fontSize: { xs: "1rem", md: "1.1rem" },
                  mb: 3.5,
                  maxWidth: 500,
                  lineHeight: 1.85,
                }}
              >
                <strong style={{ color: "#0F172A" }}>Carlos Torres</strong>,
                Psicólogo Clínico con 7 años de experiencia y formación
                especializada en Terapia Dialéctica Conductual (DBT). Terapia
                basada en evidencia para resultados reales.
              </Typography>
            </motion.div>

            {/* Modality pills */}
            <motion.div variants={fadeInUp}>
              <Stack
                direction="row"
                spacing={1.5}
                sx={{ mb: 4.5, flexWrap: "wrap", gap: 1 }}
              >
                <Chip
                  icon={<LocationOnIcon />}
                  label="Presencial · Maracaibo"
                  size="small"
                  sx={{
                    bgcolor: "#F0FDF4",
                    color: "#2E7D32",
                    fontWeight: 600,
                    border: "1px solid #7ED9A3",
                    "& .MuiChip-icon": { color: "#4CAF78" },
                  }}
                />
                <Chip
                  icon={<LaptopMacIcon />}
                  label="Modalidad Online"
                  size="small"
                  sx={{
                    bgcolor: "#F0FDF4",
                    color: "#2E7D32",
                    fontWeight: 600,
                    border: "1px solid #7ED9A3",
                    "& .MuiChip-icon": { color: "#4CAF78" },
                  }}
                />
              </Stack>
            </motion.div>

            {/* 3. Único botón CTA */}
            <motion.div variants={fadeInUp}>
              <Button
                id="hero-cta-whatsapp"
                variant="contained"
                color="primary"
                size="large"
                href={WHATSAPP_URL}
                target="_blank"
                rel="noopener noreferrer"
                startIcon={<WhatsAppIcon />}
                sx={{
                  py: 1.6,
                  px: 3.5,
                  fontSize: "0.975rem",
                  mb: 6,
                  "&:hover": {
                    boxShadow:
                      "0px 6px 20px rgba(0,74,173,0.3), 0 0 0 3px rgba(126,217,163,0.45)",
                  },
                }}
              >
                Contactar por WhatsApp
              </Button>
            </motion.div>

            {/* Stats row */}
            <motion.div variants={fadeInUp}>
              <Stack direction="row" spacing={0} alignItems="center">
                {STATS.map(({ value, label }, i) => (
                  <Box key={label} sx={{ display: "flex", alignItems: "center" }}>
                    <Box sx={{ textAlign: "center", px: i === 0 ? 0 : 3 }}>
                      <Typography
                        variant="h4"
                        sx={{
                          color: "primary.main",
                          fontWeight: 800,
                          lineHeight: 1,
                          fontSize: "1.7rem",
                        }}
                      >
                        {value}
                      </Typography>
                      <Typography
                        variant="caption"
                        color="text.secondary"
                        sx={{ fontWeight: 500, display: "block", mt: 0.3 }}
                      >
                        {label}
                      </Typography>
                    </Box>
                    {i < STATS.length - 1 && (
                      <Box
                        sx={{
                          width: "1px",
                          height: 36,
                          bgcolor: "divider",
                          ml: 3,
                          flexShrink: 0,
                        }}
                      />
                    )}
                  </Box>
                ))}
              </Stack>
            </motion.div>
          </motion.div>

          {/* ══════════════════════════════════════════
              RIGHT: Imagen limpia, sin elementos superpuestos
          ══════════════════════════════════════════ */}
          <motion.div
            variants={fadeInRight}
            initial="hidden"
            animate="visible"
            style={{
              position: "relative",
              display: "flex",
              justifyContent: "center",
            }}
          >
            <Box
              sx={{
                display: "block",
                width: "100%",
                maxWidth: 520,
              }}
            >
              {/* 1. Imagen limpia — sin tarjetas flotantes */}
              <Box
                component="img"
                src="https://images.unsplash.com/photo-1573497620053-ea5300f94f21?auto=format&fit=crop&w=700&q=80"
                alt="Sesión de terapia clínica"
                sx={{
                  width: "100%",
                  height: { xs: 350, md: 500 },
                  objectFit: "cover",
                  display: "block",
                  boxShadow: "0px 24px 56px rgba(0,74,173,0.12)",
                }}
              />
            </Box>
          </motion.div>
        </Box>
      </Container>
    </Box>
  );
}
