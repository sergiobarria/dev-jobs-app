import styled from 'styled-components';

interface ButtonProps {
  px?: string;
  py?: string;
  onClick?: () => void;
  disabled?: boolean;
}

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
  background-color: ${props => props.theme.accent};
  border: none;
  border-radius: 5px;
  cursor: pointer;
  color: white;
  font-weight: 700;
  font-family: 'Kumbh Sans', sans-serif;
  transition: all 300ms ease-in-out;
  padding-left: ${props => props.px};
  padding-right: ${props => props.px};
  padding-top: ${props => props.py};
  padding-bottom: ${props => props.py};

  &:hover {
    background-color: ${props => props.theme.accentLight};
  }

  &:disabled {
    cursor: not-allowed;
    background-color: #ccc;
  }
`;

export default ButtonPrimary;
