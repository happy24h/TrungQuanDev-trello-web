import { deepOrange, orange, teal, cyan } from '@mui/material/colors'
import { experimental_extendTheme as extendTheme } from '@mui/material/styles'

const theme = extendTheme({
  trello: {
    appBarHeight: '58px',
    boardBarHeight: '60px'
  },
  colorSchemes: {
    light: {
      palette: {
        primary: teal,
        secondary: deepOrange
      },
      spacing: (factor) => `${0.25 * factor}rem` // (Bootstrap strategy)
    },
    dark: {
      palette: {
        primary: cyan,
        secondary: orange
      },
      spacing: (factor) => `${0.25 * factor}rem` // (Bootstrap strategy)
    }
  }
  // ...other properties
})
export default theme
