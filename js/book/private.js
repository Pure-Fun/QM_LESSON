// 私有化
var Book = (function() {  //立即执行函数
    // 闭包
    var numOfBooks = 0;
    return function(newIsbn,newTitle,newAuthor) {
        // 局部作用域内的变量
        console.log(newIsbn,newTitle,newAuthor);
        var isbn,title,author;
        var checkIsbn = function(newIsbn) {
            if (!newIsbn || typeof newIsbn !== 'string') {
                throw new Error('isbn 有误');
            }
        } 
        this.setTitle = function(newTitle) {
            title = newTitle || 'No Title specified';
        }
        this.getTitle = function() {
            return title;
        }
        this.getIsbn = function() {
            return isbn;
        }
        this.setIsbn = function(newIsbn) {
            if (checkIsbn(newIsbn))
              isbn = newIsbn; 
        }
        this.setIsbn(newIsbn);
        this.setTitle(newTitle);
        numOfBooks++;
        this.getNumOfBooks = function() {
            return numOfBooks;
        }
        console.log(`创建了${numOfBooks}本书`);
        // constructor
    }
})();

Book.convertToTitleCase = function(inputString) {  //静态方法
    return inputString.toUpperCase();
}

Book.prototype = {
    display: function() {
        console.log(`这本书书名是${this.getTitle()},作者是${this.getAuthor()}`);
    }
}

var book = new Book('123','飞鸟集','泰戈尔');
var book2 = new Book('123','HTML6高级程序设计','聂尧');
console.log(book.getTitle());