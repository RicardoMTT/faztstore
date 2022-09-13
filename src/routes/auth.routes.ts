import Router from "express-promise-router";
import { signinHandler, signupHandler } from "../controllers/auth.controllers";
import { schemaValidator } from "../middlewares/schemaValidator";
import { SigninSchema, SignupSchema } from "../schemas/auth.schemat";

const router = Router();

router.post("/signin", signinHandler);
router.post("/signup", schemaValidator(SignupSchema), signupHandler);

export default router;
