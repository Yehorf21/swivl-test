import {
  accountActivityOptions,
  accountMenuOptions,
  ProfileInfo,
} from "../../../extra";
import { useState } from "react";
import { Dropdown } from "../Dropdown/Dropdown";

interface Props {
  profileInfo: ProfileInfo;
  width?: string;
  isDropdownMoved?: boolean | string;
}

type Window = null | "edit" | "report";

export const Account: React.FC<Props> = ({
  profileInfo,
  width,
  isDropdownMoved,
}) => {
  const [isWindowOpen, setIsWindowOpen] = useState<Window>(null);

  const handleWindow = (name: "edit" | "report") => {
    setIsWindowOpen((prev) => (prev === name ? null : name));
  };

  return (
    <article className="account" style={{ width }}>
      <div className="account__top">
        <img
          className="account__image"
          src={profileInfo.image}
          alt="profile-image"
        />

        <div className="account__name-group">
          <h5 className="account__name">{profileInfo.name}</h5>

          <p className="account__socials">{profileInfo.instagram}</p>

          {profileInfo.isEditable && (
            <button
              className="account__edit"
              onClick={() => handleWindow("edit")}
              aria-label="Edit account"
            >
              <div className="account__edit-icon" />

              <p className="account__edit-text">Edit Profile</p>

              <Dropdown
                info={[
                  { icon: "", text: "This function is currently unavailable" },
                ]}
                isOpen={isWindowOpen === "edit"}
                options={{
                  padding: "12px 16px 12px",
                }}
              />
            </button>
          )}
        </div>

        {!profileInfo.isEditable && (
          <button
            className="account__menu"
            onClick={() => handleWindow("report")}
            aria-label="Open account menu"
          >
            <Dropdown
              info={accountMenuOptions}
              isOpen={isWindowOpen === "report"}
              options={{
                padding: "24px 0 32px",
                width: "176px",
                right: isDropdownMoved ? "0" : "",
              }}
            />
          </button>
        )}
      </div>

      <div className="account__middle">
        {accountActivityOptions.map((option) => (
          <p className="account__option" key={option}>
            <strong className="account__option--bold">
              {profileInfo[option]}
            </strong>
            <br />
            {option}
          </p>
        ))}
      </div>

      <p className="account__text">{profileInfo.description}</p>
    </article>
  );
};
