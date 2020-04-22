import {
  stringToArray,
  arrayToString,
} from './localservice';

export const proggressHasId = (data) => {
  const id = data.id;
  const arr = stringToArray(localStorage.getItem('in-proggress')) || [];
  return arr.find((item) => item === id);
};

export const delProggress = (data) => {
  const id = data.id;
  const arr = stringToArray(localStorage.getItem('in-proggress'));
  return arr.filter((item) => item.id !== id);
};

export const addProggress = (data) => {
  const id = data.id;
  const arr = stringToArray(localStorage.getItem('in-proggress')) || [];
  if (!proggressHasId(data)) {
    arr.push(id);
  }
  localStorage.setItem('in-proggress', arrayToString(arr));
};
