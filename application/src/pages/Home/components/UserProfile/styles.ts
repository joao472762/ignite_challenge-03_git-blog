import styled from "styled-components";

export const UserProfileContainer = styled.section`
    display:  flex;
    align-items: center;
    column-gap: 2rem;
    row-gap: 2rem;

    margin-top: -5.375rem;
    padding: 2rem 2rem 2rem 2.5rem;
    border-radius: 8px;
    background-color: ${( {theme} ) => theme.colors["blue-700"]};

    @media  (max-width: 588px){
        flex-direction: column;
    
    }


`
export const Avatar = styled.img`
    width: 9.25rem;
    height: 9.25rem;
    border-radius: 8px;
`
export const UserProfileContent = styled.div`
    width: 100%;

  

    header{
        display: flex;
       
        justify-content: space-between;
        align-items: center;
        color: ${( {theme} ) => theme.colors.white};
      

        a{
            line-height: 0px;
            text-align: right;
            min-width: 120px;
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
    display: grid; 
    grid-template-columns: repeat(auto-fill,125px);
    
    margin-top: 2.5rem;

    div{
        width: max-content;
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