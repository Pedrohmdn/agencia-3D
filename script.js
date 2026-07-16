import * as THREE from "three";
import { GLTFLoader } from "three/addons/loaders/GLTFLoader.js";

gsap.registerPlugin(ScrollTrigger, ScrollSmoother, SplitText);

window.addEventListener("load", (ev) => {
  const videoHero = document.querySelector(".hero video");
  const videoFooter = document.querySelector(".footer video");

  videoHero.src = "assets/video-hero.mp4";
  videoHero.autoplay = true;
  videoHero.muted = true;
  videoHero.loop = true;

  videoFooter.src = "assets/video-footer.mp4";
  videoFooter.autoplay = true;
  videoFooter.muted = true;
  videoFooter.loop = true;

  const larguraTela = window.innerWidth;
  window.addEventListener("resize", () => {
    const larguraAtual = window.innerWidth;

    const diferenca = Math.abs(larguraAtual - larguraTela);

    if (diferenca > 300) {
      location.reload();
    }
  });

  const tl = gsap.timeline({
    scrollTrigger: {
      trigger: ".transition",
      start: "0% 0%",
      end: "+=2500",
      scrub: 2,
      pin: true,
    },
  });

  tl.to(".rectangles div", {
    y: 0,
    stagger: 0.3,
    duration: 4,
  });

  tl.to(".sectiontext", {
    opacity: 1,
    duration: 0.1,
  });

  const split = new SplitText(".sectiontext h2", {
    type: "chars",
    mask: "chars",
  });

  tl.from(split.chars, {
    y: 100,
    stagger: 0.08,
    duration: 1,
  });

  const projects = document.querySelectorAll(".project");

  projects.forEach((project) => {
    const projectImg = project.querySelector("img");
    gsap.to(project, {
      width: "100%",
      borderRadius: 0,
      scrollTrigger: {
        trigger: project,
        end: "50% 50%",
        scrub: 2,
      },
    });

    gsap.to(projectImg, {
      filter: "saturate(100%)",
      scrollTrigger: {
        trigger: project,
        start: "0% 70%",
        end: "50% 50%",
        scrub: 2,
      },
    });
  });

  const tl2 = gsap.timeline({
    scrollTrigger: {
      trigger: ".transitionFooter",
      start: "top 50%",
      end: "+=2500",
      scrub: 2,
    },
  });

  const text3dSection = document.querySelectorAll(".text3d h2");

  text3dSection.forEach((h2) => {
    const split = new SplitText(h2, {
      type: "chars",
    });
    tl2.from(split.chars, {
      opacity: 0,
      filter: "blur(20px)",
      stagger: { each: 0.2, from: "random" },
    });

    tl2.to(
      split.chars,
      {
        opacity: 0,
        filter: "blur(20px)",
        stagger: { each: 0.1, from: "random" },
      },
      "+=2",
    );
  });

  const scene = new THREE.Scene();
  const camera = new THREE.PerspectiveCamera(
    40,
    window.innerWidth / window.innerHeight,
    0.1,
    1000,
  );

  const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
  renderer.setSize(window.innerWidth, window.innerHeight);

  const diamondDiv = document.querySelector(".diamond");
  diamondDiv.appendChild(renderer.domElement);

  const loader = new GLTFLoader();
  let diamond = null;
  loader.load("assets/diamond-compressed.glb", (obj) => {
    diamond = obj.scene;
    scene.add(diamond);
    diamond.position.y = 2;

    const tl3 = gsap.timeline({
      scrollTrigger: {
        trigger: ".transitionFooter",
        start: "0% 0%",
        end: "+=2500",
        scrub: 2,
        pin: true,
      },
    });

    tl3.to(diamond.position, {
      y: 0,
      duration: 3,
    });

    tl3.to(
      diamond.rotation,
      {
        x: 4.7,
        duration: 3,
      },
      "<",
    );
    if (window.innerWidth <= 768) {
      camera.position.z = 24;
      tl3.to(diamond.position, {
        z: 23.2,
        duration: 0.5,
      });
    } else {
      camera.position.z = 14;
      tl3.to(diamond.position, {
        z: 13.2,
        duration: 0.5,
      });
    }

    tl3.to(".footer", {
      opacity: 1,
      duration: 0.3,
    });
  });

  const textureLoader = new THREE.TextureLoader();
  textureLoader.load("assets/hdri.webp", (texture) => {
    texture.mapping = THREE.EquirectangularReflectionMapping;
    const pmrem = new THREE.PMREMGenerator(renderer);
    const envMap = pmrem.fromEquirectangular(texture).texture;
    scene.environment = envMap;
  });

  function animate() {
    renderer.render(scene, camera);
    if (diamond !== null) {
      diamond.rotation.y += 0.005;
    }

    requestAnimationFrame(animate);
  }

  animate();
});
