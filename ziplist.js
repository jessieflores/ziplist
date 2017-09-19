
const testList = ['a', 'b', 'c'];
const testList2 = [1, 2, 3];

function zipList(list, list2) {

  let newList = [];

  for(let i = 0; i < list.length; i++) {

    newList.push(list[i], list2[i]);

  }
  return newList;
}

console.log(zipList(testList, testList2));


function zipListTheSimpleWay(list, list2) {

  return _.flatten(_.zip(list, list2));

}

console.log(zipListTheSimpleWay(testList, testList2));
