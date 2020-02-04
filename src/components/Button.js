import styled from 'styled-components';
import Colors from '../styles/colors';

const Button = styled.button`
  display: block;
  background: ${(props) => (props.disabled ? Colors.gray : Colors.primary)};
  border: none;
  border-radius: 2px;
  box-sizing: border-box;
  color: ${Colors.white};
  line-height: 1rem;
  padding: 1rem;
  text-transform: uppercase;
  text-align: center;
  width: ${(props) => (props.block ? 'inherit' : '100%')};

  &:hover {
    opacity: ${(props) => (props.disabled ? 'inherit' : 0.75)};
    cursor: ${(props) => (props.disabled ? 'not-allowed' : 'pointer')};
  }
`;

export default Button;
