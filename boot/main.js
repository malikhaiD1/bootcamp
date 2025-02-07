const normal = {face: '../SVG/normal.svg', facetalk: '../SVG/normaltalk.svg', background: '../JPG/darkforest.jpg', chatBub: '../SVG/helpchat.svg'};
const snowfox = {bookCover: '../JPG/whitefox.jpg', book: document.getElementById('snowfox'), face: '../SVG/happy-left.svg', background: '../JPG/darkforest.jpg', newFace: '../SVG/snowfoxface.svg', chatBub: '../SVG/whitefoxchat.svg', chatBubPage: '../SVG/whitefoxpagechat.svg'};
const fantasieEiland = {bookCover: '../JPG/fantasie-eiland.jpg', book: document.getElementById('fantasie'), face: '../SVG/happy-up.svg', background: '../JPG/island.jpg', newFace: '../SVG/fantasieface.svg', chatBub: '../SVG/fantasiechat.svg', chatBubPage: '../SVG/fantasiepagechat.svg'};
const dummieDeMummie = {bookCover: '../JPG/dummie.jpg', book: document.getElementById('dummie'), face: '../SVG/happy-right.svg', background: '../JPG/egypt.jpg', newFace: '../SVG/dummieface.svg', chatBub: '../SVG/dummiechat.svg', chatBubPage: '../SVG/dummiepagechat.svg'};
const SVG = document.getElementById('facecat');
const newSVG = document.getElementById('catbookface');
let bodyBackground = document.getElementById('back').style;
const allBooks = document.getElementById('books').style;
const mainBook = document.getElementById('mainbook').style;
const exit = document.getElementById('rebutton').style;
const chatBubble = document.getElementById('chatbub');
const newChatBubble = document.getElementById('newchat');


const snowHover = snowfox.book.addEventListener('mouseover', () => {
    SVG.src = snowfox.face;
    chatBubble.src = snowfox.chatBub;
    snowfox.book.addEventListener('mouseleave', () => {SVG.src = normal.face; chatBubble.src = normal.chatBub});
});

const fantasieHover = fantasieEiland.book.addEventListener('mouseover', () => {
    SVG.src = fantasieEiland.face;
    chatBubble.src = fantasieEiland.chatBub;
    fantasieEiland.book.addEventListener('mouseleave', () => {SVG.src = normal.face; chatBubble.src = normal.chatBub});
});

const dummieHover = dummieDeMummie.book.addEventListener('mouseover', () => {
    SVG.src = dummieDeMummie.face;
    chatBubble.src = dummieDeMummie.chatBub;
    dummieDeMummie.book.addEventListener('mouseleave', () => {SVG.src = normal.face; chatBubble.src = normal.chatBub});
});

const snowClick = snowfox.book.addEventListener('click', () => {
    bodyBackground.backgroundImage = `url(${snowfox.background})`;
    allBooks.display = 'none';
    SVG.style.display = 'none';
    newSVG.style.display = 'block';
    newSVG.src = snowfox.newFace;
    mainBook.display = 'block';
    mainBook.backgroundImage = `url(${snowfox.bookCover})`;
    newChatBubble.style.display = 'block';
    newChatBubble.src = snowfox.chatBubPage;
    exit.display = 'block';
});

const fantasieClick = fantasieEiland.book.addEventListener('click', () => {
    bodyBackground.backgroundImage = `url(${fantasieEiland.background})`;
    allBooks.display = 'none';
    SVG.style.display = 'none';
    newSVG.style.display = 'block';
    newSVG.src = fantasieEiland.newFace;
    mainBook.display = 'block';
    mainBook.backgroundImage = `url(${fantasieEiland.bookCover})`;
    newChatBubble.style.display = 'block';
    newChatBubble.src = fantasieEiland.chatBubPage;
    exit.display = 'block';
});

const dummieClick = dummieDeMummie.book.addEventListener('click', () => {
    bodyBackground.backgroundImage = `url(${dummieDeMummie.background})`;
    allBooks.display = 'none';
    SVG.style.display = 'none';
    newSVG.style.display = 'block';
    newSVG.src = dummieDeMummie.newFace;
    mainBook.display = 'block';
    mainBook.backgroundImage = `url(${dummieDeMummie.bookCover})`;
    newChatBubble.style.display = 'block';
    newChatBubble.src = dummieDeMummie.chatBubPage;
    exit.display = 'block';
});

const reload = document.getElementById('rebutton').addEventListener('click', () => location.reload());