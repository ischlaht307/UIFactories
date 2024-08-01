app.Script("dropdown.js");
//Called when application is started.
function OnStart()
{
	//Create a layout with objects vertically centered.
	mainLay = app.CreateLayout( "Linear", "VCenter,FillXY" )

	//Create a text label and add it to layout.
	txt = app.CreateText( "Hello hello helo hello")
	txt.SetTextSize( 32 )
	mainLay.AddChild( txt )
	
	
//	var uif = new uif();
	//var dd = new DropDown(null, mainLay, "Dropdown menu", -1);
	
	var dd = myui.Dropdown(null, mainLay, "Dropdown menu", -1);
	dd.addItems = "items 1x sdfgsdfgsdfg";
	dd.addItems = "items 2";
	dd.addItems = "Items 3";
	dd.AddDropdown();
	
	
	var btn =app.AddButton( mainLay, "ptgffghg" )
	
	//Add layout to app.	
	app.AddLayout( mainLay )



}


/*-
-
-
-
-
-
-
-
-
-
-
-

-
-
-
-
-
-

*/