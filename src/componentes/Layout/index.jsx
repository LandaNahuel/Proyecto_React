import NavBar from "../Navbar";
import { Outlet as Page } from "react-router-dom";

function Layout () {
    return (
        <main>
            <NavBar/>
            <Page/>
        </main>
    );
}

export default Layout;