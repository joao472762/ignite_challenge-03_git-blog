import { HeaderContainer } from './styles'
import Logo from '../../../../assets/logoGitBlog.svg'

export function Header(){
    return(
        <HeaderContainer>
            <img src={Logo}/>
            <h1>GITHUB BLOG</h1>
        </HeaderContainer>
    )
}