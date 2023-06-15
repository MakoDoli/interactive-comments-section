import { NewComment } from "./AddComment.styled";
import avatar from "../../../../public/images/avatars/image-juliusomo.png";
interface Props {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  handler: (e: any) => void;
  publish: () => void;
  valuetext: string;
}
export default function AddComment(props: Props) {
  return (
    <NewComment>
      <textarea
        onChange={props.handler}
        cols={20}
        rows={4}
        value={props.valuetext}
        placeholder="Add comment..."
      ></textarea>
      <img src={avatar} alt="avatar"></img>
      <div onClick={props.publish} className="send">
        SEND
      </div>
    </NewComment>
  );
}
