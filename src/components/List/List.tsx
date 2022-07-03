export const List = ({ data = [] }) => (
  <>
    {data?.length ? (
      <ul>
        {data.map((el) => (
          <li key={el}>{el}</li>
        ))}
      </ul>
    ) : null}
  </>
);
