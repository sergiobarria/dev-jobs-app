import styled from 'styled-components';

// interface BtnProps {
//   children?: React.ReactNode;
//   paddingX?: number
// }

interface ButtonProps {
  px?: string;
  py?: string;
}

const ButtonPrimary: React.FC<ButtonProps> = ({ children, px, py }) => {
  return (
    <Button px={px} py={py}>
      {children ? children : 'Button'}
    </Button>
  );
};

const Button = styled.button<ButtonProps>`
  background-color: ${props => props.theme.accent};
  border: none;
  border-radius: 5px;
  color: white;
  font-weight: 700;
  font-family: 'Kumbh Sans', sans-serif;
  padding-left: ${props => props.px};
  padding-right: ${props => props.px};
  padding-top: ${props => props.py};
  padding-bottom: ${props => props.py};
`;

export default ButtonPrimary;
