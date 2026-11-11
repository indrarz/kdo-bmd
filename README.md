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

Screenshot Hasil Pengetesan API

Update Profile Admin Unauthorized
<img width="1920" height="1200" alt="SS Update Profile Admin Unauthorized" src="https://github.com/user-attachments/assets/893835f8-768e-41a6-9f88-006d6b953c2a" />
Update Profile Admin Success
<img width="1920" height="1200" alt="SS Update Profile Admin Success" src="https://github.com/user-attachments/assets/b52a2457-9b5e-4511-8df2-51cdae6e205e" />
Registrasi Admin Success
<img width="1920" height="1200" alt="SS Registrasi Admin Success" src="https://github.com/user-attachments/assets/5d1a0d54-f3bb-4d70-b08b-3958808222e2" />
Registrasi Admin Bad Request
<img width="1920" height="1200" alt="SS Registrasi Admin Bad Request" src="https://github.com/user-attachments/assets/85dbd9e9-d176-4f9a-bfd2-e7c2ce711df7" />
Login Admin Unauthorized
<img width="1920" height="1200" alt="SS Login Admin Unauthorized" src="https://github.com/user-attachments/assets/70d6078b-5905-41b3-a003-ee66ba22296c" />
Login Admin Success
<img width="1920" height="1200" alt="SS Login Admin Success" src="https://github.com/user-attachments/assets/3bf33719-1a18-4ec4-8c84-0094d0a304c8" />
Login Admin Bad Request
<img width="1920" height="1200" alt="SS Login Admin Bad Request" src="https://github.com/user-attachments/assets/a62a6a56-8d02-4ea4-bd1e-4efb6f61ca33" />
Get Profile Admin Unauthorized
<img width="1920" height="1200" alt="SS Get Profile Admin Unauthorized" src="https://github.com/user-attachments/assets/336fe079-d463-4122-a524-6078e0014588" />
Get Profile Admin Success
<img width="1920" height="1200" alt="SS Get Profile Admin Success" src="https://github.com/user-attachments/assets/282404b8-2144-4117-8df8-d4b2ad9f265f" />
Get Instansi Success
<img width="1920" height="1200" alt="SS Get Instansi Success" src="https://github.com/user-attachments/assets/6034a613-4463-4b9a-8374-07e62d42c97a" />
Get Instansi by Id Success
<img width="1920" height="1200" alt="SS Get Instansi by Id Success" src="https://github.com/user-attachments/assets/6b288971-9bd2-4a9d-82bf-fe06b484e67f" />
Create Instansi Unauthorized
<img width="1920" height="1200" alt="SS Create Instansi Unauthorized" src="https://github.com/user-attachments/assets/5c4f630e-7f83-491b-bcf0-39848e10a327" />
Create Instansi Success
<img width="1920" height="1200" alt="SS Create Instansi Success" src="https://github.com/user-attachments/assets/fd82f335-6475-4aae-89fb-91c3e9c2c9c3" />

