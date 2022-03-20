/* Types */
export interface Data {
  textRows: string[][];
  hexRows: string[][];
  rowCounter: string[];
  columnCounter: string[];
  isText: Boolean;
}
export interface Indices {
  rowIndex: number;
  columnIndex: number;
}

/* Props */
export interface HexViewerProps {
  data: string | Uint8Array | Uint16Array;
  handleCopy: () => void;
}
export interface CounterProps {
  data: string[] | undefined;
  highlightIndices: Indices | null | undefined;
}
export interface ContentProps {
  data: string[][] | undefined | null;
  type: string;
  highlightIndices: Indices | null | undefined;
  handleCopy: () => void;
  setIndices: (Indices) => void;
}
export interface AlertModalProps {
  message: string;
}
