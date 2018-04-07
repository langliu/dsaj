import {Dict} from '../dictionary';
import * as fs from 'fs';

const dict = new Dict();

fs.readFile('../assets/contact.txt', 'utf8', (err, data) => {
  if (err) throw err;
  data.split(/,/g).forEach((item) => {
    const arr = item.split(/(:)/g);
    dict.add(arr[0], arr[2]);
  });
});