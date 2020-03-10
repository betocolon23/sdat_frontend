import { FULL_UPDATE } from "../constants/action-types";

export function setRemoveItemModalOpen(open) {
    return {
        type: FULL_UPDATE,
        payload: {isRemoveItemModalOpen: open}
    }
}

export function setAppInstallModalOpen(open) {
    return {
        type: FULL_UPDATE,
        payload: {isAppInstallModalOpen: open}
    }
}

export function setSnackBarMessage(message, type) {
    return {
        type: FULL_UPDATE, 
        payload: {
            snackBarMessage: {  
                message: message, 
                type: type
            }
        }
    }
}

export function setDrawerOpen(payload) {
    return {
        type: FULL_UPDATE,
        payload: {isDrawerOpen: payload}
    }
}