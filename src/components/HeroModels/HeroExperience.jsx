import {Canvas} from "@react-three/fiber";
import {OrbitControls} from "@react-three/drei";
import {useMediaQuery} from "react-responsive";
import {OpRoom} from "./OpRoom.jsx";
import {CyRoom} from "./CyRoom.jsx";
import {DrRoom} from "./DrRoom.jsx";
import {BRoom} from "./BRoom.jsx";
import HeroLights from "./HeroLights.jsx";
import DragonLights from "./DragonLights.jsx";
import Particles from "./Particles.jsx";

const HeroExperience = () => {
    const isTablet = useMediaQuery({ query: '(max-width: 1024px'})
    const isMobile = useMediaQuery({ query: '(max-width: 768px'})

    return (
        <Canvas camera={{ position: [0, 0, 15], fov: 45 }}>

            <OrbitControls
                enablePan={false}
                enableZoom={!isTablet}
                maxDistance={20}
                minDistance={5}
                minPolarAngle={Math.PI / 5}
                maxPolarAngle={Math.PI / 2}
            />

            {/*<HeroLights/>*/}
            <DragonLights/>

            <Particles count={100}/>

            <group
                // scale={isMobile? 0.7 : 1}  // If mobile scale will be .7 times original size else full size

                // position={[0, -3.5, 0]} // Tailored for OpRoom
                // rotation={[0, -Math.PI / 4, 0]} //Tailored for OpRoom

                // position={[0, -2.5, 0]} // Tailored for CyRoom
                // rotation={[0, -Math.PI / 4, 0]} //Tailored for CyRoom

                scale={isMobile? 2.6 : 3.5} // Tailored for DrRoom
                position={[0, -3.5, 0]} // Tailored for DrRoom
                rotation={[0, -Math.PI / 4, 0]} //Tailored for DrRoom

                // position={[1, -1.5, 0]} // Tailored for BRoom
                // rotation={[0, -Math.PI / 4, 0]} //Tailored for BRoom
            >

                // Note to self make sure to edit Room's themselves and fix meshes and materials (only fixed OpRoom)
                {/*<OpRoom />*/}
                {/*<CyRoom />*/}
                <DrRoom />
                {/*<BRoom />*/}

            </group>

        </Canvas>
    )
}
export default HeroExperience
