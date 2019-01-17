import { ISignIn, ISignOut } from "./interfaces";
import { SIGN_IN, SIGN_OUT } from "./types";

export const signIn = (userId: string): ISignIn => ({
  payload: userId,
  type: SIGN_IN
});

export const signOut = (): ISignOut => ({
  type: SIGN_OUT
});
