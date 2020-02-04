import styled from 'styled-components';
import Colors from '../styles/colors';

export default styled.p`
  font-size: 1rem;
  line-height: 1.5rem;
  margin: 0 0 1rem;
  color: ${(props) => (props.muted ? Colors.gray : Colors.black)};
`;
