import { activeProfileInfo, publicCards } from "../../extra";
import { Account } from "../components/Account";
import { Card } from "../components/Card";

const Feed = () => {
  return (
    <section className="feed">
      <Account profileInfo={activeProfileInfo} />

      <div className="feed__cards">
        {publicCards.map((card) => (
          <Card info={card} key={card.title} noShare={true} />
        ))}
      </div>
    </section>
  );
};

export default Feed;
