var PostStatus;
(function (PostStatus) {
    PostStatus[PostStatus["Unpublished"] = 0] = "Unpublished";
    PostStatus[PostStatus["Published"] = 1] = "Published";
    PostStatus[PostStatus["Draft"] = 2] = "Draft";
})(PostStatus || (PostStatus = {}));
var post = {
    title: '白雪纷纷何所似，撒盐空中差可拟',
    status: PostStatus.Unpublished,
    content: '滚滚长江东逝水，浪花淘尽英雄'
};
console.log(post);
console.log(PostStatus[0]);
