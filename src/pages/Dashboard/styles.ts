import styled, { css } from 'styled-components';
import { shade } from 'polished';

interface FormProps {
  hasError: boolean;
}

export const Title = styled.h1`
  font-size: 38px;
  color: #fff;
  max-width: 650px;
  line-height: 56px;
`;

export const Form = styled.form<FormProps>`
  margin-top: 20px;
  max-width: 900px;

  display: flex;

  input {
    flex: 1;
    height: 70px;
    padding: 0 24px;
    border: 0;
    border-radius: 5px 0 0 5px;
    color: #3a3a3a;
    border: 2px solid #fff;
    border-right: 0;

    ${props =>
      props.hasError &&
      css`
        border-color: #c53030;
      `}

    &::placeholder {
      color: #a8a8b3;
    }
  }

  button {
    width: 210px;
    height: 70px;
    background: #ff9000;
    border-radius: 0px 5px 5px 0px;
    border: 0;
    color: #312e38;
    font-weight: 500;
    transition: background-color 0.2s;

    &:hover {
      background: ${shade(0.2, '#ff9000')};
    }
  }
`;

export const Error = styled.span`
  display: block;
  color: #c53030;
  margin-top: 8px;
`;

export const Repositories = styled.div`
  margin-top: 30px;
  max-width: 900px;

  div {
    background: #fff;
    border-radius: 5px;
    width: 100%;
    padding: 24px;
    display: block;
    text-decoration: none;

    align-items: center;
    transition: transform 0.2s;

    span {
      display: block;
      padding: 5px;
      display: flex;

      strong {
        font-size: 20px;
        color: #3d3d4d;
      }

      p {
        margin-left: 5px;
        font-size: 18px;
        color: #a8a8b3;
        margin-top: 2px;
      }
    }
  }
`;