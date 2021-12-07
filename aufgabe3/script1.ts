// -- [Aufgabe 1]

/**
 * @var {number} age: Bitte anstatt der 24 dein Alter eintragen
 */
let age: number = 21; 

/**
 * @var {string} firstName: Bitte anstatt 'Max' deinen Vornamen eintragen
 */
let firstName: string = `Luis`; 

function func1(age: number): number { 
  return 2021 - age;        
}

let output: string = func2(firstName); 

function func3(meal?: string): string { 
  console.log(`Ich esse gerne ${meal || "Pizza"}.`);
  return func1(age) > 1995 
    ? `Ich gehöre zur Generation Z` 
    : `Ich gehöre zur Generation Y`; 
}

console.log(output); 

function func2(name: string): string { 
  console.log(`Ich heiße ${name}.`); 
  return func3();
}

/* -- HIER BITTE IHRE LÖSUNG ZUR AUFGABE 1 EINTRAGEN
 * Ich heiße Luis.
 * Ich esse gerne Pizza.
 * Ich gehöre zur Generation Z
 */

// -- [Aufgabe 2]

let events: (string | number) [][] = [
  ["Mark Knopfler", 10.1],
  ["Pink Floyd", 15.9],
  ["Metallica", 20.1],
  ["Michael Bublé", 11.1],
  ["Dire Straits", 12.2],
  ["Mariah Carey", 1.1],
  ["Cat Stevens", 12.99],
  ["Mark Forster", 2.1],
  ["Helene Fischer", 3.1],
  ["Bee Gees", 25.2]
];

// -- HIER BITTE IHRE LÖSUNG ZUR AUFGABE 2 EINTRAGEN

// Lösung a) 
console.log(`Das ist die länge der events: ${events.length}`);

// Lösung b) 
for (let outerIndex: number = 0; outerIndex < events.length; outerIndex++) {
  console.log(`${events[outerIndex]}`); }
  /* for (let i= 0; i< events.lenght; i++{
    console.log(events[i], events[i][1]);
  } ) */

// Lösung c)
/*
function maxPrice(array: any [][]): number {
  let resultat = 0;
  for (let i: number = 0; i < array.length; i++) {
    if (array[i][1] > resultat) {
      resultat = array[i][1];
    }
  }
  return resultat;
}


// Lösung d)
console.log(isArtistExistent(events, "Metallica"));

function isArtistExistent(_events: (string | number)[][], _artistNmae: string):
boolean {
  for (let outerIndex: number = 0; outerIndex < events.length; outerIndex++) {
    if (_events[outerIndex][0] == _artistNmae) {
      return true;
    }
  }
  return false;
}

function interpretSearch(array: any[][], interpret: string): boolean {
  for (let i = 0; i < array.length; i++) {
    if (array [i][0] == interpret) {
      return true;
    }
  }
} console.log(interpretSearch(events, "Metallica"));

// Lösung e) .
function factorial(n: number): void {
  let i: number = 1;
  let ergebnis: number = 1;
  while (i <= n) { 
      ergebnis = ergebnis * i; 
      i = i + 1;
  }
  console.log(ergebnis); 
}
// Lösung f)
let count: number = 0;
for (let i: number = 1; i < 100; i++) {
  if (i % 3 == 0) {
    count++;
    console.log(i);
    }
  } 
console.log("count: ", count);




/*mycode->function dividable(): void {
  for (let i: number = 1; i < 100; i++) {
      if (i % 3 == 0) {
          let f: String = "Fizz";
          console.log(f);
      } else if (!(i % 3 == 0) && i % 5 == 0) {
          let b: String = "Buzz"; 
          console.log(b);
      } else {
          console.log(i);
      }
  }
}
dividable();

/* let count: number= 0;
for (let i= 1; i<=100; i++){
  if (i % 3 == 0){
    count++;
    consolelog(i);
  }
} console.log("count: ", count);*/
/*
// Lösung g)
class ConcertEvents {
  price: number;
  interpret: string;
  constructor(price: number, interpret: string) {
    this.interpret = interpret;
    this.price = price;
  }

  public show(): void {
    console.log(this.interpret, this.price);
  }
}
let c: ConcertEvents = new ConcertEvents(20.1, "Metallica");

// Lösung h)
/*let artistList: ConcertEvents[];
for (let i: number = 0; i < events.length; i++) {
  let neu: ConcertEvents = new ConcertEvents(events[i][1], events[i][0]);
  artistList.push(neu);
}
for (let i: number = 0; i < artistList.length; i++) {
  artistList[i].show();
}*/

/*
let artistList: ConcertEvents[] = [];

for (let i: number = 0; i < events.length; i++) {
  artistList.push(new ConcertEvents(<number>events[i][1], <string>events[i][0]));
  
}
    artistList.forEach(concertEvents => concertEvents.show());*/