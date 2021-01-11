/*console.log("Hello World!");
*/

/*console.log(william.eyeColour);*/

const charles = {
firstname ='Charles',
lastname ='Windsor',
parents: [] 
};

const diana = {
firstname = 'Diana',
lastname = 'Spencer',
parents: []
};

const william = {
    firstname = 'William',
    lastname = 'Windsor',
    parents: [charles,diana],
    childof: childof
    };

/*function () {
    return childof.parents.map(parent => parent.name).join(' & ') || "parents unknown"
  }
*/
console.log(william,childof);

module.exports(charles,diana,william)