import Footer from "@/components/Footer";
import Header from "@/components/Header";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: {
    absolute: "", //If we want to provide the title that completely ignores the title.template set in the parent segments, we can use title.absolute property  Eg:- check in Blog's page.tsx file
    default: "Next.Js Tutorial", //Title.default property is useful when we want to provide a fallback title for child route segments, which don't explicitly specify a title.
    template: "%s | NextJSTutorial", //To create dynamic titles by adding a prefix or suffix , we can use title.template property. This property applies to child route segments and not in the segments it is defined.
  },
  description: "Generated by Next.js",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
