
//Called when application is started.
function OnStart()
{
	//Create a layout with objects vertically centered.
	mainLay = app.CreateLayout( "Linear", "VCenter,FillXY" )

	//Create a text label and add it to layout.
	txt = app.CreateText( "Hello hello helo hello")
	txt.SetTextSize( 32 )
	mainLay.AddChild( txt )
	
	var dd = new DropDown(null, mainLay, "Dropdown menu", -1);
	dd.addItems = "items 1x sdfgsdfgsdfg";
	dd.addItems = "items 2";
	dd.addItems = "Items 3";
	dd.AddDropdown();
	
	//Add layout to app.	
	app.AddLayout( mainLay )



}

class uif{
				constructor(mode){
									this.theme = mode;
				}
}


//var Drop = 
class DropDown extends uif{
    constructor(mode, layout, name,  size){
        super(mode);
            this._name = name;
            this._size = size;
            this._layout = layout;
            this._items = []; 
              //this.AddDropdown();
        }
        get items(){
           return this._items;
        }
        
       set addItems(x){
           this._items.push(x);
        }
        AddDropdown(){
          var dropdownlay = app.AddLayout(this._layout, "Linear", "Center")
        	        dropdownlay.SetSize(-1, -1 );
        	        dropdownlay.SetBackColor( "#00000000" )
        	        
        		   var ddtoggle = app.AddButton(dropdownlay, "[fa-angle-down]"+"  "+this._name,-1,-1, "FillX, SingleLine, Custom, FontAwesome")
                       ddtoggle.SetStyle("white","lightgrey", 2, "#00000000",0,0.6  )
                       ddtoggle.SetTextColor( "#FF000000" )
                       ddtoggle.SetMargins(0,0,0,0);
                       ddtoggle.SetPadding(40,40,40,40,"px");
                       ddtoggle.SetTextSize( 24, "ps" )
                       
                     var menulayabs = app.AddLayout(dropdownlay, "Absolute" ,"FillXY")
                         var btnlay = app.AddLayout(menulayabs, "Linear", "Vertical,FillX" )
                         btnlay.Hide();
                      
                       
                       let i = 0;
                       let pos_top = 100;
                          for(i; i<this._items.length; i++){
                              let p = i+1;
                        			var dlist = app.AddButton(btnlay, this._items[i], -1, -1, "FillX" )
                        			       dlist.SetPosition(0,pos_top*i, -1,-1, "px" )
                        			       dlist.SetPadding( 40,8,40,8, "px")
                        			       dlist.SetMargins(0,-14,0,0, "px")
                        }//END for loop
                           ddtoggle.data.toggle = btnlay;
                          ddtoggle.SetOnTouch( this.ToggleDropdown )
                          return dropdownlay;
                      
        }//AddDropdown-----END---END
         ToggleDropdown(data){
         if(this.data.toggle.IsVisible())this.data.toggle.Animate("SlideToTop", ()=> {ddtoggle.SetText("[fa-angle-up]"+"  "+this._name )}, 600);
          else	this.data.toggle.Animate("SlideFromTop", {()=> ddtoggle.SetText("[fa-angle-down]"+"  "+this._name )}, 600);
         }
        //get
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