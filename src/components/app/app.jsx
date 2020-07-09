import React from "react";
import "./app.less";
import Filter from "../filter/filter";
import Ticket from "../ticket/ticket";

const App = (props) => {
  const {handleClickInput,handleClickFilterType,data} = props;
  return (
    <main className="main">
      <section className="main__menu">
        <Filter
          handleClickInput = {handleClickInput}
          setFilterType={handleClickFilterType}
        />
      </section>
      <section className="main__flight">
        { data.map((it,i)=>{
          return  ( <Ticket flight={it} key={i}/>)
        })}
      </section>
    </main>
  );
};


export default App;
