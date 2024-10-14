import cn from "classnames";
import { Account } from "../components/Account";
import { activeProfileInfo, privateCards, publicCards } from "../../extra";
import { Card } from "../components/Card";
import { useState } from "react";

const Profile = () => {
  const [isPrivate, setIsPrivate] = useState(true);

  const handleSwitch = (type: string) => {
    if (type) {
      setIsPrivate(type === "private" ? true : false);
    }

    setIsPrivate(!isPrivate);
  };

  return (
    <section className="profile">
      <Account profileInfo={activeProfileInfo} />

      <div className="profile__cards">
        <div className="profile__toggle">
          <button
            className="profile__text"
            onClick={() => handleSwitch("public")}
            aria-label="Public posts"
          >
            Public
          </button>

          <button
            className={cn("profile__switch-outer", {
              "profile__switch-outer--public": !isPrivate,
            })}
            onClick={() => handleSwitch("")}
            aria-label="Toggle between private and public posts"
          >
            <div
              className={cn("profile__switch-inner", {
                "profile__switch-inner--public": !isPrivate,
              })}
            />
          </button>

          <button
            className="profile__text"
            onClick={() => handleSwitch("private")}
            aria-label="Private posts"
          >
            Private
          </button>
        </div>

        {!isPrivate
          ? publicCards.map((card) => (
              <Card info={card} key={card.title} noShare />
            ))
          : privateCards.map((card) => <Card info={card} key={card.title} />)}
      </div>
    </section>
  );
};

export default Profile;
