import { Stuff } from '@prisma/client';

/* Renders a single row in the List Stuff table. See list/page.tsx. */
const StuffItemAdmin = ({ name, quantity, condition, value, owner, id }: Stuff) => (
  <tr>
    <td>{name}</td>
    <td>{quantity}</td>
    <td>{condition}</td>
    <td>{value}</td>
    <td>{owner}</td>
    <td>
      <a href={`/edit/${id}`}>Edit</a>
    </td>
  </tr>
);

export default StuffItemAdmin;
