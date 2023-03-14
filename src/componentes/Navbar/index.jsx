
import "./navbar.css";
import CardWidget from "../CardWidget";


function NavBar({changeValue}){
    return <div>
        <header className=" d-flex justify-content-center"  >
        <img className="icon" src="https://www.shutterstock.com/image-vector/coffee-book-logo-design-cup-260nw-1711719175.jpg" />

            <nav className="navbar navbar-expand-sm navbar-light">
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#opciones">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="opciones">
                    <ul className="navbar-nav">
                        <li className="nav-item">
                            <a className="nav-link active" >INICIO</a> 
                        </li>
                        <li className="nav-item">
                            <a className="nav-link active" >PRODUCTOS</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link active" >MENU</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link active" >SUCURSALES</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link active" >CONTACTO</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link active" onClick={changeValue}>CAMBIAR MENSAJE</a>
                        </li>
                    </ul>
                    <CardWidget />
                </div>
            </nav>
        </header>
</div>;

}

export default NavBar