import { dark } from "../theme/dark"
import { light } from "../theme/light"
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

const Reducer = (state: any, action: any) => {
  switch (action.type) {
      case 'SET_LIGHT':
        toggleTheme
        return {
            ...state,
            posts: action.payload
        };
      case 'SET_DARK':
        return {
            ...state,
            posts: state.posts.concat(action.payload)
        };
      case 'SET_THEME':
        const theme = toggleTheme()
        return {
            ...state,
            theme: theme
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
