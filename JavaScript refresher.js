let myname = (Name) => {
return Name;
}

console.log(myname("Faisal"));

const newname = number => number*2;

console.log(newname(3));

class Learn {
constructor(){
this.js="Website";
}
coursename() {

    console.log("Im learning react");

}


}

class Focus extends Learn{

 constructor(){
    super();
    this.Mynameis = "JS";
 }

 focusing(){
    console.log("im focusing" , this.Mynameis, "and I m learing how to design a", this.js);
 }


}

let Faisal = new Learn();
const Faysal = new Focus();
Faisal.coursename();
Faysal.focusing();

const qarray = [2,3,4]
const newarray = [...qarray,2, 'test']

console.log(newarray);

const person = {

   name: "max",
   age:23
};

const newperson = {

   ...person,
   gender:"male",
   age:24
};

console.log(newperson);

const rest = (...number) => number;

console.log(rest(1,2,3));

const dest = [1,3,2]
const [a,c]=dest;
console.log(c);

const destobj = {
   name: "Zed",
   age:"unknown"
};
const {age} = destobj;
console.log(age);

let ref = [1,2,3];
let wref = ref;
wref = [...ref];

ref[0] = 2;
console.log(wref);


const refobj = {

   name: "max"
};

const wrefobj = refobj;

refobj.name = "manu";
console.log(wrefobj);