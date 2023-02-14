import React, { useCallback } from "react";
import Particles from "react-particles";
import { loadFull } from "tsparticles";

export function ParticlesContainer() {
  // this customizes the component tsParticles installation
const customInit = useCallback(async (engine) => {
    console.log(engine);
    // this adds the bundle to tsParticles
    await loadFull(engine);
  });

  return (
    <Particles
      options={{
        background: {},
        fpsLimit: 1500,
        interactivity: {
          events: {
            onClick: {
              enable: true,
              mode: "push",
            },
            onHover: {
              enable: true,
              mode: "repulse",
            },
            resize: true,
          },
          modes: {
            push: {
              quantity: 10,
            },
            repulse: {
              distance: 55,
              duration: 0.4,
            },
          },
        },
        particles: {
          color: {
            value: "#ffffff",
          },
          links: {
            color: "#ffffff",
            distance: 150,
            enable: true,
            opacity: 0.5,
            width: 1,
          },
          collisions: {
            enable: true,
          },
          move: {
            directions: "none",
            enable: true,
            outModes: {
              default: "bounce",
            },
            random: false,
            speed: .5,
            straight: false,
          },
          number: {
            density: {
              enable: true,
              area: 800,
            },
            value: 80,
          },
          opacity: {
            value: 0.5,
          },
          shape: {
            type: "circle",
          },
          size: {
            value: { min: 1, max: 5 },
          },
        },
        detectRetina: true,
      }}
      init={customInit}
      style={{
        zIndex: -1,
      }}
    />
  );
}
