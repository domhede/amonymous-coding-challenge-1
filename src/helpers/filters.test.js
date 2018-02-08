import testData from 'data/testData.json';
import { filterByTitle } from './filters';

describe('filter helpers', () => {
  it('...Should return an array of images filtered by title', () => {
    const images = testData.data;
    const searchTerm = 'barack';
    const filterArray = filterByTitle(images, searchTerm);
    const expectedFilteredArrayLength = 1;
    expect(filterArray.length).toEqual(expectedFilteredArrayLength);
  });
  it('...Should return an array of images filtered by title, when searchTerm has multiple matches', () => {
    const images = testData.data;
    const searchTerm = 'GIF';
    const filterArray = filterByTitle(images, searchTerm);
    const expectedFilteredArrayLength = 3;
    expect(filterArray.length).toEqual(expectedFilteredArrayLength);
  });
});
