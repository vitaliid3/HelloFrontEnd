// $( document ).ready(function() {
//     $("#title").css("background-color", "yellow");
// });
//
// document.addEventListener("DOMContentLoaded", function(event) {
//     document.getElementById("title").style.backgroundColor = "yellow";
// });
//
// let playList = [
//     {
//         author: "LED ZEPPELIN",
//         song:"STAIRWAY TO HEAVEN"
//     },
//     {
//         author: "QUEEN",
//         song:"BOHEMIAN RHAPSODY"
//     },
//     {
//         author: "LYNYRD SKYNYRD",
//         song:"FREE BIRD"
//     },
//     {
//         author: "DEEP PURPLE",
//         song:"SMOKE ON THE WATER"
//     },
//     {
//         author: "JIMI HENDRIX",
//         song:"ALL ALONG THE WATCHTOWER"
//     },
//     {
//         author: "AC/DC",
//         song:"BACK IN BLACK"
//     },
//     {
//         author: "QUEEN",
//         song:"WE WILL ROCK YOU"
//     },
//     {
//         author: "METALLICA",
//         song:"ENTER SANDMAN"
//     }
// ];
// let playList2 = [];
// document.addEventListener("DOMContentLoaded", function(event) {
//     let newTag = document.createElement('ol');
//     let body  = document.getElementsByTagName('body');
//     document.body.prepend(newTag);
//
//     playList.forEach(function (value) {
//         newTag.insertAdjacentHTML(
//             'beforeend',
//             `<li><div class="author">${value.author}</div><div class="song">${value.song}</div></li>`
//         );
//     });
//
//
//     let li = Array.from(document.getElementsByTagName('li'));
//     li.forEach(function (value) {
//         let author  = value.querySelector('.author').innerHTML;
//         let song  = value.querySelector('.song').innerHTML;
//         let item = {
//             'author' : author,
//             'song' : song
//         }
//         playList2.push(item);
//     })
//     let a = 123;
//
//     console.log('My string ${a}');
//     console.log(`My string ${a}`);
//
//     console.log('My string' + a + 'sdfsf' + a + ' 123');
//
//     console.log(`My string  ${a}  sdfsf ${a} 123`);
//
// });

let button = document.querySelector('.traffic-lights__button');
let i = 0
 button.addEventListener('click', function () {
     i++;
     if (i === 4) {
        i = 0
     }
     console.log(i);
     let a = document.querySelectorAll('.traffic-lights__item').getAttribute('data-color');
     console.log(a);
 })
