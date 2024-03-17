
import styled from 'styled-components';
import {useDispatch, useSelector} from 'react-redux';
import { useHistory } from 'react-router-dom';
import { FaHome, FaSearch, FaStar, FaThList  } from "react-icons/fa";
import { MdLocalMovies } from "react-icons/md";
import { PiTelevisionSimpleFill } from "react-icons/pi";

import { auth, provider } from '../firebase'
import {
    selectUserName,
    selectUserPhoto,
    setUserLoginDetails,
    setSignOutState,
  } from "../features/user/userSlice.js";
import { useEffect } from 'react';

const Header = (props) => {
    const dispatch = useDispatch();
    const history = useHistory();
    const userName = useSelector(selectUserName);
    const userPhoto = useSelector(selectUserPhoto);

    useEffect(() => {
        auth.onAuthStateChanged(async (user) => {
            if(user) {
                setUser(user);
                history.push("/home")
            }
        });
    }, [userName])


    const handleAuth = () => {
        if(!userName) {
            auth
            .signInWithPopup(provider)
            .then((result) => {
                setUser(result.user);
            })
            .catch((error) => {
                alert(error.message);
            });
        } else if (userName) {
            auth
            .signOut()
            .then(() => {
                dispatch(setSignOutState());
                history.push("/");
            })
            .catch((err) => alert(err.message));
        }
    };

    const setUser = (user) => {
        dispatch(
            setUserLoginDetails({
                name: user.displayName,
                email: user.email,
                photo: user.photoURL,
            })
        );
    };

    return (
        <Nav>
            <Logo>
                <h1>MovieFlix</h1>
            </Logo>
            {
                !userName ? (
                <Login onClick={handleAuth} >Login</Login>
                 ) : (
                <>
            <NavMenu>
            <a href='/home'>
                
                    <div className='icon'>
                        <StyledIcon as={FaHome} />
                    </div>
                    
                    <span>INICIO</span>
                </a>
                <a href='/'>
                <StyledIcon as={FaSearch} />
                    <span>PESQUISAR</span>
                </a>
                <a href='/'>
                <StyledIcon as={FaThList} />
                    <span>SUA LISTA</span>
                </a>
                <a href='/'>
                <StyledIcon as={FaStar} />
                    <span>ORIGINAIS</span>
                </a>
                <a href='/'>
                <StyledIcon as={MdLocalMovies} />
                    <span>FILMES</span>
                </a>
                <a href='/'>
                <StyledIcon as={PiTelevisionSimpleFill} />
                    <span>SERIES</span>
                </a>
            </NavMenu>
            
            <SignOut>
                <UserImg src={userPhoto} alt='image perfil' />
                <DropDown>
                    <span onClick={handleAuth}>Sign Out</span>
                </DropDown>
            </SignOut>
            </>
            )}
    </Nav>
    )
}

const Nav = styled.nav`
position: fixed;
top: 0;
left: 0;
right: 0;
height: 70px;
background-color:  hsl(275, 100%, 4%);
display: flex;
justify-content: space-between;
align-items: center;
padding: 0 36px;
letter-spacing: 16px;
z-index: 3;
`
const Logo = styled.h1`
padding:  0;
width: 80px;
margin-top: 4px;
max-height: 70px;
font-size: 0;
display: inline-block;

h1{
    display: block;
    font-size: 2rem;
    letter-spacing: 1px;
    margin-top: 15px;
    color: #ff6701;
}
`
const NavMenu = styled.div`
align-items: center;
display: flex;
flex-flow: row nowrap;
height: 100%;
justify-content: flex-end;
margin: 0;
padding: 0;
position: relative;
margin-left: 25px;

a{
    display: flex;
    align-items: center;
    padding: 0 12px;

    span{
        color: #f9842c;
        font-size: 13px;
        letter-spacing: 1.42px;
        line-height: 1.08;
        padding: 2px 0px;
        white-space: nowrap;
        position: relative;

        &:before{
            background-color: #f9842c;
            border-radius: 0px 0px 4px 4px;
            bottom: -6px;
            content: "";
            height: 2px;
            left: 0px;
            opacity: 0;
            position: absolute;
            right: 0px;
            transform-origin: left center;
            transform: scaleX(0);
            transition: all 250ms cubic-bezier(0.25,0.46,0.45,0.94) 0s;
            visibility: hidden;
            width:auto;
        }
    }
    &:hover{
        span:before{        
            transform: scaleX(1);
            visibility: visible;
            opacity: 1 !important;
        }
    }
}
 @media (max-width: 768px) {
    display: none;
  } 
`
const UserImg = styled.img`
height: 100%;
`
const DropDown = styled.div`
position: absolute;
top: 48px;
right: 0;
background: rgb(19,19,19);
border: 1px solid rgba(151,151,151,0.34);
box-shadow: rgb(0 0 0 / 50%) 0px 0px 18px 0px;
border-radius: 4px;
padding: 10px;
font-size: 14px;
letter-spacing: 3px;
width: 100px;
opacity: 0;
`

const Login = styled.a`

padding: 8px 16px;
text-transform: uppercase;
letter-spacing: 1.5px;
border: 1px solid #f9842c;
color: #f9842c;
border-radius: 4px;
transition: all 0.2s ease 0s;
cursor: pointer;

&:hover{
    background-color: #f9842c;
    color: #000;
    border-color: transparent
}
`

const StyledIcon = styled.div`
color: #f9842c; 
    font-size: 20px; 
    margin-right: 8px;
`
const SignOut  = styled.div`
position: relative;
height: 48px;
width: 48px;
display: flex;
cursor: pointer;
align-items: center;
justify-content: center;

${UserImg}{
    border-radius: 50%;
    width: 100%;
    height: 100%;
}
&:hover{
    ${DropDown}{
        opacity: 1;
        transition-duration: 1s;
    }
}
`


export default Header;