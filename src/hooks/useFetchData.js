import { useState, useEffect } from 'react';

const useFetchData = (url) => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        const response = await fetch(url);
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        const text = await response.text();
        const parsedData = parseCSV(text);

        if (!parsedData.length || !parsedData[0]['Model Year'] || !parsedData[0]['Electric Range']) {
          throw new Error('Parsed data does not contain the required fields');
        }
        
        setData(parsedData);
      } catch (error) {
        console.error('Error fetching data:', error);
        setError(new Error('Failed to fetch data: ' + error.message));
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [url]);

  return { data, loading, error };
};

const parseCSV = (text) => {
  const lines = text.split('\n').filter(line => line.trim() !== '');
  const headers = lines[0].split(',');
  return lines.slice(1).map(line => {
    const values = line.split(',');
    return headers.reduce((acc, header, index) => {
      acc[header.trim()] = values[index]?.trim();
      return acc;
    }, {});
  });
};

export default useFetchData;
