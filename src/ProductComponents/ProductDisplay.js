import React, { useEffect } from 'react'
import { useState } from 'react'
import './Style.css';

const ProductDisplay = () => {
    const [products, setProduct] = useState([])
    const [SearchInput,setSearchInput]=useState('')
    useEffect(() => {
        fetch("https://fakestoreapi.com/products")
            .then(response => response.json())
            .then(data => setProduct(data))
    }, [])

    const ChnageHandler = (e) => {
        console.log(e.target.value);
        setSearchInput(e.target.value)

    }
    const Delete=(index)=>{
        let d=[...products];
         d.splice(index,1)
         setProduct(d);
    }
    return (

        <>

            <input onChange={ChnageHandler} value={SearchInput}  placeholder="Search Here"/>
            <div className='Products'>
                { 
                products.filter((element)=>{
                 return element.title.indexOf(SearchInput)>=0;

                }).map((ele,index) => {
                    return (<div className='product'>
                        <div className='product-img'> <img src={ele.image}></img></div>
                        <h5>{ele.title}</h5>
                        <h4>{ele.category}</h4>
                        <p>{ele.description.slice(0, 20)}
                        </p>
                        <button onClick={()=>Delete(index)}>❌</button>
                    </div>)
                })}

            </div>
        </>
    )
}

export default ProductDisplay;