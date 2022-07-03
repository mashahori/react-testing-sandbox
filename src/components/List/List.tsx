export const List = ({ data }) => (
  <ul>
    {data.map((el) => (
      <li key={el}>{el}</li>
    ))}
  </ul>
);
