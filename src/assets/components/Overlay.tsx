import styled from "styled-components";
import { useContext } from "react";
import { OverlayContext } from "./OverlayContext";

export default function Overlay() {
  const overlay = useContext(OverlayContext);
  console.log(overlay.overlay);
  return (
    <OverlayDiv
      style={{ display: `${overlay.overlay ? "block" : "none"} ` }}
    ></OverlayDiv>
  );
}
const OverlayDiv = styled.div`
  width: 100%;
  height: 100%;
  background-color: black;
  opacity: 0.5;
  position: absolute;
  z-index: 1;
`;
