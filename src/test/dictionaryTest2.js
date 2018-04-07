import {Dict} from '../dictionary';

const dict = new Dict();

const str = 'the brown fox jumped over the blue fox';

for (let item of str.split(' ')) {
  if (Object.is(dict.find(item), undefined)) {
    dict.add(item, 1);
  } else {
    dict.add(item, dict.find(item) + 1);
  }
}

console.log(dict.showAll());