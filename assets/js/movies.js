function makemovies(mname,releasedate,actorname,producername){
  this.mname = mname;
  this.releasedate = releasedate;
  this.actorname = actorname;
  this.producername = producername;
}
var one,two,three,four,five,six,seven,eight,nine,ten;

one = new makemovies("toy story","19 november 1995","tom hanks","bonnie arnold");
two = new makemovies("kabir singh","21 june 2019","shahid kapoor","murad khetani");
three = new makemovies("joker","2 october 2019","joaquin phoenix","todd philips");
four = new makemovies("the invisible man","24 february 2020","elisabeth moss","jon shave");
five = new makemovies("chhichhore","6 september 2019","sushant rajput","sajid nadiadwala");
six = new makemovies("parasite","30 may 2019","cho yeojeong","bong joonho");
seven = new makemovies("bala","9 november 2019","ayushmann khurrana","dinesh vijan");
eight = new makemovies("don't breathe","25 august 2016","stephen lang","fede alvarez");
nine = new makemovies("it","8 september 2017","richie tozier","barbara muschietti");
ten = new makemovies("padmaavat","25 january 2018","deepika padukone","sanjay bhansali");

var allmovies = [one,two,three,four,five,six,seven,eight,nine,ten];

for(var i=0;i<=9;i++){
  document.write(i+1 + "&nbsp;&nbsp;&nbsp;&nbsp;" + allmovies[i].mname + "&nbsp;&nbsp;&nbsp;&nbsp;" + allmovies[i].releasedate + "&nbsp;&nbsp;&nbsp;&nbsp;" + allmovies[i].actorname + "&nbsp;&nbsp;&nbsp;&nbsp;" + allmovies[i].producername);
  document.write("<br>");
}

function search(){
  var searchkey = document.getElementById("input").value;
  searchkey = searchkey.toLowerCase();
  var textarea = document.getElementById("textarea");
  
  for(var i=0;i<=9;i++){
    if(searchkey == allmovies[i].mname || searchkey == allmovies[i].actorname){
      textarea.value = [allmovies[i].mname,allmovies[i].releasedate,allmovies[i].actorname,allmovies[i].producername];
    }
    else{
      textarea.value = "Nothing has found... Please search again";
    }
  }
  
}