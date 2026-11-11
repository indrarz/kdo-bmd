const User = require("../model/User");
const path = require("path");
const { connectDb } = require("../config/db");

module.exports = {
  getOne: async (req, res) => {
    try {
      const { email } = req.user;

      if (!email) {
        return res.status(400).json({
          status: 102,
          message: "Data tidak ditemukan",
          data: null,
        });
      }

      const user = await User.findOne({ email });

      if (!user) {
        return res.status(400).json({
          status: 102,
          message: "Data tidak ditemukan",
          data: null,
        });
      }

      return res.status(200).json({
        status: 0,
        message: "Sukses",
        data: {
          email: user.email,
          first_name: user.first_name,
          last_name: user.last_name,
        },
      });
    } catch (error) {
      return res.status(500).json({
        status: 500,
        message: error.message || "Terjadi kesalahan pada server",
        data: null,
      });
    }
  },

  update: async (req, res) => {
    try {
      await connectDb();
      const { email } = req.user;
      const { first_name, last_name } = req.body;

      if (!email) {
        return res.status(400).json({
          status: 102,
          message: "Data tidak ditemukan",
          data: null,
        });
      }

      const user = await User.findOne({ email });

      if (!user) {
        return res.status(400).json({
          status: 102,
          message: "Data tidak ditemukan",
          data: null,
        });
      }

      user.first_name = first_name || user.first_name;
      user.last_name = last_name || user.last_name;
      await user.save();

      return res.status(200).json({
        status: 0,
        message: "Update Profile berhasil",
        data: {
          email: user.email,
          first_name: user.first_name,
          last_name: user.last_name,
        },
      });
    } catch (error) {
      return res.status(500).json({
        status: 500,
        message: error.message || "Terjadi kesalahan pada server",
        data: null,
      });
    }
  },
};
