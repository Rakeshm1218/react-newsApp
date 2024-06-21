# News App

This is a simple News App that utilizes the NewsAPI from [newsdata.io](https://newsdata.io/) to fetch news articles. The app allows users to search for news articles, filter by category, and paginate through the results.

## Features

- **Search**: Search for news articles using keywords.
- **Filter by Category**: Filter news articles by category (e.g., World, Technology, Sports).
- **Pagination**: Navigate through paginated results.

## Technologies Used

- React
- Redux Toolkit (including RTK Query for API calls)
- React Router
- Tailwind CSS (for styling)
- Vite (for development server)

## Setup Instructions

1. Clone the repository:
   git clone [clone](https://github.com/Rakeshm1218/react-newsApp.git)
   cd news-app
   npm install
   npm run dev

## Note

Since it is a free subscription, only 10 articles per request are allowed. Therefore, the app paginates the results, and each page displays up to 6 articles. Consequently, the app supports a maximum of 2 pages of results.
