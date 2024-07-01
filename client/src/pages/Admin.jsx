import './pages.css'
import { useState } from 'react';
import AddProduct from '../components/AddProduct/Add';
import ListProducts from '../components/ListProducts/ListProducts';
import DeleteProduct from '../components/DeleteProd/DeleteProduct';
const Admin = () => {

    const [view, setView] = useState("");
    const handleAdd = () => {
        setView("add");
    }
    const handleDelete = () => {
        setView("delete");
    }
    const handleList = () => {
        setView("list");
    }
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