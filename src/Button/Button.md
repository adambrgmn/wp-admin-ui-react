The `<Button />`-component is the base button used in a lot of places in the
WordPress admin area.

### Examples:

By using the modifier prop the buttons can get different types of styles

```js static
import { Button } from 'wp-admin-ui-react';

const Btn = () => <Button modifier={['modifier']}>Button</Button>;
```

```js
<Button>Normal</Button><br />
<Button modifiers={['large']}>Large</Button><br />
<Button modifiers={['small']}>Small</Button><br />
<Button modifiers={['hero']}>Hero</Button><br />
```

```js
<Button modifiers={['secondary']}>Secondary (same as default)</Button><br />
<Button modifiers={['primary']}>Primary</Button><br />
<Button modifiers={['primary', 'hero']}>Primary hero</Button><br />
```

```js
<Button modifiers={['link']}>Button as link</Button><br />
<Button modifiers={['link', 'link-delete']}>Button as link</Button><br />
```
