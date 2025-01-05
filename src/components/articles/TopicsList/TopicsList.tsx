import { getTopicsList } from "@/actions/getTopicList";
import Chip from "@/components/ui/Chip";
import paths from "@/utils/paths";

const TopicsList = async () => {
  const topics = await getTopicsList();
  console.log(topics, "topics");

  return (
    <>
      <div className="flex flex-wrap items-center gap-5">
        {topics.map((topic) => (
          <div className="" key={topic.id}>
            <Chip
              label={topic.slug}
              component="a"
              href={paths.topicShow(topic.slug)}
              variant="filled"
              clickable
              textColor="rgb(var(--light-grey))"
              backgroundColor="#ffffff0d"
            />
          </div>
        ))}
      </div>
    </>
  );
};

export default TopicsList;
