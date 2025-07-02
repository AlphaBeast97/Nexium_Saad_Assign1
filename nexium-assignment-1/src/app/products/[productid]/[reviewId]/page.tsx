import NotFound  from '@/app/not-found';

interface ReviewPageProps {
  params: {
    reviewId: string;
    productId: string;
  };
}

export default async function Reviews({ params }: ReviewPageProps) {
  const { reviewId, productId } = await params;
  if (parseInt(reviewId) > 100) {
   return NotFound();
  }
  return (
    <>
      <h1> Reviews ID: {reviewId}</h1>
      <h2>for product : {productId}</h2>
    </>
  );
}
