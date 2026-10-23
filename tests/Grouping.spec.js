const {test, expect} = require('@playwright/test');

test.describe.skip('Group1', ()=>{

    test('Test1', async({page})=>{
    console.log('This is test 1 ......')
    })

    test('Test2', async({page})=>{
    console.log('This is test 2 .....')
    })

})

test.describe('Group2', async()=>{

    test('Test3', async()=>{
        console.log('This is test 3 ....')
    })

    test('Test4', async()=>{
        console.log('This is test 4 ....')
    })

})