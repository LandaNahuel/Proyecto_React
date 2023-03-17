import ItemListContainer from "../componentes/ItemListContainer";
import NavBar from "../componentes/Navbar";
import { useParams } from "react-router-dom";

function Root()  {
  const params = useParams (); 

  console.log({params});


  return (
    <div>
      <NavBar />
      <ItemListContainer />
    </div>
  );
}

export default Root;