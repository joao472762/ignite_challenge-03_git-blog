import { SearchForm } from "./components/SearchForm";
import { UserProfile } from "./components/UserProfile";


export function Home(){
    return(
        <div>
            <UserProfile/> 
            <SearchForm/>
        </div>
    )
}