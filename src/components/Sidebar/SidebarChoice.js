import React from 'react' ;
import './Sidebar.css' ; 
import {Choices} from './styles'


const SidebarChoice = ({title, Icon}) => {
    return (
        <Choices>
        
          <Icon/>  
          <span className='t'>{title}</span>
           
        
        </Choices>
        
    )
}

export default SidebarChoice;