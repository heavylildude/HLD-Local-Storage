# HLD-Local-Storage
Small Js library to work with HTML5 Local Storage

// /// /// EXAMPLES //// /////////////////////////////
// Initial upload // Will update later if I got time
// Feel Free To Use and Share // Please don't remove the copyright

  // // EXAMPLE DATA ARRAY
	data_arr = [
		{"ID":1, "nama": "udin", "sport":"football"},
		{"ID":2, "nama": "unang", "sport":"volley"},
		{"ID":3, "nama": "joko", "sport":"basket"}
	];


	// // // CHECK IF LOCAL STORAGE KEY EXIST // // // // // //// // //
	// param: __checkLS(databasekey_name)
	// return: true/false
  
  // // // SET LOCAL STORAGE // // // // // //// // //
	// param: __setLS(databasekey_name, data_array)
	// return: true/false

	// // // DELETE LOCAL STORAGE // // // // // //// // //
	// param: __deleteLS(databasekey_name)
	// return: true/false
  
 	// // // GET BY LOCAL STORAGE KEY // // // // // //// // //
	// param: _getLS(databasekey_name)
  
	// // // UPDATE LOCAL STORAGE ROW ENTRY BY ID, ARRAYKEY, ARRAY_KEY_VALUE // // // // // //// // //
	// param: __updaterowLS(ID_to_update_integer, fieldToUpdate, updatedEntry, databasekey_name)
  
	// // // DELETE LOCAL STORAGE ROW ENTRY BY ID // // // // // //// // //
	// param: __delrowLS(ID_to_delete, databasekey_name)
  
	// // // INSERT NEW LOCAL STORAGE ROW ENTRY // // // // // //// // //
	// param: __insertrowLS(array_to_insert, databasekey_name)
