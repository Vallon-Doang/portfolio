/* Vallon — portfolio interactions
   - ID/EN language toggle (Indonesian is the source language)
   - coin-stack skill meters
   - hero parallax
   - reveal-on-scroll
   - Discord username copy
*/

(function () {
    'use strict';

    var translations = {
        id: {
            'meta.title': 'Vallon — Developer & Cybersecurity',
            'meta.description': 'Portofolio Vallon — siswa PPLG yang membangun game, aplikasi web, dan mendalami keamanan siber.',

            'nav.skip': 'Lompat ke konten',
            'nav.about': 'Tentang',
            'nav.skills': 'Keahlian',
            'nav.projects': 'Proyek',
            'nav.achievements': 'Pencapaian',
            'nav.contact': 'Kontak',

            'hero.kicker': 'Siswa • Developer & Cybersecurity',
            'hero.tagline': 'Membangun game, web, dan belajar mengamankan sistem.',
            'hero.sub': 'Halo, saya Vallon — siswa PPLG di SMK Cinta Kasih Tzu Chi. Saya senang membuat game 2D, aplikasi web, dan bereksperimen dengan keamanan siber.',
            'hero.ctaProjects': 'Lihat Proyek',
            'hero.ctaContact': 'Hubungi Saya',

            'about.title': 'Tentang Saya',
            'about.p1': 'Nama saya Vallon, siswa jurusan Pengembangan Perangkat Lunak dan Gim (PPLG) di SMK Cinta Kasih Tzu Chi. Saya mulai ngoding sebagai hobi, lalu jadi kebiasaan: membangun game top-down di Godot, aplikasi web dengan Laravel, sampai bot AI dan latihan keamanan siber.',
            'about.p2': 'Saya percaya cara terbaik belajar adalah dengan membuat sesuatu yang benar-benar dipakai orang. Karena itu portofolio ini berisi proyek nyata, bukan sekadar daftar teknologi.',
            'about.factSchool': 'Sekolah',
            'about.schoolValue': 'SMK Cinta Kasih Tzu Chi',
            'about.factMajor': 'Jurusan',
            'about.majorValue': 'PPLG — Pengembangan Perangkat Lunak dan Gim',
            'about.factFocus': 'Fokus',
            'about.focusValue': 'Web • Game • Cybersecurity',
            'about.factStatus': 'Status',
            'about.statusValue': 'Siswa aktif',

            'skills.title': 'Keahlian',
            'skills.lead': 'Skala 1–5 koin, bukan angka mutlak — gambaran jujur sejauh mana saya sudah memakai tiap teknologi.',
            'skills.web': 'Web Development',
            'skills.game': 'Game Development',
            'skills.cyber': 'Cybersecurity',
            'skills.htmlcss': 'HTML & CSS',
            'skills.js': 'JavaScript',
            'skills.phplaravel': 'PHP & Laravel',
            'skills.mysql': 'MySQL',
            'skills.godot': 'Godot & GDScript',
            'skills.unity': 'Unity & C#',
            'skills.pixel': 'Pixel Art',
            'skills.linux': 'Linux',
            'skills.networking': 'Networking',
            'skills.ctf': 'CTF & Web Security',
            'skills.burp': 'Burp Suite',
            'skills.toolsTitle': 'Tools & lainnya',

            'projects.title': 'Proyek',
            'projects.lead': 'Sebagian sudah selesai dan bisa dimainkan, sebagian masih dalam perjalanan.',
            'projects.screenshot': 'Screenshot menyusul',
            'projects.done': 'Selesai',
            'projects.deployed': 'Dideploy',
            'projects.playable': 'Bisa dimainkan',
            'projects.soon': 'Segera',
            'projects.soonTitle': 'Segera hadir',
            'projects.upcoming.desc': 'Proyek berikutnya sedang dikerjakan. Slot ini menunggu screenshot dan detail.',
            'projects.damkar.desc': 'Game survival top-down bertema pemadam kebakaran di hutan Kalimantan. Punya 4 wave + boss, sistem upgrade, endless mode, shader kustom, dan dukungan gamepad. Tersedia build Windows dan Linux.',
            'projects.gamespin.desc': 'Aplikasi web untuk memilih game apa yang mau dimainkan. Ada library game, filter, roulette, integrasi Steam OpenID, feed komunitas, dan panel admin.',
            'projects.slider.desc': 'Game pixel-art yang bisa langsung dimainkan di browser lewat itch.io.',
            'projects.repo': 'Repo',
            'projects.play': 'Mainkan',

            'achievements.title': 'Pencapaian & Kegiatan',
            'achievements.lead': 'Kompetisi yang saya ikuti di bidang keamanan siber.',
            'achievements.a1': 'Juara 2 LKS Cybersecurity tingkat kota',
            'achievements.a2': 'Finalis LKS Cybersecurity tingkat provinsi',
            'achievements.a3': 'Juara Harapan 2 LKS Cybersecurity tingkat kota',

            'contact.title': 'Kontak',
            'contact.lead': 'Terbuka untuk kolaborasi, proyek freelance, atau sekadar ngobrol soal game dan keamanan.',
            'contact.github': 'GitHub',
            'contact.itch': 'itch.io',
            'contact.email': 'Email',
            'contact.discord': 'Discord',
            'contact.copy': 'Salin',
            'contact.copied': 'Tersalin!',

            'footer.text': 'Dibuat dengan HTML, CSS, dan JavaScript. © 2026 Vallon.'
        },

        en: {
            'meta.title': 'Vallon — Developer & Cybersecurity',
            'meta.description': "Vallon's portfolio — a PPLG student building games, web apps, and exploring cybersecurity.",

            'nav.skip': 'Skip to content',
            'nav.about': 'About',
            'nav.skills': 'Skills',
            'nav.projects': 'Projects',
            'nav.achievements': 'Awards',
            'nav.contact': 'Contact',

            'hero.kicker': 'Student • Developer & Cybersecurity',
            'hero.tagline': 'Building games, the web, and learning to secure systems.',
            'hero.sub': "Hi, I'm Vallon — a PPLG student at SMK Cinta Kasih Tzu Chi. I enjoy making 2D games, web apps, and experimenting with cybersecurity.",
            'hero.ctaProjects': 'View Projects',
            'hero.ctaContact': 'Contact Me',

            'about.title': 'About Me',
            'about.p1': "I'm Vallon, a student majoring in Software and Game Development (PPLG) at SMK Cinta Kasih Tzu Chi. I started coding as a hobby, and it became a habit: building top-down games in Godot, web apps with Laravel, and dabbling in AI bots and cybersecurity practice.",
            'about.p2': "I believe the best way to learn is to build something people actually use. That's why this portfolio shows real projects, not just a list of technologies.",
            'about.factSchool': 'School',
            'about.schoolValue': 'SMK Cinta Kasih Tzu Chi',
            'about.factMajor': 'Major',
            'about.majorValue': 'PPLG — Software and Game Development',
            'about.factFocus': 'Focus',
            'about.focusValue': 'Web • Game • Cybersecurity',
            'about.factStatus': 'Status',
            'about.statusValue': 'Active student',

            'skills.title': 'Skills',
            'skills.lead': "A 1–5 coin scale, not absolute numbers — an honest picture of how far I've used each technology.",
            'skills.web': 'Web Development',
            'skills.game': 'Game Development',
            'skills.cyber': 'Cybersecurity',
            'skills.htmlcss': 'HTML & CSS',
            'skills.js': 'JavaScript',
            'skills.phplaravel': 'PHP & Laravel',
            'skills.mysql': 'MySQL',
            'skills.godot': 'Godot & GDScript',
            'skills.unity': 'Unity & C#',
            'skills.pixel': 'Pixel Art',
            'skills.linux': 'Linux',
            'skills.networking': 'Networking',
            'skills.ctf': 'CTF & Web Security',
            'skills.burp': 'Burp Suite',
            'skills.toolsTitle': 'Tools & more',

            'projects.title': 'Projects',
            'projects.lead': 'Some are finished and playable; some are still on the way.',
            'projects.screenshot': 'Screenshot coming soon',
            'projects.done': 'Completed',
            'projects.deployed': 'Deployed',
            'projects.playable': 'Playable',
            'projects.soon': 'Soon',
            'projects.soonTitle': 'Coming soon',
            'projects.upcoming.desc': 'The next project is in progress. This slot is waiting for a screenshot and details.',
            'projects.damkar.desc': 'A top-down survival game about firefighters battling forest fires in Kalimantan. It has 4 waves + a boss, upgrades, endless mode, custom shaders, and gamepad support. Windows and Linux builds available.',
            'projects.gamespin.desc': 'A web app for deciding what game to play next. Game library, filters, roulette, Steam OpenID integration, community feed, and an admin panel.',
            'projects.slider.desc': 'A pixel-art game you can play right in the browser on itch.io.',
            'projects.repo': 'Repo',
            'projects.play': 'Play',

            'achievements.title': 'Awards & Activities',
            'achievements.lead': "Cybersecurity competitions I've taken part in.",
            'achievements.a1': '2nd Place — City-Level LKS Cybersecurity',
            'achievements.a2': 'Provincial-Level LKS Cybersecurity Finalist',
            'achievements.a3': '2nd Runner-Up — City-Level LKS Cybersecurity',

            'contact.title': 'Contact',
            'contact.lead': 'Open to collaboration, freelance work, or just talking about games and security.',
            'contact.github': 'GitHub',
            'contact.itch': 'itch.io',
            'contact.email': 'Email',
            'contact.discord': 'Discord',
            'contact.copy': 'Copy',
            'contact.copied': 'Copied!',

            'footer.text': 'Built with HTML, CSS, and JavaScript. © 2026 Vallon.'
        }
    };

    var STORAGE_KEY = 'vallon-lang';
    var currentLang = 'id';
    var langToggle = document.getElementById('langToggle');

    function t(key) {
        var dict = translations[currentLang] || translations.id;
        return Object.prototype.hasOwnProperty.call(dict, key) ? dict[key] : key;
    }

    function applyLanguage(lang) {
        if (!translations[lang]) {
            lang = 'id';
        }
        currentLang = lang;

        var dict = translations[lang];
        document.documentElement.lang = lang;

        var nodes = document.querySelectorAll('[data-i18n]');
        for (var i = 0; i < nodes.length; i++) {
            var key = nodes[i].getAttribute('data-i18n');
            if (Object.prototype.hasOwnProperty.call(dict, key)) {
                nodes[i].textContent = dict[key];
            }
        }

        document.title = dict['meta.title'];

        var description = dict['meta.description'];
        var metaDescription = document.querySelector('meta[name="description"]');
        var ogDescription = document.querySelector('meta[property="og:description"]');
        if (metaDescription) metaDescription.setAttribute('content', description);
        if (ogDescription) ogDescription.setAttribute('content', description);

        if (langToggle) {
            langToggle.textContent = lang === 'id' ? 'EN' : 'ID';
            langToggle.setAttribute('aria-label', lang === 'id' ? 'Switch to English' : 'Ganti ke Bahasa Indonesia');
        }

        try {
            localStorage.setItem(STORAGE_KEY, lang);
        } catch (error) {
            /* storage can be blocked; the toggle still works for this visit */
        }
    }

    if (langToggle) {
        langToggle.addEventListener('click', function () {
            applyLanguage(currentLang === 'id' ? 'en' : 'id');
        });
    }

    var savedLang = 'id';
    try {
        savedLang = localStorage.getItem(STORAGE_KEY) || 'id';
    } catch (error) {
        savedLang = 'id';
    }
    applyLanguage(savedLang);

    /* ---------- coin stacks ---------- */

    var coinStacks = document.querySelectorAll('.coin-stack');
    for (var s = 0; s < coinStacks.length; s++) {
        var stack = coinStacks[s];
        var level = parseInt(stack.getAttribute('data-level'), 10) || 0;

        for (var c = 0; c < 5; c++) {
            var coin = document.createElement('span');
            coin.className = c < level ? 'coin coin--filled' : 'coin';
            stack.appendChild(coin);
        }

        stack.setAttribute('role', 'img');
        stack.setAttribute('aria-label', level + '/5');
    }

    /* ---------- hero parallax ---------- */

    var aurora = document.querySelector('.hero__aurora');
    var mountains = document.querySelector('.hero__mountains');
    var reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)');
    var ticking = false;

    function updateParallax() {
        if (!aurora || !mountains || reduceMotion.matches) {
            ticking = false;
            return;
        }

        var y = window.scrollY || window.pageYOffset || 0;

        if (y < window.innerHeight * 1.4) {
            aurora.style.transform = 'translate3d(0, ' + (y * 0.32).toFixed(2) + 'px, 0) scale(1.02)';
            mountains.style.transform = 'translate3d(0, ' + (y * 0.14).toFixed(2) + 'px, 0) scale(1.02)';
        }

        ticking = false;
    }

    function onScroll() {
        if (!ticking) {
            ticking = true;
            window.requestAnimationFrame(updateParallax);
        }
    }

    window.addEventListener('scroll', onScroll, { passive: true });
    window.addEventListener('resize', onScroll);
    updateParallax();

    /* ---------- copy Discord username ---------- */

    var copyButton = document.getElementById('copyDiscord');
    var copyTimer = null;

    if (copyButton) {
        copyButton.addEventListener('click', function () {
            var username = 'vallon_doang';

            function done() {
                copyButton.textContent = t('contact.copied');
                if (copyTimer) clearTimeout(copyTimer);
                copyTimer = setTimeout(function () {
                    copyButton.textContent = t('contact.copy');
                }, 1600);
            }

            if (navigator.clipboard && navigator.clipboard.writeText) {
                navigator.clipboard.writeText(username).then(done).catch(done);
            } else {
                var helper = document.createElement('textarea');
                helper.value = username;
                helper.setAttribute('readonly', '');
                helper.style.position = 'fixed';
                helper.style.opacity = '0';
                document.body.appendChild(helper);
                helper.select();

                try {
                    document.execCommand('copy');
                } catch (error) {
                    /* ignore */
                }

                document.body.removeChild(helper);
                done();
            }
        });
    }
})();
