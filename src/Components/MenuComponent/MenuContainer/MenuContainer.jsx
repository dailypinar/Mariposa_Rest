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
import CategoryPanes from '../../../Resources/Transparent-Products/panes-category.png';
import {useEffect,useState,useRef} from 'react';
import axios from 'axios';


function MenuContainer(){
    let refEntrantes = useRef(null);
    const [visibility,setVisibility] = useState([0,0,0,0,0,0,0,0,0]);
    const refArray = [useRef(null),useRef(null),useRef(null),useRef(null),useRef(null),useRef(null),useRef(null),useRef(null),useRef(null),useRef(null)]

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
            
            <CategoryComponent  backFunction={modifyVisibility} categoryName='Entrantes y Aditivos' visibilityArray={visibility} id={0}  categoryPicture={CategoryEntrantes} products={jsonArray} ref={refArray[0]}/>
            <CategoryComponent  backFunction={modifyVisibility} categoryName='Desayunos' visibilityArray={visibility}  id={1} categoryPicture={CategoryDesayunos} products={jsonArray} ref={refArray[1]}/>
            <CategoryComponent  backFunction={modifyVisibility} categoryName='Pizzas y Spaguettis' visibilityArray={visibility}  id={2} categoryPicture={CategoryPizzas} products={jsonArray} ref={refArray[2]}/>
            <CategoryComponent  backFunction={modifyVisibility} categoryName='Hamburguesas y Sandwish' visibilityArray={visibility}  id={3} categoryPicture={CategoryHamburguesas} products={jsonArray} ref={refArray[3]}/>
            <CategoryComponent  backFunction={modifyVisibility} categoryName='Tacos' visibilityArray={visibility}  id={4} categoryPicture={CategoryTacos} products={jsonArray} ref={refArray[4]}/>
            <CategoryComponent  backFunction={modifyVisibility} categoryName='Bebidas' visibilityArray={visibility}  id={5} categoryPicture={CategoryBebidas} products={jsonArray} ref={refArray[5]}/>
            <CategoryComponent  backFunction={modifyVisibility} categoryName='Cocteles' visibilityArray={visibility} id={6}categoryPicture={CategoryCocteles} products={jsonArray} ref={refArray[6]}/>
            <CategoryComponent  backFunction={modifyVisibility} categoryName='Infusiones-Cafe-Te' visibilityArray={visibility}  id={7} categoryPicture={CategoryInfusiones} products={jsonArray} ref={refArray[7]}/>
            <CategoryComponent  backFunction={modifyVisibility} categoryName='Postres' visibilityArray={visibility} id={8}categoryPicture={CategoryPostres} products={jsonArray} ref={refArray[8]}/>
            <CategoryComponent  backFunction={modifyVisibility} categoryName='Panes' visibilityArray={visibility} id={9}categoryPicture={CategoryPanes} products={jsonArray} ref={refArray[9]}/>
            

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
        "price" : "200",
        "category" : "Bebidas",
        "description" : "Botella de agua natural de 500ml",
        "imageUrl" : "agual-500ml.jpg",
        "id" : 2
    },
    {
        "name" : "Batido de frutas",
        "price" : "300",
        "category" : "Bebidas",
        "description" : "Batido de frutas naturales",
        "imageUrl" : "batido-fruta.jpg",
        "id" : 3
    },
    {
        "name" : "Batido de helado",
        "price" : "550",
        "category" : "Bebidas",
        "description" : "Batido de Helado",
        "imageUrl" : "batido-helado.jpeg",
        "id" : 4
    },
    {
        "name" : "Batido de helado con panetela Chocolate",
        "price" : "600",
        "category" : "Bebidas",
        "description" : "Batido de helado con panetela",
        "imageUrl" : "batido-helado-panetela.jpeg"
        ,"id":5
    },
    {
        "name" : "Jugo importado(caja)",
        "price" : "270",
        "category" : "Bebidas",
        "description" : "Jugo importado(caja)",
        "imageUrl" : "logomariposa.png"
        ,"id":5
    },
    {
        "name" : "Jugo importado(lata)",
        "price" : "320",
        "category" : "Bebidas",
        "description" : "Jugo importado(lata)",
        "imageUrl" : "logomariposa.png"
        ,"id":5
    },
    {
        "name" : "Bebida Energizante",
        "price" : "320",
        "category" : "Bebidas",
        "description" : "Bebidas energizantes",
        "imageUrl" : "energizante.jpg",
        "id": 6
    },
    {
        "name" : "Coca-cola con leche condensada",
        "price" : "450",
        "category" : "Bebidas",
        "description" : "Coca Cola con leche condensada",
        "imageUrl" : "coca-cola-leche.jpg",
        "id":7
    },
    {
        "name" : "Malta Importada",
        "price" : "350",
        "category" : "Bebidas",
        "description" : "Malta importada",
        "imageUrl" : "malta_import.jpg",
        "id" : 8
    },
    {
        "name" : "Malteada",
        "price" : "500",
        "category" : "Bebidas",
        "description" : "Malteda",
        "imageUrl" : "malteada.jpg",
        "id" : 9
    },
    {
        "name" : "Refrescos Nacionales",
        "price" : "270",
        "category" : "Bebidas",
        "description" : "Refrescos de produccion nacional",
        "imageUrl" : "refrescos-nacionales.jpg",
        "id" : 10
    },
    {
        "name" : "Malta Bucanero",
        "price" : "470",
        "category" : "Bebidas",
        "description" : "Malta Bucanero",
        "imageUrl" : "logomariposa.png",
        "id" : 10
    },
    {
        "name" : "Malteada con Bucanero",
        "price" : "550",
        "category" : "Bebidas",
        "description" : "Malteada con Bucanero",
        "imageUrl" : "logomariposa.png",
        "id" : 10
    },

    {
        "name" : "Limonada Natural",
        "price" : "350",
        "category" : "Bebidas",
        "description" : "Limonada Natural",
        "imageUrl" : "limonada.jpg",
        "id":11
    },
    {
        "name" : "Cerveza Importada",
        "price" : "300",
        "category" : "Cocteles",
        "description" : "Cervezas importadas",
        "imageUrl" : "cerveza-importada.jpg",
        "id" : 12
    },
    {
        "name" : "Cerveza Nacional",
        "price" : "360",
        "category" : "Cocteles",
        "description" : "Cervezas Nacionales",
        "imageUrl" : "logomariposa.png",
        "id" : 13
    },
    {
        "name" : "Cerveza Cristal y Bucanero ",
        "price" : "380",
        "category" : "Cocteles",
        "description" : "Cervezas Nacionales",
        "imageUrl" : "cervezas-nacionales.jpg",
        "id" : 13
    },
    {
        "name" : "Chelada con Cerveza Importada",
        "price" : "400",
        "category" : "Cocteles",
        "description" : "Chelada con cerveza nacional",
        "imageUrl" : "chelada-nacional.jpg",
        "id":14
    },
    {
        "name" : "Chelada con Cerveza nacional",
        "price" : "470",
        "category" : "Cocteles",
        "description" : "Chelada con cerveza nacional",
        "imageUrl" : "chelada-nacional.jpg",
        "id":14
    },
    {
        "name" : "Michelada con Cerveza Importada",
        "price" : "500",
        "category" : "Cocteles",
        "description" : "logomariposa.png",
        "imageUrl" : "logomariposa.png",
        "id":15
    },
    {
        "name" : "Michelada con cerveza nacional",
        "price" : "600",
        "category" : "Cocteles",
        "description" : "Michelada con cerveza nacional",
        "imageUrl" : "michelada-con-cerveza-nacional.jpg",
        "id":15
    },
    {
        "name" : "Piña Colada sin alcohol",
        "price" : "360",
        "category" : "Cocteles",
        "description" : "Pinna Colada sin alcohol",
        "imageUrl" : "colada.jpeg",
        "id":16
    },
    {
        "name" : "Piña Colada con alcohol",
        "price" : "400",
        "category" : "Cocteles",
        "description" : "Pinna Colada con alcohol",
        "imageUrl" : "colada.jpeg",
        "id":16
    },

    {
        "name" : "Trago MARIPOSA",
        "price" : "550",
        "category" : "Cocteles",
        "description" : "Trago MARIPOSA ( Especial de la casa) ",
        "imageUrl" : "trago-mariposa.jpeg",
        "id": 17
    },
    {
        "name" : "Mojito",
        "price" : "320",
        "category" : "Cocteles",
        "description" : "Mojito",
        "imageUrl" : "logomariposa.png",
        "id":16
    },
    {
        "name" : "Cuba Libre",
        "price" : "400",
        "category" : "Cocteles",
        "description" : "Cuba Libre",
        "imageUrl" : "logomariposa.png",
        "id":16
    },
    {
        "name" : "Carpiriña",
        "price" : "500",
        "category" : "Cocteles",
        "description" : "Carpiriña",
        "imageUrl" : "logomariposa.png",
        "id":16
    },
    {
        "name" : "Carpirosca",
        "price" : "500",
        "category" : "Cocteles",
        "description" : "Carpirosca",
        "imageUrl" : "logomariposa.png",
        "id":16
    },
    {
        "name" : "Carpirissima",
        "price" : "500",
        "category" : "Cocteles",
        "description" : "Carpirissima",
        "imageUrl" : "logomariposa.png",
        "id":16
    },
    {
        "name" : "Canchanchara",
        "price" : "500",
        "category" : "Cocteles",
        "description" : "Canchanchara",
        "imageUrl" : "logomariposa.png",
        "id":16
    },
    {
        "name" : "Cafe Expreso",
        "price" : "150",
        "category" : "Infusiones-Cafe-Te",
        "description" : "Cafe Espreso",
        "imageUrl" : "cafe-espreso.jpg",
        "id" : 18
    },
    {
        "name" : "Cafe Cortado",
        "price" : "170",
        "category" : "Infusiones-Cafe-Te",
        "description" : "Cafe Cortado",
        "imageUrl" : "cafe-cortado.jpg",
        "id":19
    }
    ,
    {
        "name" : "Cafe Bombom",
        "price" : "250",
        "category" : "Infusiones-Cafe-Te",
        "description" : "Cafe Bombom",
        "imageUrl" : "cafebombonmariposa.jpeg",
        "id":20
    }
    ,
    {
        "name" : "Café Frapucciono ",
        "price" : "400",
        "category" : "Infusiones-Cafe-Te",
        "description" : "Café Frapucciono ",
        "imageUrl" : "logomariposa.png",
        "id":20
    }
    ,
    {
        "name" : "Café Mariposa",
        "price" : "390",
        "category" : "Infusiones-Cafe-Te",
        "description" : "Café Mariposa",
        "imageUrl" : "logomariposa.png",
        "id":20
    }
    ,
    {
        "name" : "Te",
        "price" : "100",
        "category" : "Infusiones-Cafe-Te",
        "description" : "Te",
        "imageUrl" : "infusiones-te.jpg",
        "id":20
    }
    ,
    
    {
        "name" : "Entremes de Queso",
        "price" : "700",
        "category" : "Entrantes y Aditivos",
        "description" : "Entremes de Queso",
        "imageUrl" : "EntremesQueso.jpeg",
        "id":21
    }
    ,
    {
        "name" : "Pollo empanizado",
        "price" : "900",
        "category" : "Entrantes y Aditivos",
        "description" : "Entremes de Jamón",
        "imageUrl" : "Pollo empanizado.jpeg",
        "id":21
    }
    ,
    {
        "name" : "Malangas fritas",
        "price" : "300",
        "category" : "Entrantes y Aditivos",
        "description" : "Racion de Malangas fritas",
        "imageUrl" : "malangas-fritas.jpg",
        "id":21
    }
    ,
    {
        "name" : "Boniatos Fritos",
        "price" : "150",
        "category" : "Entrantes y Aditivos",
        "description" : "Boniatos Fritos",
        "imageUrl" : "boniato-frito.jpg",
        "id":21
    }
    ,
    {
        "name" : "Chicharritas de platano",
        "price" : "200",
        "category" : "Entrantes y Aditivos",
        "description" : "Chicharritas de platano",
        "imageUrl" : "chicharritas.jpg",
        "id":22
    }
    ,
    {
        "name" : "Croquetas",
        "price" : "300",
        "category" : "Entrantes y Aditivos",
        "description" : "Croquetas de la casa",
        "imageUrl" : "croquetas.jpeg",
        "id":23
    }
    
    ,
    {
        "name" : "Tostones de jamon y queso",
        "price" : "500",
        "category" : "Entrantes y Aditivos",
        "description" : "Tostones de Jamon y queso",
        "imageUrl" : "tostones-jamon-queso.jpg",
        "id":24
    }
    ,
    {
        "name" : "Crema de queso",
        "price" : "650",
        "category" : "Entrantes y Aditivos",
        "description" : "Crema de queso",
        "imageUrl" : "crema-queso.jpg",
        "id":25
    }
    ,
    {
        "name" : "Crema de jamon y queso",
        "price" : "720",
        "category" : "Entrantes y Aditivos",
        "description" : "Crema de jamon y queso",
        "imageUrl" : "crema-jamon-queso.jpg",
        "id":26
    }
    ,
    {
        "name" : "Picadera Mariposa",
        "price" : "2500",
        "category" : "Entrantes y Aditivos",
        "description" : "Picadera de la casa ( Fritas, fajitas de pollo, croquetas, jamon, queso, chorizo, salchicha, aceituna, salsas..",
        "imageUrl" : "picadera-mariposa.jpeg",
        "id":27
    }
    ,
    {
        "name" : "Empanaditas",
        "price" : "300",
        "category" : "Entrantes y Aditivos",
        "description" : "Empanaditas",
        "imageUrl" : "empanaditas.jpeg",
        "id":21
    }
    ,
    {
        "name" : "Ensalada Fría",
        "price" : "500",
        "category" : "Entrantes y Aditivos",
        "description" : "Ensalada Fría",
        "imageUrl" : "ensaladapng.png",
        "id":21
    }
    ,
    {
        "name" : "Papas Fritas",
        "price" : "600",
        "category" : "Entrantes y Aditivos",
        "description" : "Papas Fritas",
        "imageUrl" : "papasfritas.jpeg",
        "id":21
    }
    ,
    {
        "name" : "Entremes de Jamón",
        "price" : "400",
        "category" : "Entrantes y Aditivos",
        "description" : "Entremes de Jamón",
        "imageUrl" : "logomariposa.png",
        "id":21
    }
    ,
    {
        "name" : "Racion de Aceitunas",
        "price" : "430",
        "category" : "Entrantes y Aditivos",
        "description" : "Racion de Aceitunas",
        "imageUrl" : "logomariposa.png",
        "id":21
    }
    ,
    {
        "name" : "Tostones de Queso",
        "price" : "400",
        "category" : "Entrantes y Aditivos",
        "description" : "Tostones de Queso",
        "imageUrl" : "logomariposa.png",
        "id":21
    }
    ,
    {
        "name" : "Tostones de Jamón",
        "price" : "350",
        "category" : "Entrantes y Aditivos",
        "description" : "Tostones de Jamón",
        "imageUrl" : "logomariposa.png",
        "id":21
    }
    ,
    {
        "name" : "Quesadilla",
        "price" : "400",
        "category" : "Entrantes y Aditivos",
        "description" : "Quesadilla",
        "imageUrl" : "logomariposa.png",
        "id":27
    }
    ,
    {
        "name" : "Tostones de Atún",
        "price" : "500",
        "category" : "Entrantes y Aditivos",
        "description" : "Tostones de Atún",
        "imageUrl" : "logomariposa.png",
        "id":21
    }
    
    ,
    {
        "name" : "Papas Bravas",
        "price" : "450",
        "category" : "Entrantes y Aditivos",
        "description" : "Papas Bravas",
        "imageUrl" : "logomariposa.png",
        "id":21
    }
    ,
    {
        "name" : "Fajitas de Pollo",
        "price" : "750",
        "category" : "Entrantes y Aditivos",
        "description" : "Fajitas de Pollo",
        "imageUrl" : "logomariposa.png",
        "id":21
    }
    
    ,
    {
        "name" : "Pollo Frito con Papas(Aditivo)",
        "price" : "500",
        "category" : "Entrantes y Aditivos",
        "description" : "Pollo Frito con Papas(Aditivo)",
        "imageUrl" : "logomariposa.png",
        "id":21
    }
    ,
    {
        "name" : "Queso Gouda(Aditivo)",
        "price" : "500",
        "category" : "Entrantes y Aditivos",
        "description" : "Queso Gouda(Aditivo)",
        "imageUrl" : "logomariposa.png",
        "id":21
    }
    ,
    {
        "name" : "Pollo(Aditivo)",
        "price" : "350",
        "category" : "Entrantes y Aditivos",
        "description" : "Pollo(Aditivo)",
        "imageUrl" : "logomariposa.png",
        "id":21
    }
    ,
    {
        "name" : "Chorizo(Aditivo)",
        "price" : "170",
        "category" : "Entrantes y Aditivos",
        "description" : "Chorizo(Aditivo)",
        "imageUrl" : "logomariposa.png",
        "id":21
    }
    ,
    {
        "name" : "Aceituna(Aditivo)",
        "price" : "350",
        "category" : "Entrantes y Aditivos",
        "description" : "Aceituna(Aditivo)",
        "imageUrl" : "logomariposa.png",
        "id":21
    }
    ,
    {
        "name" : "Jamón(Aditivo)",
        "price" : "170",
        "category" : "Entrantes y Aditivos",
        "description" : "Jamón(Aditivo)",
        "imageUrl" : "logomariposa.png",
        "id":21
    }
    ,
    {
        "name" : "Cebolla(Aditivo)",
        "price" : "150",
        "category" : "Entrantes y Aditivos",
        "description" : "Cebolla(Aditivo)",
        "imageUrl" : "logomariposa.png",
        "id":21
    }
    ,
    {
        "name" : "Atun(Aditivo)",
        "price" : "400",
        "category" : "Entrantes y Aditivos",
        "description" : "Atun(Aditivo)",
        "imageUrl" : "logomariposa.png",
        "id":21
    }
    ,
    {
        "name" : "Pimiento(Aditivo)",
        "price" : "150",
        "category" : "Entrantes y Aditivos",
        "description" : "Pimiento(Aditivo)",
        "imageUrl" : "logomariposa.png",
        "id":21
    }
    ,
    {
        "name" : "Piña(Aditivo)",
        "price" : "150",
        "category" : "Entrantes y Aditivos",
        "description" : "Piña(Aditivo)",
        "imageUrl" : "logomariposa.png",
        "id":21
    }
    ,
    {
        "name" : "Salchicha(Aditivo)",
        "price" : "170",
        "category" : "Entrantes y Aditivos",
        "description" : "Salchicha(Aditivo)",
        "imageUrl" : "logomariposa.png",
        "id":21
    }
    ,
    {
        "name" : "Huevo(Aditivo)",
        "price" : "200",
        "category" : "Entrantes y Aditivos",
        "description" : "Huevo(Aditivo)",
        "imageUrl" : "logomariposa.png",
        "id":21
    }
    ,
    {
        "name" : "Bola de Helado(Aditivo)",
        "price" : "150",
        "category" : "Entrantes y Aditivos",
        "description" : "Bola de Helado(Aditivo)",
        "imageUrl" : "logomariposa.png",
        "id":21
    }

    ,
    {
        "name" : "Desayuno Mariposa",
        "price" : "400",
        "category" : "Desayunos",
        "description" : "Desayuno Mariposa",
        "imageUrl" : "DesayunoMariposa.jpeg",
        "id":21
    }
    ,
    {
        "name" : "Creps Mariposa",
        "price" : "400",
        "category" : "Desayunos",
        "description" : "Creps Mariposa",
        "imageUrl" : "crepschocolate.jpeg",
        "id":21
    }
    ,
    {
        "name" : "Yogurt Natural",
        "price" : "150",
        "category" : "Desayunos",
        "description" : "Yogurt Natural",
        "imageUrl" : "yogurt.jpg",
        "id":21
    }
    ,
    {
        "name" : "Pizza Napolitana",
        "price" : "400",
        "category" : "Pizzas y Spaguettis",
        "description" : "Pizza Napolitana",
        "imageUrl" : "pizza-queso-especial.jpeg",
        "id":21
    }
    ,
    {
        "name" : "Pizza Mariposa",
        "price" : "2700",
        "category" : "Pizzas y Spaguettis",
        "description" : "Pizza Mariposa",
        "imageUrl" : "pizza-mariposa.jpeg",
        "id":21
    }
    ,
    {
        "name" : "Pizza de Jamón ",
        "price" : "500",
        "category" : "Pizzas y Spaguettis",
        "description" : "Pizza de Jamón ",
        "imageUrl" : "pizza-jamonyquesoM.jpeg",
        "id":21
    }
    ,
    {
        "name" : "Pizza de Salchicha ",
        "price" : "480",
        "category" : "Pizzas y Spaguettis",
        "description" : "Pizza de Salchicha ",
        "imageUrl" : "pizza-salchicha.jpg",
        "id":21
    }
    ,
    {
        "name" : "Pizza Mixta ",
        "price" : "750",
        "category" : "Pizzas y Spaguettis",
        "description" : "Pizza Mixta",
        "imageUrl" : "pizza-mixta.jpeg",
        "id":21
    }
    ,
    {
        "name" : "Pizza Hawaiana",
        "price" : "550",
        "category" : "Pizzas y Spaguettis",
        "description" : "Pizza Hawaiana",
        "imageUrl" : "pizza-hawaina.jpg",
        "id":21
    }
    ,
    {
        "name" : "Pizza De Langosta",
        "price" : "800",
        "category" : "Pizzas y Spaguettis",
        "description" : "Pizza de Langosta",
        "imageUrl" : "PizzadeLangosta.jpeg",
        "id":21
    }
    ,
    {
        "name" : "Pizza de Aceituna",
        "price" : "700",
        "category" : "Pizzas y Spaguettis",
        "description" : "Pizza de Aceituna",
        "imageUrl" : "pizza-aceituna.jpg",
        "id":21
    }
    ,
    {
        "name" : "Pizza de pimiento",
        "price" : "500",
        "category" : "Pizzas y Spaguettis",
        "description" : "Pizza de pimiento",
        "imageUrl" : "pizza-pimiento.jpg",
        "id":21
    }
    ,
    {
        "name" : "Pizza de Cebolla",
        "price" : "480",
        "category" : "Pizzas y Spaguettis",
        "description" : "Pizza de Cebolla",
        "imageUrl" : "pizza-cebolla.jpg",
        "id":21
    }
    ,
        
    {
        "name" : "Pizza Especial de Queso",
        "price" : "600",
        "category" : "Pizzas y Spaguettis",
        "description" : "Pizza Especial de Queso",
        "imageUrl" : "pizza-queso-especial.jpeg",
        "id":21
    }
    ,
    {
        "name" : "Pizza de Pollo",
        "price" : "700",
        "category" : "Pizzas y Spaguettis",
        "description" : "Pizza de Pollo",
        "imageUrl" : "logomariposa.png",
        "id":21
    }
    ,
    {
        "name" : "Pizza de Vegetales ",
        "price" : "450",
        "category" : "Pizzas y Spaguettis",
        "description" : "Pizza de Vegetales ",
        "imageUrl" : "logomariposa.png",
        "id":21
    }
    ,
    {
        "name" : "Pizza de Atún",
        "price" : "800",
        "category" : "Pizzas y Spaguettis",
        "description" : "Pizza de Atún",
        "imageUrl" : "logomariposa.png",
        "id":21
    }
    ,
    {
        "name" : "Pizza de Cerdo",
        "price" : "750",
        "category" : "Pizzas y Spaguettis",
        "description" : "Pizza de Cerdo",
        "imageUrl" : "logomariposa.png",
        "id":21
    }
     ,
    {
        "name" : "Pizza con Piña",
        "price" : "500",
        "category" : "Pizzas y Spaguettis",
        "description" : "Pizza con Piña",
        "imageUrl" : "logomariposa.png",
        "id":21
    }
    
    ,
    {
        "name" : "Pizza Familar",
        "price" : "2500",
        "category" : "Pizzas y Spaguettis",
        "description" : "Pizza Familiar",
        "imageUrl" : "logomariposa.png",
        "id":21
    }
    ,
    {
        "name" : "Pizza de Chorizo",
        "price" : "500",
        "category" : "Pizzas y Spaguettis",
        "description" : "Pizza de Chorizo",
        "imageUrl" : "logomariposa.png",
        "id":21
    }
    ,
    {
        "name" : "Pizza Familar de Atún",
        "price" : "2600",
        "category" : "Pizzas y Spaguettis",
        "description" : "Pizza Familiar de Atún",
        "imageUrl" : "logomariposa.png",
        "id":21
    }
    ,
    {
        "name" : "Spaguettis Napolitano",
        "price" : "1000",
        "category" : "Pizzas y Spaguettis",
        "description" : "Spaguettis Napolitano",
        "imageUrl" : "logomariposa.png",
        "id":21
    }
    ,
    {
        "name" : "Spaguettis con Jamón",
        "price" : "1100",
        "category" : "Pizzas y Spaguettis",
        "description" : "Spaguettis con Jamón",
        "imageUrl" : "spaguettis.jpeg",
        "id":21
    }
    ,
    {
        "name" : "Spaguettis con Salchichas",
        "price" : "1100",
        "category" : "Pizzas y Spaguettis",
        "description" : "Spaguettis con Salchichas",
        "imageUrl" : "logomariposa.png",
        "id":21
    }
    ,
    {
        "name" : "Spaguettis con Chorizos",
        "price" : "950",
        "category" : "Pizzas y Spaguettis",
        "description" : "Spaguettis con Chorizos",
        "imageUrl" : "logomariposa.png",
        "id":21
    }
    ,
    {
        "name" : "Hamburguesa Sencilla",
        "price" : "400",
        "category" : "Hamburguesas y Sandwish",
        "description" : "Hamburguesa Sencilla",
        "imageUrl" : "logomariposa.png",
        "id":21
    }
    ,
    {
        "name" : "Hamburguesa con queso",
        "price" : "550",
        "category" : "Hamburguesas y Sandwish",
        "description" : "Hamburguesa con queso",
        "imageUrl" : "logomariposa.png",
        "id":21
    }
    ,
    {
        "name" : "Hamburguesa con Jamón",
        "price" : "520",
        "category" : "Hamburguesas y Sandwish",
        "description" : "Hamburguesa con Jamón",
        "imageUrl" : "logomariposa.png",
        "id":21
    }
    ,
    {
        "name" : "Hamburguesa con Jamón y Queso",
        "price" : "700",
        "category" : "Hamburguesas y Sandwish",
        "description" : "Hamburguesa con Jamón y Queso",
        "imageUrl" : "hamburguesa-jamon-queso.jpeg",
        "id":21
    }
    ,
    {
        "name" : "Hamburguesa mariposa",
        "price" : "1500",
        "category" : "Hamburguesas y Sandwish",
        "description" : "Hamburguesa mariposa",
        "imageUrl" : "hamburguesa-mariposa (2).jpeg",
        "id":21
    }
    ,
    {
        "name" : "Sandwish de queso",
        "price" : "350",
        "category" : "Hamburguesas y Sandwish",
        "description" : "Sandwish de queso",
        "imageUrl" : "sandwich-queso.jpg",
        "id":21
    }
    ,
    {
        "name" : "Sandwish de Jamón",
        "price" : "250",
        "category" : "Hamburguesas y Sandwish",
        "description" : "Sandwish de Jamón",
        "imageUrl" : "sandwish-jyq.jpeg",
        "id":21
    }
    ,
    {
        "name" : "Sandwish de jamón y queso",
        "price" : "370",
        "category" : "Hamburguesas y Sandwish",
        "description" : "Sandwish de jamón y queso",
        "imageUrl" : "sandwich-jamon-queso.jpeg",
        "id":21
    }
    ,
    {
        "name" : "Tacos de Vegetales",
        "price" : "450",
        "category" : "Tacos",
        "description" : "Tacos de Vegetales",
        "imageUrl" : "logomariposa.png",
        "id":21
    }
    ,
    {
        "name" : "Tacos de pollo",
        "price" : "650",
        "category" : "Tacos",
        "description" : "Tacos de pollo",
        "imageUrl" : "tacos-pollo.jpeg",
        "id":21
    }
    ,
    {
        "name" : "Taco de Res",
        "price" : "850",
        "category" : "Tacos",
        "description" : "Taco de Res",
        "imageUrl" : "tacos-res.png",
        "id":21
    }
    ,
    {
        "name" : "Taco de Cerdo",
        "price" : "900",
        "category" : "Tacos",
        "description" : "Taco de Cerdo",
        "imageUrl" : "logomariposa.png",
        "id":21
    }
    ,
    {
        "name" : "Creps de nutela",
        "price" : "300",
        "category" : "Postres",
        "description" : "Creps de nutela",
        "imageUrl" : "crepes-nutella.jpg",
        "id":21
    }
    ,
    {
        "name" : "Dulce mariposa",
        "price" : "350",
        "category" : "Postres",
        "description" : "Dulce mariposa",
        "imageUrl" : "logomariposa.png",
        "id":21
    }
    ,
    {
        "name" : "Helado",
        "price" : "500",
        "category" : "Postres",
        "description" : "Helado",
        "imageUrl" : "helado-mariposa.jpeg",
        "id":21
    }
    ,
    {
        "name" : "Dulce Mariposa con Helado",
        "price" : "600",
        "category" : "Postres",
        "description" : "Dulce Mariposa con Helado",
        "imageUrl" : "batido-helado-panetela.jpeg",
        "id":21
    }
    ,
    {
        "name" : "Creps de Leche",
        "price" : "250",
        "category" : "Postres",
        "description" : "Creps de Leche",
        "imageUrl" : "logomariposa.png",
        "id":21
    }
    ,
    {
        "name" : "Creps de Chocolate",
        "price" : "300",
        "category" : "Postres",
        "description" : "Creps de Chocolate",
        "imageUrl" : "logomariposa.png",
        "id":21
    }
    ,
    {
        "name" : "Creps de Miel",
        "price" : "200",
        "category" : "Postres",
        "description" : "Creps de Miel",
        "imageUrl" : "creps-miel.jpg",
        "id":21
    }
    ,
    {
        "name" : "Franela",
        "price" : "800",
        "category" : "Postres",
        "description" : "Franela",
        "imageUrl" : "franela.jpeg",
        "id":21
    }
    ,
    {
        "name" : "Borugas de Leche",
        "price" : "400",
        "category" : "Postres",
        "description" : "Borugas de Leche",
        "imageUrl" : "borugasdeleche.jpeg",
        "id":21
    }
    ,
    {
        "name" : "Dona",
        "price" : "150",
        "category" : "Postres",
        "description" : "Dona",
        "imageUrl" : "donas.jpeg",
        "id":21
    }
    ,
    {
        "name" : "Pan de Hamburguesa",
        "price" : "50",
        "category" : "Panes",
        "description" : "Pan de Hamburguesa",
        "imageUrl" : "pan-hamburguesa.jpeg",
        "id":21
    }
    ,
    {
        "name" : "Panes de Bolsa",
        "price" : "150",
        "category" : "Panes",
        "description" : "Panes de Bolsa",
        "imageUrl" : "panes.png",
        "id":21
    }
    ,
    {
        "name" : "Pan de Telera",
        "price" : "110",
        "category" : "Panes",
        "description" : "Pan de Telera",
        "imageUrl" : "logomariposa.png",
        "id":21
    }

  

]