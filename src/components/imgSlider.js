import styled from 'styled-components'
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import Movie1 from '../images/slider-1.jpg'
import Movie2 from '../images/slider-2.png';
import Movie3 from '../images/slider-3.jpeg';
import Movie4 from '../images/slider-4.jpeg'

const ImgSlider = (props) => {
    let settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
    };
    return (
        <Carousel {...settings}>
            <Wrap>
                <a>
                    <img src={Movie1} alt='oppenheimer-banner' />
                </a>
            </Wrap>
            <Wrap>
                <a>
                    <img src={Movie2} alt='barbie' />
                </a>
            </Wrap>
            <Wrap>
                <a>
                    <img src={Movie3} />
                </a>
            </Wrap>
            <Wrap>
                <a>
                    <img src={Movie4} />
                </a>
            </Wrap>
        </Carousel>
    )

}

const Carousel = styled(Slider)`
margin-top: 20px;

&> button{
    opacity: 0;
    height: 100%;
    width: 5vw;
    z-index: 1;

    &:hover{
        opacity: 1;
        transition: opacity 0.2s ease 0s;
    }
}

ul li button{
    &:before{
        font-size: 10px;
        color: #f9842c;
    }
}
li.slick-active button:before{
    color: white;
}
.slick-list{
    overflow: initial;
}
.slick-prev{
    left: -75px;
}
.slick-next{
    right: -75px;
}
`
const Wrap = styled.div`
border-radius: 4px;
cursor: pointer;
position: relative;

a{ 
    border-radius: 4px;
    box-shadow: rgb(0 0 0 / 69%) 0px 26px 30px -10px
    rgb(0 0 0 / 73%) 0px 16px 10px -10px;
    cursor: pointer;
    display: block;
    position: relative;
    padding: 4px;

    img{
        width: 100%;
        height: 100%;
    }
    &:hover{
        padding: 0;
        border: 4px solid #f9842c;
        transition-duration: 300ms;
    }
}
`
export default ImgSlider;