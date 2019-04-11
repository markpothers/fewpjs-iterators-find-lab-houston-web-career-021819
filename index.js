const testVar = {}

function testFunc() {
  return "hi"
}

// function superbowlWin(array){
//   let result = array.find( (item) => item["result"] === "W" )
//   if (result != undefined){
//     return result["year"]
//   }else{
//     return result
//   }
// }

// function superbowlWin(array){
//   if ((array.find( (item) => item["result"] === "W" ) != undefined)){
//     return (array.find( (item) => item["result"] === "W" ))["year"]
//   }else{
//     return array.find( (item) => item["result"] === "W" )
//   }
// }

// function superbowlWin(array){
//   const finder = (array.find( (item) => item["result"] === "W" ))
//   if (finder != undefined){
//     return finder["year"]
//   }else{
//     return finder
//   }
// }

function superbowlWin(array){
  const finder = (array.find( item => item["result"] === "W" ))
  return (finder) ? finder.year : finder
}