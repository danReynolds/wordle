import { MiniCompletedRow } from "./MiniCompletedRow";

type Props = {
  guesses: string[];
  solution: string;
};

export const MiniGrid = ({ solution, guesses }: Props) => {
  return (
    <div className="pb-6">
      {guesses.map((guess, i) => (
        <MiniCompletedRow solution={solution} key={i} guess={guess} />
      ))}
    </div>
  );
};
