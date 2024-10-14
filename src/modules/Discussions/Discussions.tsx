import { Post } from "../../extra";
import { useAppSelector } from "../../store/hooks";
import { Card } from "../components/Card";

const Discussions = () => {
  const { posts } = useAppSelector((state) => state.posts);

  return (
    <section className="discussions">
      <div className="discussions__cards">
        {posts.map((card: Post, i: number) => (
          <Card info={card} key={card.title + i} />
        ))}
      </div>

      <img
        className="discussions__banner"
        src="images/discussion-banner.webp"
        alt="discussion-banner"
      />
    </section>
  );
};

export default Discussions;
