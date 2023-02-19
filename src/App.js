import { Navigate, Route, Routes, useLocation } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Routers from './components/Routers/Routers';
import { useLayoutEffect } from 'react';
import DashboardHomeV1 from './components/pages/DashboardV1/DashboardHomeV1/DashboardHomeV1';
import NestedRoute from './components/pages/DashboardV1/NestedRoute/NestedRoute';
import NotFound from './components/pages/NotFound/NotFound';

function App() {

  const Wrapper = ({ children }) => {
    const location = useLocation();
    useLayoutEffect(() => {
      document.documentElement.scrollTo(0, 0);
    }, [location.pathname]);
    return children
  }

  return (
    <div className="App">
      {/* <Routes>
        <Route path="/userDashboardHomeV1/*" element={<DashboardHomeV1 />} />
        <Route path='*' exact={true} element={<NotFound />}>
        </Route>
      </Routes> */}
      {/* <Route path="/404" element={<NotFound />} /> */}
      {/* <Route path="*" element={<Navigate to="/404" replace />} /> */}
      <Wrapper>
        <Routers />
        {/* <NestedRoute /> */}
      </Wrapper>
    </div>
  );
}

export default App;

