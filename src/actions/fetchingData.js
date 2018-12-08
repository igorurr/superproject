import {
  REQUEST,
  SUCCESS,
  ERROR
} from '../constants/fetchingData';

export const request = requestType =>({
  type: REQUEST,
  requestType: requestType
});

export const success = () =>({
  type: SUCCESS
});

export const error = () =>({
  type: ERROR
});