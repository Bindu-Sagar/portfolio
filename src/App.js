import './App.css';
import Portfolio from './components/Portfolio';
import { createBrowserRouter, RouterProvider } from 'react-router';

function App() {
  const appRouter = createBrowserRouter(
    [
      {
        path: "/",
        element: <Portfolio />,
      },
    ],
    {
      basename: "/portfolio", // ✅ This is the key for GitHub Pages
    }
  );

  return <RouterProvider router={appRouter} />;
}

export default App;
