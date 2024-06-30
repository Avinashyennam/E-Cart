import './pages.css'
import AddProduct from '../components/AddProduct/Add';
import ListProducts from '../components/ListProducts/ListProducts';
import DeleteProduct from '../components/DeleteProd/DeleteProduct';
const Admin = ()=>{
    return(
        <div className='admin-container'>
            <div className="box">
                <div className='inner-box'>
                    <img src='/add-product.png' alt="not found" width="100"/>
                    {/* <img src="/cart.png" alt="" /> */}
                    <h1>Add</h1>
                </div>
                <div className='inner-box'>
                    <img src='/removeproduct.png' alt='not found' width="100"/>
                    <h1>Remove</h1>
                </div>
                <div className='inner-box'>
                    <img src='/listofproducts.png' alt='not found' width="100"/>
                    <h1>List</h1>
                </div>
            </div>
            {/* <AddProduct /> */}
            {/* <ListProducts /> */}
            <DeleteProduct />
        </div>
    )
}

export default Admin;