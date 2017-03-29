
var lines = "______________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________";

 var menuName = "SkidClient";
 var ctx=com.mojang.minecraftpe.MainActivity.currentMainActivity.get();
 var info = true;
 
var logNum = 1;

 ModPE.log(logNum);

 MenuBtn();
print("Welcome "+ Player.getName(Player.getEntity()) +" to skidclient MCPE! Check for updates at http://www.skidclient.weebly.com/");

function MenuBtn(){
ctx.runOnUiThread(new java.lang.Runnable({run:function(){
try{
var layout=new android.widget.LinearLayout(ctx);
layout.setOrientation(1);
var menuBtn=new android.widget.Button(ctx);
menuBtn.setText("ಠ_ಠ");
menuBtn.setOnClickListener(new android.view.View.OnClickListener({
onClick:function(viewarg){ 
tempMenu();
xbutton();

}}));
layout.addView(menuBtn);

                    tempBtn=new android.widget.PopupWindow(layout,android.widget.RelativeLayout.LayoutParams.WRAP_CONTENT,android.widget.RelativeLayout.LayoutParams.WRAP_CONTENT);
tempBtn.setBackgroundDrawable(new android.graphics.drawable.ColorDrawable(android.graphics.Color.TRANSPARENT));

tempBtn.showAtLocation(ctx.getWindow().getDecorView(),android.view.Gravity.RIGHT|android.view.Gravity.CENTER,0,0);
}catch(err){print("temp err : "+err)}}}));} 

var ctx = com.mojang.minecraftpe.MainActivity.currentMainActivity.get();



function modTick(){
}



function xbutton(){
clientMessage("§1"+menuName+"§a opened!");
}
 
          
          
function tempMenu(){
var ctx=com.mojang.minecraftpe.MainActivity.currentMainActivity.get();
ctx.runOnUiThread(new java.lang.Runnable({
run:function(){
try{
var menuLayout=new android.widget.LinearLayout(ctx);
var menuScroll=new android.widget.ScrollView(ctx);
var menuLayout1=new android.widget.LinearLayout(ctx);
menuLayout.setOrientation(1);
menuLayout1.setOrientation(1);
menuScroll.addView(menuLayout);
menuLayout1.addView(menuScroll);


//menu title
           var text=new android.widget.TextView(ctx);
text.setTextSize(19);
//change text to whatever 

text.setText("Welcome to Skid Client v0.5, "+ Player.getName(Player.getEntity()) +"!");
text.setGravity(android.view.Gravity.CENTER);text.setTextColor(android.graphics.Color.GREEN);

     
text.setBackgroundDrawable(new android.graphics.drawable.ColorDrawable( android.graphics.Color.BLUE));       
menuLayout.addView(text);

//scrollin text
var scrollText = new android.widget.TextView(ctx);
scrollText.setText(lines);
scrollText.setTextSize(5);                                                                                  scrollText.setTextColor(android.graphics.Color.GREEN);
scrollText.setBackgroundDrawable(new android.graphics.drawable.ColorDrawable(android.graphics.Color.TRANSPARENT));
scrollText.setEllipsize(android.text.TextUtils.TruncateAt.MARQUEE);
scrollText.setMarqueeRepeatLimit(-1);
scrollText.setSingleLine();
scrollText.setHorizontallyScrolling(true);
scrollText.setSelected(true);
menuLayout.addView (scrollText);
//end


//author 
var text2=new android.widget.TextView(ctx);
text2.setTextSize(16);
//MadeBy Edit

text2.setText("Made By James lel");
text2.setGravity(android.view.Gravity.CENTER);
text2.setTextColor(android.graphics.Color.GREEN);

text2.setBackgroundDrawable(new android.graphics.drawable.ColorDrawable( android.graphics.Color.CYAN));       
menuLayout.addView(text2);


//scrollin text
//This Error is a glitched error. Things will run fine
var scrollText = new android.widget.TextView(ctx);
scrollText.setText("Welcome "+ Player.getName(Player.getEntity()) +" to skidclient 0.5!");
scrollText.setTextSize(10);                                                                                  scrollText.setTextColor(android.graphics.Color.YELLOW);
scrollText.setBackgroundDrawable(new android.graphics.drawable.ColorDrawable( android.graphics.Color.TRANSPARENT ));
scrollText.setEllipsize(android.text.TextUtils.TruncateAt.MARQUEE);
scrollText.setMarqueeRepeatLimit(-1);
scrollText.setSingleLine();
scrollText.setHorizontallyScrolling(true);
scrollText.setSelected(true);
menuLayout.addView (scrollText);
//end



//close btn
           var button=new android.widget.Button(ctx);
button.setText("close the menu");

         
button.setBackgroundDrawable(new android.graphics.drawable.ColorDrawable(android.graphics.Color.TRANSPARENT));       
 button.setTextColor(android.graphics.Color.RED);

button.setOnClickListener(new android.view.View.OnClickListener({
onClick:function(viewarg){

 MenuVarible.dismiss();
//put the mod code here
clientMessage("§1"+menuName+": §4Hacks closed!");

}}));
menuLayout.addView(button);



//btn
           var button=new android.widget.Button(ctx);
button.setText("PLAYER");

         
button.setBackgroundDrawable(new android.graphics.drawable.ColorDrawable(android.graphics.Color.BLACK));       
 button.setTextColor(android.graphics.Color.BLUE);

button.setOnClickListener(new android.view.View.OnClickListener({
onClick:function(viewarg){

//The error on 177 is a false, Functions are normal and script runs fine :(
}}));
menuLayout.addView(button);



//btn
           var button=new android.widget.Button(ctx);
button.setText("Fill Hunger");

         
button.setBackgroundDrawable(new android.graphics.drawable.ColorDrawable(android.graphics.Color.TRANSPARENT));       
 button.setTextColor(android.graphics.Color.GREEN);

button.setOnClickListener(new android.view.View.OnClickListener({
onClick:function(viewarg){

Player.setHunger(20);
clientMessage("§1Hunger refilled");

}}));
menuLayout.addView(button);



//btn
           var button=new android.widget.Button(ctx);
button.setText("Reset FOV");

         
button.setBackgroundDrawable(new android.graphics.drawable.ColorDrawable(android.graphics.Color.TRANSPARENT));       
 button.setTextColor(android.graphics.Color.GREEN);

button.setOnClickListener(new android.view.View.OnClickListener({
onClick:function(viewarg){

ModPE.resetFov(0)
clientMessage("§1Your FOV has been reset");

}}));
menuLayout.addView(button);



//btn
           var button=new android.widget.Button(ctx);
button.setText("Heal");

         
button.setBackgroundDrawable(new android.graphics.drawable.ColorDrawable(android.graphics.Color.TRANSPARENT));       
 button.setTextColor(android.graphics.Color.GREEN);

button.setOnClickListener(new android.view.View.OnClickListener({
onClick:function(viewarg){

Player.setHealth(20)
clientMessage("§1Healed");

}}));
menuLayout.addView(button);



//btn
           var button=new android.widget.Button(ctx);
button.setText("Push Me :>");

         
button.setBackgroundDrawable(new android.graphics.drawable.ColorDrawable(android.graphics.Color.TRANSPARENT));       
 button.setTextColor(android.graphics.Color.GREEN);

button.setOnClickListener(new android.view.View.OnClickListener({
onClick:function(viewarg){

setVelY(getPlayerEnt(), 6);
clientMessage("§1RIP MUAHAHA");

}}));
menuLayout.addView(button);



//button Sonic
           var button=new android.widget.Button(ctx);
button.setText("Griefing tools");

         
button.setBackgroundDrawable(new android.graphics.drawable.ColorDrawable(android.graphics.Color.BLACK));       
 button.setTextColor(android.graphics.Color.BLUE);

button.setOnClickListener(new android.view.View.OnClickListener({
onClick:function(viewarg){


}}));
menuLayout.addView(button);



//btn
           var button=new android.widget.Button(ctx);
button.setText("Explode");

         
button.setBackgroundDrawable(new android.graphics.drawable.ColorDrawable(android.graphics.Color.TRANSPARENT));       
 button.setTextColor(android.graphics.Color.GREEN);

button.setOnClickListener(new android.view.View.OnClickListener({
onClick:function(viewarg){

explode(getPlayerX(),getPlayerY(),getPlayerZ(),15);
clientMessage("§1Exploded!");

}}));
menuLayout.addView(button);



//btn
           var button=new android.widget.Button(ctx);
button.setText("Nuker");

         
button.setBackgroundDrawable(new android.graphics.drawable.ColorDrawable(android.graphics.Color.TRANSPARENT));       
 button.setTextColor(android.graphics.Color.GREEN);

button.setOnClickListener(new android.view.View.OnClickListener({
onClick:function(viewarg){
if(!destroy){
    destroy = true;
    option = true;
    print("Tap where you want to destroy")
}else{
    destroy = false;
    option = false;
    print("Nuker has been disabled!")
}
}}));
menuLayout.addView(button);



//btn
           var button=new android.widget.Button(ctx);
button.setText("DAY/NIGHT");

         
button.setBackgroundDrawable(new android.graphics.drawable.ColorDrawable(android.graphics.Color.BLACK));       
 button.setTextColor(android.graphics.Color.BLUE);

button.setOnClickListener(new android.view.View.OnClickListener({
onClick:function(viewarg){


}}));
menuLayout.addView(button);



//btn
           var button=new android.widget.Button(ctx);
button.setText("Day");

         
button.setBackgroundDrawable(new android.graphics.drawable.ColorDrawable(android.graphics.Color.TRANSPARENT));       
 button.setTextColor(android.graphics.Color.GREEN);

button.setOnClickListener(new android.view.View.OnClickListener({
onClick:function(viewarg){

Level.setTime(1)
clientMessage("§1Time changed to day");

}}));
menuLayout.addView(button);



//btn
           var button=new android.widget.Button(ctx);
button.setText("Night");

         
button.setBackgroundDrawable(new android.graphics.drawable.ColorDrawable(android.graphics.Color.TRANSPARENT));       
 button.setTextColor(android.graphics.Color.GREEN);

button.setOnClickListener(new android.view.View.OnClickListener({
onClick:function(viewarg){

Level.setTime(15000)
clientMessage("§1Time changed to night");

}}));
menuLayout.addView(button);



//btn
           var button=new android.widget.Button(ctx);
button.setText("COMBAT");

         
button.setBackgroundDrawable(new android.graphics.drawable.ColorDrawable(android.graphics.Color.BLACK));       
 button.setTextColor(android.graphics.Color.BLUE);

button.setOnClickListener(new android.view.View.OnClickListener({
onClick:function(viewarg){


}}));
menuLayout.addView(button);



//btn
           var button=new android.widget.Button(ctx);
button.setText("aimbot beta");

         
button.setBackgroundDrawable(new android.graphics.drawable.ColorDrawable(android.graphics.Color.TRANSPARENT));       
 button.setTextColor(android.graphics.Color.GREEN);

button.setOnClickListener(new android.view.View.OnClickListener({
onClick:function(viewarg){
if(!aimbot){
    aimed = true;
    aimbot = true;
    clientMessage("&4&lAimbot &1&lActivated!")
}else{
    aimed = false;
    aimbot = false;
    clientMessage("&2&lAimbot &b&lOff!")
print("Report bugs as soon as possible! ")
}
}}));
menuLayout.addView(button);



//btn
           var button=new android.widget.Button(ctx);
button.setText("1Hit, your done kid");

         
button.setBackgroundDrawable(new android.graphics.drawable.ColorDrawable(android.graphics.Color.TRANSPARENT));       
 button.setTextColor(android.graphics.Color.GREEN);

button.setOnClickListener(new android.view.View.OnClickListener({
onClick:function(viewarg){
if(!hit){
    hit = true;
    print("1 Hit enabled!")
}else{
    hit = false;
    print("1 Hit disabled!")
}
}}));
menuLayout.addView(button);



//btn
           var button=new android.widget.Button(ctx);
button.setText("Ultimate fire punch!");

         
button.setBackgroundDrawable(new android.graphics.drawable.ColorDrawable(android.graphics.Color.TRANSPARENT));       
 button.setTextColor(android.graphics.Color.GREEN);

button.setOnClickListener(new android.view.View.OnClickListener({
onClick:function(viewarg){
if(!fire){
    fire = true;
    clientMessage("Be a troll, lol")
}else{
    fire = false;
    clientMessage("You are no longer fire man ;-;")
print("Did it not work? http://skidclient.weebly.com/ and report the bug ASAP")
}
}}));
menuLayout.addView(button);



//btn
           var button=new android.widget.Button(ctx);
button.setText("PRO FOV");

         
button.setBackgroundDrawable(new android.graphics.drawable.ColorDrawable(android.graphics.Color.TRANSPARENT));       
 button.setTextColor(android.graphics.Color.GREEN);

button.setOnClickListener(new android.view.View.OnClickListener({
onClick:function(viewarg){

ModPE.setFov(140)
clientMessage("§1FOV Changed");

}}));
menuLayout.addView(button);



//btn
           var button=new android.widget.Button(ctx);
button.setText("God Mode");

         
button.setBackgroundDrawable(new android.graphics.drawable.ColorDrawable(android.graphics.Color.TRANSPARENT));       
 button.setTextColor(android.graphics.Color.GREEN);

button.setOnClickListener(new android.view.View.OnClickListener({
onClick:function(viewarg){

Player.setHealth(9999)
clientMessage("§1Godmode enabled");

}}));
menuLayout.addView(button);



//btn
           var button=new android.widget.Button(ctx);
button.setText("Take the easy way out");

         
button.setBackgroundDrawable(new android.graphics.drawable.ColorDrawable(android.graphics.Color.TRANSPARENT));       
 button.setTextColor(android.graphics.Color.GREEN);

button.setOnClickListener(new android.view.View.OnClickListener({
onClick:function(viewarg){

Player.setHealth(0)
clientMessage("§1RIP "+ Player.getName(Player.getEntity()) +" Was instant killed by a JS function :(");

}}));
menuLayout.addView(button);



//btn
           var button=new android.widget.Button(ctx);
button.setText("INFO/QUIT GAME");

         
button.setBackgroundDrawable(new android.graphics.drawable.ColorDrawable(android.graphics.Color.BLACK));       
 button.setTextColor(android.graphics.Color.BLUE);

button.setOnClickListener(new android.view.View.OnClickListener({
onClick:function(viewarg){

}}));
menuLayout.addView(button);



//btn
           var button=new android.widget.Button(ctx);
button.setText("Quit the game fast!!");

         
button.setBackgroundDrawable(new android.graphics.drawable.ColorDrawable(android.graphics.Color.TRANSPARENT));       
 button.setTextColor(android.graphics.Color.GREEN);

button.setOnClickListener(new android.view.View.OnClickListener({
onClick:function(viewarg){
ModPE.leaveGame();
clientMessage("bye");

}}));
menuLayout.addView(button);



//btn
           var button=new android.widget.Button(ctx);
button.setText("MESSAGES");

         
button.setBackgroundDrawable(new android.graphics.drawable.ColorDrawable(android.graphics.Color.BLACK));       
 button.setTextColor(android.graphics.Color.BLUE);

button.setOnClickListener(new android.view.View.OnClickListener({
onClick:function(viewarg){


}}));
menuLayout.addView(button);



//btn
           var button=new android.widget.Button(ctx);
button.setText("SPam Messages in a bunch! #3for1");

         
button.setBackgroundDrawable(new android.graphics.drawable.ColorDrawable(android.graphics.Color.TRANSPARENT));       
 button.setTextColor(android.graphics.Color.GREEN);

button.setOnClickListener(new android.view.View.OnClickListener({
onClick:function(viewarg){
Server.sendChat("Get skidded!");
Server.sendChat("I have osteoperosis XD");
Server.sendChat("SPAM SPAM SPAM LOLOLOLOL SPAM SPAM SPAM #NoBan");
clientMessage("10/10 worst spam but would spam again lawl");

}}));
menuLayout.addView(button);



//btn
           var button=new android.widget.Button(ctx);
button.setText("UTILITIES/MICILANIOUS");

         
button.setBackgroundDrawable(new android.graphics.drawable.ColorDrawable(android.graphics.Color.BLACK));       
 button.setTextColor(android.graphics.Color.BLUE);

button.setOnClickListener(new android.view.View.OnClickListener({
onClick:function(viewarg){


}}));
menuLayout.addView(button);



//Button Gamemode
var button1 = new android.widget.Button(ctx);   
var currSurvival = Level.getGameMode()==0;  
            button1.setText(currSurvival?"creative":"survival");     
            button1.setTextColor(android.graphics.Color.GREEN);            
button1.setBackgroundDrawable(new android.graphics.drawable.ColorDrawable(android.graphics.Color.TRANSPARENT));       
            button1.setWidth(70);
            button1.setHeight(50);           
            button1.setOnClickListener(new android.view.View.OnClickListener({
                onClick: function(viewarg){
         currSurvival = !currSurvival;
      Level.setGameMode(currSurvival?0:1);
      
clientMessage(currSurvival?"§1your now in §6survival":"§1your now in §ecreative");   
 button1.setText(currSurvival?"creative":"survival");   
               }
            }));
    menuLayout.addView(button1);



//close btn
           var button2=new android.widget.Button(ctx);
var noFlight = Player.canFly()==0;  

button2.setText(noFlight?"Fly On":"Fly Off");     

         
button2.setBackgroundDrawable(new android.graphics.drawable.ColorDrawable(android.graphics.Color.TRANSPARENT));       
 button2.setTextColor(android.graphics.Color.GREEN);

button2.setOnClickListener(new android.view.View.OnClickListener({
onClick:function(viewarg){

noFlight = !noFlight;
      
Player.setCanFly(noFlight?0:1);
Player.setFlying(noFlight?0:1);

clientMessage(noFlight?"§1RIP Flying! ;-;":"§1your flight permission is set to §atrue");   

 button2.setText(noFlight?"Fly On":"Fly Off");     

}}));
menuLayout.addView(button2);



              MenuVarible=new android.widget.PopupWindow(menuLayout1,ctx.getWindowManager().getDefaultDisplay().getWidth()/2,ctx.getWindowManager().getDefaultDisplay().getHeight());

MenuVarible.setBackgroundDrawable(new android.graphics.drawable.ColorDrawable(android.graphics.Color.argb(100,0,26,100)));
MenuVarible.showAtLocation(ctx.getWindow().getDecorView(),android.view.Gravity.RIGHT|android.view.Gravity.TOP,0,0)
}catch(error){
print("menu.error: "+error)}}}))}

//Wanna use GUI code or some code here? No problem! Message me and i will let ya know! Must give credit! ;-; ik
//Aimat entity 
 var aim;
 var aimbot = false;
 var aimed = false;
 var ent = null;


function getNearestEntity(maxrange) {
    if(aimbot==true) {
			var mobs = Entity.getAll();
			var players = Server.getAllPlayers();
			var small = maxrange;
			var ent = null;
			for (var i = 0; i < mobs.length; i++) {
				var x = Entity.getX(mobs[i]) - getPlayerX();
				var y = Entity.getY(mobs[i]) - getPlayerY();
				var z = Entity.getZ(mobs[i]) - getPlayerZ();
				var dist = Math.sqrt(Math.pow(x, 2) + Math.pow(y, 2) + Math.pow(z, 2));
				if (dist < small && dist > 0 && Entity.getEntityTypeId(mobs[i]) <= 63 && Entity.getHealth(mobs[i]) >= 1) {
					small = dist;
					ent = mobs[i];
				}
			}
			for (var i = 0; i < players.length; i++) {
				var x = Entity.getX(players[i]) - getPlayerX();
				var y = Entity.getY(players[i]) - getPlayerY();
				var z = Entity.getZ(players[i]) - getPlayerZ();
				var dist = Math.sqrt(Math.pow(x, 2) + Math.pow(y, 2) + Math.pow(z, 2));
				if (dist < small && dist > 0 && Entity.getHealth(players[i]) >= 1) {
					small = dist;
					ent = players[i];
				}
			}
			return ent;
		}
}


function crosshairAimAt(ent, pos) {
    if(aimbot==true) {
							if(ent != null) {
				var x = Entity.getX(ent) - getPlayerX();
				var y = Entity.getY(ent) - getPlayerY();
				var z = Entity.getZ(ent) - getPlayerZ();
				if(pos != null && pos instanceof Array) {

					x = Entity.getX(ent) - pos[0];
					y = Entity.getY(ent) - pos[1];
					z = Entity.getZ(ent) - pos[2];
				}
				if(Entity.getEntityTypeId(ent) != 63)
					y += 0.5;
				var a = 0.5 + Entity.getX(ent);
				var b = Entity.getY(ent);
				var c = 0.5 + Entity.getZ(ent);
				var len = Math.sqrt(x * x + y * y + z * z);
				var y = y / len;
				var pitch = Math.asin(y);
				pitch = pitch * 180.0 / Math.PI;
				pitch = -pitch;
				var yaw = -Math.atan2(a - (Player.getX() + 0.5), c - (Player.getZ() + 0.5)) * (180 / Math.PI);
				if(pitch < 89 && pitch > -89) {
					Entity.setRot(Player.getEntity(), yaw, pitch);
				}
			}
  }
}


function modTick() {
						if(aimbot) {
							var ent = getNearestEntity(7)
							if(ent != null) crosshairAimAt(ent);
	}
}

function toDirectionalVector(vector, yaw, pitch) { 
    vector[0] = Math.cos(yaw) * Math.cos(pitch);
    vector[1] = Math.sin(pitch);
    vector[2] = Math.sin(yaw) * Math.cos(pitch);
        }
	function attackHook(att, vic) {
		   if(att == Player.getEntity() && grappless && Entity.getHealth(vic) > 0) {
           setPosition(getPlayerEnt(), Entity.getX(vic),Entity.getY(vic)+1,Entity.getZ(vic));
		}
	}



var fire = false;

function chatReceiveHook(str, sender) {
	if(str=="Start")fire = true;
}

function attackHook(attacker, victim) {
if(fire)Entity.setFireTicks(victim, 5);
}



var hit = false;

function chatReceiveHook(str, sender) {
	if(str=="KO")hit = true;
}

function attackHook(attacker, victim) {
if(hit)Entity.setHealth(victim, 0);
}



var destroy = false;
var option = false;

function chatReceiveHook(str, sender) {
if(str=="Drop")option = true;
if(str=="NoDrop")option = false;
	if(str=="Go") {
	destroy = true;
	clientMessage("Tap ground.")
	}
}

function useItem(x, y, z, itemId, blockId, side){
if(destroy){
	Level.destroyBlock(x +1, y, z +1, option);
	Level.destroyBlock(x +2, y, z +2, option);
	Level.destroyBlock(x +3, y, z +3, option);
	Level.destroyBlock(x +4, y, z +4, option);
	
    Level.destroyBlock(x, y, z, option);

	Level.destroyBlock(x -1, y, z -1, option);
	Level.destroyBlock(x -2, y, z -2, option);
	Level.destroyBlock(x -3, y, z -3, option);
	Level.destroyBlock(x -4, y, z -4, option);
}

}



function menuEditlol() {
ModPE.langEdit("menu.copyright","Skidclient JAMESN");
ModPE.langEdit("menu.version","0.5 BETA");
ModPE.langEdit("menu.play","§b§lLet's get started!");
ModPE.langEdit("menu.options","§4§lChange game settings!");
}



function leaveGame(){var activity=com.mojang.minecraftpe.MainActivity.currentMainActivity.get();

activity.runOnUiThread(new java.lang.Runnable({run:function(){if(MenuVarible!=null){MenuVarible.dismiss();MenuVarible=null}if(tempBtn!=null){tempBtn.dismiss();tempBtn=null}}}))}
