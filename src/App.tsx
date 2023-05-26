import React, { useEffect, useState } from "react";
import useDebounce from "./hooks/useDebounce";

import Loader from "../src/loader.gif";
import "./App.css";
import SuggestionItem from "./components/SuggestionItem";

const API_URL = "https://dummyjson.com/products/search";

export type Product = {
  id: number;
  title: string;
  description: string;
  thumbnail: string;
};

const App = () => {
  const [searchTerm, setSearchTerm] = useState<string>("");
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [suggestions, setSuggestions] = useState<Product[]>([]);
  const debouncedSearch = useDebounce(searchTerm, 500);

  const handleInputChange = async (event: any) => {
    const term = event.target.value;
    setSearchTerm(term);
  };

  const fetchData = async () => {
    if (!debouncedSearch) {
      setSuggestions([]);
      return;
    }

    setIsLoading(true);

    const response = await fetch(
      `${API_URL}?q=${debouncedSearch}&select=title,description,thumbnail`
    );
    const { products } = await response.json();
    setSuggestions(products);
    setIsLoading(false);
  };

  useEffect(() => {
    fetchData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [debouncedSearch]);

  return (
    <div className="search-container">
      {isLoading && (
        <img src={Loader} alt="loader" width={80} className="loader" />
      )}
      <div className="search">
        <input
          type="text"
          placeholder="Product name ex: Samsung, phone, etc..."
          value={searchTerm}
          onChange={handleInputChange}
          className="search-input"
        />

        {suggestions.map((item: Product) => {
          return <SuggestionItem {...{ item, searchTerm: debouncedSearch }} />;
        })}
      </div>
    </div>
  );
};

export default App;
