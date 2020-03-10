// import { FULL_UPDATE } from "../constants/action-types";
// import Auth from '../utils/Auth';
// import { updateOrgList, setOrganization } from "./organization";

// export function checkLogin(payload) {

//     var auth = new Auth();
//     var isLoggedIn = auth.loggedIn()
//     return function(dispatch) {
//         if (isLoggedIn) {
//             return Promise.all([
//                 dispatch({
//                     type: FULL_UPDATE,
//                     payload: {isAuthed: isLoggedIn}
//                 }),
//                 dispatch(updateOrgList())
//             ])
//         } 
//         return dispatch({
//             type: FULL_UPDATE,
//             payload: {isAuthed: isLoggedIn}
//         })
//     }
// }

// export function setOrganization(payload) {
//     return {
//         type: FULL_UPDATE,
//         payload: {selectedOrg: payload}
//     }
// }

// export function updateOrgList() {
//     return function(dispatch) {
//         return getOrgs().then(function(res) {
//             return dispatch({
//                 type: UPDATE_ORGS,
//                 payload: res.organizations      
//             });
//         })
//     }
// }