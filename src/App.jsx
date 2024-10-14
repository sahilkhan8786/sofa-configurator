import React, { Suspense, useState, useCallback } from "react";
import Configurations from "./components/Configurations";
import ModelCanvas from "./components/ModelCanvas";
import { useGLTF, useTexture } from '@react-three/drei';

// Preload assets
import sofaScene from './assets/sofa_scene.glb';
import sofaNormal from './assets/sofa_normal.webp';
import cushionNormal from './assets/cushion_normal.webp';

useGLTF.preload(sofaScene);
useTexture.preload(sofaNormal);
useTexture.preload(cushionNormal);

export default function App() {
  const [sofaTexture, setSofaTexture] = useState(sofaNormal);
  const [cushionTexture, setCushionTexture] = useState(cushionNormal);

  // Use useCallback to memoize setter functions
  const handleSetSofaTexture = useCallback((texture) => setSofaTexture(texture), []);
  const handleSetCushionTexture = useCallback((texture) => setCushionTexture(texture), []);

  return (
    <Suspense fallback={<div aria-live="polite" className="flex items-center justify-center w-full h-screen">Loading Model...</div>}>
      <section className='w-full h-screen relative' role="main">
        {/* Canvas displaying the 3D model */}
        <ModelCanvas sofaTexture={sofaTexture} cushionTexture={cushionTexture} />

        {/* Sidebar for configuration controls */}
        <Configurations setSofaTexture={handleSetSofaTexture} setCushionTexture={handleSetCushionTexture} />
      </section>
    </Suspense>
  );
}
