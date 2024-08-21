import { Suspense, useState } from "react"
import Configurations from "./components/Configurations"
import ModelCanvas from "./components/ModelCanvas"

export default function App() {
  const [sofaTexture, setSofaTexture] = useState(null)
  const [cushionTexture, setCushionTexture] = useState(null)


  return (
    <Suspense fallback={<div className="flex items-center justify-center w-full h-screen">Loading Model...</div>}>
      <section className='w-full h-screen relative'>
        <ModelCanvas sofaTexture={sofaTexture} cushionTexture={cushionTexture} />
        <Configurations setSofaTexture={setSofaTexture} setCushionTexture={setCushionTexture} />
      </section>
    </Suspense>
  )
}
