import styled from 'styled-components'

export const Container = styled.form`
  width: 100%;
`

export const InputBlock = styled.div`
  margin-top: 24px;

  &:nth-child(1) {
    margin-top: 0;
  }

  label {
    display: block;
    margin-bottom: 5px;
    font-weight: 400;
    font-size: 16px;
    color: #fff;
  }

  input {
    width: 100%;
    height: 45px;
    padding-left: 10px;
    border: 1px solid #fff;
    border-radius: 5px;
    background: transparent;
    color: #fff;

    &[type="color"] {
      padding-left: 0;
      border: none;
      cursor: pointer;
    }

    &:active,
    &:focus {
      background: transparent;
    }
  }
`

export const ButtonSubmit = styled.button`
  width: 100%;
  height: 70px;
  margin-top: 55px;
  border-radius: 5px;
  font-size: 17px;
  letter-spacing: 1px;
  cursor: pointer;
`