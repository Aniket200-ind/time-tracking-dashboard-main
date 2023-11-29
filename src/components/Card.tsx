import Image from "next/image";

type Props = {
  title: string;
  icons: string;
  cardBackgroundColor: string;
  timeMode: { current: number; previous: number };
  timeFormat: { daily: string; weekly: string; monthly: string; [key: string]: string };
  mode: string;
};

export default function Card({
  title,
  icons,
  cardBackgroundColor,
  timeMode,
  timeFormat,
  mode,
}: Props) {
  return (
    <section
      style={{ backgroundColor: cardBackgroundColor }}
      className={`w-full h-1/3 rounded-t-xl lg:w-64`}
    >
      <div className="relative h-12">
        <Image
          src={icons}
          alt={title}
          className="absolute object-cover right-4"
          width={70}
          height={70}
        />
      </div>
      <div className="card-info-div active:bg-desaturated-blue lg:hover:bg-desaturated-blue lg:py-8 lg:space-y-6">
        <div className="card-inner-div">
          <p className="text-lg text-white">{title}</p>
          <button className="outline-none pointer-events-none">
            <Image
              src="/icon-ellipsis.svg"
              alt="icon-ellipsis"
              width={20}
              height={5}
            />
          </button>
        </div>
        <div className="space-y-4 card-inner-div lg:flex-col lg:items-start">
          <p className="text-3xl font-thin text-white lg:text-5xl">
            {`${timeMode.current}hrs`}
          </p>
          <p className="text-sm text-pale-blue lg:text-xs">
            {`${timeFormat[mode]} - ${timeMode.previous}hrs`}
          </p>
        </div>
      </div>
    </section>
  );
}
