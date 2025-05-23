import * as THREE from "three";

const HeroLights = () => {
    return (
        <>
            <spotLight //desk lamp for OpRoom
                position={[2, 5, 6]}
                angle={.15}
                intensity={100}
                penumbra={.2}
                color="white"
            />

            <spotLight //overhead light OpRoom tailored
                position={[4, 5, 4]}
                angle={.3}
                intensity={40}
                penumbra={.5}
                color="#4cc9f0"
            />

            <spotLight //more light OpRoom tailored
                position={[-3, 5, 5]}
                angle={.4}
                intensity={60}
                penumbra={1}
                color="#9d4edd"
            />

            <primitive //Purple light for OpRoom
                object={new THREE.RectAreaLight('#A259FF', 8, 3, 2)}
                position={[1, 3, 4]}
                intensity={15}
                rotation={[-Math.PI / 4, Math.PI / 4, 0]}
            />

            <pointLight //pointLight for OpRoom
                position={[0, 1, 0]}
                intensity={10}
                color="#7209b7"
            />
            <pointLight //pointLight for OpRoom (behind / off to the right)
                position={[1, 2, -2]}
                intensity={10}
                color="#0d00a4"
            />

        </>
    )
}
export default HeroLights
