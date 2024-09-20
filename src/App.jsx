import { useState } from 'react';
import Card from './components/Card'

const items = [
  {
    title: "Margherita Pizza",
    desc: "Classic pizza topped with fresh mozzarella, basil, and tomatoes.",
    rating: 4.5,
    img: "https://images.unsplash.com/photo-1513104890138-7c749659a591?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cGl6emF8ZW58MHwwfDB8fHww",
    price: 290,
    type: "veg"
  },
  {
    title: "Chicken Tikka Masala",
    desc: "Tender chicken pieces marinated in spices and served in a creamy sauce.",
    rating: 3.7,
    img: "https://plus.unsplash.com/premium_photo-1673108852141-e8c3c22a4a22?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8Zm9vZHxlbnwwfDB8MHx8fDA%3D",
    price: 599,
    type: "non-veg"
  },
  {
    title: "Caesar Salad",
    desc: "Crisp romaine lettuce, croutons, and Caesar dressing.",
    rating: 4.9,
    img: "https://images.unsplash.com/photo-1521516807007-99d9695dbf8e?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fGJ1cmdlcnxlbnwwfDB8MHx8fDA%3D",
    price: 299,
    type: "veg"
  },
  {
    title: " Burger",
    desc: "Juicy beef patty topped with lettuce, tomato, and special sauce.",
    rating: 4.1,
    img: "https://plus.unsplash.com/premium_photo-1661387558893-63d24776cf38?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8YnVyZ2VyfGVufDB8MHwwfHx8MA%3D%3D",
    price: 149,
    type: "non-veg"
  },

];


function App() {

  return (
    <>
      <div className="flex gap-2 mt-12 justify-center  " >
        {
          items.map(item => <Card img={item.img} ratings={item.rating} title={item.title} desc={item.desc} type={item.type}
            price={item.price} />)
        }
      </div>


    </>
  )
}
export default App;



// let [showFreeDelivery, setShowFreeDelivery] = useState(false)
// const freeDelivery = (price) => {
//   if (price >= 250) setShowFreeDelivery(true)
//   else setShowFreeDelivery(false)
// }
