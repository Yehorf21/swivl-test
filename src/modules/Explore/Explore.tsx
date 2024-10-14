import { usersProfileInfo } from "../../extra";
import { useResponsiveValues } from "../../hooks";
import { Account } from "../components/Account";

const Explore = () => {
  const { getResponsiveValue } = useResponsiveValues();

  return (
    <section className="explore">
      {usersProfileInfo.map((user, i) => (
        <Account
          profileInfo={user}
          width={getResponsiveValue("80vw", "300px", "350px")}
          // accounts closest to the left need different dropdown positioning or it will not be visible
          isDropdownMoved={getResponsiveValue(
            '1', // true
            '1',
            (i + 1) % 3 === 0 ? '1' : '' // false
          )}
          key={user.name}
        />
      ))}
    </section>
  );
};

export default Explore;
