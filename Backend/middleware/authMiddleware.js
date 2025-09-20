import jwt from "jsonwebtoken";

export const authMiddleware = (req, res, next) => {
    const token = req.headers["authorization"];
    if (!token) return res.status(403).json({error:"No token provided"});

    try{
        const decorded = jwt.verify(token.split(" ")[1], process.env.JWT_SECRET);
        req.user = decorded;
        next();
    }catch(error){
        res.status(401).json({error:"Invalid token"});
    }
}