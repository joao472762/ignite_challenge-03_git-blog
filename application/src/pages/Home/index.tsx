import axios from "axios";
import { useNavigate } from "react-router-dom";
import {formatDistanceToNow,format} from 'date-fns'
import ptBR from "date-fns/esm/locale/pt-BR/index.js";
import { useEffect, useState, ChangeEvent,} from "react";

import { UserProfile } from "./components/UserProfile";
import { InssuesContainer, Inssue, SearchFormContainer } from "./styles";


interface Inssues {
    body: string
    title: string,
    updated_at: string,
    number: number
}

export function Home(){

    const navigate = useNavigate()
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

    function resumeInssueBody(body:  string, maxLength = 200){
        const bodyResumed = body.slice(0, maxLength)
        return bodyResumed
    }

    function formatDate(date: string){
        const dateFormated = format(new Date(date), "dd'/'LL'/' yyyy")  
        return dateFormated
    }

    function currentDistaceToNow(date: string){
        const distanceToNow =  formatDistanceToNow(new Date(date),{
            locale: ptBR,
            addSuffix: true
        })

        return distanceToNow
    }

    function redirectUser(id: number){
        navigate(`${id}`)
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
                        <Inssue  
                            onClick={ () => redirectUser(inssue.number)}
                            key={inssue.number}
                        >
                            <div>
                                <strong>{inssue.title}</strong>
                            
                                <time dateTime={inssue.updated_at} title={formatDate(inssue.updated_at)}>
                                    {currentDistaceToNow(inssue.updated_at)}
                                </time>
                            </div>
        
                            <p> { resumeInssueBody(inssue.body)}</p>
                        </Inssue>
                    ))
                }
            </InssuesContainer>
        </div>
    )
}