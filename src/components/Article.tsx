import "./Article.css";

interface ArticleProps {
  title: string
  placeName: string
  countryName: string
  image: string
  location: string
  description: string
}

function Article(props: ArticleProps): JSX.Element {
  return (
    <div className="article">
      <h1>This is about: {props.placeName}</h1>
      <h1>{props.placeName} is located in {props.countryName}</h1>
      <p>{props.description}</p>
      <p><img width="600" height="450" src={props.image}/></p>
      <iframe
        width="600"
        height="450"
        // frameborder="0"
        // style="border:0"
        src={props.location}
        // allowfullscreen
      ></iframe>
    </div>
  );
}

export default Article;
