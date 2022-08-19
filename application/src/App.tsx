import { ThemeProvider } from "styled-components"
import { GlobalTheme } from "./global/styles/global"
import { defaultTheme } from "./global/styles/theme"
import { DefaultLayout } from "./layouts/DefaultLayout"
import { Router } from "./routes"

export function App(){
  return(
    <ThemeProvider theme={defaultTheme}>
      <Router/>
      <GlobalTheme/>
    </ThemeProvider> 
  ) 
}