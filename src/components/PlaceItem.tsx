type PlaceItemProps = {
  onClick: () => void;
  name: string;
  country?: string;
  country_code?: string;
  action?: React.ReactNode | null;
  active?: boolean;
};

export function PlaceItem({
  onClick,
  name,
  country,
  country_code,
  action = null,
  active = false,
}: PlaceItemProps): JSX.Element | null {
  return (
    <li className={"PlaceItem" + (active ? " active" : "")} onClick={onClick}>
      {country_code ? (
        <img
          src={`https://open-meteo.com/images/country-flags/${country_code.toLowerCase()}.svg`}
          style={{ width: 32 }}
          alt={`${country} flag`}
        />
      ) : (
        <div
          style={{
            width: 32,
            height: 32,
            borderRadius: "999px",
            background: "#cbd5e1",
          }}
        ></div>
      )}
      <div className="PlaceItem--name">
        <span>{name}</span>
        {country && <span className="PlaceItem--country">{country}</span>}
      </div>
      {action}
    </li>
  );
}
