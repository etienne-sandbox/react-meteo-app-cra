import { useEffect, useState } from "react";
import { SearchResult, search } from "../logic/api";
import type { Place } from "./App";
import { MagnifyingGlass, MinusCircle, PlusCircle } from "phosphor-react";
import { PlaceItem } from "./PlaceItem";

type SearchProps = {
  places: Place[];
  onToggle: (place: Place) => void;
};

export function Search({ places, onToggle }: SearchProps): JSX.Element | null {
  const [query, setQuery] = useState("");
  const [data, setResults] = useState<SearchResult | null>(null);

  useEffect(() => {
    if (query.length === 0) {
      setResults(null);
      return;
    }
    const controller = new AbortController();
    search(query, controller.signal)
      .then((data) => setResults(data))
      .catch(() => setResults(null));
    return () => controller.abort();
  }, [query]);

  return (
    <div className="Search">
      <form
        onSubmit={(e) => {
          e.preventDefault();
          const data = Object.fromEntries(new FormData(e.currentTarget)) as {
            query: string;
          };
          setQuery(data.query);
        }}
      >
        <input
          name="query"
          type="text"
          placeholder="Rechercher un lieu"
          autoComplete="off"
        />
        <button type="submit">
          <MagnifyingGlass size={32} alt="Rechercher" role="img" />
        </button>
      </form>
      {data && (data.results === undefined || data.results?.length === 0) && (
        <p>Aucun résultat</p>
      )}
      <ul className="Search--results">
        {data &&
          data.results &&
          data.results.map((item) => {
            const active =
              places.find((place) => place.id === item.id) !== undefined;
            return (
              <PlaceItem
                key={item.id}
                onClick={() => onToggle(item)}
                country={item.country}
                country_code={item.country_code}
                name={item.name}
                active={active}
                action={
                  <button type="button">
                    {active ? (
                      <MinusCircle alt="Supprimer" role="img" size={32} />
                    ) : (
                      <PlusCircle alt="Ajouter" role="img" size={32} />
                    )}
                  </button>
                }
              />
            );
          })}
      </ul>
    </div>
  );
}
