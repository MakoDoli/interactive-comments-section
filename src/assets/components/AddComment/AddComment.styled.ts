import styled from "styled-components";

export const NewComment = styled.div`
  background: white;
  border-radius: 8px;
  padding: 16px;
  font-weight: 400;
  font-size: 16px;
  line-height: 24px;
  color: #67727e;
  display: flex;
  flex-direction: column;
  gap: 24px;
  position: relative;
  img {
    width: 32px;
    height: 32px;
  }
  textarea {
    height: 96px;
    border-radius: 8px;
    border: 1px solid #e9ebf0;
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 24px;
    color: #67727e;
    padding: 12px 24px;
    outline: none;
  }
  .send {
    position: absolute;
    width: 104px;
    height: 48px;
    background: #5357b6;
    border-radius: 8px;
    font-weight: 500;
    font-size: 16px;
    line-height: 24px;
    color: #ffffff;
    display: grid;
    place-content: center;
    cursor: pointer;
    right: 16px;
    top: 125px;
  }
`;
