import axios from "axios";
import ReactMarkdown from 'react-markdown'
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import {IssueContent} from "./styles";
import { InssueHeader } from "./components/InssueHeader";


interface Inssue {
    title: string,
    body: string,
    avatar_url: string,
    html_url: string,
    created_at: string,
    comments: number,
    user:{
        login: string
    }
}

export function InnsueDetails(){
    const [inssue, setInssue] =  useState<Inssue>()
    const  {issueId} = useParams()
    

    async function loadInssues(){
        const inssueUrl = 'https://api.github.com/repos/joao472762/ignite_react_native_dt-money-recap/issues/'
        const respose = await axios.get(`${inssueUrl}${issueId}`)
        
        setInssue(respose.data)
    }

    useEffect(()=>{
        loadInssues()
    },[])

    return(
        <div>  
            {
                inssue &&(
                    <InssueHeader
                        created_at= {inssue.created_at}
                        html_url = {inssue.html_url}
                        title = {inssue.title}
                        userName = {inssue.user.login}
                        commentsNumber={inssue.comments}
                    />
                )
            }

            <IssueContent>
                {
                    inssue 
                    ?(
                        <ReactMarkdown>
                            {inssue.body}
                        </ReactMarkdown>
                    )
                    : (<p>não cosigo encontrar esse post</p>)
                }
            </IssueContent>
    
        </div>
           
        
    )
}