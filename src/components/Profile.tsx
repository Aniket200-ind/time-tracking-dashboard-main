"use client";

import Image from "next/image";
import { MouseEvent, useState } from "react";

const Profile = ({
  onModeChange,
}: {
  onModeChange: (updatedMode: string) => void;
}) => {
  // ! Creating 3 states to store the clicked span element
  const [span1Clicked, setSpan1Clicked] = useState(false);
  const [span2Clicked, setSpan2Clicked] = useState(true);
  const [span3Clicked, setSpan3Clicked] = useState(false);

  // ! Function to update the timeMode property on click from the span element
  const handleClick = (event: MouseEvent, spanNumber: number) => {
    const target = event.target as HTMLElement;
    const timeMode = target.getAttribute("aria-label");
    if (timeMode) {
      onModeChange(timeMode);
    }

    // ! Updating the state of the clicked span element
    switch (spanNumber) {
      case 1:
        setSpan1Clicked(!span1Clicked);
        setSpan2Clicked(false);
        setSpan3Clicked(false);
        break;
      case 2:
        setSpan1Clicked(false);
        setSpan2Clicked(!span2Clicked);
        setSpan3Clicked(false);
        break;
      case 3:
        setSpan1Clicked(false);
        setSpan2Clicked(false);
        setSpan3Clicked(!span3Clicked);
        break;
      default:
        break;
    }
  };

  return (
    <section className="w-full rounded-xl bg-dark-blue lg:w-1/5">
      <div className="py-8 space-x-4 flexbox-center rounded-xl bg-primary-blue lg:flex-col lg:items-start lg:space-y-7 lg:px-6 lg:h-2/3 lg:py-0">
        <Image
          src="/image-jeremy.png"
          alt="Profile picture"
          width={70}
          height={70}
          className="profile-img lg:ml-3"
        />
        <div>
          <p className="text-base text-pale-blue">Report for</p>
          <p className="text-2xl font-light text-white opacity-90 lg:text-4xl">
            Jeremy Robson
          </p>
        </div>
      </div>
      <div className="flex items-center py-6 text-lg justify-evenly lg:flex-col lg:items-start lg:space-y-4 lg:pl-6">
        <span
          style={{ color: span1Clicked ? "white" : "hsl(235, 45%, 61%)" }}
          className="cursor-pointer select-none active:text-white lg:hover:text-white"
          aria-label="daily"
          onClick={(e) => handleClick(e, 1)}
        >
          Daily
        </span>
        <span
          style={{ color: span2Clicked ? "white" : "hsl(235, 45%, 61%)" }}
          className="text-white cursor-pointer select-none active:text-white lg:hover:text-white"
          aria-label="weekly"
          onClick={(e) => handleClick(e, 2)}
        >
          Weekly
        </span>
        <span
          style={{ color: span3Clicked ? "white" : "hsl(235, 45%, 61%)" }}
          className="cursor-pointer select-none active:text-white lg:hover:text-white"
          aria-label="monthly"
          onClick={(e) => handleClick(e, 3)}
        >
          Monthly
        </span>
      </div>
    </section>
  );
};
export default Profile;
