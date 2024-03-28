import { useAuth } from "../context/AuthContext";

const products = [
  {
    name: "Product 1",
    image: [
      "https://images.unsplash.com/photo-1572635196237-14b3f281503f?q=80&w=1480&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    ],
    price: 10.99,
    quantity: 5,
    description: "Description of Product 1",
    categories: ["Category 1", "Category 2"],
    // user: "65f95bbbf77b636c4e086bbf",
  },
  {
    name: "Product 2",
    image: [
      "https://images.unsplash.com/photo-1572635196237-14b3f281503f?q=80&w=1480&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    ],
    price: 19.99,
    quantity: 3,
    description: "Description of Product 2",
    categories: ["Category 2", "Category 3"],
    // user: "65f95bbbf77b636c4e086bbf",
  },
  {
    name: "Product 3",
    image: [
      "https://images.unsplash.com/photo-1572635196237-14b3f281503f?q=80&w=1480&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    ],
    price: 8.5,
    quantity: 10,
    description: "Description of Product 3",
    categories: ["Category 1", "Category 4"],
    // user: "65f95bbbf77b636c4e086bbf",
  },
  {
    name: "Product 4",
    image: [
      "https://images.unsplash.com/photo-1572635196237-14b3f281503f?q=80&w=1480&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    ],
    price: 15.75,
    quantity: 2,
    description: "Description of Product 4",
    categories: ["Category 3", "Category 5"],
    // user: "65f95bbbf77b636c4e086bbf",
  },
  {
    name: "Product 5",
    image: [
      "https://images.unsplash.com/photo-1572635196237-14b3f281503f?q=80&w=1480&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    ],
    price: 12.99,
    quantity: 8,
    description: "Description of Product 5",
    categories: ["Category 2", "Category 4"],
    // user: "65f95bbbf77b636c4e086bbf",
  },
  {
    name: "Product 6",
    image: [
      "https://images.unsplash.com/photo-1572635196237-14b3f281503f?q=80&w=1480&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    ],
    price: 14.99,
    quantity: 7,
    description: "Description of Product 6",
    categories: ["Category 3", "Category 5"],
    // user: "65f95bbbf77b636c4e086bbf",
  },
  {
    name: "Product 7",
    image: [
      "https://images.unsplash.com/photo-1572635196237-14b3f281503f?q=80&w=1480&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    ],
    price: 9.99,
    quantity: 4,
    description: "Description of Product 7",
    categories: ["Category 1", "Category 4"],
    // user: "65f95bbbf77b636c4e086bbf",
  },
  {
    name: "Product 8",
    image: [
      "https://images.unsplash.com/photo-1572635196237-14b3f281503f?q=80&w=1480&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    ],
    price: 17.5,
    quantity: 6,
    description: "Description of Product 8",
    categories: ["Category 2", "Category 3"],
    // user: "65f95bbbf77b636c4e086bbf",
  },
  {
    name: "Product 9",
    image: [
      "https://images.unsplash.com/photo-1572635196237-14b3f281503f?q=80&w=1480&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    ],
    price: 11.25,
    quantity: 3,
    description: "Description of Product 9",
    categories: ["Category 4", "Category 5"],
    // user: "65f95bbbf77b636c4e086bbf",
  },
  {
    name: "Product 10",
    image: [
      "https://images.unsplash.com/photo-1572635196237-14b3f281503f?q=80&w=1480&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    ],
    price: 13.5,
    quantity: 9,
    description: "Description of Product 10",
    categories: ["Category 1", "Category 2"],
    // user: "65f95bbbf77b636c4e086bbf",
  },
];
const CreateProduct = () => {
  const { newProduct } = useAuth();

  const handleClick = () => {
    products.forEach((product) => {
      newProduct(product);
    });
  };
  return (
    <div>
      <button onClick={handleClick}>Crear</button>
    </div>
  );
};
export default CreateProduct;
