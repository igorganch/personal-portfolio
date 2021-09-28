

function editName(user){

    return user.firstName + " " + user.lastName;
}

function Hello(){

    const user = {
        firstName : "Igor",
        lastName : "Gancharenka"

    }
    if (user){
    return(
        <p> hello {editName(user)} :)</p>

    );
    }
    else{
        <p> Hello Stranger :P</p>
    }

}
export default Hello;