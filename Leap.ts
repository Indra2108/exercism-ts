export function isLeap(year: number): boolean {
    let result = false

    if (Number.isInteger(year / 4)) {
        result = false
        if (Number.isInteger(year / 100)) {
            result = false
            if (Number.isInteger(year / 400)) {
                result = true
            } else {
                result = false
            }
        } else {
            result = true
        }
    }

    return result

}

console.log(isLeap(1960));

