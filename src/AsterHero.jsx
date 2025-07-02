import { Canvas } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';
import { motion } from 'framer-motion';

export default function AsterHero() {
  return (
    <div className="hero">
      <div className="content">
        <motion.h1 initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1 }}>
          Welcome to Aster Clinics
        </motion.h1>
        <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.5 }}>
          Comprehensive care across the UAE
        </motion.p>
        <motion.button initial={{ scale: 0 }} animate={{ scale: 1 }} transition={{ delay: 1 }}>
          Book Appointment
        </motion.button>
      </div>
      <Canvas className="canvas">
        <ambientLight intensity={0.5} />
        <directionalLight position={[5,5,5]} />
        <mesh>
          <sphereGeometry args={[1.5,32,32]} />
          <meshStandardMaterial color="#3b82f6" wireframe />
        </mesh>
        <OrbitControls enableZoom={false} />
      </Canvas>
    </div>
  );
}