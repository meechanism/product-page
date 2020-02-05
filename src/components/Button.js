import styled from 'styled-components';
import Colors from '../styles/colors';

export const getBgColor = (props = {}) => {
  if (props.disabled) return Colors.gray;
  if (props.secondary) return Colors.white;
  return Colors.primary;
};

export const getTxtColor = (props = {}) => {
  if (props.secondary) return Colors.black;
  return Colors.white;
};

export const getHoverTxtColor = (props = {}) => {
  if (props.secondary) return Colors.primary;
  return Colors.white;
};

const Button = styled.button`
  display: block;
  background: ${(props) => getBgColor(props)};
  border: none;
  border-radius: 2px;
  box-sizing: border-box;
  color: ${(props) => getTxtColor(props)};
  line-height: 1rem;
  padding: 1rem;
  text-transform: uppercase;
  text-align: center;
  width: ${(props) => (props.block ? 'inherit' : '100%')};

  &:hover,
  &:focus {
    box-shadow: inset 0 0 100px 100px rgba(255, 255, 255, 0.1);
    color: ${(props) => getHoverTxtColor(props)};
    cursor: ${(props) => (props.disabled ? 'not-allowed' : 'pointer')};
  }
`;

export default Button;
