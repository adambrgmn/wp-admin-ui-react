Hides the containing text visually, but it will be shown on screen readers.

```js static
import { ScreenReaderText, Button } from 'wp-admin-ui-react';

const IconBtn = ({ icon, label }) => (
  <Button dashicon={icon}>
    <ScreenReaderText>{label}</ScreenReaderText>
  </Button>
);
```

Example:

```js
<Paragraph>
  <Button dashicon="trash">
    <ScreenReaderText>Trash</ScreenReaderText>
  </Button>{' '}
  The button has a label of "trash" read by screen readers but it is hidden
</Paragraph>
```
