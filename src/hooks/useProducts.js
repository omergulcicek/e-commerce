import { useQuery } from "@tanstack/react-query";

import { getProducts } from "@/services/getProducts";

export function useProducts() {
  return useQuery({
    queryKey: ["productList"],
    queryFn: getProducts,
  });
}
