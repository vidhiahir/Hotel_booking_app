import express from "express";
import Hotels from "../models/Hotels.js";
import {
  createHotel,
  deleteHotel,
  getHotel,
  getHotelByCity,
  getHotels,
  updateHotel,
} from "../controllers/hotelControl.js";
import { verifyAdmin, verifyUser } from "../utils/verifyToken.js";

const router = express.Router();

//CREATE
router.post("/", verifyAdmin, createHotel);

//UPDATE
router.put("/:id", verifyAdmin, updateHotel);

//DELETE
router.delete("/:id", verifyAdmin, deleteHotel);

//GET
router.get("/:id", getHotel);
//Get by city
router.get("/city/:city", getHotelByCity);
//GET ALL
router.get("/", getHotels);

export default router;
