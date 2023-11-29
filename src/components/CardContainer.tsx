import data from "../data/data.json";
import { cardBackgroundColor, icons, timePeriod } from "../utils/constants";
import Card from "./Card";

export default function CardContainer({ mode }: { mode: string }) {
  return (
    <section className="grid mt-6 space-y-8 lg:grid-cols-3 lg:w-max lg:mt-0 lg:space-y-0 lg:gap-8">
      
      {/* Mapping over the data from data.json file for 6 card elements */}
      {data.map((item: any, index: number) => {
        // ! Accessing the timeframes property from the data.json file
        const timeMode: { current: number; previous: number } =
          item.timeframes[mode];

        return (
          <Card
            key={item.title}
            title={item.title}
            icons={icons[index]}
            cardBackgroundColor={cardBackgroundColor[index]}
            timeMode={timeMode}
            timeFormat={timePeriod}
            mode={mode}
          />
        );
      })}
    </section>
  );
}
