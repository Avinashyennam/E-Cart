import './add.css';
import { useState, useContext, useEffect } from 'react';
const AddProduct = () => {

    const [product, setProduct] = useState({
        name:"",
        image:"",
        old_price:"",
        new_price:"",
        discount:"",
        category:"women"
    })
    const [image, setImage] = useState(false);

    const imageHandler = (e)=>{
        setImage(e.target.files[0])
    }

    const handleChange = (e)=>{
        const {name, value} = e.target;
        setProduct({
            ...product,
            [name]:value
        });
    }

    const addProduct = async ()=>{
        // console.log("Im in addProduct function");
        let responseData;
        let item = product;
        let formData = new FormData();
        formData.append('product', image);
        console.log(formData);
        await fetch("http://localhost:5000/upload",{
            method: 'POST',
            headers:{
                Accept: "application/json"
            },
            body: formData
        })
        .then(response => response.json())
        .then((data)=> responseData = data);

        if(responseData.success){
            item.image = responseData.img_url;
            console.log(item);
            await fetch("http://localhost:5000/addProduct",{
                method: 'POST',
                headers:{
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(item)
            })
            .then(response => response.json())
            .then((data)=> {
                console.log(data);
                alert("Succesfully added product");
            });
        }
    }

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
                                    <option value="kid">kid</option>
                                    <option value="men">men</option>
                                    <option value="women">women</option>                    
                                </select>
                            </div>
                        </div>
                        <input type="file" accept='image/*' onChange={imageHandler} name="image" id=""/>
                    </form>
                </div>
                <div className='buttons'>
                    <button type='submit' className='add' onClick={()=> addProduct()}>Add</button>
                    <button className='remove'>Remove</button>
                </div>
            </div>
        </div>
    )
}

export default AddProduct;