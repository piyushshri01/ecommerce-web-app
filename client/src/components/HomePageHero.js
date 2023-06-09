import "./HomePageHero.css";
import { Link } from "react-router-dom";
export const HomePageHero = () => {
  return (
    <div className="hero">
      <div className="hero__text">
        <p>Buy Best Mobile Here at the lowest Cost.</p>
        <Link to="/shop" className="hero__link">
          Shop Now
        </Link>
      </div>
    </div>
  );
};
