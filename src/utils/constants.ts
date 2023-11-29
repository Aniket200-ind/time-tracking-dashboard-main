import {
  exerciseIcon,
  playIcon,
  selfCareIcon,
  socialIcon,
  studyIcon,
  workIcon,
} from "../assets";

const icons = [
  workIcon,
  playIcon,
  studyIcon,
  exerciseIcon,
  socialIcon,
  selfCareIcon,
];

const cardBackgroundColor: { [index: number]: string } = {
  0: "hsl(15, 100%, 70%)",
  1: "hsl(195, 74%, 62%)",
  2: "hsl(348, 100%, 68%)",
  3: "hsl(145, 58%, 55%)",
  4: "hsl(264, 64%, 52%)",
  5: "hsl(43, 84%, 65%)",
};

const timePeriod = {
  daily: "Yesterday",
  weekly: "Last Week",
  monthly: "Last Month",
};

export { cardBackgroundColor, icons, timePeriod };