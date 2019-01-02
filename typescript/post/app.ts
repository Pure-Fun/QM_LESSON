enum PostStatus {
  Unpublished,
  Published,
  Draft
}

interface Post {
  title: string;
  content?: String;
  status: PostStatus; 
}

let post:Post = {
  title: '白雪纷纷何所似，撒盐空中差可拟',
  status: PostStatus.Unpublished,
  content: '滚滚长江东逝水，浪花淘尽英雄'
}

console.log(post);
console.log(PostStatus[0]);