// =========================================================
// DATABASE MATERI — AI Assistant IPA
// Materi: Sistem Organisasi Kehidupan (Sel - Jaringan - Organ -
// Sistem Organ), Organel Sel, Difusi & Osmosis, dan studi kasus
// "Vegetable Fresh Box" (proyek STEM).
//
// Cara kerja: setiap topik punya daftar "keywords". script.js
// akan mencocokkan pertanyaan siswa dengan keyword ini
// (pencocokan sederhana, tidak butuh API/internet).
// Tinggal tambah objek baru di array KB kalau mau menambah materi.
// =========================================================

const KB = [
  {
    id: "sel",
    keywords: ["apa itu sel", "pengertian sel", "definisi sel", "sel adalah"],
    title: "Sel",
    answer:
      "Sel adalah unit struktural &amp; fungsional terkecil penyusun makhluk hidup. " +
      "Semua aktivitas kehidupan (bernapas, tumbuh, mencerna makanan) sebenarnya terjadi di dalam sel. " +
      "Sel dibagi menjadi dua jenis besar: <b>sel prokariotik</b> (belum punya membran inti, contoh: bakteri) " +
      "dan <b>sel eukariotik</b> (sudah punya membran inti, contoh: sel hewan &amp; sel tumbuhan)."
  },
  {
    id: "sel-hewan-tumbuhan",
    keywords: ["sel hewan", "sel tumbuhan", "perbedaan sel hewan dan tumbuhan", "beda sel hewan tumbuhan"],
    title: "Sel Hewan vs Sel Tumbuhan",
    answer:
      "Sel hewan dan sel tumbuhan sama-sama punya membran sel, sitoplasma, nukleus, &amp; mitokondria. Bedanya:<br><br>" +
      "🌱 <b>Sel tumbuhan</b> punya dinding sel (kaku, dari selulosa), kloroplas (untuk fotosintesis), &amp; vakuola besar.<br>" +
      "🐾 <b>Sel hewan</b> tidak punya dinding sel &amp; kloroplas, vakuolanya kecil atau tidak ada, tapi punya sentriol."
  },
  {
    id: "jaringan",
    keywords: ["apa itu jaringan", "pengertian jaringan", "jaringan adalah", "definisi jaringan"],
    title: "Jaringan",
    answer:
      "Jaringan adalah kumpulan sel-sel <b>sejenis</b> (bentuk &amp; fungsi sama) yang bekerja sama menjalankan tugas tertentu. " +
      "Contoh pada manusia: jaringan otot, jaringan saraf, jaringan epitel, jaringan ikat. " +
      "Contoh pada tumbuhan: jaringan epidermis, jaringan pengangkut (xilem &amp; floem)."
  },
  {
    id: "organ",
    keywords: ["apa itu organ", "pengertian organ", "organ adalah", "definisi organ"],
    title: "Organ",
    answer:
      "Organ adalah kumpulan <b>beberapa jenis jaringan</b> yang bekerja sama untuk menjalankan fungsi tertentu. " +
      "Contohnya: jantung (tersusun dari jaringan otot, saraf, &amp; ikat) berfungsi memompa darah; " +
      "daun (tersusun dari jaringan epidermis, mesofil, pengangkut) berfungsi sebagai tempat fotosintesis."
  },
  {
    id: "sistem-organ",
    keywords: ["apa itu sistem organ", "pengertian sistem organ", "sistem organ adalah"],
    title: "Sistem Organ",
    answer:
      "Sistem organ adalah kumpulan <b>beberapa organ</b> yang saling bekerja sama menjalankan fungsi kehidupan tertentu. " +
      "Contoh: sistem pencernaan (mulut, lambung, usus), sistem pernapasan (hidung, trakea, paru-paru), " +
      "sistem peredaran darah (jantung &amp; pembuluh darah)."
  },
  {
    id: "urutan-organisasi",
    keywords: ["urutan organisasi kehidupan", "urutan sel jaringan organ", "tingkatan organisasi kehidupan", "hierarki kehidupan"],
    title: "Urutan Tingkat Organisasi Kehidupan",
    answer:
      "Urutannya dari yang paling kecil ke paling besar:<br><br>" +
      "🔬 <b>Sel</b> → 🧵 <b>Jaringan</b> → ❤️ <b>Organ</b> → 🫁 <b>Sistem Organ</b> → 🧍 <b>Organisme (individu)</b><br><br>" +
      "Semakin ke kanan, tingkatannya semakin kompleks karena tersusun dari gabungan tingkatan sebelumnya."
  },
  {
    id: "nukleus",
    keywords: ["nukleus", "inti sel"],
    title: "Nukleus (Inti Sel)",
    answer:
      "Nukleus adalah organel yang berfungsi sebagai <b>pusat pengendali seluruh kegiatan sel</b> &amp; " +
      "tempat menyimpan materi genetik (DNA). Ibaratnya seperti CEO perusahaan: memberi 'perintah' kapan sel harus " +
      "membelah/berganti, sekaligus menyimpan seluruh 'data' penting sel."
  },
  {
    id: "mitokondria",
    keywords: ["mitokondria"],
    title: "Mitokondria",
    answer:
      "Mitokondria adalah 'pembangkit energi' sel. Fungsinya membakar sari-sari makanan (respirasi sel) untuk " +
      "menghasilkan energi dalam bentuk <b>ATP (Adenosin Tri Fosfat)</b>. Mirip pembangkit listrik yang mengubah " +
      "energi gerak menjadi energi listrik — mitokondria mengubah energi kimia dari makanan menjadi energi siap pakai."
  },
  {
    id: "lisosom",
    keywords: ["lisosom"],
    title: "Lisosom",
    answer:
      "Lisosom berperan seperti 'petugas kebersihan' sel. Organel ini membawa enzim khusus untuk mendaur ulang " +
      "bagian sel yang rusak &amp; menghancurkan bakteri/zat asing yang masuk ke dalam sel."
  },
  {
    id: "ribosom",
    keywords: ["ribosom"],
    title: "Ribosom",
    answer:
      "Ribosom adalah organel tempat berlangsungnya <b>sintesis protein</b>. Ada yang menempel di retikulum " +
      "endoplasma, ada juga yang melayang bebas di sitoplasma."
  },
  {
    id: "re",
    keywords: ["retikulum endoplasma", " re ", "re kasar", "re halus"],
    title: "Retikulum Endoplasma (RE)",
    answer:
      "Retikulum endoplasma adalah jaringan membran yang berfungsi sebagai 'jalur transportasi' zat di dalam sel. " +
      "<b>RE kasar</b> ditempeli ribosom &amp; berperan dalam sintesis protein, sedangkan <b>RE halus</b> berperan " +
      "dalam sintesis lemak &amp; menetralkan racun."
  },
  {
    id: "golgi",
    keywords: ["badan golgi", "aparatus golgi"],
    title: "Badan Golgi",
    answer:
      "Badan Golgi bertugas mengemas, memodifikasi, &amp; mendistribusikan protein/zat hasil produksi sel ke " +
      "bagian sel lain atau ke luar sel. Fungsinya mirip bagian 'pengemasan &amp; pengiriman paket' di sebuah pabrik."
  },
  {
    id: "vakuola",
    keywords: ["vakuola"],
    title: "Vakuola",
    answer:
      "Vakuola adalah kantung penyimpanan di dalam sel. Pada sel tumbuhan, vakuola berukuran besar &amp; berisi cairan " +
      "yang menciptakan <b>tekanan turgor</b> — tekanan inilah yang membuat sel (dan daun) menjadi kaku &amp; segar."
  },
  {
    id: "kloroplas",
    keywords: ["kloroplas"],
    title: "Kloroplas",
    answer:
      "Kloroplas adalah organel khusus pada sel tumbuhan yang mengandung klorofil (zat hijau daun). Fungsinya sebagai " +
      "tempat berlangsungnya <b>fotosintesis</b>, yaitu mengubah cahaya matahari, air, &amp; CO₂ menjadi makanan (glukosa) &amp; oksigen."
  },
  {
    id: "dinding-sel",
    keywords: ["dinding sel"],
    title: "Dinding Sel",
    answer:
      "Dinding sel adalah lapisan kaku dari selulosa yang membungkus bagian luar membran sel tumbuhan. " +
      "Fungsinya memberi bentuk tetap serta perlindungan tambahan bagi sel. Sel hewan tidak memiliki dinding sel."
  },
  {
    id: "membran-sel",
    keywords: ["membran sel", "membran plasma"],
    title: "Membran Sel",
    answer:
      "Membran sel adalah lapisan pembungkus sel yang bersifat <b>semipermeabel</b> (selektif permeabel), artinya " +
      "hanya bisa dilewati zat-zat tertentu. Membran ini yang mengatur zat apa saja yang boleh masuk atau keluar dari sel, " +
      "termasuk saat proses difusi &amp; osmosis berlangsung."
  },
  {
    id: "difusi",
    keywords: ["apa itu difusi", "pengertian difusi", "difusi adalah"],
    title: "Difusi",
    answer:
      "Difusi adalah perpindahan partikel/molekul zat (bisa zat terlarut, bukan hanya air) dari daerah " +
      "berkonsentrasi <b>tinggi</b> ke daerah berkonsentrasi <b>rendah</b> secara spontan, sampai konsentrasinya merata. " +
      "Contoh sederhana: aroma parfum yang menyebar memenuhi ruangan."
  },
  {
    id: "osmosis",
    keywords: ["apa itu osmosis", "pengertian osmosis", "osmosis adalah", "osmosis sel"],
    title: "Osmosis",
    answer:
      "Osmosis adalah perpindahan <b>molekul air</b> melalui membran semipermeabel, dari daerah dengan konsentrasi " +
      "zat terlarut <b>rendah</b> menuju daerah dengan konsentrasi zat terlarut <b>tinggi</b>. " +
      "Contoh: sayuran tumbuh atas jutaan sel yang punya membran semipermeabel — air bisa keluar/masuk sel lewat proses ini, " +
      "dan inilah yang menentukan sayuran tetap segar atau menjadi layu."
  },
  {
    id: "difusi-vs-osmosis",
    keywords: ["beda difusi dan osmosis", "perbedaan difusi osmosis", "difusi osmosis bedanya"],
    title: "Perbedaan Difusi &amp; Osmosis",
    answer:
      "Persamaannya: keduanya perpindahan zat dari konsentrasi tinggi ke rendah tanpa energi tambahan.<br><br>" +
      "Bedanya: <b>Difusi</b> berlaku untuk zat terlarut apa saja (gas, cairan, dsb) dan tidak selalu melalui membran. " +
      "<b>Osmosis</b> khusus untuk perpindahan <b>air</b> &amp; harus melalui <b>membran semipermeabel</b>."
  },
  {
    id: "turgor",
    keywords: ["tekanan turgor", "turgor"],
    title: "Tekanan Turgor",
    answer:
      "Tekanan turgor adalah tekanan air di dalam vakuola terhadap dinding sel.<br><br>" +
      "• Jika sel <b>cukup air</b> → vakuola membesar → tekanan turgor tinggi → daun tegak, renyah, &amp; segar.<br>" +
      "• Jika sel <b>kehilangan air</b> (misalnya udara kulkas kering atau kena larutan garam pekat) → air keluar dari sel " +
      "lewat osmosis → vakuola mengecil → tekanan turgor turun → daun menjadi layu."
  },
  {
    id: "sayur-layu-kulkas",
    keywords: [
      "kenapa sayur layu", "mengapa sayuran layu", "sayur layu di kulkas", "sayuran layu dikulkas",
      "kenapa sayuran cepat layu", "sayur cepat layu"
    ],
    title: "Kenapa Sayuran Bisa Layu di Kulkas?",
    answer:
      "Udara di dalam kulkas cenderung kering &amp; dingin. Kondisi ini membuat air di dalam sel sayuran keluar melalui " +
      "proses <b>osmosis</b>, sehingga vakuola mengecil &amp; <b>tekanan turgor menurun</b> — akibatnya daun menjadi lemas dan layu. " +
      "Sayuran juga tetap melakukan respirasi &amp; transpirasi setelah dipanen, sehingga terus kehilangan air selama disimpan."
  },
  {
    id: "garam-osmosis",
    keywords: ["garam membuat sayur layu", "larutan garam osmosis", "kenapa direndam garam layu", "acar mentimun"],
    title: "Kenapa Larutan Garam Bisa Membuat Sayuran Layu?",
    answer:
      "Larutan garam punya konsentrasi zat terlarut yang jauh lebih tinggi daripada di dalam sel sayuran. Akibatnya, " +
      "air di dalam sel akan keluar menuju larutan garam melalui <b>osmosis</b> (dari konsentrasi rendah ke konsentrasi tinggi). " +
      "Sel kehilangan air → tekanan turgor turun → tekstur sayuran jadi lunak &amp; layu. Ini juga prinsip yang dipakai " +
      "saat membuat acar mentimun: garam menarik keluar cairan dari irisan mentimun."
  },
  {
    id: "vegetable-fresh-box",
    keywords: ["vegetable fresh box", "proyek sayuran", "wadah sayuran", "proyek stem", "vfb"],
    title: "Proyek Vegetable Fresh Box",
    answer:
      "Vegetable Fresh Box adalah proyek STEM kelas kita: merancang wadah penyimpan sayuran (mirip food container) yang " +
      "menjaga kelembapan agar sel sayuran tidak banyak kehilangan air lewat osmosis, sehingga <b>tekanan turgor</b> tetap terjaga " +
      "&amp; sayuran tetap segar lebih lama. Wadah juga perlu ventilasi secukupnya supaya tidak lembap berlebihan &amp; memicu jamur."
  },
  {
    id: "tisu-sayur",
    keywords: ["tisu sayuran", "kenapa pakai tisu", "fungsi tisu di kulkas"],
    title: "Kenapa Sayuran Suka Dibungkus Tisu?",
    answer:
      "Tisu berfungsi menyerap kelembapan/embun berlebih di dalam kemasan. Kelembapan yang lebih terkontrol dapat " +
      "mengurangi kondisi yang mendukung tumbuhnya mikroorganisme penyebab pembusukan, sehingga sayuran cenderung bertahan " +
      "lebih lama. Namun, semakin banyak tisu dipakai, semakin banyak juga sampah residu yang dihasilkan — karena itu " +
      "proyek Vegetable Fresh Box mencoba mencari solusi pengganti tisu yang lebih ramah lingkungan."
  },
  {
    id: "quiz-organel",
    keywords: ["kuis organel", "tebak organel", "review organel"],
    title: "Yuk Review Organel Sel!",
    answer:
      "Coba jawab teka-teki ini ya:<br><br>" +
      "1️⃣ Ibarat CEO perusahaan yang memberi perintah &amp; menyimpan data (DNA) → organel apa? <i>(ketik jawabanmu, lalu tanya 'nukleus' untuk cek)</i><br>" +
      "2️⃣ Petugas kebersihan sel yang mendaur ulang sel rusak &amp; melawan bakteri jahat → organel apa? <i>(cek dengan tanya 'lisosom')</i><br>" +
      "3️⃣ Pembangkit energi sel yang mengubah sari makanan jadi ATP → organel apa? <i>(cek dengan tanya 'mitokondria')</i>"
  },
  {
    id: "terimakasih",
    keywords: ["terima kasih", "makasih", "thanks", "thankyou"],
    title: null,
    answer: "Sama-sama! Semangat belajar IPA-nya 🌱 Kalau ada materi lain yang mau ditanyakan, tinggal ketik saja ya."
  },
  {
    id: "sapaan",
    keywords: ["halo", "hai", "hi", "hello", "assalamualaikum", "pagi", "siang", "malam"],
    title: null,
    answer:
      "Halo juga! 👋 Aku siap bantu kamu belajar materi <b>Sistem Organisasi Kehidupan</b>. " +
      "Coba tanya salah satu topik di bawah kotak chat ini ya!"
  }
];

// Daftar chip pertanyaan cepat yang tampil di bawah chatbox
const QUICK_SUGGESTIONS = [
  "Apa itu sel?",
  "Urutan organisasi kehidupan",
  "Apa fungsi mitokondria?",
  "Apa itu osmosis?",
  "Kenapa sayuran layu di kulkas?",
  "Apa itu tekanan turgor?"
];

// Pesan sambutan pertama saat chatbot dibuka
const WELCOME_MESSAGE =
  "Halo 👋 Saya <b>AI Assistant IPA</b>.<br><br>" +
  "Silakan tanyakan materi <b>Sistem Organisasi Kehidupan</b>, contohnya:<br>" +
  "• Apa itu Sel?<br>" +
  "• Apa itu Osmosis?<br>" +
  "• Apa fungsi Mitokondria?<br>" +
  "• Kenapa sayuran bisa layu di kulkas?";

// Pesan default kalau pertanyaan tidak ditemukan di database
const FALLBACK_MESSAGE =
  "Hmm, aku belum punya jawaban untuk pertanyaan itu 🤔<br><br>" +
  "Coba tanyakan dengan kata kunci lain, misalnya: <i>sel, jaringan, organ, sistem organ, nukleus, " +
  "mitokondria, lisosom, difusi, osmosis, tekanan turgor,</i> atau <i>vegetable fresh box</i>.";
