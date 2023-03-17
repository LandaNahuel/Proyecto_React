
import Item from "../Item";


function ItemDetail({products}) {
  return(
  <div>
        <h1>ITEM DETAIL</h1>
      <ul>
          {products.map((product, index) => (
              <Item product={product} key={product.id} />
          ))}
      </ul>
  </div>
  );
}

export default ItemDetail;