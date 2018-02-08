export const filterByTitle = (images, searchTerm) => {
  return images.filter(image => image.title.includes(searchTerm));
}
