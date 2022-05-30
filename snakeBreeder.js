/*Breeder
-snakes
-enclosures
add snake
add enclosure

Snake
-name
-age
-gender
-location

Enclosure
-snakes
move snake */

class Breeder {
    #snake;
    #enclosure;
    constructor(snake, enclosure){
        this.#snake = [];
        this.#enclosure = [];


    }
    addSnake(name, age, gender, location){
        let newSnake= new Snake(name, age, gender, location);
        this.#snake.push(newSnake);
        alert(name + " was just added to your snakes!");

    }
    addEnclosure(name,snake, state){
        let newEnclosure = new Enclosure(name);
        this.#enclosure.push(newEnclosure);
        alert(name + " was just added to your enclosures!");
    }
    
    viewEnclosures(enclosure){
        return null;
    }
    moveSnake(snake, enclosure){
        snake.setLocation(enclosure);
        enclosure.setState("full");
        alert(snake + "was just moved to" + enclosure + "!");


    }
    getEnclosure(){
        return this.#enclosure;
    }
    printEnclosures(){
        let enclosureList = "";
        for(let i=0; i<this.#enclosure.length; i++){
            let currentEnclosure =this.#enclosure[i];
            enclosureList += i + currentEnclosure.getName();
        }
        alert("you have the following enclosures avalible:" +enclosureList)
    }
}

class Snake {
    #name;
    #age;
    #gender;
    #location;
    constructor(name, age, gender, location){
        this.#name = name;
        this.#age = age;
        this.#gender = gender;
        this.#location = location;

    }
    setLocation(enclosure){
        this.#location = enclosure;
    }
    addSnake(name, age, gender, location){
        let newSnake= new Snake(name, age, gender, location);
        this.snake.push(newSnake);
        console.log(name + "was just added to your snakes!");
    }
    getName(){
        return this.#name;
    }

}
class Enclosure {
    #name;
    #snake;
    #state;
    constructor(name, snake, state){
        this.#name = name;
        this.#snake = [];

    }

    printOptions(){
        

    }
    setSnake(snake){
        this.#snake = snake;
        snake.setLocation(enclosure);


    }
    setState(state){
        this.#state = state;
    }
    addEnclosure(name){
        let newEnclosure = new Enclosure(name);
        this.enclosure.push(newEnclosure);
        console.log(name + " was just added to your enclosures!");
    }
    getName(){
        return this.#name;
    }
    getSnake(){
        return this.#snake;
    }
    printSnakes(){
        let snakeList = "";
        for(let i=0; i<this.#snake.length; i++){
            let currentSnake =this.#snake[i];
            snakeList += i + currentSnake.getName();
        }
        alert("You have " + snakeList + " in this enclosure");
    }
   1
}

let user= new Breeder();

let snakeBreeding =  true;
while (snakeBreeding){
   //prompt to select enclosure, add enclosure or add snake
   let selectOrCreate = Number(prompt("Would you like to (1) select an enclosure (2) add an enclosure or (3) add a snake"));
    
   if(selectOrCreate == 1){
    //print avalivle enclosures...
    user.printEnclosures();
    let enclosureChoice = Number(prompt("Please type the index of the enclosure you want "));
    let currentEnclosure = user.getEnclosure[enclosureChoice];
    let inEnclosure = true;
    while(inEnclosure){
        let selectSnakeChoice = Number(prompt("Would you like to (1) view snakes or (2) go back?"));
        if(selectSnakeChoice==1){
            currentEnclosure.printSnakes
            let snakeChoices = Number(prompt("Please type the index of the snake you want to select"));
            let avalibleSnakes = currentEnclosure.printSnakes[snakeChoice]
            let snakeSelected = true;
              while(snakeSelected){
                let moveSnake= Number(prompt("Would you like to (1)move this snake or (2) go back?"))
                if(moveSnake==1){
                    snake.setLocation();
                } else {
                    snakeSelected= false;
                }
            }
        } else if (selectSnakeChoice==2){
            inEnclosure = false;
        }
    }
   } else if (selectOrCreate==2){
       let enclosureName = prompt("What is the name of your new enclosure?");
       user.addEnclosure(enclosureName);
   } else {
   let snakeName = prompt("What is the name of your new snake?");
   let snakeAge = Number(prompt("How old is " + snakeName + "?"));
   let snakeGender = prompt("What is " + snakeName + "'s gender?");
   let enclosures = user.getEnclosure();
   let snakelocation = prompt("which enclosure would you like to place " + snakeName + "? " + enclosures +  " are you avalible enclosures" );

       user.addSnake(snakeName, snakeAge, snakeGender, snakelocation);
   }
}


    //wile in enclosure

        // print snakes inside

        //prompt to slect snakes or go back

            //while snake selected

            //prompt to move or go back
