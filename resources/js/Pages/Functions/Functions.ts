export function generateNumberArray(
    length: number,
    fromZero: boolean = false
): { value: number; label: number }[] {
    const array: { value: number; label: number }[] = [];
    let i = 1;
    if (fromZero) {
        i = 0;
    }
    for (i; i <= length; i++) {
        array.push({ value: i, label: i });
    }
    return array;
}

export function generateNumber(): number {
    return Math.floor(Math.random() * 100);
}
