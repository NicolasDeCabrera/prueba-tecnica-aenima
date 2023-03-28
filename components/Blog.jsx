import styled, { css } from 'styled-components'
import { Contenedor, CardTitle, TituloSecciones } from '@/pages/_app'
import Image from 'next/image'


export default function Blog() {

    const ContGeneral = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: calc(100% - 180px);
    padding: 0 90px;
    @media (max-width: 2700px) {
        width: calc(100% - 1600px);
        padding: 0px 800px;
    }
    @media (max-width: 1920px) {
        width: calc(100% - 600px);
        padding: 0px 300px;
    }
    @media (max-width: 1200px) {
        width: calc(100% - 200px);
        padding: 0px 100px;
    }
    @media (max-width: 560px) {
        width: 100%;
        padding: 0;
    }
`

    const TituloBlog = styled(TituloSecciones)`
    @media (max-width: 576px) {
        padding-left: 50px;
    }
`

    const ContArticulosGrande = styled.div`
    display: flex;
    flex-direction: column;
    gap:30PX;
    border-radius: 5px;
    width: 67%;
    @media (max-width: 576px) {
        width: 100%;
    }
`

    const ContArtGrandeImg = styled.div`
    display: flex;
    flex-direction: column;
    background-image: url(${({ img }) => img});
    border-radius: 5px;
    height: 325px;
    transition: all .5s;
    z-index: 100;
    cursor: pointer;

    &:hover{
        box-shadow: 0px 15px 7px #00000052;
        scale: 1.01;
    }
 
    @media (max-width: 1920px) {
        height: 430px;
    }
    @media (max-width: 1200px) {
        height: 430px;
    }

    @media (max-width: 576px) {
        height: 430px;
    }
   
`

    const CategoriaArticuloImg = styled.h6`
    color:#fff;
    margin: 0;
    font-size: .78rem;
    @media (max-width: 576px) {
        font-size: 1.2rem;
    }
`

    const TituloArticuloImg = styled.h3`
    color:#fff;
    margin: 0;
    margin-bottom: 5px;
    font-size: 1.1rem;

    @media (max-width: 576px) {
        font-size: 1.5rem;
    }
`
    const TextoArticuloImg = styled.p`
    color:#fff;
    margin: 0;
    margin-bottom: 23px;
    font-weight: 500;
    font-size: .75rem;
    @media (max-width: 576px) {
        display: none;
    }
`
    const ContenedorArticulosSmall = styled.div`
    display: flex;
    flex-direction: column;
    gap: 20px;
    width: 33%;
    height: 400px;
    @media (max-width: 576px) {
        display: none;
    }
`

    const ArticuloSmall = styled.div`
    height: max-content;
    display: flex;
    flex-direction: column;
    position: relative;
    cursor: pointer;
    transition: all .5s;
    z-index: 100;
    &:hover{
        box-shadow: 0px 15px 7px #00000052;
        scale: 1.01;
    }
`
    const ImgArticuloSmall = styled.div`
    width: 100%;
    height: 150px;
    background-image: url(${({ img }) => img});
    background-size: cover;
    
    @media (max-width: 1920px) {
        height: 200px;
    }
    
`

    const ContentArticuloSmall = styled.div`
    width: calc(100% - 10px);
    height: calc(60px - 10px);
    display: flex;
    flex-direction: column;
    padding: 5px;
`

    const InfoTiempo = styled.div`
    color: #ced2d3;
    font-size: .57rem;
    font-weight: 500;
    margin-top: 8px;
    display: flex;
    align-items: center;
    gap: 3px;
    
    @media (max-width: 576px) {
        font-size: 1rem;
    }
`

    return (
        <div id='Blog'>
            <ContGeneral>
                <Contenedor flex align_items="center" w="100%" mt="60px">
                    <TituloBlog>BLOG</TituloBlog>
                </Contenedor>
                <Contenedor flex gap="13px" w="100%">

                    <ContArticulosGrande flex column gap="30px" br="5px" w="67%">

                        <ContArtGrandeImg img="/img/articulo_big_01.png">
                            <Contenedor flex column justify_content="space-between" px="30px" py="30px" h="100%">
                                <CategoriaArticuloImg>CIUDAD</CategoriaArticuloImg>
                                <Contenedor>
                                    <TituloArticuloImg>Artìculo de puente</TituloArticuloImg>
                                    <TextoArticuloImg>Un puente es una construcciòn que permite salvar un accidente geogràfico</TextoArticuloImg>
                                    <InfoTiempo> <Image src='/iconos/time.png' width={12} height={12} alt="reloj" /> Hace 2m</InfoTiempo>
                                </Contenedor>
                            </Contenedor>
                        </ContArtGrandeImg>

                        <ContArtGrandeImg img="/img/articulo_big_02.png">
                            <Contenedor flex column justify_content="space-between" px="30px" py="30px" h="100%">
                                <CategoriaArticuloImg>AVENTURA</CategoriaArticuloImg>
                                <Contenedor>
                                    <TituloArticuloImg>Artìculo de bosque</TituloArticuloImg>
                                    <TextoArticuloImg>Lugar poblado de árboles y arbustos. Área con una importante de</TextoArticuloImg>
                                    <InfoTiempo> <Image src='/iconos/time.png' width={12} height={12} alt="reloj" /> Hace 15m</InfoTiempo>
                                </Contenedor>
                            </Contenedor>
                        </ContArtGrandeImg>

                    </ContArticulosGrande>

                    <ContenedorArticulosSmall>

                        <ArticuloSmall >
                            <ImgArticuloSmall img="/img/articulo_small_01.png">
                            </ImgArticuloSmall>
                            <ContentArticuloSmall>
                                <CardTitle>Artìculo de elefante</CardTitle>
                                <InfoTiempo> <Image src='/iconos/time.png' width={12} height={12} alt="reloj" /> Hace 3h</InfoTiempo>
                            </ContentArticuloSmall>
                        </ArticuloSmall>

                        <ArticuloSmall >
                            <ImgArticuloSmall img="/img/articulo_small_02.png">
                            </ImgArticuloSmall>
                            <ContentArticuloSmall>
                                <CardTitle>Artìculo de loro</CardTitle>
                                <InfoTiempo> <Image src='/iconos/time.png' width={12} height={12} alt="reloj" /> Hace 4h</InfoTiempo>
                            </ContentArticuloSmall>
                        </ArticuloSmall>

                        <ArticuloSmall >
                            <ImgArticuloSmall img="/img/articulo_small_03.png">
                            </ImgArticuloSmall>
                            <ContentArticuloSmall>
                                <CardTitle>Artìculo de camino</CardTitle>
                                <InfoTiempo> <Image src='/iconos/time.png' width={12} height={12} alt="reloj" /> Hace 8h</InfoTiempo>
                            </ContentArticuloSmall>
                        </ArticuloSmall>


                    </ContenedorArticulosSmall>
                </Contenedor>

            </ContGeneral>
        </div>
    )
}