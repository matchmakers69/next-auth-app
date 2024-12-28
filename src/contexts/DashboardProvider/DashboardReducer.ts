import { DashboardContextAction, DashboardContextState } from "./defs";

export const reducer = (state: DashboardContextState, action: DashboardContextAction ) => {
    switch(action.type) {
        case "TOGGLE_SIDEBAR":
            return {
                ...state,
                isSideBarInView: action.payload
            }
            case "CLOSE_SIDEBAR":
                return {
                    ...state,
                    isSideBarInView: action.payload
                }
        default:
            return state
    }
}