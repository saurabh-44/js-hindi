/*        switch (key) {
            case value:
                break;

            default:
                break;
}                                    */

/*-----------------------------------Exmaple----------------------------------------*/
const month = "march"
switch (month) {    // we can give any kind of key where it is num string or anything
    case "jan":     // case should be same as key formate
        console.log("January");
        break;      // after matching the case it break break terminate the switch code
    case "feb":
        console.log("feb");
        break;
    case "march":
        console.log("march");
        break;
    case "april":
        console.log("april");
        break;

    default:         // when any of the case will not match then it will execute default
        console.log("default case match");
        break;
}
