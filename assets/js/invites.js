let invited = [{
    "name":"peterrichardson",
    "invNum" : 1,
    "slotsAllocated" : 8,
},
{
    "name":"tracyrichardson",
    "invNum" : 2,
    "slotsAllocated" : 4,
    
}]


let firstname = "";
let lastname = "";
let inviteNum = "";

const getNameAndNum = () => {
    let firstname = document.getElementById("firstname").value.toLowerCase();
    let lastname = document.getElementById("lastname").value.toLowerCase();
    let inviteNum = document.getElementById("invitationNum").value;
    const errorMessage = document.getElementById('errorMessage');
    
    if(!firstname || firstname === ''){
        errorMessage.style.opacity = "1";
        errorMessage.innerHTML = "first name is incorrect";
    } else if(!lastname || lastname === ''){
        errorMessage.style.opacity = "1";
        errorMessage.innerHTML = "Last name is incorrect";
    } else if(!inviteNum || inviteNum == '') {
        errorMessage.style.opacity = "1";
        errorMessage.innerHTML = "No invite number detected";
    } else {
        errorMessage.style.opacity = "0";
        //display name
    }
    
    let fullname = firstname + lastname;

    //finds full name of     
    let inivtedFilter = invited.find(invite => {
        if(fullname === invite.name || inviteNum === invite.invNum){
        return true
        };
    })

    console.log(inivtedFilter.slotsAllocated);
    

}

const searchInvBtn = document.getElementById("searchInv");
searchInvBtn.addEventListener('click', getNameAndNum);


