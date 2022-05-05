import { useState } from "react";
import { Header } from "./Header";
import { Menu } from "./Menu";
import { Search } from "./Search";
import { Weather } from "./Weather";

export type Place = {
  id: number;
  name: string;
  latitude: number;
  longitude: number;
  timezone: string;

  country?: string;
  country_code?: string;
};

export function App() {
  const [places, setPlaces] = useState<Place[]>([]);
  const [selectedPlaceId, setSelectedPlaceId] = useState<
    undefined | number | null
  >(undefined);

  const selectedPlace = selectedPlaceId
    ? places.find((p) => p.id === selectedPlaceId) ?? null
    : null;

  const onToggle = (place: Place) => {
    setPlaces((prev) => {
      const exists = prev.find((p) => p.id === place.id);
      if (exists) {
        return prev.filter((p) => p.id !== place.id);
      }
      return [...prev, place];
    });
  };

  return (
    <div className="App">
      <div className="App--inner">
        <Header />
        <div className="App--content">
          <Menu
            places={places}
            selectedPlaceId={selectedPlaceId}
            onPlaceClick={(placeId) => setSelectedPlaceId(placeId)}
          />
          <main>
            {selectedPlaceId === undefined ? null : selectedPlace === null ? (
              <Search places={places} onToggle={onToggle} />
            ) : (
              <Weather place={selectedPlace} />
            )}
          </main>
        </div>
      </div>
    </div>
  );
}
