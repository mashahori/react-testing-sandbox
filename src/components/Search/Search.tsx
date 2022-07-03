import { useState } from "react";

export const Search = ({ handleSubmit }) => {
  const [searchValue, setSearch] = useState("");

  const handleChange = (e) => {
    setSearch(e.target.value);
  };

  return (
    <form>
      <input
        type="search"
        name="search"
        value={searchValue}
        onChange={handleChange}
      />
      <button type="button" onClick={() => handleSubmit(searchValue)}>
        Поиск
      </button>
    </form>
  );
};
