import { SearchForm } from "./components/SearchForm";
import { UserProfile } from "./components/UserProfile";
import { RepositoresContainer, Repository } from "./styles";


export function Home(){
    return(
        <div>
            <UserProfile/> 
            <SearchForm/>
            <RepositoresContainer>
                <Repository>
                    <div>
                        <strong>JavaScript data types and data structures</strong>
                        <time>   há 1 dia</time>
                    </div>

                    <p>
                        Programming languages all have built-in
                        data structures, but these often differ from one language to
                         another. This article attempts to list the built-in data structures available in 
                    </p>
                </Repository>
                <Repository>
                    <div>
                        <strong>JavaScript data types and data structures</strong>
                        <time>   há 1 dia</time>
                    </div>

                    <p>
                        Programming languages all have built-in
                        data structures, but these often differ from one language to
                         another. This article attempts to list the built-in data structures available in 
                    </p>
                </Repository>
                <Repository>
                    <div>
                        <strong>JavaScript data types and data structures</strong>
                        <time>   há 1 dia</time>
                    </div>

                    <p>
                        Programming languages all have built-in
                        data structures, but these often differ from one language to
                         another. This article attempts to list the built-in data structures available in 
                    </p>
                </Repository>
            </RepositoresContainer>
        </div>
    )
}