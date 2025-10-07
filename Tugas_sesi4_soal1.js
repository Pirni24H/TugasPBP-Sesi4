let studentsScore = [
    {
        name : 'andi',
        score : 90
    },
    {
        name : 'Rudi',
        score: 80
    },
    {
        name : 'Dira',
        score: 100
    },
];

let maxScore = studentsScore[0];

for(let i =1; i < studentsScore.length; i++) {
    if(studentsScore[i].score > maxScore.score) {
        maxScore= studentsScore[i];
    }
}

console.log("Nama : ", maxScore.name);
console.log("Nilai : ", maxScore.score);