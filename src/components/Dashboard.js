import React, { useState } from "react";
import { Line } from "react-chartjs-2";
import useFetchData from "../hooks/useFetchData";
import DataTable from "./DataTable";
import { FixedSizeList as List } from "react-window";
import "../styles/Dashboard.css";
import "../components/Chart.js";

const itemsPerPage = 100;

const Dashboard = () => {
  const { data, loading, error } = useFetchData(
    "/data-to-visualize/Electric_Vehicle_Population_Data.csv"
  );

  const [currentPage, setCurrentPage] = useState(1);
  const [filter, setFilter] = useState("");
  const [activeTab, setActiveTab] = useState("chart");

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error loading data: {error.message}</div>;
  if (!data || data.length === 0) return <div>No data available.</div>;

  const filteredData = data.filter((item) => {
    return Object.values(item).some((value) =>
      String(value).toLowerCase().includes(filter.toLowerCase())
    );
  });

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = filteredData.slice(indexOfFirstItem, indexOfLastItem);

  const labels = data.map((item) => item["Model Year"]);
  const electricRange = data.map((item) => {
    const range = parseInt(item["Electric Range"]);
    return isNaN(range) ? 0 : range;
  });

  const chartData = {
    labels,
    datasets: [
      {
        label: "Electric Range",
        data: electricRange,
        borderColor: "rgba(75,192,192,1)",
        backgroundColor: "rgba(75,192,192,0.2)",
      },
    ],
  };

  const headers = Object.keys(data[0]);
  return (
    <div className="dashboard">
      <h1>Electric Vehicle Dashboard</h1>

      <div className="tab-navigation">
        <button
          onClick={() => setActiveTab("chart")}
          className={activeTab === "chart" ? "active" : ""}
        >
          Chart
        </button>
        <button
          onClick={() => setActiveTab("table")}
          className={activeTab === "table" ? "active" : ""}
        >
          Data Table
        </button>
      </div>

      {activeTab === "chart" && (
        <>
          <Line data={chartData} />
          <input
            type="text"
            placeholder="Filter data..."
            value={filter}
            onChange={(e) => setFilter(e.target.value)}
          />
        </>
      )}

      {activeTab === "table" && (
        <>
          <h2>Data Table</h2>

          <DataTable headers={headers} data={currentItems} />

          <div>
            {Array.from(
              { length: Math.ceil(filteredData.length / itemsPerPage) },
              (_, index) => (
                <button key={index} onClick={() => setCurrentPage(index + 1)}>
                  {index + 1}
                </button>
              )
            )}
          </div>
        </>
      )}
    </div>
  );
};

export default Dashboard;
