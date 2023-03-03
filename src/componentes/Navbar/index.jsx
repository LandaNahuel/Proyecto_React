
import "./navbar.css";
import CardWidget from "../CardWidget";


function NavBar(){
    return <div>
        <header class=" d-flex justify-content-center"  >
        <img class="icon" src="https://www.shutterstock.com/image-vector/coffee-book-logo-design-cup-260nw-1711719175.jpg" />

            <nav class="navbar navbar-expand-sm navbar-light">
                <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#opciones">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="opciones">
                    <ul class="navbar-nav">
                        <li class="nav-item">
                            <a class="nav-link active" >INICIO</a> 
                        </li>
                        <li class="nav-item">
                            <a class="nav-link active" >PRODUCTOS</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link active" >MENU</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link active" >SUCURSALES</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link active" >CONTACTO</a>
                        </li>
                    </ul>
                    <CardWidget />
                </div>
            </nav>
        </header>
</div>;

}

export default NavBar