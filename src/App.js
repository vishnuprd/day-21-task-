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
     <Pricecard cardplan = "free" price = "0" users = "single" storage ="50GB"></Pricecard>
     <Pricecard cardplan = "plus" price = "9" users = "5 users" storage ="50GB"></Pricecard>
     <Pricecard cardplan = "pro" price = "49" users = "unlimted users" storage ="50GB"></Pricecard>

      {/* Other sections go here */}
      </div>
        </div>
      </section>
    </>
  );
}

export default App;

