import './delete.css'
const DeleteProduct = ()=>{
    return(
        <div className="delete">
            <div className='heading'>Delete Product</div>
            <div>
                <form action="">
                    <div className='flex-col'>
                        <label>Enter product id</label>
                        <input type="number" name="" id="" />
                    </div>
                    <div className='flex-col'>
                        <label>Enter product name</label>
                        <input type="text" name="" id="" />
                    </div>
                    <button>Delete</button>                    
                </form>
            </div>
        </div>
    )
}

export default DeleteProduct;