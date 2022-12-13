const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();
const moment = require("moment");

module.exports = async (req, res) => {
  const { email, batch } = req.body;
  const user = await prisma.registeredUser.findFirst({
    where: {
      email: email,
    },
  });
  if (!user) {
    return res.status(200).json({
      ResponseCode: 8,
      message: "User not found",
    });
  }
  var now = moment(new Date(), "DD/MM/YYYY HH:mm:ss");
  var isSameMonth = now.isSame(user.updatedAt, "month");
  if (!isSameMonth) {
    const batchId = await prisma.batches.findFirst({
      where: { bno: batch },
    });
    const updatedUser = await prisma.registeredUser.update({
      data: {
        batcheId: batchId.id,
      },
      where: {
        id: user.id,
      },
    });
    return res.status(200).json({
      ResponseCode: 5,
      message: "Changed successfully",
      data: updatedUser,
    });
  } else {
    return res.status(200).json({
      ResponseCode: 6,
      message: "Can not change batch within same month of joining the batch",
    });
  }
};
