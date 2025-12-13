export const extractIds = (urls) => {
    const ids = urls.map(url => url.split("/").pop());
    return `[${ids.join(", ")}]`;
}