export default function appendToEachArrayValue(array, appendString) {
  for (const idx in array) {
    const index = array.indexof(idx);
    array[idx] = appendString + value; // eslint-disable-line no-param-reassign
  }

  return array;
}
