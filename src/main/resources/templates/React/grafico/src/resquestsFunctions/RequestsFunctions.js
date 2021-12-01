export function GetByLocation(location) {
  return fetch(`http://localhost:8080/data/location/${location}`, {
    method: "GET",
  }).then((res) => res.json());
}

export function GETAllCountries() {
  return fetch(`http://localhost:8080/data/countries`, { method: "GET" }).then(
    (res) => res.json()
  );
}

export function GetByContinent(Continent) {
  return fetch(`http://localhost:8080/data/continent/${Continent}`, {
    method: "GET",
  }).then((res) => res.json());
}

export function GetAllContinentsNames() {
  return fetch(`http://localhost:8080/data/continets`, {
    method: "GET",
  }).then((res) => res.json());
}
