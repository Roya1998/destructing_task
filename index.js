//Part1 
const studentProfile = {
      name:'Ahmet',
      age:26,
      course:'English',
      hobbies:['running, cooking', 'reading']
};

delete studentProfile.course;

//Part 2

const {name:studentName,age, ...rest}=studentProfile; 

console.log(studentName, age,rest);


// Part 3

const grades=[85,92,78,95];

console.log(grades[0], grades[1]);

//Part 4

const additionalInfo={
    adress:'Nizami district, Baku city',
    phoneNumber:'0703844553'
}

const compeleteProfile={
    ...studentProfile,
    ...additionalInfo
}

console.log(compeleteProfile);

