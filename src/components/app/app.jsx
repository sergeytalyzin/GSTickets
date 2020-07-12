import React from "react";
import "./app.less";
import Filter from "../filter/filter";
import Ticket from "../ticket/ticket";


const App = () => {

  return (
    <main className="main">
      <section className="main__menu">
        <Filter/>
      </section>
      <section className="main__flight">
        <Ticket/>
      </section>
    </main>
  );
};


export default App;
