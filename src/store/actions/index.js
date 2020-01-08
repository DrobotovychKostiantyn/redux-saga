export const actionTypes = {
  AGE_UP: 'AGE_UP',
  AGE_UP_ASYNC: 'AGE_UP_ASYNC',
  AGE_DOWN: 'AGE_DOWN',
  AGE_DOWN_ASYNC: 'AGE_DOWN_ASYNC',
  FETCH_PLACEHOLDER_REQUEST: 'FETCH_PLACEHOLDER_REQUEST',
  FETCH_PLACEHOLDER_SUCCEEDED: 'FETCH_PLACEHOLDER_SUCCEEDED',
  FETCH_PLACEHOLDER_FAILED: 'FETCH_PLACEHOLDER_FAILED'
};

export const ageUp = (payload) => ({
  type: actionTypes.AGE_UP,
  payload
});

export const ageDown = (payload) => ({
  type: actionTypes.AGE_DOWN,
  payload
});

export const requestPlaceholder = () => ({
  type: actionTypes.FETCH_PLACEHOLDER_REQUEST,
});

export const successPlaceholder = (payload) => ({
  type: actionTypes.FETCH_PLACEHOLDER_SUCCEEDED,
  payload
});

export const errorPlaceholder = () => ({
  type: actionTypes.FETCH_PLACEHOLDER_FAILED,
});

