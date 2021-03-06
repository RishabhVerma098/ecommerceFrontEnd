import React, { useEffect } from "react";
import "./mainbox.scss";
import { useDispatch, useSelector } from "react-redux";
import { fetchTrendingGames } from "../../../../store/actions";
import WishListSVG from "../../resuables/wishlistsvg";
import { Link } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";
import Loading from "../../resuables/loading";
function MainBox() {
  const dispatch = useDispatch();
  const stateTrendingGames = useSelector((state) => state.trendingGamesReducer);

  useEffect(() => {
    dispatch(fetchTrendingGames());
    // eslint-disable-next-line react-hooks/exhaustive-deps
    AOS.init({
      duration: 800,
    });
    // AOS.refresh();
  }, []);

  return (
    <div className="main-box">
      <h1>Trending Now</h1>
      <div className="content">
        {stateTrendingGames ? (
          stateTrendingGames.map((i) => {
            return (
              <div className="card" key={i._id} data-aos="zoom-in-up">
                <Link to={`/product/${i._id}`}>
                  <div className="image">
                    <img src={i.photo} alt="cyberpunk"></img>
                  </div>
                </Link>

                <div className="info">
                  <Link to={`/product/${i._id}`}>
                    <h5>{i.title}</h5>
                  </Link>
                  <p>{i.description}</p>
                  <div className="pricing">
                    <div className="order-rating">
                      <button>$ {i.price}</button>
                      <p>{i.rating} ⭐</p>
                    </div>
                    <div className="cart-wish">
                      <div>
                        <WishListSVG productId={i._id} />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            );
          })
        ) : (
          <Loading />
        )}
      </div>
    </div>
  );
}

export default MainBox;
