import React, { useEffect, useState } from "react";
import cards_data from "../netflix_react_assets/cards/Cards_data";
import { Link } from "react-router-dom";


const TitleCards = ({ title, category }) => {
  const [apiData, setApiData] = useState([]);

  const options = {
    method: "GET",
    headers: {
      accept: "application/json",
      Authorization:
        "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI5OGZhNjA5NWNmZjgxNDk1NGQzM2QzZWE5N2ZiYTNiMSIsIm5iZiI6MTc0MDE1ODMyNC45OSwic3ViIjoiNjdiOGI1NzQ0NDRkZDdmY2VmYmE5MWJmIiwic2NvcGVzIjpbImFwaV9yZWFkIl0sInZlcnNpb24iOjF9.1NoiyVhMGxFPPUzYiVl0VU5qJWVCR8W4PPaCmhmaw_8",
    },
  };

  useEffect(() => {
    fetch(
      `https://api.themoviedb.org/3/movie/${
        category ? category : "now_playing"
      }?language=en-US&page=1`,
      options
    )
      .then((response) => response.json())
      .then((response) => setApiData(response.results))
      .catch((err) => console.error(err));
  }, []);

  return (
    <div>
      <div className="title-cards mt-[50px] mb-[30px]"></div>
      <h2 className="mb-[8px] font-semibold text-xl">
        {title ? title : "Popular on Netflix"}
      </h2>

      <div className="flex w-full overflow-scroll invisible-scrollbar gap-5 ">
        <div className="flex w-fit ">
          {apiData.map((card, index) => {
            return (
              <Link to={`/player/${card.id}`} className="w-72" key={index}>
                <img
                  className="w-60 border cursor-pointer"
                  src={`https://image.tmdb.org/t/p/w500` + card.backdrop_path}
                  alt=""
                />
                <p>{card.original_title}</p>
              </Link>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default TitleCards;
