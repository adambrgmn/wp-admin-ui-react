Use `ButtonGroup` to group buttons together.

```js static
import { ButtonGroup, Button } from 'wp-admin-ui-react';

const Group = () => (
  <ButtonGroup>
    <Button>Action 1</Button>
    <Button>Action 2</Button>
    <Button>Action 3</Button>
  </ButtonGroup>
);
```

### Examples

```js
<ButtonGroup>
  <Button>Action 1</Button>
  <Button>Action 2</Button>
  <Button modifiers={['primary']}>Action 3</Button>
</ButtonGroup>
```
