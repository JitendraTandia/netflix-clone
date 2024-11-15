import React from "react";
import cards_data from "../netflix_react_assets/cards/Cards_data";

const TitleCards = () => {
  return (
    <div>
      <div className="title-cards mt-[50px] mb-[30px]"></div>
      <h2 className="mb-[8px]">Popular on Netflix</h2>

      <div className="flex w-full overflow-scroll invisible-scrollbar gap-5 ">
        <div className="flex w-fit ">
        {cards_data.map((card, index) => {
          return (
            <div className="w-72" key={index}>
              <img className="w-60 border  cursor-pointer"
                src={card.image}
                alt=""
              />
              <p>{card.name}</p>
            </div>
          );
        })}
        </div>
      </div>
    </div>
  );
};

export default TitleCards;
