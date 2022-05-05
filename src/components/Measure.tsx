import React from "react";

type MeasureProps = {
  name: string;
  value: React.ReactNode;
  unit?: string;
  color: string;
};

export function Measure({ name, unit, value, color }: MeasureProps): JSX.Element | null {
  return (
    <div className="Measure" style={{ color: color }}>
      <div className="Measure--value">
        <span>
          {value}
          {unit && <span className="Measure--unit">{unit}</span>}
        </span>
      </div>
      <div className="Measure--name">{name}</div>
    </div>
  );
}
