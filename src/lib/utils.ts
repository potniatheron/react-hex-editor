export function decimalToHex(i: number) {
  return i.toString(16);
}

export function textToHex(input: string) {
  let hexOutput: string[] = [];
  for (let i = 0; i < input.length; i++) {
    let hex = input.charCodeAt(i).toString(16);
    hex = hex.length === 1 ? `0${hex}` : hex;
    hexOutput.push(hex);
  }
  return hexOutput;
}

export function integerToHexAndText(input: Uint8Array | Uint16Array) {
  let hexOutput: string[] = [];
  let stringOutput: string[] = [];

  for (let i = 0; i < input.length; i++) {
    const Uint = input[i];

    let hex = Uint.toString(16);
    hex = hex.length === 1 ? `0${hex}` : hex;

    let char = "";
    const isInRange = Uint < getRange(input);
    char = isInRange ? String.fromCharCode(Number(`0x${hex}`)) : ".";

    hexOutput.push(hex);
    stringOutput.push(char);
  }
  return { hexOutput, stringOutput };
}

export function hexCounter(length: number, padLength: number): string[] {
  const hexCounter = Array.from({ length: length }, (_, i) =>
    decimalToHex(i).padStart(padLength, "0")
  );
  return hexCounter;
}

function getRange(input: Uint8Array | Uint16Array) {
  const rangeDictionary = {
    Uint8Array: 127,
    Uint16Array: 56319,
  };
  const arrayType = input.constructor.name;
  return rangeDictionary[arrayType];
}
