export function toRna(dna: string): string {
    let dnaArray: string[] = dna.split('')
    let newDNA: string[] = []

    for (let x = 0; x < dnaArray.length; x++) {
        switch (dnaArray[x]) {
            case 'G':
                newDNA.push('C')
                break;
            case 'C':
                newDNA.push('G')
                break;
            case 'T':
                newDNA.push('A')
                break;
            case 'A':
                newDNA.push('U')
                break;
            default:
                throw new Error('Invalid input DNA.');
        }
    }

    let result: string = ''
    newDNA.forEach(arr => result += arr)

    return result
}

console.log(toRna("GAT"))
