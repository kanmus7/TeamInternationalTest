
function extractValuesForKey(someObject, key) {
    let resultMap = new Map()
    let route = []
    let dephtLvl = 0
    let objName = ''
    let objLength = 0
    let strRout = ''
    buildTheRoute(someObject,route,dephtLvl)    
    
    function buildTheRoute (object,route, dephtLvl){
        for(const objKey in object){ 
            if(objKey === key){
                if(dephtLvl === 0) route.push('someObject')
                else{
                    const arr = strRout.split('|')
                    for(const i in arr){
                        route.push(arr[i])
                    }   
                    strRout = ""
                }
            }else{
                if(typeof object[objKey] === "object"){
                    objName = objKey
                    strRout =  strRout + objName + "|" 
                    objLength = Object.keys(object[objKey]).length
                    buildTheRoute(object[objKey], route, 1)
                } else{
                    if(objLength === 1){                       
                       strRout = strRout.replace(`${objName}|`,'')
                    }
                } 
            }
        }
    }    
    route = route.filter(item=> item !== '')
    for(let i in route){
        resultMap.set(i,route[i])
    }
    return resultMap
}
module.exports = {
    extractValuesForKey
}