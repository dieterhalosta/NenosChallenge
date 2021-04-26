import React from "react";
import PropTypes from "prop-types";
import { ROUNDED_BTN_TYPE } from "../../common/constants";
import { isValidFunction } from "../../common/utils";
import styled, { css } from "styled-components";

export const Button = ({ id, text, onClick, tabIndex, btnType, disabled }) => {
  if (!isValidFunction(onClick)) {
    console.error("Button: Invalid onClick event for button");
    return null;
  }
  return (
    <StyledButton
      id={id}
      onClick={onClick}
      tabIndex={tabIndex}
      disabled={disabled}
      btnType={btnType}
    >
      {text}
    </StyledButton>
  );
};

Button.propTypes = {
  id: PropTypes.oneOfType([PropTypes.number, PropTypes.string]).isRequired,
  text: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
  tabIndex: PropTypes.number.isRequired,
  btnType: PropTypes.string.isRequired,
  disabled: PropTypes.bool.isRequired,
};

Button.defaultProps = {
  id: Math.random(),
  text: "",
  onClick: null,
  tabIndex: -1,
  btnType: ROUNDED_BTN_TYPE,
  disabled: false,
};

export default Button;

const defaultButtonCss = css`
  border-radius: 12px;
  width: 380px;
  background-color: var(--tilebg);
`;

const submitButtonCss = css`
  width: 30%;
  border-radius: 0px 12px 12px 0px;
  background-color: var(--primarybtn);
  :disabled {
    background-color: var(--disabledbtn);
    color: var(--lightcolor);
  }
`;

const StyledButton = styled.button`
  display: flex;
  flex-wrap: wrap;
  border: none;
  height: 4.87rem;
  align-items: center;
  justify-content: center;
  font-size: calc(10px + 2vmin);
  color: var(--primarybg);
  font-weight: bold;
  outline: none;
  ${(props) =>
    props.btnType === "submit" ? submitButtonCss : defaultButtonCss}
  :hover {
    cursor: pointer;
  }
`;
