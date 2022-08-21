import axios from "axios";
import { useEffect, useState, ChangeEvent,} from "react";
import { InssueResume } from "./components/InssueResume";

import { UserProfile } from "./components/UserProfile";
import { InssuesContainer, SearchFormContainer } from "./styles";


interface Inssues {
    body: string
    title: string,
    updated_at: string,
    number: number
}

export function Home(){

  
    const [query,setQuery] = useState('')
    const [inssues, setInssues] =  useState<Inssues[]>([])

    async function SearchInssues(){
        const inssuesUrl = 'https://api.github.com/repos/joao472762/ignite_react_native_dt-money-recap/issues'
        const response  = await axios.get(inssuesUrl)
        setInssues(response.data)
    }

    useEffect(() => {
        SearchInssues()
    }, [])

    function handleChangeQuery(event: ChangeEvent<HTMLInputElement>){
        setQuery(() => event.target.value)
    }

   
    const issuesFiltred = inssues.filter(( {title} ) => title.includes(query))

    return(
        <div>
            <UserProfile/>
            
            <SearchFormContainer>
                <div>
                    <strong>Publicações</strong>
                    <span>{issuesFiltred.length} publicações</span>
                </div>
                
                <input 
                    type="text" 
                    placeholder = "Buscar conteúdo" 
                    onChange= {handleChangeQuery} 
                />
             </SearchFormContainer>

            <InssuesContainer>
                {
                    issuesFiltred.map(( inssue ) => (
                        <InssueResume
                            key={inssue.number}
                            id ={inssue.number}
                            body={inssue.body}
                            title={inssue.title}
                            updated_at = {inssue.updated_at}
                        />
                    ))
                }
            </InssuesContainer>
        </div>
    )
}