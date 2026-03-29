import { useState } from "react";

export default function GitHubProfileFinder() {
    const [userName, setUserName] = useState("spiceyourcode")
    function handleSubmit() {
    }

    return (
        <div className="github-profile-container">
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
    )
}

