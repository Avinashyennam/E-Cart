import './add.css';
import { useState, useContext, useEffect } from 'react';
const AddProduct = () => {

    const [product, setProduct] = useState({
        name:"",
        old_price:"",
        new_price:"",
        discount:"",
        category:""
    })

    const handleChange = (e)=>{
        const {name, value} = e.target;
        setProduct({
            ...product,
            [name]:value
        });
    }
    useEffect(()=>{
        console.log(product)
    },[product]);
    return (
        <div>
            <div className="product-info">
                <div>
                    <form action="">
                        <div className='col-gap'>
                            <div className='flex-col'>
                                <label htmlFor="name">Enter Product name</label>
                                <input type="text" name='name' value={product.name} placeholder="Enter name" onChange={handleChange}/>
                            </div>
                            <div className='flex-col'>
                                <label>Enter old price</label>
                                <input type="number" name="old_price" value={product.old_price} id="" placeholder="Enter old price" onChange={handleChange} />
                            </div>
                        </div>
                        <div className='col-gap'>
                            <div className='flex-col'>
                                <label>Enter discount</label>
                                <input type="number" name="discount" value={product.discount} id="" placeholder='Enter discount' onChange={handleChange}/>
                            </div>
                            <div className='flex-col'>
                                <label>Enter new price</label>
                                <input type="number" name="new_price" value={product.new_price} id="" placeholder="Enter new price" onChange={handleChange}/>
                            </div>                           
                        </div>
                        <div className='col-gap'>
                            <div className='flex-col'>
                                <label>select category</label>
                                <select name="category" value={product.category} id="" onChange={handleChange}>
                                    <option value="">kid</option>
                                    <option value="">men</option>
                                    <option value="">women</option>                    
                                </select>
                            </div>
                        </div>
                        <input type="file" accept='image/*' name="" id=""/>
                    </form>
                </div>
                <div className='buttons'>
                    <button className='add'>Add</button>
                    <button className='remove'>Remove</button>
                </div>
            </div>
        </div>
    )
}

export default AddProduct;