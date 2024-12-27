import QueryString from "qs";

const BASE_URL = "http://localhost:6500/";

const serverFetch = async (
  endpoint,
  query,
  cache = { cache: "force-cache" }
) => {
  console.log(QueryString.stringify(query));
  let url = BASE_URL;
  if (endpoint) url += endpoint;
  if (query) url += `?${QueryString.stringify(query)}`;

  try {
    const res = await fetch(`${url}`, cache);
    const json = await res.json();
    return json;
  } catch (error) {
    console.log(error);
    return false;
  }
};

export { serverFetch };
