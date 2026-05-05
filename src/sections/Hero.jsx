import React, { useRef } from 'react';
import { motion } from 'framer-motion';
import { Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls, Sphere, MeshDistortMaterial, Float } from '@react-three/drei';

const WireframeSphere = () => {
  const meshRef = useRef();

  useFrame((state) => {
    const time = state.clock.getElapsedTime();
    meshRef.current.rotation.y = time * 0.1;
    meshRef.current.rotation.x = time * 0.05;
  });

  return (
    <mesh ref={meshRef}>
      <sphereGeometry args={[2.5, 64, 64]} />
      <meshStandardMaterial
        wireframe
        color="#0066FF"
        emissive="#0066FF"
        emissiveIntensity={2}
        transparent
        opacity={0.3}
      />
    </mesh>
  );
};

const Hero = () => {
  return (
    <section className="relative min-h-screen w-full flex flex-col items-center overflow-hidden pt-24">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-grid opacity-20" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-neonBlue/10 rounded-full blur-[120px] pointer-events-none" />



      <div className="container mx-auto px-6 grid md:grid-cols-2 gap-12 items-center relative z-10 flex-grow">
        {/* Left Content */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="flex flex-col gap-6"
        >
          <div className="flex flex-col">
            <motion.h2
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
              className="font-orbitron text-orangeAccent tracking-[0.5em] text-sm md:text-base font-bold mb-2"
            >
              CODE . CREATE . CONQUER
            </motion.h2>
            <h1 className="font-bebas text-8xl md:text-[10rem] leading-none tracking-tighter text-whiteText relative">
              <span className="block overflow-hidden">
                <motion.span
                  initial={{ y: "100%" }}
                  animate={{ y: 0 }}
                  transition={{ duration: 0.8, delay: 0.2, ease: "circOut" }}
                  className="block"
                >
                  HACKSPRINT
                </motion.span>
              </span>
              <span className="block overflow-hidden mt-[-20px]">
                <motion.span
                  initial={{ y: "100%" }}
                  animate={{ y: 0 }}
                  transition={{ duration: 0.8, delay: 0.4, ease: "circOut" }}
                  className="block text-neonBlue text-glow-blue"
                >
                  6.0
                </motion.span>
              </span>
            </h1>
          </div>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1 }}
            className="text-mutedText font-orbitron max-w-lg text-lg leading-relaxed border-l-2 border-orangeAccent pl-6"
          >
            Join the most elite futuristic hackathon organized by P.E.S. College of Engineering in collaboration with IEEE PES SBC & Section partners.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.2 }}
            className="flex flex-wrap gap-6 mt-8"
          >
            <a
              href="https://docs.google.com/forms/d/e/1FAIpQLSfFqr-ZQb8Ib2t7UvzclOBZCleTzV43jqR3EcDFq9u46SpSHw/viewform"
              target="_blank"
              rel="noopener noreferrer"
              className="px-10 py-4 bg-orangeAccent text-white font-orbitron font-bold tracking-widest rounded-sm hover:scale-105 transition-all duration-300 glow-orange group relative overflow-hidden block text-center"
            >
              <span className="relative z-10">REGISTER NOW</span>
              <div className="absolute inset-0 bg-white/20 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700 ease-in-out" />
            </a>
            <a href="#domains" className="px-10 py-4 inline-flex items-center justify-center bg-transparent border-2 border-neonBlue text-neonBlue font-orbitron font-bold tracking-widest rounded-sm hover:bg-neonBlue hover:text-white transition-all duration-300 glow-blue">
              EXPLORE DOMAINS
            </a>
          </motion.div>
        </motion.div>

        {/* Right Content: 3D Scene */}
        <div className="h-[500px] md:h-[700px] w-full relative">
          <Canvas camera={{ position: [0, 0, 8], fov: 45 }}>
            <ambientLight intensity={0.5} />
            <pointLight position={[10, 10, 10]} intensity={1} color="#0066FF" />
            <pointLight position={[-10, -10, -10]} intensity={0.5} color="#FF7A00" />
            <Float speed={2} rotationIntensity={1} floatIntensity={1}>
              <WireframeSphere />
            </Float>
            <OrbitControls enableZoom={false} autoRotate autoRotateSpeed={0.5} />
          </Canvas>

          {/* Overlay Graphics */}
          <div className="absolute inset-0 pointer-events-none flex items-center justify-center">
            <div className="w-full h-full max-w-[450px] max-h-[450px] border border-white/5 rounded-full animate-spin-slow" />
            <div className="absolute w-[80%] h-[80%] border-t border-b border-orangeAccent/20 rounded-full animate-reverse-spin" />
            <div className="absolute top-0 right-0 p-4 font-orbitron text-[10px] text-neonOrange/40 flex flex-col items-end">
              <span>SCAN_ID: HS_6.0_SYSTEM_READY</span>
              <span>SYNC_STATUS: 100%</span>
              <span>CORE_TEMP: OPTIMAL</span>
            </div>
          </div>
        </div>
      </div>

      {/* Decorative Elements */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 animate-bounce opacity-50">
        <span className="font-orbitron text-[10px] tracking-[0.3em] text-mutedText uppercase">Scroll to enter</span>
        <div className="w-[1px] h-10 bg-gradient-to-b from-neonBlue to-transparent" />
      </div>
    </section>
  );
};

export default Hero;
