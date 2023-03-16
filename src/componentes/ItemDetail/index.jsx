
import Item from "../Item";


function ItemDetail({products}) {
  return(
  <div>
      <ul>
          {products.map((product, index) => (
              <Item product={product} key={product.id} />
          ))}
      </ul>
  </div>
  );
}

export default ItemDetail;