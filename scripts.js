// Write your JavaScript code here.
// Remember to pay attention to page loading!


window.addEventListener("load", function(){

let takeOffButton = document.getElementById("takeoff");
let landButton = document.getElementById("landing");
let abortButton = document.getElementById("missionAbort");
let upButton = document.getElementById("up");
let downButton = document.getElementById("down");
let rightButton = document.getElementById("right");
let leftButton = document.getElementById("left");
let rocket = document.getElementById("rocket");
let rocketPosi = 240;

    takeOffButton.addEventListener("click", function(){
        let input = window.confirm("Confirm that the shuttle is ready for takeoff.");
        if (input) {
            document.getElementById("flightStatus").innerHTML = ("Shuttle in flight.");
            document.getElementById("shuttleBackground").style.backgroundColor = "blue";
            document.getElementById("spaceShuttleHeight").innerHTML = "10000";
        } 

        })
            landButton.addEventListener("click", function(){
                let input = window.alert("The shuttle is landing. Landing gear engaged.");
                
                    document.getElementById("flightStatus").innerHTML = ("The shuttle has landed.");
                    document.getElementById("shuttleBackground").style.backgroundColor = "green";
                    document.getElementById("spaceShuttleHeight").innerHTML = "0";
                
            })
            abortButton.addEventListener("click",function(){
                let input = window.confirm("Confirm that you want abort the mission.");
                if (!input){
                    document.getElementById("flightStatus").innerHTML = ("Mission aborted.");
                    document.getElementById("shuttleBackground").style.backgroundColor = "green";
                    document.getElementById("spaceShuttleHeight").innerHTML = ("0");
                }
            })

            upButton.addEventListener("click", function(){
                   document.getElementById("rocket").style.top.replace(rocketPosi) +10;
            })


});