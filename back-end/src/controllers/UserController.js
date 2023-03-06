import User from '../models/User.js';
import brcypt from 'bcrypt';

class UsersController {
  async index(req, res) {
    try{

      const users = await User.find();
      return res.json(users);

    }catch(err) {
      console.error(err);
      return res.status(500).json({ error: "Internal server error"})
    }
  }

  async show(req, res) {
    try{

      const { id } = req.params;
      const user = await User.findById(id);

      if(!user) {
        res.status(404).json({ message: "Usuário não encontrado!"})
      }

      return res.json(user);

    }catch(err) {
      console.error(err);
      return res.status(500).json({ error: "Internal server error"})
    }
  }

  async create(req, res) {
    try{
      const { email, password } = req.body;
      
      const emailExists = await User.findOne({ email });

      if(emailExists) {
        return res.status(422).json({ message: `User ${email} already exists.`})
      }

      const salt = await brcypt.genSalt(12);
      const passwordHash = await brcypt.hash(password, salt);

      const user = new User({
        email: email,
        password: passwordHash
      });

      const newUser = await user.save();

      return res.status(201).json(newUser);

    }catch(err) {
      console.error(err);
      return res.status(500).json({ error: "Internal server error"})
    }
  }

  async update(req, res) {  
    try{
      const { id } = req.params;
      const { email, password } = req.body;

      const user = await User.findById(id);

      if(!user) {
        return res.status(404).json({ message: "Usuário não encontrado!"})
      }

      const salt = await brcypt.genSalt(12);
      const passwordHash = await brcypt.hash(password, salt);

      await user.updateOne({
        email: email,
        password: passwordHash
      })

      return res.status(200).json({ message: "Usuário atualizdo com sucesso" });

    }catch(err) {
      console.error(err);
      return res.status(500).json({ error: "Internal server error"})
    }
  }

  async destroy(req, res) {
    try{
      const { id } = req.params;
      const user = await User.findById(id);

      if(!user) {
        return res.status(404).json({ message: "Usuário não encontrado! "});
      }

      await user.deleteOne();

      return res.status(200).json({ message: "Usuário deletado com sucesso" });

    }catch(err) {
      console.error(err);
      return res.status(500).json({ error: "Internal server error"})
    }
  }
}

export default new UsersController();