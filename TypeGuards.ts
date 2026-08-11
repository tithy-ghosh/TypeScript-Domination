//Type cast is basically type narrowing

function abcd(args: string | number){
    //args.toLocaleString //It will show only the methods which are common in the string in the number so we perform type narrowing or type gurd
    if(typeof args === 'number'){
        args.toExponential //Now it will show all the methods related to number
    }
    else{
        args.concat// It will show all the methods related to string
    }
}