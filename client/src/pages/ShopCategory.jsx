import React from "react";
import banner3 from '../components/assets/banner3.jpg'
import banner4 from '../components/assets/banner4.jpg'
import banner5 from '../components/assets/banner5.jpg'
const ShopCategory = (props)=>{
    return(
        <>
            <div>
                
                {
                    (props.category==="women"?
                    <div className="flex">
                        <img src={props.banner} alt="not found" style={{width:"60%", height:"400px"}}/>
                        <div className="w-2/5">
                            <div className="w-full"><img src={banner3} alt="not found" style={{width:"100%", height:"200px"}}/></div>
                            <div className="flex">
                                <img src={banner4} alt="not found" style={{width:"20%", height:"200px"}}/>
                                <img src={banner5} alt="not found" style={{width:"20%", height:"200px"}}/>
                            </div>
                        </div>
                    </div>:
                    <div>
                        <img src={props.banner} alt="not found" style={{width:"100%", height:"500px"}}/>
                    </div>)
                }
            </div>
        </>
    )
}

export default ShopCategory;