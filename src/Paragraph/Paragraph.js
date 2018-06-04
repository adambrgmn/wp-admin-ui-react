import styled from 'styled-components';
import Table from '../Table/Table';

const Paragraph = styled.p`
  font-size: 13px;
  line-height: 1.5;
  margin: 1em 0;

  ${Table} & {
    margin: 2px 0 0.8em;
    font-size: 13px;
    line-height: 1.5em;
    color: #32373c;
  }
`;

Paragraph.propTypes = {};

/** @component */
export default Paragraph;
