export default function productDetails({params}:{  //params contains routing information in form of key-value pairs
  params : {productId : string}
}) {  
  return (
    <h1>Product Details {params.productId}</h1>
  )
}