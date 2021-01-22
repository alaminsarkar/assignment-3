// https://github.com/alaminsarkar/assignment-3/blob/main/assignment.js

//kilometerToMeter start

function kilometerToMeter(kiloMeter)
{
    if(kiloMeter>0){

        var meter = (kiloMeter * 1000);         // we know that 1killoMeter=1000 meter.
       
    }
    else{
        console.log("Input the right value.");      // if the value is start '-' , or 0.
    }
    return   meter;
    
}

const result = kilometerToMeter(1);

console.log(result);

//kilometerToMeter end





// budgetCalculator start

function budgetCalculator (watch,phone,laptop)
{
    var watchPrice=50;      // one watchPrice
    var phonePrice=100;     // one phonePrice
    var laptoPrice=500;     // one laptopPrice

    if( watch>0 && phone>0 && laptop>0)
    {
        var totalCost=((watch*watchPrice)+(phone*phonePrice)+( laptop*laptoPrice));
    }
    else{
        console.log("input right value.")       // if any product value is 0 or less than 0.
    }

    return totalCost;


}
var resultbc = budgetCalculator(4,6,9);
console.log(resultbc);

// budgetCalculator end





//hotelCost start

function hotelCost (day)
{
    if(day>0){
        fTenDays=100;       //first 10 days next per day 100 taka befor 11 days.
        sTenDays=80;        // after 10days next per day 80 befor 21 days 
        otherDays=50;       //after 20 days next per day 50 befor n days.

        if(day>0 && day<=10){

            var result= (day*fTenDays);         // 1 to 10 days hotelCost.

        }

        else if(day>11 && day<=20){

            var secondOffer=day-10;
            var result=((10*fTenDays)+(secondOffer*sTenDays));      // 1 to 20 days hotelCost.
        }

        else if(day>20){

            var thirdOffer=day-20;
            var result =((10*fTenDays)+(10*sTenDays)+(thirdOffer*otherDays));      // 1 to n days hotelcost.

        }

        else{

        }

    }

    else{
        
        console.log("Stay One Day Then Pay RoomCost.");     // if day is 0 or less than 0.

    }
    return result;
}
var totalRoomCost=hotelCost(70);
console.log(totalRoomCost);

//hotelColst end




//megaFriend start

function megaFriend (value){
    var longWord=value[0];
    for(i=0; i<value.length; i++)
    {
        var element=value[i];
        if(longWord.length<element.length){
            var longWord=element;
        }
    }
    return longWord;
}
var largestName=megaFriend(["alamin", "Tanvir", "anik", "RakibulIslam"]);
console.log(largestName);

//megaFriend end
 