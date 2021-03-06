import React, { useEffect } from "react";
import "./productpage.scss";
import Navbar from "../main/navbar/navbar";
import Background from "../main/background/background";
import VideoShowCase from "./videoshowcase/videoshowcase";
import Details from "./details/details";
import { useDispatch, useSelector } from "react-redux";
import { fetchSingleProduct } from "../../store/actions/index";
import SimpleReactLightbox from "simple-react-lightbox";
import Loading from "../main/resuables/loading";
function ProductPage(props) {
  const dispatch = useDispatch();
  const game = useSelector((state) => state.singleGameReducer);

  const id = props.match.params.id.toString();

  useEffect(() => {
    dispatch(fetchSingleProduct(id));
  }, []);

  const renderScreen = () => {
    if (game) {
      return (
        <div className="productPage">
          <VideoShowCase game={game} />
          <Details game={game} />
        </div>
      );
    } else {
      return (
        <div className="productPage">
          <Loading />
        </div>
      );
    }
  };

  return (
    <React.Fragment>
      <SimpleReactLightbox>
        <div className="imports">
          <Navbar />
          <Background image={"lounew"} bgColor={"#1F2227"} />
        </div>
        <div className="mobile-imports">
          <Navbar color={"#1F2227"} />
        </div>
        {renderScreen()}
      </SimpleReactLightbox>
    </React.Fragment>
  );
}
export default ProductPage;
