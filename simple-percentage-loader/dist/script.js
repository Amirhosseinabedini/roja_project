// loader();

// // document.querySelector('.btn').onclick = loader;

// /*====================================
//                                                  *     LOADER
//                                                  ======================================*/
// function loader(_success) {
//   // var obj = $('.preloader'),
//   // inner = $('.preloader_inner'),
//   // page = $('.main');
//   // console.log(page);
//   $('.preloader').addClass('show');
//   // $('.preloader_inner').addClass('show');
//   $('.main').addClass('d-none');
//   var w = 0,
//   t = setInterval(function () {
//     w = w + 1;
//     $('.preloader_inner').html(w + '%');
//     if (w === 100) {
//       $('.preloader').removeClass('show');
//       $('.main').removeClass('d-none');
//       clearInterval(t);
//       w = 0;
//       if (_success) {
//         return _success();
//       }
//     }
//   }, 20);
// }