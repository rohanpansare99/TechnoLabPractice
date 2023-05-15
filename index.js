function chunkArrayInGroups(arr, size) {
  const temp=[];
  for(let i=0; i<arr.length;i+=size){
    temp.push(arr.slice(i,i+size));
  }
  return temp;
}
  
  console.log(chunkArrayInGroups(["a", "b", "c", "d"], 2));

  const arr=[40, 1, 4,8, 2, 4,1, 60];

  console.log(arr.sort((a,b) => a-b));
  let a=9;
  console.log(arr.filter(val => a>val).length);