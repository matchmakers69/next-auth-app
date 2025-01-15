import Card from "../Card";
import { CardWithoutBckProps } from "./defs";

const CardWithoutBck = ({ children }: CardWithoutBckProps) => {
  return (
    <Card className="w-full max-w-[100%] rounded-xl p-[1rem] shadow-md sm:max-w-[56rem] md:max-w-[60rem] lg:max-w-[70rem]">
      <div className="flex h-full w-full flex-col sm:flex-wrap lg:flex-nowrap">
        <div className="flex flex-col">{children}</div>
      </div>
    </Card>
  );
};

export default CardWithoutBck;
