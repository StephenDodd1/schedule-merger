console.log(scheduler([[3,5],[6,9],[12,15]],[[2,4],[5,8],[15,20]]))
console.log(scheduler([[1,2],[3,5],[6,9],[12,15]],[[2,4],[5,8],[15,20]]))
console.log(scheduler([[3,5],[6,9],[12,15],[16,17]],[[2,4],[5,8],[15,20]]))
console.log(scheduler([[3,5],[6,9],[12,15],[16,17],[18,24]],[[2,4],[5,8],[15,20]]))

function scheduler(first,second){
  const arr = []
  for(let i = 0; i < first.length; i++){
    for(let j = 0; j < second.length; j++){
      if(first[i][0]>second[j][0] && first[i][0]<second[j][1]){
        if(first[i][1] < second[j][1]){
          arr.push([first[i][0],first[i][1]])
        }
        else arr.push([first[i][0],second[j][1]])
      }
      else if(first[i][0]<second[j][0] && second[j][0]<first[i][1]){
        if(first[i][1] < second[j][1]){
          arr.push([first[i][0],first[i][1]])
        }
        else arr.push([first[i][0],second[j][1]])
      }
    }
  }
  console.log(arr.map(a=> {return ('from ' + a[0]%12 + ' to ' + a[1]%12)}))
  return arr
}