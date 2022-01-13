import Layout from './components/Layout/Layout';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import NewsPage from './pages/NewsPage/NewsPage';
import NewsFormPage from './pages/NewsFormPage/NewsFormPage';
import RequireAuth from './components/RequireAuth/RequireAuth';

function App() {
  return (
    <BrowserRouter>
      <Layout>
        <Routes>
          <Route path="/" exact element={<NewsPage />} />
          <Route
            path="/new-article"
            element={
              <RequireAuth>
                <NewsPage />
              </RequireAuth>
            }
          />
        </Routes>
      </Layout>
    </BrowserRouter>
  );
}

export default App;
