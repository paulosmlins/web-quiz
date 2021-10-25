import styled from "styled-components";

export const Container = styled.div`
  padding: 15px;
  width: 100%;
  flex-grow: 1;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  border-radius: 20px;
  overflow-y: scroll;

  ::-webkit-scrollbar {
    background-color: var(--background);
    width: 6px;
  }

  ::-webkit-scrollbar-track {
    background-color: var(--background);
  }

  ::-webkit-scrollbar-thumb {
    background-color: var(--foreground);
    border-radius: 20px;
  }
`;

export const ContainerBox = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
  gap: 50px 0;
  margin: 0 auto;
  height: 100%;
`;

export const Counter = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: row;

  span {
    font-weight: bold;
    font-size: 4rem;
    color: var(--foreground);
  }

  p {
    padding-top: 15px;
    margin: 0;
    font-weight: bold;
    color: var(--foreground);
  }
`;

export const BoxCorrectPoint = styled.div`
  width: 100px;
  border-radius: 15px 0 0 15px;
  padding: 10px 10px;
  background-color: var(--backgroundclear);
`;

export const BoxIncorrectPoint = styled.div`
  width: 100px;
  border-radius: 0 15px 15px 0;
  padding: 10px 10px;
  background-color: var(--backgroundclear);
`;

export const Form = styled.form`
  padding: 60px 20px;
  margin: 0 auto;
  gap: 20px 0;
  border-radius: 15px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: var(--backgroundclear);
`;

export const FormLogo = styled.img`
  height: 100px;
`;

export const FormTitle = styled.h1`
  margin: 0;
  padding: 0;
  color: var(--foreground);
  text-align: center;
  padding: 30px 0;
  width: 80%;
`;

export const DivInput = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const FormInput = styled.input`
  border-radius: 15px;
  text-align: center;
  font-weight: bold;
  font-size: 2rem;
  width: 220px;
  border: 0;
  outline: 0;
  padding: 10px 10px;

  :invalid {
  }

  :focus {
    box-shadow: 0 0 0 0;
    border: 0;
    outline: 0;
  }
`;

export const InfoInput = styled.p`
  color: var(--foreground);
  font-size: 0.8rem;
  font-weight: bold;
  margin-bottom: 0;

  span {
    color: var(--primary);
  }
`;

export const FormButton = styled.button`
  border: 0;
  border-radius: 10px;
  color: var(--backgroundclear);
  background-color: var(--foreground);
  padding: 8px 18px;
`;
