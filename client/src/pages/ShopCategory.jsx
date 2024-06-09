import React from "react";
// import banner3 from '../components/assets/banner3.jpg'
// import banner4 from '../components/assets/banner4.jpg'
// import banner5 from '../components/assets/banner5.jpg'
const ShopCategory = (props)=>{
    return(
        <>
            <div className="flex justify-center items-center" style={{backgroundColor:`${props.bg}`}}>
                <div style={props.styles} className="flex items-center justify-center w-1/2">
                    <h1 className="flex text-6xl font-bold">{props.text}</h1>
                </div>
                <img src={props.banner} alt="not found" style={{width:"350px", height:"550px"}}/>
            </div>
        </>
    )
}

export default ShopCategory;