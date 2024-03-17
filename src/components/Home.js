import styled from  'styled-components'
import ImgSlider from './imgSlider';
import Viewers from './Viewers';
import Recommends from './Recommends';
import NewMovies from './NewMovies'
import Originals from './Originals'
import Trending from './Trending'
import { useEffect } from 'react';
import {useDispatch, useSelector} from  'react-redux';
import db from '../firebase'
import {setMovies} from '../features/movies/movieSlice'
import {selectUserName} from '../features/user/userSlice'

const Home = (props) => {
    const dispatch = useDispatch();
    const userName = useSelector(selectUserName);
    let recommends = [];
    let newMovies = [];
    let originals = [];
    let trending = [];
  
    useEffect(() => {
      db.collection("filmes").onSnapshot((snapshot) => {
        snapshot.docs.map((doc) => {
          console.log(recommends);
          switch (doc.data().type) {
            case "recommend":
              recommends = [...recommends, { id: doc.id, ...doc.data() }];
              break;
  
            case "new":
              newMovies = [...newMovies, { id: doc.id, ...doc.data() }];
              break;
  
            case "original":
              originals = [...originals, { id: doc.id, ...doc.data() }];
              break;
  
            case "trending":
              trending = [...trending, { id: doc.id, ...doc.data() }];
              break;
          }
        });
  
        dispatch(
          setMovies({
            recommend: recommends,
            newDisney: newMovies,
            original: originals,
            trending: trending,
          })
        );
      });
    }, [userName]);
   

    return (
    <Container>
        <ImgSlider />
        <Viewers />
        <Recommends />
        <NewMovies />
        <Originals />
        <Trending />
    </Container>
    )
}

const Container = styled.main`
position: relative;
min-height: calc(100vh - 250px);
overflow-x: hidden;
display: block;
top: 72px;
padding: 0 calc(3.5vw + 5px);


`

export default Home