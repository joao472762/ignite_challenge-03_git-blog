import ptBR from "date-fns/locale/pt-BR";
import { FaGithub} from "react-icons/fa";
import { NavLink } from "react-router-dom";
import { formatDistanceToNow } from "date-fns";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { 
    faComment,
    faChevronLeft,
    faCalendarDay,
    faArrowUpRightFromSquare, 
} from "@fortawesome/free-solid-svg-icons";

import { InssueHeaderContainer, Status } from "./styles"

interface InssueHeaderProps {
    html_url: string
    title: string,
    userName: string,
    commentsNumber: number,
    created_at: string,
}

export function InssueHeader({commentsNumber,html_url,title,userName,created_at}:InssueHeaderProps){

    function currentDistaceToNow(date: string ){
        const currentDate = date as string
        const distanceToNow =  formatDistanceToNow(new Date(currentDate),{
            locale: ptBR,
            addSuffix: true
        })

        return distanceToNow
    }

    return(
        <InssueHeaderContainer>
            <nav>
                <NavLink to={'/'}>
                        <FontAwesomeIcon icon={faChevronLeft}/>
                        <span>voltar</span>
                </NavLink>

                <a href={html_url} target={"_blank"}>
                    <span>ver no gitHub</span>
                    <FontAwesomeIcon icon={faArrowUpRightFromSquare}/>
                </a>

            </nav>
            
            <h2>{title}</h2>

            <Status>
                <div>
                    <FaGithub/>
                    <span>{userName}</span>
                </div>
                <div>
                    <FontAwesomeIcon icon={faCalendarDay}/>
                    <span>
                        {(currentDistaceToNow(created_at))}
                    </span>
                </div>
                <div>
                    <FontAwesomeIcon icon={faComment}/>
                    <span>{commentsNumber} comentários</span>
                </div>
            </Status>

        </InssueHeaderContainer>
    )
}