import cn from "classnames";
import { useState } from "react";
import { useMediaQuery } from "react-responsive";

interface Activity {
  view: number;
  like: number;
}

interface CardInfo {
  title: string;
  isShared: boolean;
  shareText: string;
  author: string;
  activity: Activity;
  text: string;
}

interface Props {
  info: CardInfo;
  noShare?: boolean;
}

export const Card: React.FC<Props> = ({ info, noShare }) => {
  const [isShared, setIsShared] = useState(info.isShared);
  const [isWindowShown, setIsWindowShown] = useState(false);

  const isDesktop = useMediaQuery({ minWidth: 1200 });

  const handleWindow = () => {
    if (!isDesktop) {
      setIsWindowShown(!isWindowShown);
    }
  };

  const handleShare = () => {
    setIsShared(!isShared);
  };

  return (
    <article
      className="card"
      onMouseEnter={() => setIsWindowShown(true)}
      onMouseLeave={() => setIsWindowShown(false)}
      onClick={handleWindow}
    >
      {isShared && (
        <div className="card__share">
          {!info.shareText && <div className="card__icon card__icon--share" />}

          <p className="card__share-text">
            {!info.shareText ? (
              <>Shared via weblink</>
            ) : (
              <>
                Shared to &nbsp;
                <span className="card__share-text--highlighted">
                  {info.shareText}
                </span>
              </>
            )}
          </p>
        </div>
      )}

      <p className="card__title">{info.title}</p>

      <div className="card__info">
        <div className="card__author">
          <div className="card__author-image" />

          <p className="card__author-name">{info.author}</p>
        </div>

        {!isShared && !noShare ? (
          <button
            className="card__info-share appear-animation"
            onClick={handleShare}
            aria-label="Share this post"
          >
            Share
          </button>
        ) : (
          <div className="card__activities appear-animation">
            {Object.entries(info.activity).map(([key, value]) => (
              <div className="card__activity" key={key}>
                <div className={`card__icon card__icon--${key}`} />

                <p className="card__activity-value">{value}</p>
              </div>
            ))}
          </div>
        )}
      </div>

      {isWindowShown && info.text && (
        <article
          className={cn("card__window", {
            "window-shown": isWindowShown,
          })}
        >
          {info.text}
        </article>
      )}
    </article>
  );
};
