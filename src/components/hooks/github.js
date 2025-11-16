// const { useQuery } = require("@tanstack/react-query")
import { useQuery } from "@tanstack/react-query";
import { projects } from "../../data";


export const useProjectByUsername = (username) => {
    
    return useQuery({
        queryKey: ['github', username],
        queryFn: () => fetchUserRepos(username),
        refetchOnWindowFocus: false,
        staleTime: 1000 * 60 * 60, // 1 hour,
        enabled: !!username,
    })
}

async function fetchUserRepos(username) {
    return projects; // For local data, you can return the projects directly
    const response = await fetch(`https://api.github.com/users/${username}/repos?sort=created&per_page=100`);
    if (!response.ok) {
        throw new Error('Network response was not ok');
    }
    return response.json();
}

export const useProjectByUsernameAndRepo = (username, repo) => {
    return useQuery({
        queryKey: ['github', username, repo],
        queryFn: async () => {
            const response = await fetch(`https://api.github.com/repos/${username}/${repo}`);
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            return response.json();
        },
        refetchOnWindowFocus: false,
        staleTime: 1000 * 60 * 60, // 1 hour
    })
}