import { HeaderContainer, HeaderLeft, HeaderRight } from "./styles"
import {GoSearch} from 'react-icons/go' ;
import  {Avatar} from "@mui/material" ;
import './Body.css'
import {useSelector} from 'react-redux'  ;
import {selectUser} from '../../features/UserSlice'
import {GrNext, GrPrevious} from 'react-icons/gr'


const Header = () => {
    const user = useSelector(selectUser)
    return (
        <HeaderContainer>

            <HeaderLeft> 
                <GrPrevious className="prev"/>
                <GrNext className="next"/>
            </HeaderLeft>

            <HeaderRight> 
                <div className="upg">Upgrade your Account</div>
                <Avatar src={ user?.images[0]?.url } alt='no-img'/>
                <h4> {user?.id}</h4> 
            </HeaderRight>
        </HeaderContainer>
    )
}

export default Header ; 