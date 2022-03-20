import { Data } from "./models";
import { hexCounter, textToHex, integerToHexAndText } from "./utils";
import { EDITOR_COLUMNS } from "./constants";

export default function prepareData(
  input: string | Uint8Array | Uint16Array
): Data {
  /* 
    This utility function abstracts all of the necessary operations to correctly render data in the HexViewer components
    (1) Flow is divided according to input type (text file or binary file, e.g. image)
    (2) A prepareRows method creates the relevant data structure according to the editor column size
    (3) Target output is a Data object that always contains both a HEX and a TEXTUAL representation of the uploaded fle
  */
  const preparedData = {} as Data;

  const prepareRows = (arr) => {
    return Array.from(
      { length: Math.ceil(arr.length / EDITOR_COLUMNS) },
      (v, i) =>
        arr.slice(i * EDITOR_COLUMNS, i * EDITOR_COLUMNS + EDITOR_COLUMNS)
    );
  };

  if (typeof input === "string") {
    /* String -> HEX  */
    preparedData.textRows = prepareRows(input.split(""));
    preparedData.hexRows = prepareRows(textToHex(input));
  } else {
    /* Int -> HEX, STRING */
    const { hexOutput, stringOutput } = integerToHexAndText(input);
    preparedData.hexRows = prepareRows(hexOutput);
    preparedData.textRows = prepareRows(stringOutput);
  }
  /* Create HEX counter */
  const outputRows = preparedData.hexRows.length;
  preparedData.rowCounter = hexCounter(outputRows, 8, 16);
  preparedData.columnCounter = hexCounter(EDITOR_COLUMNS, 2, 1);

  return preparedData;
}
