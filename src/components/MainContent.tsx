import Article from "../components/Article";
import "./MainContent.css"

function MainContent(): JSX.Element {
  return (
    <main>
      <h1>These are the places I want to visit at some point in my life.</h1>
      <Article
        title='The city of Obama'
        placeName='Honolulu'
        countryName='the USA'
        image="https://a.cdn-hotels.com/gdcs/production121/d137/d4030d17-700f-4fd1-9c05-4b1742c7a6c3.jpg?impolicy=fcrop&w=800&h=533&q=medium"
        location="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d59473.22684394872!2d-157.8653447036317!3d21.307986302370036!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x7c00183b8cc3464d%3A0x4b28f55ff3a7976c!2sHonolulu%2C%20HI%2C%20USA!5e0!3m2!1sen!2ses!4v1688069825492!5m2!1sen!2ses"
        description='Obama was born here. Cool place, right?'
      />
    </main>
  );
}

export default MainContent;
