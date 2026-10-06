import ProductCard from "./components/ProductCard/ProductCard.jsx";
import logo from "./assets/house.png";
import bookImage from "./assets/images.jpeg";
import searchIcon from "./assets/search.svg";
import userIcon from "./assets/user.svg";
import cartIcon from "./assets/cart2.svg";
import "./App.css";

const products = [
  {
    id: 1,
    title: "Умный дом. Базовый курс",
    description: "Электронная книга по сценариям освещения и климата.",
    image: bookImage,
    price: 29,
    rating: 4.2,
  },
  {
    id: 2,
    title: "Digital House. Практикум",
    description: "Цифровое пособие по настройке умного дома.",
    image: bookImage,
    price: 35,
    rating: 4.8,
  },
  {
    id: 3,
    title: "Домашняя автоматизация",
    description: "Сборник готовых схем и чек-листов для проекта.",
    image: bookImage,
    price: 19,
    rating: 4.0,
  },
];

function App() {
  return (
    <div className="page">
      <header className="header">
        <img className="logo" src={logo} alt="Digital House" />
        <div>
          <h1>Digital House</h1>
          <p>Интернет-магазин цифровых товаров для дома</p>
        </div>
        <div className="header-actions">
          <button type="button" className="icon-button" aria-label="Поиск">
            <img src={searchIcon} alt="" />
          </button>
          <button type="button" className="icon-button" aria-label="Профиль">
            <img src={userIcon} alt="" />
          </button>
          <button type="button" className="icon-button" aria-label="Корзина">
            <img src={cartIcon} alt="" />
          </button>
        </div>
      </header>

      <main className="catalog">
        {products.map((product) => (
          <ProductCard
            key={product.id}
            title={product.title}
            description={product.description}
            image={product.image}
            price={product.price}
            rating={product.rating}
          />
        ))}
      </main>
    </div>
  );
}

export default App;
