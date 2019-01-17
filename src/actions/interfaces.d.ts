import { SIGN_IN, SIGN_OUT } from "./types";

export interface ISignIn {
    type: SIGN_IN;
    payload: string;
}

export interface ISignOut {
    type: SIGN_OUT;
}