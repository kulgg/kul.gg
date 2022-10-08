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

export default function FarewellMessage(): JSX.Element {
  const [message, setMessage] = useState("");

  useEffect(() => {
    const msg = `Have a good ${getDayName(new Date())}!`;

    const timeouts = [...msg].map((chr, i) =>
      setTimeout(() => {
        setMessage((oldMsg) => [...oldMsg, chr].join(""));
      }, 125 * (i + 1))
    );

    return () => {
      timeouts.forEach((x) => clearTimeout(x));
    };
  }, []);

  return (
    <div className="mb-6 text-center text-md blinking-cursor">{message}</div>
  );
}
