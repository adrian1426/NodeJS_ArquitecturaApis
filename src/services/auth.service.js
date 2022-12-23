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
      error.status = 400;
      error.message = 'User already exists';

      throw error;
    }

    return await _userService.create(user);
  }

  async signIn(user) {
    const { username, password } = user;

    const userExist = await _userService.getUserByUsername(username);

    if (!userExist) {
      const error = new Error();
      error.status = 404;
      error.message = 'User does not exists';

      throw error;
    }

    const validPassword = userExist.comparePasswords(password);

    if (!validPassword) {
      const error = new Error();
      error.status = 400;
      error.message = 'Invalid password';

      throw error;
    }

    const userToEncode = {
      username: userExist.username,
      id: userExist._id
    };

    const token = JwtHelper.generateToken(userToEncode);

    return {
      user: userExist,
      token
    };
  }
}

module.exports = AuthService;
