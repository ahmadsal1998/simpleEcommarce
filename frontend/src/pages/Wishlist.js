import React, { useEffect, useState } from "react";
import BreadCrumb from "../components/BreadCrumb";
import Meta from "../components/Meta";
import Container from "../components/Container";
import { useDispatch, useSelector } from "react-redux";
import { getUserProductWishlist } from "../features/user/userSlice";
import { addToWishlist } from "../features/products/productSlice";

const Wishlist = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    getWishlistFromDb();
  }, []);
  const getWishlistFromDb = () => {
    dispatch(getUserProductWishlist());
  };
  const wishlistState = useSelector((state) => state.auth.wishlist);
  const removeFromWishlist = (id) => {
    dispatch(addToWishlist(id));
    setTimeout(() => {
      dispatch(getUserProductWishlist());
    }, 300)
  }
  return (
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
  );
};

export default Wishlist;
