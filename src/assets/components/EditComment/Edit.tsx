import { Buttons } from "./Edit.styled";
import erase from "../../../../public/images/icon-delete.svg";
import edit from "../../../../public/images/icon-edit.svg";
interface Props {
  remove: () => void;
  edit: () => void;
}
export default function Edit(props: Props) {
  return (
    <Buttons>
      <div onClick={props.remove} className="delete">
        <img src={erase} alt="delete"></img>
        <p> Delete</p>
      </div>
      <div onClick={props.edit} className="edit">
        <img src={edit} alt="edit"></img>
        <p>edit</p>
      </div>
    </Buttons>
  );
}
