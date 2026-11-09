# Vallon — Portfolio

Portofolio pribadi Vallon, siswa PPLG di SMK Cinta Kasih Tzu Chi.

**Live:** https://vallon-doang.github.io/portfolio/

## Isi

- **Hero** dengan latar pixel-art dan parallax
- **Tentang Saya** + kartu fakta (sekolah, jurusan, fokus, status)
- **Keahlian** — coin stack 1–5 untuk Web, Game Dev, dan Cybersecurity
- **Proyek** — DAMKAR!, GameSpin, Slider (embed itch.io), dan dua slot "segera hadir"
- **Pencapaian** — hasil LKS Cybersecurity 2025–2026
- **Kontak** — GitHub, itch.io, email, Discord

Toggle **ID/EN** di navigasi. Teks Indonesia adalah sumber utama; terjemahan Inggris ada di `script.js`.

## Struktur

```
index.html    markup + konten (data-i18n untuk terjemahan)
Style.css     tema pixel-art, layout responsif, animasi
script.js     i18n, coin stack, parallax, tombol salin Discord
images/       1.png (aurora), 3.png (pegunungan)
```

## Menjalankan lokal

```bash
python3 -m http.server 8000
# buka http://localhost:8000
```

## Catatan

- Screenshot proyek masih placeholder ("Screenshot menyusul").
- Slot proyek "Segera hadir" disiapkan untuk proyek berikutnya.
- Font pixel: [Common Pixel](https://www.cdnfonts.com/common-pixel.font) via CDN.
