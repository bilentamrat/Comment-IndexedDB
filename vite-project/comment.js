class Comment extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    const button = document.querySelector('#button');
    const commentList = document.querySelector('#comment-list');

    showComments();

    function myFunction() {
      var name = document.getElementById('name').value;
      var email = document.getElementById('email').value;
      var comment = document.getElementById('comment').value;
      let storage = localStorage.getItem('New Comments');

      if (storage == null) {
        listArr = [];
      } else {
        listArr = JSON.parse(storage);
      }

      listArr.push(
        '<span>' +
          "<img src = 'user.png'/>" +
          name +
          '<br/>' +
          email +
          '</span>' +
          '<br>' +
          comment
      );
      localStorage.setItem('New Comments', JSON.stringify(listArr));

      showComments();
    }

    function showComments() {
      let storage = localStorage.getItem('New Comments');

      if (storage == null) {
        listArr = [];
      } else {
        listArr = JSON.parse(storage);
      }

      let liTag = '';

      listArr.forEach((element, index) => {
        liTag += `<li> ${element} </li>`;
      });

      commentList.innerHTML = liTag;
    }
  }
}
