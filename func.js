 function RemoveFromList(allLinks){
	 var command = [];
	 var entryList = [];
	 var site = 'seek';
	 var webData = {};
	 
	 for (var i = 0; i < allLinks.length; ++i) {
    if (document.getElementById('check' + i).checked) {
	 
	  entryList.push(allLinks[i]);
	  }
	 }
	 
	 command.push({
	  'type': 'remove',
	  entry : entryList
	  });
	  
	 // webData = [{website: site}, {entry: entryList}];
	  	  
  //SendMessageToAllTabs(command);
 // SaveToLocalStorage(webData);
  //SaveToLocalStorage(entryList);
}



function showLinks(visibleLinks) {
  var linksTable = document.getElementById('links');
  while (linksTable.children.length > 1) {
    linksTable.removeChild(linksTable.children[linksTable.children.length - 1])
  }
  for (var i = 0; i < visibleLinks.length; ++i) {
    var row = document.createElement('tr');
    var col0 = document.createElement('td');
    var col1 = document.createElement('td');
    var checkbox = document.createElement('input');
    checkbox.checked = false;
    checkbox.type = 'checkbox';
    checkbox.id = 'check' + i;
    col0.appendChild(checkbox);
    col1.innerText = visibleLinks[i];
    col1.style.whiteSpace = 'nowrap';
    col1.onclick = function() {
      checkbox.checked = !checkbox.checked;
    }
    row.appendChild(col0);
    row.appendChild(col1);
    linksTable.appendChild(row);
  }
}

