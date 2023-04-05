import ItemListContainer from "../componentes/ItemListContainer";
import NavBar from "../componentes/Navbar";
import { useParams } from "react-router-dom";
import { Container } from "react-bootstrap";
import { useContext } from "react";
import  {Context} from "../context"


function Root()  {
  const params = useParams (); 
  const isCategoryRoute = Boolean(params.id)
  const contextValues = useContext(Context)

  console.log({contextValues});
  

  return (
    <CustomProvider>
    <Container >
      <NavBar />
      <ItemListContainer 
      isCategoryRoute={isCategoryRoute} 
      categoryId={params.id}
      />
    </Container>
    </CustomProvider>
  );
}

export default Root;