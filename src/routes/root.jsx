import ItemListContainer from "../componentes/ItemListContainer";
import NavBar from "../componentes/Navbar";
import { useParams } from "react-router-dom";

function Root()  {
  const params = useParams (); 
  const isCategoryRoute = Boolean(params.id)


  return (
    <div>
      <NavBar />
      <ItemListContainer />
    </div>
  );
}

export default Root;