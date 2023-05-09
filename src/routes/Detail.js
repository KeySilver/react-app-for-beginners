import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import MovieDetail from "../components/MovieDetail";

function Detail() {
  const [loading, setLoading] = useState(true);
  const [movieDetail, setMovieDetail] = useState({});
  const { id } = useParams();
  const getMovie = async () => {
    const json = await (
      await fetch(`https://yts.mx/api/v2/movie_details.json?movie_id=${id}`)
    ).json();
    setMovieDetail(json.data.movie);
    setLoading(false);
    console.log(movieDetail);
  };
  useEffect(() => {
    getMovie();
  }, []);
  return (
    <div>
      <div>
        <h1>Details</h1>
      </div>
      {loading ? (
        <h1>:Loading...</h1>
      ) : (
        <div>
          <MovieDetail
            background_image={movieDetail.background_image}
            download_count={movieDetail.download_count}
            rating={movieDetail.rating}
            url={movieDetail.url}
            title={movieDetail.title}
          />
        </div>
      )}
    </div>
  );
}

export default Detail;
