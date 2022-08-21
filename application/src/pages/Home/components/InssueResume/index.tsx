import { useNavigate } from "react-router-dom";
import {formatDistanceToNow,format} from 'date-fns'
import ptBR from "date-fns/esm/locale/pt-BR/index.js";

import { InssueContainer } from "./styles"

interface InssueProps {
    id:number,
    title: string,
    updated_at: string,
    body: string
}

export function InssueResume({body,id,title,updated_at}: InssueProps){
    const navigate = useNavigate()
    
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
        navigate(`/post/${id}`)
    }

    return(
        <InssueContainer 
                title={`abrir o post '${title }'`}
                onClick={ () => redirectUser(id)}
            >
            <div>
                <strong>{title}</strong>
            
                <time dateTime={updated_at} title={formatDate(updated_at)}>
                    {currentDistaceToNow(updated_at)}
                </time>
            </div>

            <p>{ resumeInssueBody(body)}</p>
        </InssueContainer>
    )
}