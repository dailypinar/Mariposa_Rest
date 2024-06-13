import { Carousel } from 'antd';
import React from 'react';
import './carousel.css';
import imagen1 from '../Carousel/images/image-1.jpeg';
import imagen2 from '../Carousel/images/image-2.jpeg';
import imagen3 from '../Carousel/images/image-3.jpeg';
import imagen4 from '../Carousel/images/image-4.jpeg';
import imagen5 from '../Carousel/images/image-5.jpeg';
import imagen6 from '../Carousel/images/image-6.jpeg';
import {useRef} from 'react';
import { GoChevronLeft } from "react-icons/go";
import { GoChevronRight } from "react-icons/go";

function CarouselComponent(){
    const ref = useRef(null);
    
    return (
        <div className='carousel-container'>
            <button className='to-left'>
                <GoChevronLeft className='icon-button-carousel'
                    onClick={
                        () => ref.current.prev()
                    }
                />
            </button>

            <Carousel className='ant-carousel1' autoplaySpeed="50" speed="2000" autoplay effect='fade' ref={ref}>
                    
                <img src={imagen1} alt="" className='carousel-item' />
           
           
                <img src={imagen2} alt="" className='carousel-item' />
            
         
                <img src={imagen3} alt="" className='carousel-item' />
     
          
                <img src={imagen4} alt="" className='carousel-item' />
         
                <img src={imagen5} alt="" className='carousel-item' />
       
          
                <img src={imagen6} alt="" className='carousel-item' />
        
            
             </Carousel>
             
             <button className='to-right'>
                <GoChevronRight className='icon-button-carousel' 
                onClick={
                    () => ref.current.next()
                }/>
             </button>
        </div>
        
    );
    
}
export default CarouselComponent;