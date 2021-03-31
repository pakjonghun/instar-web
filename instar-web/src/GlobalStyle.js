import { createGlobalStyle } from "styled-components";
import reset from "styled-reset";

export const GlobalStyle = createGlobalStyle`
${reset};
*{
    box-sizing:border-box;
    font-family:'Open Sans','Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif

}

a{
    text-decoration:none;
    cursor: pointer;
}




`;
