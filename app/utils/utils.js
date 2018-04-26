/**
 * Created by macfeng on 2018/2/26.
 */
export default class Utils{
    //计算余数返回值
    static residue(dividend,divisor){
        let num = Math.floor(dividend%divisor);
        return num>0 ? (num<10?'0'+num:num) :('00')
    }

    //计算商返回值
    static divid(dividend,divisor){
        let num = Math.floor(dividend/divisor);
        return num>0 ? (num<10?'0'+num:num) :('00')
    }
}