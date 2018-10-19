export const getArraysDB = list => {
  let returnArr = [];

  list.forEach(item => {
    let items = item.val();
    items.idChat = item.key;
    returnArr.push(items);
  });

  return returnArr;
};
