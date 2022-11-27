export function decodedValue(thisArray: string[]): number {
  const colorArray = thisArray
  const array = new Array

  for (let x = 0; x <= 1; x++) {
    switch (colorArray[x]) {
      case "black":
        array.push(0)
        break;
      case "brown":
        array.push(1)
        break;
      case "red":
        array.push(2)
        break;
      case "orange":
        array.push(3)
        break;
      case "yellow":
        array.push(4)
        break;
      case "green":
        array.push(5)
        break;
      case "blue":
        array.push(6)
        break;
      case "violet":
        array.push(7)
        break;
      case "grey":
        array.push(8)
        break;
      case "white":
        array.push(9)
        break;
      default:
        break;
    }
  }

  let result = array.join("")

  return parseInt(result)
}

console.log(decodedValue(['orange', 'orange', 'green', "brown"]))