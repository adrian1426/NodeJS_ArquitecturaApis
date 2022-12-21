const BaseRepository = require('./base.repository');

let _user = null;

class UserRepository extends BaseRepository {
  // ?User es un model registrado en Container
  constructor({ User }) {
    super(User);
    _user = User;
  }

  async getUserByUsername(username) {
    return await _user.findOne({ username });
  }
};

module.exports = UserRepository;
