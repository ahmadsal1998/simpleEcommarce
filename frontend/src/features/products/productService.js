import axios from "axios";
import { base_url, config } from "../../utils/axiosConfig";


const getProducts = async (userData) => {
    const response = await axios.get(`${base_url}product`, userData);
    if(response.data){
        return response.data;
    }
};
const addWishlist = async (prodId) => {
  const response = await axios.put(`${base_url}product/wishlist`, { prodId }, config);
  if(response.data){
      return response.data;
  }
};

export const productService = {
  getProducts,
  addWishlist,
}