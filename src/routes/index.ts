import express, { Request, Response } from "express";
import movieRoute from "./movie.route";

const router = express.Router();

// api routes
router.use("/api/movies", movieRoute);

// simple route for demo
router.get("/", (req: Request, res: Response) => {
	res.send("Welcome to backend");
});

export default router;
