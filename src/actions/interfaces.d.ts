import { SIGN_IN, SIGN_OUT, CREATE_STREAM, FETCH_STREAMS, EDIT_STREAM, DELETE_STREAM, FETCH_STREAM } from "./types";

export interface ISignIn {
    type: SIGN_IN;
    payload: string;
}

export interface ISignOut {
    type: SIGN_OUT;
}

export interface ICreateStream {
    type: CREATE_STREAM;
    payload: any;
}

export interface IFetchStreams {
    type: FETCH_STREAMS;
    payload: any;
}
export interface IFetchStream {
    type: FETCH_STREAM;
    payload: any;
}

export interface IEditStream {
    type: EDIT_STREAM;
    payload: any;
}

export interface IDeleteStream {
    type: DELETE_STREAM;
    payload: string
}

export type StreamActions = ICreateStream | IFetchStream | IFetchStreams | IDeleteStream | IEditStream;