# React Dashboard App ![Static Badge](https://img.shields.io/badge/InProgress-blue)

* This is an admin dashboard application with many charts and pages created using ReactJS, TailwindCSS, and Chakra UI
* It is based on [this tutorial](https://www.youtube.com/watch?v=jx5hdo50a2M&list=PL6QREj8te1P6wX9m5KnicnDVEucbOPsqR&index=13)

## Technical Highlights
### Tailwind CSS
* For basic installation and usage, see [this repo](https://github.com/3omdawy/react-tailwind-portfolio)
* The addition here is adding custom styles in TailwindCSS (e.g. background colors)
* To do this:
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
* The application state is stored using `useContext` hook in React. See `ContextProvider.js`

### Sidebar
* An elegant sidebar in React is added where the navigation is done using NavLink from `react-router-dom`. See `Sidebar.jsx`
* Responsive, closes automatically on small screens

### Navbar
* An elegant navbar in React is added using icons. See `Navbar.jsx`
