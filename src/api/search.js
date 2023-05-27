import { productsAPI } from "./products";

const types = ["tables", "other", "kitchen", "print", "material", "closet"];

const search = async (char) => {
  if (!char) {
    return [];
  }

  const queries = [];
  const result = [];

  types.forEach((type) => {
    queries.push(productsAPI.getProductsListByType(type));
  });

  const data = await Promise.all(queries);

  data.forEach((d) => {
    result.push(...d);
  });

  return result.filter(
    (p) =>
      p.description.toLowerCase().includes(char.trim().toLowerCase()) ||
      p.name.toLowerCase().includes(char.trim().toLowerCase())
  );
};

export const searchApi = { search };
