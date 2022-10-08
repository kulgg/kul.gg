import { useEffect, useState } from "react";

const days: string[] = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];

function getDayName(date: Date): string {
  return days[date.getDay()];
}

function getSeasonEmoji(date: Date): string {
  const spring = "🌱";
  const summer = "☀️";
  const fall = "🍂";
  const winter = "❄️";

  const monthIndex = date.getMonth();

  if (monthIndex >= 2 && monthIndex < 5) {
    return spring;
  } else if (monthIndex >= 5 && monthIndex < 8) {
    return summer;
  } else if (monthIndex >= 8 && monthIndex < 11) {
    return fall;
  } else {
    return winter;
  }
}

export default function FarewellMessage(): JSX.Element {
  const [message, setMessage] = useState("");
  const [isCursorBlinking, setIsCursorBlinking] = useState(true);

  useEffect(() => {
    const msg = `Have a good ${getDayName(new Date())} ${getSeasonEmoji(
      new Date()
    )}`;

    const msgChars = [...msg];

    const timeouts = msgChars.map((chr, i) => {
      return setTimeout(() => {
        setMessage((oldMsg) => [...oldMsg, chr].join(""));
      }, 125 * (i + 1));
    });

    const stopBlinkingTimeout = setTimeout(() => {
      setIsCursorBlinking(false);
    }, 125 * (msgChars.length + 8));

    return () => {
      timeouts.forEach((x) => clearTimeout(x));
      clearTimeout(stopBlinkingTimeout);
    };
  }, []);

  return (
    <div
      className={`mb-6 text-center text-md ${
        isCursorBlinking ? "blinking-cursor" : ""
      }`}
    >
      {message}
    </div>
  );
}
