import Head from 'next/head'
import Image from 'next/image'
import Layout from '@/components/Layout'
import styled from 'styled-components'
import { Contenedor, Footer } from './_app'
import Tendencias from '@/components/Tendencias'
import Blog from '@/components/Blog'
import Inicio from '@/components/Inicio'



const Seccion = styled.div`
  height: max-content;
  width: 100%;
  margin-top: 93vh;
  background: rgb(235,235,235);
  background: linear-gradient(180deg, rgba(235,235,235,1) 0%, rgba(235,235,235,1) 41%, rgba(255,255,255,1) 41%, rgba(255,255,255,1) 100%);
  @media (max-width: 576px) {
    background: linear-gradient(180deg, rgba(235,235,235,1) 0%, rgba(235,235,235,1) 41%, rgba(255,255,255,1) 50%, rgba(255,255,255,1) 100%);
  }
`  


export default function Home() {
  return (
    <>
      <Layout>
      <Head>
        <title>AENIMA_FRONT-end_prueba</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
        <link href="https://fonts.googleapis.com/css2?family=Montserrat:wght@100;200;300;400;500;600;700;800;900;1000&display=swap" rel="stylesheet"></link>
        <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.15.4/css/all.css" integrity="sha384-DyZ88mC6Up2uqS4h/KRgHuoeGwBcD4Ng9SiP4dIRy0EXTlnuz47vAwmeGwVChigm" crossorigin="anonymous"/>
        <script defer src="https://use.fontawesome.com/releases/v5.15.4/js/all.js" integrity="sha384-rOA1PnstxnOBLzCLMcre8ybwbTmemjzdNlILg8O7z1lUkLXozs4DHonlDtnE7fpc" crossorigin="anonymous"></script>
      </Head>
        <Inicio/>
        <Seccion>
          <Tendencias/>  
          <Blog/>
          <Footer>
            <Image src='/logo/logo_02.png' width={60} height={12} alt="logo"/>
            <Contenedor flex gap="10px">
              <Image src='/iconos/instagram.png' width={12} height={12} alt="intagram"/>
              <Image src='/iconos/facebook.png' width={12} height={12} alt="facebook"/>
            </Contenedor>
          </Footer>
        </Seccion>
      </Layout>
    </>
  )
}
