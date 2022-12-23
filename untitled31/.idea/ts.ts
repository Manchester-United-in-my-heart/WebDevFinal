function checkvalid(s:string):boolean
{
    let k: boolean=false;
    if (s.match("@gmail.com")) k=true;
    return k;
}