import './pages.css'
import AddProduct from '../components/AddProduct/Add';
const Admin = ()=>{
    return(
        <div className='admin-container'>
            <div className="box">
                <div className='inner-box'>
                    {/* <img src='/add-product.png' alt="not found" /> */}
                    <h1>Add</h1>
                </div>
                <div className='inner-box'>
                    <h1>Remove</h1>
                </div>
                <div className='inner-box'>
                    <h1>List</h1>
                </div>
            </div>
            <AddProduct />
        </div>
    )
}

export default Admin;