import styled from 'styled-components' ; 

const BodyContainer = styled.div`
flex: 0.8 ;
background: linear-gradient(#340034, #000) ;
color: #fff ;
height: 100vh ; 
padding: 30px ; 
overflow-y: overlay ;
&::-webkit-scrollbar{
    display: none ;
}`

const HeaderContainer = styled.div`
display: flex ; 
justify-content: space-between ; 
margin-bottom: 30px ; `

const HeaderLeft = styled.div`
display: flex ; 
align-items: center ; 
flex: 0.5 ; 
 
color: #181818 ; 
padding: 10px ;
border-radius: 30px ;


}`

const HeaderRight = styled.div`
display: flex ; 
align-items: center ; 
& h4 { 
    margin-left: 15px ; 
}`

const Info = styled.div`
    display: flex ;
    align-items: flex-end ; 
    padding: 10px ; 
& img {
    width: 20vw ; 
    margin: 0 20px ; 
    box-shadow: 0 4px 60px #000 ; 
}
`

const InfoText = styled.div`
flex: 1 ;
& h1 {
    margin-bottom : 10px ; 
}`

const Songs =  styled.div`
margin: 20px -20px`

const Icons =  styled.div`
display: flex ;
align-items : center ; 
margin-left: 10px ; 
justify-content: space-between ;
width: 30% ; 
font-size: 30px ; 
padding-bottom: 5px 
`
const SongRowContainer = styled.div`
display: flex ; 
margin-left: 25px ; 
align-items: center ;
z-index: 90 ; 
color: #fff ;
&:hover {
    cursor: pointer ;
    background-color: #000000 ; 
    opacity: 0.8 ; 
}
& img { 
    height: 50px ; 
    width: 50px ; 
    object-fit: contain ;
}`
const SongInfo = styled.div`
margin-left: 20px ; 
padding: 8px ; 
& p {
    margin-top: 3px ; 
    color: lightgray ;
}`


export {BodyContainer, HeaderContainer, HeaderLeft, HeaderRight, Info, InfoText, Songs, Icons, SongInfo, SongRowContainer} ;