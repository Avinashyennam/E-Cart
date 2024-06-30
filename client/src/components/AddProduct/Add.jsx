import './add.css';
const AddProduct = () => {
    return (
        <div>
            <div className="product-info">
                <div>
                    <form action="">
                        <div className='col-gap'>
                            <div className='flex-col'>
                                <label htmlFor="name">Enter Product name</label>
                                <input type="text" placeholder="Enter name" />
                            </div>
                            <div className='flex-col'>
                                <label>Enter old price</label>
                                <input type="number" name="" id="" placeholder="Enter old price" />
                            </div>

                        </div>
                        <div className='col-gap'>
                        <div className='flex-col'>
                                <label>Enter discount</label>
                                <input type="number" name="" id="" placeholder='Enter discount'/>
                            </div>
                            <div className='flex-col'>
                                <label>Enter old price</label>
                                <input type="number" name="" id="" placeholder="Enter old price" />
                            </div>
                            
                        </div>
                        <div className='col-gap'>
                            <div className='flex-col'>
                                <label>select category</label>
                                <select name="" id="">
                                    <option value="">kid</option>
                                    <option value="">men</option>
                                    <option value="">women</option>
                                </select>
                            </div>
                            <div className='flex-col'>
                                <label htmlFor="name">Enter Description</label>
                                <input type="text" placeholder="Enter desc" />
                            </div>
                        </div>
                        <input type="file" name="" id="" />
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