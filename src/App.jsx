import { Suspense, useState } from "react";
import Configurations from "./components/Configurations";
import ModelCanvas from "./components/ModelCanvas";
import { useGLTF, useTexture } from '@react-three/drei';

// Preload textures and models
import sofaScene from './assets/sofa_scene.glb';
import sofaNormal from './assets/sofa_normal.webp';
import cushionNormal from './assets/cushion_normal.webp';

// Preload all the necessary assets before showing the app
useGLTF.preload(sofaScene);  // Preload the GLTF model
useTexture.preload(sofaNormal);  // Preload default sofa texture
useTexture.preload(cushionNormal);  // Preload default cushion texture

export default function App() {
  const [sofaTexture, setSofaTexture] = useState(sofaNormal);  // Default sofa texture
  const [cushionTexture, setCushionTexture] = useState(cushionNormal);  // Default cushion texture

  return (
    <Suspense fallback={<div className="flex items-center justify-center w-full h-screen">Loading Model...</div>}>
      <section className='w-full h-screen relative'>
        {/* Canvas displaying the 3D model */}
        <ModelCanvas sofaTexture={sofaTexture} cushionTexture={cushionTexture} />

        {/* Sidebar for configuration controls */}
        <Configurations setSofaTexture={setSofaTexture} setCushionTexture={setCushionTexture} />
      </section>
    </Suspense>
  );
}
