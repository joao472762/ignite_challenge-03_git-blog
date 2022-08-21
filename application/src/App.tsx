import { Router } from "./routes"
import { ThemeProvider } from "styled-components"
import { GlobalTheme } from "./global/styles/global"
import { defaultTheme } from "./global/styles/theme"

export function App(){
  return(
    <ThemeProvider theme={defaultTheme}>
      <Router/>
      <GlobalTheme/>
    </ThemeProvider> 
  ) 
}