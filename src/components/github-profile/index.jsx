import { useState } from "react";
import "./profile.css";

export default function GitHubProfileFinder() {
    const [userName, setUserName] = useState("spiceyourcode");
    const [profile, setProfile] = useState(null);
    async function handleSubmit() {
        const response = await fetch(`https://api.github.com/users/${userName}`)
        const data = await response.json()
        setProfile(data)
    }
    return (
        <div className="profile-container">
            <div className="search-container">
                <div className="input-wrapper">
                    <input
                        type="text"
                        placeholder="Search Github Username.."
                        value={userName}
                        onChange={(e) => setUserName(e.target.value)}
                    />
                </div>
                <button onClick={handleSubmit}>Search</button>
            </div>

            {
                profile ? (
                    <div className="user-container">
                        <img className="avatar" src={profile.avatar_url} />
                        <div className="name">{profile.name}</div>
                        <div className="bio">{profile.bio}</div>
                    </div>
                ) : null
            }


        </div >
    )
}

