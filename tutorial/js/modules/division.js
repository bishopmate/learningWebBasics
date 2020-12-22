errorMessage = "Cannot Divide by Zero";
module.exports = {
  divide : function(a, b){
    if(b === 0){
      return errorMessage;
    }else{
      return a/b;
    }
  }
}
