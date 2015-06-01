import request from 'superagent';

const BooksWebUtils = {

  create(book, actions) {
    request.post('/api/books/new')
           .send(book)
           .set('Accept', 'application/json')
           .end(function(err, res){
      if (err) {
        actions.failureCreatingBook(err);
      } else {
        actions.successCreatingBook(res.body);
      }
    });
  }
};

export default BooksWebUtils;
