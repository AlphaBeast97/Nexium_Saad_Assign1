interface ProductPageProps {
  params: {
    productId: string;
  };
}

export default async function productDetail({ params }: ProductPageProps) {
  const { productId } = await params;

  return <h1>Product details {productId}</h1>;
}
