import { useCallback, useEffect, useState } from "react";
import { PostText } from "./PosText";
import { PostSumary } from "./PostSumary";
import { PostContentCode, PostPubliMain } from "./styles";
import { useParams } from "react-router-dom";
import { api } from "../../../lib/axios";
import { Github } from "../../../context/context";

const username = import.meta.env.VITE_GITHUB_USERNAME;
const repoName = import.meta.env.VITE_GITHUB_REPO;

export function PostPublished() {
  const [issue, setIssue] = useState<Github>({} as Github);
  const [isLoading, setIsLoading] = useState(true);

  const { id } = useParams();

  // const getPostDetails = useCallback(async () => {
  //   const response = await api.get(
  //     `/repos/${username}/${repoName}/issues/${id}`

  //     );
  //     setIssue(response.data);
  //   }, [issue]);

  const getPostDetails = useCallback(async () => {
    try {
      setIsLoading(true);

      const response = await api.get(
        `/repos/${username}/${repoName}/issues/${id}`
      );

      setIssue(response.data);
    } finally {
      setIsLoading(false);
    }
  }, [issue]);

  useEffect(() => {
    getPostDetails();
  }, []);

  return (
    <PostPubliMain>
      <PostSumary issue={issue} isLoading={isLoading} />
      <PostContentCode>
        <PostText content={issue.body} />
      </PostContentCode>
    </PostPubliMain>
  );
}
