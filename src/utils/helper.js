const flattenObject = (obj, delimiter = ".", prefix = "") => {
  const flattObject = Object.keys(obj).reduce((acc, k) => {
    const pre = prefix.length ? `${prefix}${delimiter}` : "";
    if (
      typeof obj[k] === "object" &&
      obj[k] !== null &&
      Object.keys(obj[k]).length > 0
    )
      Object.assign(acc, flattenObject(obj[k], delimiter, k));
    else acc[k] = obj[k];
    return acc;
  }, {});

  return flattObject;
};

const DateToIso = (date) => new Date(date).toISOString();

const dateComprator = (date1, date2) => {
  const [y1, m1, d1] = date1.split("-");
  const [y2, m2, d2] = date2.split("-");

  if (m1 > m2) return Math.abs(30 - +d2 + +d1);
  if (m1 < m2) return Math.abs(30 - +d1 + +d2);

  if (m1 === m2) return Math.abs(d1 - d2);
};
const dateSeparator = (dateTime) => {
  const [date, time] = dateTime.split("T");
  return { date, time };
};

export { flattenObject, DateToIso, dateSeparator, dateComprator };
