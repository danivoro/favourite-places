import "./Article.css";

interface ArticleProps {
  title: string
  placeName: string
  countryName: string
  image: URL
  location: URL
  description: string
}

function Article(props: ArticleProps): JSX.Element {
  return (
    <div className="article">
      <h1>This is about: {props.placeName}</h1>
      <h1>{props.placeName} is located in the country of {props.countryName}</h1>
      <p>{props.description}</p>
    </div>
  );
}

export default Article;
