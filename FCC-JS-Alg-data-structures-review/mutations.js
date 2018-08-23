function mutation(arr) {
  var lowerArr = [arr[0].toLowerCase(), arr[1].toLowerCase()]; 
  //lower everything to compare

  var splitArr = lowerArr[1].split("");
  //split up the second array to check for index of each letter

  for(var i =0; i < splitArr.length; i++){
    if(lowerArr[0].indexOf(splitArr[i]) == -1){ 
      //if the letter in question is not in the first string
    return false;
    }
  }

  // if each letter passes, return true
  return true;
}

mutation(["hello", "hey"]);