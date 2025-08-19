import "./Styles.css";
import Portfolio from './components/Portfolio';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

function App() {
  const appRouter = createBrowserRouter(
    [
      {
        path: "/",
        element: <Portfolio />,
      },
    ],
    {
      basename: "/portfolio", 
    }
  );

  return <RouterProvider router={appRouter} />;
}

export default App;
