import { createGlobalStyle } from "styled-components";

export const GlobalTheme = createGlobalStyle`
    *{
        margin:  0;
        padding: 0;
        border: none;
        box-sizing: border-box;

    }

    *:focus{
        outline:  none;
        box-shadow: 0px 0px 0px 2px ${( {theme} ) => theme.colors["blue-500"]};
    }

    body{
        background-color: ${( {theme} ) => theme.colors["blue-800"]};;
    }

    body,input,button{
        font: 400 1rem ${( {theme} ) => theme.fonts.Nunito};
        color: ${( {theme} ) => theme.colors["gray-300"]};;

    }

`