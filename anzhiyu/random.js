var posts=["2024/12/25/hello-world/","2024/12/25/产品-K2/","2024/12/25/产品-TP1/","2024/12/24/软著商标/"];function toRandomPost(){
    pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);
  };