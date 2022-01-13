import { useNavigate } from 'react-router-dom';

import NewsForm from 'components/NewsForm/NewsForm';

function NewsFormPage() {
  const history = useNavigate();

  function handleAddArticle(articleData) {}

  return (
    <section>
      <h1>Add New Article</h1>
      <NewsForm onAddArcticle={handleAddArticle} />
    </section>
  );
}

export default NewsFormPage;
