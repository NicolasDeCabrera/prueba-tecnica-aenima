import styled, { css } from 'styled-components'
import { Contenedor, Card, CardImg, CardContent, CardText, CardTitle, TituloSecciones } from '@/pages/_app'


export default function Tendencias() {

    //TENDENCIAS
    const ContenedorTendencias = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: calc(100% - 184px);
    padding: 0px 92px;
    @media (max-width: 2700px) {
        width: calc(100% - 1600px);
        padding: 0px 800px;
    }
    @media (max-width: 1920px) {
        width: calc(100% - 400px);
        padding: 0px 200px;
    }
    @media (max-width: 1200px) {
        width: calc(100% - 200px);
        padding: 0px 100px;
    }
    @media (max-width: 768px) {
        width: calc(100% - 80px);
        padding: 0px 40px;
    }
    @media (max-width: 576px) {
        width: calc(100% - 80px);
        padding: 0px 40px;
    }
`

    const ContenedorCardsTendencias = styled.div`
    width: calc(100%);
    display: flex;
    justify-content: space-between;
    align-items: center;
    
`

    return (
        <div id='Tendencias'>
            <ContenedorTendencias>
                <Contenedor flex align_items="center" w="100%" mt="40px">
                    <TituloSecciones>TENDENCIAS</TituloSecciones>
                </Contenedor>
                <ContenedorCardsTendencias>

                    <Card isNew>
                        <CardImg img="/img/card_01.png">
                        </CardImg>
                        <CardContent>
                            <CardTitle>Montañas y magia</CardTitle>
                            <CardText>Aquí la descripción para <b>Montañas y magia.</b></CardText>
                        </CardContent>
                    </Card>

                    <Card>
                        <CardImg img="/img/card_02.png">
                        </CardImg>
                        <CardContent>
                            <CardTitle>Playas y sol</CardTitle>
                            <CardText>La descripción de <b>Playas y sol</b> debe ser esta.</CardText>
                        </CardContent>
                    </Card>

                    <Card>
                        <CardImg img="/img/card_03.png">
                        </CardImg>
                        <CardContent>
                            <CardTitle>Nieve y aventura</CardTitle>
                            <CardText>Contiene la información de <b>Nieve y aventura.</b></CardText>
                        </CardContent>
                    </Card>

                </ContenedorCardsTendencias>
            </ContenedorTendencias>
        </div>
    )
}