export const dateCleaner = (date) => {
    const arr = date.split(" ");
    let month = arr[2];
    let day = arr[1];
    let year = arr[3];

    return `Available on ${month} ${day}, ${year}`;
}
