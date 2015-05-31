const data = [
  { id: 1, title: 'Game of Thrones' },
  { id: 2, title: 'Born to Run' },
];

const BooksWebUtils = {

  fetch(query, actions) {
    actions.successLoadingBooks(data);
  }
};

export default BooksWebUtils;
