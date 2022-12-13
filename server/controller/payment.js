module.exports = async (req, res) => {
    return res.status(200).json({
      ResponseCode: 7,
      message: "Payment done.",
    });
};
