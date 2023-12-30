import { Metadata } from "next";

export const metadataForGamePage = (
  title: string,
  description: string
): Metadata => {
  return {
    title: `${title} | Buzzkill.tips`,
    description,
    openGraph: {
      type: "website",
      siteName: "Buzzkill.tips",
      title,
      description,
    },
  };
};
