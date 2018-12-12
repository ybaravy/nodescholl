(function log(process){
  const arr = process.argv.slice(2);
  console.log(arr.reduce((sum, el) => +sum + (+el)));
})(process);
