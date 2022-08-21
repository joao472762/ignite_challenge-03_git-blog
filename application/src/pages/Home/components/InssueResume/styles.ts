import styled from "styled-components";

export const InssueContainer = styled.button`
    padding: 2rem;
    margin-bottom: 2rem;
    border-radius: 10px;
    cursor: pointer;
    text-align: left;
    background-color:  ${ ( {theme} ) => theme.colors["blue-500"]};
    transition:  .2s filter;


    &:hover{
        filter: opacity(.7);
    }

    strong{
        min-height: 4rem;
    }

    div{
        display: flex;
        column-gap: 2rem;
        row-gap: 1rem;
        justify-content: space-between;
        
        strong{
            
            color:  ${ ( {theme} ) => theme.colors.white};
            font-size: 1.25rem;
        }
        time{
            text-align: center;
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