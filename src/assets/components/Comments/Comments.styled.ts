import styled from "styled-components";

export const StyledComment = styled.div`
  background: white;
  border-radius: 8px;
  padding: 16px;
  font-weight: 400;
  font-size: 16px;
  line-height: 24px;
  color: #67727e;
  position: relative;
  @media screen and (min-width: 768px) {
    display: flex;
    flex-direction: row-reverse;
  }

  img {
    width: 32px;
    height: 32px;
  }
  .comment-header {
    display: flex;
    gap: 16px;
    align-items: center;
  }
  .username {
    font-weight: 500;
    font-size: 16px;
    line-height: 19px;
    color: #334253;
  }
  .you {
    background: #5357b6;
    border-radius: 2px;
    font-weight: 500;
    font-size: 13px;
    line-height: 15px;
    color: #ffffff;
    width: 36px;
    height: 20px;
    display: grid;
    place-content: center;
  }
  .date {
    font-weight: 400;
    font-size: 16px;
    line-height: 24px;
    color: #67727e;
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
    //width: 293px;

    margin-top: 16px;
  }
  .text {
    @media screen and (min-width: 768px) {
      width: 618px;
    }
  }
  .reply-button {
    font-weight: 500;
    font-size: 16px;
    line-height: 24px;
    color: #5357b6;
    display: flex;
    align-items: center;
    gap: 8px;
    position: absolute;
    bottom: 24px;
    right: 24px;
    width: 65px;
    height: 24px;
    cursor: pointer;
    @media screen and (min-width: 768px) {
      top: 5%;
      bottom: 0;
    }
  }
  .update {
    position: absolute;
    bottom: 24px;
    right: 24px;
    background: #5357b6;
    border-radius: 8px;
    width: 104px;
    height: 48px;
    color: #ffffff;
    display: grid;
    place-content: center;
    cursor: pointer;
  }
  .vote {
    display: flex;
    background: #f5f6fa;
    border-radius: 10px;
    width: 100px;
    height: 40px;
    align-items: center;
    justify-content: space-evenly;

    @media screen and (min-width: 768px) {
      flex-direction: column;
      width: 40px;
      height: 100px;
      margin-right: 24px;
    }
  }
  .score-number {
    font-weight: 500;
    color: #5357b6;
  }
`;
export const ReplyCont = styled.div`
  border-left: 1px solid #e9ebf0;
  @media screen and (min-width: 768px) {
    margin-left: 32px;
  }
`;
