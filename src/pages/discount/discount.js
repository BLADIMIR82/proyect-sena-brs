import "./discount.css";
import { DISCOUNT } from "./data-discount";
import { GameBuy } from "../../components/game-buy";

export const Discount = (props) => {
  window.scrollTo({ top: 0, behavior: "smooth" });

  return (
    <div className="page-discount">
        <h1> SALES!!!</h1>
        {DISCOUNT.map((item)=>
      <div key={item.id} class="card text-light  mb-3">
        <div>
        <img src={item.image}  alt="image"/>
        <div className="container-card-title">
          <h2 className="card-title"> {item.discount} Offer</h2>
        </div>
        </div>
        <div class="">
           <h4>
           {item.title}
            </h4>
            </div>
          <h4 class=""> {item.price} USD</h4>
        <div className="buttom-buy">
          <GameBuy game={item} />
       </div>
      </div>)}
    </div>
  );
};
