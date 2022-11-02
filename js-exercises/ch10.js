//older movies
const movieList = [
    {
      title: "Batman",
      year: 1989,
      director: "Tim Burton",
      imdbRating: 7.6
    },
    {
      title: "Batman Returns",
      year: 1992,
      director: "Tim Burton",
      imdbRating: 7.0
    },
    {
      title: "Batman Forever",
      year: 1995,
      director: "Joel Schumacher",
      imdbRating: 5.4
    },
    {
      title: "Batman & Robin",
      year: 1997,
      director: "Joel Schumacher",
      imdbRating: 3.7
    },
    {
      title: "Batman Begins",
      year: 2005,
      director: "Christopher Nolan",
      imdbRating: 8.3
    },
    {
      title: "The Dark Knight",
      year: 2008,
      director: "Christopher Nolan",
      imdbRating: 9.0
    },
    {
      title: "The Dark Knight Rises",
      year: 2012,
      director: "Christopher Nolan",
      imdbRating: 8.5
    }
  ];
  
const moviesBefore2000 = movies => {
    return movies.filter(movie => movie.year < 2000).map(movie => movie.title);
}
console.log(moviesBefore2000(movieList));


//government forms
const governmentForms = [
    {
      name: "Plutocracy",
      definition: "Rule by the wealthy"
    },
    {
      name: "Oligarchy",
      definition: "Rule by a small number of people"
    },
    {
      name: "Kleptocracy",
      definition: "Rule by the thieves"
    },
    {
      name: "Theocracy",
      definition: "Rule by a religious elite"
    },
    {
      name: "Democracy",
      definition: "Rule by the people"
    },
    {
      name: "Autocracy",
      definition: "Rule by a single person"
    }
  ];
  
const formsEndingWithCy = forms => {
    return forms.map(forms => forms.name).filter(name => name.slice(-2) == "cy");
}
console.log(formsEndingWithCy(governmentForms));


//array sum
const arrays = [[1, 4], [11], [3, 5, 7]];

const arraySum = array => {
    return array.flat().reduce((sum, value) => sum + value, 0);
}
console.log(arraySum(arrays)); // Should show 31


//student results
const students = [
    {
      name: "Anna",
      sex: "f",
      grades: [4.5, 3.5, 4]
    },
    {
      name: "Dennis",
      sex: "m",
      country: "Germany",
      grades: [5, 1.5, 4]
    },
    {
      name: "Martha",
      sex: "f",
      grades: [5, 4, 2.5, 3]
    },
    {
      name: "Brock",
      sex: "m",
      grades: [4, 3, 2]
    }
  ];
  
const femaleStudents = students => {
    return students.filter(student => student.sex == "f");
}
const femaleStudentsResults = students => {
    const studentsResults = [];
    for (const student of students){
        let gradeSum = 0;
        let averageGrade = student.grades.reduce((acc, value) => acc + value, 0)/student.grades.length;
        studentsResults.push({
            name: student.name,
            avgGrade: averageGrade
        });
    }
    return studentsResults
}
console.log(femaleStudentsResults(femaleStudents(students)));