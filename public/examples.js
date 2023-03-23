"use strict";
//GENERICS          DEFINE THE TYPE OF THE ENTRY VALUE
// const addUID = <T extends object>(obj: T) => {
//     let uid = Math.floor(Math.random() * 100);
//     return {...obj, uid};
// }
// let docOne = addUID({name: 'yoshi', age: 40});
// console.log(docOne);
// console.log(docOne.name);
// interface Resource<Type> {
//     uuid: number;
//     resourceName: string;
//     data: Type;
// }
// const docThree: Resource<object> = {
//     uuid: 1,
//     resourceName: 'person',
//     data: { name: 'shaun'}
// }
// const docFour: Resource<string[]> = {
//     uuid: 2,
//     resourceName: 'shoppingList',
//     data: ['bread', ' milk', 'toilet paper']
// }
// console.log(docThree, docFour);
/////////////////////////////////////////////////////////////////////////////////////////
//ENUMS         ENUMERATE BASED ON THE POSITION (WILL DISPLAY NUM INSTEAD THE VALUE)
// enum ResourceType { BOOK, AUTHOR, FILM, DIRECTOR, PERSON }
// interface Resource<Type> {
//     uuid: number;
//     resourceType: ResourceType;
//     data: Type;
// }
// const docOne: Resource<object> = {
//     uuid: 1,
//     resourceType: ResourceType.BOOK,
//     data: { title: 'name of the wind'}
// }
// const docTwo: Resource<object> = {
//     uuid: 10,
//     resourceType: ResourceType.PERSON,
//     data: { name: 'yoshi' }
// }
// console.log(docOne, docTwo);
/////////////////////////////////////////////////////////////////////////////////////////
//TUPLES            ARRAY WITH DIFFERENT TYPES
// let arr = ['ryu', 25, true];
// arr[0] = false;
// arr[1] = 'yoshi';
// arr = [30, false, 'yoshi'];
// let tup: [string, number, boolean] = ['ryu', 25, true];
