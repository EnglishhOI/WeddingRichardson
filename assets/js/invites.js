let invited = [{
    "name":"peterrichardson",
    "slotsAllocated" : 6,
},
{
    "name":"tracyrichardson",
    "slotsAllocated" : 2,
    
},
{
    "name":"carlomagnocauilan",
    "slotsAllocated":2,
},

{
    "name":"rodwinavendano",
    "slotsAllocated" : 4,
    
},

{
    "name":"ma.catherineombi-on",
    "slotsAllocated" : 4,
    
},
{
    "name":"ma.janinaangelinecauilan",
    "slotsAllocated" : 2,
    
},
{
    "name":"charmainecauilan",
    "slotsAllocated" : 2,
    
},
{
    "name":"simonerichardson",
    "slotsAllocated" : 5,
    
},
{
    "name":"kieranscott",
    "slotsAllocated" : 2,
},

{
    "name":"traciemaynard",
    "slotsAllocated" : 5,
}]
let attendee = document.getElementById("attendeesInput");
const errorMessage = document.getElementById('errorMessage');
const getNameAndNum = () => {
    let firstname = document.getElementById("firstname").value.toLowerCase();
    let lastname = document.getElementById("lastname").value.toLowerCase();
    
    let slotsAllo = document.getElementById("allocatedNum");

    
    
    if(!firstname || firstname === '' || !lastname || lastname === ''){
        errorMessage.innerHTML = "Input field is empty";
        errorMessage.style.opacity = "1";
        document.getElementById("contentBox").style.display = "none";
    } else {
        errorMsg = true;
        errorMessage.style.opacity = "1";
        errorMessage.innerHTML = "Invitation not found";
        document.getElementById("contentBox").style.display = "none";
    }
    
    invited.find(invite => {
        if((firstname + lastname) === invite.name) { 
            errorMessage.style.opacity = "0";
            slotsAllo.value = invite.slotsAllocated;
            attendee.setAttribute("max", invite.slotsAllocated);
            document.getElementById("fullNameOutput").innerHTML = firstname.toUpperCase() + " " + lastname.toUpperCase();
            document.getElementById("contentBox").style.display = "flex";
        } else {
            return false;
        }
    })
}

let searchInvBtn = document.getElementById("searchInv");
let sendForm = document.getElementById("sendForm");
//event listeners

searchInvBtn.addEventListener('click', getNameAndNum);
attendee.addEventListener('input', inputAttende);

