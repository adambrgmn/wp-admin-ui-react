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

| Name   | Required | Default | Description    |
| :----- | :------- | :------ | :------------- |
| `href` | x        | -       | Url to link to |
