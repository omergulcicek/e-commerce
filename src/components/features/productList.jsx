"use client";

import { ProductListSkeletons } from "@/components/skeletons/productListSkeletons";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";

import { useProducts } from "@/hooks/useProducts";

export function ProductList() {
  const { data, isPending, error } = useProducts();

  if (isPending) return <ProductListSkeletons count={8} />;
  if (error) return <div>{error.message}</div>;
  if (!data) return null;

  return (
    <>
      <div className="grid grid-cols-4 gap-8">
        {data.data.map(({ id, name: userName, email, website }) => (
          <Card key={id}>
            <CardHeader>
              <CardTitle>{userName}</CardTitle>
              <CardDescription>{email}</CardDescription>
            </CardHeader>
            <CardContent>
              <p>{website}</p>
            </CardContent>
            <CardFooter>
              <Button>Add To Cart</Button>
            </CardFooter>
          </Card>
        ))}
      </div>
    </>
  );
}
