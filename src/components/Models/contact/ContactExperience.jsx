import { OrbitControls } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";

import Computer from "./Computer";

const ContactExperience = () => {
    return (
        <Canvas shadows camera={{ position: [0, 3, 7], fov: 45 }}>
            <ambientLight intensity={0.4} color="#cfe8ff" /> {/* soft icy glow */}

            <directionalLight
                position={[5, 5, 3]}
                intensity={1.5}
                color="#a3d4ff" // cold blue light
            />
            <directionalLight
                position={[5, 9, 1]}
                castShadow
                intensity={2.2}
                color="#d0ebff" // frosty white-blue tone
            />

            <OrbitControls
                enableZoom={false}
                minPolarAngle={Math.PI / 5}
                maxPolarAngle={Math.PI / 2}
            />

            <group scale={[1, 1, 1]}>
                <mesh
                    receiveShadow
                    position={[0, -1.5, 0]}
                    rotation={[-Math.PI / 2, 0, 0]}
                >
                    <planeGeometry args={[30, 30]} />
                    <meshStandardMaterial color="#1c2b3a" /> {/* deep ice slate */}
                </mesh>
            </group>

            <group scale={0.03} position={[0, -1.49, -2]} castShadow>
                <Computer />
            </group>
        </Canvas>

    );
};

export default ContactExperience;