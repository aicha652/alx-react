export function getFullYear() {
    const currentDate = new Date();
    const currentYear = currentDate.getFullYear();

    return currentYear;
}

export function getFooterCopy(isIndex) {
    if (isIndex === true) {
        return 'Holberton School';
    }
    return 'Holberton School main dashboard';
}