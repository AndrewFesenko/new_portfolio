import React, { useRef, useEffect } from 'react'
import { useGLTF, useAnimations } from '@react-three/drei'

const Developer = ({ animationName, ...props }) => {
        const group = useRef()
        const { nodes, materials, animations } = useGLTF('/models/human/boxing.glb')
        const { actions } = useAnimations(animations, group)

        useEffect(() => {
                if (!actions || !animationName) return

                // Stop all animations
                Object.values(actions).forEach((action) => action.stop())

                // Play selected animation if it exists
                const selected = actions[animationName]
                if (selected) {
                        selected.reset().fadeIn(0.2).play()
                }
        }, [actions, animationName])

        return (
            <group ref={group} {...props} dispose={null}>
                    <group name="Scene">
                            <group name="Armature001" position={[0.935, -0.103, -0.496]}>
                                    <skinnedMesh
                                        name="EyeLeft001"
                                        geometry={nodes.EyeLeft001.geometry}
                                        material={materials['Wolf3D_Eye.001']}
                                        skeleton={nodes.EyeLeft001.skeleton}
                                        morphTargetDictionary={nodes.EyeLeft001.morphTargetDictionary}
                                        morphTargetInfluences={nodes.EyeLeft001.morphTargetInfluences}
                                    />
                                    <skinnedMesh
                                        name="EyeRight001"
                                        geometry={nodes.EyeRight001.geometry}
                                        material={materials['Wolf3D_Eye.001']}
                                        skeleton={nodes.EyeRight001.skeleton}
                                        morphTargetDictionary={nodes.EyeRight001.morphTargetDictionary}
                                        morphTargetInfluences={nodes.EyeRight001.morphTargetInfluences}
                                    />
                                    <skinnedMesh
                                        name="Wolf3D_Body001"
                                        geometry={nodes.Wolf3D_Body001.geometry}
                                        material={materials['Wolf3D_Body.001']}
                                        skeleton={nodes.Wolf3D_Body001.skeleton}
                                    />
                                    <skinnedMesh
                                        name="Wolf3D_Glasses001"
                                        geometry={nodes.Wolf3D_Glasses001.geometry}
                                        material={materials['Wolf3D_Glasses.001']}
                                        skeleton={nodes.Wolf3D_Glasses001.skeleton}
                                    />
                                    <skinnedMesh
                                        name="Wolf3D_Hair001"
                                        geometry={nodes.Wolf3D_Hair001.geometry}
                                        material={materials['Wolf3D_Hair.001']}
                                        skeleton={nodes.Wolf3D_Hair001.skeleton}
                                    />
                                    <skinnedMesh
                                        name="Wolf3D_Head001"
                                        geometry={nodes.Wolf3D_Head001.geometry}
                                        material={materials['Wolf3D_Skin.001']}
                                        skeleton={nodes.Wolf3D_Head001.skeleton}
                                        morphTargetDictionary={nodes.Wolf3D_Head001.morphTargetDictionary}
                                        morphTargetInfluences={nodes.Wolf3D_Head001.morphTargetInfluences}
                                    />
                                    <skinnedMesh
                                        name="Wolf3D_Outfit_Bottom001"
                                        geometry={nodes.Wolf3D_Outfit_Bottom001.geometry}
                                        material={materials['Wolf3D_Outfit_Bottom.001']}
                                        skeleton={nodes.Wolf3D_Outfit_Bottom001.skeleton}
                                    />
                                    <skinnedMesh
                                        name="Wolf3D_Outfit_Footwear001"
                                        geometry={nodes.Wolf3D_Outfit_Footwear001.geometry}
                                        material={materials['Wolf3D_Outfit_Footwear.001']}
                                        skeleton={nodes.Wolf3D_Outfit_Footwear001.skeleton}
                                    />
                                    <skinnedMesh
                                        name="Wolf3D_Outfit_Top001"
                                        geometry={nodes.Wolf3D_Outfit_Top001.geometry}
                                        material={materials['Wolf3D_Outfit_Top.001']}
                                        skeleton={nodes.Wolf3D_Outfit_Top001.skeleton}
                                    />
                                    <skinnedMesh
                                        name="Wolf3D_Teeth001"
                                        geometry={nodes.Wolf3D_Teeth001.geometry}
                                        material={materials['Wolf3D_Teeth.001']}
                                        skeleton={nodes.Wolf3D_Teeth001.skeleton}
                                        morphTargetDictionary={nodes.Wolf3D_Teeth001.morphTargetDictionary}
                                        morphTargetInfluences={nodes.Wolf3D_Teeth001.morphTargetInfluences}
                                    />
                                    <primitive object={nodes.Hips} />
                            </group>
                    </group>
            </group>
        )
}

useGLTF.preload('/models/human/boxing.glb')
export default Developer
