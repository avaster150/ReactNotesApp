export const ADD_NOTE = (payload) => {
  return {
    type: "ADD_NOTE",
    payload,
  };
};

export const DELETE_NOTE = (payload) => {
  return {
    type: "DELETE_NOTE",
    payload,
  };
};
