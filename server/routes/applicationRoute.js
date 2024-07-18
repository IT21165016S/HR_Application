import express from "express";
import {
  adminGetAllApplications,
  postApplication,
  userDeleteApplication,
  userGetAllApplications,
} from "../controllers/applicantController.js";
import { isAuthorized } from "../middlewares/auth.js";

const applicationRoute = express.Router();

//Routes
applicationRoute.get("/user-getAll", isAuthorized, userGetAllApplications); //put later isAuthorized
applicationRoute.get("/admin-getAll", isAuthorized, adminGetAllApplications); //put later isAuthorized
applicationRoute.delete(
  "/user-delete-application/:id",
  isAuthorized,
  userDeleteApplication
);
applicationRoute.post("/post", isAuthorized, postApplication);

export default applicationRoute;
