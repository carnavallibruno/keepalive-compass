import styled from 'styled-components';

export const PasswordRequirementsContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 90%;
  align-items: center;
  justify-content: center;
  height: 10%;
  margin-bottom: 5%;
  @media screen and (max-width: 1441px) {
    width: 100%;
  }
`

export const PasswordRequirementsSubcontainer = styled.div`
width: 100%;
height: 100%;
display: flex;
flex-wrap: wrap;
@media screen and (max-width: 1441px) {
    font-size: 0.9rem;
  }
`

export const PasswordRequirements = styled.div`
  display: flex;
  align-items: center;
  width: 49%;
  height: 50%;
`