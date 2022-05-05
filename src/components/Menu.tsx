import { PlusCircle } from "phosphor-react";
import { Place } from "./App";
import { PlaceItem } from "./PlaceItem";

type MenuProps = {
  places: Place[];
  onPlaceClick: (placeId: number | null) => void;
  selectedPlaceId: number | undefined | null;
};

export function Menu({ places, onPlaceClick, selectedPlaceId }: MenuProps): JSX.Element | null {
  return (
    <nav className="Menu">
      <ul className="Menu--items">
        {places.map((place) => {
          return (
            <PlaceItem
              key={place.id}
              country={place.country}
              country_code={place.country_code}
              name={place.name}
              onClick={() => onPlaceClick(place.id)}
              active={selectedPlaceId === place.id}
            />
          );
        })}
        <li className={`Menu--item ${selectedPlaceId === null ? "active" : ""}`} onClick={() => onPlaceClick(null)}>
          <PlusCircle aria-hidden={true} size={32} />
          <button>Ajouter un lieu</button>
        </li>
      </ul>
      {places.length === 0 && <p>Aucun lieu</p>}
    </nav>
  );
}
