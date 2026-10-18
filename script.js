/* ═══════════════════════════════════════════════════════════════════════════
   LIPE.VISION — Script Principal
   Versão: 1.0 · Salvador, Bahia
   ═══════════════════════════════════════════════════════════════════════════ */

'use strict';

/* ─── DADOS DO PORTFÓLIO ─────────────────────────────────────────────────── */
/**
 * Portfólio com fotografias reais de LIPE.VISION.
 * Todos os caminhos são relativos à raiz do projeto — funcionam localmente
 * e após publicação na Vercel sem nenhuma alteração.
 *
 * ── COMO ADICIONAR MAIS FOTOS ─────────────────────────────────────────────
 * 1. Coloque o arquivo em  assets/images/
 * 2. Copie um bloco abaixo e ajuste:
 *      id       → número sequencial único
 *      category → 'eventos' | 'ensaios' | 'retratos' | 'editorial' | 'noturna'
 *      label    → texto da categoria exibido na galeria
 *      title    → título da foto exibido no hover e no lightbox
 *      span     → null | 'large' (alto, ocupa 2 linhas) | 'wide' (largo, 2 colunas)
 *      src      → caminho relativo da imagem
 * ─────────────────────────────────────────────────────────────────────────
 */
const portfolioItems = [

  // ── CASAMENTOS ────────────────────────────────────────────────────────
  {
    id: 2,
    category: 'casamentos',
    label: 'Fotografia de Casamento',
    title: 'Cumplicidade',
    span: null,
    src: 'assets/images/CA236AE6-F0B0-49BF-ABD4-C45D2CC7318B.PNG',
    fallback: { c1: '#1a1410', c2: '#2e2018' },
  },
  {
    id: 3,
    category: 'casamentos',
    label: 'Fotografia de Casamento',
    title: 'Alegria do Altar',
    span: null,
    src: 'assets/images/80CFE10D-9B88-442A-A9C5-83697615A70D.PNG',
    fallback: { c1: '#141414', c2: '#282828' },
  },
  {
    id: 4,
    category: 'casamentos',
    label: 'Fotografia de Casamento',
    title: 'Buquê & Promessas',
    span: null,
    src: 'assets/images/D816A9F1-39D4-4EC1-8D05-594D71116512.PNG',
    fallback: { c1: '#10140a', c2: '#1c2012' },
  },

  // ── ENSAIOS INDIVIDUAIS ───────────────────────────────────────────────
  {
    id: 5,
    category: 'ensaios',
    label: 'Ensaio Individual',
    title: 'Silêncio & Luz',
    span: 'large',
    src: 'assets/images/5ADD3D2C-826E-46D8-9E29-09C5898F5162.PNG',
    fallback: { c1: '#100c08', c2: '#201810' },
  },
  {
    id: 6,
    category: 'ensaios',
    label: 'Retrato Profissional',
    title: 'Atitude Urbana',
    span: null,
    src: 'assets/images/4F8176DC-F722-4377-A991-54584EB5B21C.PNG',
    fallback: { c1: '#0a0a0a', c2: '#181818' },
  },
  {
    id: 7,
    category: 'ensaios',
    label: 'Ensaio Individual',
    title: 'Luz Natural',
    span: null,
    src: 'assets/images/photo_2026-10-15_22-28-17.jpg',
    fallback: { c1: '#141208', c2: '#221e10' },
  },

  // ── EDITORIAL ─────────────────────────────────────────────────────────
  {
    id: 8,
    category: 'editorial',
    label: 'Editorial',
    title: 'No Comando',
    span: 'large',
    src: 'assets/images/95C90D58-00F0-4D42-BBB3-CEAE2C2ABB82.PNG',
    fallback: { c1: '#0a0514', c2: '#1a0a28' },
  },
  {
    id: 9,
    category: 'editorial',
    label: 'Editorial',
    title: 'Figurino I',
    span: null,
    src: 'assets/images/photo_2026-10-15_22-28-15.jpg',
    fallback: { c1: '#0a0a0a', c2: '#1a1a1a' },
  },
  {
    id: 10,
    category: 'editorial',
    label: 'Editorial',
    title: 'Figurino II',
    span: null,
    src: 'assets/images/photo_2026-10-15_22-30-58.jpg',
    fallback: { c1: '#0c0a10', c2: '#18141e' },
  },

  // ── EVENTOS — Festa noturna / balada ──────────────────────────────────
  {
    id: 11,
    category: 'eventos',
    label: 'Fotografia de Eventos',
    title: 'Noite Colorida',
    span: 'large',
    src: 'assets/images/photo_2026-10-15_22-25-47.jpg',
    fallback: { c1: '#0d0514', c2: '#1a0a2e' },
  },
  {
    id: 12,
    category: 'eventos',
    label: 'Fotografia de Eventos',
    title: 'Energia da Pista',
    span: null,
    src: 'assets/images/photo_2026-10-15_22-26-11.jpg',
    fallback: { c1: '#140508', c2: '#2e0a10' },
  },
  {
    id: 13,
    category: 'eventos',
    label: 'Fotografia de Eventos',
    title: 'Luz & Movimento',
    span: null,
    src: 'assets/images/photo_2026-10-15_22-26-36.jpg',
    fallback: { c1: '#0d1018', c2: '#1a2030' },
  },
  {
    id: 14,
    category: 'eventos',
    label: 'Fotografia de Eventos',
    title: 'Atitude na Festa',
    span: null,
    src: 'assets/images/photo_2026-10-15_22-26-54.jpg',
    fallback: { c1: '#0a0d1a', c2: '#141e2e' },
  },
  {
    id: 15,
    category: 'eventos',
    label: 'Fotografia de Eventos',
    title: 'DJ ao Vivo',
    span: null,
    src: 'assets/images/photo_2026-10-15_22-27-04.jpg',
    fallback: { c1: '#1a0a08', c2: '#2e1210' },
  },
  {
    id: 16,
    category: 'eventos',
    label: 'Fotografia de Eventos',
    title: 'Conexão',
    span: 'wide',
    src: 'assets/images/photo_2026-10-15_22-27-27.jpg',
    fallback: { c1: '#0a1205', c2: '#12200a' },
  },
  {
    id: 17,
    category: 'eventos',
    label: 'Fotografia de Eventos',
    title: 'Noite de Clube',
    span: null,
    src: 'assets/images/photo_2026-10-15_22-28-02.jpg',
    fallback: { c1: '#100a18', c2: '#1e1228' },
  },
  {
    id: 18,
    category: 'eventos',
    label: 'Fotografia de Eventos',
    title: 'Olhar Intenso',
    span: null,
    src: 'assets/images/photo_2026-10-15_22-28-08.jpg',
    fallback: { c1: '#080a14', c2: '#101420' },
  },
  {
    id: 19,
    category: 'eventos',
    label: 'Fotografia de Eventos',
    title: 'Neon & Estilo',
    span: null,
    src: 'assets/images/photo_2026-10-15_22-30-06.jpg',
    fallback: { c1: '#0d0a18', c2: '#1a1430' },
  },
  {
    id: 20,
    category: 'eventos',
    label: 'Fotografia de Eventos',
    title: 'Pose Perfeita',
    span: null,
    src: 'assets/images/photo_2026-10-15_22-30-12.jpg',
    fallback: { c1: '#0a1210', c2: '#14201a' },
  },
  {
    id: 21,
    category: 'eventos',
    label: 'Fotografia de Eventos',
    title: 'Duo na Pista',
    span: null,
    src: 'assets/images/photo_2026-10-15_22-30-16.jpg',
    fallback: { c1: '#100510', c2: '#200a20' },
  },
  {
    id: 22,
    category: 'eventos',
    label: 'Fotografia de Eventos',
    title: 'Beijo na Festa',
    span: null,
    src: 'assets/images/photo_2026-10-15_22-30-23.jpg',
    fallback: { c1: '#0a0a0a', c2: '#181818' },
  },
  {
    id: 23,
    category: 'eventos',
    label: 'Fotografia de Eventos',
    title: 'Galera',
    span: null,
    src: 'assets/images/photo_2026-10-15_22-31-02.jpg',
    fallback: { c1: '#0a0814', c2: '#18121e' },
  },
  {
    id: 24,
    category: 'eventos',
    label: 'Fotografia de Eventos',
    title: 'Asas na Noite',
    span: null,
    src: 'assets/images/photo_2026-10-15_22-31-04.jpg',
    fallback: { c1: '#120514', c2: '#200a22' },
  },
  {
    id: 25,
    category: 'eventos',
    label: 'Fotografia de Eventos',
    title: 'Sorriso da Noite',
    span: null,
    src: 'assets/images/photo_2026-10-15_22-31-13.jpg',
    fallback: { c1: '#140a08', c2: '#221210' },
  },
  {
    id: 26,
    category: 'eventos',
    label: 'Fotografia de Eventos',
    title: 'Amigos na Balada',
    span: null,
    src: 'assets/images/photo_2026-10-15_22-31-29.jpg',
    fallback: { c1: '#0a1014', c2: '#141820' },
  },
  {
    id: 27,
    category: 'eventos',
    label: 'Fotografia de Eventos',
    title: 'Anjo & Diabo',
    span: null,
    src: 'assets/images/photo_2026-10-15_22-32-05.jpg',
    fallback: { c1: '#14080a', c2: '#221014' },
  },
  {
    id: 28,
    category: 'eventos',
    label: 'Fotografia de Eventos',
    title: 'Cumplicidade',
    span: null,
    src: 'assets/images/photo_2026-10-15_22-32-08.jpg',
    fallback: { c1: '#080a14', c2: '#12141e' },
  },

  // ── EVENTOS — Parada / Pride ───────────────────────────────────────────
  {
    id: 29,
    category: 'eventos',
    label: 'Fotografia de Eventos',
    title: 'Parada — Alegria',
    span: null,
    src: 'assets/images/photo_2026-10-15_22-31-48.jpg',
    fallback: { c1: '#0a0a14', c2: '#14143a' },
  },
  {
    id: 30,
    category: 'eventos',
    label: 'Fotografia de Eventos',
    title: 'Parada — Duo',
    span: null,
    src: 'assets/images/photo_2026-10-15_22-31-58.jpg',
    fallback: { c1: '#101810', c2: '#1e2e1e' },
  },
  {
    id: 31,
    category: 'eventos',
    label: 'Fotografia de Eventos',
    title: 'Parada — Amor',
    span: null,
    src: 'assets/images/photo_2026-10-15_22-32-00.jpg',
    fallback: { c1: '#14100a', c2: '#221a10' },
  },
  {
    id: 32,
    category: 'eventos',
    label: 'Fotografia de Eventos',
    title: 'Parada — Coração',
    span: null,
    src: 'assets/images/photo_2026-10-15_22-32-13.jpg',
    fallback: { c1: '#0a1214', c2: '#141e22' },
  },
  {
    id: 33,
    category: 'eventos',
    label: 'Fotografia de Eventos',
    title: 'Parada — Pôr do Sol',
    span: 'large',
    src: 'assets/images/photo_2026-10-15_22-32-26.jpg',
    fallback: { c1: '#140e08', c2: '#221810' },
  },
  {
    id: 34,
    category: 'eventos',
    label: 'Fotografia de Eventos',
    title: 'Parada — Multidão',
    span: null,
    src: 'assets/images/photo_2026-10-15_22-32-29.jpg',
    fallback: { c1: '#0a1010', c2: '#141e1e' },
  },

  // ── EVENTOS — Festa junina / diurna ───────────────────────────────────
  {
    id: 35,
    category: 'eventos',
    label: 'Fotografia de Eventos',
    title: 'Festa Junina',
    span: null,
    src: 'assets/images/photo_2026-10-15_22-27-57.jpg',
    fallback: { c1: '#181005', c2: '#2e1e0a' },
  },
  {
    id: 36,
    category: 'eventos',
    label: 'Fotografia de Eventos',
    title: 'Fogueira',
    span: 'wide',
    src: 'assets/images/photo_2026-10-15_22-28-05.jpg',
    fallback: { c1: '#1a0c05', c2: '#2e1a08' },
  },

  // ── EVENTOS — UUID de festa noturna ───────────────────────────────────
  {
    id: 37,
    category: 'eventos',
    label: 'Fotografia de Eventos',
    title: 'Neon Roxo',
    span: null,
    src: 'assets/images/033C1F3B-5F36-4075-B9AF-38436A96ACE4.png',
    fallback: { c1: '#100514', c2: '#200a28' },
  },
  {
    id: 38,
    category: 'eventos',
    label: 'Fotografia de Eventos',
    title: 'Luzes da Pista',
    span: null,
    src: 'assets/images/0F536265-E99E-41C7-86E4-E877900D9C90.png',
    fallback: { c1: '#0a0514', c2: '#141028' },
  },
  {
    id: 39,
    category: 'eventos',
    label: 'Fotografia de Eventos',
    title: 'Balada',
    span: null,
    src: 'assets/images/2E773B2E-D49C-4DCE-A495-A65E02AF091A.PNG',
    fallback: { c1: '#080a14', c2: '#101420' },
  },
  {
    id: 40,
    category: 'eventos',
    label: 'Fotografia de Eventos',
    title: 'Energia',
    span: null,
    src: 'assets/images/318A9438-6CB1-4E8E-B16E-2691259BBC8D.PNG',
    fallback: { c1: '#0a0814', c2: '#14101e' },
  },
  {
    id: 41,
    category: 'eventos',
    label: 'Fotografia de Eventos',
    title: 'Brilho da Festa',
    span: null,
    src: 'assets/images/3C12E959-21CB-40DE-BA9D-09891580FBF5.PNG',
    fallback: { c1: '#0d0a18', c2: '#1a142e' },
  },
  {
    id: 42,
    category: 'eventos',
    label: 'Fotografia de Eventos',
    title: 'Na Balada',
    span: null,
    src: 'assets/images/3EB080AB-7033-4FFE-9BF1-39896A5DD3A2.png',
    fallback: { c1: '#100a18', c2: '#1e1228' },
  },
  {
    id: 43,
    category: 'eventos',
    label: 'Fotografia de Eventos',
    title: 'Noite Intensa',
    span: null,
    src: 'assets/images/421E8D73-BA37-4D8C-A40F-F6BB354DF805.PNG',
    fallback: { c1: '#14080a', c2: '#22101a' },
  },
  {
    id: 44,
    category: 'eventos',
    label: 'Fotografia de Eventos',
    title: 'Clube',
    span: null,
    src: 'assets/images/4CD1E6C2-49D0-4B66-95B0-7EDE153F46E0.jpg',
    fallback: { c1: '#0a1014', c2: '#14181e' },
  },
  {
    id: 45,
    category: 'eventos',
    label: 'Fotografia de Eventos',
    title: 'Festa Noturna',
    span: null,
    src: 'assets/images/4D31EB0D-1B09-465C-A47F-4EE6DCF0529B.png',
    fallback: { c1: '#0d0814', c2: '#1a1020' },
  },
  {
    id: 46,
    category: 'eventos',
    label: 'Fotografia de Eventos',
    title: 'Retratos da Balada',
    span: null,
    src: 'assets/images/57B45C95-D0F5-493A-AB8E-A5B4472FA259.png',
    fallback: { c1: '#0a0a14', c2: '#141422' },
  },
  {
    id: 47,
    category: 'eventos',
    label: 'Fotografia de Eventos',
    title: 'Estilo na Pista',
    span: null,
    src: 'assets/images/58EB7FC5-7480-45F6-8996-1D71D045087D.png',
    fallback: { c1: '#14080e', c2: '#221018' },
  },
  {
    id: 48,
    category: 'eventos',
    label: 'Fotografia de Eventos',
    title: 'Evento Noturno',
    span: null,
    src: 'assets/images/5B458828-CE0D-4C1C-B6CF-B00DA29031E5.png',
    fallback: { c1: '#080a10', c2: '#10141e' },
  },
  {
    id: 49,
    category: 'eventos',
    label: 'Fotografia de Eventos',
    title: 'Galeria da Noite',
    span: null,
    src: 'assets/images/6C453911-A1C0-485B-976D-71E1796D3485.PNG',
    fallback: { c1: '#0a0814', c2: '#141018' },
  },
  {
    id: 50,
    category: 'eventos',
    label: 'Fotografia de Eventos',
    title: 'Flash & Neon',
    span: null,
    src: 'assets/images/70804FC6-934A-4F2C-B846-FC3E255B76F7.png',
    fallback: { c1: '#0d0514', c2: '#1a0a28' },
  },
  {
    id: 51,
    category: 'eventos',
    label: 'Fotografia de Eventos',
    title: 'Madrugada',
    span: null,
    src: 'assets/images/79D28C09-A71E-4272-98F6-9F28A47AD09F.png',
    fallback: { c1: '#080a14', c2: '#10141e' },
  },
  {
    id: 52,
    category: 'eventos',
    label: 'Fotografia de Eventos',
    title: 'Noite em Roxo',
    span: null,
    src: 'assets/images/84EBF6E1-C641-4264-9223-40F5029AEF71.png',
    fallback: { c1: '#100a20', c2: '#1e1430' },
  },
  {
    id: 53,
    category: 'eventos',
    label: 'Fotografia de Eventos',
    title: 'Festa',
    span: null,
    src: 'assets/images/9B9BDCC3-955E-4D5F-8559-2150B67F7BC9.png',
    fallback: { c1: '#0a0a14', c2: '#14141e' },
  },
  {
    id: 54,
    category: 'eventos',
    label: 'Fotografia de Eventos',
    title: 'Aquecimento',
    span: null,
    src: 'assets/images/B6580803-A119-4203-B498-6E5FD6C432D2.png',
    fallback: { c1: '#14080a', c2: '#201014' },
  },
  {
    id: 55,
    category: 'eventos',
    label: 'Fotografia de Eventos',
    title: 'Luzes & Poses',
    span: null,
    src: 'assets/images/CF379D85-C26A-49E6-A4CB-82CDACE9E92A.png',
    fallback: { c1: '#0a0a14', c2: '#12121e' },
  },
  {
    id: 56,
    category: 'eventos',
    label: 'Fotografia de Eventos',
    title: 'Clima de Festa',
    span: null,
    src: 'assets/images/DD792B07-7919-43FB-B694-2327342B654A.png',
    fallback: { c1: '#0d0a14', c2: '#1a1422' },
  },
  {
    id: 57,
    category: 'eventos',
    label: 'Lipe.Vision | Festas e Eventos',
    title: 'Fim de Noite',
    span: null,
    src: 'assets/images/E49B957A-2B60-481E-AD5F-7A30C78EC582.PNG',
    fallback: { c1: '#0a0d14', c2: '#141620' },
  },

  // ── NOVAS FOTOS — photo_2026-10-18 (festas e eventos) ─────────────────
  {
    id: 58,
    category: 'eventos',
    label: 'Lipe.Vision | Festas e Eventos',
    title: 'Grupo na Festa',
    span: 'large',
    src: 'assets/images/photo_2026-10-18_03-56-47.jpg',
    fallback: { c1: '#0d0514', c2: '#1a0a2e' },
  },
  {
    id: 59,
    category: 'eventos',
    label: 'Lipe.Vision | Festas e Eventos',
    title: 'Energia na Pista',
    span: null,
    src: 'assets/images/photo_2026-10-18_03-56-48.jpg',
    fallback: { c1: '#140508', c2: '#2e0a10' },
  },
  {
    id: 60,
    category: 'eventos',
    label: 'Lipe.Vision | Festas e Eventos',
    title: 'Dois no Flash',
    span: null,
    src: 'assets/images/photo_2026-10-18_03-56-50.jpg',
    fallback: { c1: '#0d1018', c2: '#1a2030' },
  },
  {
    id: 61,
    category: 'eventos',
    label: 'Lipe.Vision | Festas e Eventos',
    title: 'Noite de Clube',
    span: null,
    src: 'assets/images/photo_2026-10-18_03-56-51.jpg',
    fallback: { c1: '#0a0d1a', c2: '#141e2e' },
  },
  {
    id: 62,
    category: 'eventos',
    label: 'Lipe.Vision | Festas e Eventos',
    title: 'Casal na Balada',
    span: null,
    src: 'assets/images/photo_2026-10-18_03-56-52.jpg',
    fallback: { c1: '#1a0a08', c2: '#2e1210' },
  },
  {
    id: 63,
    category: 'eventos',
    label: 'Lipe.Vision | Festas e Eventos',
    title: 'Pista Iluminada',
    span: null,
    src: 'assets/images/photo_2026-10-18_03-56-54.jpg',
    fallback: { c1: '#0a1205', c2: '#12200a' },
  },
  {
    id: 64,
    category: 'eventos',
    label: 'Lipe.Vision | Festas e Eventos',
    title: 'Amigos na Festa',
    span: null,
    src: 'assets/images/photo_2026-10-18_03-56-55.jpg',
    fallback: { c1: '#100a18', c2: '#1e1228' },
  },
  {
    id: 65,
    category: 'eventos',
    label: 'Lipe.Vision | Festas e Eventos',
    title: 'Retrato de Festa',
    span: null,
    src: 'assets/images/photo_2026-10-18_03-56-56.jpg',
    fallback: { c1: '#080a14', c2: '#101420' },
  },
  {
    id: 66,
    category: 'eventos',
    label: 'Lipe.Vision | Festas e Eventos',
    title: 'Clima de Clube',
    span: null,
    src: 'assets/images/photo_2026-10-18_03-56-57.jpg',
    fallback: { c1: '#0d0a18', c2: '#1a1430' },
  },
  {
    id: 67,
    category: 'eventos',
    label: 'Lipe.Vision | Festas e Eventos',
    title: 'Pose Noturna',
    span: null,
    src: 'assets/images/photo_2026-10-18_03-56-59.jpg',
    fallback: { c1: '#0a1210', c2: '#14201a' },
  },
  {
    id: 68,
    category: 'eventos',
    label: 'Lipe.Vision | Festas e Eventos',
    title: 'Luzes LED',
    span: null,
    src: 'assets/images/photo_2026-10-18_03-57-00.jpg',
    fallback: { c1: '#100510', c2: '#200a20' },
  },
  {
    id: 69,
    category: 'eventos',
    label: 'Lipe.Vision | Festas e Eventos',
    title: 'Galera na Balada',
    span: null,
    src: 'assets/images/photo_2026-10-18_03-57-01.jpg',
    fallback: { c1: '#0a0a0a', c2: '#181818' },
  },
  {
    id: 70,
    category: 'eventos',
    label: 'Lipe.Vision | Festas e Eventos',
    title: 'Ambiente de Festa',
    span: null,
    src: 'assets/images/photo_2026-10-18_03-57-06.jpg',
    fallback: { c1: '#0a0814', c2: '#18121e' },
  },
  {
    id: 71,
    category: 'eventos',
    label: 'Lipe.Vision | Festas e Eventos',
    title: 'Poses no Evento',
    span: null,
    src: 'assets/images/photo_2026-10-18_03-57-09.jpg',
    fallback: { c1: '#120514', c2: '#200a22' },
  },
  {
    id: 72,
    category: 'eventos',
    label: 'Lipe.Vision | Festas e Eventos',
    title: 'Clube Noturno',
    span: null,
    src: 'assets/images/photo_2026-10-18_03-57-12.jpg',
    fallback: { c1: '#140a08', c2: '#221210' },
  },
  {
    id: 73,
    category: 'eventos',
    label: 'Lipe.Vision | Festas e Eventos',
    title: 'Festejando',
    span: null,
    src: 'assets/images/photo_2026-10-18_03-57-17.jpg',
    fallback: { c1: '#0a1014', c2: '#141820' },
  },
  {
    id: 74,
    category: 'eventos',
    label: 'Lipe.Vision | Festas e Eventos',
    title: 'Flash Frontal',
    span: null,
    src: 'assets/images/photo_2026-10-18_03-57-21.jpg',
    fallback: { c1: '#14080a', c2: '#221014' },
  },
  {
    id: 75,
    category: 'eventos',
    label: 'Lipe.Vision | Festas e Eventos',
    title: 'Momento de Festa',
    span: null,
    src: 'assets/images/photo_2026-10-18_03-57-23.jpg',
    fallback: { c1: '#080a14', c2: '#12141e' },
  },
  {
    id: 76,
    category: 'eventos',
    label: 'Lipe.Vision | Festas e Eventos',
    title: 'Dupla no Evento',
    span: null,
    src: 'assets/images/photo_2026-10-18_03-57-25.jpg',
    fallback: { c1: '#0a0a14', c2: '#14143a' },
  },
  {
    id: 77,
    category: 'eventos',
    label: 'Lipe.Vision | Festas e Eventos',
    title: 'Madrugada',
    span: null,
    src: 'assets/images/photo_2026-10-18_03-57-29.jpg',
    fallback: { c1: '#101810', c2: '#1e2e1e' },
  },
  {
    id: 78,
    category: 'eventos',
    label: 'Lipe.Vision | Festas e Eventos',
    title: 'Balada Intensa',
    span: null,
    src: 'assets/images/photo_2026-10-18_03-57-31.jpg',
    fallback: { c1: '#0a1214', c2: '#141e22' },
  },
  {
    id: 79,
    category: 'eventos',
    label: 'Lipe.Vision | Festas e Eventos',
    title: 'Neon Roxo',
    span: null,
    src: 'assets/images/photo_2026-10-18_03-57-36.jpg',
    fallback: { c1: '#100514', c2: '#200a28' },
  },
  {
    id: 80,
    category: 'eventos',
    label: 'Lipe.Vision | Festas e Eventos',
    title: 'Momento Noturno',
    span: null,
    src: 'assets/images/photo_2026-10-18_03-57-37.jpg',
    fallback: { c1: '#080a14', c2: '#101420' },
  },
  {
    id: 81,
    category: 'eventos',
    label: 'Lipe.Vision | Festas e Eventos',
    title: 'Estilo na Noite',
    span: null,
    src: 'assets/images/photo_2026-10-18_03-57-38.jpg',
    fallback: { c1: '#14100a', c2: '#221a10' },
  },
  {
    id: 82,
    category: 'eventos',
    label: 'Lipe.Vision | Festas e Eventos',
    title: 'Grupo Animado',
    span: null,
    src: 'assets/images/photo_2026-10-18_03-57-40.jpg',
    fallback: { c1: '#0a0814', c2: '#14101e' },
  },
  {
    id: 83,
    category: 'eventos',
    label: 'Lipe.Vision | Festas e Eventos',
    title: 'Flash na Balada',
    span: null,
    src: 'assets/images/photo_2026-10-18_03-57-41.jpg',
    fallback: { c1: '#0d0a18', c2: '#1a142e' },
  },
  {
    id: 84,
    category: 'eventos',
    label: 'Lipe.Vision | Festas e Eventos',
    title: 'Sorriso no Evento',
    span: null,
    src: 'assets/images/photo_2026-10-18_03-57-42.jpg',
    fallback: { c1: '#100a18', c2: '#1e1228' },
  },
  {
    id: 85,
    category: 'eventos',
    label: 'Lipe.Vision | Festas e Eventos',
    title: 'Sequência da Noite',
    span: null,
    src: 'assets/images/photo_2026-10-18_03-57-43.jpg',
    fallback: { c1: '#14080a', c2: '#22101a' },
  },
  {
    id: 86,
    category: 'eventos',
    label: 'Lipe.Vision | Festas e Eventos',
    title: 'Pose na Pista',
    span: null,
    src: 'assets/images/photo_2026-10-18_03-57-50.jpg',
    fallback: { c1: '#0a1014', c2: '#14181e' },
  },
  {
    id: 87,
    category: 'eventos',
    label: 'Lipe.Vision | Festas e Eventos',
    title: 'Energia Final',
    span: null,
    src: 'assets/images/photo_2026-10-18_03-57-56.jpg',
    fallback: { c1: '#0d0814', c2: '#1a1020' },
  },
  {
    id: 88,
    category: 'eventos',
    label: 'Lipe.Vision | Festas e Eventos',
    title: 'Último Clique',
    span: null,
    src: 'assets/images/photo_2026-10-18_03-57-59.jpg',
    fallback: { c1: '#0a0a14', c2: '#141422' },
  },
  {
    id: 89,
    category: 'eventos',
    label: 'Lipe.Vision | Festas e Eventos',
    title: 'Encerramento',
    span: null,
    src: 'assets/images/photo_2026-10-18_03-58-00.jpg',
    fallback: { c1: '#14080e', c2: '#221018' },
  },
  {
    id: 90,
    category: 'eventos',
    label: 'Lipe.Vision | Festas e Eventos',
    title: 'Noite Viva',
    span: null,
    src: 'assets/images/photo_2026-10-18_03-58-02.jpg',
    fallback: { c1: '#0a0d14', c2: '#141620' },
  },
  {
    id: 91,
    category: 'eventos',
    label: 'Lipe.Vision | Festas e Eventos',
    title: 'Vibração',
    span: null,
    src: 'assets/images/photo_2026-10-18_03-58-05.jpg',
    fallback: { c1: '#100814', c2: '#201020' },
  },
  {
    id: 92,
    category: 'eventos',
    label: 'Lipe.Vision | Festas e Eventos',
    title: 'Madrugada Alta',
    span: null,
    src: 'assets/images/photo_2026-10-18_03-58-07.jpg',
    fallback: { c1: '#0a0a12', c2: '#14141e' },
  },
  {
    id: 93,
    category: 'eventos',
    label: 'Lipe.Vision | Festas e Eventos',
    title: 'Festa Final',
    span: null,
    src: 'assets/images/photo_2026-10-18_03-58-08.jpg',
    fallback: { c1: '#0d0a10', c2: '#1a1418' },
  },

  // ── NOVAS FOTOS — UUIDs ────────────────────────────────────────────────
  {
    id: 94,
    category: 'casamentos',
    label: 'Lipe.Vision | Casamentos',
    title: 'Abraço com Flores',
    span: 'large',
    src: 'assets/images/425287C9-495A-4F66-80B7-80B55D807CCB.PNG',
    fallback: { c1: '#1a1410', c2: '#2e2018' },
  },
  {
    id: 95,
    category: 'eventos',
    label: 'Lipe.Vision | Festas e Eventos',
    title: 'Grupo Animado',
    span: null,
    src: 'assets/images/605F879A-9A45-4C61-A614-2E1DDCFDACAD.PNG',
    fallback: { c1: '#0a0514', c2: '#1a0a28' },
  },
  {
    id: 96,
    category: 'eventos',
    label: 'Lipe.Vision | Festas e Eventos',
    title: 'Cena do Evento',
    span: null,
    src: 'assets/images/6970A7B5-EA6B-4B84-9B8A-A63AEF4F312A.PNG',
    fallback: { c1: '#080a10', c2: '#10141e' },
  },
  {
    id: 97,
    category: 'ensaios',
    label: 'Lipe.Vision | Ensaios Fotográficos',
    title: 'Retrato Artístico',
    span: null,
    src: 'assets/images/7682C3DE-98B1-4915-941D-F155025234B1.png',
    fallback: { c1: '#100c08', c2: '#201810' },
  },
  {
    id: 98,
    category: 'eventos',
    label: 'Lipe.Vision | Festas e Eventos',
    title: 'Festa em Grupo',
    span: null,
    src: 'assets/images/98B26C5D-FBAD-4B28-B47F-18EED2AE6A55.PNG',
    fallback: { c1: '#0a0a14', c2: '#141414' },
  },
  {
    id: 99,
    category: 'eventos',
    label: 'Lipe.Vision | Festas e Eventos',
    title: 'Momento no Evento',
    span: null,
    src: 'assets/images/A319B615-F6CA-47E9-82A5-DBF16554405A.PNG',
    fallback: { c1: '#0a0814', c2: '#141018' },
  },
  {
    id: 100,
    category: 'ensaios',
    label: 'Lipe.Vision | Ensaios Fotográficos',
    title: 'Retrato Individual',
    span: null,
    src: 'assets/images/AA855E8F-9A2A-4EAC-A401-D16DB5288BB3.PNG',
    fallback: { c1: '#0a0a0a', c2: '#181818' },
  },
  {
    id: 101,
    category: 'eventos',
    label: 'Lipe.Vision | Festas e Eventos',
    title: 'Casal no Evento',
    span: null,
    src: 'assets/images/D69076F4-B263-40BA-B156-F2D875742DB2.PNG',
    fallback: { c1: '#0a0514', c2: '#141028' },
  },
  {
    id: 102,
    category: 'eventos',
    label: 'Lipe.Vision | Festas e Eventos',
    title: 'Balada em Grupo',
    span: null,
    src: 'assets/images/F1F4B206-FA6F-4CEA-873C-C5CDC73E2894.PNG',
    fallback: { c1: '#0d0a14', c2: '#1a1422' },
  },
  {
    id: 103,
    category: 'eventos',
    label: 'Lipe.Vision | Festas e Eventos',
    title: 'Cena de Festa',
    span: null,
    src: 'assets/images/F7171B79-B1A8-486F-9F95-A989E0977E1D.PNG',
    fallback: { c1: '#0a0d14', c2: '#141620' },
  },
  {
    id: 104,
    category: 'cultural',
    label: 'Lipe.Vision | Fotografia Cultural',
    title: 'Cultura em Cena',
    span: 'large',
    src: 'assets/images/53520602252_29a841421a_o.JPG',
    fallback: { c1: '#0a1008', c2: '#141e10' },
  },
];

/* ─── UTILITÁRIOS ────────────────────────────────────────────────────────── */
const $ = (sel, ctx = document) => ctx.querySelector(sel);
const $$ = (sel, ctx = document) => [...ctx.querySelectorAll(sel)];

function debounce(fn, ms) {
  let t;
  return (...args) => { clearTimeout(t); t = setTimeout(() => fn(...args), ms); };
}

/* ─── PRELOADER ──────────────────────────────────────────────────────────── */
function initPreloader() {
  const preloader = $('#preloader');
  if (!preloader) return;

  // Aguarda o carregamento mínimo + barra de progresso (1.9s de animação CSS)
  const hidePreloader = () => {
    preloader.classList.add('hidden');
    document.body.style.overflow = '';
  };

  document.body.style.overflow = 'hidden';

  // Oculta após a animação terminar
  window.addEventListener('load', () => {
    setTimeout(hidePreloader, 2000);
  });

  // Fallback: oculta no máximo após 4s
  setTimeout(hidePreloader, 4000);
}

/* ─── CURSOR CUSTOMIZADO ─────────────────────────────────────────────────── */
function initCursor() {
  const cursor = $('#cursor');
  const follower = $('#cursorFollower');
  if (!cursor || !follower) return;

  // Só ativa em dispositivos com hover (desktop)
  if (!window.matchMedia('(hover: hover)').matches) return;

  let mouseX = 0, mouseY = 0;
  let followerX = 0, followerY = 0;

  document.addEventListener('mousemove', (e) => {
    mouseX = e.clientX;
    mouseY = e.clientY;
    cursor.style.left = mouseX + 'px';
    cursor.style.top  = mouseY + 'px';
  });

  // Follower com lag suave
  function animateFollower() {
    followerX += (mouseX - followerX) * 0.12;
    followerY += (mouseY - followerY) * 0.12;
    follower.style.left = followerX + 'px';
    follower.style.top  = followerY + 'px';
    requestAnimationFrame(animateFollower);
  }
  animateFollower();

  // Efeito em elementos interativos
  const hoverTargets = 'a, button, .portfolio__item, .portfolio__card-rosa, .ensaio__card';
  document.addEventListener('mouseover', (e) => {
    if (e.target.closest(hoverTargets)) {
      cursor.classList.add('hovered');
      follower.classList.add('hovered');
    }
  });

  document.addEventListener('mouseout', (e) => {
    if (e.target.closest(hoverTargets)) {
      cursor.classList.remove('hovered');
      follower.classList.remove('hovered');
    }
  });
}

/* ─── HEADER SCROLL ──────────────────────────────────────────────────────── */
function initHeader() {
  const header = $('#header');
  if (!header) return;

  const onScroll = debounce(() => {
    header.classList.toggle('scrolled', window.scrollY > 20);
  }, 10);

  window.addEventListener('scroll', onScroll, { passive: true });
  onScroll();
}

/* ─── MENU HAMBÚRGUER ────────────────────────────────────────────────────── */
function initMenu() {
  const hamburger = $('#hamburger');
  const navList   = $('#navList');
  if (!hamburger || !navList) return;

  function toggleMenu(open) {
    const isOpen = open ?? !hamburger.classList.contains('open');
    hamburger.classList.toggle('open', isOpen);
    navList.classList.toggle('open', isOpen);
    hamburger.setAttribute('aria-expanded', String(isOpen));
    document.body.style.overflow = isOpen ? 'hidden' : '';
  }

  hamburger.addEventListener('click', () => toggleMenu());

  // Fechar ao clicar em um link
  $$('.nav__link', navList).forEach(link => {
    link.addEventListener('click', () => toggleMenu(false));
  });

  // Fechar com ESC
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && navList.classList.contains('open')) toggleMenu(false);
  });

  // Fechar ao clicar fora
  document.addEventListener('click', (e) => {
    if (!e.target.closest('.nav') && navList.classList.contains('open')) toggleMenu(false);
  });
}

/* ─── ACTIVE NAV LINK (SCROLL SPY) ──────────────────────────────────────── */
function initScrollSpy() {
  const sections = $$('section[id]');
  const links    = $$('.nav__link');

  function update() {
    const scrollY = window.scrollY;
    let current = '';

    sections.forEach(sec => {
      const top = sec.offsetTop - 120;
      if (scrollY >= top) current = sec.id;
    });

    links.forEach(link => {
      const href = link.getAttribute('href').replace('#', '');
      link.classList.toggle('active', href === current);
      link.setAttribute('aria-current', href === current ? 'page' : '');
    });
  }

  window.addEventListener('scroll', debounce(update, 50), { passive: true });
  update();
}

/* ─── SCROLL REVEAL ──────────────────────────────────────────────────────── */
function initScrollReveal() {
  if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
    $$('[data-scroll-reveal]').forEach(el => el.classList.add('revealed'));
    return;
  }

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('revealed');
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.12, rootMargin: '0px 0px -40px 0px' }
  );

  $$('[data-scroll-reveal]').forEach(el => observer.observe(el));
}

/* ─── CONTADORES ANIMADOS (SOBRE) ────────────────────────────────────────── */
function initCounters() {
  const counters = $$('[data-target]');
  if (!counters.length) return;

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach(entry => {
        if (!entry.isIntersecting) return;
        const el     = entry.target;
        const target = parseInt(el.dataset.target, 10);
        const dur    = 1500;
        const start  = performance.now();

        function tick(now) {
          const elapsed  = now - start;
          const progress = Math.min(elapsed / dur, 1);
          // Easing ease-out
          const eased    = 1 - Math.pow(1 - progress, 3);
          el.textContent = Math.round(eased * target);
          if (progress < 1) requestAnimationFrame(tick);
        }

        requestAnimationFrame(tick);
        observer.unobserve(el);
      });
    },
    { threshold: 0.5 }
  );

  counters.forEach(c => observer.observe(c));
}

/* ─── PORTFÓLIO — MURAL MASONRY & FILTROS ───────────────────────────────── */

/**
 * Mapeamento de categorias:
 *   'eventos'   → data-filter="eventos"   (eventos corporativos, paradas, festas juninas)
 *   'festas'    → data-filter="festas"    (baladas, festas noturnas, aniversários)
 *   'casamentos'→ data-filter="casamentos"
 *   'ensaios'   → data-filter="ensaios"
 *   'editorial' → data-filter="editorial"
 *   'cultural'  → data-filter="cultural"
 *
 * IDs 11–57 e 58–104 eram todos 'eventos'. Os que são festas/baladas
 * migram para 'festas'. Os IDs 29–34 (Parada) e 35–36 (Festa Junina)
 * permanecem em 'eventos'.
 */

// IDs que são baladas/festas noturnas → categoria "festas"
const FESTAS_IDS = new Set([
  11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,
  37,38,39,40,41,42,43,44,45,46,47,48,49,50,51,52,53,54,55,56,57,
  58,59,60,61,62,63,64,65,66,67,68,69,70,71,72,73,74,75,76,77,78,79,
  80,81,82,83,84,85,86,87,88,89,90,91,92,93,95,96,98,99,101,102,103,
]);

// Posição (índice 0-based) após a qual o cartão rosa é inserido
const CARD_ROSA_AFTER = 11;

function resolveCategory(item) {
  if (FESTAS_IDS.has(item.id)) return 'festas';
  return item.category;
}

function resolveCategoryLabel(cat) {
  const map = {
    festas:     'Festas',
    eventos:    'Eventos',
    casamentos: 'Casamentos',
    ensaios:    'Ensaios',
    editorial:  'Editorial',
    cultural:   'Cultura',
  };
  return map[cat] || cat;
}

function buildCardRosa() {
  const a = document.createElement('a');
  a.className = 'portfolio__card-rosa';
  a.href = 'https://www.instagram.com/lipe.vision/';
  a.target = '_blank';
  a.rel = 'noopener noreferrer';
  a.setAttribute('aria-label', 'Seguir @lipe.vision no Instagram');
  a.innerHTML = `
    <span class="portfolio__card-rosa__tag">Siga nosso trabalho</span>
    <p class="portfolio__card-rosa__titulo">MARQUE<br>A GENTE</p>
    <span class="portfolio__card-rosa__handle">@lipe.vision</span>
    <i class="ri-instagram-line portfolio__card-rosa__icon" aria-hidden="true"></i>
  `;
  return a;
}

function initPortfolio() {
  const grid = $('#portfolioGrid');
  if (!grid) return;

  let cardRosaInserted = false;

  // Renderiza itens
  portfolioItems.forEach((item, index) => {
    // Inserir cartão rosa após o item na posição CARD_ROSA_AFTER
    if (index === CARD_ROSA_AFTER && !cardRosaInserted) {
      grid.appendChild(buildCardRosa());
      cardRosaInserted = true;
    }

    const category = resolveCategory(item);
    const catLabel = resolveCategoryLabel(category);

    const el = document.createElement('article');
    el.className = 'portfolio__item';
    el.setAttribute('role', 'listitem');
    el.setAttribute('data-category', category);
    el.setAttribute('data-index', index);
    el.setAttribute('tabindex', '0');
    el.setAttribute('aria-label', `${catLabel}: ${item.title}`);

    // Na galeria masonry não usamos span — cada imagem define sua altura
    const imgHTML = item.src
      ? `<img
           class="portfolio__thumb"
           src="${item.src}"
           alt="${catLabel}: ${item.title}"
           loading="lazy"
           decoding="async"
           onerror="this.style.display='none';this.nextElementSibling.style.display='block';"
         />
         <div class="portfolio__placeholder portfolio__placeholder--fallback"
              style="--pc1:${item.fallback.c1};--pc2:${item.fallback.c2};display:none"
              aria-hidden="true"></div>`
      : `<div class="portfolio__placeholder"
              style="--pc1:${item.fallback.c1};--pc2:${item.fallback.c2};aspect-ratio:4/5"
              aria-hidden="true"></div>`;

    el.innerHTML = `
      ${imgHTML}
      <div class="portfolio__overlay" aria-hidden="true">
        <div class="portfolio__info">
          <span class="portfolio__cat">${catLabel}</span>
          <p class="portfolio__name">${item.title}</p>
        </div>
      </div>
      <div class="portfolio__zoom" aria-hidden="true">
        <i class="ri-zoom-in-line"></i>
      </div>
    `;

    el.addEventListener('click', () => openLightbox(index));
    el.addEventListener('keydown', (e) => {
      if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); openLightbox(index); }
    });

    grid.appendChild(el);
  });

  // Filtros
  const filters = $$('.portfolio__filter');
  filters.forEach(btn => {
    btn.addEventListener('click', () => {
      const filter = btn.dataset.filter;

      filters.forEach(b => {
        b.classList.remove('active');
        b.setAttribute('aria-selected', 'false');
      });
      btn.classList.add('active');
      btn.setAttribute('aria-selected', 'true');

      // Fotos
      $$('.portfolio__item').forEach(item => {
        const cat = item.dataset.category;
        const show = filter === 'all' || cat === filter;
        item.classList.toggle('hidden', !show);
      });

      // Cartão rosa: só aparece em "Todas" e em "Festas"
      const cardRosa = $('.portfolio__card-rosa', grid);
      if (cardRosa) {
        const showCard = filter === 'all' || filter === 'festas';
        cardRosa.style.display = showCard ? '' : 'none';
      }
    });
  });
}

/* ─── LIGHTBOX ───────────────────────────────────────────────────────────── */
let lightboxIndex = 0;

function openLightbox(index) {
  const lb     = $('#lightbox');
  const wrap   = $('#lightboxImgWrap');
  const cap    = $('#lightboxCaption');
  if (!lb || !wrap) return;

  lightboxIndex = index;
  renderLightboxItem();
  lb.removeAttribute('hidden');
  lb.focus();
  document.body.style.overflow = 'hidden';

  // Armadilha de foco
  lb.addEventListener('keydown', lightboxKeyHandler);
}

function renderLightboxItem() {
  const wrap = $('#lightboxImgWrap');
  const cap  = $('#lightboxCaption');
  const item = portfolioItems[lightboxIndex];
  if (!item || !wrap) return;

  if (item.src) {
    // Mostra spinner enquanto carrega
    wrap.innerHTML = `
      <div class="lightbox__loading" aria-label="Carregando imagem">
        <div class="lightbox__spinner"></div>
      </div>
    `;

    const img = new Image();
    img.className = 'lightbox__img';
    img.alt = `${item.label}: ${item.title}`;

    img.onload = () => {
      wrap.innerHTML = '';
      wrap.appendChild(img);
    };

    img.onerror = () => {
      // Fallback visual se a imagem falhar
      wrap.innerHTML = `
        <div class="lightbox__fallback"
             style="background:linear-gradient(135deg,${item.fallback.c1},${item.fallback.c2})">
          <span class="lightbox__fallback-label">${item.title}</span>
        </div>
      `;
    };

    img.src = item.src;
  } else {
    wrap.innerHTML = `
      <div class="lightbox__fallback"
           style="background:linear-gradient(135deg,${item.fallback.c1},${item.fallback.c2})">
        <span class="lightbox__fallback-label">${item.title}</span>
      </div>
    `;
  }

  if (cap) cap.textContent = `${item.label} — ${item.title}`;
}

function closeLightbox() {
  const lb = $('#lightbox');
  if (!lb) return;
  lb.setAttribute('hidden', '');
  document.body.style.overflow = '';
  lb.removeEventListener('keydown', lightboxKeyHandler);

  // Devolver foco ao item do portfólio
  const item = $(`.portfolio__item[data-index="${lightboxIndex}"]`);
  if (item) item.focus();
}

function lightboxKeyHandler(e) {
  if (e.key === 'Escape')     closeLightbox();
  if (e.key === 'ArrowLeft')  lightboxPrev();
  if (e.key === 'ArrowRight') lightboxNext();
}

function lightboxPrev() {
  lightboxIndex = (lightboxIndex - 1 + portfolioItems.length) % portfolioItems.length;
  renderLightboxItem();
}

function lightboxNext() {
  lightboxIndex = (lightboxIndex + 1) % portfolioItems.length;
  renderLightboxItem();
}

function initLightbox() {
  const lb    = $('#lightbox');
  const close = $('#lightboxClose');
  const prev  = $('#lightboxPrev');
  const next  = $('#lightboxNext');

  if (!lb) return;

  if (close) close.addEventListener('click', closeLightbox);
  if (prev)  prev.addEventListener('click', lightboxPrev);
  if (next)  next.addEventListener('click', lightboxNext);

  // Fechar ao clicar no fundo
  lb.addEventListener('click', (e) => {
    if (e.target === lb) closeLightbox();
  });
}

/* ─── FAB (BOTÃO FLUTUANTE) ──────────────────────────────────────────────── */
function initFab() {
  const wrapper = $('.fab-wrapper');
  const main    = $('#fabMain');
  if (!wrapper || !main) return;

  main.addEventListener('click', () => {
    const isOpen = wrapper.classList.toggle('open');
    main.setAttribute('aria-expanded', String(isOpen));
  });

  // Fechar ao clicar fora
  document.addEventListener('click', (e) => {
    if (!e.target.closest('.fab-wrapper') && wrapper.classList.contains('open')) {
      wrapper.classList.remove('open');
      main.setAttribute('aria-expanded', 'false');
    }
  });
}

/* ─── BACK TO TOP ────────────────────────────────────────────────────────── */
function initBackToTop() {
  const btn = $('#backToTop');
  if (!btn) return;

  window.addEventListener('scroll', debounce(() => {
    if (window.scrollY > 500) {
      btn.removeAttribute('hidden');
    } else {
      btn.setAttribute('hidden', '');
    }
  }, 100), { passive: true });

  btn.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });
}

/* ─── FORMULÁRIO DE CONTATO ──────────────────────────────────────────────── */
function initForm() {
  const form    = $('#contatoForm');
  const success = $('#formSuccess');
  const submit  = $('#formSubmit');
  if (!form) return;

  // Validação em tempo real
  const fields = $$('.form__input, .form__select', form);
  fields.forEach(field => {
    field.addEventListener('blur', () => validateField(field));
    field.addEventListener('input', () => {
      if (field.classList.contains('error')) validateField(field);
    });
  });

  form.addEventListener('submit', (e) => {
    e.preventDefault();

    let valid = true;
    $$('.form__input[required], .form__select[required]', form).forEach(f => {
      if (!validateField(f)) valid = false;
    });

    if (!valid) return;

    // Simulação de envio (modo demonstração)
    submit.disabled = true;
    submit.querySelector('span').textContent = 'Enviando...';

    setTimeout(() => {
      if (success) {
        success.removeAttribute('hidden');
        success.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
      }
      form.reset();
      submit.disabled = false;
      submit.querySelector('span').textContent = 'Enviar mensagem';

      // Oculta mensagem após 6s
      setTimeout(() => { if (success) success.setAttribute('hidden', ''); }, 6000);
    }, 1200);
  });
}

function validateField(field) {
  const errorEl = field.nextElementSibling;
  let msg = '';

  if (field.required && !field.value.trim()) {
    msg = 'Este campo é obrigatório.';
  } else if (field.type === 'email' && field.value) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(field.value)) msg = 'Informe um e-mail válido.';
  }

  field.classList.toggle('error', !!msg);
  if (errorEl && errorEl.classList.contains('form__error')) {
    errorEl.textContent = msg;
  }

  return !msg;
}

/* ─── ANO ATUAL NO FOOTER ────────────────────────────────────────────────── */
function initFooterYear() {
  const el = $('#anoAtual');
  if (el) el.textContent = new Date().getFullYear();
}

/* ─── PARALLAX LEVE NO HERO ──────────────────────────────────────────────── */
function initHeroParallax() {
  const bg = $('.hero__bg');
  if (!bg) return;
  if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;

  window.addEventListener('scroll', () => {
    const y = window.scrollY;
    if (y < window.innerHeight) {
      bg.style.transform = `translateY(${y * 0.3}px)`;
    }
  }, { passive: true });
}

/* ─── SMOOTH SCROLL (fallback para browsers sem scroll-behavior) ─────────── */
function initSmoothScroll() {
  $$('a[href^="#"]').forEach(link => {
    link.addEventListener('click', (e) => {
      const id = link.getAttribute('href');
      if (id === '#') { e.preventDefault(); window.scrollTo({ top: 0, behavior: 'smooth' }); return; }
      const target = document.querySelector(id);
      if (!target) return;
      e.preventDefault();
      const top = target.getBoundingClientRect().top + window.scrollY - 72;
      window.scrollTo({ top, behavior: 'smooth' });
    });
  });
}

/* ─── WHATSAPP ───────────────────────────────────────────────────────────── */
// Número configurado diretamente no HTML: 5571920029709

/* ─── INICIALIZAÇÃO ──────────────────────────────────────────────────────── */
document.addEventListener('DOMContentLoaded', () => {
  initPreloader();
  initCursor();
  initHeader();
  initMenu();
  initScrollSpy();
  initScrollReveal();
  initCounters();
  initPortfolio();
  initLightbox();
  initFab();
  initBackToTop();
  initForm();
  initFooterYear();
  initHeroParallax();
  initSmoothScroll();
});
