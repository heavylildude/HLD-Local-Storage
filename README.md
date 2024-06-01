# HLD-Local-Storage
Small Js library to work with HTML5 Local Storage

# Initial upload, will update later if I got time
# Feel Free To Use and Share
# Please don't remove the copyright
You can use chrome Developer Tools > Application > Local Storage to test

Start with a simple array, example:

	 data_arr = [
	 	{"ID":1, "nama": "udin", "sport":"football"},
	 	{"ID":2, "nama": "unang", "sport":"volley"},
	 	{"ID":3, "nama": "joko", "sport":"basket"}
	];

Below are the functions:

1) TO CHECK IF LOCAL STORAGE KEY EXIST
param: __checkLS(databasekey_name)
return: true/false

USAGE EXAMPLE:
			
	 __checkLS("dataku");

2) TO SET LOCAL STORAGE
Here we save data_array example on top to a key named "dataku"
param: __setLS(databasekey_name, data_array)
return: true/false

USAGE EXAMPLE
			
	 __setLS("dataku", data_arr);


3) TO DELETE LOCAL STORAGE
Here we delete local storage with key named "dataku"
param: __deleteLS(databasekey_name)
return: true/false

USAGE EXAMPLE
			 
	__deleteLS("dataku");

4) TO GET BY LOCAL STORAGE KEY
Here we can get localstorage content directly
param: _getLS(databasekey_name)

USAGE EXAMPLE:
			 
	alert(__getLS("dataku")[0]["ID"]	+ ' || ' + __getLS("dataku")[0]["nama"]);

5) TO UPDATE LOCAL STORAGE ROW ENTRY BY: ID, ARRAYKEY, ARRAY_KEY_VALUE
we can update by ID
param: __updaterowLS(ID_to_update_integer, fieldToUpdate, updatedEntry, databasekey_name)

USAGE EXAMPLE:

	__updaterowLS(1, "sport", "balap motor", "dataku");
			
6) TO DELETE LOCAL STORAGE ROW ENTRY BY ID
param: __delrowLS(ID_to_delete, databasekey_name)

USAGE EXAMPLE:
			 
	__delrowLS(2, "dataku");

7) TO INSERT NEW LOCAL STORAGE ROW ENTRY
param: __insertrowLS(array_to_insert, databasekey_name)

USAGE EXAMPLE:

   	var namakey = "dataku";
	data_new = [{
		"nama": "John", 
		"sport":"parasailing"
	}];

   	__insertrowLS(data_new, namakey);


### EXAMPLE OF DISPLAYING LOCAL STORAGE DATA TO HTML TABLE

	arrnya = __getLS("dataku");

FIRST WE POPULATE ALL:
	
 	var populate = "";
	var row = "";
	for (i=0; i<arrnya.length; i++) {
		for (key in arrnya[i]) {
			populate = '<td>' + arrnya[i][key] + '</td>';
			row = row + populate;
		}
		row = '<tr>' + row + '</tr>';
			
	}
				
THEN SIMPLY OUTPUT TO <table id="inidia"></table>

	var x = document.getElementById("inidia");
	x.innerHTML = '<tr><th>ID</th><th>nama</th><th>sport</th></tr>' + row;
