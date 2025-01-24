import { useState } from "react";
import './Homoe.css';
const foodItems = [
  { id: 1, name: "Pizza", price: 10, image: "https://www.indianhealthyrecipes.com/wp-content/uploads/2015/10/pizza-recipe-1.jpg" },
  { id: 2, name: "Sushi", price: 15, image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT5oC6XQTTHPgXoaB32ehWSym0QdPYQPaopKw&s" },
  { id: 3, name: "Burger", price: 8, image: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4d/Cheeseburger.jpg/1200px-Cheeseburger.jpg" },
  { id: 4, name: "Tacos", price: 6, image: "https://www.onceuponachef.com/images/2023/08/Beef-Tacos.jpg" },
  { id: 5, name: "Pasta", price: 12, image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTGj5fp8DwKOgB02Y1w-suEvsEg_E0eYYdO_A&s" },
];

const Home = ({ addToCart }) => {
  const [filter, setFilter] = useState("");

  const filteredItems = foodItems.filter((item) =>
    item.name.toLowerCase().includes(filter.toLowerCase())
  );

  return (
    <div className="home">
      <h2>Food Items</h2>
      <input
  type="text"
  placeholder="Search for delicious food..."
  value={filter}
  onChange={(e) => setFilter(e.target.value)}
  className="search-box"
/>

      <div className="food-grid">
        {filteredItems.map((item) => (
          <div key={item.id} className="food-card">
            <img src={item.image} alt={item.name} className="food-image" />
            <h3>{item.name}</h3>
            <p>${item.price}</p>
            <button class="compare-btn" onClick={() => addToCart(item)}>Add to Cart</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Home;
