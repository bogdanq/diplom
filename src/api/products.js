import { nanoid } from "nanoid";
import { child, ref, set, get } from "firebase/database";
import { database } from "./firebase";

const createProduct = async (product) => {
  const id = nanoid();

  product.id = id;

  return set(child(ref(database), `${product.type}/${id}`), product);
};

const getProductsListByType = async (type) => {
  const products = await get(child(ref(database), `${type}`));

  return Object.values(products.val());
};

const getProductByTypeAndId = async (type, id) => {
  const product = await get(child(ref(database), `${type}/${id}`));

  return product.val();
};

export const productsAPI = {
  createProduct,
  getProductsListByType,
  getProductByTypeAndId,
};

// setTimeout(() => {
//   console.log("create");
//   const p = {
//     name: "Кровать 2",
//     description: "description 2",
//     img: "img",
//     type: "tables",
//     price: 200,
//     params: {
//       width: 10,
//       height: 5,
//       material: "Дерево",
//       weight: 25,
//     },
//   };

//   productsAPI.createProduct(p);
//   console.log("create");

//   productsAPI.createProduct({
//     name: "Кровать 2",
//     description: "description 2",
//     img: "img",
//     type: "kitchen",
//     price: 200,
//     params: {
//       width: 10,
//       height: 5,
//       material: "Дерево",
//       weight: 25,
//     },
//   });
//   productsAPI.createProduct({
//     name: "Кровать 2",
//     description: "description 2",
//     img: "img",
//     type: "print",
//     price: 200,
//     params: {
//       width: 10,
//       height: 5,
//       material: "Дерево",
//       weight: 25,
//     },
//   });
//   productsAPI.createProduct({
//     name: "Кровать 2",
//     description: "description 2",
//     img: "img",
//     type: "material",
//     price: 200,
//     params: {
//       width: 10,
//       height: 5,
//       material: "Дерево",
//       weight: 25,
//     },
//   });
//   productsAPI.createProduct({
//     name: "Кровать 2",
//     description: "description 2",
//     img: "img",
//     type: "table",
//     price: 200,
//     params: {
//       width: 10,
//       height: 5,
//       material: "Дерево",
//       weight: 25,
//     },
//   });
//   productsAPI.createProduct({
//     name: "Кровать 2",
//     description: "description 2",
//     img: "img",
//     type: "closet",
//     price: 200,
//     params: {
//       width: 10,
//       height: 5,
//       material: "Дерево",
//       weight: 25,
//     },
//   });

//   // productsAPI.getProductsListByType("other");
//   // productsAPI.getProductByTypeAndId("other", "2IN229GNcyiK_UWlcQkup");
// }, 1000);
