export function tooMany() {
    return {
        type: "internal",
        message: `Too many results!`
    }
}