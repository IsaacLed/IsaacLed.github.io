alert("You are on a camping trip with two of your friends. However one of your friends goes missing... You set out to find him!")

let Bag1_or_bag2 = prompt("Before you head out you realize you should take some gear. Do you take backpack (1) containing some food, a machete, and a heated blanket or do you take backpack (2) containing matches, a first aid kit and a compass? Type 1 or 2 for wich bag you would like to take")

if(Bag1_or_bag2 ==1){
    let gofoward_goback = prompt("after seatching for a few hours you think you should head back before you get lost yourself. Do you (1) keep looking for your friend or (2) go back to the campsite?");
    if (gofoward_goback==1){
        alert("You look for your friend for several days, eventually you run out of food and starve to death... You lose!");
    } else{
        let go_or_stay = prompt("Heading back you hear your friend screaming in the distance!!! You rush to him you stumble into a bear trap.... you also see your friend tied to a tree. You manage to make your way to him and cut him free. Do you then (1) send you friend to the camp to get help or (2) have your friend help you back to the camp with a bear trap on your leg?");
        if (go_or_stay==1){
            alert("Great news, your friend makes it back to the campsite for help!! However by the time they come back and find you you have bled out and died...")
        }else {
            alert(" So you and your friend head back to camp. But your friend notices you becomming heaviery and heavier with every step... you can no longer walk and all this walking has lead you to bleed even faster. Your friend checks your pulse but feels nothing. You died...")
        }
    }
}else{
    let gofoward2_goback2 = prompt("after seatching for a few hours you think you should head back before you get lost yourself. Do you (1) keep looking for your friend or (2) go back to the campsite?");
    if(gofoward2_goback2==1){
        let gofoward3_goback3 = prompt("Since conintuing you've had to use up your matches to cook and eat wild caught snakes, but no sign of your friend... You think again should you (1) keep looking or (2) head back to camp?");
        if(gofoward3_goback3==1){
            alert("Great you keep looking for your friend! however you soon spend days alone in the woods and run out of matches. You get cold and hungry. Eventually the elements take you and you die of starvation....")
        }else {
            alert("So you decided to head back to camp! Great news, you make it back!! but your friend does not... hes found several days later chewed up and mauled by a bear. You failed...")
        }
    }else{
        let send_or_go = prompt("Heading back you hear your friend screaming for help!!! Rushing towards him you stumble into a bear trap... but you also see your friend tied to a tree. You manage to make your wat to him and burn the rope with your matches! Your friend helps you use the first aid kit from your bag to slow down the bleeding. but now, do you (1) send your friend to camp with the compass and come back with help or (2) have your friend help you back to camp with a bear trap on your leg?");
        if(send_or_go==1){
            alert("Your friend makes it to the capsite!! Gets help right away and comes back for you, but by the time they reach you you loose alot of blood. But you survive!!!! You and all your friend make it safely out of the woods!!!")
        }else{
            alert("Your friend helps you up and you both make your way towards the camp! Hours of walking with a bear trap has caused you to loose a lot of blood... too mucch blood. You pass out and your friend checks your pulse, but he feels nothing. You died...")
        }
    }
} alert(" The End.")
