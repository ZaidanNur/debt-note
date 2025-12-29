# UtangHub Frontend

Aplikasi frontend untuk pencatatan hutang antar teman (Debt Note), dibangun menggunakan Next.js 15, Tailwind CSS, dan TypeScript.

### Mock Credentials

Gunakan akun berikut untuk login:
- **Email**: `user@example.com`
- **Password**: `password`

## Fitur Utama

- **Authentication**: Login & Register (Mock API).
- **Dashboard**: Ringkasan total hutang/piutang dan daftar transaksi terbaru.
- **Utang Spaces**:
  - Buat Space baru (misal: "Liburan Bali", "Kostan").
  - Tambah Anggota ke dalam Space.
  - Catat Transaksi hutang antar anggota.

## Tech Stack

- **Framework**: Next.js 15 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **State Management**: TanStack Query (React Query)
- **HTTP Client**: Axios
- **Icons**: Lucide React via HeroIcons SVGs (in code)

## Cara Menjalankan Project

1.  **Install Dependencies**
    ```bash
    npm install
    # atau
    pnpm install
    ```

2.  **Jalankan Development Server**
    ```bash
    npm run dev
    # atau
    pnpm dev
    ```

3.  **Buka Browser**
    Akses [http://localhost:3000](http://localhost:3000).

## Struktur Project

- `src/app`: Halaman-halaman website (App Router).
- `src/features`: Logika bisnis per fitur (API services, Types).
- `src/lib`: Utilitas global (API Client, CN helper).
- `src/components`: Komponen UI shared.

## Mock API

Project ini menggunakan **Next.js Route Handlers** (`src/app/api/...`) sebagai Mock Backend. Data yang Anda input akan hilang saat server direstart karena disimpan di memory.
