import styled from "styled-components";

export const Buttons = styled.div`
  display: flex;
  gap: 16px;
  align-items: center;
  position: absolute;
  right: 24px;
  bottom: 24px;
  height: 25px;
  @media screen and (min-width: 768px) {
    bottom: 0;
    top: 5%;
  }
  .delete,
  .edit {
    display: flex;
    gap: 9px;
    align-items: center;
    cursor: pointer;
  }
  .delete img {
    width: 12px;
    height: 14px;
  }
  .delete p,
  .edit p {
    font-weight: 500;
    font-size: 16px;
    line-height: 24px;
    color: #ed6368;
  }
  .edit img {
    width: 14px;
    height: 14px;
  }
  .edit p {
    color: #5357b6;
  }
`;
