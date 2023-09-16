'use client'
import Card from '@/components/ui/organisms/Card/Card'
import Footerball from '@/components/ui/Footerball';
import Headerball from '@/components/ui/Headerball';
import Layout from '@/components/ui/Layout';
import tw from "twin.macro";

export default function Home() {
  return (
    <main tw='flex flex-col w-full min-h-screen'>
      <Layout className={'p-0'}>
        <div tw="flex flex-col items-center  h-screen bg-light">
          <Headerball />
          
          {/* <Card  /> */}
          <div className='bg-light'>
            <h1>Bienvenido a Pokedev</h1>
          </div>
          <p className='my-4 h-1/4 text-base font-medium md:text-sm sm:text-xs'>¡Ingresa y usa la búsqueda avanzado para encontrar Pokemón por su tipo, debilidad, habilidad y demas datos! </p>
          <Footerball />
        </div>
      </Layout>
    </main>
  )
}
