import Layout from "../../components/Layout";

import fetch from "isomorphic-unfetch";

const Post = (props) => {
  return (
    <Layout>
      <div className="card mb-9">
        <div className="row no-gutters">
          <div className="col-md-4 p-4 ">
            <img
              src={
                props.show.Poster !== "N/A"
                  ? props.show.Poster
                  : "https://cdn.cwsplatform.com/assets/no-photo-available.png"
              }
              className="card-img"
              alt={props.show.Title}
              style={{ width: "100%" }}
            />
            <div className="row p-4">
              <div>
                <h5>Year :</h5>
              </div>
              <div className="col">
                <h5>{props.show.Year}</h5>
              </div>
            </div>
          </div>
          <div className="col-md-8">
            <div className="card-body p-4">
              <div className="row">
                <div>
                  <h5>Title :</h5>
                </div>
                <div className="col">
                  <h5>{props.show.Title}</h5>
                </div>
              </div>

              <div className="row">
                <div>
                  <h5>Director :</h5>
                </div>
                <div className="col">
                  <p>{props.show.Director}</p>
                </div>
              </div>
              <div className="row">
                <div>
                  <h5>Writer :</h5>
                </div>
                <div className="col">
                  <p>{props.show.Writer}</p>
                </div>
              </div>

              <div className="row">
                <div>
                  <h5>Actors :</h5>
                </div>
                <div className="col">
                  <p>{props.show.Actors}</p>
                </div>
              </div>

              <div className="row">
                <div>
                  <h5>Genre :</h5>
                </div>
                <div className="col">
                  <p>{props.show.Genre}</p>
                </div>
              </div>

              <div className="row">
                <div>
                  <h5>Language :</h5>
                </div>
                <div className="col">
                  <p>{props.show.Language}</p>
                </div>
              </div>

              <div className="row">
                <div>
                  <h5>Imdb Rating :</h5>
                </div>
                <div className="col">
                  <p>{props.show.imdbRating}</p>
                </div>
              </div>

              <div className="row">
                <div>
                  <h5>Imdb Votes :</h5>
                </div>
                <div className="col">
                  <p>{props.show.imdbVotes}</p>
                </div>
              </div>

              <div className="row">
                <div>
                  <h5>Production :</h5>
                </div>
                <div className="col">
                  <p>{props.show.Production}</p>
                </div>
              </div>
              <div className="row">
                <div>
                  <h5>Awards :</h5>
                </div>
                <div className="col">
                  <p>{props.show.Awards}</p>
                </div>
              </div>
              <div className="row">
                <div>
                  <h5>Rating : </h5>
                </div>
                <div className="px-2">
                  {props.show.Ratings.map((rating) => (
                    <div className="row pl-3">
                      <div>
                        <p>{rating.Source} :</p>
                      </div>
                      <div className="col">
                        <p>{rating.Value}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
        <style>
          {`
            .card {
              background-color: #343a40;
              color:#FFFFFF;
              border:none;
            }
            `}
        </style>
      </div>
    </Layout>
  );
};

Post.getInitialProps = async function (context) {
  const { id } = context.query;
  const res = await fetch(`http://www.omdbapi.com/?i=${id}&apikey=e6d61984`);
  const show = await res.json();

  console.log(`Fetched show: ${show.Title}`);

  return { show };
};

export default Post;
