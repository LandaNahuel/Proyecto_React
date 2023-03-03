import ItemListContainer from "./componentes/ItemListContainer";
import NavBar from "./componentes/Navbar";


function App()  {
  return (
    <div>
      <NavBar />
      <ItemListContainer greeting={"HOLA MUNDO"}/>
    </div>
  )
}

export default App;
