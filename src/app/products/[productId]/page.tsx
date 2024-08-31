import { Metadata } from "next";

type Props = {
  params: {
    productId: string;
  };
};

export const generateMetadata = async ({
  params,
}: Props): Promise<Metadata> => {
  const title = await new Promise((resolve) => {
    setTimeout(() => {
      resolve(`iPhone ${params.productId}`); //we can use productId to fetch detail about a page and can set in as a metda data for the page. Somethine like titleById which makes an API call.
    }, 100);
  });
  return {
    title: `Product ${title}`,
  };
};

export default function productDetails({ params }: Props) {
  //params contains routing information in form of key-value pairs
  return <h1>Details about product {params.productId}</h1>;
}
