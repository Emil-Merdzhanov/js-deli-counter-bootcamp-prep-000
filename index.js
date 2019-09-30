// var array = [] - was advised to comment it out and vove it to ln 19

//function takeANumber(katzDeliLine, name){
  katzDeliLine.push(name)
  return `Welcome, ${name}. You are number ${katzDeliLine.length} in line.`;
}


var ticketnumber = 0

function takeANumber(katzDeliline){
  ticketnumber.push(katzDeliline)
  reurn `Welcome, You have ticket number ${ticketnumber[+1]}`
  //reurn `Welcome, You have ticket number array.push(`${i+1}. ${ticketnumber[i]}`);
  
}

function nowServing(katzDeliLine){
  if(katzDeliLine.length > 0){
    var nowServing = katzDeliLine[0];
    katzDeliLine.shift()
    return `Currently serving ${nowServing}.`;
  } else {
    return `There is nobody waiting to be served!`;
  }
}

function currentLine(katzDeliLine){
var array = []
  if (katzDeliLine.length === 0){
  
    return 'The line is currently empty.';
  } else {
    
    for (var i=0; i < katzDeliLine.length; i++){
      array.push(`${i+1}. ${katzDeliLine[i]}`);
    }
  }
  return 'The line is currently: ' + array.join(", ")
}
