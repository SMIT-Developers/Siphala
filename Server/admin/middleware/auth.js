import jwt from "jsonwebtoken";

const secret = 'test';

const auth = async (req, res, next) => {
  try {
    // const token =
    //     req.body.token || req.query.token || req.headers["x-access-token"];
    //
    // if (!token) {
    //   return res.status(403).send("A token is required for authentication");
    // }
    // try {
    //   const decoded = jwt.verify(token, config.TOKEN_KEY);
    //   req.user = decoded;
    // } catch (err) {
    //   return res.status(401).send("Invalid Token");
    // }
    // return next();

    let storedData="";
    const checkStorage = key => {
      storedData = localStorage.getItem(key);
      if (!storedData) console.log('Local storage is empty');

    }
    checkStorage
    if (!storedData) history.push("/student_dashboard_home");

  } catch (error) {
    console.log(error);
  }
};

export default auth;
