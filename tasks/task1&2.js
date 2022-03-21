function sum(args){
    let total = 0
        function result(args){
            if(typeof args === "function"){
                args(total)
            } else{
                total += args
                return result
            }
        }
    return result(args)    
}

 module.exports = {
     sum
 }