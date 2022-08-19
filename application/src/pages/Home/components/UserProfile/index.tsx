import {Link} from 'react-router-dom'
import { FaBuilding, FaGithub} from "react-icons/fa";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowUpRightFromSquare, faUserGroup} from "@fortawesome/free-solid-svg-icons";

import { Avatar, UserFooter, UserProfileContent, UserProfileContainer } from "./styles";

export function UserProfile(){
    return(
        <UserProfileContainer>

                <Avatar src="https://avatars.githubusercontent.com/u/84108989?v=4" />

                <UserProfileContent>
                    <header>
                        <h2>Amanda Aguiar</h2>

                        <Link to={'https://github.com/joao472762'}>
                            <strong>GITHUB</strong>
                            <FontAwesomeIcon icon={faArrowUpRightFromSquare} />
                        </Link>
                    </header>
               
                    <p>
                        Tristique volutpat pulvinar vel massa, 
                        pellentesque egestas. Eu viverra massa quam d
                        ignissim aenean malesuada suscipit. Nunc, volutpat pulvinar vel mass.
                    </p>

                    <UserFooter>
                        <div>
                            <FaGithub/> 
                            <span>amanda</span>
                        </div>

                        <div>
                            <FaBuilding/>
                            <span>myself</span>
                        </div>

                        <div>

                            <FontAwesomeIcon icon={faUserGroup} />
                            <span>30 seguidores</span>
                        </div>
                    </UserFooter>
                </UserProfileContent>
            </UserProfileContainer>
    )
}