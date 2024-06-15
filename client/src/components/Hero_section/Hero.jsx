import './Hero.css';
const Hero = ()=>{
    return(
        <>
            <div className="cont flex justify-between">
                <div className="hero-text w-1/2 flex flex-col gap-6 justify-center items-center">
                    <h1 className='text-7xl w-[75%] font-bold'>Elevate your style with ease.</h1>
                    <h3 className='text-2xl w-[75%] font-semibold'>Shop high-quality, on-trend prices at cart</h3>
                    <div className='bg-red-500 px-3 py-2 rounded-lg'>
                        <button className='text-xl text-white'>View Collections</button>
                    </div>
                </div>
                <div className="hero-img-con w-1/2 flex justify-end">
                    <div className="hero-curve"></div>
                    <img className='hero-img' src="/heroImage.png" alt="not found" width={'75%'} height={'50%'} />
                </div>
            </div>
        </>
    )
}

export default Hero;