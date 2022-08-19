import styled from "styled-components";

export  const RepositoresContainer = styled.main`
    display: grid;
    column-gap: 2rem;
    row-gap: 2rem;
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));

    margin-top: 3rem;

`

export const Repository = styled.section`
    padding: 2rem;
    margin-bottom: 2rem;
    border-radius: 10px;
    background-color:  ${ ( {theme} ) => theme.colors["blue-500"]};

    div{
        display: flex;
        column-gap: 2rem;
        row-gap: 1rem;
        justify-content: space-between;
        
        strong{
            max-width: 70%;
            color:  ${ ( {theme} ) => theme.colors.white};
            font-size: 1.25rem;
        }

        span{
         
            font-size: 0.875rem;
            color:  ${ ( {theme} ) => theme.colors["blue-100"]};
        }
    }

    p{
        margin-top: 1rem;
    }
`