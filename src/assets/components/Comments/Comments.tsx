import { StyledComment, ReplyCont } from "./Comments.styled";
import Reply from "../Replies/Reply";
import { ReplyTypes } from "../Types";
import reply from "../../../../public/images/icon-reply.svg";
import { useState } from "react";
import Edit from "../EditComment/Edit";
import AddReply from "../AddReply/AddReply";

interface Props {
  text: string;
  replies: ReplyTypes[];
  logo: string;
  username: string;
  score: number;
  date: string;
  author: boolean;
  handleremove: () => void;
  idNumber: number;
  setId: (num: number) => void;
}

export default function Comments({
  text,
  replies,
  logo,
  username,
  score,
  date,
  author,
  handleremove,
  idNumber,
  setId,
}: Props) {
  const [currentScore, setCurrentScore] = useState(score);
  const [showEdit, setShowEdit] = useState(false);
  const [commentText, setCommentText] = useState(text);
  const [addReply, setAddReply] = useState(false);

  const [repliesList, setRepliesList] = useState(replies);
  const [newReply, setNewReply] = useState("@" + username);

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const handleReplyInput = (e: any) => {
    setNewReply(e.target.value);
  };

  const publishReply = (position: number) => {
    const reply = {
      id: idNumber,
      content: newReply,
      createdAt: "2 days ago",
      score: 0,
      replyingTo: "ramsesmiron",
      user: {
        image: {
          png: "./images/avatars/image-juliusomo.png",
          webp: "./images/avatars/image-juliusomo.webp",
        },
        username: "juliusomo",
        author: true,
      },
    };

    const newArr = [...repliesList];
    newArr.splice(position + 1, 0, reply);
    console.log(newArr);
    // setRepliesList([...repliesList, reply]);
    setRepliesList(newArr);
    setNewReply("");
    setId(idNumber + 1);
  };

  return (
    <div className="comment-container">
      <StyledComment>
        <div>
          <div className="comment-header">
            <img src={logo} className="logo" alt="pick"></img>
            <div className="username">{username}</div>
            {author ? <div className="you"> you</div> : ""}
            <div className="date">{date}</div>
          </div>
          {!showEdit ? (
            <div className="text" style={{ margin: "16px 0" }}>
              {commentText}
            </div>
          ) : (
            <textarea
              value={commentText}
              className="text"
              onChange={(e) => setCommentText(e.target.value)}
              cols={20}
              rows={4}
            ></textarea>
          )}
        </div>
        <div className="vote">
          <div
            onClick={() => {
              if (currentScore <= score) {
                setCurrentScore((prev) => prev + 1);
              }
            }}
            style={{ cursor: "pointer" }}
          >
            +
          </div>
          <div className="score-number">{currentScore}</div>
          <div
            onClick={() => {
              if (currentScore >= score) {
                setCurrentScore((prev) => prev - 1);
              }
            }}
            style={{ cursor: "pointer" }}
          >
            -
          </div>
        </div>
        {!author ? (
          <div onClick={() => setAddReply(!addReply)} className="reply-button">
            <img
              style={{ width: 14, height: 12.5 }}
              src={reply}
              alt="replay"
            ></img>
            <p>Reply</p>
          </div>
        ) : !showEdit ? (
          <Edit remove={handleremove} edit={() => setShowEdit(true)} />
        ) : (
          <div onClick={() => setShowEdit(!showEdit)} className=" update">
            <p>UPDATE</p>
          </div>
        )}
      </StyledComment>
      {addReply ? (
        <AddReply
          idNumber={idNumber}
          setId={setId}
          handler={handleReplyInput}
          publish={publishReply}
          valuetext={newReply}
          setAddReply={setAddReply}
          addReply={addReply}
          position={0}
        />
      ) : (
        ""
      )}
      <ReplyCont>
        {repliesList &&
          repliesList?.map((elem, index) => (
            <Reply
              key={elem.id}
              position={index}
              text={elem.content}
              logo={elem.user.image.png}
              username={elem.user.username}
              date={elem.createdAt}
              score={elem.score}
              author={elem.user.author}
              idNumber={idNumber}
              setId={setId}
              setReply={setNewReply}
              publish={publishReply}
              replyingto={elem.user.username}
              handleRemove={() => {
                const newList = [...repliesList];
                newList.splice(index, 1);
                setRepliesList(newList);
                console.log(newList);
              }}
            />
          ))}
      </ReplyCont>
    </div>
  );
}
