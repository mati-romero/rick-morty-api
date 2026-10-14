# Rick & Morty Explorer

A web application built with React that lets you explore the universe of Rick and Morty. Browse characters, discover episodes, and explore locations through an interactive interface powered by the [Rick and Morty API](https://rickandmortyapi.com/).

## Live Demo

**[Explore the application](https://mati-romero.github.io/rick-morty-api/)**

## Features

- **Character Explorer:** Browse characters from the Rick and Morty universe, view their images, and explore character information.
- **Episode Browser:** Discover episodes, view their titles and air dates, and explore the characters appearing in each episode.
- **Location Explorer:** Browse locations and discover information about their types and dimensions.
- **Character Details:** Open character details directly from an episode's character list.
- **Pagination:** Navigate through the available API results.
- **Interactive Interface:** Explore different sections through client-side routing.
- **Responsive Layout:** Display content using responsive grid layouts.
- **Loading Indicators:** Provide visual feedback while data is being retrieved.

## Tech Stack

| Technology | Purpose |
| --- | --- |
| React 19 | Component-based user interface |
| Vite 7 | Development server and production build |
| React Router 7 | Client-side navigation |
| Tailwind CSS 4 | Styling and responsive layouts |
| JavaScript ES Modules | Application logic |
| ESLint 9 | Code quality and linting |
| Rick and Morty API | Character, episode, and location data |

## Getting Started

Follow these steps to run the project locally.

### Prerequisites

Make sure you have installed:

- [Node.js](https://nodejs.org/)
- npm, which is included with Node.js
- Git

### Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/mati-romero/rick-morty-api.git
   ```

2. Navigate to the project directory:

   ```bash
   cd rick-morty-api
   ```

3. Install the dependencies:

   ```bash
   npm install
   ```

4. Start the development server:

   ```bash
   npm run dev
   ```

5. Open the local URL displayed in your terminal to explore the application.

## Available Scripts

| Command | Description |
| --- | --- |
| `npm run dev` | Starts the Vite development server |
| `npm run build` | Creates an optimized production build |
| `npm run preview` | Previews the production build locally |
| `npm run lint` | Runs ESLint to check the code |

## Application Sections

The application includes the following main routes:

| Route | Description |
| --- | --- |
| `/` | Home page with character previews and an introduction to the application |
| `/character` | Character explorer |
| `/episode` | Episode browser with expandable character lists |
| `/location` | Location browser |
| `/location/:name` | Location detail page |

## API Integration

This project uses the public [Rick and Morty API](https://rickandmortyapi.com/) to retrieve information about the series.

The application works with three main resources:

- **Characters:** Names, images, and other character information.
- **Episodes:** Episode titles, air dates, and associated characters.
- **Locations:** Location names, types, dimensions, and related information.

Explore the official API documentation for available endpoints, filters, and response formats.

[Read the Rick and Morty API documentation](https://rickandmortyapi.com/documentation)

## Project Structure

The application organizes its source code into pages, reusable components, services, utilities, and styles.

```text
rick-morty-api/
├── public/
│   └── Static assets
├── src/
│   ├── app/
│   │   ├── home/
│   │   ├── character/
│   │   ├── episode/
│   │   └── location/
│   ├── components/
│   ├── services/
│   ├── styles/
│   ├── utils/
│   └── main.jsx
├── index.html
├── package.json
├── vite.config.js
└── README.md
```

## Development

The project uses reusable React components and separates page rendering from API access through service modules. React Router handles navigation, while Tailwind CSS provides utility-based styling.

To check the code for linting issues, run:

```bash
npm run lint
```

To generate the production build, run:

```bash
npm run build
```

## Acknowledgments

- [Rick and Morty API](https://rickandmortyapi.com/) for providing the data used in this project.
- [React](https://react.dev/) for the user interface library.
- [Vite](https://vite.dev/) for the development environment and build tooling.

## Author

**Matías Romero**

- GitHub: [mati-romero](https://github.com/mati-romero)
- Portfolio: [matias-romero.rocketcat.com.ar](https://matias-romero.rocketcat.com.ar/)

---

Built as a web development project to explore React, API integration, reusable components, and client-side routing.
