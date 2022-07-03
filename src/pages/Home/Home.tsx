import { useState } from "react";
import { List } from "../../components/List";
import { Search } from "../../components/Search";
import { Tabs } from "../../components/Tabs";

import { Result } from "../../components/Result";

const mockData = ["/auth", "/error"];

export const Home = () => {
  const [searchValue, setSearch] = useState("");

  const handleSubmit = (search) => {
    setSearch(search);
  };

  return (
    <>
      Home
      <Search handleSubmit={handleSubmit} />
      <Result data={searchValue} />
      <List data={mockData} />
      <Tabs />
    </>
  );
};
