import { StyledContainer } from "./Container.styled";
import Comments from "../Comments/Comments";
import AddComment from "../AddComment/AddComment";
import { useState } from "react";
interface Props {
  data: {
    currentUser: {
      image: {
        png: string;
        webp: string;
      };
      username: string;
    };
    comments: {
      id: number;
      content: string;
      createdAt: string;
      score: number;
      user: {
        image: {
          png: string;
          webp: string;
        };
        username: string;
      };
      replies: {
        id: number;
        content: string;
        createdAt: string;
        score: number;
        replyingTo: string;
        user: {
          image: {
            png: string;
            webp: string;
          };
          username: string;
          author: boolean;
        };
      }[];
      author: boolean; //unknown ---> any
    }[];
  };
}

export default function Container({ data }: Props) {
  const [commentsList, setCommentsList] = useState(data.comments);
  const [newComment, setNewComment] = useState("");
  const [id, setId] = useState(4);
  //console.log(commentsList);
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const handleInput = (e: any) => {
    setNewComment(e.target.value);
  };

  const publish = () => {
    const comment = {
      id: id + 1,
      content: newComment,
      createdAt: "Just now",
      score: 0,
      user: {
        image: {
          png: "./images/avatars/image-juliusomo.png",
          webp: "./images/avatars/image-amyrobson.webp",
        },
        username: "juliusomo",
      },
      replies: [],
      author: true,
    };
    setCommentsList([...commentsList, comment]);
    setNewComment("");
    setId((prev) => prev + 1);
  };

  return (
    <StyledContainer>
      {commentsList.map((elem, index) => (
        <Comments
          key={elem.id}
          text={elem.content}
          replies={elem.replies}
          logo={elem.user.image.png}
          username={elem.user.username}
          date={elem.createdAt}
          score={elem.score}
          author={elem.author}
          idNumber={id}
          setId={setId}
          handleremove={() => {
            const newList = [...commentsList];
            newList.splice(index, 1);
            setCommentsList(newList);
            console.log(newList);
          }}
        />
      ))}
      <AddComment
        handler={handleInput}
        publish={publish}
        valuetext={newComment}
      />
    </StyledContainer>
  );
}
