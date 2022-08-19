import Logo from '../../../../assets/logoGitBlog.svg'
import { HeaderContainer } from './styles'

export function Header(){
    return(
        <HeaderContainer>
            <img src={Logo}/>
            <h1>GITHUB BLOG</h1>
        </HeaderContainer>
    )
}