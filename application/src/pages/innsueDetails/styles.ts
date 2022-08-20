import styled from "styled-components";

export const IssueIntrodution = styled.section`
    padding: 2rem;
    border-radius: 10px;
    margin-top: -5.25rem;
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
export const IssuesStatus = styled.footer`
    display: flex;
    column-gap: 2rem;
    row-gap: 1rem;

    margin-top: .5rem;

    div{
        display: flex;
        align-items: center;
        column-gap: .5rem;

        span{
            color: ${( {theme} ) => theme.colors["gray-100"]};
        }

        svg{
            color: ${( {theme} ) => theme.colors["blue-300"]};
        }
    }
`

export const IssueContent = styled.main`
    margin-top: 2.5rem;
    padding: 2rem;

    section{
        margin-top: 2.5rem  ;
        padding: 1rem;
        border-radius: 2px;
        background-color: ${ ( {theme} ) => theme.colors["blue-500"]};;
    }
`