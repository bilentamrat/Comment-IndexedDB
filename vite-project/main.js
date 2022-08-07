import './style.css';
import './comment.js';

(function () {
  // all the code will be here
  // ...

  const request = indexedDB.open('Comment', 1);
  request.onerror = (event) => {
    console.error(`Database error: ${event.target.errorCode}`);
  };

  request.onsuccess = (event) => {
    // add implementation here
  };
  if (!window.indexedDB) {
    console.log(`Your browser doesn't support IndexedDB`);
    return;
  }
  request.onupgradeneeded = (event) => {
    let db = event.target.result;

    // create the Contacts object store
    // with auto-increment id
    let store = db.createObjectStore('Comment', {
      autoIncrement: true,
    });

    // create an index on the email property
  };
  function insertContact(db, comment) {
    // create a new transaction
    const txn = db.transaction('comment', 'readwrite');

    // get the Contacts object store
    const store = txn.objectStore('comment');
    //
    let query = store.put(contact);

    // handle success case
    query.onsuccess = function (event) {
      console.log(event);
    };

    // handle the error case
    query.onerror = function (event) {
      console.log(event.target.errorCode);
    };

    // close the database once the
    // transaction completes
    txn.oncomplete = function () {
      db.close();
    };
  }
})();
