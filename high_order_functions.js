const user_response = {
    data: [
        {
            id: 1,
            name: 'Refaat',
            age: 25,
            job: 'developer'
        },
        {
            id: 2,
            name: 'Ahmed',
            age: 20,
            job: 'developer'
        },
        {
            id: 3,
            name: 'Sayed',
            age: 22,
            job: 'teacher'
        }
    ],
    status: 200
};

const {data: users} = user_response;

function getUsers(age_param = null) {
    return users.filter(({age}) => age >= age_param);
}

function getUserNames() {
    return users.map((user) => user.name);
}


console.log(getUsers(22)) // get user names above age
console.log(getUserNames())


var grades = [
    {name: 'John', grade: 8, sex: 'M'},
    {name: 'Sarah', grade: 12, sex: 'F'},
    {name: 'Bob', grade: 16, sex: 'M'},
    {name: 'Johnny', grade: 2, sex: 'M'},
    {name: 'Ethan', grade: 4, sex: 'M'},
    {name: 'Paula', grade: 18, sex: 'F'},
    {name: 'Donald', grade: 5, sex: 'M'},
    {name: 'Jennifer', grade: 13, sex: 'F'},
    {name: 'Courtney', grade: 15, sex: 'F'},
    {name: 'Jane', grade: 9, sex: 'F'}
]

//filter
let isBoy = student => student.sex === 'M'
let isGirl = student => student.sex === 'F'

let getBoys = grades.filter(isBoy)
let getGirls = grades.filter(isGirl)

console.log('Boys', getBoys, 'Girls', getGirls)

//map
let studentNames = grades.map(student => student.name)
console.log(studentNames)

let studentNamesAndGrade = grades.map(function (student) {
    return {
        name: student.name,
        age: student.grade
    }
})
console.log(studentNamesAndGrade)


//find
let getStudentByName = function (name) {
    return grades.find(student => student.name === name)
}
/*
let getStudentByName = name => {
    return grades.find(student => student.name === name)
}
* */
console.log('student by name', getStudentByName('John'))


//destructing
const userObj = {
    name: 'refo',
    age: 25
}

var {name:userName, age} = userObj;
console.log(userName, userObj.name)
