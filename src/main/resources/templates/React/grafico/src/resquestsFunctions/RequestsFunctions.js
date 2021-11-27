export function GET(location) {
    return fetch(
        `http://localhost:8080/data/location/${location}`,
      { method: "GET" }
    ).then((res) => res.json());
  }