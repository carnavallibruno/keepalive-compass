import styled from "styled-components";

export const StyledInput = styled.input`

  font-family: 'Mark Pro';
  background: transparent;

  width: 19.73vw;
  height: 3.75rem;

  margin-top: 2rem;

  font-size: 1rem;

  padding-left: 1.04vw;

  color: #FFFFFF;
  border: 1px solid #FFFFFF;
  border-radius: 50px;
  ::placeholder {
    color: #E0E0E0;
  }
`

export const InputContainer = styled.div`
  display: "flex";
  justify-content:"space-between";
  align-items: "center";
`