import { OAuth2Client } from "google-auth-library";
import { findUserByEmail, createUser } from "../models/userModel.js";

const client = new OAuth2Client(process.env.GOOGLE_CLIENT_ID);

export async function googleLogin(idToken) {
  const ticket = await client.verifyIdToken({
    idToken,
    audience: process.env.GOOGLE_CLIENT_ID,
  });
  const payload = ticket.getPayload();

  let user = await findUserByEmail(payload.email);
  if (!user) {
    user = await createUser({
      name: payload.name,
      email: payload.email,
      phone: "", // optional
      dob: new Date(), // placeholder
      bvn: "", // optional
      passwordHash: null,
      provider: "google"
    });
  }

  return user;
}
