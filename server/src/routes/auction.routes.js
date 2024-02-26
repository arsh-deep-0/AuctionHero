import { Router } from "express";



const router = new Router();

router.route('/create').post(createAuctionRules)

export default router;