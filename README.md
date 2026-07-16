<p align="center">
  <img src="assets/logo.svg" alt="WebHub Logo" width="80" />
</p>

<h1 align="center">WebHub — Creative Digital Agency</h1>

<p align="center">
  <strong>An immersive 3D landing page built with GSAP, Three.js, and scroll-driven animations.</strong>
</p>

<p align="center">
  <a href="#-english">English</a> · <a href="#-português">Português</a>
</p>

---

## 🇺🇸 English

### About

**WebHub** is a high-impact landing page for a creative digital agency. The site combines cinematic scroll animations, a 3D diamond model rendered in real-time, and a modern dark aesthetic to deliver a premium user experience.

### ✨ Features

| Feature | Description |
|---|---|
| **Scroll-driven animations** | Smooth, scrub-synced transitions powered by GSAP ScrollTrigger & ScrollSmoother |
| **3D Diamond model** | Interactive Three.js scene with a `.glb` model, environment map reflections, and continuous rotation |
| **SplitText effects** | Character-by-character text reveal with blur and stagger animations |
| **Project showcase** | Gallery that expands and saturates on scroll |
| **Video backgrounds** | Hero and footer sections with full-bleed looping videos |
| **Responsive design** | Fluid typography (`clamp`, `vw`) and breakpoints for mobile, tablet, and desktop |

### 🛠️ Tech Stack

- **HTML5** — Semantic markup
- **CSS3** — Custom properties, nested selectors, `clamp()`, media queries
- **JavaScript (ES Modules)** — Application logic
- **[GSAP 3.14](https://gsap.com/)** — ScrollTrigger, ScrollSmoother, SplitText
- **[Three.js](https://threejs.org/)** — WebGL 3D rendering, GLTFLoader, PMREM environment mapping
- **[Clash Display](https://www.fontshare.com/fonts/clash-display)** — Display typeface
- **[Inter](https://fonts.google.com/specimen/Inter)** — Body typeface (Google Fonts)

### 📁 Project Structure

```
agencia-3D/
├── assets/
│   ├── bg-hero.webp            # Hero background image
│   ├── bg-footer.webp          # Footer background image
│   ├── video-hero.mp4          # Hero background video
│   ├── video-footer.mp4        # Footer background video
│   ├── card-subtitulo.mp4      # Subtitle badge video
│   ├── diamond-compressed.glb  # 3D diamond model (compressed)
│   ├── hdri.webp               # HDRI environment map
│   ├── logo.svg                # Logo
│   ├── projeto[1-4].webp       # Project showcase images
│   └── seta-*.svg              # Button arrow icons
├── fonts/
│   └── ClashDisplay-*.ttf      # Clash Display font weights
├── index.html                  # Main HTML page
├── style.css                   # Styles & responsive breakpoints
├── script.js                   # GSAP animations & Three.js scene
└── README.md
```

### 🚀 Getting Started

No build tools required — this is a static site.


---

## 🇧🇷 Português

### Sobre

**WebHub** é uma landing page de alto impacto para uma agência digital criativa. O site combina animações cinematográficas baseadas em scroll, um modelo 3D de diamante renderizado em tempo real e uma estética escura moderna para entregar uma experiência premium ao usuário.

### ✨ Funcionalidades

| Funcionalidade | Descrição |
|---|---|
| **Animações por scroll** | Transições suaves e sincronizadas com scrub, usando GSAP ScrollTrigger & ScrollSmoother |
| **Modelo 3D de diamante** | Cena interativa com Three.js usando modelo `.glb`, reflexões de mapa de ambiente e rotação contínua |
| **Efeitos SplitText** | Revelação de texto caractere por caractere com animações de blur e stagger |
| **Vitrine de projetos** | Galeria que expande e satura conforme o scroll |
| **Vídeos de fundo** | Seções hero e footer com vídeos em loop de tela cheia |
| **Design responsivo** | Tipografia fluida (`clamp`, `vw`) e breakpoints para mobile, tablet e desktop |

### 🛠️ Tecnologias

- **HTML5** — Marcação semântica
- **CSS3** — Custom properties, seletores aninhados, `clamp()`, media queries
- **JavaScript (ES Modules)** — Lógica da aplicação
- **[GSAP 3.14](https://gsap.com/)** — ScrollTrigger, ScrollSmoother, SplitText
- **[Three.js](https://threejs.org/)** — Renderização 3D via WebGL, GLTFLoader, mapeamento de ambiente PMREM
- **[Clash Display](https://www.fontshare.com/fonts/clash-display)** — Fonte display
- **[Inter](https://fonts.google.com/specimen/Inter)** — Fonte body (Google Fonts)

### 📁 Estrutura do Projeto

```
agencia-3D/
├── assets/
│   ├── bg-hero.webp            # Imagem de fundo do hero
│   ├── bg-footer.webp          # Imagem de fundo do footer
│   ├── video-hero.mp4          # Vídeo de fundo do hero
│   ├── video-footer.mp4        # Vídeo de fundo do footer
│   ├── card-subtitulo.mp4      # Vídeo do badge de subtítulo
│   ├── diamond-compressed.glb  # Modelo 3D do diamante (comprimido)
│   ├── hdri.webp               # Mapa de ambiente HDRI
│   ├── logo.svg                # Logo
│   ├── projeto[1-4].webp       # Imagens da vitrine de projetos
│   └── seta-*.svg              # Ícones de seta dos botões
├── fonts/
│   └── ClashDisplay-*.ttf      # Pesos da fonte Clash Display
├── index.html                  # Página HTML principal
├── style.css                   # Estilos e breakpoints responsivos
├── script.js                   # Animações GSAP e cena Three.js
└── README.md
```

### 🚀 Como Executar

Nenhuma ferramenta de build necessária — este é um site estático.


