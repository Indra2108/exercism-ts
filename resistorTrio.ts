export function decodedResistorValue(thisArray: string[]): string {
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

    switch (colorArray[2]) {
        case "black":
            break;
        case "brown":
            array.push("0")
            break;
        case "red":
            array.push("00")
            break;
        case "orange":
            array.push("000")
            break;
        case "yellow":
            array.push("0000")
            break;
        case "green":
            array.push("00000")
            break;
        case "blue":
            array.push("000000")
            break;
        case "violet":
            array.push("0000000")
            break;
        case "grey":
            array.push("00000000")
            break;
        case "white":
            array.push("000000000")
            break;
        default:
            break;
    }

    let result = array.join("")

    let resultInt = parseInt(result)

    if (resultInt > 1000) {
        return resultInt / 1000 + " kiloohms"
    } else {
        return resultInt + " ohms"
    }
}

console.log(decodedResistorValue(["red", "black", "red"]))