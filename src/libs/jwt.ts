import jwt from "jsonwebtoken";

export const generateToken = (payload: any) => {
  return jwt.sign(payload, "replacte this later", { expiresIn: "1h" });
};
