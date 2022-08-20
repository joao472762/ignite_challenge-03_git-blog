import {Link} from 'react-router-dom'
import { FaBuilding, FaGithub} from "react-icons/fa";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowUpRightFromSquare, faUserGroup} from "@fortawesome/free-solid-svg-icons";

import { Avatar, UserFooter, UserProfileContent, UserProfileContainer } from "./styles";
import { useEffect, useState } from 'react';
import axios from 'axios';

interface GitHubProfile {
    avatar_url: string,
    html_url: string,
    name: string,
    company: string,
    bio: string,
    followers: number,
}

export function UserProfile(){
    const [gitHubProfile, setGithubProfile] = useState<GitHubProfile>()

    async function loadGitHubProfile(){
        const profileUrl = 'https://api.github.com/users/joao472762'
        const response = await axios.get(profileUrl)
        setGithubProfile(response.data)
    }

    useEffect(() => {
        loadGitHubProfile()
    }, [])

    const firstName = gitHubProfile?.name.split(' ')[0  ]
    
    return(
        <UserProfileContainer>

                <Avatar src= {gitHubProfile?.avatar_url} />

                <UserProfileContent>
                    <header>
                        <h2>{gitHubProfile?.name}</h2>

                        <a href= {gitHubProfile?.html_url} target='_blank'>
                            <strong>GITHUB</strong>
                            <FontAwesomeIcon icon={faArrowUpRightFromSquare} />
                        </a>
                    </header>
               
                    <p>
                        {gitHubProfile?.bio}
                    </p>

                    <UserFooter>
                        <div>
                            <FaGithub/> 
                            <span>{firstName}</span>
                        </div>

                        <div>
                            <FaBuilding/>
                            <span>{gitHubProfile?.company}</span>
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