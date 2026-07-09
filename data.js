// =========================================================
// DATABASE MATERI — AI Assistant IPA
// Materi: Sistem Organisasi Kehidupan (Sel - Jaringan - Organ -
// Sistem Organ), Organel Sel, Difusi & Osmosis, tekanan turgor,
// dan studi kasus proyek STEM "Vegetable Fresh Box".
//
// Cara kerja: setiap topik punya daftar "keywords". script.js
// akan mencocokkan pertanyaan siswa dengan keyword ini
// (pencocokan sederhana, tidak butuh API/internet).
// Tinggal tambah objek baru di array KB kalau mau menambah materi.
// =========================================================

const KB = [

  // ================= SEL =================
  {
    id: "sel",
    keywords: ["apa itu sel", "pengertian sel", "definisi sel", "sel adalah"],
    title: "Sel",
    answer:
      "Sel adalah unit terkecil penyusun makhluk hidup, baik dari segi <b>struktur</b> (bentuk/susunan) maupun " +
      "<b>fungsi</b> (kerja). Semua aktivitas hidup — bernapas, tumbuh, mencerna makanan — sebenarnya terjadi di dalam sel.<br><br>" +
      "🧱 Bayangkan sel seperti <b>satu bata</b> pada bangunan rumah. Satu bata saja belum jadi rumah, tapi rumah tidak akan " +
      "berdiri tanpa kumpulan bata. Begitu juga tubuh kita: tersusun dari milyaran sel yang bekerja sama.<br><br>" +
      "Ada 2 jenis sel: <b>sel prokariotik</b> (belum punya membran inti, contoh: bakteri) dan " +
      "<b>sel eukariotik</b> (sudah punya membran inti, contoh: sel hewan &amp; sel tumbuhan)."
  },
  {
    id: "sejarah-sel",
    keywords: ["sejarah sel", "penemu sel", "siapa yang menemukan sel", "teori sel", "robert hooke", "anton van leeuwenhoek", "robert brown", "schleiden schwann"],
    title: "Sejarah Penemuan Sel",
    answer:
      "Beberapa tokoh penting di balik konsep sel:<br><br>" +
      "🔬 <b>Robert Hooke (1665)</b> — orang pertama yang memakai istilah 'sel'. Ia mengamati gabus (kulit kayu mati) " +
      "lewat mikroskop sederhana &amp; melihat ruang-ruang kecil menyerupai kamar/sel penjara.<br>" +
      "🦠 <b>Anton van Leeuwenhoek</b> — orang pertama yang berhasil melihat &amp; mendeskripsikan sel hidup " +
      "(mikroorganisme) menggunakan mikroskop buatannya sendiri.<br>" +
      "🧬 <b>Robert Brown</b> — menemukan keberadaan <b>nukleus (inti sel)</b>.<br>" +
      "📖 <b>Schleiden &amp; Schwann (1855)</b> — mengusulkan <b>Teori Sel</b>, yang menjelaskan bahwa sel adalah " +
      "unit dasar penyusun seluruh makhluk hidup."
  },
  {
    id: "sel-prokariotik",
    keywords: ["sel prokariotik", "prokariotik"],
    title: "Sel Prokariotik",
    answer:
      "Sel prokariotik adalah tipe sel paling sederhana/primitif secara struktur. Cirinya:<br><br>" +
      "• Hanya dikelilingi <b>satu membran tunggal</b>, tanpa inti sel yang terbungkus membran (materi genetiknya " +
      "'bercampur' bebas di dalam sel, tidak dikemas rapi dalam nukleus)<br>" +
      "• Tidak punya organel bermembran seperti mitokondria &amp; kloroplas<br>" +
      "• Ukurannya sangat kecil, sekitar 1–10 mikrometer<br>" +
      "• Contoh: bakteri, cyanobacteria (alga hijau-biru), &amp; Mycoplasma<br><br>" +
      "Bakteri sendiri berkembang biak dengan cara membelah diri, dan sebagian bersifat patogen (bisa menyebabkan penyakit) pada manusia."
  },
  {
    id: "sel-eukariotik",
    keywords: ["sel eukariotik", "eukariotik"],
    title: "Sel Eukariotik",
    answer:
      "Sel eukariotik punya struktur lebih kompleks dibanding sel prokariotik. Cirinya:<br><br>" +
      "• Punya organel-organel yang terbungkus membran sendiri-sendiri (nukleus, mitokondria, dll)<br>" +
      "• Punya membran sel (plasma) yang membungkus sitoplasma, plus membran internal yang membentuk 'ruangan-ruangan' " +
      "khusus di dalam sel<br>" +
      "• Makhluk hidup dengan sel eukariotik dibagi menjadi 4 kingdom: <b>Protista, Fungi (jamur), Plantae (tumbuhan), " +
      "&amp; Animalia (hewan)</b><br><br>" +
      "Ingat, sel eukariotik tidaklah semuanya identik — itulah kenapa sel tumbuhan &amp; sel hewan bisa berbeda " +
      "(lihat topik 'sel hewan vs sel tumbuhan')."
  },
  {
    id: "sel-hewan-tumbuhan",
    keywords: ["sel hewan", "sel tumbuhan", "perbedaan sel hewan dan tumbuhan", "beda sel hewan tumbuhan"],
    title: "Sel Hewan vs Sel Tumbuhan",
    answer:
      "Sel hewan &amp; sel tumbuhan sama-sama punya membran sel, sitoplasma, nukleus, &amp; mitokondria. Bedanya:<br><br>" +
      "🌱 <b>Sel tumbuhan</b> punya:<br>" +
      "• Dinding sel (kaku, dari selulosa)<br>" +
      "• Kloroplas (untuk fotosintesis)<br>" +
      "• Vakuola berukuran besar<br><br>" +
      "🐾 <b>Sel hewan</b>:<br>" +
      "• Tidak punya dinding sel &amp; kloroplas<br>" +
      "• Vakuola kecil atau tidak ada<br>" +
      "• Punya sentriol (untuk pembelahan sel)<br><br>" +
      "Tips gampang mengingat: sel tumbuhan itu 'kaku &amp; hijau' (ada dinding sel &amp; kloroplas), " +
      "sel hewan itu 'lentur &amp; bebas bentuk'."
  },
  {
    id: "sitoplasma",
    keywords: ["sitoplasma"],
    title: "Sitoplasma",
    answer:
      "Sitoplasma adalah cairan kental di dalam sel (di luar nukleus) tempat semua organel sel 'mengapung' &amp; bekerja. " +
      "Bayangkan sitoplasma seperti <b>kolam/ruangan besar</b> di dalam sel, tempat nukleus, mitokondria, ribosom, dan organel " +
      "lain menjalankan tugasnya masing-masing."
  },
  {
    id: "tabel-organel",
    keywords: ["ringkasan organel", "tabel organel", "daftar organel sel", "semua organel sel"],
    title: "Ringkasan Fungsi Organel Sel",
    answer:
      "Ini rangkuman cepatnya, biar gampang diingat:<br><br>" +
      "🧠 <b>Nukleus</b> — pusat kendali &amp; penyimpan DNA<br>" +
      "⚡ <b>Mitokondria</b> — pembangkit energi (ATP)<br>" +
      "🧹 <b>Lisosom</b> — petugas kebersihan sel<br>" +
      "🏭 <b>Ribosom</b> — pembuat protein<br>" +
      "🚚 <b>Retikulum Endoplasma</b> — jalur transportasi zat<br>" +
      "📦 <b>Badan Golgi</b> — pengemas &amp; pengirim zat<br>" +
      "💧 <b>Vakuola</b> — kantung penyimpan cairan (penentu tekanan turgor)<br>" +
      "🌿 <b>Kloroplas</b> — tempat fotosintesis (khusus tumbuhan)<br>" +
      "🧱 <b>Dinding sel</b> — pelindung kaku (khusus tumbuhan)<br>" +
      "🛡️ <b>Membran sel</b> — pintu gerbang keluar-masuk zat<br><br>" +
      "Coba tanyakan salah satu nama organel di atas kalau mau penjelasan lebih lengkap ya!"
  },
  {
    id: "nukleus",
    keywords: ["nukleus", "inti sel"],
    title: "Nukleus (Inti Sel)",
    answer:
      "Nukleus adalah <b>pusat pengendali seluruh kegiatan sel</b> &amp; tempat menyimpan materi genetik (DNA).<br><br>" +
      "🏢 Analogi: nukleus itu seperti <b>CEO/direktur sebuah perusahaan</b>. Dia yang memberi 'perintah' kapan sel kulit, " +
      "sel usus, atau sel lain harus membelah/berganti baru, sekaligus menyimpan seluruh 'data penting' (DNA) perusahaan.<br><br>" +
      "📌 Fakta tambahan: DNA di dalam nukleus punya 2 bentuk berbeda tergantung situasi —<br>" +
      "• Saat sel membelah: DNA menggulung rapat &amp; memadat menjadi <b>kromosom</b><br>" +
      "• Saat sel tidak sedang membelah: DNA menyebar longgar &amp; disebut <b>kromatin</b>"
  },
  {
    id: "mitokondria",
    keywords: ["mitokondria"],
    title: "Mitokondria",
    answer:
      "Mitokondria adalah 'pembangkit energi' sel. Fungsinya membakar sari-sari makanan lewat proses respirasi sel, lalu " +
      "menghasilkan energi dalam bentuk <b>ATP (Adenosin Tri Fosfat)</b>.<br><br>" +
      "💡 Analogi: mitokondria itu seperti <b>pembangkit listrik tenaga air (PLTA)</b> — PLTA mengubah energi gerak air " +
      "menjadi energi listrik, sedangkan mitokondria mengubah energi kimia dari makanan menjadi energi (ATP) yang siap dipakai sel.<br><br>" +
      "🔎 Struktur mitokondria terdiri dari 2 lapis membran. Membran dalamnya berlipat-lipat membentuk struktur yang " +
      "disebut <b>krista</b> (memperluas permukaan supaya proses respirasi lebih maksimal), sementara ruang cairan di " +
      "bagian paling dalam disebut <b>matriks</b>, yang bahkan menyimpan DNA-nya sendiri."
  },
  {
    id: "lisosom",
    keywords: ["lisosom"],
    title: "Lisosom",
    answer:
      "Lisosom berperan seperti <b>petugas kebersihan sel 🧹</b>. Organel ini membawa enzim khusus untuk:<br>" +
      "• Mendaur ulang bagian sel yang sudah rusak<br>" +
      "• Menghancurkan bakteri/zat asing yang masuk ke dalam sel"
  },
  {
    id: "ribosom",
    keywords: ["ribosom"],
    title: "Ribosom",
    answer:
      "Ribosom adalah organel tempat berlangsungnya <b>sintesis (pembuatan) protein</b>. Ada yang menempel pada " +
      "retikulum endoplasma (disebut RE kasar), ada juga yang melayang bebas di sitoplasma.<br><br>" +
      "🔎 Ribosom sendiri dibentuk di dalam nukleolus (bagian dari nukleus), tersusun dari RNA ribosom (rRNA) &amp; " +
      "protein, serta terdiri dari 2 komponen: <b>subunit besar</b> &amp; <b>subunit kecil</b> yang menyatu saat bekerja."
  },
  {
    id: "re",
    keywords: ["retikulum endoplasma", "re kasar", "re halus"],
    title: "Retikulum Endoplasma (RE)",
    answer:
      "Retikulum endoplasma adalah jaringan membran berliku yang berfungsi sebagai <b>'jalan tol' transportasi zat</b> " +
      "di dalam sel.<br><br>" +
      "• <b>RE kasar</b> — ditempeli ribosom, berperan dalam sintesis protein untuk diekspor keluar sel<br>" +
      "• <b>RE halus</b> — tidak ditempeli ribosom, berperan dalam sintesis lemak (termasuk fosfolipid membran sel) " +
      "&amp; menetralkan racun/obat yang larut dalam lemak<br><br>" +
      "🔗 RE bekerja satu paket dengan Badan Golgi, membentuk apa yang disebut <b>sistem endomembran</b> — jalur " +
      "lengkap mulai dari produksi sampai pengiriman zat keluar sel."
  },
  {
    id: "golgi",
    keywords: ["badan golgi", "aparatus golgi"],
    title: "Badan Golgi",
    answer:
      "Badan Golgi bertugas mengemas, memodifikasi, &amp; mendistribusikan protein/zat hasil produksi sel ke bagian sel " +
      "lain atau ke luar sel.<br><br>" +
      "📦 Analogi: mirip bagian <b>packing &amp; pengiriman paket</b> di sebuah gudang online shop — barang (protein) " +
      "dikemas rapi dulu sebelum dikirim ke tujuan.<br><br>" +
      "🔎 Prosesnya: protein dari RE kasar masuk ke sisi 'penerimaan' badan Golgi (sisi cis), dimodifikasi di dalamnya, " +
      "lalu keluar dari sisi 'pengiriman' (sisi trans) dalam bentuk vesikel (gelembung kecil) menuju membran sel. " +
      "Badan Golgi juga berperan membuat lisosom &amp; bahan penyusun dinding sel pada tumbuhan."
  },
  {
    id: "vakuola",
    keywords: ["vakuola"],
    title: "Vakuola",
    answer:
      "Vakuola adalah kantung penyimpanan cairan di dalam sel yang bisa menyimpan enzim serta molekul organik/anorganik " +
      "lain. Pada sel tumbuhan, vakuola berukuran besar &amp; sangat penting karena tekanan cairannya (disebut " +
      "<b>tekanan turgor</b>) yang membuat sel — dan daun — jadi kaku, tegak, dan segar.<br><br>" +
      "💡 Menariknya, vakuola juga bisa berfungsi mirip lisosom, yaitu membantu 'mencerna' sisa-sisa zat yang tidak diperlukan sel."
  },
  {
    id: "sitoskeleton",
    keywords: ["sitoskeleton", "rangka sel"],
    title: "Sitoskeleton",
    answer:
      "Sitoskeleton adalah 'rangka' internal sel yang tersusun dari jaringan protein, terdiri dari 3 jenis: " +
      "<b>mikrotubulus</b> (dari protein tubulin), <b>mikrofilamen</b> (dari protein aktin), &amp; <b>filamen intermediet</b>.<br><br>" +
      "🦴 Analogi: sitoskeleton ibarat <b>rangka &amp; otot tubuh kita</b> dalam skala sel — memberi bentuk &amp; " +
      "kekuatan struktural pada sel, memungkinkan sel bergerak, sekaligus membantu mengangkut organel/vesikel dari satu " +
      "tempat ke tempat lain di dalam sel."
  },
  {
    id: "sentriol",
    keywords: ["sentriol", "sentrosom"],
    title: "Sentrosom &amp; Sentriol",
    answer:
      "Sentriol adalah sepasang struktur kecil berbentuk silinder yang tersusun dari mikrotubulus (susunannya berupa " +
      "9 'kembar tiga' membentuk silinder). Sentriol berperan penting saat sel membelah diri.<br><br>" +
      "⚠️ Organel ini <b>hanya ditemukan pada sel hewan</b> — hampir tidak ada pada sel tumbuhan. Ini salah satu ciri " +
      "pembeda sel hewan &amp; sel tumbuhan selain dinding sel &amp; kloroplas."
  },
  {
    id: "kloroplas",
    keywords: ["kloroplas"],
    title: "Kloroplas",
    answer:
      "Kloroplas adalah organel khusus pada sel tumbuhan yang mengandung klorofil (zat hijau daun). Fungsinya sebagai " +
      "tempat berlangsungnya <b>fotosintesis</b>: mengubah cahaya matahari + air + karbon dioksida (CO₂) menjadi " +
      "makanan (glukosa) &amp; oksigen (O₂)."
  },
  {
    id: "dinding-sel",
    keywords: ["dinding sel"],
    title: "Dinding Sel",
    answer:
      "Dinding sel adalah lapisan pelindung terluar sel tumbuhan, bersifat semi-kaku &amp; tersusun dari selulosa yang " +
      "diproduksi oleh sel itu sendiri. Sel hewan <b>tidak</b> memiliki dinding sel — makanya bentuk sel hewan lebih " +
      "fleksibel/tidak kaku.<br><br>" +
      "🛡️ Fungsi lengkap dinding sel:<br>" +
      "• Memberi kekuatan &amp; bentuk tetap pada sel<br>" +
      "• Jadi penghalang terhadap virus, bakteri, &amp; jamur patogen<br>" +
      "• Membantu transportasi zat masuk-keluar sel<br>" +
      "• Menahan <b>tekanan turgor</b> yang timbul akibat tekanan osmotik tinggi di dalam sel"
  },
  {
    id: "membran-sel",
    keywords: ["membran sel", "membran plasma"],
    title: "Membran Sel",
    answer:
      "Membran sel adalah lapisan pembungkus sel yang tipis, elastis, &amp; bersifat <b>semipermeabel</b> (selektif " +
      "permeabel) — artinya hanya bisa dilewati zat-zat tertentu saja, tidak semua zat bebas keluar-masuk.<br><br>" +
      "🚪 Analogi: membran sel itu seperti <b>satpam pintu gerbang</b> yang menyeleksi siapa boleh masuk/keluar. " +
      "Sifat inilah yang mendasari terjadinya difusi &amp; osmosis.<br><br>" +
      "🔬 Secara struktur, membran sel tersusun dari 2 lapis (bilayer) molekul fosfolipid, dengan protein, karbohidrat, " +
      "&amp; kolesterol yang tersebar di dalamnya — ini disebut <b>model mosaik fluida</b>."
  },
  {
    id: "transpor-aktif-pasif",
    keywords: ["transpor aktif", "transpor pasif", "transport aktif", "transport pasif", "pompa natrium kalium", "pompa na k"],
    title: "Transpor Aktif &amp; Transpor Pasif",
    answer:
      "Ini adalah 2 cara molekul melintasi membran sel:<br><br>" +
      "🚶 <b>Transpor pasif</b> — molekul bergerak bebas melintasi membran <b>tanpa</b> perlu energi tambahan, mengikuti " +
      "arah dari konsentrasi tinggi ke rendah. Difusi &amp; osmosis termasuk jenis ini.<br><br>" +
      "🏋️ <b>Transpor aktif</b> — molekul dipindahkan melawan arah alaminya (dari konsentrasi rendah ke tinggi), " +
      "sehingga <b>butuh energi (ATP)</b>. Contohnya adalah pompa Na⁺/K⁺ (natrium-kalium) yang mengatur keluar-masuknya " +
      "ion natrium &amp; kalium pada sel, penting untuk kerja sel saraf &amp; otot."
  },

  // ================= JARINGAN, ORGAN, SISTEM ORGAN =================
  {
    id: "jaringan",
    keywords: ["apa itu jaringan", "pengertian jaringan", "jaringan adalah", "definisi jaringan"],
    title: "Jaringan",
    answer:
      "Jaringan adalah kumpulan sel-sel <b>sejenis</b> (bentuk &amp; fungsi sama) yang bekerja sama menjalankan tugas tertentu.<br><br>" +
      "Contoh pada manusia: jaringan otot, jaringan saraf, jaringan epitel, jaringan ikat.<br>" +
      "Contoh pada tumbuhan: jaringan epidermis, jaringan pengangkut (xilem &amp; floem)."
  },
  {
    id: "jaringan-manusia",
    keywords: ["jaringan pada manusia", "jaringan epitel", "jaringan otot", "jaringan saraf", "jaringan ikat", "macam jaringan manusia"],
    title: "Jenis-jenis Jaringan pada Manusia",
    answer:
      "Ada 4 jaringan dasar pada tubuh manusia:<br><br>" +
      "🧴 <b>Jaringan epitel</b> — melapisi permukaan tubuh &amp; organ (contoh: kulit)<br>" +
      "💪 <b>Jaringan otot</b> — untuk gerakan tubuh (otot jantung, otot polos, otot rangka)<br>" +
      "⚡ <b>Jaringan saraf</b> — menghantarkan rangsangan/impuls ke seluruh tubuh<br>" +
      "🔗 <b>Jaringan ikat</b> — menghubungkan &amp; menopang jaringan lain (contoh: tulang, darah, lemak)"
  },
  {
    id: "jaringan-tumbuhan",
    keywords: ["jaringan pada tumbuhan", "jaringan epidermis", "jaringan xilem", "jaringan floem", "jaringan meristem", "macam jaringan tumbuhan"],
    title: "Jenis-jenis Jaringan pada Tumbuhan",
    answer:
      "Beberapa jaringan penting pada tumbuhan:<br><br>" +
      "🛡️ <b>Epidermis</b> — lapisan pelindung terluar tumbuhan<br>" +
      "🚰 <b>Xilem</b> — mengangkut air &amp; mineral dari akar ke daun<br>" +
      "🍯 <b>Floem</b> — mengangkut hasil fotosintesis (makanan) dari daun ke seluruh tubuh tumbuhan<br>" +
      "🌱 <b>Meristem</b> — jaringan muda yang terus membelah, menyebabkan tumbuhan tumbuh memanjang/membesar"
  },
  {
    id: "organ",
    keywords: ["apa itu organ", "pengertian organ", "organ adalah", "definisi organ"],
    title: "Organ",
    answer:
      "Organ adalah kumpulan <b>beberapa jenis jaringan</b> yang bekerja sama menjalankan fungsi tertentu.<br><br>" +
      "Contoh: <b>jantung</b> (tersusun dari jaringan otot, saraf, &amp; ikat) berfungsi memompa darah; " +
      "<b>daun</b> (tersusun dari jaringan epidermis, mesofil, pengangkut) berfungsi sebagai tempat fotosintesis."
  },
  {
    id: "organ-manusia",
    keywords: ["contoh organ manusia", "organ pada manusia", "organ tubuh manusia"],
    title: "Contoh Organ pada Manusia",
    answer:
      "Beberapa organ penting &amp; fungsinya:<br><br>" +
      "❤️ <b>Jantung</b> — memompa darah ke seluruh tubuh<br>" +
      "🫁 <b>Paru-paru</b> — tempat pertukaran oksigen &amp; karbon dioksida<br>" +
      "🍜 <b>Lambung</b> — mencerna makanan secara mekanik &amp; kimiawi<br>" +
      "🧠 <b>Otak</b> — pusat pengendali seluruh tubuh<br>" +
      "🫘 <b>Ginjal</b> — menyaring darah &amp; membentuk urine"
  },
  {
    id: "organ-tumbuhan",
    keywords: ["organ tumbuhan", "organ pada tumbuhan"],
    title: "Contoh Organ pada Tumbuhan",
    answer:
      "Organ utama pada tumbuhan:<br><br>" +
      "🌱 <b>Akar</b> — menyerap air &amp; mineral, menopang tumbuhan<br>" +
      "🌿 <b>Batang</b> — menyalurkan zat &amp; menopang tubuh tumbuhan<br>" +
      "🍃 <b>Daun</b> — tempat fotosintesis<br>" +
      "🌸 <b>Bunga</b> — organ perkembangbiakan (reproduksi) tumbuhan"
  },
  {
    id: "sistem-organ",
    keywords: ["apa itu sistem organ", "pengertian sistem organ", "sistem organ adalah", "macam sistem organ", "sistem organ manusia"],
    title: "Sistem Organ",
    answer:
      "Sistem organ adalah kumpulan <b>beberapa organ</b> yang saling bergantung &amp; berinteraksi menjalankan fungsi " +
      "tubuh yang lebih besar &amp; kompleks.<br><br>" +
      "Sistem organ pada manusia meliputi:<br>" +
      "🍜 Sistem pencernaan • 🫁 Sistem pernapasan • ❤️ Sistem peredaran darah • ⚡ Sistem saraf • 🫘 Sistem ekskresi • " +
      "🦴 Sistem rangka &amp; otot (gerak) • 🧪 Sistem endokrin (hormon) • 👶 Sistem reproduksi • 🧴 Sistem integumen " +
      "(kulit &amp; pelengkapnya) • 🛡️ Sistem imun (kekebalan tubuh)<br><br>" +
      "Coba tanya salah satu nama sistem organ untuk penjelasan lebih lengkap!"
  },
  {
    id: "sistem-pencernaan",
    keywords: ["sistem pencernaan"],
    title: "Sistem Pencernaan",
    answer:
      "Sistem pencernaan berfungsi mengolah makanan menjadi sari-sari makanan yang bisa diserap tubuh. " +
      "Organ penyusunnya: mulut → kerongkongan → lambung → usus halus → usus besar → anus."
  },
  {
    id: "sistem-pernapasan",
    keywords: ["sistem pernapasan", "sistem respirasi"],
    title: "Sistem Pernapasan",
    answer:
      "Sistem pernapasan berfungsi memasukkan oksigen &amp; mengeluarkan karbon dioksida dari tubuh. " +
      "Organ penyusunnya: hidung → tenggorokan (trakea) → bronkus → paru-paru."
  },
  {
    id: "sistem-peredaran-darah",
    keywords: ["sistem peredaran darah", "sistem sirkulasi"],
    title: "Sistem Peredaran Darah",
    answer:
      "Sistem peredaran darah berfungsi mengalirkan darah (oksigen, sari makanan, &amp; zat sisa) ke seluruh tubuh. " +
      "Organ utamanya: jantung &amp; pembuluh darah (arteri, vena, kapiler)."
  },
  {
    id: "sistem-ekskresi",
    keywords: ["sistem ekskresi"],
    title: "Sistem Ekskresi",
    answer:
      "Sistem ekskresi berfungsi membuang zat sisa metabolisme tubuh. Organ penyusunnya: ginjal (urine), " +
      "kulit (keringat), paru-paru (CO₂), &amp; hati (empedu)."
  },
  {
    id: "sistem-saraf",
    keywords: ["sistem saraf"],
    title: "Sistem Saraf",
    answer:
      "Sistem saraf berfungsi menerima &amp; menghantarkan rangsangan (impuls) sehingga tubuh bisa bereaksi terhadap " +
      "lingkungan. Organ utamanya: otak, sumsum tulang belakang, &amp; jaringan saraf di seluruh tubuh."
  },
  {
    id: "sistem-gerak",
    keywords: ["sistem gerak", "sistem otot rangka"],
    title: "Sistem Gerak",
    answer:
      "Sistem gerak terdiri dari tulang (rangka) &amp; otot yang bekerja sama supaya tubuh bisa bergerak. Tulang berperan " +
      "sebagai alat gerak pasif, otot sebagai alat gerak aktif (otot yang berkontraksi menggerakkan tulang)."
  },
  {
    id: "sistem-endokrin",
    keywords: ["sistem endokrin", "sistem hormon"],
    title: "Sistem Endokrin",
    answer:
      "Sistem endokrin berfungsi menghasilkan &amp; mengedarkan hormon yang mengatur berbagai proses tubuh (pertumbuhan, " +
      "metabolisme, suasana hati, dll). Organ penyusunnya antara lain kelenjar tiroid, kelenjar pituitari (hipofisis), " +
      "&amp; pankreas."
  },
  {
    id: "sistem-reproduksi",
    keywords: ["sistem reproduksi"],
    title: "Sistem Reproduksi",
    answer:
      "Sistem reproduksi berfungsi dalam proses perkembangbiakan &amp; menghasilkan keturunan. Pada tumbuhan, organ " +
      "reproduksinya adalah bunga; pada manusia, organ reproduksinya berbeda antara laki-laki &amp; perempuan."
  },
  {
    id: "sistem-integumen",
    keywords: ["sistem integumen"],
    title: "Sistem Integumen",
    answer:
      "Sistem integumen berfungsi melindungi tubuh dari luar. Organ utamanya adalah <b>kulit</b>, beserta pelengkapnya " +
      "seperti rambut &amp; kuku. Sistem ini juga berperan dalam mengatur suhu tubuh &amp; sebagai indra peraba."
  },
  {
    id: "sistem-imun",
    keywords: ["sistem imun", "sistem kekebalan tubuh"],
    title: "Sistem Imun",
    answer:
      "Sistem imun (kekebalan tubuh) berfungsi melindungi tubuh dari serangan bibit penyakit (bakteri, virus, dll). " +
      "Komponennya melibatkan sel darah putih, kelenjar getah bening, &amp; berbagai organ lain yang bekerja sama " +
      "melawan infeksi."
  },
  {
    id: "urutan-organisasi",
    keywords: ["urutan organisasi kehidupan", "urutan sel jaringan organ", "tingkatan organisasi kehidupan", "hierarki kehidupan"],
    title: "Urutan Tingkat Organisasi Kehidupan",
    answer:
      "Urutannya dari yang paling kecil ke paling besar:<br><br>" +
      "🔬 <b>Sel</b> → 🧵 <b>Jaringan</b> → ❤️ <b>Organ</b> → 🫁 <b>Sistem Organ</b> → 🧍 <b>Organisme (individu)</b><br><br>" +
      "Semakin ke kanan, tingkatannya semakin kompleks karena tersusun dari gabungan tingkatan sebelumnya. " +
      "Contoh nyata: sel otot jantung → jaringan otot jantung → organ jantung → sistem peredaran darah → manusia (organisme)."
  },

  // ================= DIFUSI, OSMOSIS, TURGOR =================
  {
    id: "difusi",
    keywords: ["apa itu difusi", "pengertian difusi", "difusi adalah"],
    title: "Difusi",
    answer:
      "Difusi adalah perpindahan partikel/molekul zat (boleh zat apa saja: gas, cairan, zat terlarut) dari daerah " +
      "berkonsentrasi <b>tinggi</b> ke daerah berkonsentrasi <b>rendah</b> secara spontan, sampai konsentrasinya merata di " +
      "kedua tempat.<br><br>" +
      "🌸 Contoh sederhana: aroma parfum yang disemprot di satu sudut ruangan, lama-lama tercium ke seluruh ruangan " +
      "tanpa perlu dikipas."
  },
  {
    id: "osmosis",
    keywords: ["apa itu osmosis", "pengertian osmosis", "osmosis adalah", "osmosis sel"],
    title: "Osmosis",
    answer:
      "Osmosis adalah perpindahan khusus <b>molekul air</b> melalui <b>membran semipermeabel</b>, dari daerah dengan " +
      "konsentrasi zat terlarut <b>rendah</b> menuju daerah dengan konsentrasi zat terlarut <b>tinggi</b>.<br><br>" +
      "🥬 Sayuran tersusun atas jutaan sel yang punya membran semipermeabel. Air bisa keluar/masuk sel lewat proses ini, " +
      "dan inilah yang menentukan sayuran tetap segar atau menjadi layu."
  },
  {
    id: "difusi-vs-osmosis",
    keywords: ["beda difusi dan osmosis", "perbedaan difusi osmosis", "difusi osmosis bedanya"],
    title: "Perbedaan Difusi &amp; Osmosis",
    answer:
      "Persamaan: keduanya perpindahan zat dari konsentrasi tinggi ke rendah, terjadi secara spontan tanpa energi " +
      "tambahan (disebut transpor pasif).<br><br>" +
      "Perbedaan:<br>" +
      "• <b>Difusi</b> — berlaku untuk zat terlarut apa saja (gas, cairan, dsb), tidak selalu lewat membran<br>" +
      "• <b>Osmosis</b> — khusus perpindahan <b>air</b>, harus melalui <b>membran semipermeabel</b>"
  },
  {
    id: "hipotonik-hipertonik-isotonik",
    keywords: ["hipotonik", "hipertonik", "isotonik", "larutan hipertonik", "larutan hipotonik"],
    title: "Larutan Hipotonik, Hipertonik, &amp; Isotonik",
    answer:
      "Istilah ini menjelaskan perbandingan konsentrasi larutan di luar sel dengan di dalam sel:<br><br>" +
      "💧 <b>Hipotonik</b> — konsentrasi larutan di luar sel lebih rendah dari di dalam sel → air <b>masuk</b> ke dalam sel<br>" +
      "🧂 <b>Hipertonik</b> — konsentrasi larutan di luar sel lebih tinggi dari di dalam sel → air <b>keluar</b> dari sel " +
      "(contoh: sayuran direndam larutan garam pekat)<br>" +
      "⚖️ <b>Isotonik</b> — konsentrasi di luar &amp; di dalam sel sama → tidak ada perpindahan air bersih"
  },
  {
    id: "plasmolisis",
    keywords: ["plasmolisis"],
    title: "Plasmolisis",
    answer:
      "Plasmolisis adalah peristiwa lepasnya membran sel dari dinding sel pada sel tumbuhan karena sel berada di " +
      "lingkungan hipertonik (misalnya larutan garam pekat), sehingga air banyak keluar dari sel &amp; sel mengerut. " +
      "Inilah yang membuat sayuran/buah menjadi lembek saat direndam larutan garam terlalu pekat."
  },
  {
    id: "turgor",
    keywords: ["tekanan turgor", "turgor"],
    title: "Tekanan Turgor",
    answer:
      "Tekanan turgor adalah tekanan air di dalam vakuola terhadap dinding sel.<br><br>" +
      "• Jika sel <b>cukup air</b> → vakuola membesar → tekanan turgor tinggi → daun tegak, renyah, &amp; segar ✅<br>" +
      "• Jika sel <b>kehilangan air</b> (misalnya udara kulkas kering atau kena larutan garam pekat) → air keluar dari sel " +
      "lewat osmosis → vakuola mengecil → tekanan turgor turun → daun menjadi layu ❌"
  },

  // ================= STUDI KASUS: SAYURAN & KULKAS =================
  {
    id: "sayur-layu-kulkas",
    keywords: [
      "kenapa sayur layu", "mengapa sayuran layu", "sayur layu di kulkas", "sayuran layu dikulkas",
      "kenapa sayuran cepat layu", "sayur cepat layu"
    ],
    title: "Kenapa Sayuran Bisa Layu di Kulkas?",
    answer:
      "Udara di dalam kulkas cenderung kering &amp; dingin. Kondisi ini membuat air di dalam sel sayuran keluar melalui " +
      "proses <b>osmosis</b>, sehingga vakuola mengecil &amp; <b>tekanan turgor menurun</b> — akibatnya daun menjadi lemas " +
      "dan layu. Sayuran juga tetap melakukan respirasi &amp; transpirasi setelah dipanen, sehingga terus kehilangan air " +
      "selama disimpan, meski lajunya melambat di suhu rendah."
  },
  {
    id: "garam-osmosis",
    keywords: ["garam membuat sayur layu", "larutan garam osmosis", "kenapa direndam garam layu", "acar mentimun"],
    title: "Kenapa Larutan Garam Bisa Membuat Sayuran Layu?",
    answer:
      "Larutan garam punya konsentrasi zat terlarut yang jauh lebih tinggi (hipertonik) daripada di dalam sel sayuran. " +
      "Akibatnya, air di dalam sel keluar menuju larutan garam melalui <b>osmosis</b> (dari konsentrasi rendah ke tinggi). " +
      "Sel kehilangan air → tekanan turgor turun → tekstur sayuran jadi lunak &amp; layu.<br><br>" +
      "🥒 Prinsip yang sama dipakai saat membuat <b>acar mentimun</b>: garam menarik keluar cairan dari irisan mentimun " +
      "sehingga teksturnya jadi lebih lunak."
  },
  {
    id: "percobaan-kentang-wortel",
    keywords: ["percobaan kentang", "percobaan wortel", "kentang osmosis", "kentang garam", "kentang air biasa"],
    title: "Percobaan Osmosis pada Kentang",
    answer:
      "Dua potong kentang berukuran sama direndam: satu di air biasa, satu di larutan garam, selama 24 jam.<br><br>" +
      "📊 <b>Hasil percobaan:</b><br>" +
      "• Kentang di <b>air biasa</b>: massa 20g → tetap keras, massa naik jadi 22g (bertambah)<br>" +
      "• Kentang di <b>larutan garam 5%</b>: massa 20g → jadi lunak, massa turun jadi 19g (berkurang)<br><br>" +
      "📌 <b>Kesimpulan:</b> air berpindah melalui membran semipermeabel dari larutan berkonsentrasi rendah (air biasa) " +
      "menuju larutan berkonsentrasi tinggi (larutan garam). Karena itu kentang di air biasa menyerap air (massa naik), " +
      "sedangkan kentang di larutan garam melepas air (massa turun)."
  },
  {
    id: "percobaan-3-cara-simpan",
    keywords: ["percobaan cara simpan sayur", "3 cara simpan sayuran", "kain katun sayuran", "wadah air sayuran"],
    title: "Percobaan 3 Cara Menyimpan Sayuran (5 hari)",
    answer:
      "Sebuah percobaan membandingkan 3 cara menyimpan sayuran selama 5 hari:<br><br>" +
      "🧺 <b>Dibungkus kain katun bersih</b> → masih segar, hanya sedikit layu ✅ (paling baik)<br>" +
      "🥣 <b>Disimpan dalam wadah berisi air</b> → daun mulai membusuk ❌ (kelembapan berlebih memicu pembusukan)<br>" +
      "📦 <b>Disimpan tanpa tisu &amp; tanpa air</b> → layu dan kering ❌ (kehilangan air terlalu banyak)<br><br>" +
      "📌 <b>Pelajaran penting:</b> kunci menyimpan sayuran adalah menjaga kelembapan yang <b>pas</b> — tidak terlalu " +
      "basah (memicu jamur/busuk) &amp; tidak terlalu kering (memicu layu karena osmosis)."
  },
  {
    id: "tisu-sayur",
    keywords: ["tisu sayuran", "kenapa pakai tisu", "fungsi tisu di kulkas"],
    title: "Kenapa Sayuran Suka Dibungkus Tisu?",
    answer:
      "Tisu berfungsi menyerap kelembapan/embun berlebih di dalam kemasan. Kelembapan yang lebih terkontrol mengurangi " +
      "kondisi yang mendukung tumbuhnya mikroorganisme penyebab pembusukan, sehingga sayuran cenderung bertahan lebih lama.<br><br>" +
      "⚠️ Tapi, semakin banyak tisu dipakai, semakin banyak juga sampah residu yang dihasilkan — karena itu proyek " +
      "Vegetable Fresh Box mencoba mencari solusi pengganti tisu yang lebih ramah lingkungan."
  },
  {
    id: "vegetable-fresh-box",
    keywords: ["vegetable fresh box", "proyek sayuran", "wadah sayuran", "proyek stem", "vfb"],
    title: "Proyek Vegetable Fresh Box",
    answer:
      "Vegetable Fresh Box adalah proyek STEM kelas kita: merancang wadah penyimpan sayuran (mirip food container) yang " +
      "menjaga kelembapan agar sel sayuran tidak banyak kehilangan air lewat osmosis, sehingga <b>tekanan turgor</b> " +
      "tetap terjaga &amp; sayuran tetap segar lebih lama.<br><br>" +
      "Syarat desain yang baik:<br>" +
      "💧 Menjaga kelembapan (sel tidak kehilangan banyak air)<br>" +
      "🌬️ Tetap punya ventilasi (mencegah uap air menumpuk &amp; memicu jamur)<br>" +
      "💰 Mudah dibuat dari bahan murah"
  },

  // ================= STEM (SCIENCE, TECHNOLOGY, ENGINEERING, MATH) =================
  {
    id: "stem-science",
    keywords: ["stem science", "bagian science stem"],
    title: "STEM — Bagian Science",
    answer:
      "Di bagian Science, kita mempelajari konsep <b>osmosis sel</b> &amp; <b>tekanan turgor</b> untuk memahami kenapa " +
      "sayuran layu, sekaligus jadi dasar ilmiah dalam merancang Vegetable Fresh Box."
  },
  {
    id: "stem-technology",
    keywords: ["stem technology", "bagian technology stem", "time-lapse"],
    title: "STEM — Bagian Technology",
    answer:
      "Di bagian Technology, kita memakai:<br>" +
      "📷 Fitur <b>Time-lapse</b> di kamera HP untuk merekam proses perendaman sayuran selama 30–60 menit<br>" +
      "🎨 Aplikasi <b>Canva</b> untuk mengedit &amp; membandingkan foto sebelum-sesudah perendaman"
  },
  {
    id: "stem-engineering",
    keywords: ["stem engineering", "bagian engineering stem", "posisi kangkung baskom"],
    title: "STEM — Bagian Engineering",
    answer:
      "Di bagian Engineering, kita merancang posisi perendaman yang tepat: misalnya menenggelamkan bagian batang " +
      "kangkung di dalam air, sementara daunnya dibiarkan mendapat ruang di atas permukaan air — ini desain terbaik " +
      "agar penyerapan air optimal."
  },
  {
    id: "stem-mathematics",
    keywords: ["stem mathematics", "bagian matematika stem", "skala kesegaran"],
    title: "STEM — Bagian Mathematics",
    answer:
      "Di bagian Mathematics, kita mengukur secara kuantitatif:<br>" +
      "⏱️ Waktu pemulihan kesegaran pakai stopwatch<br>" +
      "📊 Skala kesegaran 1–5 (1 = sangat layu, 5 = sangat segar &amp; garing), dicatat setiap 15 menit"
  },
  {
    id: "skor-kesegaran",
    keywords: ["skor kesegaran", "skala kesegaran sayuran", "kriteria kesegaran"],
    title: "Kriteria Skor Kesegaran Sayuran (Skala 1-5)",
    answer:
      "5 = Sangat segar, tegak, renyah<br>" +
      "4 = Belum layu, namun sudah kehilangan kerenyahan<br>" +
      "3 = Agak lemas, mulai layu<br>" +
      "2 = Seluruh daun lemas, namun belum membusuk<br>" +
      "1 = Layu total, keriput, &amp; bau busuk"
  },

  // ================= LKPD / HOTS =================
  {
    id: "hots-lkpd",
    keywords: ["pertanyaan hots", "soal hots", "lkpd", "studi kasus lkpd"],
    title: "Contoh Pertanyaan HOTS untuk Dipikirkan",
    answer:
      "Coba pikirkan &amp; diskusikan pertanyaan ini dengan kelompokmu:<br><br>" +
      "1️⃣ Mengapa sayuran yang dibiarkan di kulkas bisa kering &amp; layu? Hubungkan jawabanmu dengan konsep osmosis &amp; " +
      "tekanan turgor.<br>" +
      "2️⃣ Apakah wadah Vegetable Fresh Box rancanganmu berhasil menjaga tekanan turgor sel sayuran tetap tinggi selama " +
      "3 hari? Mengapa demikian?<br>" +
      "3️⃣ Apa saran yang bisa kamu berikan agar sayuran bertahan lebih lama di kulkas?<br><br>" +
      "💡 Tips menjawab: gunakan istilah osmosis, membran semipermeabel, &amp; tekanan turgor dalam penjelasanmu."
  },

  // ================= KUIS / EVALUASI =================
  {
    id: "quiz-organel",
    keywords: ["kuis organel", "tebak organel", "review organel"],
    title: "Yuk Review Organel Sel!",
    answer:
      "Coba jawab teka-teki ini ya:<br><br>" +
      "1️⃣ Ibarat CEO perusahaan yang memberi perintah &amp; menyimpan data (DNA) → organel apa? <i>(cek jawaban: tanya 'nukleus')</i><br>" +
      "2️⃣ Petugas kebersihan sel yang mendaur ulang sel rusak &amp; melawan bakteri jahat → organel apa? <i>(cek: tanya 'lisosom')</i><br>" +
      "3️⃣ Pembangkit energi sel yang mengubah sari makanan jadi ATP → organel apa? <i>(cek: tanya 'mitokondria')</i>"
  },
  {
    id: "kisi-kisi",
    keywords: ["kisi-kisi soal", "kisi kisi literasi sains", "indikator soal literasi sains"],
    title: "Tentang Kisi-Kisi Soal Literasi Sains",
    answer:
      "Soal-soal evaluasi di media ini dirancang berbasis <b>literasi sains ala PISA (OECD)</b>, jadi tidak cuma menghafal " +
      "istilah, tapi mengasah kemampuan:<br>" +
      "🔎 Mengidentifikasi isu ilmiah dalam kehidupan sehari-hari (contoh: kebiasaan menyimpan sayuran di kulkas)<br>" +
      "🧪 Menjelaskan fenomena secara ilmiah (contoh: mengapa tisu bisa menjaga kelembapan)<br>" +
      "📊 Menggunakan bukti ilmiah untuk menarik kesimpulan (contoh: dari data percobaan kentang/wortel)<br><br>" +
      "Coba kerjakan dulu soal-soalnya secara mandiri sebelum minta bantuan chatbot ya, supaya belajarnya maksimal!"
  },

  // ================= REFERENSI =================
  {
    id: "referensi",
    keywords: ["referensi", "daftar pustaka", "sumber bacaan", "sumber materi"],
    title: "Referensi / Daftar Pustaka",
    answer:
      "Beberapa sumber ilmiah yang mendasari materi ini:<br><br>" +
      "• Anggrahini, S. (2017). Pengaruh perendaman dalam larutan garam, lama &amp; suhu penyimpanan terhadap sifat fisik " +
      "buah tomat. <i>agriTECH</i>, 13(2), 9–12.<br>" +
      "• Ulfa, H. L., Falahiyah, R., &amp; Singgih, S. (2020). Uji osmosis pada kentang &amp; wortel menggunakan larutan " +
      "NaCl. <i>Sainsmat</i>, 9(2), 110–116.<br>" +
      "• Ihsan, T., &amp; Derosya, V. (2024). Tinjauan strategi pengemasan buah &amp; sayur dalam memerangi food loss di " +
      "Indonesia. <i>Jurnal Ilmu Lingkungan</i>, 22(4), 1078–1087."
  },

  // ================= NAVIGASI / BANTUAN =================
  {
    id: "daftar-materi",
    keywords: ["daftar materi", "materi apa saja", "topik apa saja", "bisa tanya apa", "menu materi", "bantuan"],
    title: "Daftar Topik yang Bisa Kamu Tanyakan",
    answer:
      "Berikut topik-topik yang aku kuasai, tinggal ketik salah satu kata kunci ini:<br><br>" +
      "📘 <b>Organisasi kehidupan:</b> sel, jaringan, organ, sistem organ, urutan organisasi kehidupan<br>" +
      "🕰️ <b>Sejarah &amp; jenis sel:</b> sejarah penemuan sel, sel prokariotik, sel eukariotik, sel hewan vs sel tumbuhan<br>" +
      "🧫 <b>Organel sel:</b> nukleus, mitokondria, lisosom, ribosom, retikulum endoplasma, badan golgi, vakuola, " +
      "kloroplas, dinding sel, membran sel, sitoskeleton, sentriol, sitoplasma<br>" +
      "💧 <b>Difusi &amp; osmosis:</b> difusi, osmosis, tekanan turgor, plasmolisis, hipotonik/hipertonik/isotonik, " +
      "transpor aktif &amp; pasif<br>" +
      "🫀 <b>Jaringan, organ, sistem organ:</b> jaringan manusia/tumbuhan, organ manusia/tumbuhan, sistem pencernaan, " +
      "pernapasan, peredaran darah, ekskresi, saraf, gerak, endokrin, reproduksi, integumen, imun<br>" +
      "🥬 <b>Studi kasus sayuran:</b> kenapa sayur layu di kulkas, percobaan kentang, percobaan 3 cara simpan sayuran, " +
      "vegetable fresh box, fungsi tisu<br>" +
      "🔬 <b>STEM:</b> bagian science/technology/engineering/mathematics, skor kesegaran<br>" +
      "📝 <b>Latihan:</b> kuis organel, pertanyaan HOTS, kisi-kisi soal<br>" +
      "📚 Referensi/daftar pustaka<br><br>" +
      "Silakan ketik pertanyaanmu, misalnya <i>\"apa itu osmosis\"</i> atau <i>\"kenapa sayur layu di kulkas\"</i>."
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
      "Ketik <i>\"daftar materi\"</i> untuk melihat semua topik yang bisa ditanyakan, atau langsung tanya saja!"
  }
];

// Daftar chip pertanyaan cepat yang tampil di bawah chatbox
const QUICK_SUGGESTIONS = [
  "Apa itu sel?",
  "Urutan organisasi kehidupan",
  "Apa fungsi mitokondria?",
  "Apa itu osmosis?",
  "Kenapa sayuran layu di kulkas?",
  "Apa itu tekanan turgor?",
  "Percobaan kentang",
  "Daftar materi"
];

// Pesan sambutan pertama saat chatbot dibuka
const WELCOME_MESSAGE =
  "Halo 👋 Saya <b>AI Assistant IPA</b>.<br><br>" +
  "Silakan tanyakan materi <b>Sistem Organisasi Kehidupan</b>, contohnya:<br>" +
  "• Apa itu Sel?<br>" +
  "• Apa itu Osmosis?<br>" +
  "• Apa fungsi Mitokondria?<br>" +
  "• Kenapa sayuran bisa layu di kulkas?<br><br>" +
  "Ketik <i>\"daftar materi\"</i> untuk melihat semua topik yang tersedia ya!";

// Pesan default kalau pertanyaan tidak ditemukan di database
const FALLBACK_MESSAGE =
  "Hmm, aku belum punya jawaban untuk pertanyaan itu 🤔<br><br>" +
  "Coba tanyakan dengan kata kunci lain, misalnya: <i>sel, jaringan, organ, sistem organ, nukleus, mitokondria, " +
  "lisosom, difusi, osmosis, tekanan turgor,</i> atau <i>vegetable fresh box</i>. Atau ketik <i>\"daftar materi\"</i> " +
  "untuk melihat semua topik yang bisa aku bantu jelaskan.";
