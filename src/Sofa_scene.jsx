import React, { useEffect } from 'react';
import { useLoader } from '@react-three/fiber';
import { TextureLoader } from 'three';
import sofaScene from './assets/sofa_scene.glb';
import { useGLTF, useTexture } from '@react-three/drei';

// SOFA TEXTURES
import sofaNormal from './assets/sofa_normal.webp';
import sofaRoughness from './assets/sofa_roughness.webp';
import sofa from './assets/sofa.webp';

// CUSHION TEXTURES
import cushionNormal from './assets/cushion_normal.webp';
import cushionRoughness from './assets/cushion_roughness.webp';
import cushionWhite from './assets/cushion_white.webp';
import cushionYellow from './assets/cushion_yellow.webp';



export function Model({ sofaTextureImage, cushionTextureImage }) {
  const { nodes, materials } = useGLTF(sofaScene);

  // Load the WebP textures
  const cushionTexture = useLoader(TextureLoader, cushionTextureImage);
  const sofaTexture = useLoader(TextureLoader, sofaTextureImage);

  // useEffect(() => {
  materials['Cusion white'].map = cushionTexture;
  materials['rød black'].map = sofaTexture;
  // }, [cushionTexture, sofaTexture, materials]);



  return (
    <group dispose={null}>
      <group position={[-0.041, -0.604, 0.382]} scale={1.417}>
        <mesh
          geometry={nodes.Cusion003.geometry}
          material={materials['Cusion white']}
          position={[-1.088, 0.622, -0.154]}
          rotation={[1.897, -1.162, -2.842]}
          scale={[0.388, 0.847, 0.675]}
        />
        <mesh
          geometry={nodes.Cusion.geometry}
          material={materials['Cusion white']}
          position={[0.363, 0.608, -0.336]}
          rotation={[2.728, -0.02, -1.485]}
          scale={[0.386, 0.853, 0.614]}
        />
        <mesh
          geometry={nodes.Cusion002.geometry}
          material={materials['Cusion white']}
          position={[-0.866, 0.611, -0.291]}
          rotation={[2.531, -0.498, 1.21]}
          scale={[0.39, 0.853, 0.698]}
        />
        <mesh
          geometry={nodes.Sofa.geometry}
          material={materials['rød black']}
          position={[0.028, 0.224, -0.289]}
          rotation={[0, -Math.PI / 2, 0]}
          scale={[1, 1, 1.013]}
        />
        <mesh
          geometry={nodes.Legs.geometry}
          material={materials['Legs metallic']}
          position={[-0.01, 0.094, -0.312]}
          rotation={[-Math.PI, 0, -Math.PI]}
        />
      </group>
    </group>
  );
}

// Preload the GLTF model and the textures used in the component
useGLTF.preload(sofaScene);
useTexture.preload([sofaNormal, sofaRoughness, sofa, cushionNormal, cushionRoughness, cushionWhite, cushionYellow]);
