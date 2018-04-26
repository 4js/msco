/**
 * Created by macfeng on 2018/2/26.
 */
export default class ToHtml{
    //react转换html
    static html(text){
        return {__html: text};
    }
}