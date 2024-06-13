import React from 'react';
import './recomendadosStyle.css';

function RecomendadoItem({badget,title,urlImage}){

    return(
        <div className='recomendado-item'>
            <img src={urlImage} alt={title} className='recomendado-item-image' />
            <div className='badget'>
                {badget}
            </div>
            <div className='recomendado-item-title'>
                {title}
            </div>

        </div>
    );
}

export default RecomendadoItem;