let initialState = {
  contactList: [],
  keyword: "",
};
function reducer(state = initialState, action) {
  const { type, payload } = action;
  if (type === "ADD_CONTACT") {
    return {
      ...state,
      contactList: [
        ...state.contactList,
        { name: payload.name, number: payload.number },
      ],
    };
  } else if (type === "USER_NAME") {
    return { ...state, keyword: payload.keyword };
  }

  return { ...state };
}

export default reducer;
