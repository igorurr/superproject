import {
  LOGIN,
  LOGOUT
} from "../constants/user";
import {isEmpty} from "lodash-es";

export const userIsLogined  = (state) =>
  !isEmpty(state.user.data);

export const userLogining  = (state) =>
  state.fetchingData.fetching && state.fetchingData.requestType === LOGIN;

export const userLogouting  = (state) =>
  state.fetchingData.fetching && state.fetchingData.requestType === LOGOUT;