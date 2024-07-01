import './delete.css'
import { useEffect, useState } from 'react';
const DeleteProduct = ()=>{

    const [delData, setDelData] = useState({
        id:'',
        name:''
    })
    const handleDelete = (e)=>{
        const {name, value} = e.target;
        setDelData({
            ...delData,
            [name]:value
        })
    }
    useEffect(()=>{
        console.log(delData);
    },[delData]);
    return(
        <div className="delete">
            <div className='heading'>Delete Product</div>
            <div>
                <form action="">
                    <div className='flex-col'>
                        <label>Enter product id</label>
                        <input type="number" name="id" value={delData.id} id="" onChange={handleDelete}/>
                    </div>
                    <div className='flex-col'>
                        <label>Enter product name</label>
                        <input type="text" name="name" value={delData.name} id="" onChange={handleDelete}/>
                    </div>
                    <button>Delete</button>                    
                </form>
            </div>
        </div>
    )
}

export default DeleteProduct;