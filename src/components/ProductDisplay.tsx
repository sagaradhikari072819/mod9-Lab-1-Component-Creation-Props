// types/index.ts
export interface Product {
  id: string;
  name: string;
  price: number;
  description: string;
  imageUrl?: string;
  inStock: boolean;
}

export interface ProductDisplayProps {
  product: Product;
  showDescription?: boolean;
  showStockStatus?: boolean;
  onAddToCart?: (productId: string) => void;
  children?: React.ReactNode;
}

function ProductDisplay({
  product,
  showDescription,
  showStockStatus,
  onAddToCart,
  children,
}: ProductDisplayProps) {
  return (
    <div className="w-full max-w-4xl mx-auto p-6">
       <div className="bg-white shadow-md rounded-lg p-6 max-w-4xl w-full flex flex-col items-center space-y-4">
      <h1 className="text-4xl mb-5">Producs Detail</h1>
      <div>
        <img
          src="./Keybord.jpg"
          alt="product"
          className="w-600 h-50 object-cover mb-5"
        />
      </div>
      {/* <p className="font-bold">Product Id: {product.id}</p> */}

      <h3 className="mb-5 ">
         {product.name}
      </h3>
      <div className="color-blue font-bold text-blue-600">
        ${product.price}
      </div>
      {showDescription && (
        <div className="mb-5">
         {product.description}
        </div>
      )}

      {showStockStatus && (
        <div className="mb-5 text-green-600 ">
          {" "}
          {product.inStock ? "In Stock" : "Out of Stock"}
        </div>
      )}
      {onAddToCart && (
        <button
          onClick={() => onAddToCart?.(product.id)}
          className="w-full py-3 bg-indigo-600 text-white text-sm rounded-md hover:bg-indigo-700 transition-colors duration-200 font-semibold mb-5"
          
        >
          Add to Cart
        </button>
      )}
      {children}
    </div>
    </div>
   
  );
}

export default ProductDisplay;