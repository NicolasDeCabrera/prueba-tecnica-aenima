import styled, {css} from 'styled-components'

//GLOBALES
export const Contenedor = styled.div`
  width: calc(${({w})=> w} - ${({px})=> px ? ( px * 2 ) : "0px"});
  height: ${({h})=> h};
  padding: ${({py})=> py ? py : "0px"} ${({px})=> px ? px : "0px"};
  margin-top: ${({mt})=> mt ? mt : "0px"};
  margin-right: ${({mr})=> mr ? mr : "0px"};
  margin-bottom: ${({mb})=> mb ? mb : "0px"};
  margin-left: ${({ml})=> ml ? ml : "0px"};
  background-color: ${({bg})=> bg ? bg : "transparent"};
  border-radius: ${({br})=> br ? br : "0px"};
  ${({img})=> img && css`
    background-image: url(${img});
    background-size: contain;
  `}
  ${({flex})=> flex && css`
    display: flex;
  `}
  ${({gap})=> gap && css`
    gap: ${gap};
  `}
  ${({column})=> column && css`
    flex-direction: column;
  `}
  ${({align_items})=> align_items && css`
  align-items: ${align_items};
  `}
  ${({justify_content})=> justify_content && css`
    justify-content: ${justify_content};
  `}
`
export const TituloSecciones = styled.h3`
  color: #2e343b;
  font-size: 1.1rem;
  font-weight: 800;
  @media (max-width: 576px) {
    font-size: 2rem;
  }
`

export const Card = styled.div`
  width: 265px;
  height: max-content;
  display: flex;
  flex-direction: column;
  border-radius: 5px;
  position: relative;
  transition: all .5s;
  cursor: pointer;

  ${({isNew})=> isNew ? css`
    &::before{
      position: absolute;
      background-color: #fa6980;
      border-radius: 8px;
      padding: 4px;
      content: "NUEVO";
      font-size: .75rem;
      font-weight: 600;
      color: #fff;;
      top: 130px;
      left: 25px;

      @media (max-width: 576px) {
        top: 165px;
        font-size: 1rem;
        padding: 8px 10px;
      }
    }

  `: css`
    @media (max-width: 576px) {
      display: none;
    }
  `}
  
  &:hover{
        box-shadow: 0px 15px 7px #00000052;
        scale: 1.03;
  }

  @media (max-width: 992px) {
    width: 200px;
  }

  @media (max-width: 768px) {
    width: 200px;
  }

  @media (max-width: 650px) {
    width: 160px;
  }

  @media (max-width: 576px) {
    width: 100%;
  }
  

`
export const CardImg = styled.div`
  width: 100%;
  background-image: url(${({img})=> img});
  background-size: cover;
  border-radius: 5px 5px 0px 0px;
  background-color: #333;

  @media (min-width: 576px) {
    height: 140px;
  }
  @media (max-width: 576px) {
    height: 180px;
  }

`

export const CardContent = styled.div`
  width: calc(100% - 50px);
  display: flex;
  flex-direction: column;
  background-color: #fff;
  padding: 25px;
  border-radius: 0px 0px 5px 5px;
  @media (min-width: 992px) {
    height: calc(80px - 30px);
  }
  @media (max-width: 576px) {
    height: calc(140px - 30px);
  }
`

export const CardTitle = styled.h5`
  color: #2f343b;
  font-size: .75rem;
  font-weight: 800;
  margin: 0;
  margin-top: 5px;
  @media (max-width: 576px) {
      font-size: 1.1rem;
      margin-top: 15px;
  }
`
export const CardText = styled.p`
  color: #7a838d;
  font-size: .57rem;
  font-weight: 500;
  margin: 0;
  margin-top: 5px;
  @media (max-width: 576px) {
      font-size: 1rem;
      line-height: 1.8rem;
      
  }
`
export const Footer = styled.div`
  display: flex;
  justify-content: space-between;
  width: calc(100% - 180px);
  height: 60px;
  background-color: #2a3037;
  margin-top: 50px;
  padding: 30px 90px;
  @media (max-width: 576px) {
     height: 10px;
  }

`

export default function App({ Component, pageProps }) {
  return <Component {...pageProps} />
}
