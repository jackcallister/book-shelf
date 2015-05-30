const data = [
  { id: 1, title: 'Game of Thrones' },
  { id: 2, title: 'Born to Run' },
];

const BooksWebUtils = {

  fetch(query, actions) {
    setTimeout(() => {
      actions.successLoadingBooks(data);
    }, 5000);
  }
};

export default BooksWebUtils;
