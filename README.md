# MapUp - Analytics Dashboard Assessment

## Overview

The Electric Vehicle Dashboard Analytics provides a visual representation of electric vehicle data, allowing users to explore key metrics and insights related to electric vehicles. This project features interactive charts and a data table for in-depth analysis.

## Features

- **Dynamic Data Visualization**: Interactive line charts display electric range data by model year.
- **Data Filtering**: Users can filter the displayed data based on various criteria.
- **Tab Navigation**: Seamlessly switch between chart and data table views.
- **Responsive Design**: The dashboard is optimized for both desktop and mobile viewing.
- **Horizontal Scrolling**: Data tables support horizontal scrolling for better visibility of columns.

## Tech Stack

- **React**: JavaScript library for building user interfaces.
- **Chart.js**: Library for rendering charts and visualizations.
- **React Window**: Efficiently render large lists and tables.
- **CSS**: Custom styles for responsive design.

## Installation

1. Clone the repository:
 
   git clone https://github.com/Rekha-G05/analytics-dashboard-assessment.git

   cd analytics-dashboard-assessment
   
  
2. Install dependencies:
   npm install

3. Start the development server:
   npm start

4. Open your browser and go to `http://localhost:3000`.

## Usage

1. Upon loading, the dashboard fetches electric vehicle data from a CSV file.
2. Use the tab navigation to switch between the chart and the data table.
3. Utilize the filter input to narrow down displayed results in the data table.
4. Scroll horizontally in the data table to view all columns.

## CSV Data Format

The dashboard utilizes a CSV file with the following headers:

- VIN (1-10)
- County
- City
- State
- Postal Code
- Model Year
- Make
- Model
- Electric Vehicle Type
- Clean Alternative Fuel Vehicle (CAFV) Eligibility
- Electric Range
- Base MSRP
- Legislative District
- DOL Vehicle ID
- Vehicle Location
- Electric Utility
- 2020 Census Tract
