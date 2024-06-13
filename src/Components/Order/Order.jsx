import React from 'react';
import { useState,useRef } from 'react';
import { MdMyLocation } from "react-icons/md";
import './order.css';
import { FaPhoneAlt } from "react-icons/fa";

function Order(){
    const pickRef = useRef(null);
    const delRef = useRef(null);
    const [Type,setType] = useState(0);

    function handleClick(index){
        if(index === 0){
            if(pickRef.current.classList.contains('active')){
                return;
            }
            else {
                delRef.current.classList.remove('active');
                pickRef.current.classList.add('active');
                setType(0);
            }
        }
        else {
            if(delRef.current.classList.contains('active')){
                return;
            }
            else {
                pickRef.current.classList.remove('active');
                delRef.current.classList.add('active');
                setType(1)
            }
        }
    }
    return(
        <div className='order'>
            <div className='types-order'>
                <button className='type-order pickup active' ref={pickRef} onClick={() => handleClick(0)}>
                    Recogida
                </button>
                <button className='type-order delivery' ref={delRef} onClick={() => handleClick(1)}>
                    Entrega
                </button>
            </div>

            <div className={Type ? 'hidden' : 'pickup-info'}>
                <button className='pickup-button'>
                    Ordena Ahora 
                </button>
                <div className='contact-info'>
                    <div className='contact'>
                        <MdMyLocation className='contact-icon' />Calle San Juan, entre Marti y Maximo Gomez
                    </div>
                    <div className='contact'>
                         <FaPhoneAlt className='contact-icon' /> +53 50352247
                    </div>
                </div>
            </div>
            <div className={Type ? 'delivery-info': 'hidden' }>
                <button className='pickup-button'>
                    Ordena Ahora 
                </button>
                
            </div>


        </div>
    );

}

export default Order;