import Link from "next/link";

const products = [
  { id: "1", name: "Product Alpha" },
  { id: "2", name: "Product Beta" },
  { id: "3", name: "Product Gamma" },
  { id: "4", name: "Product Delta" },
];

export default function ProductsList() {
  return (
    <div>
      <h1>Our Products</h1>
      <ul>
        {products.map((product) => (
          <li key={product.id} className="mb-2">
            {" "}
            {/* Added a key for React lists and some margin */}
            {/* Use the Link component for client-side navigation */}
            <Link
              href={`/products/${product.id}`} // Dynamic URL: /products/1, /products/2, etc.
              className="cursor-pointer text-blue-600 hover:text-blue-800 hover:underline" // Tailwind for styling
            >
              {product.name}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
