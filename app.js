
const products = [
  {
    id: 1,
    name: "Laptop",
    price: 1200,
    category: "Electronics",
    inStock: true,
    rating: 4.5,
  },
  {
    id: 2,
    name: "Smartphone",
    price: 800,
    category: "Electronics",
    inStock: true,
    rating: 4.7,
  },
  {
    id: 3,
    name: "Headphones",
    price: 150,
    category: "Accessories",
    inStock: false,
    rating: 4.3,
  },
  {
    id: 4,
    name: "Watch",
    price: 250,
    category: "Wearables",
    inStock: true,
    rating: 4.1,
  },
  {
    id: 5,
    name: "Keyboard",
    price: 100,
    category: "Peripherals",
    inStock: false,
    rating: 4.0,
  },
  {
    id: 6,
    name: "Tablet",
    price: 600,
    category: "Electronics",
    inStock: true,
    rating: 4.2,
  },
  {
    id: 7,
    name: "Smart TV",
    price: 900,
    category: "Home Appliances",
    inStock: true,
    rating: 4.8,
  },
  {
    id: 8,
    name: "Bluetooth Speaker",
    price: 180,
    category: "Accessories",
    inStock: false,
    rating: 4.6,
  },
  {
    id: 9,
    name: "Gaming Console",
    price: 500,
    category: "Gaming",
    inStock: true,
    rating: 4.9,
  },
  {
    id: 10,
    name: "Microwave Oven",
    price: 300,
    category: "Home Appliances",
    inStock: true,
    rating: 4.4,
  },
  {
    id: 11,
    name: "Camera",
    price: 1000,
    category: "Photography",
    inStock: false,
    rating: 4.7,
  },
  {
    id: 12,
    name: "Drone",
    price: 1500,
    category: "Photography",
    inStock: true,
    rating: 4.8,
  },
  {
    id: 13,
    name: "Air Conditioner",
    price: 1200,
    category: "Home Appliances",
    inStock: true,
    rating: 4.5,
  },
  {
    id: 14,
    name: "Vacuum Cleaner",
    price: 400,
    category: "Home Appliances",
    inStock: false,
    rating: 4.3,
  },
  {
    id: 15,
    name: "Wireless Mouse",
    price: 60,
    category: "Peripherals",
    inStock: true,
    rating: 4.6,
  },
  {
    id: 16,
    name: "Coffee Maker",
    price: 200,
    category: "Kitchen Appliances",
    inStock: true,
    rating: 4.2,
  },
  {
    id: 17,
    name: "Blender",
    price: 150,
    category: "Kitchen Appliances",
    inStock: false,
    rating: 4.0,
  },
  {
    id: 18,
    name: "Smart Light",
    price: 50,
    category: "Smart Home",
    inStock: true,
    rating: 4.5,
  },
  {
    id: 19,
    name: "Security Camera",
    price: 300,
    category: "Smart Home",
    inStock: true,
    rating: 4.7,
  },
  {
    id: 20,
    name: "Electric Kettle",
    price: 100,
    category: "Kitchen Appliances",
    inStock: false,
    rating: 4.1,
  },
  {
    id: 21,
    name: "Laptop Stand",
    price: 30,
    category: "Accessories",
    inStock: true,
    rating: 4.6,
  },
  {
    id: 22,
    name: "Smart Thermostat",
    price: 250,
    category: "Smart Home",
    inStock: false,
    rating: 4.8,
  },
  {
    id: 23,
    name: "Gaming Chair",
    price: 400,
    category: "Gaming",
    inStock: true,
    rating: 4.7,
  },
  {
    id: 24,
    name: "Fitness Tracker",
    price: 180,
    category: "Wearables",
    inStock: true,
    rating: 4.4,
  },
  {
    id: 25,
    name: "Monitor",
    price: 300,
    category: "Peripherals",
    inStock: false,
    rating: 4.3,
  },
  {
    id: 26,
    name: "External Hard Drive",
    price: 150,
    category: "Peripherals",
    inStock: true,
    rating: 4.5,
  },
  {
    id: 27,
    name: "Printer",
    price: 250,
    category: "Peripherals",
    inStock: true,
    rating: 4.2,
  },
  {
    id: 28,
    name: "Router",
    price: 120,
    category: "Networking",
    inStock: false,
    rating: 4.6,
  },
  {
    id: 29,
    name: "Smart Lock",
    price: 200,
    category: "Smart Home",
    inStock: true,
    rating: 4.9,
  },
  {
    id: 30,
    name: "Shower Speaker",
    price: 80,
    category: "Accessories",
    inStock: true,
    rating: 4.3,
  },
  {
    id: 31,
    name: "Dishwasher",
    price: 700,
    category: "Home Appliances",
    inStock: true,
    rating: 4.5,
  },
  {
    id: 32,
    name: "Refrigerator",
    price: 1200,
    category: "Home Appliances",
    inStock: false,
    rating: 4.7,
  },
  {
    id: 33,
    name: "Electric Toothbrush",
    price: 150,
    category: "Personal Care",
    inStock: true,
    rating: 4.4,
  },
  {
    id: 34,
    name: "Hair Dryer",
    price: 100,
    category: "Personal Care",
    inStock: false,
    rating: 4.2,
  },
  {
    id: 35,
    name: "Smart Doorbell",
    price: 220,
    category: "Smart Home",
    inStock: true,
    rating: 4.8,
  },
  {
    id: 36,
    name: "Streaming Device",
    price: 60,
    category: "Entertainment",
    inStock: true,
    rating: 4.6,
  },
  {
    id: 37,
    name: "Projector",
    price: 500,
    category: "Entertainment",
    inStock: false,
    rating: 4.9,
  },
  {
    id: 38,
    name: "Soundbar",
    price: 300,
    category: "Home Audio",
    inStock: true,
    rating: 4.5,
  },
  {
    id: 39,
    name: "Home Theater System",
    price: 1000,
    category: "Home Audio",
    inStock: true,
    rating: 4.7,
  },
  {
    id: 40,
    name: "Wireless Charger",
    price: 50,
    category: "Accessories",
    inStock: false,
    rating: 4.2,
  },
  {
    id: 41,
    name: "Electric Scooter",
    price: 900,
    category: "Transportation",
    inStock: true,
    rating: 4.8,
  },
  {
    id: 42,
    name: "Smart Plug",
    price: 30,
    category: "Smart Home",
    inStock: true,
    rating: 4.3,
  },
  {
    id: 43,
    name: "Robot Vacuum",
    price: 600,
    category: "Home Appliances",
    inStock: false,
    rating: 4.6,
  },
  {
    id: 44,
    name: "Portable Air Conditioner",
    price: 500,
    category: "Home Appliances",
    inStock: true,
    rating: 4.5,
  },
  {
    id: 45,
    name: "Rice Cooker",
    price: 100,
    category: "Kitchen Appliances",
    inStock: false,
    rating: 4.2,
  },
  {
    id: 46,
    name: "Pressure Cooker",
    price: 120,
    category: "Kitchen Appliances",
    inStock: true,
    rating: 4.7,
  },
  {
    id: 47,
    name: "Electric Grill",
    price: 250,
    category: "Kitchen Appliances",
    inStock: true,
    rating: 4.5,
  },
  {
    id: 48,
    name: "Slow Cooker",
    price: 90,
    category: "Kitchen Appliances",
    inStock: false,
    rating: 4.4,
  },
  {
    id: 49,
    name: "Water Purifier",
    price: 200,
    category: "Home Appliances",
    inStock: true,
    rating: 4.6,
  },
  {
    id: 50,
    name: "Dehumidifier",
    price: 350,
    category: "Home Appliances",
    inStock: true,
    rating: 4.7,
  },
  {
    id: 51,
    name: "Smart Scale",
    price: 80,
    category: "Fitness",
    inStock: true,
    rating: 4.3,
  },
  {
    id: 52,
    name: "Treadmill",
    price: 1200,
    category: "Fitness",
    inStock: false,
    rating: 4.5,
  },
  {
    id: 53,
    name: "Elliptical",
    price: 900,
    category: "Fitness",
    inStock: true,
    rating: 4.6,
  },
  {
    id: 54,
    name: "Dumbbell Set",
    price: 150,
    category: "Fitness",
    inStock: true,
    rating: 4.2,
  },
  {
    id: 55,
    name: "Resistance Bands",
    price: 40,
    category: "Fitness",
    inStock: false,
    rating: 4.8,
  },
  {
    id: 56,
    name: "Yoga Mat",
    price: 30,
    category: "Fitness",
    inStock: true,
    rating: 4.1,
  },
  {
    id: 57,
    name: "Jump Rope",
    price: 20,
    category: "Fitness",
    inStock: true,
    rating: 4.3,
  },
  {
    id: 58,
    name: "Foam Roller",
    price: 25,
    category: "Fitness",
    inStock: true,
    rating: 4.6,
  },
  {
    id: 59,
    name: "Massage Gun",
    price: 200,
    category: "Fitness",
    inStock: true,
    rating: 4.8,
  },
  {
    id: 60,
    name: "Bike Helmet",
    price: 60,
    category: "Sports",
    inStock: false,
    rating: 4.7,
  },
  {
    id: 61,
    name: "Electric Bike",
    price: 1500,
    category: "Transportation",
    inStock: true,
    rating: 4.9,
  },
  {
    id: 62,
    name: "Kayak",
    price: 700,
    category: "Sports",
    inStock: true,
    rating: 4.5,
  },
  {
    id: 63,
    name: "Tent",
    price: 300,
    category: "Outdoor",
    inStock: false,
    rating: 4.3,
  },
  {
    id: 64,
    name: "Sleeping Bag",
    price: 150,
    category: "Outdoor",
    inStock: true,
    rating: 4.4,
  },
  {
    id: 65,
    name: "Backpack",
    price: 100,
    category: "Outdoor",
    inStock: true,
    rating: 4.7,
  },
  {
    id: 66,
    name: "Water Bottle",
    price: 30,
    category: "Outdoor",
    inStock: false,
    rating: 4.6,
  },
  {
    id: 67,
    name: "Camping Stove",
    price: 120,
    category: "Outdoor",
    inStock: true,
    rating: 4.8,
  },
  {
    id: 68,
    name: "Portable Cooler",
    price: 200,
    category: "Outdoor",
    inStock: true,
    rating: 4.9,
  },
  {
    id: 69,
    name: "Fishing Rod",
    price: 80,
    category: "Sports",
    inStock: false,
    rating: 4.2,
  },
  {
    id: 70,
    name: "Hiking Boots",
    price: 180,
    category: "Outdoor",
    inStock: true,
    rating: 4.5,
  },
  {
    id: 71,
    name: "Ski Goggles",
    price: 120,
    category: "Sports",
    inStock: true,
    rating: 4.4,
  },
  {
    id: 72,
    name: "Snowboard",
    price: 500,
    category: "Sports",
    inStock: false,
    rating: 4.7,
  },
  {
    id: 73,
    name: "Golf Clubs",
    price: 900,
    category: "Sports",
    inStock: true,
    rating: 4.8,
  },
  {
    id: 74,
    name: "Basketball",
    price: 50,
    category: "Sports",
    inStock: true,
    rating: 4.3,
  },
  {
    id: 75,
    name: "Soccer Ball",
    price: 40,
    category: "Sports",
    inStock: true,
    rating: 4.5,
  },
  {
    id: 76,
    name: "Tennis Racket",
    price: 200,
    category: "Sports",
    inStock: false,
    rating: 4.6,
  },
  {
    id: 77,
    name: "Badminton Set",
    price: 100,
    category: "Sports",
    inStock: true,
    rating: 4.2,
  },
  {
    id: 78,
    name: "Ping Pong Table",
    price: 400,
    category: "Sports",
    inStock: true,
    rating: 4.8,
  },
  {
    id: 79,
    name: "Baseball Bat",
    price: 120,
    category: "Sports",
    inStock: false,
    rating: 4.7,
  },
  {
    id: 80,
    name: "Cricket Bat",
    price: 150,
    category: "Sports",
    inStock: true,
    rating: 4.6,
  },
  {
    id: 81,
    name: "Bowling Ball",
    price: 180,
    category: "Sports",
    inStock: true,
    rating: 4.5,
  },
  {
    id: 82,
    name: "Skateboard",
    price: 100,
    category: "Sports",
    inStock: false,
    rating: 4.3,
  },
  {
    id: 83,
    name: "Surfboard",
    price: 600,
    category: "Sports",
    inStock: true,
    rating: 4.9,
  },
  {
    id: 84,
    name: "Paddleboard",
    price: 700,
     category: "Outdoor",
      inStock: false, 
      rating: 4.7,
  },
  {
    id: 85,
    name: "Swim Goggles",
    price: 40,
     category: "Sports",
      inStock: true, 
      rating: 4.6,
  },
  {
    id: 86,
    name: "Life Jacket",
    price: 100, 
    category: "Outdoor",
     inStock: true,
      rating: 4.5,
  },
  {
    id: 87,
    name: "Diving Mask",
    price: 80, 
    category: "Outdoor",
     inStock: false,
      rating: 4.4,
  },
  {
    id: 88,
    name: "Snorkel",
    price: 50,
     category: "Outdoor",
      inStock: true,
       rating: 4.8,
  },
  {
    id: 89,
    name: "Wetsuit",
    price: 250,
     category: "Sports",
      inStock: true, 
      rating: 4.7,
  },
  {
    id: 90,
    name: "Climbing Shoes",
    price: 150, 
    category: "Outdoor", 
    inStock: false,
     rating: 4.5,
  },
  {
    id: 91,
    name: "Climbing Rope",
    price: 200,
    category: "Outdoor",
    inStock: true,
    rating: 4.8,
  },
  {
    id: 92,
    name: "Canoe", price: 800,
    category: "Outdoor",
    inStock: true,
    rating: 4.9,
  },
  {
    id: 93,
    name: "Horse Saddle"
    , price: 600,
    category: "Sports",
    inStock: true,
    rating: 4.7,
  },
  {
    id: 94,
    name: "Drone Camera"
    , price: 1000,
    category: "Photography",
    inStock: true,
    rating: 4.6,
  },
  {
    id: 95,
    name: "DSLR Camera",
    price: 1200,
    category: "Photography",
    inStock: false,
    rating: 4.8,
  },
  {
    id: 96,
    name: "Tripod",
    price: 150,
    category: "Photography",
    inStock: true,
    rating: 4.7,
  },
  {
    id: 97,
    name: "Camera Lens",
    price: 800,
    category: "Photography",
    inStock: true,
    rating: 4.5,
  },
  {
    id: 98,
    name: "Studio Light",
    price: 300,
    category: "Photography",
    inStock: false,
    rating: 4.9,
  },
  {
    id: 99,
    name: "Flash",
    price: 200,
    category: "Photography",
    inStock: true,
    rating: 4.6,
  },
  {
    id: 100,
    name: "Memory Card",
    price: 60,
    category: "Photography",
    inStock: true,
    rating: 4.8,
  }
];

const div = document.querySelector(".container");

function renderItems (products){
  div.innerHTML ="";

  products.map(function(items){
   return div.innerHTML += `
         <div class="card">
               <h2> Id :${items.id}</h2> 
                <h2> Name :${items.name}</h2> 
                <h2> Category :${items.category}</h2> 
                <h3> Price :${items.price}</h3 > 
                <h3> InStock :${items.inStock}</h3> 
                <h3> Rating :${items.rating}</h3> 
         <button id="btn" onclick="addToCart()"><B>Add To Cart</B></button>
             </div>
         `
  })
  
}
renderItems(products)



function Filteredvalue(button){
  const selectedCategory = button.innerHTML;
  const filterProducts =products.filter(items => items.category ===selectedCategory)
  console.log(filterProducts);
  
  renderItems(filterProducts)
}