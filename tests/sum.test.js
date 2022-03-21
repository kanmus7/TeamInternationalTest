const {expect} = require("@jest/globals")
const {sum} = require('../tasks/task1&2')

test(' sum return -> 0', ()=> { 
    console.log = jest.fn()    
    sum(result=> { console.log("->", result)})    
    expect(console.log.mock.calls[0][0] + ' ' + console.log.mock.calls[0][1]).toBe('-> 0')
})

test(' sum return -> 1', ()=> { 
    console.log = jest.fn()    
    sum(1)(result => { console.log("->", result)})    
    expect(console.log.mock.calls[0][0] + ' ' + console.log.mock.calls[0][1]).toBe('-> 1')
})

test(' sum return -> 3', ()=> { 
    console.log = jest.fn()    
    sum(1)(2)(result => { console.log("->", result)})    
    expect(console.log.mock.calls[0][0] + ' ' + console.log.mock.calls[0][1]).toBe('-> 3')
})

test(' sum return -> 7', ()=> { 
    console.log = jest.fn()    
    sum(1)(2)(4)(result => { console.log("->", result)})    
    expect(console.log.mock.calls[0][0] + ' ' + console.log.mock.calls[0][1]).toBe('-> 7')
})