import React from 'react'
import logo from './logo.svg';
import './App.css';
import Pricecard from './Pricecard';
import 'bootstrap/dist/css/bootstrap.css';



function App() {
  return (
    <>
    <section className="pricing py-5">
        <div className="container">
          <div className="row">
            {/* Free Tier */}
            <h1 className="text-center">Price card</h1>
     <Pricecard cardplan = "free" price = "0"></Pricecard>
     <Pricecard cardplan = "plus" price = "9"></Pricecard>
     <Pricecard cardplan = "pro" price = "49"></Pricecard>

      {/* Other sections go here */}
      </div>
        </div>
      </section>
    </>
  );
}

export default App;

