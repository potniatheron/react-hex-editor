import { CounterProps } from "../../lib/models";

export default function ColumnCounter(props: CounterProps) {
  /* 
    - Zero-index hex counter for 16 columns making up the content rows
    - Empty grid columns are adedd for alignment purpoes
  */
  const isInColumn = (i) => {
    if (!props.highlightIndices) return false;
    return props.highlightIndices.columnIndex === i;
  };

  return (
    <>
      <div className="grid grid-cols-12 bg-violet-300 text-violet-900 rounded-t-lg">
        <div className="lg:px-2 lg:py-1 col-span-1"></div>
        <div className="lg:px-2 lg:py-1 col-span-7">
          <div className="flex flex-row text-center">
            {props.data?.map((columnNumber, i) => (
              <div key={i} className="w-1/16">
                <pre
                  className={
                    isInColumn(i) ? "rounded-sm bg-violet-200 font-bold" : ""
                  }
                >
                  {columnNumber}
                  <br />
                </pre>
              </div>
            ))}
          </div>
        </div>
        <div className="lg:px-2 lg:py-1 col-span-4"></div>
      </div>
    </>
  );
}
