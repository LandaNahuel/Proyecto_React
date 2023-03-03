import NavBar from "./componentes/Navbar";
import itemListContainer from "./componentes/ItemListContainer";

function App()  {
  return (
    <div>
      <NavBar />
      <itemListContainer greeting={"hola mundo"}/>
    </div>
  )
}

export default App;
