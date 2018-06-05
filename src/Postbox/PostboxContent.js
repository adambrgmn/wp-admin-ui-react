import styled from 'styled-components';

const PostboxContent = styled.div`
  position: relative;
  margin: 6px 0 0 0;
  padding: 0 12px 12px;
  line-height: 1.4em;
  font-size: 13px;

  & *:last-child {
    margin-bottom: 0;
  }
`;

export default PostboxContent;
