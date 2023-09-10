import "./about.css";
export const AboutUs = () => {
  window.scrollTo({ top: 0, behavior: "smooth" });
  return (
    <div className="about-us">
      <div className="banner-about">
        <p>About Us</p>
      </div>
      <div className="gaming_info">
        <h1 className="tittle_search">Hand-picking the best in gaming</h1>
        <p className="selection-text">
          A selection of great games, from modern hits to all-time classics,
          that you really shouldn't miss.
        </p>
        <div className="gaming_box">
          <div>
            <h3 className="tittle_search">A curated selection of games</h3>
          </div>
          <div>
            <p>
              {" "}
              From exceptional AAAs, unique indies to the best of classic
              gaming. Every game is here because we chose it for you.
            </p>
          </div>
        </div>
        <div className="gaming_box">
          <div>
            <h3 className="tittle_search">Feeding your inner collector</h3>
          </div>
          <div>
            <p>
              {" "}
              Offering games with as many goodies as possible is the E-GAMES
              way - even if it means exploring our long forgotten basements and
              attics.
            </p>
          </div>
        </div>
        <div className="gaming_box">
          <div>
            <h3 className="tittle_search">Respecting game creators</h3>
          </div>
          <div>
            <p>
              {" "}
              When you're with us, you can be sure that all games are
              legitimate, and your purchases support rightful owners and
              creators.
            </p>
          </div>
        </div>
        <div className="gaming_box">
          <div>
            <h3 className="tittle_search">
              Upgrading classics for present-day
            </h3>
          </div>
          <div>
            <p>
              {" "}
              Even if the game is older than you are, we test it thoroughly, fix
              all the bugs, and apply patches so it runs flawlessly on your
              next-gen PC and on modern OSs.
            </p>
          </div>
        </div>
        <div className="gaming_box">
          <h3 className="tittle_search">Every game deserves to shine</h3>
          <p>
            {" "}
            As much attention we're giving to pick great games, the same goes to
            highlighting them on S-GAMES - treating each release as a
            celebration.
          </p>
        </div>
      </div>

      <div className="gaming_info">
        <h1 className="tittle_customer">Customer-centric approach</h1>
        <p className="selection-text">
          Delivering a user-friendly support enriched with additional customer
          benefits.
        </p>
        <div className="gaming_box">
          <h3 className="tittle_customer">Stellar support</h3>
          <p>
            {" "}
            We bring you the comfort in knowing that anytime you need help,
            we're right here for you. Our customer support team works in-house
            round-the-clock solving all games-related issues.
          </p>
        </div>
        <div className="gaming_box">
          <h3 className="tittle_customer">No risk, full refunds</h3>
          <p>
            {" "}
            Feel safe about your purchase - get your money back if a game
            doesn't work for you, cancel pre-orders, and get a refund on games
            in development within 30 days of purchase - no strings attached.
          </p>
        </div>
        <div className="gaming_box">
          <h3 className="tittle_customer">Team contact</h3>
          <p>
            {" "}
            Have a question, need help or you just want to talk about great PC
            games? Reach out on GAMEOVER forums, tweet at us or drop us a
            message on Facebook, and we'll get back to you.
          </p>
        </div>
      </div>     
    </div>
  );
};
