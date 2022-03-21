const {expect} = require("@jest/globals")
const {extractValuesForKey} = require("../tasks/task3")
const { someObject1, someObject2, someObject3 } = require('./objectData')


test('extractValuesForKey size1', ()=> { 
   const route = extractValuesForKey(someObject1, "uuid")
   expect(route.size).toBe(4)
})

test('extractValuesForKey size2', ()=> { 
    const route = extractValuesForKey(someObject2, "uuid")
    expect(route.size).toBe(0)
})  

test('extractValuesForKey size3', ()=> { 
    const route = extractValuesForKey(someObject3, "uuid")
    expect(route.size).toBe(5)
}) 
 
test('extractValuesForKey route1', ()=> { 
    const route = extractValuesForKey(someObject1, "uuid")
    const routeStr = `${route.get('0')}/${route.get('1')}/${route.get('2')}/${route.get('3')}`
    expect(routeStr).toBe('someObject/innerTwo/innerThree/innerFour')
})
 
test('extractValuesForKey route2', ()=> { 
    const route = extractValuesForKey(someObject2, "uuid")
    const routeStr = route.size === 0? '' : `${route.get('0')}/`    
    expect(routeStr).toBe('')
}) 

test('extractValuesForKey route3', ()=> { 
    const route = extractValuesForKey(someObject3, "uuid")
    const routeStr = `${route.get('0')}/${route.get('1')}/${route.get('2')}/${route.get('3')}/${route.get('4')}` 
    expect(routeStr).toBe('innerOne/innerTwo/innerThree/innerFour/innerFive')
}) 