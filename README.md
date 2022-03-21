# React Hex Editor
### Overview
Hex Editor is a read-only component that takes a file input and displays its content side by side, in the form of both numeric values (expressed in hexadecimal form) and corresponding UTF chars. 

![screely-1647812951518](https://user-images.githubusercontent.com/26926683/159187397-3e6e41af-07f1-412b-9e64-e4bf78f2e722.png)


### Implemented Features
- The component can retrieve either a `string` or `Uint8Array`.
- The Hex viewer must be responsive and each part of the line must match (hex value must match with the text value line by line).
- The component must be able to display the bytes as hex and readable text side by side.
- Non-readable characters should be replaced with a special character.
- Select one part of the hex viewer and automatically the other part gets highlighted as well
- The possibility to then copy the selected hex value or text (depending on what was selected)
- Ability to display `Uint16Array`

### Code breakdown 
**HexViewer.tsx** | Main hex editor wrapper. Includes further operations on the data that is retrieved by `App.tsx`, for visualization purposes. Such operations are abstracted away in a `prepareData()` utility function. Results are passed as props and used to populate each sub-component e.g. `ColumnCounter`, `RowCounter`, `HexViewerContent`.

**ColumnCounter.tsx** |  Zero-index hex counter for the 16 columns making up the editor. Note that each cell is worth 8 bits, for a total of 16 bytes per row. 
 
**RowCounter.tsx** | Zero-index hex counter for the 16 bytes rows making up the editor. 

**HexViewerContent.tsx** | Visualizes hex or textual content. Clicking on each displayed element triggers highlighting and copy to clipboard functionalities. 

**AlertModal.tsx** | Displays a message when some text is copied to clipboard an has a 2000ms timeout.

**prepareData.ts** | Utility function abstracting all of the necessary operations to correctly render data in the HexViewer components. Flow is divided according to input type (text file or binary file, e.g. image). Target output is a Data object that always contains both a HEX and a TEXTUAL representation of the uploaded fle.

**utils.ts** | Utility file containing helper functions e.g. `decimalToHex()`, `textToHex()`, `integerToHexAndText()`, `hexCounter()`, `getRange()`.

