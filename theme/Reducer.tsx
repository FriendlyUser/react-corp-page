import { dark } from "./dark"
import { light } from "./light"
import {
  loadTheme
} from "office-ui-fabric-react"

let currentTheme = dark
loadTheme(currentTheme)

const toggleTheme = () => {
  currentTheme = currentTheme === light ? dark : light;
  loadTheme(currentTheme)
  return currentTheme
}

const setTheme = (isDark: Boolean) => {
  if (isDark) {
    currentTheme = dark
  } else {
    currentTheme = light
  }
  loadTheme(currentTheme)
  return currentTheme
}

const Reducer = (state: any, action: any) => {
  let newTheme = dark
  switch (action.type) {
      case 'SET_LIGHT':
        return {
            ...state,
            theme: newTheme
        };
      case 'SET_DARK':
        newTheme = setTheme(true)
        return {
            ...state,
            theme: newTheme
        }
      case 'SET_THEME':
        newTheme = toggleTheme()
        return {
            ...state,
            theme: newTheme
        };
      case 'SET_ERROR':
          return {
              ...state,
              error: action.payload
          };
      default:
          return state;
  }
};

export default Reducer
