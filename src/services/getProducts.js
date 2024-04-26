import { apiGet } from "@/helpers/useFetch";

export async function getProducts() {
  const res = await apiGet({
    url: `https://jsonplaceholder.typicode.com/users`,
  });

  return res;
}
