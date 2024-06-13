import React from 'react';
import '../menu-style.css';
import CategoryComponent from '../MenuItem/CategoryComponent';
import CategoryPizzas from '../../../Resources/Transparent-Products/category-pizzas.png';
import CategoryEntrantes from '../../../Resources/Transparent-Products/category-entrantes.png';
import CategoryDesayunos from '../../../Resources/Transparent-Products/category-desayunos.png';
import CategoryHamburguesas from '../../../Resources/Transparent-Products/category-hamburguesas.png';
import CategoryTacos from '../../../Resources/Transparent-Products/category-tacos.png';
import CategoryBebidas from '../../../Resources/Transparent-Products/category-bebidas.png';
import CategoryCocteles from '../../../Resources/Transparent-Products/category-cocteles.png';
import CategoryInfusiones from '../../../Resources/Transparent-Products/category-infusiones.png';
import CategoryPostres from '../../../Resources/Transparent-Products/category-postres.png';
import {useEffect,useState,useRef} from 'react';
import axios from 'axios';


function MenuContainer(){
    let refEntrantes = useRef(null);
    const [visibility,setVisibility] = useState([0,0,0,0,0,0,0,0,0]);
    const refArray = [useRef(null),useRef(null),useRef(null),useRef(null),useRef(null),useRef(null),useRef(null),useRef(null),useRef(null)]

    function modify(id){
        let container = refArray[id].current;
        let cur = container.querySelector('.products-by-category');
        if(visibility[id]){
            if(cur.classList.contains('oculto')){
                cur.classList.remove('oculto');
            }
        }
        else {
            if(!cur.classList.contains('oculto')){
                cur.classList.add('oculto');
            }
        }
    }

    function modifyVisibility(ar){
       setVisibility(ar);
       console.log(visibility);
       for(let i=0;i<ar.length;i++){
          modify(i);
       }
    }

    

    return( 
        <div className='menu-container' id="Menu">
            
            <CategoryComponent  backFunction={modifyVisibility} categoryName='Entrantes' visibilityArray={visibility} id={0}  categoryPicture={CategoryEntrantes} products={jsonArray} ref={refArray[0]}/>
            <CategoryComponent  backFunction={modifyVisibility} categoryName='Desayunos' visibilityArray={visibility}  id={1} categoryPicture={CategoryDesayunos} products={jsonArray} ref={refArray[1]}/>
            <CategoryComponent  backFunction={modifyVisibility} categoryName='Pizzas' visibilityArray={visibility}  id={2} categoryPicture={CategoryPizzas} products={jsonArray} ref={refArray[2]}/>
            <CategoryComponent  backFunction={modifyVisibility} categoryName='Hamburguesas' visibilityArray={visibility}  id={3} categoryPicture={CategoryHamburguesas} products={jsonArray} ref={refArray[3]}/>
            <CategoryComponent  backFunction={modifyVisibility} categoryName='Tacos' visibilityArray={visibility}  id={4} categoryPicture={CategoryTacos} products={jsonArray} ref={refArray[4]}/>
            <CategoryComponent  backFunction={modifyVisibility} categoryName='Bebidas' visibilityArray={visibility}  id={5} categoryPicture={CategoryBebidas} products={jsonArray} ref={refArray[5]}/>
            <CategoryComponent  backFunction={modifyVisibility} categoryName='Cocteles' visibilityArray={visibility} id={6}categoryPicture={CategoryCocteles} products={jsonArray} ref={refArray[6]}/>
            <CategoryComponent  backFunction={modifyVisibility} categoryName='Infusiones-Cafe' visibilityArray={visibility}  id={7} categoryPicture={CategoryInfusiones} products={jsonArray} ref={refArray[7]}/>
            <CategoryComponent  backFunction={modifyVisibility} categoryName='Postres' visibilityArray={visibility} id={8}categoryPicture={CategoryPostres} products={jsonArray} ref={refArray[8]}/>

            

        </div>
    );

}

export default MenuContainer;

const jsonArray = [
    {
        "name" : "Agua natural",
        "price" : "300",
        "category" : "Bebidas",
        "description" : "Botella de agua natural de 1500ml",
        "imageUrl" : "agua-1500ml.jpg",
        "id" : 1
    },
    {
        "name" : "Agua natural",
        "price" : "150",
        "category" : "Bebidas",
        "description" : "Botella de agua natural de 500ml",
        "imageUrl" : "agual-500ml.jpg",
        "id" : 2
    },
    {
        "name" : "Batido de frutas",
        "price" : "280",
        "category" : "Bebidas",
        "description" : "Batido de frutas naturales",
        "imageUrl" : "batido-fruta.jpg",
        "id" : 3
    },
    {
        "name" : "Batido de helado",
        "price" : "500",
        "category" : "Bebidas",
        "description" : "Batido de Helado",
        "imageUrl" : "batido-helado.jpeg",
        "id" : 4
    },
    {
        "name" : "Batido de helado con panetela",
        "price" : "580",
        "category" : "Bebidas",
        "description" : "Batido de helado con panetela",
        "imageUrl" : "batido-helado-panetela.jpeg"
        ,"id":5
    },
    {
        "name" : "Bebida Energizante",
        "price" : "300",
        "category" : "Bebidas",
        "description" : "Bebidas energizantes",
        "imageUrl" : "energizante.jpg",
        "id": 6
    },
    {
        "name" : "Malteada con coca-cola",
        "price" : "420",
        "category" : "Bebidas",
        "description" : "Coca Cola con leche condensada",
        "imageUrl" : "coca-cola-leche.jpg",
        "id":7
    },
    {
        "name" : "Malta Importada",
        "price" : "320",
        "category" : "Bebidas",
        "description" : "Malta importada",
        "imageUrl" : "malta_import.jpg",
        "id" : 8
    },
    {
        "name" : "Malteada",
        "price" : "420",
        "category" : "Bebidas",
        "description" : "Malteda",
        "imageUrl" : "malteada.jpg",
        "id" : 9
    },
    {
        "name" : "Refrescos Nacionales",
        "price" : "250",
        "category" : "Bebidas",
        "description" : "Refrescos de produccion nacional",
        "imageUrl" : "agual-500ml.jpg",
        "id" : 10
    },
    {
        "name" : "Limonada",
        "price" : "200",
        "category" : "Bebidas",
        "description" : "Limonada Natural",
        "imageUrl" : "limonada.jpg",
        "id":11
    },
    {
        "name" : "Cerveza Importada",
        "price" : "260",
        "category" : "Cocteles",
        "description" : "Cervezas importadas",
        "imageUrl" : "cerveza-importada.jpg",
        "id" : 12
    },
    {
        "name" : "Cerveza Nacional",
        "price" : "300",
        "category" : "Cocteles",
        "description" : "Cervezas Nacionales",
        "imageUrl" : "cervezas-nacionales.jpg",
        "id" : 13
    },
    {
        "name" : "Chelada",
        "price" : "400",
        "category" : "Cocteles",
        "description" : "Chelada con cerveza nacional",
        "imageUrl" : "chelada-nacional.jpg",
        "id":14
    },
    {
        "name" : "Michelada",
        "price" : "550",
        "category" : "Cocteles",
        "description" : "Michelada con cerveza nacional",
        "imageUrl" : "michelada-con-cerveza-nacional.jpg",
        "id":15
    },
    {
        "name" : "Colada sin alcohol",
        "price" : "340",
        "category" : "Cocteles",
        "description" : "Colada sin alcohol",
        "imageUrl" : "pina-colada-sin-alcohol.jpg",
        "id":16
    },
    {
        "name" : "Trago Mariposa",
        "price" : "350",
        "category" : "Cocteles",
        "description" : "Trago Mariposa ( Especial de la casa) ",
        "imageUrl" : "trago-mariposa.jpeg",
        "id": 17
    },
    {
        "name" : "Cafe Espreso",
        "price" : "120",
        "category" : "Infusiones-Cafe",
        "description" : "Cafe Espreso",
        "imageUrl" : "cafe-espreso.jpg",
        "id" : 18
    },
    {
        "name" : "Cafe Cortado",
        "price" : "160",
        "category" : "Infusiones-Cafe",
        "description" : "Cafe Cortado",
        "imageUrl" : "cafe-cortado.jpg",
        "id":19
    }
    ,
    {
        "name" : "Cafe Bombom",
        "price" : "250",
        "category" : "Infusiones-Cafe",
        "description" : "Cafe Bombom",
        "imageUrl" : "cafe-bombon.jpg",
        "id":20
    }
    ,
    {
        "name" : "Malangas fritas",
        "price" : "300",
        "category" : "Entrantes",
        "description" : "Racion de Malangas fritas",
        "imageUrl" : "malangas-fritas.jpg",
        "id":21
    }
    ,
    {
        "name" : "Chicharritas",
        "price" : "180",
        "category" : "Entrantes",
        "description" : "Chicharritas de platano",
        "imageUrl" : "chicharritas.jpg",
        "id":22
    }
    ,
    {
        "name" : "Croquetas",
        "price" : "300",
        "category" : "Entrantes",
        "description" : "Croquetas de la casa",
        "imageUrl" : "croquetas.jpeg",
        "id":23
    }
    ,
    {
        "name" : "Tostones de jamon y queso",
        "price" : "350",
        "category" : "Entrantes",
        "description" : "Tostones de Jamon y queso",
        "imageUrl" : "tostones-jamon-queso.jpg",
        "id":24
    }
    ,
    {
        "name" : "Crema de queso",
        "price" : "600",
        "category" : "Entrantes",
        "description" : "Crema de queso",
        "imageUrl" : "crema-queso.jpg",
        "id":25
    }
    ,
    {
        "name" : "Crema de jamon y queso",
        "price" : "700",
        "category" : "Entrantes",
        "description" : "Crema de jamon y queso",
        "imageUrl" : "crema-jamon-queso.jpg",
        "id":26
    }
    ,
    {
        "name" : "Picadera Mariposa",
        "price" : "1500",
        "category" : "Entrantes",
        "description" : "Picadera de la casa ( Fritas, fajitas de pollo, croquetas, jamon, queso, chorizo, salchicha, aceituna, salsas..",
        "imageUrl" : "picadera-mariposa.jpeg",
        "id":27
    }
    
   

]