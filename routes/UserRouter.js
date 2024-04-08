import express from 'express';
import User from '../models/UserModel.js';
import expressAsyncHandler from 'express-async-handler';
import { generateToken } from '../utils.js';

const userRouter = express.Router();

userRouter.get(
  '/logincount',
  expressAsyncHandler(async (req, res) => {
    const users = await User.find({});
    const arr = new Array();
    users.forEach((ele) => {
      const date =
        ele._id.getTimestamp().getHours() +
        ':' +
        ele._id.getTimestamp().getMinutes() +
        ':' +
        ele._id.getTimestamp().getSeconds();
      const user = {
        rollno: ele.rollno,
        name: ele.name,
        email: ele.email,
        loginTime: date,
      };
      arr.push(user);
    });
    if (users) {
      res.send(arr);
      return;
    }
    res.status(404).send({ message: 'Users not found!' });
  })
);

userRouter.put(
  '/signin',
  expressAsyncHandler(async (req, res) => {
    const users = await User.findOne({
      email: req.body.email,
      rollno: req.body.rollno,
    });
    if (users) {
      res.send({
        rollno: users.rollno,
        name: users.name,
        email: users.email,
        department: users.department,
        year: users.year,
        section: users.section,
        token: generateToken(users),
      });
      return;
    }
    const user = new User({
      rollno: req.body.rollno,
      name: req.body.name,
      email: req.body.email,
      department: req.body.department,
      year: req.body.year,
      section: req.body.section,
    });
    const data = await user.save();
    res.send({
      rollno: data.rollno,
      name: data.name,
      email: data.email,
      department: data.department,
      year: data.year,
      section: data.section,
      token: generateToken(data),
    });
    return;
  })
);

export default userRouter;
