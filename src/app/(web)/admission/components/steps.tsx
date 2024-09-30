import { StepItem } from "./stepItem";

const stepData = [
  { num: 1, title: "Step 1", description: "Your Info" },
  { num: 2, title: "Step 2", description: "Select Plan" },
  { num: 3, title: "Step 3", description: "Add-ons" },
];
export function Steps() {
  return (
    <ul className="flex gap-4 text-white lg:flex-col lg:gap-8">
      {stepData.map((info, index) => {
        return <StepItem key={index} infos={info} />;
      })}
    </ul>
  );
}
