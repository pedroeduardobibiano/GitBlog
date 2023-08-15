import { PostTextContainer, PostTextContent, PostTextTitle } from "./styles";

export function PostText() {
  return (
    <PostTextContent>
      <PostTextContainer>
        <strong>
          Programming languages all have built-in data structures, but these
          often differ from one language to another.{" "}
        </strong>{" "}
        This article attempts to list the built-in data structures available in
        JavaScript and what properties they have. These can be used to build
        other data structures. Wherever possible, comparisons with other
        languages are drawn.
      </PostTextContainer>

      <PostTextContainer>
        <PostTextTitle>Dynamic typing</PostTextTitle>
        JavaScript is a loosely typed and dynamic language. Variables in
        JavaScript are not directly associated with any particular value type,
        and any variable can be assigned (and re-assigned) values of all types:
      </PostTextContainer>
    </PostTextContent>
  );
}
