import React from "react";
import './header.css';
import MariposaIcon from "../../Resources/Icons/logo-transparente.jpeg";
import { RiMenuLine } from "react-icons/ri";
import ShoopingCart from "../ShoopingCart/ShoopingCart"
import { useRef , useState} from 'react';
import { FaFacebookF } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import { MdCancel } from "react-icons/md";


function Header({backFunction}) {

    const ref = useRef(null);
    const [open , setOpen] = useState(0);
    const [option,setOption] = useState("Inicio");

    const handleNavScroll = () => {
        let nav = ref.current;
        if (nav.classList.contains('show')) {
            nav.classList.remove('show');
            setOpen(0);
        }
        else {
            nav.classList.add('show');
            setOpen(1);
        }
    }
    const onSectionClick = (idName) =>{
        handleNavScroll();
        backFunction(idName);
    }

    return (
        <>

            <header className="header">
                
                <div className="Menu">
                    
                    <div className="menu-icon" onClick={handleNavScroll} >
                        {
                            open === 0 ? (<RiMenuLine/>) : (<MdCancel/>)
                        }
                    </div>
                    
                    
                </div>

                <div className="logo-container">
                    <img src={MariposaIcon} alt="Logo Mariposa" className="logo" />
                </div>

                <ShoopingCart />
            </header>
            <ul className="menu-horizontal" ref={ref}>
                <li className="navbar-li"> <a className="menu-item"  onClick={()=>onSectionClick('Inicio')}> Inicio </a></li>
                <li className="navbar-li"> <a className="menu-item" onClick={()=>onSectionClick('Recomendados')}> Recomendados </a></li>
                <li className="navbar-li"> <a className="menu-item" onClick={()=>onSectionClick('Menu')}> Menu </a></li>
                <li className="navbar-li"> <a className="menu-item"> Acerca de Nosotros </a></li>

                <div className="social-container">
                    <div className="social-item">
                        <FaFacebookF className="social-icon"/>
                    </div>
                    <div className="social-item">
                        <FaInstagram className="social-icon"/>
                    </div>
                    <div className="social-item" >
                        <FaYoutube  className="social-icon"/>
                    </div>

                </div>
            </ul>


        </>

    );
}

export default Header;