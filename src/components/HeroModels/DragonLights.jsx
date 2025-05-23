import * as THREE from "three";

const DragonLights = () => {
    return (
        <>
            {/* Desk lamp (icy white) */}
            <spotLight
                position={[2, 5, 6]}
                angle={0.18}
                intensity={8}
                penumbra={0.3}
                color="#e0f7fa"
            />

            {/* Overhead moonlight */}
            <spotLight
                position={[4, 5, 4]}
                angle={0.32}
                intensity={6}
                penumbra={0.6}
                color="#b6e0fe"
            />

            {/* Side fill (cold blue) */}
            <spotLight
                position={[-3, 5, 5]}
                angle={0.4}
                intensity={5}
                penumbra={1}
                color="#a5b4fc"
            />

            {/* Ambient glacier light */}
            <primitive
                object={new THREE.RectAreaLight('#bde0fe', 8, 3, 2)}
                position={[1, 3, 4]}
                intensity={2.5}
                rotation={[-Math.PI / 4, Math.PI / 4, 0]}
            />

            {/* Soft blue fill for shadows */}
            <pointLight
                position={[0, 1, 0]}
                intensity={1.5}
                color="#cfeafd"
            />

            {/* Cool accent (back/right) */}
            <pointLight
                position={[1, 2, -2]}
                intensity={1.2}
                color="#a0e9ff"
            />

            {/* Gentle ambient for overall visibility */}
            <ambientLight intensity={0.32} color="#e3f6fd" />
        </>
    );
};

export default DragonLights;