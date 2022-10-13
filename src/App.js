import logo from "./logo.svg";
import "./App.css";
import Header from "./components/Layout/Header";
import react, { Fragment,useState } from "react";
import Meals from "./components/Meal/Meals";
import Cart from "./components/Cart/Cart";
import Cart_context_prov from "./components/Store/Cart_context_prov";

function App(props) {
  const [cart, setcart] = useState(false);
  const show=()=>{
    setcart(true);
  }
  const hide=()=>{
    setcart(false);
  }
  return (
    <Cart_context_prov>
     {cart && <Cart tohide={hide}/>}
      <Header onclick={show} />
      <main>
        <Meals />
      </main>
    </Cart_context_prov>
  );
}

export default App;
