import { FULL_UPDATE } from "../constants/action-types";

const initialState = {
  isAppInstallModalOpen: false,
  isRemoveItemModalOpen: {show: false, message: null, onYes: function() {}},
  snackBarMessage: "",
  organizations: [],
  
  isDrawerOpen: false,
  users: []
};

function rootReducer(state = initialState, action) {
  if (action.type === FULL_UPDATE) {
    return Object.assign({}, state, action.payload);
  }
  
  return state;
}

export default rootReducer;