function chunkArrayInGroups(arr, size) {

  var splitArr= []; 
  //new Arr for sub-arrays

  for(var i = 0; i < arr.length; i+=size){
      var cutArr = arr.slice(i, i+ size);
      //create arrays by slicing the original array into chuncks from 0/last cut to that number + size

      splitArr.push(cutArr);
      //add it to the newly created array
  }


  return splitArr;;
}