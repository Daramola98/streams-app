import _ from "lodash";
import { StreamActions } from "../actions/interfaces";
import {
  CREATE_STREAM,
  DELETE_STREAM,
  EDIT_STREAM,
  FETCH_STREAM,
  FETCH_STREAMS
} from "../actions/types";
import { IStreamReducer, IStreamReducerState } from "./interfaces";

const initialState: IStreamReducerState = {
  stream: {},
  streams: {}
};

export default (
  state: IStreamReducerState = initialState,
  action: StreamActions
): IStreamReducerState => {
  switch (action.type) {
    case CREATE_STREAM:
      return {
        ...state,
        streams: { ...state.streams, [action.payload.id]: action.payload }
      };
    case EDIT_STREAM:
      return {
        ...state,
        streams: { ...state.streams, [action.payload.id]: action.payload }
      };
    case FETCH_STREAM:
      return { ...state, stream: action.payload };
    case FETCH_STREAMS:
      const fetchedStreams: { [key: string]: IStreamReducer } = {};
      if (action.payload.length > 0) {
        action.payload.forEach((stream: IStreamReducer) => {
          fetchedStreams[stream.id] = stream;
        });
        return { ...state, stream: {}, streams: fetchedStreams };
      }
      return { ...state, streams: {} };
    case DELETE_STREAM:
      return _.omit(state, action.payload) as IStreamReducerState;
  }
  return state;
};
