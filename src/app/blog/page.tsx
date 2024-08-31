import { Metadata } from "next";

export const metadata: Metadata = {
  title: {
    absolute: "Blog"  //This will be pre
  },
};

export default function Blog() {
  return <h1>Welcome to Blog!</h1>;
}
