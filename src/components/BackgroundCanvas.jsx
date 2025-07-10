import { useEffect, useRef } from "react";
import * as THREE from "three";
import aws from "../utils/icons/aws.png";
import spring from "../utils/icons/boot.png";
import cpp from "../utils/icons/c++.png";
import css from "../utils/icons/css.png";
import docker from "../utils/icons/docker.png";
import java from "../utils/icons/java.png";
import html from "../utils/icons/html.png";
import javascript from "../utils/icons/javascript.png";
import kafka from "../utils/icons/kafka.png";
import react from "../utils/icons/react.png";
import agile from "../utils/icons/agile.png";
import sql from "../utils/icons/sql.png";
import mongodb from "../utils/icons/mongodb.png";
import postgres from "../utils/icons/postgres.png";
import Jenkins from "../utils/icons/jenkins.png";

const icons = [
  { name: "css", src: css },
  { name: "aws", src: aws },
  { name: "Java", src: java },
  { name: "C", src: html },
  { name: "C++", src: cpp },
  { name: "Spring Boot", src: spring },
  { name: "Docker", src: docker },
  { name: "Kafka", src: kafka },
  { name: "javascript", src: javascript },
  { name: "react", src: react },
  { name: "agile", src: agile },
  { name: "sql", src: sql },
  { name: "jenkins", src: Jenkins },
  { name: "mongodb", src: mongodb },
  { name: "postgres", src: postgres },
];

const BackgroundCanvas = () => {
  const mountRef = useRef(null);

  useEffect(() => {
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(
      75,
      window.innerWidth / window.innerHeight,
      0.1,
      1000
    );
    camera.position.z = 30;

    const renderer = new THREE.WebGLRenderer({ alpha: true });
    renderer.setSize(window.innerWidth, window.innerHeight);
    mountRef.current.appendChild(renderer.domElement);

    const loader = new THREE.TextureLoader();
    const sprites = [];

    const ICON_INSTANCES = 15; // duplicate each icon this many times

    icons.forEach((icon) => {
      loader.load(icon.src, (texture) => {
        for (let i = 0; i < ICON_INSTANCES; i++) {
          const material = new THREE.SpriteMaterial({ map: texture, transparent: true ,opacity:0.4});
          const sprite = new THREE.Sprite(material);

          sprite.scale.set(2, 2, 1);
          sprite.userData = {
            baseX: (Math.random() - 0.5) * 80,
            baseY: (Math.random() - 0.5) * 50,
            baseZ: (Math.random() - 0.5) * 60,
            speed: Math.random() * 0.5 + 0.2,
            angle: Math.random() * Math.PI * 2,
          };

          sprite.position.set(
            sprite.userData.baseX,
            sprite.userData.baseY,
            sprite.userData.baseZ
          );

          scene.add(sprite);
          sprites.push(sprite);
        }
      });
    });

    const animate = () => {
      requestAnimationFrame(animate);

      const time = Date.now() * 0.001;
      sprites.forEach((sprite, i) => {
        const { baseX, baseY, baseZ, speed } = sprite.userData;
        sprite.position.x = baseX + Math.sin(time * speed + i) * 2;
        sprite.position.y = baseY + Math.cos(time * speed + i) * 2;
        sprite.position.z = baseZ + Math.sin(time * speed * 0.5 + i) * 1.5;
        sprite.rotation.z += 0.001;
      });

      renderer.render(scene, camera);
    };

    animate();

    const handleResize = () => {
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(window.innerWidth, window.innerHeight);
    };
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
      renderer.dispose();
    };
  }, []);

  return <div ref={mountRef} className="three-background" />;
};

export default BackgroundCanvas;
