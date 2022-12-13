const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

module.exports = async (req, res) => {
  const { email, fname, lname, age, gender, batch } = req.body;
  if (!email || !fname || !lname || !age || !gender || !batch) {
    return res.status(200).json({
      ResponseCode: 3,
      message: "Please provide all data.",
    });
  } else {
    try {
      const findData = async () => {
        return await prisma.registeredUser.findFirst({
          where: {
            email: email,
          },
        });
      };
      const user = await findData();
      if (user) {
        return res.status(500).json({
          ResponseCode: 3,
          message: "Already present.",
        });
      } else {
        const batchId = await prisma.batches.findFirst({
          where: { bno: batch },
        });
        const user = await prisma.registeredUser.create({
          data: {
            email: email,
            age: age,
            firstName: fname,
            lastName: lname,
            gender: gender,
            batcheId: batchId.id,
          },
        });
        return res.status(200).json({
          ResponseCode: 1,
          message: "successfully registered",
          user,
        });
      }
    } catch (error) {
      console.log(error);
      return res.status(500).json({
        ResponseCode: 4,
        message: "Something went wrong",
      });
    }
  }
};
