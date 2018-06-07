# Button

This is the default button used across the WordPress Admin UI.

## Usage

```jsx
import { Button } from 'wp-admin-ui-react';

const Btn = ({ label, onClick }) => <Button onClick={onClick}>{label}</Button>;
```

Or with the button group:

```jsx
import {Button, ButtonGroup} from 'wp-admin-ui-react';

const Btns = ({ labels, onClick }) => (
  <ButtonGroup>
    {labels.map(label => <Button key={label} modifiers={['primary']} onClick={onClick}>{label}</Button>)}
  </ButtonGroup>
)
```

## Props

Props available on the `<Button />`-component. The props available here are those that actually affect the button, but any other props will be sent down to the component and handled by [`styled-components`](https://www.styled-components.com/)

| Name        | Required | Default | Description                                           |
| :---------- | :------- | :------ | :---------------------------------------------------- |
| `modifiers` | -        | -       | Adds additional styling (see [Modifiers](#modifiers)) |
| `disabled`  | -        | false   | Disable button                                        |
| `dashicon`  | -        | -       | Add an icon to the left of your button label          |
| `onClick`   | -        | -       | Click handler                                         |
| `children`  | x        | -       | Child elements of the button                          |

*The `<ButtonGroup />`-component doesn't accept any props, but props given to it will be handled by styled-components.*

## Modifiers

Use modifiers to change the look and feel of the `<Button />`-component. See [https://github.com/adambrgmn/wp-admin-ui-react#modifiers](https://github.com/adambrgmn/wp-admin-ui-react#modifiers) for documentation about how to use the modifiers.

| Modifier       | Description                          |
| :------------- | :----------------------------------- |
| `large`        | Make button larger                   |
| `small`        | Make button smaller                  |
| `hero`         | Make button extra large              |
| `secondary`    | Use default button styling           |
| `primary`      | Use primary button styling           |
| `link`         | Make button look like a link         |
| `link-error`   | Make button look like an error link  |
| `link-warning` | Make button look like a warning link |

*The `<ButtonGroup />`-component doesn't accept any modifiers, but props given to it will be handled by styled-components.*
