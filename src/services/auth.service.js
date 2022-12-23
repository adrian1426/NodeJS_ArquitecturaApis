const { JwtHelper } = require('../helpers');
let _userService = null;


class AuthService {
  // ?UserService está registrado en container
  constructor({ UserService }) {
    _userService = UserService;
  }

  async signUp(user) {
    const { username } = user;

    const userExist = await _userService.getUserByUsername(username);

    if (userExist) {
      const error = new Error();
      error.status = 401;
      error.message = 'User already exists';

      throw error;
    }

    return await _userService.create(user);
  }

  async signIn() {

  }
}

module.exports = AuthService;
