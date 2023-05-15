import React, { useState } from "react";
import "./styles/App.css";
import { InputBox, PrimaryButton } from "./components";
import { getUser, getRepos } from "./fetchers/get";
import GitHubUser from "./utils/GitHubUser";

const App = () => {

    const [username, setUsername] = useState(null);
    const [githubUser, setGithubUser] = useState(null);
    const [userFound, setUserFound] = useState(false);

    const handleOnSearch = async() => {
        const user = await getUser(username);
        const repos = await getRepos(username);

        if (user.message === "Not Found") return;
        
        const { name, location, bio, avatar_url,  } = user;

        setGithubUser(new GitHubUser(name, location, bio, avatar_url, repos));
        setUserFound(true);
    }

    const handleOnReset = () => {
        setUsername(null);
        setGithubUser(null);
        setUserFound(false);
    }

    return (
        <div className="app">
            {!userFound ? (
                <div className="search-box">
                    <InputBox 
                        placeholder="e.g. facebook" 
                        label="GitHub username:" 
                        onChange={(e) => setUsername(e.target.value)}
                    />
                    <PrimaryButton 
                        name="GO!" 
                        onClick={() => handleOnSearch()}
                    />
                </div>
            ) : (
                <div className="user-details-container">
                    <div className="user-details-header">
                        <img src={githubUser.getAvatar()} alt="GitHub Avatar" />
                        <h4>{githubUser.getName()}</h4>
                    </div>
                    <div className="user-details-about">
                        <span><b>BIO:</b> {githubUser.getBio()}</span>
                        <span><b>LOCATION:</b> {githubUser.getLocation()}</span>
                        <span><b>REPOSITORIES:</b></span>
                    </div>
                    <div className="user-details-repositories">
                        {githubUser.getRepos().map(({ id, name }) => (
                            <div key={id} className="user-details-repository">
                                <span>{name}</span>
                            </div>
                        ))}
                    </div>
                    <PrimaryButton 
                        name="Reset" 
                        onClick={() => handleOnReset()}
                    />
                </div>
            )}
        </div>
    );
};

export default App;
