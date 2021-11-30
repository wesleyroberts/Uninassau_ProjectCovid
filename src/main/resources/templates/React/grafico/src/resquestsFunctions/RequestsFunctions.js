export function GetByLocation(location) {
    return fetch(`http://localhost:8080/data/location/${location}`,{ method: "GET" }).then((res) => res.json())

}

export function GETAllCountries() {
    return fetch(
        `http://localhost:8080/data/countries`,
      { method: "GET" }
    ).then((res) => res.json());
  }

  export function GetByContinent(Continent) {
    return fetch(
        `http://localhost:8080/data/location/${Continent}`,
      { method: "GET" }
    ).then((res) => res.json());
  }