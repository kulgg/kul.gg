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

const FarewellMessage = (): JSX.Element => {
  return (
    <div className="mt-10 mb-8 text-center text-xl">
      Thanks for stopping by, have a good {getDayName(new Date())}!
    </div>
  );
};

export default FarewellMessage;
