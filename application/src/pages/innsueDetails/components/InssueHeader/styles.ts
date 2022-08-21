import styled from "styled-components"

export const InssueHeaderContainer = styled.section`
    padding: 2rem;
    border-radius: 10px;
    margin-top: -5.25rem;
    margin-bottom: 2rem;
    background-color:  ${ ( {theme} ) => theme.colors["blue-700"]};

    nav{
        display: flex;
        justify-content: space-between;

        a{
            cursor: pointer;
            display: flex;
            align-items: center;
            column-gap: .5rem;

            font-size: .75rem;
            color: ${ ( {theme} ) => theme.colors.blueLight};
        }
    }

    h2{
        margin-top: 1.25rem;
        color: ${ ( {theme} ) => theme.colors.white};
    }

 

`
export const Status = styled.footer`
    display: grid;
    grid-template-columns: repeat(auto-fill, 130px);
    column-gap: 2rem;
    row-gap: 1rem;


    margin-top: .5rem;

    div{
        display: flex;
        align-items: center;
        column-gap: .5rem;

        span{
            width: max-content;
            color: ${( {theme} ) => theme.colors["gray-100"]};
        }

        svg{
            color: ${( {theme} ) => theme.colors["blue-300"]};
        }
    }
`
