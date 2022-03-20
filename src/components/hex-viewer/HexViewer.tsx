import { useEffect, useState } from "react";
import prepareData from "../../lib/prepareData";
import { HexViewerProps, Data, Indices } from "../../lib/models";
import ColumnCounter from "./ColumnCounter";
import RowCounter from "./RowCounter";
import HexViewerContent from "./HexViewerContent";

export default function HexViewer(props: HexViewerProps) {
  /* 
    (1) Further operations on data for visualization purposes are abstracted away in a prepareData() utility function
    (2) Results are passed as props used to populate each HexViewer sub-component
  */
  const [data, setData] = useState<Data>();
  const [highlightIndices, setHighlightIndices] = useState<Indices | null>();

  useEffect(() => {
    const preparedData = prepareData(props.data);
    setData(preparedData);
  }, []);

  const setIndices = (indices) => {
    setHighlightIndices({
      rowIndex: indices.rowIndex,
      columnIndex: indices.columnIndex,
    });
  };

  return (
    <div className="overflow-y-scroll h-full rounded-lg text-xs sm:text-sm lg:text-base">
      <ColumnCounter
        data={data?.columnCounter}
        highlightIndices={highlightIndices}
      />
      <div className="grid grid-cols-12">
        <RowCounter
          data={data?.rowCounter}
          highlightIndices={highlightIndices}
        />
        <HexViewerContent
          type="hex"
          data={data?.hexRows}
          highlightIndices={highlightIndices}
          handleCopy={props.handleCopy}
          setIndices={setIndices}
        />
        <HexViewerContent
          type="text"
          data={data?.textRows}
          highlightIndices={highlightIndices}
          handleCopy={props.handleCopy}
          setIndices={setIndices}
        />
      </div>
    </div>
  );
}
