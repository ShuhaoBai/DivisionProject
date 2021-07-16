import Entry from '../models/Entry';
// import filter_ from 'lodash/filter';
import DivisionData from '../models/DivisionData';
// eslint-disable-next-line @typescript-eslint/explicit-function-return-type
const reform = (reformedData: DivisionData[], selectedEntries: Entry) => {
  // -- create an array to store true Entries
  let trueE: string[] = [];
  // -- iterate over selectedEntries
  Object.entries(selectedEntries).forEach(([key, value]) => {
    // -- find attributes who are true
    if (value === true) {
      // -- push them into the array
      trueE.push(key);
    }
  });
  console.log(trueE.toString()); // -- selected entries who are true

  // -- now we have trueE as a dictionary
  // -- we need to iterate reformedData to create new object that only contain attribute values in which it's true in dictionary
  // -- r: {year:'2021', month:'Jan', Published: 6, ...}
  // reformedData.map((r, i) => {
  //   var temp: DivisionData = {};
  //   temp['year'] = r.year;
  //   temp['month'] = r.month;
  // });
};
export default reform;
