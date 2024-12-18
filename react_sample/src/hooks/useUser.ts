import { useState, useEffect } from "react";

type User = {
    name: string;
    avatarUrl: string;
    profileUrl: string;
    bio?: string; // optional
    email?: string; // optional
    publicRepos: number;
    publicGists: number;
    followers: number;
    following: number;
    createdAt: Date;
    updatedAt: Date;
}

const fetchUser = async (userName: string): Promise<User | null>=> {
    if (!userName) return null;
    
    const response = await fetch(`https://api.github.com/users/${userName}`);

    if (response.status >= 400) return null;

    const data = await response.json();

    return {
        profileUrl: data.html_url,
        avatarUrl: data.avatar_url,
        name: data.name,
        email: data.email,
        bio: data.bio,
        publicRepos: data.public_repos,
        publicGists: data.public_gists,
        followers: data.followers,
        following: data.following,
        createdAt: new Date(data.created_at),
        updatedAt: new Date(data.updated_at),
    };
}

const useUser = (userName: string | undefined) => {
    const [user, setUser] = useState<User | null>(null);

    useEffect(() => {
        if (userName) {
            fetchUser(userName).then(setUser);
        }
    }, [userName]);

    return user;
}

export { useUser, type User };
