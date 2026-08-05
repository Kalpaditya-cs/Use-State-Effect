const initialPersons = [
  { id: 1, name: "Rahul", age: 25, city: "Jaipur" },
  { id: 2, name: "Aman", age: 19, city: "Delhi" },
  { id: 3, name: "Jitendra", age: 22, city: "Mumbai" },
  { id: 4, name: "Rohit", age: 28, city: "Pune" },
  { id: 5, name: "Ankit", age: 20, city: "Delhi" },
  { id: 6, name: "Karan", age: 24, city: "Jaipur" },
];

const grouped = initialPersons.reduce((result,person) => {
  if(!result[person.city]){
    result[person.city] = []
  }
  result[person.city].push(person.name)
  return result
},{})
console.log(grouped)