# React Dashboard App ![Static Badge](https://img.shields.io/badge/InProgress-blue)

- This is an admin dashboard application with many charts and pages created using ReactJS, TailwindCSS, MUI X, and Chakra UI
- It is based on [this tutorial](https://www.youtube.com/watch?v=jx5hdo50a2M&list=PL6QREj8te1P6wX9m5KnicnDVEucbOPsqR&index=13), with using MUI X instead of SyncFusion (because MUI X is free)

## Technical Highlights

### Tailwind CSS

- For basic installation and usage, see [this repo](https://github.com/3omdawy/react-tailwind-portfolio)
- The addition here is adding custom styles in TailwindCSS (e.g. background colors)
- To do this:

1. In `tailwind.config.js` add the needed attributes under the `extend` section

```
    extend: {
      fontSize: {
        14: '14px',
      },
      backgroundColor: {
        'main-bg': '#FAFBFB',
        'main-dark-bg': '#20232A',
        'secondary-dark-bg': '#33373E',
        'light-gray': '#F7F7F7',
        'half-transparent': 'rgba(0, 0, 0, 0.5)',
      },
```

2. To use the style in the app, simply add the className (e.g. `bg-main-bg`)

### Context

- The application state is stored using `useContext` hook in React. See `ContextProvider.js`

### Charts

- Line chart: see [MUI X line chart](https://mui.com/x/react-charts/lines/#basics)

```
<LineChart
  xAxis={[{ data: SparklineAreaData.dataX }]}
  series={[
    {
      data: SparklineAreaData.dataY,
      color: "blue",
    },
  ]}
  width={300}
  height={200}
  id="line-sparkline"
/>
```

- Sparkline chart: see [MUI X Sparkline chart](https://mui.com/x/react-charts/sparkline) and `Ecommerce.jsx`
![image](https://github.com/user-attachments/assets/4fe4d95b-6f92-43a6-86a4-17a309bd5692)

```
<SparkLineChart
  xAxis={{ data: SparklineAreaData.dataX }}
  data={SparklineAreaData.dataY}
  width={250}
  height={120}
  colors={["blue"]}
  id="line-sparkline"
  showHighlight={true}
  showTooltip={true}
/>
```

- Stacked bar chart: see [MUI X Bar chart](https://mui.com/x/react-charts/bars) and `Ecommerce.jsx`
![image](https://github.com/user-attachments/assets/7b5a740a-f510-45df-9f5b-8b06a041d494)

```
<BarChart
  xAxis={[
    {
      scaleType: "band",
      data: myStackedChartData.dataX,
    },
  ]}
  series={[
    {
      data: myStackedChartData.dataY1,
      color: "#4b5563",
      stack: "A",
      label: "Expense",
    },
    {
      data: myStackedChartData.dataY2,
      color: "#4ade80",
      stack: "A",
      label: "Budget",
    },
  ]}
  width={320}
  height={360}
  id="stack-chart"
/>
```


### Sidebar

- An elegant sidebar in React is added where the navigation is done using NavLink from `react-router-dom`. See `Sidebar.jsx`
- Responsive, closes automatically on small screens
![image](https://github.com/user-attachments/assets/ddefbfdb-b6c3-4599-9aea-fd0384c27351)


### Navbar

- An elegant navbar in React is added using icons. See `Navbar.jsx`

![image](https://github.com/user-attachments/assets/c3de41bb-895c-4fd5-bdf2-d60acd16cab0)
