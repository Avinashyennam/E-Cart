import './pages.css'
import { useContext, useEffect, useState } from 'react';
import AddProduct from '../components/AddProduct/Add';
import ListProducts from '../components/ListProducts/ListProducts';
import DeleteProduct from '../components/DeleteProd/DeleteProduct';
import { ShopContext } from '../context/ShopContext';
const Admin = () => {


    const [view, setView] = useState("");
    // const {products, setProducts} = useContext(ShopContext);
    const handleAdd = () => {
        setView("add");
    }
    const handleDelete = () => {
        setView("delete");
    }
    const handleList = () => {
        setView("list");
        // fetch('http://localhost:5000/allProducts')
        // .then(response => response.json())
        // .then((data)=>{
        //     console.log(data);
        //     setProducts(data);
        // })
        // .catch(error => console.error('Error fetching data:', error));
    }

    // const handleProducts = ()=>{
    //     fetch('http://localhost:5000/allProducts')
    //     .then(response => response.json())
    //     .then((data)=>{
    //         console.log(data);
    //         setProducts(data);
    //     })
    //     .catch(error => console.error('Error fetching data:', error));
    // }
    // useEffect(()=>{
    //     handleProducts();
    // },[]);
    return (
        <div className='admin-container'>
            <div className="box">
                <button onClick={handleAdd} className={`${view === "add" ? 'border':''}`}>
                    <div className='inner-box'>
                        <img src='/add-product.png' alt="not found" width="100" />
                        <h1>Add</h1>
                    </div>
                </button>
                <button onClick={handleDelete} className={`${view === "delete" ? 'border':''}`}>
                    <div className='inner-box'>
                        <img src='/removeproduct.png' alt='not found' width="100" />
                        <h1>Remove</h1>
                    </div>
                </button>
                <button onClick={handleList} className={`${view === "list" ? 'border':''}`}>
                    <div className='inner-box'>
                        <img src='/listofproducts.png' alt='not found' width="100" />
                        <h1>List</h1>
                    </div>
                </button>
            </div>
            {
                view === "add" && <AddProduct />
            }
            {
                view === "delete" && <DeleteProduct />
            }
            {
                view === "list" && <ListProducts />
            }


        </div>
    )
}

export default Admin;