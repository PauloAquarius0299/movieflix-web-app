import styled from 'styled-components'
import { useEffect, useState } from 'react';
import db from '../firebase'
import { useParams } from 'react-router-dom';
import { FaHeart } from "react-icons/fa6";
import { MdWatchLater } from "react-icons/md";



const Detail = (props) => {
    const {id} = useParams();
    const [detailData, setDetailData] = useState({});

    useEffect(() => {
        db.collection("filmes")
        .doc(id)
        .get()
        .then((doc) => {
            if(doc.exists){
                setDetailData(doc.data());
            } else {
                console.log('no such document in firebase')
            }
        })
        .catch((error) => {
            console.log('error getting document', error);
        })
    }, [id]);

    return (
        <Container>
            <Background>
                <img alt={detailData.title} src={detailData.cardImg} />
            </Background>

            <ImageTitle>
                <img alt={detailData.title} src={detailData.titleImg} />
            </ImageTitle>
            <ContentMeta>
                <Controls>
                    <Player>
                        <h4>Assistir</h4>
                    </Player>
                    <Trailer>
                        <span>Trailer</span>
                    </Trailer>
                    <AddList>
                        <span />
                        <FaHeart />
                        <span />
                    </AddList>
                    <GroupWatch>
                        <div>
                            <MdWatchLater />
                        </div>
                    </GroupWatch>
                </Controls>
                <SubTitle>{detailData.subTitle}</SubTitle>
                <Description>{detailData.description}</Description>
                
            </ContentMeta>
            
        </Container>
        
    );
};

const Container = styled.div`
position: relative;
min-height: calc(100vh-250px);
overflow-x: hidden;
display: block;
top: 72px;
padding: 0 calc(3.5vw + 5px);
`;

const Background = styled.div`
left: 0;
opacity: 0.8;
position: fixed;
right: 0;
top: 0;
z-index: -1;

img{
    width: 100vw;
    height: 100vh;

    @media (max-width:768px){
        width: initial;
    }
}
`;
const ImageTitle = styled.div`
align-items: flex-end;
display: flex;
-webkit-box-pack: start;
justify-content: flex-start;
margin: 0px auto;
height: 30vw;
min-height: 170px;
padding-bottom: 24px;
width: 100%;

img{
    max-width: 600px;
    min-width: 200px;
    width: 35vw;
}
`;
const ContentMeta = styled.div`
max-width: 874px;
`
const Controls = styled.div`
align-items: center;
display: flex;
flex-flow: row nowrap;
margin: 24px 0px;
min-height: 56px;
`;
const Player = styled.button`
font-size: 15px;
margin: 0px 22px 0px 0px;
padding: 0px 24px;
height: 56px;
border-radius: 4px;
cursor: pointer;
display: flex;
align-items: center;
justify-content: center;
letter-spacing: 1.8px;
align-items: center;
text-transform: uppercase;
background: #ff6701;
border:none;
color: #fff;

&:hover{
    background: #f9842c;
}

@media (max-width:768px){
    height: 45px;
    padding: 0px 12px;
    font-size: 12px;
    margin: 0px 10px 0px 0px;
}
`
const Trailer = styled(Player)`
background: rgba(0,0,0,0.3);
border: 1px solid #ff6701;
color: rgb(249,249,249);
`
const AddList = styled.div`
margin-right: 16px;
height: 44px;
width: 44px;
display: flex;
justify-content: center;
align-items: center;
background-color: #ff6701;
border-radius: 50%;
border: 2px solid white;
cursor: pointer;
span{
    background-color: #ff6701;
    //display: inline-block;
    align-items: center;
    
}
`
const GroupWatch = styled.div`
height: 44px;
width: 44px;
border-radius: 50%;
display: flex;
justify-content: center;
cursor: pointer;
background: white;

div{
    height: 40px;
    width: 40px;
    background: rgb(0,0,0);
    border-radius: 50%;
    align-items: center;
    justify-content: center;
    display: flex;

    
}
`
const SubTitle = styled.div`
color: #ff6701;
font-size: 15px;
min-height: 20px;

@media (max-width:768px){
    font-size: 12px;
}
`
const Description = styled.div`
line-height: 1.4;
font-size: 20px;
padding: 16px 0px;
color: #fff3e0;

@media(max-width:768px){
    font-size: 14px;
}
`

export default Detail;