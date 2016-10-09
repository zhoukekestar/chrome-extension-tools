// console.log('options.js')
form._data = function(d) {
  // console.log(d);
  localStorage.setItem('Code', d.code);
  toast('saved!')
  return null;
}


form.querySelector('textarea').value = localStorage.getItem('Code');

document.onkeydown = document.body.onkeydown = window.onkeydown = function(e) {

  if (e.ctrlKey === true && e.keyCode === 83) {
    e.preventDefault();
    form.submit();
  }
}
