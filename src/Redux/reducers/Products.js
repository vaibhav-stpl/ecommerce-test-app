import { handleActions } from "redux-actions";
import { ProductActions } from "../actions";

const initiateState = {
  data: [],
  isLoadingProduct: false,
};
export const productReducer = handleActions(
  {
    [ProductActions.GET_PRODUCT_LIST]: (state, { payload }) => ({
      ...state,
      isLoadingProduct: true,
    }),
    [ProductActions.PRODUCT_LIST_SUCCESS]: (state, { payload }) => ({
      ...state,
      data: payload,
      isLoadingProduct: false,
    }),
    [ProductActions.PRODUCT_LIST_FAILED]: (state) => ({
      ...state,
      data: [],
      isLoadingProduct: false,
    }),
  },
  initiateState
);
