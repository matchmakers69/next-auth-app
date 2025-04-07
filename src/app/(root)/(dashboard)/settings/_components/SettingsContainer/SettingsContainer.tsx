import { CardWithoutBck } from "@/components/ui/CardWithoutBck";
import FormUpdateUser from "./FormUpdateUser";
import CardTitle from "@/components/ui/Card/CardTitle";
import { SettingsContainerProps } from "./defs";

const SettingsContainer = ({ user }: SettingsContainerProps) => {
  return (
    <>
      <CardWithoutBck className="border border-dark-border bg-[hsla(0,0%,100%,0.05)] p-14">
        <CardTitle className="text-[2.2rem]">User profile</CardTitle>
        <FormUpdateUser user={user} />
      </CardWithoutBck>
    </>
  );
};

export default SettingsContainer;
