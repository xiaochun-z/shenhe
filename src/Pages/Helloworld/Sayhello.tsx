import React, { FC } from 'react';
//import { useState } from 'react';

export const Sayhello: FC = () => {
    const getProducts = async()=>{
        const result = await fetch("api/sayhello", {
            method: "GET",
            headers: {"name": "xiaocz"}
          });
        //const prods = await result.json();
        //console.log(prods);
        const text = await result.text();
        alert(text);
    };
    return (
        <>
            <button className='btn btn-primary m-3' onClick={getProducts}>hello from azure function</button>
        </>
    );
};