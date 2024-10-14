import cn from "classnames";
import { RefObject, startTransition, useEffect, useRef, useState } from "react";
import { useLocation, useNavigate } from "react-router";
import {
  activeProfileInfo,
  initialCard,
  navbarIcons,
  navbarTabs,
  Post,
  randomizeActivity,
  trimTitle,
} from "../../extra";
import { useAppDispatch } from "../../store/hooks";
import { actions as postActions } from "../../store/reducers/postsReducer";
import { Link } from "react-router-dom";

export const NavBar = () => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const [currentTab, setCurrentTab] = useState("feed");
  const [input, setInput] = useState("");
  const [isInputVisible, setIsInputVisible] = useState(false);
  const { pathname } = useLocation();

  const inputRef: RefObject<HTMLInputElement> = useRef(null);

  // To get random view and like count for new posts
  const view = randomizeActivity();
  const activity = {
    view,
    like: Math.floor(view / 2),
  };

  const addPost = (value: Post) => {
    dispatch(postActions.addPost(value));
  };

  const handlePostButton = () => {
    startTransition(() => {
      navigate("/discussions");
      setIsInputVisible(true);
    });
  };

  const handlePost = (title: string) => {
    addPost({ ...initialCard, title, activity });
  };

  const onInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInput(e.target.value);
  };

  const onForm = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    handlePost(trimTitle(input));
    setInput("");
    setIsInputVisible(false);

    window.scrollTo({
      top: document.body.scrollHeight,
      behavior: "smooth",
    });
  };

  useEffect(() => {
    setCurrentTab(pathname === "/" ? "feed" : pathname.slice(1));
  }, [pathname]);

  useEffect(() => {
    inputRef.current?.focus();
  }, [isInputVisible]);

  return (
    <header className="navbar">
      <div className="navbar__row">
        <Link to="/" className="navbar__logo" aria-label="Go to main page" />

        <div className="navbar__group">
          <div className="navbar__profile-group">
            <div className="navbar__profile">
              <p className="navbar__name">{activeProfileInfo.name}</p>

              <Link to="/profile" className="navbar__profile-link">
                <img
                  className="navbar__image"
                  src={activeProfileInfo.image}
                  alt="profile-image"
                />
              </Link>
            </div>

            <Link
              className="navbar__arrow"
              to="/profile"
              aria-label="Open profile"
            />
          </div>

          <div className="navbar__icons">
            {navbarIcons.map((icon) => (
              <button
                className={`navbar__icon navbar__icon--${icon}`}
                key={icon}
                aria-label={`"${icon}" icon`}
              />
            ))}
          </div>
        </div>
      </div>

      <div className="navbar__row">
        <div className="navbar__tabs">
          {navbarTabs.map((tab) => (
            <Link
              className={cn("navbar__tab", {
                "navbar__tab--selected": tab === currentTab,
              })}
              to={`/${tab}`}
              key={tab}
            >
              {tab}
            </Link>
          ))}
        </div>
      </div>

      <div>
        <button
          className="navbar__post"
          onClick={handlePostButton}
          aria-label="Create post"
        >
          +
        </button>

        {isInputVisible && (
          <form action="#" className="navbar__post-form" onSubmit={onForm}>
            <input
              type="text"
              className="navbar__post-input"
              placeholder="Enter your title and hit Enter"
              onChange={onInput}
              value={input}
              ref={inputRef}
              onBlur={() => setIsInputVisible(false)}
            />
          </form>
        )}
      </div>
    </header>
  );
};
