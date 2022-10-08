import React, { FC } from 'react';
import 'bootstrap'
//import { useState } from 'react';

export const Product: FC = () => {
    const getProducts = async()=>{
        const result = await fetch("api/products");
        //const prods = await result.json();
        //console.log(prods);
        const text = await result.text();
        alert(text);
    };
    return (
        <>
            <button className='btn btn-primary' onClick={getProducts}>show products</button>
        </>
    );
};