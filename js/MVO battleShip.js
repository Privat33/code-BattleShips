// the object Model will contain all the method that we will create
// -------------------------------Model-----------------------------------------------------------------------//
var Model = {
	
	var Board = Octopus.viewBoard;


	function selectRandom(Board){
	    // create an empty list
	    list=[];
	    // do the next portion of code 6 times
	    for(let i=0;i<6;i++){
	        // select one list randomly in the list Board
	        var randomSelect= Board[Math.floor(Math.random()*Board.length)];
	        // select one element randomly in the list selected randomly
	        var selectRandomly= randomSelect[Math.floor(Math.random()*randomSelect.length)];
	        // if an element we select is in our list
	        if(list.includes(selectRandomly)==true){
	            // we decrement
	            i=i-1
	        // else
	        }else{
	            // we write the element selected in the list
	            list.push(selectRandomly);
	        }   
	    }    
	    // we return the list
	    return list;
	}

	// we create an object validBoardShipPosition and put our function inside
	var validBoardShipPosition=selectRandom(Board);



}

Model.selectRandomly(Board);
// --------------------------------Octopus------------------------------------------------------------------//
var Octopus = {

	
	// create a function changeId that will change the id of all the cells in the table
	function changeId(){
	    // create an empty list called listId
	    listId=[];
	    // get the element table of index 0 in the DOM
	    var table=document.getElementsByTagName('table')[0];
	    // open the object Board in the object board
	    var board = View.Board;
	    // get all the element in the DOM with the tagName tr
	    var rows=table.getElementsByTagName("tr");
	    // open the object board in a object list
	    var list=board;
	    // browse all the element in the object rows and list 
	    for(let i=0;i<=rows.length-1 && i<=list.length-1;i++){
	        // for every element get the element with tagName td
	        var row=rows[i].getElementsByTagName("td");
	        // create an element that wil contain all the element in the list
	        var list1=list[i];
	        // browse all the element in the new object row and the new object list1
	        for(let j=0;j<=row.length-1 && j<=list1.length-1;j++){
	            // put every element in the object cols
	            var cols=row[j];
	            // put all the element in the list in the object id 
	            var id=list1[j];
	            // change the id of all the cells of pur table
	            cols.id=id;
	            // write those those new id in the listId
	            listId.push(id);
	        }
	       
	    }
	    // return the listId
	    return listId;
	},
	

	
	// we create a list shipFind that is empty
	var shipFind=[];
	// we create a function that will verify if the user have found all the ship
	function verifyUserFindAllShips(){
	    // if the length of the ship is equal to 6
	    if(shipFind.length==6){
	        // get the with the id messageArea in the DOM
	        var msg=document.getElementById('messageArea');
	        // write the message under as his attrbute
	        View.newMessage2;
	    }
	    // return the message
	    return msg;
	},

	// create a function that will verify if the user miss or hit a ship
	function verifyIfMissOrHit(Model.validBoardShipPosition){
	    // get the element with id messageArea in the DOM
	    var message=document.getElementById('messageArea');
	    // get the value of the element with id guessInput in the DOM
	    var guess=document.getElementById('guessInput').value;
	    // if what the user enter is in the listId
	    if(listId.includes(guess)){
	        // get the element that have as id the input of the user
	        var guessUser=document.getElementById(guess);
	        // if the name entered by the user is the board
	        if(validBoardShipPosition.includes(guess)==true){
	            // write what the user entered in the list 
	            shipFind.push(guess);
	            // affect the class hit to that object
	            guessUser.className +=''+"hit";
	            View.newMessage;
	            // execute the function verifyUserFindAllShip
	            verifyUserFindAllShips();
	        // else
	        }else{
	            // affect the class miss to the object
	            guessUser.className+=''+"miss";
	            // write Ypu miss it try again1
	            View.newMessage1;
	        }
	    }
	        //else 
	    	else{
	        // alert The value entered is not on the board try again!
	        alert("The value entered is not on the board try again!");
	    	}
	    
	    
	

		var viewBoard = View.Board;


}

Octopus.changeId();

// -------------------------------------View--------------------------------------------------------------------//
var View = {

	function createTable(){
	    // create a list of letters from A to G
	    var alphabet=["A", "B", "C", "D", "E", "F", "G"];
	    // create a empty list called table
	    var table=[]; 
	    // browse all the element in the object alphabet with the for loop
	    for(let x=0;x<=alphabet.length-1;x++){
	        // create a empty list called list
	        var list=[];
	        // get all the value from 0 to 6 one by one with a for loop
	        for(let y=0;y<=6;y++){
	            // write one letter and one number in the object newId
	            var newId=alphabet[x].concat(y);
	            // write the object newId in the object list that we've created
	            list.push(newId);
	        }
	        // write the final object list in the object table that we've created
	        table.push(list);
	    }
	    // return the value of the table
	    return table;
	    
	}

	var Board = createTable();
	// write the message You got it!
	var newMessage = (Octopus.message.innerHTML='You got it!');
	var newMessage1 = (Octopus.message.innerHTML='You miss it try again!');
	var newMessage2 = (Octopus.msg.innerHTML='Congratulation you got all the ship! You win!!');
	

}

View.createTable();