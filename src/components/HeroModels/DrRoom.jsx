import React, { useRef } from 'react';
import * as THREE from 'three';
import { useGLTF } from '@react-three/drei';
import { EffectComposer, SelectiveBloom } from '@react-three/postprocessing';
import { BlendFunction } from 'postprocessing';

export function DrRoom(props) {
  const { nodes, materials } = useGLTF('/models/dragon-room.glb');
  const magicRef = useRef();

  // Only custom materials for key effects
  const snowMaterial = new THREE.MeshStandardMaterial({
    color: '#f0faff',
    roughness: 0.8,
    metalness: 0.2,
  });

  const waterMaterial = new THREE.MeshStandardMaterial({
    color: '#b0d6ff',
    transparent: true,
    opacity: 0.5,
    roughness: 0.2,
    metalness: 0.5,
  });

  const glassMaterial = new THREE.MeshStandardMaterial({
    color: '#cfeafd',
    transparent: true,
    opacity: 0.4,
    roughness: 0.1,
    metalness: 0.6,
  });

  const magicMaterial = new THREE.MeshStandardMaterial({
    color: '#a0e9ff',
    emissive: '#a0e9ff',
    emissiveIntensity: 2,
    roughness: 0.3,
    metalness: 0.6,
  });

  return (
      <group {...props} dispose={null}>
        <EffectComposer>
          <SelectiveBloom
              selection={magicRef}
              intensity={1.5}
              luminanceThreshold={0.2}
              luminanceSmoothing={0.9}
              blendFunction={BlendFunction.ADD}
          />
        </EffectComposer>

        <group scale={0.1}>
          <mesh
              geometry={nodes.Dragon_GEO_DragonBlast_MAT_0.geometry}
              material={magicMaterial}
              ref={magicRef}
          />
          <mesh
              geometry={nodes.RockmineKeep_GEO_Snow_MAT_0.geometry}
              material={snowMaterial}
          />
          <mesh
              geometry={nodes.RockmineKeep_GEO_SnowAndGlow_MAT_0.geometry}
              material={snowMaterial}
          />
          <mesh
              geometry={nodes.RockmineKeep_GEO_Water_MAT_0.geometry}
              material={waterMaterial}
          />
          <mesh
              geometry={nodes.Table_Decorations_GEO_Glass_MAT_0.geometry}
              material={glassMaterial}
          />
          <mesh
              geometry={nodes.Table_Decorations_GEO_DragonBlast_MAT_0.geometry}
              material={magicMaterial}
          />

          {/* Everything else uses original baked materials */}
          <mesh geometry={nodes.Dragon_GEO_ColourChart_MAT_0.geometry} material={materials.ColourChart_MAT} />
          <mesh geometry={nodes.Dragon_GEO_DragonScale_MAT_0.geometry} material={materials.DragonScale_MAT} />
          <mesh geometry={nodes.Furniture_GEO_ColourChart_MAT_0.geometry} material={materials.ColourChart_MAT} />
          <mesh geometry={nodes.Furniture_GEO_LampShade_MAT_0.geometry} material={materials.LampShade_MAT} />
          <mesh geometry={nodes.Furniture_GEO_PosterAndBooks_MAT_0.geometry} material={materials.PosterAndBooks_MAT} />
          <mesh geometry={nodes.RockmineKeep_GEO_ColourChart_MAT_0.geometry} material={materials.ColourChart_MAT} />
          <mesh geometry={nodes.RockmineKeep_GEO_DragonBlast_MAT_0.geometry} material={materials.DragonBlast_MAT} />
          <mesh geometry={nodes.RockmineKeep_GEO_GroundTexture_MAT_0.geometry} material={materials.GroundTexture_MAT} />
          <mesh geometry={nodes.Room_GEO_ColourChart_MAT_0.geometry} material={materials.ColourChart_MAT} />
          <mesh geometry={nodes.Room_GEO_GroundTexture_MAT_0.geometry} material={materials.GroundTexture_MAT} />
          <mesh geometry={nodes.ShelfItems_GEO_ColourChart_MAT_0.geometry} material={materials.ColourChart_MAT} />
          <mesh geometry={nodes.ShelfItems_GEO_GroundTexture_MAT_0.geometry} material={materials.GroundTexture_MAT} />
          <mesh geometry={nodes.ShelfItems_GEO_PosterAndBooks_MAT_0.geometry} material={materials.PosterAndBooks_MAT} />
          <mesh geometry={nodes.Table_Decorations_GEO_ColourChart_MAT_0.geometry} material={materials.ColourChart_MAT} />
          <mesh geometry={nodes.Table_Decorations_GEO_DMPapers_MAT_0.geometry} material={materials.DMPapers_MAT} />
          <mesh geometry={nodes.Table_Decorations_GEO_DMScreen_MAT_0.geometry} material={materials.DMScreen_MAT} />
          <mesh geometry={nodes.Table_Decorations_GEO_GroundTexture_MAT_0.geometry} material={materials.GroundTexture_MAT} />
          <mesh geometry={nodes.Table_Decorations_GEO_PlayerSheet_MAT_0.geometry} material={materials.PlayerSheet_MAT} />
        </group>
      </group>
  );
}

useGLTF.preload('/models/dragon-room.glb');
