export function validate(tovalidate,waysto,title){
    /*accepts 2 arrguments what to validate and the name of how to 
    return a sentence of invalidaition if needed*/
    let eror=[]
    if(waysto.minLen){
        if(tovalidate.length < waysto.minLen){
            if(waysto.minLen>1){
                eror.push(`${title} must include more than ${waysto.minLen} letters`)
            }
            else{
                eror.push(`${title} is required`)
            }
        }
    }
    if(waysto.numbers){
        if(!(/\d/).test(tovalidate)){
            eror.push(`${title} must include numbers`)
        }
    }
    if(waysto.email){
        if(!(/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/).test(tovalidate)){
            eror.push(`${title} must include letters '@' and '.'`)
        }
    }
    return eror.join(', ')
}