import { createAction } from "redux-actions";

export const ProductActions = {
  GET_PRODUCT_LIST: "Get product List",
  PRODUCT_LIST_SUCCESS: "Product List Success",
  PRODUCT_LIST_FAILED: "Product List Failed",
};

export const requestProductList = createAction(ProductActions.GET_PRODUCT_LIST);
export const productListSuccess = createAction(ProductActions.PRODUCT_LIST_SUCCESS);
export const productListFailed = createAction(ProductActions.PRODUCT_LIST_FAILED);
