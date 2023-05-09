import { Link } from "react-router-dom";
import PropTypes from "prop-types";

function MovieDetail({ background_image, download_count, title, rating, url }) {
  return (
    <div>
      <img src={background_image} alt={title} />
      <h3> rating = {rating} </h3>
      <h5>download_count = {download_count} </h5>
      <h5>
        {" "}
        <Link to={`${url}`}>url</Link>{" "}
      </h5>
    </div>
  );
}

MovieDetail.propTypes = {
  backgroud_image: PropTypes.string.isRequired,
  download_count: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  rating: PropTypes.number.isRequired,
  url: PropTypes.string.isRequired,
};

export default MovieDetail;
