import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { closeMenu } from "../utils/appSlice";
import { useParams, useSearchParams } from "react-router-dom";

export const WatchPage = () => {
  const [searchParams] = useSearchParams();
  // console.log(searchParams.get("v"))
  let key = searchParams.get("v");
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(closeMenu());
  }, []);
  return (
    <div className="px-5">
      <iframe
        width="1000"
        height="500"
        src={`https://www.youtube.com/embed/${key}`}
        title="Exploring Bandra with Raghav Juyal | Tere Gully Mein Ep 79 | Curly Tales"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        referrerpolicy="strict-origin-when-cross-origin"
        allowFullscreen
      ></iframe>
    </div>
  );
};
