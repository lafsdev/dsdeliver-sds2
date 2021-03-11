import { Product } from "./types";

type Props = {
  product: Product;
};

function formatPrice(price: number){
  const formatter = new Intl.NumberFormat('pt-BR',{
    style: 'currency',
    currency: 'BRL',
    minimumFractionDigits: 2
  });
  return formatter.format(price);
}

function ProductCard({ product }: Props) {
  return (
    <div className="order-card-container">
      <div className="order-card-title">
        <h3>{product.name}</h3>
        <img className="order-card-image" src={product.imageUri} alt={product.name}></img>
        <div className="order-card-price">{formatPrice(product.price)}</div>
        <div className="order-card-description"> {product.description}</div>
      </div>
    </div>
  );
}

export default ProductCard;
