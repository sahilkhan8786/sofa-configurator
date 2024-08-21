import React, { Suspense } from 'react';
import { Canvas } from '@react-three/fiber';
import { Center, AccumulativeShadows, RandomizedLight, Environment, OrbitControls, Html } from '@react-three/drei';
import { Model } from '../Sofa_scene';

export default function ModelCanvas({ sofaTexture, cushionTexture }) {
    return (
        <Canvas gl={{ antialias: false, preserveDrawingBuffer: true }} shadows camera={{ position: [-2, 1, 6], fov: 35 }}>

            <group position={[0, -0.75, 0]}>
                <Center top>
                    <Model sofaTextureImage={sofaTexture} cushionTextureImage={cushionTexture} />
                </Center>
                <AccumulativeShadows>
                    <RandomizedLight position={[2, 5, 5]} />
                </AccumulativeShadows>
            </group>
            <OrbitControls makeDefault minPolarAngle={0} maxPolarAngle={Math.PI / 2} />
            <Environment preset="apartment" background blur={1} />

        </Canvas>
    );
}
