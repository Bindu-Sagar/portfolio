import './App.css';
import Portfolio from './components/Portfolio';
import { createBrowserRouter, RouterProvider } from 'react-router';

function App() {
  const appRouter = createBrowserRouter([
    {
      path: "/",
      element: <Portfolio/>
    }
      
  ]);
  return (
    <RouterProvider router={appRouter}>
      <Portfolio />
    </RouterProvider>
  );
  
}

export default App;
