function greeter(person: string) :string{
    //return 123;
    return "Hello, " + person + " 你最近又胖了";
}

var user: string = "傻逼李智坚";
document.body.innerHTML = greeter(user);