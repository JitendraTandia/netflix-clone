import React, { useEffect, useState } from "react";
import back_arrow_icon from "../netflix_react_assets/back_arrow_icon.png";
import { useNavigate, useParams } from "react-router-dom";

const Player = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const [apiData, setApiData] = useState({
    name: "",
    key: "",
    published_at: "",
    typeof: "",
  });

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
      `https://api.themoviedb.org/3/movie/${id}/videos?language=en-US`,
      options
    )
      .then((res) => res.json())
      .then((res) => setApiData(res.results[0]))
      .catch((err) => console.error(err));
  }, []);

  return (
    <div className="h-[100vh] flex flex-col justify-center items-center">
      <img
        onClick={() => {
          navigate(-2);
        }}
        className="absolute top-[20px] left-[20px] w-[50px] cursor-pointer"
        src={back_arrow_icon}
        alt=""
      />
      <iframe
        className="rounded-lg "
        src={`https://www.youtube.com/embed/${apiData.key}`}
        title="trailer"
        frameborder="0"
        width={"70%"}
        height={"70%"}
        allowFullScreen
      ></iframe>
      <div
        className="flex items-center justify-between mt-4 text-lg font-semibold w-[68%]"
        id="player_info"
      >
        <p>{apiData.published_at.slice(0, 10)}</p>
        <p>{apiData.name}</p>
        <p>{apiData.typeof}</p>
      </div>
    </div>
  );
};

export default Player;
