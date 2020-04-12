import React from "react";
import Link from "next/link";

function MoviList({ movie }) {
  const { Poster, Title, Type, imdbID } = movie;
  return (
    <div className="card m-4 " style={{ width: "26%" }}>
      <Link className="p-4" href="/p/[id]" as={`/p/${imdbID}`}>
        <img
          src={
            Poster !== "N/A"
              ? Poster
              : "https://cdn.cwsplatform.com/assets/no-photo-available.png"
          }
          className="card-img-top"
          alt={Title}
        />
      </Link>
      <div className="card-body">
        <h5 className="card-title p-2">
          {Title} ({Type})
        </h5>
      </div>
      <style>{`
    .card{
      cursor: pointer;
    }
    `}</style>
    </div>
  );
}

export default MoviList;
