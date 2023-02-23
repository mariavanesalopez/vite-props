import Navbar from "../../Components/Navbar/Navbar";
import Main from "../../Components/Main/Main";
import Footer from "../../Components/Footer/Footer";

const Home = ()=>{

    <h2>soy Home</h2>
    let nombre = "maria";
    let apellido= "perez";
    return(
        <>        
        <Navbar />
        <Main nombre={nombre} apellido={apellido}/>
        <Footer />
        </>

    )
}
export default Home