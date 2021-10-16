import React, { useState } from "react";

import { api } from "../../services/api";

import "./styles.css";

interface ShortURLResponse {
  data: {
    short: string;
  };
}

interface HomeSearchProps {
  selectedTab: string;
}

export function HomeSearch({ selectedTab = "Empty" }: HomeSearchProps) {
  const [result, setResult] = useState<string>("");
  const [url, setUrl] = useState<string>("aqui seu resultado");

  const fetchUrl = async (url: string): Promise<void> => {
    const { data }: ShortURLResponse = await api.get("addURL", {
      params: {
        long: url
      }
    });

    setResult(data.short);
  };

  const handleChange = (event: React.FocusEvent<HTMLInputElement>): void => {
    setUrl(event.target.value);
  };

  return (
    <div className="App">
      <h1>template/HomeSearch/index.tsx</h1>
      <h4>
        digite a url da tab selecionado: <h3>{selectedTab}</h3>
      </h4>

      <input onChange={handleChange} />

      <button onClick={() => fetchUrl(url)}>Buscar</button>

      <div>URL encurtada: {`1pt.co/${result}`}</div>
    </div>
  );
}
