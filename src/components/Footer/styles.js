import styled from "styled-components";

const FooterContainer = styled.div`
position: fixed ; 
bottom: 0 ; 
height: 70px ; 
width: 100vw ; 
background-color: #181818 ; 
color: #fff ; 
display: flex ;
justify-content :space-between ;  
`

const FooterLeft = styled.div`
flex: 0.3 ; 
display: flex ; 
align-items: center ;
max-width: 300px ; 

& img { 
    height: 60px ; 
    width: 60px ; 
    margin-right: 20px ; 
    object-fit: contain ; 
}`
const FooterCenter = styled.div`
flex: 0.4 ; 
display: flex ; 
align-items: center ; 
justify-content: space-between ; 
max-width 300px `



const FooterRight = styled.div`

flex: 0.3 ; 
display: flex ; 
align-items: center ;
padding-left: 20px ;
justify-content: space-between ; 

& .MuiSlider-root {
    color: #1ed760 ; 
    
    margin-right: 230px ; 
  
}
 `


export {FooterContainer, FooterCenter, FooterRight, FooterLeft} 