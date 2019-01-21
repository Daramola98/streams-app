import { IAuthReducerState, IStreamReducerState } from "../reducers/interfaces";

export interface IStoreState {
    auth: IAuthReducerState;
    streamReducer: IStreamReducerState;
}