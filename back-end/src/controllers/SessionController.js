import jwt from 'jsonwebtoken';
import User from '../models/User.js';
import bcrypt from 'bcrypt';
import authConfig from '../config/auth.js';

class SessionController {
  async create(req, res) {
    const { email, password } = req.body;

    const user = await User.findOne({ email });

    const checkPassword = await bcrypt.compare(password, user.password);

    if(!user) {
      return res.status(401).json({ error: "User or passord invalid! "});
    }

    if(!checkPassword) {
      return res.status(401).json({ error: "User or passord invalid! "});
    }

    const { id } = user;

    return res.json({
      user: {
        id,
        email
      },
      token: jwt.sign({ id }, authConfig.secret, {
        expiresIn: authConfig.expiresIn
      })
    })
  }
}

export default new SessionController();