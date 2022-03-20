import React, { useState } from "react";
import readFile from "./lib/readFile";
import HexViewer from "./components/hex-viewer/HexViewer";
import AlertModal from "./components/AlertModal";

function App() {
  const [file, setFile] = React.useState<
    null | string | Uint8Array | Uint16Array
  >(null);
  const [isCopied, setIsCopied] = useState(false);

  const updateFileState = async (e: React.FormEvent<HTMLInputElement>) => {
    const result = await readFile(e);
    setFile(result);
  };
  const handleCopy = () => {
    setIsCopied(true);
    setTimeout(() => {
      setIsCopied(false);
    }, 2000);
  };

  const renderComponents = () => {
    if (!file) {
      return (
        <>
          <div className="p-10">
            <input
              name="file"
              type="file"
              role="button"
              onInput={updateFileState}
            />
          </div>
        </>
      );
    }

    const isBinary = typeof file !== "string";
    return (
      <>
        <div className="p-10 h-screen">
          <div className="pb-5 font-bold">
            <span>Loaded {isBinary ? "binary" : "text"} file</span>{" "}
            <button onClick={() => setFile(null)}>Reset</button>
          </div>
          <HexViewer data={file} handleCopy={handleCopy} />
          {isCopied && <AlertModal message={"Data copied to clipboard"} />}
        </div>
      </>
    );
  };

  return <div className="App">{renderComponents()}</div>;
}

export default App;
