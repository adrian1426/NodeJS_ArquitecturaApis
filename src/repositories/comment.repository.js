const BaseRepository = require('./base.repository');

class CommentRepository extends BaseRepository {
  // ?Comment es un model registrado en Container
  constructor({ Comment }) {
    super(Comment);
  }
};

module.exports = CommentRepository;
