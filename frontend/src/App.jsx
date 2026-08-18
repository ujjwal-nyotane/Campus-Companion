import Dashboard from "./components/dashboard.jsx";
import Navbar from "./components/Navbar.jsx";
import Footer from "./components/footer.jsx";
import { Route,Routes,Link } from "react-router-dom";

function App(){
    return (
        <Routes>
        <Route path='/' element={
           <> <Navbar/>
            <Dashboard/>
            <Footer/>
            </>
        }/>
        </Routes>
    )
}
export default App