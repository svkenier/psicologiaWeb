# Prompt de Desarrollo: Landing Page Profesional - Protege Tu Psique

## 0. METODOLOGÍA DE TRABAJO (INSTRUCCIÓN CRÍTICA PARA LA IA)

**ANTES DE ESCRIBIR CUALQUIER LÍNEA DE CÓDIGO:**

1. Analiza detenidamente todo este documento.
2. Genera una lista numerada con **todas las preguntas, dudas o aclaraciones que necesites** sobre la estructura, los componentes o el contenido antes de empezar.
3. **Detente y espera mis respuestas.** No generes el código hasta que yo te haya respondido.
4. Una vez aclaradas las dudas, desarrollaremos la página de forma iterativa, implementando exactamente lo que yo te indique paso a paso para evitar la generación de código basura.

---

## 1. Rol y Objetivo

Actúa como un Diseñador UI/UX y Desarrollador Frontend Senior. Desarrolla una landing page interactiva, moderna, minimalista y de alto rendimiento para el consultorio y consultora de salud mental **"Protege Tu Psique"** (Psicólogo Clínico, 7 años de experiencia, formación en DBT).

El sitio web es **estrictamente informativo y de contacto directo** (sin panel de pacientes, sin base de datos ni autenticación de usuarios).

---

## 2. Stack Tecnológico Estricto

- **Core:** React (JavaScript / JSX).
- **UI Library & Estilos:** **Material UI EXCLUSIVAMENTE** (`@mui/material`, `@mui/icons-material`, `@emotion/react`, `@emotion/styled`). **PROHIBIDO EL USO DE TAILWIND CSS.**
- **Animaciones de Scroll y UI:** `framer-motion` para animaciones complejas/scroll, complementado con las transiciones nativas de MUI (`Fade`, `Collapse`) para interacciones de componentes.

---

## 3. Configuración del Tema MUI (Theme & Colores)

Configura un `theme` de Material UI con la paleta de colores oficial y tipografía moderna:

```javascript
import { createTheme } from "@mui/material/styles";

const theme = createTheme({
  palette: {
    primary: {
      main: "#004AAD", // Azul Corporativo
      contrastText: "#FFFFFF",
    },
    secondary: {
      main: "#7ED9A3", // Verde Menta / Acentos
      contrastText: "#0F172A",
    },
    background: {
      default: "#FFFFFF", // Fondo principal limpio
      paper: "#F8FAFC", // Fondos secundarios / Tarjetas
    },
    text: {
      primary: "#0F172A", // Texto principal de alto contraste
      secondary: "#475569", // Texto secundario / subtítulos
    },
  },
  typography: {
    fontFamily: '"Inter", "Roboto", "Helvetica", "Arial", sans-serif',
    h1: { fontWeight: 800 },
    h2: { fontWeight: 700 },
    h3: { fontWeight: 700 },
    button: { textTransform: "none", fontWeight: 600 },
  },
  shape: {
    borderRadius: 12, // Bordes redondeados modernos
  },
});
```
