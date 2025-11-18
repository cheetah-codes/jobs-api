const express = require("express")
const { createJobs, getAllJobs, getJob, deleteJob, updateJob } = require("../controllers/jobs")
const router = express.Router()

router.get("/").post(createJobs).get(getAllJobs)
router.get("/:id").get(getJob).delete(deleteJob).patch(updateJob)

module.exports = router