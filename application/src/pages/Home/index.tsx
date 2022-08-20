import { useEffect, useState, ChangeEvent, InputHTMLAttributes} from "react";
import { api } from "../../libs/axios";
import { SearchForm } from "./components/SearchForm";
import { UserProfile } from "./components/UserProfile";
import { RepositoresContainer, Repository, SearchFormContainer } from "./styles";
import {formatDistanceToNow} from 'date-fns'
import ptBR from "date-fns/esm/locale/pt-BR/index.js";
import axios from "axios";

interface Inssues {

    title: string,
    number: number
    updated_at: string
}

export function Home(){
    const [inssues, setInssues] =  useState<Inssues[]>([])
    const [query,setQuery] = useState('')

    async function SearchRepos(){
        const response  = await api.get('about Rap')
        
        setInssues(response.data)
    }

    useEffect(() => {
        SearchRepos()
    }, [])
    

    const issuesFiltred = inssues.filter(( {title} ) => title.includes(query))
    

    function handleChangeQuery(event: ChangeEvent<HTMLInputElement>){
        setQuery(() => event.target.value)
    }

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
            <RepositoresContainer>
                {
                    issuesFiltred.map(( inssues ) => (
                        <Repository key={inssues.number}>
                            <div>
                                <strong>{inssues.title}</strong>
                                <time>
                                    {
                                        formatDistanceToNow(new Date(inssues.updated_at),{
                                            locale: ptBR,
                                            addSuffix: true
                                        })
                                    }
                                </time>
                            </div>
        
                            <p>
                                the same thing
                            </p>
                        </Repository>
                    ))
                }
              
            </RepositoresContainer>
        </div>
    )
}