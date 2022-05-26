// we can make only one as default. other we have export through curly bracket.
// what we import the default one we can gave any name. but other one we have give same 
// name.
// we can export n number of object. non default one will be in curly braces.
const youtuber = "thapa"
const prog = "Hello world"

const h = () => {
    let fname="prallad"
    return fname
}

let greeting =()=>{
 let greet = "Good Evening";
 return greet
}
export default youtuber;
export {prog, h};  // non default object
export {greeting};





