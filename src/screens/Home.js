import React, { useEffect, useState } from 'react';
import { useDispatchCart } from '../components/ContextReducer';
import img1 from '../components/Images/burger.jpg';
import img2 from '../components/Images/davide-cantelli-jpkfc5_d-DI-unsplash (1).jpg';
import img3 from '../components/Images/chad-montano-MqT0asuoIcU-unsplash.jpg';
import img4 from '../components/Images/panner tikka.avif';
import img5 from '../components/Images/chilli.webp';
import img6 from '../components/Images/Briyani.jpg';
import Footer from '../components/Footer';
import Navbar from '../components/Navbar';
import Carousel from '../components/Carousel';

import "./home.css";

export default function Home() {
  const [foodItems, setFoodItems] = useState([]);

  const dispatch = useDispatchCart();

  useEffect(() => {
    const loadFoodItems = async () => {
      let response = await fetch("http://localhost:3000/api/auth/foodData", {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        }
      });
      response = await response.json();
      setFoodItems(response[0]);
    }

    loadFoodItems();
  }, []);

  const handleAddToCart = (food) => {
    dispatch({ type: "ADD", payload: food });
  }

  return (
    <div>
      <Navbar />
      <div>
        <Carousel />
      </div>

      <div className="container1">
        <div className="row">
        <div className="col-md-4">
      <div className="card1">
        <img src={img1} className="card-img-top1" alt="Food1"  />
        <div className="card-body1">
          <h2 className="card-title">Burger</h2>
          <p className="card-text">Delicious burger - A mouth-watering combination of fresh ingredients and savory flavors</p>
          <p className="card-text"><h4>Price: $100</h4></p>

          <div className="form-group">
            <label htmlFor="burgerSize">Size:</label>
            <select className="form-control" id="burgerSize">
              <option>Small</option>
              <option>Medium</option>
              <option>Large</option>
            </select>
          </div>
          <div className="form-group">
            <label htmlFor="burgerQuantity">Quantity:</label>
            <input type="number" className="form-control" id="burgerQuantity" defaultValue="1" />
          </div>
          <button onClick={() => handleAddToCart(foodItems[0])} className="btn btn-primary">Add to Cart</button>
        </div>
      </div>
    </div>
    <div className="col-md-4">
      <div className="card2">
        <img src={img2} className="card-img-top2" alt="Food2" />
        <div className="card-body2">
          <h2 className="card-title">Garlic Sandwich</h2>
          <p className="card-text1">Savor the irresistible flavors of our garlic sandwich, where every bite is a culinary delight</p>
          <p className="card-text"><h4>Price: $101</h4></p>
          <div className="form-group">
            <label htmlFor="burgerSize">Size:</label>
            <select className="form-control" id="burgerSize">
              <option>Small</option>
              <option>Medium</option>
              <option>Large</option>
            </select>
          </div>
          <div className="form-group">
            <label htmlFor="burgerQuantity">Quantity:</label>
            <input type="number" className="form-control" id="burgerQuantity" defaultValue="1" />
          </div>
          <button onClick={() => handleAddToCart(foodItems[0])} className="btn btn-primary">Add to Cart</button>
        </div>
      </div>
    </div>
 
       
     
      </div>
   
      </div>
      <div className="container2">
        <div className="row">
        <div className="col-md-4">
      <div className="card3">
        <img src={img3} className="card-img-top3" alt="Food3" />
        <div className="card-body3">
          <h2 className="card-title">Panner Pizza</h2>
          <p className="card-text">Indulge in the exquisite taste of our paneer pizza, a true delight for pizza enthusiasts. Our handcrafted pizza is topped with generous chunks of succulent paneer marinated in a blend of aromatic spices, complemented by a medley of colorful bell peppers, onions, and fresh tomatoes.</p>
          <p className="card-text"><h4>Price: $150</h4></p>

          <div className="form-group">
            <label htmlFor="burgerSize">Size:</label>
            <select className="form-control" id="burgerSize">
              <option>Small</option>
              <option>Medium</option>
              <option>Large</option>
            </select>
          </div>
          <div className="form-group">
            <label htmlFor="burgerQuantity">Quantity:</label>
            <input type="number" className="form-control" id="burgerQuantity" defaultValue="1" />
          </div>
          <button onClick={() => handleAddToCart(foodItems[0])} className="btn btn-primary">Add to Cart</button>
        </div>
      </div>
    </div>
    <div className="col-md-4">
      <div className="card4">
        <img src={img4} className="card-img-top4" alt="Food4" />
        <div className="card-body4">
          <h2 className="card-title">Panner Tikka</h2>
          <p className="card-text2">Indulge in the exquisite flavors of Paneer Tikka, a classic Indian dish that tantalizes the senses. Made from cubes of paneer (Indian cottage cheese) marinated in a blend of yogurt and spices, Paneer Tikka is grilled to perfection, resulting in a smoky, charred aroma that is simply irresistible. Each bite of this delectable dish is a burst of flavors, with the tender paneer melting in your mouth, complemented by the subtle tanginess of the marinade and the earthy notes of the spices. Served hot and garnished with fresh cilantro and a squeeze of lemon</p>
          <p className="card-text"><h4>Price: $200</h4></p>
          <div className="form-group">
            <label htmlFor="burgerSize">Size:</label>
            <select className="form-control" id="burgerSize">
              <option>Small</option>
              <option>Medium</option>
              <option>Large</option>
            </select>
          </div>
          <div className="form-group">
            <label htmlFor="burgerQuantity">Quantity:</label>
            <input type="number" className="form-control" id="burgerQuantity" defaultValue="1" />
          </div>
          <button onClick={() => handleAddToCart(foodItems[0])} className="btn btn-primary">Add to Cart</button>
        </div>
      </div>
    </div>
 
    <div className="container2">
        <div className="row">
        <div className="col-md-4">
      <div className="card3">
        <img src={img5} className="card-img-top3" alt="Food3" />
        <div className="card-body3">
          <h5 className="card-title">Chilli Chicken</h5>
          <p className="card-text"> A tantalizing blend of tender chicken pieces marinated in a spicy sauce and stir-fried to perfection. Each bite is an explosion of flavors, with the heat of the chili balanced by the richness of the marinade. Served with a garnish of fresh green onions and bell peppers, this dish is a perfect balance of spicy and savory.</p>
          <p className="card-text"><h4>Price: $220</h4></p>

          <div className="form-group">
            <label htmlFor="burgerSize">Size:</label>
            <select className="form-control" id="burgerSize">
              <option>Half</option>
              <option>Full</option>
              
            </select>
          </div>
          <div className="form-group">
            <label htmlFor="burgerQuantity">Quantity:</label>
            <input type="number" className="form-control" id="burgerQuantity" defaultValue="1" />
          </div>
          <button onClick={() => handleAddToCart(foodItems[0])} className="btn btn-primary">Add to Cart</button>
        </div>
      </div>
    </div>
    <div className="col-md-4">
      <div className="card4">
        <img src={img6} className="card-img-top6" alt="Food6" />
        <div className="card-body6">
          <h5 className="card-title1">Hydrabadi Chicken Dum Briyani</h5>
          <p className="card-text">Indulge in the exquisite taste of our Hyderabadi chicken dum biryani, a culinary masterpiece that transports you to the heart of Hyderabad with every mouthful. Crafted with fragrant basmati rice layered with tender marinated chicken, aromatic spices, and fresh herbs, each spoonful is a symphony of flavors and aromas. Slow-cooked to perfection in traditional dum style, our biryani is infused with the essence of saffron, caramelized onions, and clarified butter, resulting in a dish that's rich, flavorful, and utterly irresistible.</p>
          <p className="card-text"><h4>Price: $200</h4></p>
          <div className="form-group">
            <label htmlFor="burgerSize">Size:</label>
            <select className="form-control" id="burgerSize">
              <option>250gm</option>
              <option>500gm</option>
              <option>1kg</option>
            </select>
          </div>
          <div className="form-group">
            <label htmlFor="burgerQuantity">Quantity:</label>
            <input type="number" className="form-control" id="burgerQuantity" defaultValue="1" />
          </div>
          <button onClick={() => handleAddToCart(foodItems[0])} className="btn btn-primary">Add to Cart</button>
        </div>
      </div>
    </div>
     </div>
      </div>
   </div>
      </div>
      <Footer />
    </div>
  );
}
