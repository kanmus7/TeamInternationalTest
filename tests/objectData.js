const someObject1 = {
    uuid: 1,
    innerOne: {
        someKey: "some text"
    },
    innerTwo: {
        innerThree: {
            someOtherKey: "some other text",
            innerFour: {
                uuid: 3
            }
        }
    }
}

const someObject2 = {
    innerOne: {
        someKey: "some text"
    },
    innerTwo: {
        innerThree: {
            someOtherKey: "some other text",
            innerFour: {
                a: 3
            }
        }
    }
}

const someObject3 = {
    innerOne: {
        uuid: 1,
        someKey: "some text"
    },
    innerTwo: {
        innerThree: {
            uuid: 2,
            someOtherKey: "some other text",
            innerFour: {
                uuid: 3,
                anotherKey : "another key",
                innerFive: {
                    uuid: 3
                    
                }
            }
        }
    }
}

module.exports ={
    someObject1,
    someObject2,
    someObject3,
}