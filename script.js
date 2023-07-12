document.getElementById('submit').addEventListener("click",()=>{submit()});
document.addEventListener("keydown", (event) => {if(event.key=="Enter"){event.preventDefault()}})
let library=[];
class Library{
  
constructor(title,author,pages,read){
    this.title=title;
    this.author=author;
    this.pages=pages;
    this.read=read?"Read":"Not read";    
    
    
}


 addBooktoLibrary(){
  
    let idx=library.push({"title":this.title,"author":this.author,"pages":this.pages,"read":this.read});
    return idx-1;
    
}    
 displaybook(idx){
    let displaydiv=document.getElementById('displaybk');
   
        displaydiv.innerHTML+=`<div id="booksdiv${idx}"></div>`;
        let booksdiv=document.getElementById(`booksdiv${idx}`);
        booksdiv.innerHTML+=`<p>${library[idx].title}</p>`;
        booksdiv.innerHTML+=`<p>${library[idx].author}</p>`;
        booksdiv.innerHTML+=`<p>${library[idx].pages}</p>`;
        booksdiv.innerHTML+=`<p>${library[idx].read}</p>`;
    
    
}

 
}
function newBook(){
    let formdiv=document.getElementById('formdiv');
    formdiv.style.display="flex";
    formdiv.style.flexDirection="row";
}
 function submit(){
    let idt=document.getElementById('title');
    let ida=document.getElementById('author');
    let idp=document.getElementById('pages');
    if(idt.value){
        if(ida.value){
            if(idp.value){

            }
            else{
                return;
            }
        }
        else{
            return;
        }
    }
    else{
        return;
    }
    let btitle,bauthor,bpages,bread;
    
    let displaydivbk=document.getElementById('displaybkdiv');

    btitle=idt.value;
    bauthor=ida.value;
    bpages=idp.value;
    bread=document.getElementById('toggle-state').checked;
    
    document.getElementById('formdiv').style.display="none";
    idt.value='';
    ida.value='';
    idp.value='';
    displaydivbk.style.display="flex";
    let bok=new Library(btitle,bauthor,bpages,bread);
    index1=bok.addBooktoLibrary();
    bok.displaybook(index1);
}