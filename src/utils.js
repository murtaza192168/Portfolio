// To use images / icons that are in assets folder, we hav created this 'utils.js' file inside src dir
export const getImageUrl = (path) =>{ // Create a function which can use the images inside asset folder;
    return new URL(`/assets/${path}`, import.meta.url).href;
}