import { Maybe } from "./Maybe";
/* 
const sidebar = document.getElementById("secondary")
*/
/*
これで解決
document.getElementById("secondary")?.parentNode?.removeChild(document.getElementById("secondary"));
*/ 
const secondary :HTMLElement | null = document.getElementById("secondary")
var maySecondary = Maybe.ofNullable(secondary);
maySecondary.flatMapNullable((second: HTMLElement)=>second.parentNode)
.forYieldNullable(maySecondary,(parent,child)=>parent.removeChild(child));

var t = secondary?.parentNode?.removeChild(secondary);
/*
function parseAll(element :HTMLElement): void {
    const parent = element.parentNode;
    switch(pa)
    removeChild(element);
}
*/
/*
// めっちゃMaybeモナド使いたい
const parseSidebarIfExists = sidebar1=>
    {
        if(sidebar1 instanceof HTMLElement){
        parseInner(sidebar1)}
    };
*/
/*
var observer = new MutationObserver(()=>{
        parseSidebarIfExists(sidebar);
    }
)
*/
/*
observer.observe(document, 
    {
        attributes: true,
        childList: true
    }
);
parseSidebarIfExists(sidebar);
*/
