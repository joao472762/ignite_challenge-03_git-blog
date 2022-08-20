import { FaGithub} from "react-icons/fa";
import { Link, NavLink } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowUpRightFromSquare, faChevronLeft,faComment,faCalendarDay} from "@fortawesome/free-solid-svg-icons";

import { IssueContent, IssueIntrodution, IssuesStatus } from "./styles";

export function InnsueDetails(){
    return(
        <div>
            <IssueIntrodution>
                <nav>
                    <NavLink to={'/'}>
                            <FontAwesomeIcon icon={faChevronLeft}/>
                            <span>voltar</span>
                    </NavLink>

                    <Link to='#'>
                        <span>ver no gitHub</span>
                        <FontAwesomeIcon icon={faArrowUpRightFromSquare}/>
                    </Link>

                </nav>
                
                <h2>JavaScript data types and data structures</h2>

                <IssuesStatus>
                    <div>
                        <FaGithub/>
                        <span>amanda Aguiar</span>
                    </div>
                    <div>
                        <FontAwesomeIcon icon={faCalendarDay}/>
                        <span> há um dia</span>
                    </div>
                    <div>
                        <FontAwesomeIcon icon={faComment}/>
                        <span>5 comentários</span>
                    </div>
                </IssuesStatus>
            </IssueIntrodution>

            <IssueContent>
                <p>
                    Programming languages all have built-in 
                    data structures, but these often differ from one language to another. 
                    This article attempts to list the built-in data structures available in
                    JavaScript and what properties they have. These can be used to build other d
                    ata structures. Wherever possible, comparisons with other languages are drawn.

                </p>
                <span>
                    Dynamic typing
                </span>
                <p>
                    JavaScript is a loosely typed and dynamic language. 
                    Variables in JavaScript are not directly associated with any 
                    particular value type, and any variable can be assigned (and re-assigned) values of all types:
                </p>

                <section>
                    <div>i</div>
                </section>
            </IssueContent>
        </div>
    )
}