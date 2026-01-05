const API_KEY='AIzaSyAv526jxWLS376ZNyiiZ28RFc8FdKoFbcM';
export default API_KEY;

export const Value_Converter=(value)=>{
    if(value>100000){
        return Math.floor(value/100000)+"M";
    }
    else if(value/1000){
        return Math.floor(value/1000)+"K";
    }
    else{
        return value;
    }
}
