const Instansi = require("../model/Instansi");

module.exports = {
  getAll: async (req, res) => {
    try {
      const statusFilter = req.query.status;
      const whereClause = {};

      // filter by status
      if (
        statusFilter &&
        ["true", "false"].includes(statusFilter.toLowerCase())
      ) {
        whereClause.status = statusFilter.toLowerCase() === "true";
      }

      const instansi = await Instansi.findAll({
        where: whereClause,
        order: [["unit_kerja", "ASC"]],
      });

      if (!instansi || instansi.length === 0) {
        return res.status(404).json({
          status: 102,
          message: "Data tidak ditemukan",
          data: [],
        });
      }

      return res.status(200).json({
        status: 0,
        message: "Sukses",
        data: instansi,
      });
    } catch (error) {
      return res.status(500).json({
        status: 500,
        message: error.message || "Terjadi kesalahan pada server",
        data: null,
      });
    }
  },

  getOne: async (req, res) => {
    try {
      const { id } = req.params;

      const instansi = await Instansi.findByPk(id);

      if (!instansi) {
        return res.status(404).json({
          status: 102,
          message: "Data tidak ditemukan",
          data: null,
        });
      }

      return res.status(200).json({
        status: 0,
        message: "Sukses",
        data: instansi,
      });
    } catch (error) {
      return res.status(500).json({
        status: 500,
        message: error.message || "Terjadi kesalahan pada server",
        data: null,
      });
    }
  },

  create: async (req, res) => {
    try {
      const { unit_kerja, telepon, fax, alamat } = req.body;

      if (!unit_kerja || !telepon || !fax || !alamat) {
        return res.status(400).json({
          status: 102,
          message: "Semua field wajib diisi",
        });
      }

      let unit_kerja_code = unit_kerja.trim().toUpperCase().replace(/\s+/g, "_");

      const existingInstansi = await Instansi.findOne({ unit_kerja_code });
      if (existingInstansi) {
        return res.status(400).json({
          status: 102,
          message: "Nama unit kerja sudah digunakan",
          data: null,
        });
      }

      const result = new Instansi({
        unit_kerja_code: unit_kerja_code,
        unit_kerja: unit_kerja.trim(),
        telepon: telepon.trim(),
        fax: fax.trim(),
        alamat: alamat.trim(),
      });

      await result.save();

      return res.status(201).json({
        status: 0,
        message: "Instansi berhasil dibuat",
        data: {
          unit_kerja_code: result.unit_kerja_code,
          unit_kerja: result.unit_kerja,
          telepon: result.telepon,
          fax: result.fax,
          alamat: result.alamat,
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
