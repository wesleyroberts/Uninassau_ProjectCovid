export function GetByLocation(location) {
  let arraylist = [];
  location.forEach(element => {
     fetch(
      `http://localhost:8080/data/location/${element}`,
    { method: "GET" }
    )
  .then((res) => res.json())
  .then((data) => arraylist.push(data));
  });
  return arraylist;
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