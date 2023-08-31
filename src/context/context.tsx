/* eslint-disable no-empty */
import {
  ReactNode,
  createContext,
  useEffect,
  useState,
  useCallback,
} from "react";
import { api } from "../lib/axios";

const username = import.meta.env.VITE_GITHUB_USERNAME;
const repoName = import.meta.env.VITE_GITHUB_REPO;

interface GitProvider {
  children: ReactNode;
}

export interface Github {
  body: string;
  title: string;
  createdAt: string;
  number: number;
  html_url: string;
  comments: number;
  user: {
    login: string;
  };
}

export interface GithubPerfil {
  login: string;
  id: number;
  avatar_url: string;
  html_url: string;
  name: string;
  company: string;
  bio: string;
  followers: number;
}

interface GitHubProvider {
  issue: Github[];
  setIssue: (issue: Github[]) => void;
  perfil: GithubPerfil;
  ApiPost: (query: string) => Promise<void>;
  ApiPerfil: () => Promise<void>;
  countPosts: number;
}

export const NewGitProvider = createContext({} as GitHubProvider);

export function ContextProvider({ children }: GitProvider) {
  const [issue, setIssue] = useState<Github[]>([]);
  const [perfil, setPerfil] = useState<GithubPerfil>({} as GithubPerfil);

  const countPosts = issue.length;

  const ApiPost = useCallback(
    async (query: string = "") => {
      try {
        const response = await api.get(
          `/search/issues?q=${query}%20repo:${username}/${repoName}`
        );
        setIssue(response.data.items);
      } finally {
      }
    },
    [issue]
  );

  const ApiPerfil = useCallback(async () => {
    try {
      const response = await api.get(`/users/${username}`);
      setPerfil(response.data);
      

    } finally {
    }
  }, [perfil]);

  // async function teste(){
  //   const response = await fetch('https://api.github.com/users/pedroeduardobibiano')
  //   const data = await response.json()

  //   setPerfil(data)
  //   console.log(data)
  // }

  useEffect(() => {
    ApiPost();
    ApiPerfil();
  }, []);

  return (
    <NewGitProvider.Provider value={{ ApiPost, ApiPerfil, perfil, issue, countPosts, setIssue}}>
      {children}
    </NewGitProvider.Provider>
  );
}
