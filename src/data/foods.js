/**
 * >>> YOUR FOOD ITEMS LIVE HERE <<<
 * Photos are in /public/images/. To add a dish: copy its photo there and add a line below.
 *
 * Shape matches a future database row:
 *   id (string) | name (string) | image (url) | available (boolean)
 * `available` is only the default; services/api.js is the only place that
 * decides where the live value comes from.
 */
export const FOODS = [
  { id: "f1", name: "Pizza", image: "/images/pizza.jpg", available: true },
  { id: "f2", name: "Burger", image: "/images/burger.jpg", available: false },
  { id: "f3", name: "Chowmein", image: "/images/chowmein.jpg", available: true },
  { id: "f4", name: "Manchurian", image: "/images/manchurian.jpg", available: true },
  { id: "f5", name: "Paneer Tikka", image: "/images/paneer-tikka.jpg", available: true },
  { id: "f6", name: "Spring Roll", image: "/images/spring-roll.jpg", available: true },
  { id: "f7", name: "Garlic Bread", image: "/images/garlic-bread.jpg", available: true },
  { id: "f8", name: "Mojito", image: "/images/mojito.jpg", available: true },
];
