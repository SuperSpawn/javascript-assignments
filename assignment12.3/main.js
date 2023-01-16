


function findId (array, id) {
    for(let i in array) {
        if(array[i].id === id) return array[i];
    }
}

const school = {
    teachers: [
        {
            id: 1,
            name: "Pinchas",
            subjects: ["chemistry", "biology", "physics"],
            students: [],
            capacityLeft: 3,
        },
        {
            id: 2,
            name: "Williams",
            subjects: ["history", "ethics"],
            students: [],
            capacityLeft: 2,
        },
    ],
    students: [
        {
            id: 10,
            name: "Jennifer",
            age: 20,
        },
        {
            id: 11,
            name: "Howard",
            age: 23,
        },
        {
            id: 12,
            name: "Old-Timmy",
            age: 86,
        },
        {
            id:13,
            name: "Houston",
            age: 21,
        },
    ],

    
    findPerson(type, id) {
        switch (type) {
            case 'student': return findId(this.students, id);
            case 'teacher': return findId(this.teachers, id);
        }
    },
    assignStudent(id, subject) {
        let teacher;
        for(let i in this.teachers) {
            for(let j in this.teachers[i].subjects) {
                if(this.teachers[i].subjects[j] === subject) {
                    if(this.teachers[i].subjects[j].capacityLeft !== 0) {
                        this.teachers[i].subjects[j].capacityLeft--;
                        this.teachers[i].students.push(this.findPerson('student', id));
                        return;
                    }
                }
            }
        }
        console.log('No space left for students');
    },

    addStudent(id, name, age) {
        let student = {
            id: id,
            name: name,
            age: age
        };

        this.students.push(student);
    }

};














