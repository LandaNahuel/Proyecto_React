import ItemListContainer from "../componentes/ItemListContainer";
import NavBar from "../componentes/Navbar";
import { useParams } from "react-router-dom";
//import { Container } from "react-bootstrap";




function Root()  {
  const params = useParams (); 
  const isCategoryRoute = Boolean(params.id)

  

  return (
    <div>
      <NavBar />
      <ItemListContainer 
      isCategoryRoute={isCategoryRoute} 
      categoryId={params.id}
      />
    </div>
  );
}

export default Root;