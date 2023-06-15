import { NewReply } from "./AddReply.styled";
import avatar from "../../../../public/images/avatars/image-juliusomo.png";
interface Props {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  handler: (e: any) => void;
  publish: (num: number) => void;
  valuetext: string;
  idNumber: number;
  setId: (num: number) => void;
  setAddReply: (boolean: boolean) => void;
  addReply: boolean;
  position: number;
}
export default function AddReply(props: Props) {
  return (
    <NewReply>
      <textarea
        onChange={props.handler}
        cols={20}
        rows={4}
        value={props.valuetext}
        placeholder="Add comment..."
      ></textarea>
      <img src={avatar} alt="avatar"></img>
      <div
        onClick={() => {
          props.setId(props.idNumber + 1);
          props.publish(props.position);
          props.setAddReply(!AddReply);
        }}
        className="send"
      >
        REPLAY
      </div>
    </NewReply>
  );
}
