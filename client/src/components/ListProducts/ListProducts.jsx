import { ShopContext } from '../../context/ShopContext';
import './Listproducts.css'
import { useContext, useState } from 'react';
const ListProducts = ()=>{

    const {products} = useContext(ShopContext);
    console.log(products);
    return(
        <div className="list-products">
            <div>All Products</div>
            <div>
                <table cellSpacing={20}>
                    <tr>
                        <th>sno</th>
                        <th>Product</th>
                        <th>Name</th>
                        <th>Category</th>
                        <th>Quantity</th>
                        <th>Old Price</th>
                        <th>New Price</th>
                    </tr>
                    <tr>
                        <td>1</td>
                        <td>
                            <img src='/smpl.jpg' alt='not found' width="100" height="200"/>
                        </td>
                        <td>Men Green Solid Zippered Full-Zip Slim Fit Bomber Jacket</td>
                        <td>Men</td>
                        <td>5</td>
                        <td>999</td>
                        <td>799</td>
                    </tr>
                    <tr>
                        <td>2</td>
                        <td>
                            <img src='/img1.jpg' alt='not found' width="100" height="200"/>
                        </td>
                        <td>Women Shirred Wide Hem Semi Sheer Back Top M(6)-Black</td>
                        <td>women</td>
                        <td>8</td>
                        <td>999</td>
                        <td>799</td>
                    </tr>

                    {
                        products.map((item, id)=>{
                            return(
                                <tr key={id}>
                                    <td>{id}</td>
                                    <td>
                                        <img src={item.image} alt='not found' width="100" height="200"/>
                                    </td>
                                    <td>{item.name}</td>
                                    <td>{item.category}</td>
                                    <td>9</td>
                                    <td>{item.old_price}</td>
                                    <td>{item.new_price}</td>
                                </tr>
                            )
                        })
                    }
                </table>
            </div>
        </div>
    )
}

export default ListProducts;