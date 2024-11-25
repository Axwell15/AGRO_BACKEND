import express from "express";
import { body, check } from 'express-validator';
import { createTransaction, getTransactionByUser, addToCart, getCartDetails, checkoutWithCredits } from "../controllers/transactions.controller.js";
import { requireToken } from "../middlewares/requireToken.js";
import { clearCart, removeFromCart } from "../controllers/transactions.controller.js";

const router = express.Router();

router.post('/add', requireToken, createTransaction);
router.get('/get', requireToken, getTransactionByUser);
router.post('/cart/add', requireToken, addToCart);
router.get('/cart', requireToken, getCartDetails);
router.post('/cart/checkout', requireToken, checkoutWithCredits);
router.delete('/cart/clear', requireToken, clearCart);
router.delete('/cart/remove', requireToken, removeFromCart);

export default router;