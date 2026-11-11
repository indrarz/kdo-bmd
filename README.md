# Kendaraan Dinas Operasional BMD API
## Tech Stack
- **Express.js** (Framework)
- **MySQL/MariaDB** (Database)

## Cara Menjalankan
### 1. Clone Repo
```
git clone https://github.com/indrarz/kdo-bmd.git
```
### 2. Install Dependencies
```bash
npm install
```
### 3. Rename file .env.example menjadi .env
### 4. Jalankan Server
```
npm run start
```
Server akan berjalan di `http://localhost:4000` atau sesuai konfigurasi `PORT` di file `.env`.

## Desain Database
### 1. `user`
| Field | Type | Description |
|--------|--------|-------------|
| `_id` | ObjectId | Primary key |
| `email` | String | Email (unik) |
| `first_name` | String | Nama depan |
| `last_name` | String | Nama belakang |
| `password` | String | Password |
| `createdAt` | Date | Tanggal dibuat |
| `updatedAt` | Date | Tanggal diperbarui |
### 2. `instansi`
| Field | Type | Description |
|--------|--------|-------------|
| `_id` | ObjectId | Primary key |
| `unit_kerja_code` | String | Kode layanan (unik) |
| `unit_kerja` | String | Nama instansi |
| `telepon` | String | No telepon |
| `fax` | String | No fax |
| `alamat` | String | Alamat instansi |
| `createdAt` | Date | Tanggal dibuat |
| `updatedAt` | Date | Tanggal diperbarui |
### 3. `kendaraan`
| Field | Type | Description |
|--------|--------|-------------|
| `_id` | ObjectId | Primary key |
| `plat_nomor` | String | Kode plat (unik) |
| `merk` | String | Merk kendaraan |
| `tipe` | String | Tipe kendaraan |
| `tahun` | String | Tahun kendaraan |
| `warna` | String | Warna kendaraan |
| `kondisi` | String | Kondisi kendaraan |
| `createdAt` | Date | Tanggal dibuat |
| `updatedAt` | Date | Tanggal diperbarui |
