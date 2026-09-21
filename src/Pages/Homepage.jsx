import { useEffect, useState } from "react";
import Hero from "../Components/Hero";
import ShopByCategory from "../Components/ShopByCategory";
import FeatureSection from "../Components/FeatureSection";

function Homepage() {
  const [data, setData] = useState([]);
  const [cardsData, setCardsData] = useState([]);

  const categories = [
    "beauty",
    "fragrances",
    "furniture",
    "groceries",
    "kitchen-accessories",
    "laptops",
    "mens-shirts",
    "mobile-accessories",
  ];

  const cardsCategories = [
    "mens-shoes",
    "skin-care",
    "tops",
    "womens-bags",
    "mens-watches"
  ];

  useEffect(() => {
    const loadCards = async () => {
      try {
        const response = await fetch("https://dummyjson.com/products?limit=0");
        const loadData = await response.json();
        loadData.products.map(p=> console.log(p.category));
        ;
        
        const eightCards = categories.map((category) => {
          return loadData.products.find((p) => category === p.category);
        });

        const newCards = cardsCategories.map((category) => {
          return loadData.products.find((p) => category === p.category);
        });


        setCardsData(newCards)

        
        
        

        setData(eightCards);
      } catch (error) {
        console.error(error);
      }
    };
    loadCards();
  }, []);

  return (
    <>
      <Hero />
      <ShopByCategory products={data}  />
      <FeatureSection productsCard={cardsData} />
    </>
  );
}
export default Homepage;
