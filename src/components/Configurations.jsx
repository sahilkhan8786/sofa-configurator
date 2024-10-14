import React, { useEffect } from 'react';

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
import { useTexture } from '@react-three/drei';
export default function Configurations({ setSofaTexture, setCushionTexture }) {
    useEffect(() => {
        setCushionTexture(cushionNormal);
        setSofaTexture(sofaNormal);
    }, [setCushionTexture, setSofaTexture]);

    return (
        <article className='absolute top-0 left-0 ml-16'>
            <h1>Configurations</h1>
            <div>
                <h2>Cushions</h2>
                <div className='flex gap-2'>
                    <span className='size-12 bg-[#c3bdd9] rounded-full cursor-pointer shadow-xl hover:shadow-black/75' onClick={() => setCushionTexture(cushionNormal)}></span>
                    <span className='size-12 bg-[#f4a7ec] rounded-full cursor-pointer shadow-xl hover:shadow-black/75' onClick={() => setCushionTexture(cushionRoughness)}></span>
                    <span className='size-12 bg-[#d7dbe2] rounded-full cursor-pointer shadow-xl hover:shadow-black/75' onClick={() => setCushionTexture(cushionWhite)}></span>
                    <span className='size-12 bg-[#dedecc] rounded-full cursor-pointer shadow-xl hover:shadow-black/75' onClick={() => setCushionTexture(cushionYellow)}></span>
                </div>
            </div>
            <div>
                <h2>Sofa</h2>
                <div className='flex gap-2'>
                    <span className='size-12 bg-[#c3bdd9] rounded-full cursor-pointer shadow-xl hover:shadow-black/75' onClick={() => setSofaTexture(sofaNormal)}></span>
                    <span className='size-12 bg-[#e2c3da] rounded-full cursor-pointer shadow-xl hover:shadow-black/75' onClick={() => setSofaTexture(sofaRoughness)}></span>
                    <span className='size-12 bg-[#a7845d] rounded-full cursor-pointer shadow-xl hover:shadow-black/75' onClick={() => setSofaTexture(sofa)}></span>
                    <span className='size-12 bg-[#9cb2c3] rounded-full cursor-pointer shadow-xl hover:shadow-black/75' onClick={() => setSofaTexture(sofaBlue)}></span>
                    <span className='size-12 bg-[#514a44] rounded-full cursor-pointer shadow-xl hover:shadow-black/75' onClick={() => setSofaTexture(sofaBlack)}></span>
                </div>
            </div>
        </article>
    );
}

[cushionNormal, cushionRoughness, cushionWhite, cushionYellow, sofaNormal, sofaRoughness, sofa, sofaBlue, sofaBlack].forEach(useTexture.preload)
