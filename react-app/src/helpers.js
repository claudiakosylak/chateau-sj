export const dateCleaner = (date) => {
    const arr = date.split(" ");
    let month = arr[2];
    let day = arr[1];
    let year = arr[3];

    return `Available on ${month} ${day}, ${year}`;
}


export const contactDateCleaner = (date) => {
    const myDate = new Date(date);
    const pstDate = myDate.toLocaleString("en-US", {
        timeZone: "America/Los_Angeles"
    })
    const arr = pstDate.split(",");
    const timeArr = arr[1].split(":");
    const time = timeArr[0] + ":" + timeArr[1] + " " + timeArr[2].split(" ")[1]
    return [arr[0], time];
}

export const moveInDateCleaner = (date) => {
    const arr = date.split(" ");
    const newArr = arr.slice(0, 4);
    return newArr.join(" ");
}
