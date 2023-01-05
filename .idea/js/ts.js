function checkEmailValid(s) {
    var k = false;
    if (s.match("@gmail.com"))
        k = true;
    return k&&!(!localStorage.key(s));
}
localStorage.setItem("khambui@gmail.com","0984426924");
console.log(checkEmailValid("khambui@gmail.com"));