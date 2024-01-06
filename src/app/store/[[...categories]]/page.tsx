import React from "react";

interface CategoryProps {
  params: {
    categories: string[];
    searchParams?: string;
  };
}
export default function Category(props: CategoryProps) {
  const { categories } = props.params;

  console.log("category: ", props);

  return <h1>Category Entry: {categories}</h1>;
}
