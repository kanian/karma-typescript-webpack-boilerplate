const UniqueInOrder = class {
  order (iterable: number[] | String) : number[] | string[] {
    console.log("ordering")
    let previous : number | string = undefined;
    let myArray;
    if(typeof iterable === 'string'){
      myArray = (<String>iterable).split("")
    } else {
      myArray = <number[]>iterable

    }
    //for strings
    const filter = function(x: number | string) : boolean{
        if (x !== previous) {
            previous = x
            return true
          }
          return false
    }
    return myArray.filter(filter).sort();
  }
};

export {UniqueInOrder}
