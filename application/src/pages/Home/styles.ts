import styled from "styled-components";

export const SearchFormContainer = styled.section`
    margin-top: 4.5rem;
    
    div{
        display: flex;
        justify-content: space-between;

        strong{
            color: ${ ( {theme} ) => theme.colors["gray-100"]};
        }
        span{
            color: ${ ( {theme} ) => theme.colors["blue-100"]};
        }
    }

    input{
        width: 100% ;
        padding: .75rem 1rem;

        margin-top: .75rem;
        border: 1px solid ${ ( {theme} ) => theme.colors["blue-400"]};
        background-color: ${ ( {theme} ) => theme.colors["blue-900"]};
        border-radius: 6px;

        &::placeholder{
            color:  ${ ( {theme} ) => theme.colors["gray-100"]};
        }
    }
`

export  const InssuesContainer = styled.main`
    display: grid;
    column-gap: 2rem;
    row-gap: 2rem;
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));

    margin-top: 3rem;

`

export const Inssue = styled.section`
    padding: 2rem;
    margin-bottom: 2rem;
    border-radius: 10px;
    cursor: pointer;
    background-color:  ${ ( {theme} ) => theme.colors["blue-500"]};

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