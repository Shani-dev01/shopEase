import { useEffect, useState } from "react";
import Hero from "../Components/Hero";
import ShopByCategory from "../Components/ShopByCategory";


function Homepage (){
const [data, setData] = useState([]);
const categories = [
    "beauty",
    "fragrances",
    "furniture",
    "groceries",
    "kitchen-accessories",
    "laptops",
    "mens-shirts",
    "mobile-accessories"
]

useEffect(()=>{
const loadCards = async() => {
try {
       const response = await fetch('https://dummyjson.com/products?limit=0');
        const loadData = await response.json()
        
        const eightCards = categories.map((category)=>{
            return loadData.products.find((p)=> category === p.category)
        } )
        
        setData(eightCards);
        
        
        
    } catch (error) {
        console.error(error);        
    }
}
loadCards();
},[]);

console.log(data.length);

   return(
        <>
        <Hero />
        <ShopByCategory products={data}  />
        
        </>
    )
}
export default Homepage;