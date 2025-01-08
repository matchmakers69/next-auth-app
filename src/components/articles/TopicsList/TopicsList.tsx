import { getTopicsList } from "@/app/queries/get-topics-list";
import Chip from "@/components/ui/Chip";
import paths from "@/utils/paths";

const TopicsList = async () => {
  const topics = await getTopicsList();
  if (!topics) return;

  return (
    <>
      <div className="flex flex-wrap items-center gap-4">
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
