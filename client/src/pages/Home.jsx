import Hero from "../components/Hero_section/Hero";
import Women from "../components/Popular_women/Popular";
import Offer from '../components/Offers/Offers';
import Collection from "../components/Collections/Collection";
const Home = ()=>{
    return(
        <>
            {/* <h1>Home</h1> */}
            <Hero />
            <Women />
            <Offer />
            <Collection />
        </>
    )
}

export default Home;