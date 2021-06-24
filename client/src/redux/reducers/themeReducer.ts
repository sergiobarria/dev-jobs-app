import { ActionType } from '../action-types';
import { Action } from '../actions';

interface ThemeState {
  isDarkTheme: boolean;
}

const initialState = {
  isDarkTheme: false,
};

export const themeReducer = (
  state: ThemeState = initialState,
  action: Action
): ThemeState => {
  switch (action.type) {
    case ActionType.LIGHT_THEME:
      return { ...state, isDarkTheme: false };
    case ActionType.DARK_THEME:
      return { ...state, isDarkTheme: true };
    default:
      return state;
  }
};

export default themeReducer;
