import { Styledreply } from "./Reply.styled";
import { useState } from "react";
import reply from "../../../../public/images/icon-reply.svg";
import AddReply from "../AddReply/AddReply";
import Edit from "../EditComment/Edit";
interface Props {
  text: string;
  author: boolean;
  logo: string;
  username: string;
  score: number;
  date: string;
  idNumber: number;
  setId: (num: number) => void;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  replyingto: string;
  publish: (num: number) => void;
  setReply: (e: any) => void;
  handleRemove: () => void;
  position: number;
}

export default function Reply({
  text,
  logo,
  username,
  score,
  date,
  author,
  idNumber,
  setId,
  setReply,
  publish,
  handleRemove,
  replyingto,
  position,
}: Props) {
  const [showEdit, setShowEdit] = useState(false);

  const [replyText, setReplyText] = useState(text);
  const [currentScore, setCurrentScore] = useState(score);
  const [addReply, setAddReply] = useState(false);
  const [newReply, setNewReply] = useState("@" + replyingto);

  const handleReplyInput = (e: any) => {
    setNewReply(e.target.value);
    setReply(e.target.value);
  };

  return (
    <div>
      <Styledreply>
        <div>
          <div className="comment-header">
            <img src={logo} className="logo" alt="pick"></img>
            <div className="username">{username}</div>
            {author ? <div className="you"> you</div> : ""}
            <div className="date">{date}</div>
          </div>
          {!showEdit ? (
            <div className="text" style={{ margin: "16px 0" }}>
              {replyText}
            </div>
          ) : (
            <textarea
              value={replyText}
              className="text"
              onChange={(e) => setReplyText(e.target.value)}
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
          <div onClick={() => setAddReply(true)} className="reply-button">
            <img
              style={{ width: 14, height: 12.5 }}
              src={reply}
              alt="replay"
            ></img>
            <p>Reply</p>
          </div>
        ) : !showEdit ? (
          <Edit remove={handleRemove} edit={() => setShowEdit(true)} />
        ) : (
          <div onClick={() => setShowEdit(!showEdit)} className=" update">
            <p>UPDATE</p>
          </div>
        )}
      </Styledreply>
      {addReply ? (
        <AddReply
          idNumber={idNumber}
          setId={setId}
          handler={handleReplyInput}
          publish={publish}
          valuetext={newReply}
          setAddReply={setAddReply}
          addReply={addReply}
          position={position}
        />
      ) : (
        ""
      )}
    </div>
  );
}
