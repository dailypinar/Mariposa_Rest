import React from 'react';
import '../menu-style.css';
import { GoChevronDown } from "react-icons/go";
import { useEffect, useState, useRef } from 'react';
import { FaCartPlus } from "react-icons/fa";
import { forwardRef } from 'react';
import x from '../../../'

const CategoryComponent = forwardRef(({backFunction,categoryName, visibilityArray, id, categoryPicture, products},ref)=>{
    const [categoryProducts, setProducts] = useState([]);
    const [vis, setVis] = useState(visibilityArray[id]);

    function handleClickDown() {
        let ar = visibilityArray;
        if(ar[id]){
            ar[id] = 0;
        }
        else {
            for(let i=0;i<ar.length;i++){
                ar[i] = 0;
            }
            ar[id] = 1;
        }
        backFunction(ar);
    }

    useEffect(() => {
        try {
            if (products) {
                let res = [];
                for (let i = 0; i < products.length; i++) {
                    if (products[i].category === categoryName) {
                        res.push(products[i]);
                    }
                }
                setProducts(res);
            }


        }
        catch (e) {
            console.log(e);
        }
        

    }, [products])


    return (
        <div className='category' ref={ref}>

            <div className='category-info' >
                <div>
                    <img src={categoryPicture} alt={categoryName} className='category-img' />
                </div>

                <h1 className='category-name'>
                    {categoryName}
                </h1>

                <div className='triangle-down-container' onClick={handleClickDown}>
                    <GoChevronDown />
                </div>
            </div>
            <div className={'products-by-category oculto'}>
                {
                    categoryProducts.map(product => (
                        <div className='product-card' key={product.id}>
                            <img src={require(`../../../Resources/Products/${product.imageUrl}`)} alt={product.name} className='product-image' />
                            <div className='product-info'>
                                <div className='product-name'>
                                    {product.name}
                                </div>
                                <div className='product-description'>
                                    {product.description}
                                </div>
                                <div className='cart-container'>
                                    <div className='product-price'>
                                        ${product.price}
                                    </div>

                                    <button className='cart-button'>

                                        <FaCartPlus className='cart-ic' />
                                        <div className='cart-text'>
                                            Agregar al Carrito
                                        </div>
                                    </button>
                                </div>

                            </div>
                        </div>
                    ))
                }

            </div>


        </div>
    );
});



export default CategoryComponent;
