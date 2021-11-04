// const password = 'pass';
// if  (password.length>=8){
// console.log('password satisfies condition');
// }
// else{ console.log('please provide greater value than 8')};

// let userId = 'suryar';
//  if (userId == 'surya'){
//      console.log('aceesed');
//  } 
//  else { console.log('ivalied')}

let bill = 4050;
if( bill >= 10000){
    console.log(bill-(0.15*bill));
}else if( bill >=5000){
    console.log(bill-(0.10*bill));
}
else if(bill<4999 && bill>=2001){
    console.log('buy worth 500rs get 3% dicount',0.03*bill,'your amount is',bill-(0.03*bill));
}else if (bill<=2000 && bill >1500){
    console.log('buy worth 1000rs get 2% dicount',0.02*bill, 'your amount is',bill-(0.03*bill));
}
 else{console.log('your bill amount is',bill);}