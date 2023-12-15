    /**
     * Capitalizes first letter of a string
     * @param {string}  stringToTitleCase - any string
     * @returns {string} a string that looks like: This
     **/
export function titleCase(stringToTitleCase) {
    stringToTitleCase.toLowerCase();
    const titleCaseString = stringToTitleCase.charAt(0).toUpperCase() + stringToTitleCase.slice(1);
    return titleCaseString;
}