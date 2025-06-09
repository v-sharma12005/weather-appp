//This Function Converts Wind direction given in Degrees.

export const getWindDirection = (deg) => {
  if (deg > 337.5 || deg <= 22.5) return "N";
  if (deg > 22.5 && deg <= 67.5) return "NE";
  if (deg > 67.5 && deg <= 112.5) return "E";
  if (deg > 112.5 && deg <= 157.5) return "SE";
  if (deg > 157.5 && deg <= 202.5) return "S";
  if (deg > 202.5 && deg <= 247.5) return "SW";
  if (deg > 247.5 && deg <= 292.5) return "W";
  if (deg > 292.5 && deg <= 337.5) return "NW";
};

//This Function Checks And return Humidity Levels
export const getHumidityValue = (humidity) => {
  if (humidity < 30) return "Low";
  if (humidity < 60) return "Moderate";
  return "High";
};

//This Function Converts Meters To kilometers
export const getVisibiltyValue = (visibility) => {
  const km = visibility / 1000;
  return `${km.toFixed(1)} km`;
};

//This Function Converts Celsius To Fahrenheit Upto 1 Decimal Place
export const convertTemperature = (temp, unit) => {
  if (typeof temp !== "number" || isNaN(temp)) return "--";
  if (unit === "F") {
    return ((temp * 9) / 5 + 32).toFixed(1);
  }
  return temp.toFixed(1);
};
