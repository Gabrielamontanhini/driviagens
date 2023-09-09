export function unprocessable(resource = "Item") {
    return {
        type: "incompleteData",
        message: `Algum campo está incorreto no ${resource}`
    }
}