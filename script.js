let library=[];

let btitle,bauthor,bpages,bread;
let idt=document.getElementById('title');
let ida=document.getElementById('author');
let idp=document.getElementById('pages');
let displaydivbk=document.getElementById('displaybkdiv');
let displaydiv=document.getElementById('displaybk');
let formdiv=document.getElementById('formdiv');
document.addEventListener("keydown", (event) => {if(event.key=="Enter"){event.preventDefault()}})
//document.getElementById('submit').addEventListener("click",(e)=>{e.preventDefault()});
document.getElementById('submit').addEventListener("click",()=>{submit()});
function Books(title,author,pages,read){
        this.title=title;
        this.author=author;
        this.pages=pages;
        this.read=read?"Read":"Not read";
        
    }

function addBooktoLibrary(bookobj){
    let idx=library.push(bookobj);
    displaybook(idx-1);
}    
function displaybook(idx){

        displaydiv.innerHTML+=`<div id="booksdiv${idx}"></div>`;
        let booksdiv=document.getElementById(`booksdiv${idx}`);
        booksdiv.innerHTML+=`<p>${library[idx].title}</p>`;
        booksdiv.innerHTML+=`<p>${library[idx].author}</p>`;
        booksdiv.innerHTML+=`<p>${library[idx].pages}</p>`;
        booksdiv.innerHTML+=`<p>${library[idx].read}</p>`;
    
    
}
function newBook(){
    formdiv.style.display="flex";
    formdiv.style.flexDirection="row";
}

function submit(){
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
    btitle=idt.value;
    bauthor=ida.value;
    bpages=idp.value;
    bread=document.getElementById('toggle-state').checked;
    
    document.getElementById('formdiv').style.display="none";
    idt.value='';
    ida.value='';
    idp.value='';
    displaydivbk.style.display="flex";
    let bok=new Books(btitle,bauthor,bpages,bread);
    addBooktoLibrary(bok);
}

