import React from "react";

interface CategoryProps {
  params: {
    categories: string[];
    searchParams?: string;
  };
}
export default function Category(props: CategoryProps) {
  const { categories } = props.params;

  return <h1>Category Entry: {categories}</h1>;
}
