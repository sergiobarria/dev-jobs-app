import styled from 'styled-components';

import { ButtonProps } from '../../types';

const ButtonPrimary: React.FC<ButtonProps> = ({
  children,
  px,
  py,
  onClick,
  disabled,
}) => {
  return (
    <Button px={px} py={py} onClick={onClick} disabled={disabled}>
      {children ? children : 'Button'}
    </Button>
  );
};

const Button = styled.button<ButtonProps>`
  background-color: rgba(89, 100, 224, 0.1);
  color: ${props => props.theme.accent};
  border: none;
  border-radius: 5px;
  cursor: pointer;
  font-weight: 700;
  font-family: 'Kumbh Sans', sans-serif;
  transition: all 300ms ease-in-out;
  padding-left: ${props => props.px};
  padding-right: ${props => props.px};
  padding-top: ${props => props.py};
  padding-bottom: ${props => props.py};

  &:hover {
    background-color: rgba(89, 100, 224, 0.35);
  }

  &:disabled {
    cursor: not-allowed;
    background-color: #ccc;
  }
`;

export default ButtonPrimary;
