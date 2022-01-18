async function apiCall(url) {
    //add api call logic here
  let res=await fetch(url);
  let data =await res.json();
 // console.log(data.articles);
  return data.articles;

}
async function getData(term){
    let res=await fetch(`https://gnews.io/api/v4/search?q=${term}&token=7bb1a6c3fea40145f35b764be1b876da`);
    let data= await res.json();
    console.log(data);
}

function appendArticles(articles, main) {
    main.innnerHTML="";
    //add append logic here
    articles.map(({title,content,description,image})=>{
        let maindiv=document.createElement("div");
     let div=document.createElement("div");
     let div1=document.createElement("div");
     let heading=document.createElement("h3");
     heading.textContent=title;
     let contentdetails=document.createElement("p");
     contentdetails.textContent=content;
     let img=document.createElement("img");
     img.src=image;
     div.append(heading,contentdetails);
     div1.append(img);
     maindiv.append(div,div1);
     main.append(maindiv);
     let article={
        title,
        content,
        description,
        image
     }
     maindiv.onclick=()=>{
         saveArticle(article);
     }
      
    })

}
function saveArticle(article){
    localStorage.setItem("article",JSON.stringify(article));
    window.location.href="news.html";
}
function newsAppend(article,newsmain,heading,image,content){
     newsmain.innnerHTML="";
    
     heading.textContent=article.title;
     image.src=article.image;
     let p=document.createElement("p");
    p.textContent=article.content+"\n"+article.description;
    content.append(p)
    newsmain.append(heading,image,content);
}

export { apiCall, appendArticles ,newsAppend ,getData}