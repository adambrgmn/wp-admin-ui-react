# Button

This is the default button used across the WordPress Admin UI.

## Usage

```js
import { Button } from 'wp-admin-ui-react';

const Btn = ({ label, onClick }) => <Button onClick={onClick}>{label}</Button>;
```

## Props

Props available on the `<Button />`-component

| Name        | Required | Default | Description                                           |
| :---------- | :------- | :------ | :---------------------------------------------------- |
| `modifiers` | -        | -       | Adds additional styling (see [Modifiers](#modifiers)) |
| `disabled`  | -        | false   | Disable button                                        |
| `dashicon`  | -        | -       | Add an icon to the left of your button label          |
| `onClick`   | -        | -       | Click handler                                         |
| `children`  | x        | -       | Child elements of the button                          |
