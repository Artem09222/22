// let mainBlock = document.querySelector('.main')
// let links = ['https://fb.com/', 'https://www.youtube.com/', 'https://tiktok.com/']
// for (let link of links){
//     let l = document.createElement('a');
//     l.textContent = 'My link';
//     l.setAttribute('href', link)
//     mainBlock.append(l)
// }
//let mainBlock = document.querySelector('.main')
// let twos = ['Artem', 'Vitalik', 'Artemiy', 'Vladyha', 'Dayana'];

// for (let i of twos) {
//   let create = document.createElement("h1");
//   create.textContent = i;
//   mainBlock.append(create);
// }

// let titles = Array.from(document.getElementsByTagName('h1'));
// for (let title of titles){
//     if (title.textContent[0] === 'A'){
//         title.remove()
//     }
// }

// for (let i = 1; i <= 100; i++) {
//   let myP = document.createElement("p");
//   myP.textContent = "Hello" + i;

//   mainBlock.append(myP);
// }

// let myP = document.createElement('p');
// myP.textContent = 'This is my element from JS!';
// myP.classList.add('append')
// console.log(myP);

// let link = document.createElement('a');
// link.textContent = 'This is link from js'
// link.setAttribute('href', 'https://google.com/')
// // link.removeAttribute('href')

// console.log(link.getAttribute('href'))
// mainBlock.after(link);

// append() *
// prepend()
// after()
// before()
let mainBlock = document.querySelector('.main')
for (let i = 1; i <= 10; i++) {
  let myP = document.createElement("p");
  myP.textContent = "This is my element from JS!";
  myP.style.color = "yellow";
  myP.style.backgroundColor = "black";
  mainBlock.append(myP);
}
for (let i = 1; i <= 2; i++) {
  let myH1 = document.createElement("h1");
  myH1.textContent = "This is JS!";
  myH1.style.color = "red";
  myH1.style.backgroundColor = "black";
  mainBlock.append(myH1);
}
for (let i = 1; i <= 5; i++) {
  let myH2 = document.createElement("h2");
  myH2.textContent = "This text - JS!";
  myH2.style.color = "green";
  myH2.style.backgroundColor = "black";
  mainBlock.append(myH2);
}
