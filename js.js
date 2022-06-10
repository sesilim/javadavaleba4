var fruit1 = ["ვაშლი" , "მსხალი" , "ატამი"];

fruit1.pop();
fruit1.pop();
fruit1.pop();

fruit1.push("ატამი");
fruit1.push("მსხალი");
fruit1.push("ვაშლი");

document.write(fruit1);

/////მეორე ტაქსკი///
// Date ობიექტის გამოყენებით
// შექმენით სეზონების სია სადაც იანვარი-აპრილი ცივა აპრილი-სექტემბერი ცხავს და ოქტომბერი დეკმბერი - ცივა

// თუ არის პარასკევი შაბატი კვირა და იანვარი აპრილის პერიოდში წავედით სათხილამუროდ ან საგუნდაოდ თუ ცხავს მაშინ ზღვაზე წავიდეთ

var month = ["იანვარი", "თებერვალი", "მარტი", "აპრილი", "მაისი", "ივნისი", "ივლისი", "აგვისტო", "სექტემბერი", "ოქტომბერი", "ნოემბერი", "დეკემბერი"];
var day= ["კვირა", "ორშაბათი", "სამშაბათი", "ოთხშაბათი", "ხუთშაბათი", "პარასკევი", "შაბათი"];
var welcome;

var time = new Date();
var month = time.getMonth();
var day = time.getDay();
if (month<4) {
    welcome="ცივა";
}
else if (month>4 && month<9) {
    welcome = "ცხავს";
}
else {
    welcome = "ცივა";
}
document.write(welcome);

if(month<=4 && day==6){
    welcome="წავედით სათხილამუროდ";
}
else if(month<=4 && day>0) {
    welcome= "ვერ მივდივართ";
}
else if(month<=9 && day==6){
    welcome="ვერ მივდივართ";
}
else if(month<=9 && day>0){
    welcome="წავედით სათხილამუროდ";
}
document.write(welcome);
