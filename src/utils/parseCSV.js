const parseCSV = (data) => {
  const rows = data
    .split("\n")
    .map((row) => row.split(",").map((cell) => cell.trim()));
  const headers = rows[0];
  return rows.slice(1).reduce((acc, row) => {
    if (row.length === headers.length) {
      const obj = row.reduce((acc, curr, index) => {
        acc[headers[index]] = curr;
        return acc;
      }, {});
      acc.push(obj);
    }
    return acc;
  }, []);
};

export default parseCSV;
