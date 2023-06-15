import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
*{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}
body {
    background-color: #F5F6FA;
    font-family: 'Rubik';
    font-style: normal;
}
main{
    position: relative;
}
@media screen and (min-width: 768px) {
    main{
    display: flex;
    justify-content: center;}
}

`;
