import styled from 'styled-components' ; 

const SidebarContainer = styled.div`
flex: 0.2 ; 

background-color: #000000 ;
min-width: 240px ;
color: #fff ;
& img { 
    height: 70px;
    padding: 10px ;
    margin-right: auto ;
}
& hr { 
    border: 1px solid gray ; 
    width: 90% ; 
    margin: 10px auto ;
`

const Playlists = styled.div`
margin: 5px 10px  ; 

`

const Choices = styled.div`
margin-left: 10px ; 
font-family: 'Franklin Gothic Medium', 'Arial Narrow';
display: flex ; 
align-items: center ; 
color: gray ; 
cursor: pointer ; 
height: 40 px ; 
font-size: 20px ; 
transition : 300ms color ease-in ; 
&:hover { 
    color: #fff ; 
}
`

export {SidebarContainer, Playlists, Choices} ;