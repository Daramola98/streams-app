import { ISignIn, ISignOut } from "../actions/interfaces";
import { SIGN_IN, SIGN_OUT } from "../actions/types";
import { IAuthReducerState } from "./interfaces";

const initialState: IAuthReducerState = {
  isSignedIn: null,
  userId: null
};

export default (
  state: IAuthReducerState = initialState,
  action: ISignIn | ISignOut
) => {
  switch (action.type) {
    case SIGN_IN:
      return { ...state, isSignedIn: true, userId: action.payload };
    case SIGN_OUT:
      return { ...state, isSignedIn: false, userId: null };
  }
  return state;
};
