import { IStream } from "../components/streams/StreamCreate";

export interface IStreamReducer {
    id: number;
    title: string;
    description: string;
    createdBy: string;
}
export interface IAuthReducerState {
  isSignedIn: boolean | null;
  userId: string | null;
}

export interface IStreamReducerState {
    streams: {
        [key: string]: IStreamReducer;
    } | {};
    stream: IStreamReducer | {};
}