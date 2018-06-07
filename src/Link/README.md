# Link

A standard <a>-link component.

## Usage

```jsx
import { Link } from 'wp-admin-ui-react';

const ExternalLink = ({ href, title }) => (
  <Link href={href}>{title} (external)</Link>
);
```

## Props

Props available on the `<Link />`-component, the props below are the only required ones, but any other props will be passed down:

| Name        | Required | Default | Description                                           |
| :---------- | :------- | :------ | :---------------------------------------------------- |
| `href`      | x        | -       | Url to link to                                        |
| `modifiers` | -        | -       | Adds additional styling (see [Modifiers](#modifiers)) |

## Modifiers

Use modifiers to change the look and feel of the `<Link />`-component. See [https://github.com/adambrgmn/wp-admin-ui-react#modifiers](https://github.com/adambrgmn/wp-admin-ui-react#modifiers) for documentation about how to use the modifiers.

| Modifier | Description                                                        |
| :------- | :----------------------------------------------------------------- |
| `button` | Make link look like a button (used as action button with PageTitle) |