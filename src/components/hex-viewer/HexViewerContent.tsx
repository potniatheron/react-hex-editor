import { ContentProps } from "../../lib/models";

export default function HexViewerContent(props: ContentProps) {
  const isHighLighted = (i, j) => {
    if (!props.highlightIndices) return false;
    return (
      props.highlightIndices.rowIndex === i &&
      props.highlightIndices.columnIndex === j
    );
  };

  const copyToClipboard = (content) => {
    navigator.clipboard.writeText(content);
    props.handleCopy();
  };

  const handleClick = (indices, content) => {
    props.setIndices(indices);
    copyToClipboard(content);
  };

  return (
    <div
      className={`lg:px-2 lg:py-1 col-span-${
        props.type === "hex" ? "7" : "4"
      } bg-gray-800 text-white`}
    >
      {props.data &&
        props.data.map((row, i) => (
          <div key={i} className="flex flex-row text-center cursor-pointer">
            {row.map((cell, j) => (
              <div key={j} className="w-1/16">
                <pre
                  className={
                    isHighLighted(i, j) ? "rounded-sm bg-white text-black" : ""
                  }
                  onClick={() =>
                    handleClick({ rowIndex: i, columnIndex: j }, cell)
                  }
                >
                  {cell}
                </pre>
              </div>
            ))}
            <br />
          </div>
        ))}
    </div>
  );
}
