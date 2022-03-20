import { CounterProps } from "../../lib/models";

export default function RowCounter(props: CounterProps) {
  const isInRow = (i) => {
    if (!props.highlightIndices) return false;
    return props.highlightIndices.rowIndex === i;
  };

  return (
    <div className="lg:px-2 lg:py-1 col-span-1 bg-violet-200 text-violet-900">
      <div className="flex flex-row">
        <div className="flex-auto text-right">
          {props.data?.map((rowNumber, i) => (
            <pre
              key={i}
              className={isInRow(i) ? "rounded-sm bg-violet-300 font-bold" : ""}
            >
              {rowNumber}
              <br />
            </pre>
          ))}
        </div>

        <br />
      </div>
    </div>
  );
}
