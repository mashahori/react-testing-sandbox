export const List = ({ data = [] }: { data: string[] }) => (
  <>
    {data?.length ? (
      <ul>
        {data.map((el) => (
          <li key={el}>
            <a href={el}>{el}</a>
          </li>
        ))}
      </ul>
    ) : null}
  </>
);
