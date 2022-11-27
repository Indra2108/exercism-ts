export const colorCode = (color: string): number => {
    let result: number = 0

    switch (color) {
        case "black":
            result = 0
            break;
        case "brown":
            result = 1
            break;
        case "red":
            result = 2
            break;
        case "orange":
            result = 3
            break;
        case "yellow":
            result = 4
            break;
        case "green":
            result = 5
            break;
        case "blue":
            result = 6
            break;
        case "violet":
            result = 7
            break;
        case "grey":
            result = 8
            break;
        case "white":
            result = 9
            break;
        default:
            break;
    }

    return result
}

console.log(colorCode("brown"));


export const COLORS: string[] = [
    'black',
    'brown',
    'red',
    'orange',
    'yellow',
    'green',
    'blue',
    'violet',
    'grey',
    'white',
]
