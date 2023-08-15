import { ReactNode, createContext, useEffect, useState } from "react";

interface Github {
  id: number;
  avatar_url: string;
  html_url: string;
  name: string;
  followers: number;
  following: number;
  bio: string;
  login: string;
  company: string;
}

interface GitHubProvider {
  perfil: Github[];
  test: () => void;
}

interface GitProvider {
  children: ReactNode;
}

export const NewGitProvider = createContext({} as GitHubProvider);

export function ContextProvider({ children }: GitProvider) {
  const [perfil, setPerfil] = useState<Github[]>([]);

  async function PerfilAPI() {
    const response = await fetch(
      "https://api.github.com/users/pedroeduardobibiano"
    );
    const data = await response.json();

    setPerfil([data]);
  }

  useEffect(() => {
    PerfilAPI();
  }, []);

  function test() {
    console.log("Testing the provider");
  }

  return (
    <NewGitProvider.Provider value={{ perfil: perfil, test }}>
      {children}
    </NewGitProvider.Provider>
  );
}
