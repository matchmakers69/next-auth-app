import { getTopicsList } from "@/queries/get-topics-list";
import Chip from "@/components/ui/Chip";
import paths from "@/utils/paths";
import Alert from "@/components/ui/Alert/Alert";

const TopicsList = async () => {
  const topics = await getTopicsList();
  if (!topics) return;

  if (!topics.length) {
    return (
      <Alert data-testid="subscriptions-missing-data" type="info">
        Sorry, but there are no topics yet.
      </Alert>
    );
  }

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
              backgroundColor="hsla(0,0%,100%,0.08)"
            />
          </div>
        ))}
      </div>
    </>
  );
};

export default TopicsList;
