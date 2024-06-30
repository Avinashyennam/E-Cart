import './add.css';
const AddProduct = () => {
    return (
        <div>
            <div>
                <div>
                    <form action="">
                        <div className='col-gap'>
                            <input type="text" placeholder="Enter name" />
                            <input type="number" name="" id="" placeholder="Enter old price" />
                        </div>
                        <div className='col-gap'>
                            <input type="number" name="" id="" placeholder="Enter new price" />
                            <input type="text" placeholder="Enter description" />
                        </div>
                        <div className='col-gap'>
                            <input type="text" placeholder="Enter category" />
                            <input type="file" name="" id="" />
                        </div>
                    </form>
                </div>
                <div>Buttons</div>
            </div>
        </div>
    )
}

export default AddProduct;