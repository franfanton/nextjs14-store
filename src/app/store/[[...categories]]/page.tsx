import { ProductsWrapper } from "app/components/store/ProductWrapper";
import { getProducts } from "app/services/shopify";
import React from "react";

interface CategoryProps {
  params: {
    categories: string[];
    searchParams?: string;
  };
}
export default async function Category(props: CategoryProps) {
  const { categories } = props.params;
  const products = await getProducts();

  return <ProductsWrapper products={products} />;
}
