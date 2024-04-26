import { apiGet } from "@/helpers/useFetch";

const { API_ENDPOINT } = process.env;

export async function getSeo(page) {
  const res = await apiGet({
    url: `${API_ENDPOINT}/todos/${page}`,
  });

  return {
    title: `Title ${res.data.id}`,
    description: res.data.title,
  };
}
