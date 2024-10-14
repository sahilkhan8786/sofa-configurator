import React, { useEffect } from 'react';
import { useTexture } from '@react-three/drei';

// SOFA TEXTURES
import sofaNormal from '../assets/sofa_normal.webp';
import sofaRoughness from '../assets/sofa_roughness.webp';
import sofaBlack from '../assets/Sofa__black.webp';
import sofaBlue from '../assets/sofa_bue.webp';
import sofa from '../assets/sofa.webp';

// CUSHION TEXTURES
import cushionNormal from '../assets/cushion_normal.webp';
import cushionRoughness from '../assets/cushion_roughness.webp';
import cushionWhite from '../assets/cushion_white.webp';
import cushionYellow from '../assets/cushion_yellow.webp';

export default function Configurations({ setSofaTexture, setCushionTexture }) {

    // Preload textures when component mounts
    useEffect(() => {
        // Preload all textures at once
        [cushionNormal, cushionRoughness, cushionWhite, cushionYellow, sofaNormal, sofaRoughness, sofa, sofaBlue, sofaBlack].forEach(useTexture.preload);

        // Set default textures when the component mounts
        setCushionTexture(cushionNormal);
        setSofaTexture(sofaNormal);
    }, [setCushionTexture, setSofaTexture]);

    return (
        <article className='absolute top-0 left-0 ml-16'>
            <h1>Configurations</h1>
            <div>
                <h2>Cushions</h2>
                <div className='flex gap-2'>
                    {/* Dynamically render the texture buttons */}
                    <TextureButton onClick={() => setCushionTexture(cushionNormal)} color="#c3bdd9" />
                    <TextureButton onClick={() => setCushionTexture(cushionRoughness)} color="#f4a7ec" />
                    <TextureButton onClick={() => setCushionTexture(cushionWhite)} color="#d7dbe2" />
                    <TextureButton onClick={() => setCushionTexture(cushionYellow)} color="#dedecc" />
                </div>
            </div>
            <div>
                <h2>Sofa</h2>
                <div className='flex gap-2'>
                    <TextureButton onClick={() => setSofaTexture(sofaNormal)} color="#c3bdd9" />
                    <TextureButton onClick={() => setSofaTexture(sofaRoughness)} color="#e2c3da" />
                    <TextureButton onClick={() => setSofaTexture(sofa)} color="#a7845d" />
                    <TextureButton onClick={() => setSofaTexture(sofaBlue)} color="#9cb2c3" />
                    <TextureButton onClick={() => setSofaTexture(sofaBlack)} color="#514a44" />
                </div>
            </div>
        </article>
    );
}

// Reusable component for the texture buttons
function TextureButton({ onClick, color }) {
    return (
        <span
            className='size-12 rounded-full cursor-pointer shadow-xl hover:shadow-black/75'
            style={{ backgroundColor: color }}
            onClick={onClick}>
        </span>
    );
}
