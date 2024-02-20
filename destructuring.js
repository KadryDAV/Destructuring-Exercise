//1
//numPlanets = 8;
//yearNeptuneDiscovered = 1846;

//2
//discoveryYears = {yearNeptuneDiscovered: 1846, yearMarsDiscovered: 1659};

//3
//'your name is undefined and your favorite color is green'

//4
//Maya
//Marisa
//Chi

//5
//'Raindrops on roses'
//'whiskers on kittens'
//['Bright copper kettles', 'warm woolen mittens', 'Brown paper packages tied up with strings']

//6
[10,30,20]

//ES2015 Assigning Variables to Object Properties
const {a, b} = obj.numbers;

//ES2015 Array Swap
const arr = [1,2];
[arr[0], arr[1]] = [arr[1], arr[0]];

//raceResults
raceResults(['Tom', 'Margaret', 'Allison', 'David', 'Pierre'])
const raceResults = ([first, second, third, ...rest]) => ({first,second,third,rest})