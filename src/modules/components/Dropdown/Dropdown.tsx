import cn from "classnames";

interface DropdownInfo {
  icon: string;
  text: string;
}

interface Options {
  padding: string;
  width?: string;
  right?: string;
}

interface Props {
  info: DropdownInfo[];
  isOpen: boolean;
  options: Options;
}

export const Dropdown: React.FC<Props> = ({ info, isOpen, options }) => {
  const { padding, width, right } = options;

  return (
    <div
      className={cn("dropdown", {
        "window-pop": isOpen,
      })}
      style={{
        padding,
        width,
        right,
      }}
    >
      {info.map((option) =>
        option.icon ? (
          <button
            className="dropdown__option"
            key={option.icon}
            aria-label={option.text}
          >
            <div className={`dropdown__icon dropdown__icon--${option.icon}`} />

            <p className="dropdown__text">{option.text}</p>
          </button>
        ) : (
          <p key={option.text}>{option.text}</p>
        )
      )}

      <button
        className="dropdown__icon dropdown__icon--close"
        aria-label="Close menu"
      />
    </div>
  );
};
