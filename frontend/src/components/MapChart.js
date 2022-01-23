import React, { memo } from "react";
import {
  ComposableMap,
  Geographies,
  Geography
} from "react-simple-maps";
import { useNavigate } from "react-router-dom";

const geoUrl = "https://piwodlaiwo.github.io/topojson//world-continents.json";

const MapChart = ({ setTooltipContent }) => {
  let navigate = useNavigate();
  return (
    <>
      <ComposableMap data-tip="" projectionConfig={{ scale: 150 }}>
          <Geographies geography={geoUrl}>
            {({ geographies }) =>
              geographies.map(geo => (
                <Geography
                  key={geo.rsmKey}
                  geography={geo}
                  onMouseEnter={() => {
                    const NAME = geo.properties.continent;
                    setTooltipContent(`${NAME}`);
                  }}
                  onMouseLeave={() => {
                    setTooltipContent("");
                  }}
                  onClick={() => {navigate("/"+ geo.properties.continent)}}
                  style={{
                    default: {
                      fill: "#D6D6DA",
                      outline: "none"
                    },
                    hover: {
                      fill: "#F53",
                      outline: "none"
                    },
                    pressed: {
                      fill: "#E42",
                      outline: "none"   
                    }
                  }}
                />
              ))
            }
          </Geographies>
      </ComposableMap>
    </>
  );
};

export default memo(MapChart);