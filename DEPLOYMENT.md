# Panduan Deployment ke Shared Hosting (cPanel)

Aplikasi ini menggunakan **Next.js App Router** dengan **API Routes** (untuk Mock Backend), sehingga memerlukan environment **Node.js** untuk berjalan.

> **PENTING:** Shared hosting biasa (hanya PHP) **TIDAK BISA** menjalankan aplikasi ini secara langsung. Pastikan layanan hosting Anda memiliki fitur **"Setup Node.js App"** di cPanel.

---

## Opsi 1: Hosting dengan Dukungan Node.js (Recommended)

Jika cPanel Anda memiliki menu **Setup Node.js App**, ikuti langkah ini:

### 1. Persiapan File
Anda tidak perlu meng-upload folder `node_modules`. File yang perlu di-upload:
- `.next` (folder, hasil build lokal jika server lambat, atau build di server)
- `public` (folder)
- `src` (opsional, jika ingin build di server)
- `package.json`
- `next.config.ts`
- `server.js` (Custom server, baca langkah 2)

### 2. Buat Custom Server Entry Point
cPanel Node.js biasanya membutuhkan entry point khusus. Buat file `server.js` di root project Anda:

```javascript
const { createServer } = require('http');
const { parse } = require('url');
const next = require('next');

const dev = process.env.NODE_ENV !== 'production';
const hostname = 'localhost';
const port = process.env.PORT || 3000;
// saat deploy, set dev: false
const app = next({ dev, hostname, port });
const handle = app.getRequestHandler();

app.prepare().then(() => {
  createServer(async (req, res) => {
    try {
      const parsedUrl = parse(req.url, true);
      const { pathname, query } = parsedUrl;
 
      if (pathname === '/a') {
        await app.render(req, res, '/a', query);
      } else if (pathname === '/b') {
        await app.render(req, res, '/b', query);
      } else {
        await handle(req, res, parsedUrl);
      }
    } catch (err) {
      console.error('Error occurred handling', req.url, err);
      res.statusCode = 500;
      res.end('internal server error');
    }
  })
    .once('error', (err) => {
      console.error(err);
      process.exit(1);
    })
    .listen(port, () => {
      console.log(`> Ready on http://${hostname}:${port}`);
    });
});
```
*Catatan: Anda mungkin perlu menyesuaikan script ini tergantung panduan hosting Anda.*

### 3. Upload ke cPanel
1.  Buka **File Manager** di cPanel.
2.  Buat folder baru untuk aplikasi (misal: `utanghub`).
3.  Upload file-file project (kecuali `node_modules`).

### 4. Setup Node.js App di cPanel
1.  Buka menu **"Setup Node.js App"**.
2.  Klik **"Create Application"**.
3.  **Node.js Version**: Pilih versi terbaru yang didukung (misal 18.x atau 20.x).
4.  **Application Mode**: Production.
5.  **Application Root**: path ke folder yang baru dibuat (misal `utanghub`).
6.  **Application URL**: domain/subdomain yang diinginkan.
7.  **Application Startup File**: `server.js`.
8.  Klik **Create**.

### 5. Install Dependencies & Start
1.  Setelah app dibuat, biasanya ada tombol **"Run NPM Install"**. Klik tombol tersebut.
    *   Jika gagal karena resource limit, Anda mungkin perlu upload `node_modules` dari lokal (pastikan OS sama, biasanya Linux. Jika lokal Windows, ini berisiko). Alternatifnya: `npm install --omit=dev` via SSH terminal cPanel.
2.  Pastikan project sudah di-build. Anda bisa menjalankan `npm run build` di terminal cPanel (SSH) atau upload folder `.next` dari lokal.
3.  Klik tombol **"Restart"** di halaman Node.js App.

---

## Opsi 2: Hosting Tanpa Node.js (Hanya PHP)

Jika hosting Anda **TIDAK** mendukung Node.js:
1.  Aplikasi ini **TIDAK BISA** berjalan penuh karena menggunakan Mock API internal Next.js.
2.  Alternatif (Terbatas): Gunakan `output: 'export'`.
    - Ubah `next.config.ts`:
      ```typescript
      const nextConfig: NextConfig = {
        output: 'export',
      };
      ```
    - Jalankan `npm run build`.
    - Folder `out` akan terbentuk. Upload isi folder `out` ke `public_html`.
    - **KONSEKUENSI**: Fitur Login, Register, dan Dashboard yang mengambil data dari API Mock **TIDAK AKAN BERJALAN**. Halaman akan statis (hanya UI).

## Rekomendasi
Untuk pengalaman terbaik, gunakan layanan deployment modern seperti **Vercel** (gratis untuk hobi) atau **Netlify**, yang mendukung Next.js secara native tanpa konfigurasi rumit.
