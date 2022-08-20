import { FaGithub} from "react-icons/fa";
import { Link, NavLink, useParams } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowUpRightFromSquare, faChevronLeft,faComment,faCalendarDay} from "@fortawesome/free-solid-svg-icons";

import { IssueContent, IssueIntrodution, IssuesStatus } from "./styles";
import { useEffect, useState } from "react";
import axios from "axios";
import { Inssue } from "../Home/styles";
import ReactMarkdown from 'react-markdown'
import { formatDistanceToNow } from "date-fns";
import ptBR from "date-fns/locale/pt-BR";


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
        const respose = await axios.get(`https://api.github.com/repos/joao472762/ignite_react_native_dt-money-recap/issues/${issueId}`)
        
        setInssue(respose.data)
    }

    useEffect(()=>{
        loadInssues()
    },[])

 

    function currentDistaceToNow(date: string ){
        const currentDate = date as string
        const distanceToNow =  formatDistanceToNow(new Date(currentDate),{
            locale: ptBR,
            addSuffix: true
        })

        return distanceToNow
    }


    return(
        <div>
            {
                inssue && (
                    <div>
                        <IssueIntrodution>
                            <nav>
                                <NavLink to={'/'}>
                                        <FontAwesomeIcon icon={faChevronLeft}/>
                                        <span>voltar</span>
                                </NavLink>

                                <a href={inssue.html_url} target={"_blank"}>
                                    <span>ver no gitHub</span>
                                    <FontAwesomeIcon icon={faArrowUpRightFromSquare}/>
                                </a>

                            </nav>
                            
                            <h2>{inssue?.title}</h2>

                            <IssuesStatus>
                                <div>
                                    <FaGithub/>
                                    <span>{inssue?.user.login}</span>
                                </div>
                                <div>
                                    <FontAwesomeIcon icon={faCalendarDay}/>
                                    <span>{currentDistaceToNow(inssue?.created_at) }</span>
                                </div>
                                <div>
                                    <FontAwesomeIcon icon={faComment}/>
                                    <span>{inssue.comments} comentários</span>
                                </div>
                            </IssuesStatus>
                        </IssueIntrodution>
                        <ReactMarkdown>
                            {inssue.body}
                        </ReactMarkdown>
           
                    </div>
                )
            }
        </div>
    )
}