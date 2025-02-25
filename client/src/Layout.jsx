

import { Outlet } from "react-router-dom";
import Footer from "./components/Footer";
import TopMenu from "./components/Topmenu";

const Layout=()=>{
    return(
        <>
           <TopMenu/>
            <Outlet/>
           <Footer/>
        
        </>
    )
}

export default Layout;
