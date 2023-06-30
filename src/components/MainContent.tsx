import Article from "../components/Article";
import "./MainContent.css";

function MainContent(): JSX.Element {
  return (
    <main>
      <h1>These are the places I want to visit at some point in my life.</h1>
      <Article
        title="The city of Obama"
        placeName="Honolulu"
        countryName="the USA"
        image="https://a.cdn-hotels.com/gdcs/production121/d137/d4030d17-700f-4fd1-9c05-4b1742c7a6c3.jpg?impolicy=fcrop&w=800&h=533&q=medium"
        location="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d59473.22684394872!2d-157.8653447036317!3d21.307986302370036!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x7c00183b8cc3464d%3A0x4b28f55ff3a7976c!2sHonolulu%2C%20HI%2C%20USA!5e0!3m2!1sen!2ses!4v1688069825492!5m2!1sen!2ses"
        description="Obama was born here. Cool place, right?"
      />
      <Article
        title="The golden state"
        placeName="California"
        countryName="the USA"
        image="https://www.celebritycruises.com/blog/content/uploads/2022/07/what-is-california-known-for-the-golden-gate-bridge-hero.jpg"
        location="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d6512033.69056511!2d-124.606160265763!3d37.15973839553765!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x808fb9fe5f285e3d%3A0x8b5109a227086f55!2sCalifornia%2C%20USA!5e0!3m2!1sen!2ses!4v1688123202875!5m2!1sen!2ses"
        description="Silicon Valley, Goden Gate, Hollywood. So much to visit!"
      />
      <Article
        title="Exploring the City of Lights"
        placeName="Paris"
        countryName="France"
        image="https://www.planetware.com/photos-large/F/france-paris-eiffel-tower.jpg"
        location="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d10424.98334233451!2d2.294481805246982!3d48.85885848079359!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47e66e1f06e2b70d%3A0x40b82c3688c9460!2sParis%2C%20France!5e0!3m2!1sen!2sus!4v1688070805434!5m2!1sen!2sus"
        description="Discover the charm and romance of the City of Lights, from the Eiffel Tower to the Louvre."
      />

      <Article
        title="The Ancient Wonders of Rome"
        placeName="Rome"
        countryName="Italy"
        image="https://www.planetware.com/photos-large/I/italy-rome-colosseum.jpg"
        location="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d117199.4851563307!2d12.492230425364344!3d41.902783501216134!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x132f61921059c44f%3A0x9ee4a5f190751ed!2sRome%2C%20Metropolitan%20City%20of%20Rome%2C%20Italy!5e0!3m2!1sen!2sus!4v1688070856824!5m2!1sen!2sus"
        description="Step back in time and explore the ancient ruins and historical treasures of Rome."
      />

      <Article
        title="Serenity in the Land of the Rising Sun"
        placeName="Kyoto"
        countryName="Japan"
        image="https://www.planetware.com/photos-large/J/japan-kyoto-kinkaku-ji-temple.jpg"
        location="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3274.1502700200363!2d135.7680294152365!3d35.01163658035873!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x60010f975ee52bcb%3A0x4eaf464c34f117d1!2sKyoto%2C%20Japan!5e0!3m2!1sen!2sus!4v1688070905680!5m2!1sen!2sus"
        description="Immerse yourself in the tranquility of Kyoto, home to stunning temples, gardens, and traditional culture."
      />

      <Article
        title="A Taste of History in Athens"
        placeName="Athens"
        countryName="Greece"
        image="https://www.planetware.com/photos-large/GR/greece-athens-parthenon.jpg"
        location="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d31424.279281197987!2d23.72693866632199!3d37.9839172121003!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14a1bd62f8715c77%3A0xa723f94579f5e8b4!2sAthens%2C%20Greece!5e0!3m2!1sen!2sus!4v1688070953735!5m2!1sen!2sus"
        description="Delve into ancient history as you explore the Acropolis and other historic sites in Athens."
      />

      <Article
        title="Adventures in the Land Down Under"
        placeName="Sydney"
        countryName="Australia"
        image="https://www.planetware.com/photos-large/AUS/australia-sydney-opera-house.jpg"
        location="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d26556.964593187287!2d151.20931530049204!3d-33.86514326045983!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6b12ae31aebf8259%3A0x5aa6288730a9c192!2sSydney%20NSW%2C%20Australia!5e0!3m2!1sen!2sus!4v1688071002801!5m2!1sen!2sus"
        description="Embark on thrilling adventures and soak in the beauty of Sydney, from the Opera House to Bondi Beach."
      />

      <Article
        title="Jungle Exploration in the Amazon"
        placeName="Amazon Rainforest"
        countryName="Brazil"
        image="https://www.planetware.com/photos-large/BRA/brazil-amazon-rainforest.jpg"
        location="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d195238.71833007056!2d-62.18518594824637!3d-3.4653055063376536!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x916312f81ab3a97b%3A0x2fd8a4e6a72406f6!2sAmazon%20Rainforest!5e0!3m2!1sen!2sus!4v1688071046737!5m2!1sen!2sus"
        description="Embark on an unforgettable adventure deep into the heart of the Amazon rainforest."
      />
    </main>
  );
}

export default MainContent;
