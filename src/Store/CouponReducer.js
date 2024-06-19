import { FETCH_COUPONS_SUCCESS } from '../Store/CouponAction';

const initialState = {
  coupons: [],
};

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_COUPONS_SUCCESS:
      return {
        ...state,
        coupons: action.payload,
      };
    default:
      return state;
  }
};

export default rootReducer;
