import { Dispatch } from "redux";
import streams from "../api/streams";
import { IStream } from "../components/streams/StreamCreate";
import history from "../history";
import { IStoreState } from "../store/interfaces";
import alertifyHelper from "../util/alertifyHelper";
import {
  ICreateStream,
  IDeleteStream,
  IEditStream,
  IFetchStream,
  IFetchStreams
} from "./interfaces";
import {
  CREATE_STREAM,
  DELETE_STREAM,
  EDIT_STREAM,
  FETCH_STREAM,
  FETCH_STREAMS
} from "./types";

export const createStream = (formValues: IStream) => async (
  dispatch: Dispatch<ICreateStream>,
  getState: () => IStoreState
) => {
  const { userId } = getState().auth;
  if (!userId) {
    alertifyHelper("error", "You need to be logged in to Create a Stream");
  } else {
    const streamDetails = { ...formValues, createdBy: getState().auth.userId };
    const response = await streams.post("/streams", streamDetails);
    dispatch({ type: CREATE_STREAM, payload: response.data });
    history.push("/");
  }
};

export const editStream = (formValues: IStream, streamId: number) => async (
  dispatch: Dispatch<IEditStream>
) => {
  const response = await streams.patch(`/streams/${streamId}`, formValues);
  dispatch({ type: EDIT_STREAM, payload: response.data });
  history.push("/");
};

export const fetchStreams = () => async (dispatch: Dispatch<IFetchStreams>) => {
  const response = await streams.get("/streams");
  dispatch({ type: FETCH_STREAMS, payload: response.data });
};

export const fetchStream = (streamId: number) => async (
  dispatch: Dispatch<IFetchStream>
) => {
  const response = await streams.get(`/streams/${streamId}`);
  dispatch({ type: FETCH_STREAM, payload: response.data });
};

export const deleteStream = (streamId: number) => async (
  dispatch: Dispatch<IDeleteStream>
) => {
  await streams.delete(`/streams/${streamId}`);
  dispatch({ type: DELETE_STREAM, payload: `${streamId}` });
};
