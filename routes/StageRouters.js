import express from 'express';
import expressAsyncHandler from 'express-async-handler';
import { isAuth } from '../utils.js';
import Stage1 from '../models/Stage1Model.js';
import Stage2 from '../models/Stage2Model.js';
import Stage3 from '../models/Stage3Model.js';
import Stage4 from '../models/Stage4Model.js';
import Stage5 from '../models/Stage5Model.js';
import Stage6 from '../models/Stage6Model.js';
import Stage7 from '../models/Stage7Model.js';



const stageRouter = express.Router();

stageRouter.get(
    '/stage1count',
    expressAsyncHandler(async(req, res) => {
        const users = await Stage1.find({});
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

stageRouter.put(
    '/stage1',
    isAuth,
    expressAsyncHandler(async(req, res) => {
        const user = new Stage1({
            rollno: req.body.rollno,
            name: req.body.name,
            email: req.body.email,
        });
        const data = await user.save();
        res.send({
            stage: 1,
        });
        return;
    })
);

stageRouter.get(
    '/stage2count',
    expressAsyncHandler(async(req, res) => {
        const users = await Stage2.find({});
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

stageRouter.put(
    '/stage2',
    isAuth,
    expressAsyncHandler(async(req, res) => {
        const user = new Stage2({
            rollno: req.body.rollno,
            name: req.body.name,
            email: req.body.email,
        });
        const data = await user.save();
        res.send({
            stage: 2,
        });
        return;
    })
);

stageRouter.get(
    '/stage3count',
    expressAsyncHandler(async(req, res) => {
        const users = await Stage3.find({});
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

stageRouter.put(
    '/stage3',
    isAuth,
    expressAsyncHandler(async(req, res) => {
        const user = new Stage3({
            rollno: req.body.rollno,
            name: req.body.name,
            email: req.body.email,
        });
        const data = await user.save();
        res.send({
            stage: 3,
        });
        return;
    })
);

stageRouter.get(
    '/stage4count',
    expressAsyncHandler(async(req, res) => {
        const users = await Stage4.find({});
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

stageRouter.put(
    '/stage4',
    isAuth,
    expressAsyncHandler(async(req, res) => {
        const user = new Stage4({
            rollno: req.body.rollno,
            name: req.body.name,
            email: req.body.email,
        });
        const data = await user.save();
        res.send({
            stage: 4,
        });
        return;
    })
);

stageRouter.get(
    '/stage5count',
    expressAsyncHandler(async(req, res) => {
        const users = await Stage5.find({});
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

stageRouter.put(
    '/stage5',
    isAuth,
    expressAsyncHandler(async(req, res) => {
        const user = new Stage5({
            rollno: req.body.rollno,
            name: req.body.name,
            email: req.body.email,
        });
        const data = await user.save();
        res.send({
            stage: 5,
        });
        return;
    })
);

stageRouter.get(
    '/stage6count',
    expressAsyncHandler(async(req, res) => {
        const users = await Stage6.find({});
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

stageRouter.put(
    '/stage6',
    isAuth,
    expressAsyncHandler(async(req, res) => {
        const user = new Stage6({
            rollno: req.body.rollno,
            name: req.body.name,
            email: req.body.email,
        });
        const data = await user.save();
        res.send({
            stage: 6,
        });
        return;
    })
);




stageRouter.get(
    '/stage7count',
    expressAsyncHandler(async(req, res) => {
        const users = await Stage7.find({});
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

stageRouter.put(
    '/stage7',
    isAuth,
    expressAsyncHandler(async(req, res) => {
        const user = new Stage7({
            rollno: req.body.rollno,
            name: req.body.name,
            email: req.body.email,
        });
        const data = await user.save();
        res.send({
            stage: 7,
        });
        return;
    })
);



export default stageRouter;