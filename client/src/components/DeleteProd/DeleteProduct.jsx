import './delete.css'
import { useEffect, useState } from 'react';
const DeleteProduct = ()=>{

    const [delData, setDelData] = useState({
        id:'',
        name:''
    })
    const handleChange = (e)=>{
        const {name, value} = e.target;
        setDelData({
            ...delData,
            [name]:value
        })
    }

    const handleDelete = async ()=>{
        try {
            await fetch("http://localhost:5000/removeProduct",{
                method: 'DELETE',
                headers:{
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(delData)
            })
            .then(response => response.json())
            .then((data) =>{
                console.log(data);
                alert(`product with id ${delData.id} has been succesfully removed`);
            })
        } catch (error) {
            console.log(error.message);
        }
    }
    // useEffect(()=>{
    //     console.log(delData);
    // },[delData]);
    return(
        <div className="delete">
            <div className='heading'>Delete Product</div>
            <div>
                <form action="">
                    <div className='flex-col'>
                        <label>Enter product id</label>
                        <input type="number" name="id" value={delData.id} id="" onChange={handleChange}/>
                    </div>
                    <div className='flex-col'>
                        <label>Enter product name</label>
                        <input type="text" name="name" value={delData.name} id="" onChange={handleChange}/>
                    </div>
                    <button onClick={() => handleDelete()}>Delete</button>                    
                </form>
            </div>
        </div>
    )
}

export default DeleteProduct;