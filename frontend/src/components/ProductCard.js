import React from "react";
import ReactStars from "react-rating-stars-component";
import { Link, useLocation } from "react-router-dom";
import wish from "../images/wish.svg";
import watch from "../images/watch.jpg";
import speaker from "../images/speaker.jpg";
import prodcompare from "../images/prodcompare.svg";
import view from "../images/view.svg";
import addcart from "../images/add-cart.svg";
import { useDispatch, useSelector } from "react-redux";
import { addToWishlist } from "../features/products/productSlice";

const ProductCard = (props) => {
  const { grid, data } = props;
  const dispatch = useDispatch();

  console.log(data);
  let location = useLocation();

  const addToWish = (id) => {
    alert(id);
    dispatch(addToWishlist(id));
  };
  return (
    <>
      {data?.map((item, index) => {
        return (
          <div
            key={index}
            className={` ${
              location.pathname == "/product" ? `gr-${grid}` : "col-3"
            } `}
          >
            <Link
              /* to={`${
      location.pathname == "/"
        ? "/product/:id"
        : location.pathname == "product/:id"
        ? "/product/:id"
        : ":id"
    }`}*/
              className="product-card position-relative"
            >
              <div className="wishlist-icon position-absolute">
                <button className="border-0 bg-transparent">
                  <img
                    onClick={(e) => {
                      addToWish(item?._id);
                    }}
                      src={wish}
                      alt="wishlist"
                  />
                </button>
              </div>
              <div className="product-image">
                <img
                  src={item?.images[0].url}
                  className="img-fluid mx-auth"
                  alt="product img"
                  width={160}
                />
                <img
                  src={speaker}
                  className="img-fluid mx-auth"
                  alt="product img"
                  width={160}
                />
              </div>
              <div className="product-details">
                <h6 className="brand">{item?.brand}</h6>
                <h5 className="product-title">{data[item]?.title}</h5>
                <ReactStars
                  count={5}
                  size={24}
                  value={item?.totalrating.toString()}
                  edit={false}
                  activeColor="#ffa700"
                />
                <p
                  className={`description ${
                    grid === 12 ? "d-block" : "d-none"
                  }`}
                  dangerouslySetInnerHTML={{ __html: item?.description }}
                ></p>
                <p className="price">$ {data[item]?.price}</p>
              </div>

              <div className="action-bar position-absolute">
                <div className="d-flex flex-column gap-15">
                  <button className="border-0 bg-transparent">
                    <img src={prodcompare} alt="compare" />
                  </button>
                  <button className="border-0 bg-transparent">
                    <img src={view} alt="view" />
                  </button>
                  <button className="border-0 bg-transparent">
                    <img src={addcart} alt="addcart" />
                  </button>
                </div>
              </div>
            </Link>
          </div>
        );
      })}
    </>
  );
};

export default ProductCard;

/*


    <>
      <Meta title={"Wishlist"} />
      <BreadCrumb title="Wishlist" />
      <div className="wishlist-wrapper home-wrapper-2 py-5">
        <div className="container-xxl">
          <div className="row">
            <div className="col-3">
              <div className="wishlist-card position-relative">
                <img
                src="images/cross.svg"
                alt="cross"
                className="position-absolute cross img-fluid"
                />
                <div className="wishlist-card-image">
                    <img
                    src="images/watch.jpg"
                    className="img-fluid w-100"
                    alt="watch"
                     />
                </div>
                <div className="py-3 px-3">
                    <h5 className="title">Honor 1 GB RAM 8 GB ROM 7Inch</h5>
                    <h6 className="price">$ 100</h6>
                </div>
              </div>
            </div>
            <div className="col-3">
              <div className="wishlist-card position-relative">
                <img
                src="images/cross.svg"
                alt="cross"
                className="position-absolute cross img-fluid"
                />
                <div className="wishlist-card-image">
                    <img
                    src="images/watch.jpg"
                    className="img-fluid w-100"
                    alt="watch"
                     />
                </div>
                <div className="py-3 px-3">
                    <h5 className="title">Honor 1 GB RAM 8 GB ROM 7Inch</h5>
                    <h6 className="price">$ 100</h6>
                </div>
              </div>
            </div>
            <div className="col-3">
              <div className="wishlist-card position-relative">
                <img
                src="images/cross.svg"
                alt="cross"
                className="position-absolute cross img-fluid"
                />
                <div className="wishlist-card-image">
                    <img
                    src="images/watch.jpg"
                    className="img-fluid w-100"
                    alt="watch"
                     />
                </div>
                <div className="py-3 px-3">
                    <h5 className="title">Honor 1 GB RAM 8 GB ROM 7Inch</h5>
                    <h6 className="price">$ 100</h6>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>

*/
