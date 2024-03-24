import { useState } from "react";
import { Button, Input } from "antd";
import "../components/input.css";

export const InputCityValue = ({ onSearch }) => {
  const [city, setCity] = useState("");

  const handleSearch = () => {
    onSearch(city);
    setCity("");
  };

  return (
    <div>
      <Input
        placeholder="Enter city name"
        className="input"
        type="text"
        value={city}
        onChange={(e) => setCity(e.target.value)}
      />
      <Button type="primary" onClick={handleSearch}>
        Search
      </Button>
    </div>
  );
};
