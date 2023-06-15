import { Buttons } from "./Edit.styled";
import styled from "styled-components";
import erase from "../../../../public/images/icon-delete.svg";
import edit from "../../../../public/images/icon-edit.svg";
import { useContext, useState } from "react";
import { OverlayContext } from "../OverlayContext";
interface Props {
  remove: () => void;
  edit: () => void;
}
export default function Edit(props: Props) {
  const overlay = useContext(OverlayContext);
  const [showModal, setShowModal] = useState(false);
  return (
    <Buttons>
      <div
        onClick={() => {
          overlay.setOverlay(true);
          setShowModal(true);
        }}
        className="delete"
      >
        <img src={erase} alt="delete"></img>
        <p> Delete</p>
      </div>
      <div onClick={props.edit} className="edit">
        <img src={edit} alt="edit"></img>
        <p>edit</p>
      </div>
      {showModal ? (
        <ModalBox>
          <h2>Delete Comment</h2>
          <p>
            Are you sure you want to delete this comment? This will remove the
            comment and can’t be undone.
          </p>
          <div className="buttons">
            <div
              onClick={() => {
                setShowModal(false);
                overlay.setOverlay(false);
              }}
              className="cancel"
            >
              NO, CANCEL
            </div>
            <div
              onClick={() => {
                props.remove();
                setShowModal(false);
                overlay.setOverlay(false);
              }}
              className="confirm"
            >
              YES, DELETE
            </div>
          </div>
        </ModalBox>
      ) : (
        ""
      )}
    </Buttons>
  );
}

const ModalBox = styled.div`
  width: 343px;
  height: 224px;
  background-color: white;
  position: fixed;
  z-index: 2;
  border-radius: 8px;
  padding: 32px;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  h2 {
    font-weight: 500;
    font-size: 24px;
    line-height: 28px;
    color: #334253;
    margin-bottom: 16px;
  }
  p {
    font-weight: 400;
    font-size: 16px;
    line-height: 24px;
    color: #67727e;
    margin-bottom: 16px;
  }
  .buttons {
    display: flex;
    gap: 14px;
  }
  .cancel,
  .confirm {
    width: 138px;
    height: 48px;
    font-weight: 500;
    font-size: 16px;
    line-height: 24px;
    text-align: center;
    color: #ffffff;
    border-radius: 8px;
    padding-top: 12px;
    cursor: pointer;
  }
  .cancel {
    background-color: #67727e;
  }
  .confirm {
    background-color: #ed6368;
  }
`;
