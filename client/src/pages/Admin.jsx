import './pages.css'
import AddProduct from '../components/AddProduct/Add';
import ListProducts from '../components/ListProducts/ListProducts';
const Admin = ()=>{
    return(
        <div className='admin-container'>
            <div className="box">
                <div className='inner-box'>
                    <img src='/add-product.png' alt="not found" />
                    {/* <img src="/cart.png" alt="" /> */}
                    <h1>Add</h1>
                </div>
                <div className='inner-box'>
                    <img src='/removeproduct.png' alt='not found' />
                    <h1>Remove</h1>
                </div>
                <div className='inner-box'>
                    <img src='/listofproducts.png' alt='not found' />
                    <h1>List</h1>
                </div>
            </div>
            {/* <AddProduct /> */}
            <ListProducts />
        </div>
    )
}

export default Admin;