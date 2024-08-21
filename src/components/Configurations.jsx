import React, { useEffect } from 'react';

// SOFA TEXTURES
import sofaNormal from '../assets/sofa_normal.webp';
import sofaRoughness from '../assets/sofa_roughness.webp';
import sofa from '../assets/sofa.webp';

// CUSHION TEXTURES
import cushionNormal from '../assets/cushion_normal.webp';
import cushionRoughness from '../assets/cushion_roughness.webp';
import cushionWhite from '../assets/cushion_white.webp';
import cushionYellow from '../assets/cushion_yellow.webp';


export default function Configurations({ setSofaTexture, setCushionTexture }) {
    useEffect(() => {
        setCushionTexture(cushionNormal)
        setSofaTexture(sofaNormal)
    }, [setCushionTexture, setSofaTexture])


    return (
        <article className='absolute top-0 left-0'>
            <h1>Configurations</h1>
            <div>
                <h2>Cushions</h2>
                <div className='flex gap-2'>
                    <span className='size-12 bg-red-500' onClick={() => setCushionTexture(cushionNormal)}></span>
                    <span className='size-12 bg-red-500' onClick={() => setCushionTexture(cushionRoughness)}></span>
                    <span className='size-12 bg-red-500' onClick={() => setCushionTexture(cushionWhite)}></span>
                    <span className='size-12 bg-red-500' onClick={() => setCushionTexture(cushionYellow)}></span>
                </div>
            </div>
            <div>
                <h2>Sofa</h2>
                <div className='flex gap-2'>
                    <span className='size-12 bg-red-500' onClick={() => setSofaTexture(sofaNormal)}></span>
                    <span className='size-12 bg-red-500' onClick={() => setSofaTexture(sofaRoughness)}></span>
                    <span className='size-12 bg-red-500' onClick={() => setSofaTexture(sofa)}></span>
                </div>
            </div>
        </article>
    );
}
