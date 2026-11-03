export const API_BASE_URL =
  import.meta.env["VITE_API_BASE_URL"] ?? "https://am-premiumms.ai.studio";

export const API_ENDPOINTS = {
  // Gateway baru tidak punya /api/health, jadi /api/stats dipakai sebagai cek status.
  health: "/api/stats",
  // Gateway baru tidak punya /api/info (null = dilewati, UI pakai fallback).
  info: null as string | null,
  sendLink: "/api/send-link",
  verify: "/api/verify-link",
};

// Gateway baru tidak mengirim detail paket, jadi diisi manual (statis, bukan dari API).
export const PLAN_FALLBACK = {
  name: "Alight Motion Pro",
  type: "Premium",
  duration: "1 Tahun",
  benefits: [
    "Ekspor video tanpa watermark",
    "Efek, font, dan fitur Pro terbuka",
    "Aktif 1 tahun pada akun email kamu",
    "Aktivasi lewat magic link, tanpa input password",
  ],
};
