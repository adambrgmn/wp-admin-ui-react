Table is the widefat table wich is the main style for tables in WordPress.

```js static
import { Table } from 'wp-admin-ui-react';

const Posts = () => (
  <Table striped>
    <thead>
      <tr>
        <th>Title</th>
        <th>Date</th>
        <th>Remove</th>
      </tr>
    </thead>

    <tbody>
      <tr>
        <th>
          <Link href="#">Hello world</Link>
        </th>
        <td>2018-01-01</td>
        <td>
          <Button dashicon="trash" />
        </td>
      </tr>
      <tr>
        <th>
          <Link href="#">Hello world 2</Link>
        </th>
        <td>2018-01-02</td>
        <td>
          <Button dashicon="trash" />
        </td>
      </tr>
      <tr>
        <th>
          <Link href="#">Hello world 3</Link>
        </th>
        <td>2018-01-03</td>
        <td>
          <Button dashicon="trash" />
        </td>
      </tr>
    </tbody>

    <tfoot>
      <tr>
        <th>Title</th>
        <th>Date</th>
        <th>Remove</th>
      </tr>
    </tfoot>
  </Table>
);
```

### Example

```js
<Table>
  <thead>
    <tr>
      <th>Title</th>
      <th>Date</th>
      <th>Remove</th>
    </tr>
  </thead>

  <tbody>
    <tr>
      <th>
        <Link href="#">Hello world</Link>
      </th>
      <td>2018-01-01</td>
      <td>
        <Button dashicon="trash" />
      </td>
    </tr>
    <tr>
      <th>
        <Link href="#">Hello world 2</Link>
      </th>
      <td>2018-01-02</td>
      <td>
        <Button dashicon="trash" />
      </td>
    </tr>
    <tr>
      <th>
        <Link href="#">Hello world 3</Link>
      </th>
      <td>2018-01-03</td>
      <td>
        <Button dashicon="trash" />
      </td>
    </tr>
  </tbody>

  <tfoot>
    <tr>
      <th>Title</th>
      <th>Date</th>
      <th>Remove</th>
    </tr>
  </tfoot>
</Table>
```

```js
<Table striped>
  <thead>
    <tr>
      <th>Title</th>
      <th>Date</th>
      <th>Remove</th>
    </tr>
  </thead>

  <tbody>
    <tr>
      <th>
        <Link href="#">Hello world</Link>
      </th>
      <td>2018-01-01</td>
      <td>
        <Button dashicon="trash" />
      </td>
    </tr>
    <tr>
      <th>
        <Link href="#">Hello world 2</Link>
      </th>
      <td>2018-01-02</td>
      <td>
        <Button dashicon="trash" />
      </td>
    </tr>
    <tr>
      <th>
        <Link href="#">Hello world 3</Link>
      </th>
      <td>2018-01-03</td>
      <td>
        <Button dashicon="trash" />
      </td>
    </tr>
  </tbody>

  <tfoot>
    <tr>
      <th>Title</th>
      <th>Date</th>
      <th>Remove</th>
    </tr>
  </tfoot>
</Table>
```

```js
<Table fixed striped>
  <thead>
    <tr>
      <th>Title</th>
      <th>Date</th>
      <th>Remove</th>
    </tr>
  </thead>

  <tbody>
    <tr>
      <th>
        <Link href="#">Hello world</Link>
      </th>
      <td>2018-01-01</td>
      <td>
        <Button dashicon="trash" />
      </td>
    </tr>
    <tr>
      <th>
        <Link href="#">Hello world 2</Link>
      </th>
      <td>2018-01-02</td>
      <td>
        <Button dashicon="trash" />
      </td>
    </tr>
    <tr>
      <th>
        <Link href="#">Hello world 3</Link>
      </th>
      <td>2018-01-03</td>
      <td>
        <Button dashicon="trash" />
      </td>
    </tr>
  </tbody>

  <tfoot>
    <tr>
      <th>Title</th>
      <th>Date</th>
      <th>Remove</th>
    </tr>
  </tfoot>
</Table>
```

```js
<Table striped hover>
  <thead>
    <tr>
      <th>Title</th>
      <th>Date</th>
      <th>Remove</th>
    </tr>
  </thead>

  <tbody>
    <tr>
      <th>
        <Link href="#">Hello world</Link>
      </th>
      <td>2018-01-01</td>
      <td>
        <Button dashicon="trash" />
      </td>
    </tr>
    <tr>
      <th>
        <Link href="#">Hello world 2</Link>
      </th>
      <td>2018-01-02</td>
      <td>
        <Button dashicon="trash" />
      </td>
    </tr>
    <tr>
      <th>
        <Link href="#">Hello world 3</Link>
      </th>
      <td>2018-01-03</td>
      <td>
        <Button dashicon="trash" />
      </td>
    </tr>
  </tbody>

  <tfoot>
    <tr>
      <th>Title</th>
      <th>Date</th>
      <th>Remove</th>
    </tr>
  </tfoot>
</Table>
```
