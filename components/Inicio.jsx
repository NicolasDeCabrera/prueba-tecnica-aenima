import styled, { keyframes } from 'styled-components'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLocationDot } from '@fortawesome/free-solid-svg-icons';
import Image from 'next/image'

export default function Inicio() {



  const Container = styled.div`
      position: absolute;
      width: 100%;
      height: 100%;
      background-repeat: no-repeat;
      background-image: url("../img/Viajes_Hero.jpg");
      z-index: 0;
      top: 0px;
      padding-top: 50px;
      background-size: 100vw 93vh;

      @media (max-width: 576px) {
        top: 50px;
      }
    `
  const fadeIn = keyframes`
      from{
        opacity: 0;
      }
      to{
        opacity: 1;
      }
    `

  const floating = keyframes`
    0% { transform: translate(0,  0px); }
    50%  { transform: translate(0, 15px); }
    100%   { transform: translate(0, -0px); } 
  `

  const ContenedorTituloInicio = styled.div`
      display: flex;
      flex-direction: column;
      animation:  ${fadeIn} 1s forwards;
      width: 420px;
      margin-top: 13.5%;
      margin-left: 10%;
      @media (max-width: 1920px) {
        width: 580px;
      }
      @media (max-width: 1200px) {
        width: 450px;
      }
      @media (max-width: 992px) {
        width: 350px;
      }
      @media (max-width: 768px) {
        width: 320px;
      }
      @media (max-width: 640px) {
        width: 310px;
        margin-top: 10%;
      }
      @media (max-width: 576px) {
        width: 300px;
        margin: auto;
        margin-top: 30%;
      }
    `

  const Titulo = styled.h1`
      color: #fff;
      margin-bottom: 15px;
      
      @media (max-width: 1920px) {
        font-weight: 700;
        font-size: 3rem;
      }
      @media (max-width: 1200px) {
        font-weight: 800;
        font-size: 2.15rem;
      }
      @media (max-width: 992px) {
        font-weight: 800;
        font-size: 1.7rem;
      }
      @media (max-width: 768px) {
        font-weight: 800;
        font-size: 1.5rem;
      }
      @media (max-width: 576px) {
        font-size: 1.65rem;
        font-weight: 700;
        
      }
    `
  const Hr = styled.div`
      width: 100%;
      background-color: #fff;
      height: .1rem;
      @media (max-width: 1920px) {
        height: .1rem;
      }
      @media (max-width: 576px) {
        height: .18rem;
      }
    `

  const SubTitulo = styled.h3`
      color: #fff;
      margin: 15px 0px 0px 0px;

      @media (max-width: 1920px) {
        font-size: 1.5rem;
      }
      @media (max-width: 1200px) {
        font-size: 1.2rem;
      }
      @media (max-width: 992px) {
        font-size: .9rem;
      }
      @media (max-width: 768px) {
        font-size: .8rem;
      }
      @media (max-width: 576px) {
        font-size: 1.4rem;
        font-weight: 700;
        line-height: 2.3rem;
      }
    `
  const Parrafo = styled.p`
      color: #fff;
      font-size: .75rem;
      font-weight: 500;
      line-height: 1.2rem;
      @media (max-width: 1920px) {
        font-size: .9rem;
      }
      @media (max-width: 1200px) {
        font-size: .8rem;
      }
      @media (max-width: 992px) {
        font-size: .7rem;
      }
      @media (max-width: 768px) {
        font-size: .6rem;
      }
      @media (max-width: 576px) {
        display: none;
      }
    `

  const DivNumeroProximaAventura = styled.div`
      width: 100%;
      display: flex;
      color: aliceblue;
    `
  const EnterLine = keyframes`
    from{
      left: -195px;
    }
    to{
      left: 0;
    }
  `
  const EnterCircle = keyframes`
   from{
     left: -100px;
   }
   to{
     left: 97px;
   }
 `
  const DivContenedorNumero = styled.div`
      width: 60%;
      padding-top: 80px;
      @media (max-width: 1920px) {
        padding-top: 180px;
      }
      @media (max-width: 1200px) {
        padding-top: 120px;
      }
      @media (max-width: 992px) {
        padding-top: 100px;
      }
      @media (max-width: 768px) {
        padding-top: 80px;
      }
      @media (max-width: 720px) {
        padding-top: 0;
      }
      @media (max-width: 576px) {
        padding-top: 80px;
      }
    `
  const DivNumero = styled.div`
      display: flex;
      align-items: center;
      width: 300px;
      height: 150px;
    `
  const DivNumeroCirculoFuera = styled.div`
      display: flex;
      justify-content: center;
      align-items: center;
      width: 45px;
      height: 45px;
      background-color: #8e8e8f;
      border-radius: 50%;
      position: relative;
      left:97px;
      @media (min-width: 992px) {
        animation: ${EnterCircle} 1s forwards;
      }
      @media (max-width: 576px) {
        left: 32px;
      }

    `

  const DivNumeroCirculoDentro = styled.div`
      display: flex;
      justify-content:center;
      align-items: center;
      width: 30px;
      height: 30px;
      background-color: #fff;
      border-radius: 50%;
      `

  const DivNumeroLinea = styled.div`
      width: 105px;
      height: 4px;
      background-color: #fa6980;
      position: absolute;
      z-index: 11;

      @media (min-width: 992px) {
        animation: ${EnterLine} 1s forwards;
      }
      
      @media (max-width: 576px) {
        width: 40px;
      }
      
    `

  const Numero = styled.span`
      color: #333;
      font-size: .6rem;
      font-weight: 800;
    `

  const DivContenedorProximaAventura = styled.div`
      width: 40%;
      display: flex;
      justify-content: center;
      align-items: center;

      @media (max-width: 576px) {
        display: none;
      }

    `

  const DivProximaAventura = styled.div`
      width: 150px;
      height: 78px;
      border: dashed 2px #575a5c;
      border-radius: 5px;
      background-color: #44444452;
      margin-bottom: 35px;
      margin-left: 30px;
      padding: 20px ;
      display: flex;
      flex-direction: column;
      animation-name: ${floating};
      animation-duration: 6s;
      animation-iteration-count: infinite;
      animation-timing-function: ease-in-out;
      cursor:pointer;

      &:hover{
        background-color: #35353588;
        scale: 1.01;
      } 
      @media (max-width: 1920px) {
        padding: 20px;
        width: 180px;
        height: 110px;
      }
      @media (max-width: 1200px) {
        padding: 20px;
        width: 150px;
        height: 78px;
      }

      @media (max-width: 720px) {
        padding: 10px;
        width: 120px;
        height: 60px;
      }
    `

  const DivProxAventuraContenedorTitulo = styled.div`
      display: flex;
      width: 100%;
      justify-content: space-between;
      align-items: center;
    `

  const ProxAventuraTitulo = styled.span`
      color: #fa6980;
      font-size: .75rem;
      font-weight: 700;
      @media (max-width: 1920px) {
        font-size: .8rem;
      }
      @media (max-width: 1200px) {
        font-size: .75rem;
      }
      @media (max-width: 720px) {
        font-size: .5rem;
      }
    `
  const EuropaMeridional = styled.span`
      color: #fff;
      font-size: .75rem;
      font-weight: 700;
      margin-top: 5px;
      @media (max-width: 1920px) {
        font-size: .9rem;
      }
      @media (max-width: 1200px) {
        font-size: .75rem;
      }
      @media (max-width: 720px) {
        font-size: .5rem;
      }
    `
  const ProxAvenParrafo = styled.p`
      color: #eee;
      font-size: .65rem;
      font-weight: 400;
      line-height: 1.1rem;
      margin-top: 5px;
      @media (max-width: 1920px) {
        font-size: .85rem;
      }
      @media (max-width: 1200px) {
        font-size: .65rem;
      }
      @media (max-width: 720px) {
        font-size: .5rem;
      }
    `

  return (
    <div id='Inicio'>
      <Container>
        <ContenedorTituloInicio>
          <Titulo><FontAwesomeIcon width={18} icon={faLocationDot} /> AMERICA DEL SUR</Titulo>
          <Hr />
          <SubTitulo>Lugares maravillosos por Amèrica del Sur</SubTitulo>
          <Parrafo>Estos son algunos lugares que elijen la mayoría de los turistas que visitan Amèrica del sur.</Parrafo>
        </ContenedorTituloInicio>
        <DivNumeroProximaAventura>
          <DivContenedorNumero>
            <DivNumero>
              <DivNumeroLinea />
              <DivNumeroCirculoFuera>
                <DivNumeroCirculoDentro>
                  <Numero>01</Numero>
                </DivNumeroCirculoDentro>
              </DivNumeroCirculoFuera>
            </DivNumero>
          </DivContenedorNumero>
          <DivContenedorProximaAventura>
            <DivProximaAventura>
              <DivProxAventuraContenedorTitulo>
                <ProxAventuraTitulo>PRÓXIMA AVENTURA </ProxAventuraTitulo>
                <Image src='/iconos/arrow.png' width={5} height={8} alt="arrow" />
              </DivProxAventuraContenedorTitulo>
              <EuropaMeridional>Europa Meridional</EuropaMeridional>
              <ProxAvenParrafo>Forman parte veinte paises. ej. España, Francia, etc</ProxAvenParrafo>
            </DivProximaAventura>
          </DivContenedorProximaAventura>
        </DivNumeroProximaAventura>
      </Container>
    </div>
  )
}