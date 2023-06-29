import './Article.css'

interface Article {
    title: string,
    placeName: string,
    countryName: string,
    image: URL,
    location: URL,
    description: string,
}

function Article(props: Article): JSX.Element {
  return (
    <div className="article">
      <h1>This is a sample article: Hanaloulou</h1>
      <p>This is the body of the article.</p>
    </div>
  );
}

export default Article;
