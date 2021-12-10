import React ,{Component} from 'react';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import './Carousel.css';

//Images
import maruti from '../../../Stuff/Images/Car Logo/maruti.jpg';
import hyundai from '../../../Stuff/Images/Car Logo/hyundai.jpg';
import mahindra from '../../../Stuff/Images/Car Logo/mahindra.jpg';
import tata from '../../../Stuff/Images/Car Logo/tata.jpg';
import toyota from '../../../Stuff/Images/Car Logo/toyota.jpg';
import renault from '../../../Stuff/Images/Car Logo/renault.jpg';
import volkswagen from '../../../Stuff/Images/Car Logo/volkswagen.jpg';
import mercedes from '../../../Stuff/Images/Car Logo/mercedes.jpg';
import skoda from '../../../Stuff/Images/Car Logo/skoda.jpg';
import audi from '../../../Stuff/Images/Car Logo/audi.jpg';
import jeep from '../../../Stuff/Images/Car Logo/jeep.jpg';
import datsun from '../../../Stuff/Images/Car Logo/datsun.jpg';
import ford from '../../../Stuff/Images/Car Logo/ford.jpg';
import kia from '../../../Stuff/Images/Car Logo/kia.jpg';
import honda from '../../../Stuff/Images/Car Logo/honda.jpg';
import landrover from '../../../Stuff/Images/Car Logo/landrover.jpg';
import jaguar from '../../../Stuff/Images/Car Logo/jaguar.jpg';
import volvo from '../../../Stuff/Images/Car Logo/volvo.jpg';
import porsche from '../../../Stuff/Images/Car Logo/porsche.jpg';
import bmw from '../../../Stuff/Images/Car Logo/bmw.jpg';
import nissan from '../../../Stuff/Images/Car Logo/nissan.jpg';
import lamborghini from '../../../Stuff/Images/Car Logo/lamborghini.jpg';
import ferrari from '../../../Stuff/Images/Car Logo/ferrari.jpg';
import maserati from '../../../Stuff/Images/Car Logo/maserati.jpg';
import aestromartin from '../../../Stuff/Images/Car Logo/aestromartin.jpg';
import bentley from '../../../Stuff/Images/Car Logo/bentley.jpg';
import rollsroyce from '../../../Stuff/Images/Car Logo/rollsroyce.jpg';
import bugati from '../../../Stuff/Images/Car Logo/bugati.jpg';


export default class SwipeToSlide extends Component {
  render() {
    const settings = {
      focusOnSelect: true,
      className: "center",
      infinite: true,
      centerPadding: "80px",
      slidesToShow: 5,
      swipeToSlide: 4,
      toggle:true,
      autoplay: true,
      autoplaySpeed: 2000,
      arrows:true,
      afterChange: function(index) {
        console.log(
          `Slider Changed to: ${index + 1}, background: #222; color: #bada55`
        );
      },
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 3,
            infinite: true,
            dots: true
          }
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2,
            initialSlide: 2
          }
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1
          }
        }
      ]
    };
    return (
      <div>
        <h1 className='brands'>Brands</h1>
        <Slider {...settings}>
          <div>
            <a href='http://globebuzztimes.com' ><img src={maruti} alt='maruti' className='carlogo' /></a>
          </div>
          <div>
            <a href='http://globebuzztimes.com'><img src={hyundai} alt='hyundai' className='carlogo' /></a>
          </div>
          <div>
            <a href='http://globebuzztimes.com' ><img src={mahindra} alt='mahindra' className='carlogo' /></a>
          </div>
          <div>
            <a href='http://globebuzztimes.com' ><img src={tata} alt='tata' className='carlogo' /></a>
          </div>
          <div>
          <a href='http://globebuzztimes.com' ><img src={toyota} alt='toyota' className='carlogo' /></a>
          </div>
          <div>
            <a href='http://globebuzztimes.com' ><img src={renault} alt='renault' className='carlogo' /></a>
          </div>
          <div>
            <a href='http://globebuzztimes.com' ><img src={volkswagen} alt='volkswageb' className='carlogo' /></a>
          </div>
          <div>
            <a href='http://globebuzztimes.com' ><img src={mercedes} alt='mercedes-benz' className='carlogo' /></a>
          </div>
          <div>
            <a href='http://globebuzztimes.com' ><img src={skoda} alt='skoda' className='carlogo' /></a>
          </div>
          <div>
            <a href='http://globebuzztimes.com' ><img src={audi} alt='audi' className='carlogo' /></a>
          </div>
          <div>
            <a href='http://globebuzztimes.com' ><img src={jeep} alt='jeep' className='carlogo' /></a>
          </div>
          <div>
            <a href='http://globebuzztimes.com' ><img src={datsun} alt='datsun' className='carlogo' /></a>
          </div>
          <div>
            <a href='http://globebuzztimes.com' ><img src={ford} alt='ford' className='carlogo' /></a>
          </div>
          <div>
            <a href='http://globebuzztimes.com' ><img src={kia} alt='kia' className='carlogo' /></a>
          </div>
          <div>
            <a href='http://globebuzztimes.com' ><img src={honda} alt='honda' className='carlogo' /></a>
          </div>
          <div>
            <a href='http://globebuzztimes.com' ><img src={landrover} alt='landrover' className='carlogo' /></a>
          </div>
          <div>
            <a href='http://globebuzztimes.com' ><img src={jaguar} alt='jaguar' className='carlogo' /></a>
          </div>
          <div>
          <a href='http://globebuzztimes.com' ><img src={volvo} alt='volvo' className='carlogo' /></a>
          </div>
          <div>
          <a href='http://globebuzztimes.com' ><img src={porsche} alt='porsche' className='carlogo' /></a>
          </div>
          <div>
            <a href='http://globebuzztimes.com' ><img src={bmw} alt='bmw' className='carlogo' /></a>
          </div>
          <div>
            <a href='http://globebuzztimes.com' ><img src={nissan} alt='nissan' className='carlogo' /></a>
          </div>
          <div>
            <a href='http://globebuzztimes.com' ><img src={lamborghini} alt='lamborghini' className='carlogo' /></a>
          </div>
          <div>
            <a href='http://globebuzztimes.com' ><img src={ferrari} alt='ferrari' className='carlogo' /></a>
          </div>
          <div>
            <a href='http://globebuzztimes.com' ><img src={maserati} alt='maserati' className='carlogo' /></a>
          </div>
          <div>
            <a href='http://globebuzztimes.com' ><img src={aestromartin} alt='aestromartin' className='carlogo' /></a>
          </div>
          <div>
          <a href='http://globebuzztimes.com' ><img src={bentley} alt='bentley' className='carlogo' /></a>
          </div>
          <div>
            <a href='http://globebuzztimes.com' ><img src={rollsroyce} alt='rollsroyce' className='carlogo' /></a>
          </div>
          <div>
            <a href='http://globebuzztimes.com' ><img src={bugati} alt='bugati' className='carlogo' /></a>
          </div>
        </Slider>
      </div>
    );
  }
}


