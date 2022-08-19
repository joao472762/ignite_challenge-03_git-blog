import styled from "styled-components";
import Cover from '../../../../assets/Cover.svg'

export const HeaderContainer = styled.header`
    display: flex;
    align-items: center;
    flex-direction: column;
    gap: 1.40rem;
    padding-top: 4rem;
    height: 18.5rem;


    background-position: center center;
    background-size: cover;
    background-repeat: no-repeat;
 
    background-image: url(${Cover});



    h1{
        font: 400 1.5rem ${( {theme} ) => theme.fonts.Coda};
        color: ${( {theme} ) => theme.colors.blueLight};
    }
`