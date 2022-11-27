export function age(planet: string, seconds: number): number {
    let days: number = seconds / 86400
    let years: number = days / 365.25
    let result: number = 0

    switch (planet) {
        case 'mercury':
            result = years / 0.2408467
            result = parseFloat(result.toFixed(2))
            break;
        case 'venus':
            result = years / 0.61519726
            result = parseFloat(result.toFixed(2))
            break;
        case 'earth':
            result = years
            result = parseFloat(result.toFixed(2))
            break;
        case 'mars':
            result = years / 1.8808158
            result = parseFloat(result.toFixed(2))
            break;
        case 'jupiter':
            result = years / 11.862615
            result = parseFloat(result.toFixed(2))
            break;
        case 'saturn':
            result = years / 29.447498
            result = parseFloat(result.toFixed(2))
            break;
        case 'uranus':
            result = years / 84.016846
            result = parseFloat(result.toFixed(2))
            break;
        case 'neptune':
            result = years / 164.79132
            result = parseFloat(result.toFixed(2))
            break;
        default:
            break;
    }

    return result
}


console.time()
console.log(age('earth', 1000000000));
console.timeEnd()

