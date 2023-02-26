import { useState } from "react";
import CartWrapper from "./components/cart/CartWrapper";
import ProductWrapper from "./components/home/ProductWrapper";
import Navbar from "./components/nav/Navbar";

function App() {
  const [openCartPage, setOpenCartPage] = useState(false);
  return (
    <div>
      {/* <!-- Navbar --> */}
      <Navbar setOpenCartPage={setOpenCartPage} />
      {/* <!-- Navbar ends --> */}

      {/* <!-- Main section --> */}
      <main className="py-16">
        {!openCartPage ? <ProductWrapper /> : <CartWrapper />}
      </main>
    </div>
  );
}

export default App;
