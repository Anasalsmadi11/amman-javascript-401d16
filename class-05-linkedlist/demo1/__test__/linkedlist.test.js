'use strict';
const LinkedList = require('../lib/LinkedList');
describe("linked list", () => {
    it("create a linkedlist ", () => {
        let list = new LinkedList();
        expect(list.head).toBeNull();
    })
    it("append to linkedlist", () => {
        let list = new LinkedList();
        list.append('one');
        expect(list.head.value).toEqual('one');
        list.append('two');
        expect(list.head.value).toEqual('one'); // here the  value one not two because no matter how much i add nodes ,the heade node value will remain the same(list.head.value=one)
    })
})