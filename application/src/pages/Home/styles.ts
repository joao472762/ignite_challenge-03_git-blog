import styled from "styled-components";

export const User = styled.section`
    display:  flex;
    column-gap: 2rem;

    margin-top: -5.375rem;
    padding: 2rem 2rem 2rem 2.5rem;
    border-radius: 8px;
    background-color: ${( {theme} ) => theme.colors["blue-700"]};

    img{
        width: 9.25rem;
        height: 9.25rem;
        border-radius: 8px;
    }

`
export const UserInformation = styled.div`

    header{
        display: flex;
        justify-content: space-between;
        color: ${( {theme} ) => theme.colors.white};

        a{
            color: ${( {theme} ) => theme.colors.blueLight };
            font-size: .75rem;

            strong{
                margin-right: .5rem;
            }
        }
    }
    p{
        margin-top: .5rem;
    }

`
export const UserFooter = styled.footer`
    display: flex;
    column-gap: 2.5rem;
    margin-top: 2.5rem;

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