import { SubscriptionsAction, SubscriptionsStateInitial } from "./defs";

export const subscriptionsReducer = (
  state: SubscriptionsStateInitial,
  action: SubscriptionsAction,
) => {
  switch (action.type) {
    case "SET_STEP":
      return {
        ...state,
        currentStep: action.payload,
      };
    case "SET_GENERAL_INFORMATION":
      return {
        ...state,
        subscriptionsGeneralInformation: action.payload,
      };
    case "SET_EXPENSE_INFORMATION":
      return {
        ...state,
        expenseInformation: action.payload,
      };
    default:
      return state;
  }
};
