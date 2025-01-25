import Portfolio from './Portfolio';
import {createBrowserRouter,RouterProvider} from 'react-router-dom';
function App() {
  const appRouter = createBrowserRouter([
    {
      path:"/",
      element: <Portfolio />,
    }
  ])
  return (
    <div >
      <RouterProvider router={appRouter}>
        <Portfolio />
      </RouterProvider>
    </div>
  );
}

export default App;


