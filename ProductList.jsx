import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addItem } from './CartSlice';
import CartItem from './CartItem';

const plantsArray = [
  {
    category: 'Air Purifying Plants',
    plants: [
      {
        name: 'Snake Plant',
        image: 'https://images.unsplash.com/photo-1509423350716-97f9360b4e09?q=80&w=600&auto=format&fit=crop',
        description: 'Produces oxygen at night and filters airborne toxins to improve indoor air quality.',
        cost: '$15'
      },
      {
        name: 'Spider Plant',
        image: 'https://images.unsplash.com/photo-1572688484438-313045677dd3?q=80&w=600&auto=format&fit=crop',
        description: 'Highly effective at removing formaldehyde and xylene from indoor environments.',
        cost: '$12'
      },
      {
        name: 'Peace Lily',
        image: 'https://images.unsplash.com/photo-1593691509543-c55fb32e7355?q=80&w=600&auto=format&fit=crop',
        description: 'Removes mold spores and toxins while producing graceful white spathe blossoms.',
        cost: '$18'
      },
      {
        name: 'Boston Fern',
        image: 'https://images.unsplash.com/photo-1596547609652-9cf5d8d76921?q=80&w=600&auto=format&fit=crop',
        description: 'Restores natural humidity and purifies air with lush feather-like cascading fronds.',
        cost: '$20'
      },
      {
        name: 'Rubber Plant',
        image: 'https://images.unsplash.com/photo-1512428813834-c702c7702b78?q=80&w=600&auto=format&fit=crop',
        description: 'Broad glossy leaves that efficiently absorb airborne pollutants and carbon dioxide.',
        cost: '$17'
      },
      {
        name: 'Aloe Vera',
        image: 'https://images.unsplash.com/photo-1567689265664-1c48de61db0b?q=80&w=600&auto=format&fit=crop',
        description: 'Purifies household air while providing natural soothing gel for skin and burns.',
        cost: '$14'
      }
    ]
  },
  {
    category: 'Aromatic Fragrant Plants',
    plants: [
      {
        name: 'Lavender',
        image: 'https://images.unsplash.com/photo-1528722828814-77b9b83aafb2?q=80&w=600&auto=format&fit=crop',
        description: 'Delivers a soothing, floral fragrance known to reduce anxiety and promote sleep.',
        cost: '$20'
      },
      {
        name: 'Jasmine',
        image: 'https://images.unsplash.com/photo-1592729961255-cc3a44635b3b?q=80&w=600&auto=format&fit=crop',
        description: 'Fills living spaces with an enchanting sweet aroma and starry white blossoms.',
        cost: '$18'
      },
      {
        name: 'Rosemary',
        image: 'https://images.unsplash.com/photo-1515586000433-45406d8e6662?q=80&w=600&auto=format&fit=crop',
        description: 'Invigorating herbal pine scent; doubles as a versatile and flavorful culinary herb.',
        cost: '$15'
      },
      {
        name: 'Mint',
        image: 'https://images.unsplash.com/photo-1608571423902-eed4a5ad8108?q=80&w=600&auto=format&fit=crop',
        description: 'Refreshing and energizing aroma, perfect for indoor garnishes and soothing teas.',
        cost: '$10'
      },
      {
        name: 'Lemon Balm',
        image: 'https://images.unsplash.com/photo-1514733670139-4d87a1941d55?q=80&w=600&auto=format&fit=crop',
        description: 'Crisp citrusy scent that naturally uplifts mood, repels pests, and relieves stress.',
        cost: '$14'
      },
      {
        name: 'Hyacinth',
        image: 'https://images.unsplash.com/photo-1525310072745-f49212b5ac6d?q=80&w=600&auto=format&fit=crop',
        description: 'Vibrant spring flowering spikes with a powerful, delightful floral perfume.',
        cost: '$22'
      }
    ]
  },
  {
    category: 'Low Maintenance Plants',
    plants: [
      {
        name: 'ZZ Plant',
        image: 'https://images.unsplash.com/photo-1632207691143-643e2a9a9361?q=80&w=600&auto=format&fit=crop',
        description: 'Indestructible houseplant that flourishes in low-light and drought conditions.',
        cost: '$25'
      },
      {
        name: 'Pothos',
        image: 'https://images.unsplash.com/photo-1614594975525-e45190c55d0b?q=80&w=600&auto=format&fit=crop',
        description: 'Fast-growing trailing vine that forgives neglected watering and low light.',
        cost: '$12'
      },
      {
        name: 'Cast Iron Plant',
        image: 'https://images.unsplash.com/photo-1597055181300-e3633a207519?q=80&w=600&auto=format&fit=crop',
        description: 'True to its name, endures deep shade, poor humidity, and erratic watering.',
        cost: '$19'
      },
      {
        name: 'Jade Plant',
        image: 'https://images.unsplash.com/photo-1509316975850-ff9c5deb0cd9?q=80&w=600&auto=format&fit=crop',
        description: 'Timeless succulent symbol of good fortune requiring minimal water and upkeep.',
        cost: '$16'
      },
      {
        name: 'Chinese Evergreen',
        image: 'https://images.unsplash.com/photo-1620127814166-52f742952e67?q=80&w=600&auto=format&fit=crop',
        description: 'Stunning variegated foliage that survives imperfect light and dry indoor air.',
        cost: '$21'
      },
      {
        name: 'Cactus',
        image: 'https://images.unsplash.com/photo-1508022713622-dfa22fb4324f?q=80&w=600&auto=format&fit=crop',
        description: 'Resilient desert beauty needing only sunny windowsill exposure and rare watering.',
        cost: '$9'
      }
    ]
  }
];

function ProductList({ onHomeClick }) {
  const dispatch = useDispatch();
  const cartItems = useSelector((state) => state.cart.items);
  const [showCart, setShowCart] = useState(false);

  // Calculate total number of items dynamically for the cart badge
  const totalQuantity = cartItems.reduce((sum, item) => sum + item.quantity, 0);

  // Check if an item is already added to cart to disable button
  const isInCart = (plantName) => cartItems.some((item) => item.name === plantName);

  const handleAddToCart = (plant) => {
    dispatch(addItem({ name: plant.name, image: plant.image, cost: plant.cost }));
  };

  return (
    <div>
      {/* Navbar appearing on both the Product Listing and Cart pages */}
      <nav className="navbar">
        <div className="brand" onClick={onHomeClick} style={{ cursor: 'pointer' }}>
          🌿 Paradise Nursery
        </div>
        <div className="nav-links">
          <a onClick={onHomeClick} className="nav-link">Home</a>
          <a onClick={() => setShowCart(false)} className="nav-link">Plants</a>
          <a className="cart-link" onClick={() => setShowCart(true)} aria-label="Cart">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256" height="34" width="34">
              <rect width="156" height="156" fill="none"></rect>
              <circle cx="80" cy="216" r="12" fill="#fff"></circle>
              <circle cx="184" cy="216" r="12" fill="#fff"></circle>
              <path
                d="M42.3,72H221.7l-26.4,92.4A15.9,15.9,0,0,1,179.9,176H84.1a15.9,15.9,0,0,1-15.4-11.6L32.5,37.8A8,8,0,0,0,24.8,32H8"
                fill="none" stroke="#fff" strokeLinecap="round" strokeLinejoin="round" strokeWidth="16"
              ></path>
            </svg>
            <span className="cart-count">{totalQuantity}</span>
          </a>
        </div>
      </nav>

      {/* Conditional rendering: Cart page or Product Listing page */}
      {showCart ? (
        <CartItem
          onContinueShopping={() => setShowCart(false)}
          onHomeClick={onHomeClick}
        />
      ) : (
        <div className="product-grid-section">
          {plantsArray.map((categoryGroup) => (
            <section key={categoryGroup.category}>
              <h2 className="category-title">{categoryGroup.category}</h2>
              <div className="product-grid">
                {categoryGroup.plants.map((plant) => (
                  <div className="product-card" key={plant.name}>
                    <img src={plant.image} alt={plant.name} className="product-thumbnail" />
                    <h3 className="product-name">{plant.name}</h3>
                    <p className="product-description">{plant.description}</p>
                    <div className="product-price">{plant.cost}</div>
                    <button
                      className="add-to-cart-btn"
                      disabled={isInCart(plant.name)}
                      onClick={() => handleAddToCart(plant)}
                    >
                      {isInCart(plant.name) ? 'Added to Cart' : 'Add to Cart'}
                    </button>
                  </div>
                ))}
              </div>
            </section>
          ))}
        </div>
      )}
    </div>
  );
}

export default ProductList;
