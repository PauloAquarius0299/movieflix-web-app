import styled from 'styled-components'
import ctaLogoOne from '../images/cta-logo-one.svg';
import './login.css'

const Login = (props) => {
  return (
    
    <Container>  
    <Content>
      
      <CTA>
      <CTALogoOne >MovieFlix</CTALogoOne>
        <SignUp>ACESSE TODOS AQUI</SignUp>
        <Description>
        Explore um mundo de entretenimento sem limites.
        Descubra filmes que vão te surpreender a cada clique. Garanta o pacote premium e tenha acesso ao combo Disney+ Plus 
        </Description>
        <CTALogoTwo src={ctaLogoOne} alt='logo2' />
      </CTA>
      <img className='BgImage' styled=' object-fit: cover;'  src='https://dg3fwljcbubde.cloudfront.net/Landing/landing-bg-ww.jpg' /> 
    </Content>
  </Container>
  )
  
}

const Container = styled.section`
overflow:hidden;
display: flex;
flex-direction: column;
  text-align: center;
  height: 100vh;
  
`
const Content = styled.div`
margin-bottom: 10vw;
  width: 100%;
  position: relative;
  min-height: 100vh;
  box-sizing: border-box;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  padding: 80px 40px;
  height: 100%;
`


const CTA = styled.div`
min-width: 650px;
width: 100%;
display: flex;
flex-direction: column;
`
const CTALogoOne = styled.h1`
color: #fff;
min-height: 1px;
display: block;
width: 100%;
font-weight: bold;
font-size: 3rem;

`
const SignUp = styled.a`
font-weight: bold;
color: #f9f9f9;
background-color: #ff6701;
margin-bottom: 12px;
width: 100%;
letter-spacing: 1.5px;
font-size: 18px;
padding: 16.5px 0;
border: 1px solid transparent;
border-radius: 4px;
cursor: pointer;

&:hover{
  background-color: #f9842c;
}

`
const Description = styled.p`
color: #ffffff;
font-size: 12px;
line-height: 1.5;
margin: 0 0 24px;
letter-spacing: 1.5px;
font-weight: 500;

`
const CTALogoTwo = styled.img`
  margin-right: 12px;
  height: 100px;
  display: block;
  width: 100%;

`

export default Login