Description...

```js static
import { Notice } from 'wp-admin-ui-react';

const Notification = () => <Notice />;
```

### Example

```js
<Notice>Something to take note about</Notice>
```

```js
<Notice modifiers={['success']}>Something to be happy about</Notice>
```

```js
<Notice modifiers={['warning']}>Something to be a bit worried about</Notice>
```

```js
<Notice modifiers={['error']}>Something to be afraid of!</Notice>
```

```js
initialState = { hide: false };
<Notice modifiers={['error', 'large']} hide={state.hide} onClick={() => setState({ hide: true })}>A larger notification</Notice>
```
