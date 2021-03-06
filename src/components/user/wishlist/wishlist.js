import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import "./wishlist.scss";
import Card from "../../main/resuables/card";
import { fetchCartItem } from "../../../store/actions/cart";
import Loading from "../../main/resuables/loading";
function WishList() {
  const dispatch = useDispatch();
  const games = useSelector((state) => state.cartItemsReducer);
  useEffect(() => {
    dispatch(fetchCartItem(true));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return (
    <div className="wishlistCompo">
      <div className="workingArea">
        <div className="container">
          <div className="content" style={{ paddingBottom: "4rem" }}>
            {games ? (
              games.length !== 0 ? (
                games?.map((i) => {
                  return (
                    <Card
                      gameName={i.product.title}
                      imageName={i.product.photo}
                      price={i.product.price}
                      rating={i.product.rating}
                      key={i.id}
                      got={true}
                      productId={i.product._id}
                    />
                  );
                })
              ) : (
                <p style={{ color: "grey" }}>No Items to show</p>
              )
            ) : (
              <Loading />
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default WishList;
