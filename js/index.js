import { products } from "../data/products.js";
import { cardComponent } from "../components/ComPonent.js";

const area = document.querySelector("#Area");

products.map((product) => (area.innerHTML += cardComponent(product)));