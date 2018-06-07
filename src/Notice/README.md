# Notice

A notification component

## Usage

```jsx
import { Notice } from 'wp-admin-ui-react';

const Messages = ({ messages, onRemove }) => (
  <div className="messages">
    {messages.map(({ message, type, id }) => (
      <Notice modifiers={[type]} onClick={() => onRemove(id)}>
        {message}
      </Notice>
    ))}
  </div>
);
```

## Props

Props available on the `<Notice />`-component:

| Name          | Required | Default    | Description                                                |
| :------------ | :------- | :--------- | :--------------------------------------------------------- |
| `dismissable` | -        | `true`     | If, or not, to show the dismiss-button                     |
| `hide`        | -        | `false`    | If, or not, to hide the notification                       |
| `onClick`     | -        | -          | Click event when clicking dismiss button                   |
| `modifiers`   | –        | `['info']` | Adds additional styling (see [Modifiers](#modifiers))      |
| `children     | -        | -          | The message to supply, can be anything renderable by React |

## Modifiers

Use modifiers to change the look and feel of the `<Notice />`-component. See [https://github.com/adambrgmn/wp-admin-ui-react#modifiers](https://github.com/adambrgmn/wp-admin-ui-react#modifiers) for documentation about how to use the modifiers.

| Modifier  | Description         |
| :-------- | :------------------ |
| `info`    | Blue notification   |
| `success` | Green notification  |
| `warning` | Yellow notification |
| `error`   | Red notification    |
