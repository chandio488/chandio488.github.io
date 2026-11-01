/* =====================================================================
   Sada Portal — Research catalogue shelf · 2026-11-01
   ---------------------------------------------------------------------
   WHY: the owner ordered the FULL 64-record GitHub Music Research
   catalogue listed on the portal («پوری 64 ریکارڈ والی فہرست لگاؤ»,
   2026-11-01 19:33 PKT, after an explicit warning), executed inside
   his FIXED rulings of the same day (single counting standard,
   confirmed «فکس» 19:29 PKT). assets/music-directory.js is ~8 MB (over
   the connector push limit), so — same pattern as the Jalal patches —
   this shelf ships as its own patch asset, loaded at the end of the
   mdLoadDir() chain, and renders into #researchShelf in the Music view.

   DATA PROVENANCE: every record comes from
   reports/GITHUB-MUSIC-RESEARCH-2026-11-01-catalogue.json (research
   fetched 2026-11-01, recompiled to the owner's fixed standard;
   unified_class on all 64 records). Nothing is invented; artist names
   are display-shortened from the record (provenance parentheses cut).

   ENABLEMENT — the owner's fixed classes, enforced in the renderer:
   - full_verified_personal_nc (9) / full_verified_commercial (3):
     play in-site ONLY via the origin platform's official embed where
     one exists; download button links ONLY to the origin download
     location (a file is never re-hosted here). NC records are labelled
     personal / non-commercial use only.
   - playable_only (4): official embed, streaming only, no download.
   - doubtful_license (1, Sampling Plus 1.0): listed with the doubtful
     badge; NO download (separate legal check still pending).
   - rights_unclear (45): LISTING ONLY — no play, no download, no
     outbound song link. Includes all 18 Internet Archive Jalal items
     and the Audius fan uploads (owner rulings: REJECTED for download).
   - sample_excluded (2): separate samples subsection, listing only.
   Platforms with no embeddable official player (Jamendo, Free Music
   Archive, ccMixter — its files are hotlink-protected, verified 403
   for foreign referers) honestly say so on the card instead of
   bouncing the visitor out or faking a player.

   SINGLE-PLAY: playable cards use the portal's own widget pattern
   (iframe.md-pembed inside .md-pframe inside .md-profile), so the
   existing single-play coordinator (2026-11-01) governs them with no
   new machinery: focus-in activates, other starts unload them, the
   gold "Now playing" badge marks the live card.

   DOWNLOADER (owner addendum 2026-11-01 19:38 PKT): the box at the top
   of the shelf is a LAWFUL RESOLVER ONLY. A pasted link is matched
   against these 64 records (and, at runtime, against the main music
   directory by URL/id) and the match is shown with its lawful actions
   per class. It never extracts media, never calls a downloader
   service, never proxies a file.

   SAFETY: fully guarded; a patch failure never breaks the catalogue.
   ===================================================================== */
window.__RESEARCH_CATALOGUE__ = [{"i":0,"a":"Jalal Chandio","t":"Kenh Ta Nibhage Nazar Mari Parody","p":"Internet Archive","g":"jalal","c":"rights_unclear","lic":null,"lu":null,"u":"https://archive.org/details/JalalChandioSindh4u.com","tr":1},{"i":1,"a":"Jalal Chandio","t":"Aa Angen Eidoon","p":"Internet Archive","g":"jalal","c":"rights_unclear","lic":"Public Domain Mark 1.0","lu":null,"u":"https://archive.org/details/aa-angen-eidoon","tr":1},{"i":2,"a":"Jalal Chandio","t":"Dilri Na Tu Arman Ker","p":"Internet Archive","g":"jalal","c":"rights_unclear","lic":"Public Domain Mark 1.0","lu":null,"u":"https://archive.org/details/dilri-na-tu-arman-ker","tr":1},{"i":3,"a":"Jalal Chandio","t":"Daghabaz Dilber Dilso Bhalo Dai","p":"Internet Archive","g":"jalal","c":"rights_unclear","lic":"Public Domain Mark 1.0","lu":null,"u":"https://archive.org/details/daghabaz-dilber-dilso-bhalo-dai","tr":1},{"i":4,"a":"Jalal Chandio","t":"Dil Ji Lagi Sa","p":"Internet Archive","g":"jalal","c":"rights_unclear","lic":"Public Domain Mark 1.0","lu":null,"u":"https://archive.org/details/dil-ji-lagi-sa","tr":1},{"i":5,"a":"Ustad Jalal Chandio","t":"Dastan Moomal Rano","p":"Internet Archive","g":"jalal","c":"rights_unclear","lic":"Public Domain Mark 1.0","lu":null,"u":"https://archive.org/details/dastan-moomal-rano","tr":1},{"i":6,"a":"Jalal Chandio","t":"Ajoki Raat Rahe Pao","p":"Internet Archive","g":"jalal","c":"rights_unclear","lic":"Public Domain Mark 1.0","lu":null,"u":"https://archive.org/details/ajoki-raat-rahe-pao","tr":1},{"i":7,"a":"Jalal Chandio","t":"Aa Tu Mitha Ka Bahari Kayoon","p":"Internet Archive","g":"jalal","c":"rights_unclear","lic":"Public Domain Mark 1.0","lu":null,"u":"https://archive.org/details/aa-tu-mitha-ka-bahari-kayoon","tr":1},{"i":8,"a":"Jalal Chandio","t":"Aj Mohinji Akh Thi Fari","p":"Internet Archive","g":"jalal","c":"rights_unclear","lic":"Public Domain Mark 1.0","lu":null,"u":"https://archive.org/details/aj-mohinji-akh-thi-fari","tr":1},{"i":9,"a":"Jalal Chandio","t":"Aedi Der Kare","p":"Internet Archive","g":"jalal","c":"rights_unclear","lic":"Public Domain Mark 1.0","lu":null,"u":"https://archive.org/details/aedi-der-kare","tr":1},{"i":10,"a":"Jalal Chandio","t":"Atham Umaidoon","p":"Internet Archive","g":"jalal","c":"rights_unclear","lic":"Public Domain Mark 1.0","lu":null,"u":"https://archive.org/details/atham-umaidoon","tr":1},{"i":11,"a":"Jalal Chandio","t":"Bulbul Jo Shouq Gul Gulzar Saan","p":"Internet Archive","g":"jalal","c":"rights_unclear","lic":"Public Domain Mark 1.0","lu":null,"u":"https://archive.org/details/bulbul-jo-shouq-gul-gulzar-saan","tr":1},{"i":12,"a":"Jalal Chandio","t":"Dil Ji Lagi Sa","p":"Internet Archive","g":"jalal","c":"rights_unclear","lic":"Public Domain Mark 1.0","lu":null,"u":"https://archive.org/details/dil-ji-lagi-sa_202007","tr":1},{"i":13,"a":"Jalal Chandio","t":"Chayam Aakhir Badhi","p":"Internet Archive","g":"jalal","c":"rights_unclear","lic":"Public Domain Mark 1.0","lu":null,"u":"https://archive.org/details/chayam-aakhir-badhi","tr":1},{"i":14,"a":"Jalal Chandio","t":"He Dil Tunhje Hawale (album item)","p":"Internet Archive","g":"jalal","c":"rights_unclear","lic":"CC0 1.0 Universal (Public Domain Dedication)","lu":null,"u":"https://archive.org/details/he-dil-tunhje-havale","tr":7},{"i":15,"a":"Jalal Chandio","t":"Je Na Tho Parcheen Ta (album item)","p":"Internet Archive","g":"jalal","c":"rights_unclear","lic":"CC0 1.0 Universal (Public Domain Dedication)","lu":null,"u":"https://archive.org/details/je-na-tho-parcheen","tr":9},{"i":16,"a":"Jalal Chandio","t":"Aa Jogi Rakh Mantar Meno (album item)","p":"Internet Archive","g":"jalal","c":"rights_unclear","lic":"CC0 1.0 Universal (Public Domain Dedication)","lu":null,"u":"https://archive.org/details/jalal-jogi-rakh-mantar","tr":6},{"i":17,"a":"Jalal Chandio","t":"Diliri Khasay Wyen (album item; item title is the 8th track's name)","p":"Internet Archive","g":"jalal","c":"rights_unclear","lic":"CC0 1.0 Universal (Public Domain Dedication)","lu":null,"u":"https://archive.org/details/diliri-khasay-wyen","tr":9},{"i":18,"a":"Baig","t":"Baig - Kabhi Kabhi Aur (Synthwave)","p":"Internet Archive","g":"urdu","c":"full_verified_personal_nc","lic":"Creative Commons Attribution-NonCommercial-ShareAlike 4.0 (CC BY-NC-SA 4.0)","lu":"https://creativecommons.org/licenses/by-nc-sa/4.0/","u":"https://archive.org/details/baig-kabhi-kabhi-aur","e":"https://archive.org/embed/baig-kabhi-kabhi-aur","eh":352,"dl":"https://archive.org/download/baig-kabhi-kabhi-aur/Baig%20-%20Kabhi%20Kabhi%20Aur.mp3"},{"i":19,"a":"Siddiq Ismail","t":"Humko Kya Mil Gaya Vol. 11 | Siddiq Ismail","p":"Internet Archive","g":"urdu","c":"rights_unclear","lic":"Public Domain Mark 1.0 (uploader-applied, as recorded)","lu":null,"u":"https://archive.org/details/Humko_Kya_Mil_Gaya_Vol_11"},{"i":20,"a":"Faiz Ahmed Faiz and Iqbal Bano","t":"02. Hum Dekhenge","p":"Internet Archive","g":"urdu","c":"rights_unclear","lic":"Public Domain Mark 1.0 (uploader-applied, as recorded)","lu":null,"u":"https://archive.org/details/hum-dekhenge"},{"i":21,"a":"Tafseer The Band","t":"Kesa Jeena Tere Bina By Tafseer The Band","p":"Internet Archive","g":"urdu","c":"rights_unclear","lic":"None stated","lu":null,"u":"https://archive.org/details/KesaJeenaTereBinaByTafseerTheBand"},{"i":22,"a":"Ureed","t":"Aaeina (2010) - Ureed","p":"Internet Archive","g":"urdu","c":"rights_unclear","lic":"None stated","lu":null,"u":"https://archive.org/details/Ureed"},{"i":23,"a":"Osama Qureshi","t":"Alag Duniya","p":"Internet Archive","g":"urdu","c":"rights_unclear","lic":"None stated","lu":null,"u":"https://archive.org/details/alag-duniya"},{"i":24,"a":"Hassam Nawaz","t":"Udaas - Hassam | Prod. Lee | Urdu Hindi Rap 2022 | (Official Audio)","p":"Audius","g":"urdu","c":"playable_only","lic":"All rights reserved","lu":null,"u":"https://audius.co/Hassam/udaas-hassam-\uff5c-prod-lee-\uff5c-urdu-hindi-rap-2022-\uff5c-official-audio","e":"https://audius.co/embed/track/0XXlQXK?flavor=card","eh":480},{"i":25,"a":"Hassam Nawaz","t":"Akelapan - Hassam | Prod. Rama Low | Urdu Hindi Rap 2022","p":"Audius","g":"urdu","c":"playable_only","lic":"All rights reserved","lu":null,"u":"https://audius.co/Hassam/akelapan-hassam-|-prod-rama-low-|-urdu-hindi-rap-2022","e":"https://audius.co/embed/track/Bxlrbz1?flavor=card","eh":480},{"i":26,"a":"Javolenus","t":"Euclid Urdu Percussion","p":"ccMixter","g":"samples","c":"sample_excluded","lic":"Creative Commons Attribution Noncommercial (3.0)","lu":"http://creativecommons.org/licenses/by-nc/3.0/","u":"https://ccmixter.org/files/Javolenus/48073","n":"\u06cc\u06c1 \u0627\u0631\u062f\u0648 \u0632\u0628\u0627\u0646 \u06a9\u06cc \u0645\u0648\u0633\u06cc\u0642\u06cc \u0646\u06c1\u06cc\u06ba\u061b \u00abUrdu\u00bb \u062f\u0631\u0627\u0635\u0644 \u0627\u06cc\u06a9 \u067e\u0631\u06a9\u0634\u0646 \u0646\u0645\u0648\u0646\u06d2 \u06a9\u0627 \u0646\u0627\u0645 \u06c1\u06d2\u06d4"},{"i":27,"a":"texasradiofish","t":"Dark & Fluffy Septafuse","p":"ccMixter","g":"samples","c":"sample_excluded","lic":"Creative Commons Attribution Noncommercial (3.0)","lu":"http://creativecommons.org/licenses/by-nc/3.0/","u":"https://ccmixter.org/files/texasradiofish/65453","n":"\u06cc\u06c1 \u0633\u0627\u0632\u06cc\u0646\u06c1 \u0679\u0631\u06cc\u06a9 \u06c1\u06d2\u061b \u00aburdu\u00bb \u0679\u06cc\u06af \u0627\u0633 \u0645\u06cc\u06ba \u0627\u0633\u062a\u0639\u0645\u0627\u0644 \u0634\u062f\u06c1 \u0646\u0645\u0648\u0646\u06d2 \u06a9\u0627 \u0646\u0627\u0645 \u06c1\u06d2\u060c \u0632\u0628\u0627\u0646 \u0646\u06c1\u06cc\u06ba\u06d4"},{"i":28,"a":"Ghulam Muhammad","t":"Lai Ta Nimani","p":"Internet Archive","g":"sindhi","c":"rights_unclear","lic":"Public Domain Mark 1.0 (uploader-applied, as recorded)","lu":null,"u":"https://archive.org/details/lai-ta-nimani"},{"i":29,"a":"\u0646\u0627\u0645 \u062f\u0631\u062c \u0646\u06c1\u06cc\u06ba","t":"\u062a\u0646\u0647\u0646\u062c\u0648\u0646 \u068c\u0627\u0699\u064a\u0644 \u0627\u06a9\u0699\u064a\u0648\u0646 (Tunhjoo Dharel Akhryoon)","p":"Internet Archive","g":"sindhi","c":"rights_unclear","lic":"Public Domain Mark 1.0 (uploader-applied, as recorded)","lu":null,"u":"https://archive.org/details/TunhjooDharelAkhryoon"},{"i":30,"a":"Faqeer Aamir Ali Darazi","t":"Kahro Dorapo Dadhan Khe Shaman Faqeer","p":"Internet Archive","g":"sindhi","c":"rights_unclear","lic":"Public Domain Mark 1.0 (uploader-applied, as recorded)","lu":null,"u":"https://archive.org/details/kahro-dorapo-dadhan-khe-shaman-faqeer"},{"i":31,"a":"\u0646\u0627\u0645 \u062f\u0631\u062c \u0646\u06c1\u06cc\u06ba","t":"sindhi mashup","p":"Internet Archive","g":"sindhi","c":"rights_unclear","lic":"None stated","lu":null,"u":"https://archive.org/details/sindhisongs"},{"i":32,"a":"alikhaan","t":"Asaan_Ko_na_Bi_Ibadat_Kai_Aa_,Sirf_Sindh_tunjhi_Tilawat_kai_aa_Sindhi_Song(360p)","p":"Audius","g":"sindhi","c":"playable_only","lic":"All rights reserved","lu":null,"u":"https://audius.co/alikhan112/asaan_ko_na_bi_ibadat_kai_aa_sirf_sindh_tunjhi_tilawat_kai_aa_sindhi_song360p","e":"https://audius.co/embed/track/Yao2k?flavor=card","eh":480,"n":"\u0627\u067e \u0644\u0648\u0688\u0631 \u06a9\u06d2 \u0627\u06a9\u0627\u0624\u0646\u0679 \u0633\u06d2 \u06c1\u06d2\u061b \u0627\u0635\u0644 \u0641\u0646\u06a9\u0627\u0631 \u06a9\u06cc \u0622\u0632\u0627\u062f\u0627\u0646\u06c1 \u062a\u0635\u062f\u06cc\u0642 \u0645\u0648\u062c\u0648\u062f \u0646\u06c1\u06cc\u06ba \u0627\u0648\u0631 \u0639\u0646\u0648\u0627\u0646 \u0633\u06d2 \u0648\u06cc\u0688\u06cc\u0648 \u0633\u06d2 \u0646\u0642\u0644 \u0634\u062f\u06c1 \u0641\u0627\u0626\u0644 \u06a9\u0627 \u0627\u0634\u0627\u0631\u06c1 \u0645\u0644\u062a\u0627 \u06c1\u06d2\u06d4"},{"i":33,"a":"Sarmad Sindhi","t":"Ghawa_Monkhe_Laga_Inqlabi_Song_By_Sarmad_Sindhi_JSQM.(256k)","p":"Audius","g":"sindhi","c":"rights_unclear","lic":"All rights reserved (as recorded on the upload)","lu":null,"u":"https://audius.co/shaid7890/ghawa_monkhe_laga_inqlabi_song_by_sarmad_sindhi_jsqm256k"},{"i":34,"a":"Pappu Mishra","t":"Jina Bhi Hai Jeena","p":"Internet Archive","g":"hindi","c":"rights_unclear","lic":"Creative Commons Attribution-NonCommercial-NoDerivatives 3.0 (CC BY-NC-ND 3.0, as recorded)","lu":"http://creativecommons.org/licenses/by-nc-nd/3.0/","u":"https://archive.org/details/JinaBhiHaiJeena"},{"i":35,"a":"Raja Nawathe","t":"Jaan Pehchan Ho","p":"Internet Archive","g":"hindi","c":"rights_unclear","lic":"None stated","lu":null,"u":"https://archive.org/details/jaan-pehchan-ho_202206"},{"i":36,"a":"Shankar Singh Thakur","t":"\u0938\u0902\u0924\u094b\u0937\u0940 \u092e\u093e\u0924\u093e \u092d\u091c\u0928 | Jogan Ban Jaaungi Maiya Tere Dhaam Ki | Shankar Singh Thakur","p":"Internet Archive","g":"hindi","c":"rights_unclear","lic":"Creative Commons Attribution-NoDerivatives 4.0 (CC BY-ND 4.0, uploader-applied, as recorded)","lu":"https://creativecommons.org/licenses/by-nd/4.0/","u":"https://archive.org/details/jogan-ban-jaaungi"},{"i":37,"a":"Alchemist Project","t":"Krishna","p":"Internet Archive","g":"hindi","c":"rights_unclear","lic":"Creative Commons Attribution-NoDerivatives 4.0 (CC BY-ND 4.0, uploader-applied, as recorded)","lu":"https://creativecommons.org/licenses/by-nd/4.0/","u":"https://archive.org/details/krishna-2006","n":"\u0631\u06cc\u06a9\u0627\u0631\u0688 \u067e\u0631 \u0632\u0628\u0627\u0646 \u06c1\u0646\u062f\u06cc \u062f\u0631\u062c \u06c1\u06d2 \u0645\u06af\u0631 \u06cc\u06c1 \u062f\u0631\u062d\u0642\u06cc\u0642\u062a \u0627\u06cc\u06a9 \u067e\u0648\u0644\u0634 \u0627\u0644\u06cc\u06a9\u0679\u0631\u0648/\u06c1\u0627\u0624\u0633 \u0631\u06cc\u06a9\u0627\u0631\u0688 \u06c1\u06d2 \u2014 \u063a\u0644\u0637 \u0679\u06cc\u06af\u06d4"},{"i":38,"a":"Vkay Rapper","t":"VKAY _ Meri Khushi _ Latest 2021 Love Feel MP3 Music Song (Hindi Rap Songs) _ VK\u2206Y 2021 (1)","p":"Audius","g":"hindi","c":"playable_only","lic":"All rights reserved","lu":null,"u":"https://audius.co/hiphopgangster2/vkay-_-meri-khushi-_-latest-2021-love-feel-mp3-music-song-hindi-rap-songs-_-vk\u2206y-2021-1","e":"https://audius.co/embed/track/pR8xm?flavor=card","eh":480},{"i":39,"a":"\u0646\u0627\u0645 \u062f\u0631\u062c \u0646\u06c1\u06cc\u06ba","t":"hindi-song-\"fauji hoon\"-deshbhakti","p":"Audius","g":"hindi","c":"rights_unclear","lic":"None stated (license field is null in the API record)","lu":null,"u":"https://audius.co/julioyyt565d54s/hindi-song-quotfauji-hoonquot-deshbhakti"},{"i":40,"a":"NFThunk","t":"Vibe of Love \u2764 | Hindi Love Song Mashup 2025","p":"Audius","g":"hindi","c":"rights_unclear","lic":"None stated (license field is null in the API record)","lu":null,"u":"https://audius.co/NFThunk/vibe-of-love-\u2764-|-hindi-love-song-mashup-2025-1"},{"i":41,"a":"lenmorzh","t":"Madhushala (A Capella)","p":"ccMixter","g":"hindi","c":"full_verified_personal_nc","lic":"Creative Commons Attribution Noncommercial (3.0)","lu":"http://creativecommons.org/licenses/by-nc/3.0/","u":"https://ccmixter.org/files/lenmorzh/11304","dl":"https://ccmixter.org/files/lenmorzh/11304","ne":"ccMixter \u06a9\u0627 \u06a9\u0648\u0626\u06cc \u0622\u0641\u06cc\u0634\u0644 \u0627\u06cc\u0645\u0628\u06cc\u0688 \u067e\u0644\u06cc\u0626\u0631 \u062f\u0633\u062a\u06cc\u0627\u0628 \u0646\u06c1\u06cc\u06ba \u0627\u0648\u0631 \u0627\u0633 \u06a9\u06cc \u0641\u0627\u0626\u0644\u06cc\u06ba \u0628\u06cc\u0631\u0648\u0646\u06cc \u0633\u0627\u0626\u0679\u0633 \u067e\u0631 \u0686\u0644\u0646\u06d2 \u0633\u06d2 \u0645\u062d\u0641\u0648\u0638 (hotlink-protected) \u06c1\u06cc\u06ba\u060c \u0627\u0633 \u0644\u06cc\u06d2 \u06cc\u06c1\u0627\u06ba \u067e\u0644\u06d2 \u0628\u06cc\u06a9 \u062f\u0633\u062a\u06cc\u0627\u0628 \u0646\u06c1\u06cc\u06ba \u2014 \u06a9\u0686\u06be \u0628\u06be\u06cc \u062f\u0648\u0628\u0627\u0631\u06c1 \u0645\u06cc\u0632\u0628\u0627\u0646\u06cc \u0646\u06c1\u06cc\u06ba \u06a9\u06cc\u0627 \u06af\u06cc\u0627\u06d4"},{"i":42,"a":"Reiswerk","t":"We are more","p":"ccMixter","g":"hindi","c":"full_verified_commercial","lic":"Creative Commons Attribution (3.0)","lu":"http://creativecommons.org/licenses/by/3.0/","u":"https://ccmixter.org/files/Reiswerk/59581","dl":"https://ccmixter.org/files/Reiswerk/59581","ne":"ccMixter \u06a9\u0627 \u06a9\u0648\u0626\u06cc \u0622\u0641\u06cc\u0634\u0644 \u0627\u06cc\u0645\u0628\u06cc\u0688 \u067e\u0644\u06cc\u0626\u0631 \u062f\u0633\u062a\u06cc\u0627\u0628 \u0646\u06c1\u06cc\u06ba \u0627\u0648\u0631 \u0627\u0633 \u06a9\u06cc \u0641\u0627\u0626\u0644\u06cc\u06ba \u0628\u06cc\u0631\u0648\u0646\u06cc \u0633\u0627\u0626\u0679\u0633 \u067e\u0631 \u0686\u0644\u0646\u06d2 \u0633\u06d2 \u0645\u062d\u0641\u0648\u0638 (hotlink-protected) \u06c1\u06cc\u06ba\u060c \u0627\u0633 \u0644\u06cc\u06d2 \u06cc\u06c1\u0627\u06ba \u067e\u0644\u06d2 \u0628\u06cc\u06a9 \u062f\u0633\u062a\u06cc\u0627\u0628 \u0646\u06c1\u06cc\u06ba \u2014 \u06a9\u0686\u06be \u0628\u06be\u06cc \u062f\u0648\u0628\u0627\u0631\u06c1 \u0645\u06cc\u0632\u0628\u0627\u0646\u06cc \u0646\u06c1\u06cc\u06ba \u06a9\u06cc\u0627 \u06af\u06cc\u0627\u06d4","n":"\u06c1\u0646\u062f\u06cc \u0679\u06cc\u06af \u0627\u0648\u0631 \u0633\u0627\u0632\u0648\u06ba (\u0633\u062a\u0627\u0631\u060c \u06c1\u0627\u0631\u0645\u0648\u0646\u06cc\u0645\u060c \u0637\u0628\u0644\u06c1) \u06a9\u06cc \u0628\u0646\u06cc\u0627\u062f \u067e\u0631 \u0634\u0627\u0645\u0644 \u06c1\u06d2\u061b \u06c1\u0646\u062f\u06cc \u0622\u0648\u0627\u0632 \u06a9\u06cc \u062a\u0635\u062f\u06cc\u0642 \u0646\u06c1\u06cc\u06ba\u06d4"},{"i":43,"a":"bigbonobo","t":"Like in Bollywood","p":"ccMixter","g":"hindi","c":"full_verified_personal_nc","lic":"Creative Commons Attribution Noncommercial (3.0)","lu":"http://creativecommons.org/licenses/by-nc/3.0/","u":"https://ccmixter.org/files/bigbonobo/26450","dl":"https://ccmixter.org/files/bigbonobo/26450","ne":"ccMixter \u06a9\u0627 \u06a9\u0648\u0626\u06cc \u0622\u0641\u06cc\u0634\u0644 \u0627\u06cc\u0645\u0628\u06cc\u0688 \u067e\u0644\u06cc\u0626\u0631 \u062f\u0633\u062a\u06cc\u0627\u0628 \u0646\u06c1\u06cc\u06ba \u0627\u0648\u0631 \u0627\u0633 \u06a9\u06cc \u0641\u0627\u0626\u0644\u06cc\u06ba \u0628\u06cc\u0631\u0648\u0646\u06cc \u0633\u0627\u0626\u0679\u0633 \u067e\u0631 \u0686\u0644\u0646\u06d2 \u0633\u06d2 \u0645\u062d\u0641\u0648\u0638 (hotlink-protected) \u06c1\u06cc\u06ba\u060c \u0627\u0633 \u0644\u06cc\u06d2 \u06cc\u06c1\u0627\u06ba \u067e\u0644\u06d2 \u0628\u06cc\u06a9 \u062f\u0633\u062a\u06cc\u0627\u0628 \u0646\u06c1\u06cc\u06ba \u2014 \u06a9\u0686\u06be \u0628\u06be\u06cc \u062f\u0648\u0628\u0627\u0631\u06c1 \u0645\u06cc\u0632\u0628\u0627\u0646\u06cc \u0646\u06c1\u06cc\u06ba \u06a9\u06cc\u0627 \u06af\u06cc\u0627\u06d4","n":"\u00abhindi\u00bb \u0679\u06cc\u06af \u0627\u067e \u0644\u0648\u0688\u0631 \u06a9\u0627 \u0644\u06af\u0627\u06cc\u0627 \u06c1\u0648\u0627 \u06c1\u06d2\u061b \u0622\u0648\u0627\u0632 \u06a9\u06cc \u0632\u0628\u0627\u0646 \u0631\u06cc\u06a9\u0627\u0631\u0688 \u0633\u06d2 \u062a\u0635\u062f\u06cc\u0642 \u0634\u062f\u06c1 \u0646\u06c1\u06cc\u06ba\u06d4"},{"i":44,"a":"VibeDepot","t":"Hindi Free Music","p":"Free Music Archive","g":"hindi","c":"full_verified_commercial","lic":"Attribution-NoDerivatives 4.0 International (CC BY-ND 4.0)","lu":null,"u":"https://freemusicarchive.org/music/vibedepot/hindi/hindi-free-music/","dl":"https://freemusicarchive.org/music/vibedepot/hindi/hindi-free-music/","ne":"Free Music Archive \u06a9\u0627 \u0622\u0641\u06cc\u0634\u0644 \u067e\u0644\u06cc\u0626\u0631 \u0627\u0633 \u0635\u0641\u062d\u06d2 \u0645\u06cc\u06ba \u0627\u06cc\u0645\u0628\u06cc\u0688 \u0646\u06c1\u06cc\u06ba \u06c1\u0648 \u0633\u06a9\u062a\u0627\u060c \u0627\u0633 \u0644\u06cc\u06d2 \u06cc\u06c1\u0627\u06ba \u067e\u0644\u06d2 \u0628\u06cc\u06a9 \u062f\u0633\u062a\u06cc\u0627\u0628 \u0646\u06c1\u06cc\u06ba \u2014 \u06a9\u0686\u06be \u0628\u06be\u06cc \u062f\u0648\u0628\u0627\u0631\u06c1 \u0645\u06cc\u0632\u0628\u0627\u0646\u06cc \u0646\u06c1\u06cc\u06ba \u06a9\u06cc\u0627 \u06af\u06cc\u0627\u06d4 \u0688\u0627\u0624\u0646 \u0644\u0648\u0688 \u0627\u0635\u0644 \u0645\u0627\u062e\u0630 \u0633\u06d2 \u0646\u06cc\u0686\u06d2 \u062f\u06cc\u0627 \u06af\u06cc\u0627 \u06c1\u06d2\u06d4","n":"\u0633\u0627\u0632\u06cc\u0646\u06c1 \u067e\u0631\u0648\u0688\u06a9\u0634\u0646 \u0645\u06cc\u0648\u0632\u06a9 \u06c1\u06d2\u061b \u06c1\u0646\u062f\u06cc \u0632\u0628\u0627\u0646 \u06a9\u0627 \u06af\u0627\u0646\u0627 \u0646\u06c1\u06cc\u06ba\u06d4"},{"i":45,"a":"VibeDepot","t":"Hindi No Copyright Music","p":"Free Music Archive","g":"hindi","c":"full_verified_commercial","lic":"Attribution-NoDerivatives 4.0 International (CC BY-ND 4.0)","lu":null,"u":"https://freemusicarchive.org/music/vibedepot/hindi/hindi-no-copyright-music/","dl":"https://freemusicarchive.org/music/vibedepot/hindi/hindi-no-copyright-music/","ne":"Free Music Archive \u06a9\u0627 \u0622\u0641\u06cc\u0634\u0644 \u067e\u0644\u06cc\u0626\u0631 \u0627\u0633 \u0635\u0641\u062d\u06d2 \u0645\u06cc\u06ba \u0627\u06cc\u0645\u0628\u06cc\u0688 \u0646\u06c1\u06cc\u06ba \u06c1\u0648 \u0633\u06a9\u062a\u0627\u060c \u0627\u0633 \u0644\u06cc\u06d2 \u06cc\u06c1\u0627\u06ba \u067e\u0644\u06d2 \u0628\u06cc\u06a9 \u062f\u0633\u062a\u06cc\u0627\u0628 \u0646\u06c1\u06cc\u06ba \u2014 \u06a9\u0686\u06be \u0628\u06be\u06cc \u062f\u0648\u0628\u0627\u0631\u06c1 \u0645\u06cc\u0632\u0628\u0627\u0646\u06cc \u0646\u06c1\u06cc\u06ba \u06a9\u06cc\u0627 \u06af\u06cc\u0627\u06d4 \u0688\u0627\u0624\u0646 \u0644\u0648\u0688 \u0627\u0635\u0644 \u0645\u0627\u062e\u0630 \u0633\u06d2 \u0646\u06cc\u0686\u06d2 \u062f\u06cc\u0627 \u06af\u06cc\u0627 \u06c1\u06d2\u06d4","n":"\u0639\u0646\u0648\u0627\u0646 \u0645\u06cc\u06ba \u00abNo Copyright\u00bb \u0644\u06a9\u06be\u0627 \u06c1\u06d2 \u0645\u06af\u0631 \u0627\u0635\u0644 \u0644\u0627\u0626\u0633\u0646\u0633 CC BY-ND 4.0 \u06c1\u06d2 \u2014 \u0641\u06cc\u0635\u0644\u06c1 \u06c1\u0645\u06cc\u0634\u06c1 \u0627\u0635\u0644 \u0644\u0627\u0626\u0633\u0646\u0633 \u0633\u06d2 \u06c1\u0648\u062a\u0627 \u06c1\u06d2\u06d4"},{"i":46,"a":"Lakhwinder Wadali","t":"Lajpalan","p":"Internet Archive","g":"regional","c":"rights_unclear","lic":"None stated","lu":null,"u":"https://archive.org/details/flac-lakhwinder-wadali-lajpalan-feaed21c"},{"i":47,"a":"Bloodhearth","t":"Bloodhearth - Put Punjabi","p":"Internet Archive","g":"regional","c":"rights_unclear","lic":"None stated","lu":null,"u":"https://archive.org/details/bloodhearth-put-punjabi"},{"i":48,"a":"\u0646\u0627\u0645 \u062f\u0631\u062c \u0646\u06c1\u06cc\u06ba","t":"Ishq Ka Waada","p":"Internet Archive","g":"regional","c":"rights_unclear","lic":"Public Domain Mark 1.0 (uploader-applied, as recorded)","lu":null,"u":"https://archive.org/details/IshqKaWaada12"},{"i":49,"a":"Umar Hayat Durani & friends","t":"Neemgaree armanoona Album-13 (umar hayat durani & friends)","p":"Internet Archive","g":"regional","c":"rights_unclear","lic":"None stated","lu":null,"u":"https://archive.org/details/Neemgari-armanoona-album-13"},{"i":50,"a":"Anis Ansari","t":"Tomar Preme","p":"Internet Archive","g":"regional","c":"rights_unclear","lic":"None stated","lu":null,"u":"https://archive.org/details/TomarPreme"},{"i":51,"a":"Obaidur Rahman","t":"Ei Duniya Fana Hobe by Obaidur rahman","p":"Internet Archive","g":"regional","c":"rights_unclear","lic":"None stated","lu":null,"u":"https://archive.org/details/eiduniy"},{"i":52,"a":"YKK","t":"Mashup Punjabi Vs Hindi","p":"Audius","g":"regional","c":"rights_unclear","lic":"All rights reserved (as recorded on the upload)","lu":null,"u":"https://audius.co/ykashni/mashup-punjabi-vs-hindi"},{"i":53,"a":"Paul Lee","t":"Bring ya Booty vs The Real Punjabi (Paul Lee VIP MIX)","p":"Audius","g":"regional","c":"rights_unclear","lic":"All rights reserved","lu":null,"u":"https://audius.co/MayhemPaul/bring-ya-booty-vs-the-real-punjabi-paul-lee-vip-mix-261261"},{"i":54,"a":"Shah Farooq","t":"Pashto New Tapay 2019 - Khair De Akheri Zal Ye Dedan Okra - Shah Farooq 2019 - Pashto New Songs 2019","p":"Audius","g":"regional","c":"rights_unclear","lic":"All rights reserved (as recorded on the upload)","lu":null,"u":"https://audius.co/hamidghlami4/pashto-new-tapay-2019-khair-de-akheri-zal-ye-dedan-okra-shah-farooq-2019-pashto-new-songs-2019"},{"i":55,"a":"\u0646\u0627\u0645 \u062f\u0631\u062c \u0646\u06c1\u06cc\u06ba","t":"Ishq_De_Qalandar_Krama_Pashto_Song____New_Trending_Tiktok_Song(128kbps)","p":"Audius","g":"regional","c":"rights_unclear","lic":"All rights reserved (as recorded on the upload)","lu":null,"u":"https://audius.co/Ariyankhan/ishq_de_qalandar_krama_pashto_song____new_trending_tiktok_song128kbps"},{"i":56,"a":"Safary","t":"NaipurBeaT","p":"ccMixter","g":"regional","c":"doubtful_license","lic":"Sampling Plus 1.0","lu":"http://creativecommons.org/licenses/sampling+/1.0/","u":"https://ccmixter.org/files/Safary/28768","ne":"ccMixter \u06a9\u0627 \u06a9\u0648\u0626\u06cc \u0622\u0641\u06cc\u0634\u0644 \u0627\u06cc\u0645\u0628\u06cc\u0688 \u067e\u0644\u06cc\u0626\u0631 \u062f\u0633\u062a\u06cc\u0627\u0628 \u0646\u06c1\u06cc\u06ba \u0627\u0648\u0631 \u0627\u0633 \u06a9\u06cc \u0641\u0627\u0626\u0644\u06cc\u06ba \u0628\u06cc\u0631\u0648\u0646\u06cc \u0633\u0627\u0626\u0679\u0633 \u067e\u0631 \u0686\u0644\u0646\u06d2 \u0633\u06d2 \u0645\u062d\u0641\u0648\u0638 (hotlink-protected) \u06c1\u06cc\u06ba\u060c \u0627\u0633 \u0644\u06cc\u06d2 \u06cc\u06c1\u0627\u06ba \u067e\u0644\u06d2 \u0628\u06cc\u06a9 \u062f\u0633\u062a\u06cc\u0627\u0628 \u0646\u06c1\u06cc\u06ba \u2014 \u06a9\u0686\u06be \u0628\u06be\u06cc \u062f\u0648\u0628\u0627\u0631\u06c1 \u0645\u06cc\u0632\u0628\u0627\u0646\u06cc \u0646\u06c1\u06cc\u06ba \u06a9\u06cc\u0627 \u06af\u06cc\u0627\u06d4","n":"Sampling Plus 1.0 \u0627\u06cc\u06a9 \u0631\u06cc\u0679\u0627\u0626\u0631\u0688 \u0644\u0627\u0626\u0633\u0646\u0633 \u0642\u0633\u0645 \u06c1\u06d2\u061b \u0645\u06a9\u0645\u0644 \u0679\u0631\u06cc\u06a9 \u06a9\u06cc \u062a\u0642\u0633\u06cc\u0645 \u06a9\u06cc \u0634\u0631\u0627\u0626\u0637 \u0645\u062d\u062f\u0648\u062f \u06c1\u06cc\u06ba\u060c \u0627\u0633\u06cc \u0644\u06cc\u06d2 \u0688\u0627\u0624\u0646 \u0644\u0648\u0688 \u0628\u0646\u062f \u06c1\u06d2\u06d4"},{"i":57,"a":"Oranj Punjabi","t":"Dragon Forever","p":"Free Music Archive","g":"regional","c":"full_verified_personal_nc","lic":"Attribution-NonCommercial-NoDerivatives (aka Music Sharing) 3.0 International (CC BY-NC-ND 3.0)","lu":null,"u":"https://freemusicarchive.org/music/Oranj_Punjabi/Oranj_Punjabi__Cooper_Bowman_Split/Dragon_Forever/","dl":"https://freemusicarchive.org/music/Oranj_Punjabi/Oranj_Punjabi__Cooper_Bowman_Split/Dragon_Forever/","ne":"Free Music Archive \u06a9\u0627 \u0622\u0641\u06cc\u0634\u0644 \u067e\u0644\u06cc\u0626\u0631 \u0627\u0633 \u0635\u0641\u062d\u06d2 \u0645\u06cc\u06ba \u0627\u06cc\u0645\u0628\u06cc\u0688 \u0646\u06c1\u06cc\u06ba \u06c1\u0648 \u0633\u06a9\u062a\u0627\u060c \u0627\u0633 \u0644\u06cc\u06d2 \u06cc\u06c1\u0627\u06ba \u067e\u0644\u06d2 \u0628\u06cc\u06a9 \u062f\u0633\u062a\u06cc\u0627\u0628 \u0646\u06c1\u06cc\u06ba \u2014 \u06a9\u0686\u06be \u0628\u06be\u06cc \u062f\u0648\u0628\u0627\u0631\u06c1 \u0645\u06cc\u0632\u0628\u0627\u0646\u06cc \u0646\u06c1\u06cc\u06ba \u06a9\u06cc\u0627 \u06af\u06cc\u0627\u06d4 \u0688\u0627\u0624\u0646 \u0644\u0648\u0688 \u0627\u0635\u0644 \u0645\u0627\u062e\u0630 \u0633\u06d2 \u0646\u06cc\u0686\u06d2 \u062f\u06cc\u0627 \u06af\u06cc\u0627 \u06c1\u06d2\u06d4","n":"\u0622\u0648\u0627\u0632 \u06a9\u06cc \u0632\u0628\u0627\u0646 \u0679\u0631\u06cc\u06a9 \u06a9\u06d2 \u0635\u0641\u062d\u06d2 \u067e\u0631 \u062f\u0631\u062c \u0646\u06c1\u06cc\u06ba\u06d4"},{"i":58,"a":"Alec K. Redfearn & the Eyesores","t":"Punjabi Watery Grave","p":"Free Music Archive","g":"regional","c":"full_verified_personal_nc","lic":"Attribution-Noncommercial-No Derivative Works 3.0 United States (CC BY-NC-ND 3.0 US)","lu":null,"u":"https://freemusicarchive.org/music/Alec_K_Redfearn_and_the_Eyesores/The_Quiet_Room/Punjabi_Watery_Grave/","dl":"https://freemusicarchive.org/music/Alec_K_Redfearn_and_the_Eyesores/The_Quiet_Room/Punjabi_Watery_Grave/","ne":"Free Music Archive \u06a9\u0627 \u0622\u0641\u06cc\u0634\u0644 \u067e\u0644\u06cc\u0626\u0631 \u0627\u0633 \u0635\u0641\u062d\u06d2 \u0645\u06cc\u06ba \u0627\u06cc\u0645\u0628\u06cc\u0688 \u0646\u06c1\u06cc\u06ba \u06c1\u0648 \u0633\u06a9\u062a\u0627\u060c \u0627\u0633 \u0644\u06cc\u06d2 \u06cc\u06c1\u0627\u06ba \u067e\u0644\u06d2 \u0628\u06cc\u06a9 \u062f\u0633\u062a\u06cc\u0627\u0628 \u0646\u06c1\u06cc\u06ba \u2014 \u06a9\u0686\u06be \u0628\u06be\u06cc \u062f\u0648\u0628\u0627\u0631\u06c1 \u0645\u06cc\u0632\u0628\u0627\u0646\u06cc \u0646\u06c1\u06cc\u06ba \u06a9\u06cc\u0627 \u06af\u06cc\u0627\u06d4 \u0688\u0627\u0624\u0646 \u0644\u0648\u0688 \u0627\u0635\u0644 \u0645\u0627\u062e\u0630 \u0633\u06d2 \u0646\u06cc\u0686\u06d2 \u062f\u06cc\u0627 \u06af\u06cc\u0627 \u06c1\u06d2\u06d4","n":"\u00abPunjabi\u00bb \u0635\u0631\u0641 \u0639\u0646\u0648\u0627\u0646 \u0645\u06cc\u06ba \u06c1\u06d2\u061b \u06cc\u06c1 \u0627\u0645\u0631\u06cc\u06a9\u06cc \u0641\u0648\u06a9 \u0628\u06cc\u0646\u0688 \u06a9\u0627 \u0679\u0631\u06cc\u06a9 \u06c1\u06d2\u060c \u067e\u0646\u062c\u0627\u0628\u06cc \u0632\u0628\u0627\u0646 \u06a9\u06cc \u0631\u06cc\u06a9\u0627\u0631\u0688\u0646\u06af \u0646\u06c1\u06cc\u06ba\u06d4"},{"i":59,"a":"Alex Morgan","t":"Punjabi Bhangra Energy Short Burst","p":"Free Music Archive","g":"regional","c":"rights_unclear","lic":"Not visible in the fetched page extract","lu":null,"u":"https://freemusicarchive.org/music/alex-morgan/kids-comedy-holiday/punjabi-bhangra-energy-short-burst/"},{"i":60,"a":"SOLARIS","t":"Sufi Qawwali","p":"Jamendo","g":"regional","c":"full_verified_personal_nc","lic":"Creative Commons BY-NC-SA (icons cc-by + cc-nc + cc-sa shown on track page; name not spelled out on the page)","lu":null,"u":"https://www.jamendo.com/track/154285/sufi-qawwali","dl":"https://www.jamendo.com/track/154285/sufi-qawwali","ne":"Jamendo \u06a9\u0627 \u0622\u0641\u06cc\u0634\u0644 \u067e\u0644\u06cc\u0626\u0631 \u0627\u0633 \u0635\u0641\u062d\u06d2 \u0645\u06cc\u06ba \u0627\u06cc\u0645\u0628\u06cc\u0688 \u0646\u06c1\u06cc\u06ba \u06c1\u0648 \u0633\u06a9\u062a\u0627\u060c \u0627\u0633 \u0644\u06cc\u06d2 \u06cc\u06c1\u0627\u06ba \u067e\u0644\u06d2 \u0628\u06cc\u06a9 \u062f\u0633\u062a\u06cc\u0627\u0628 \u0646\u06c1\u06cc\u06ba \u2014 \u06a9\u0686\u06be \u0628\u06be\u06cc \u062f\u0648\u0628\u0627\u0631\u06c1 \u0645\u06cc\u0632\u0628\u0627\u0646\u06cc \u0646\u06c1\u06cc\u06ba \u06a9\u06cc\u0627 \u06af\u06cc\u0627\u06d4 \u0688\u0627\u0624\u0646 \u0644\u0648\u0688 \u0627\u0635\u0644 \u0645\u0627\u062e\u0630 \u0633\u06d2 \u0646\u06cc\u0686\u06d2 \u062f\u06cc\u0627 \u06af\u06cc\u0627 \u06c1\u06d2\u06d4","tr":1},{"i":61,"a":"TARAS BUL'BA","t":"Urdu","p":"Jamendo","g":"urdu","c":"full_verified_personal_nc","lic":"Creative Commons BY-NC-ND (icons cc-by + cc-nc + cc-nd on track page)","lu":null,"u":"https://www.jamendo.com/track/203205/urdu","dl":"https://www.jamendo.com/track/203205/urdu","ne":"Jamendo \u06a9\u0627 \u0622\u0641\u06cc\u0634\u0644 \u067e\u0644\u06cc\u0626\u0631 \u0627\u0633 \u0635\u0641\u062d\u06d2 \u0645\u06cc\u06ba \u0627\u06cc\u0645\u0628\u06cc\u0688 \u0646\u06c1\u06cc\u06ba \u06c1\u0648 \u0633\u06a9\u062a\u0627\u060c \u0627\u0633 \u0644\u06cc\u06d2 \u06cc\u06c1\u0627\u06ba \u067e\u0644\u06d2 \u0628\u06cc\u06a9 \u062f\u0633\u062a\u06cc\u0627\u0628 \u0646\u06c1\u06cc\u06ba \u2014 \u06a9\u0686\u06be \u0628\u06be\u06cc \u062f\u0648\u0628\u0627\u0631\u06c1 \u0645\u06cc\u0632\u0628\u0627\u0646\u06cc \u0646\u06c1\u06cc\u06ba \u06a9\u06cc\u0627 \u06af\u06cc\u0627\u06d4 \u0688\u0627\u0624\u0646 \u0644\u0648\u0688 \u0627\u0635\u0644 \u0645\u0627\u062e\u0630 \u0633\u06d2 \u0646\u06cc\u0686\u06d2 \u062f\u06cc\u0627 \u06af\u06cc\u0627 \u06c1\u06d2\u06d4","tr":1},{"i":62,"a":"SOUNDORE","t":"Hindi","p":"Jamendo","g":"hindi","c":"full_verified_personal_nc","lic":"Creative Commons BY-NC-ND (icons cc-by + cc-nc + cc-nd on track page)","lu":null,"u":"https://www.jamendo.com/track/2292250/hindi","dl":"https://www.jamendo.com/track/2292250/hindi","ne":"Jamendo \u06a9\u0627 \u0622\u0641\u06cc\u0634\u0644 \u067e\u0644\u06cc\u0626\u0631 \u0627\u0633 \u0635\u0641\u062d\u06d2 \u0645\u06cc\u06ba \u0627\u06cc\u0645\u0628\u06cc\u0688 \u0646\u06c1\u06cc\u06ba \u06c1\u0648 \u0633\u06a9\u062a\u0627\u060c \u0627\u0633 \u0644\u06cc\u06d2 \u06cc\u06c1\u0627\u06ba \u067e\u0644\u06d2 \u0628\u06cc\u06a9 \u062f\u0633\u062a\u06cc\u0627\u0628 \u0646\u06c1\u06cc\u06ba \u2014 \u06a9\u0686\u06be \u0628\u06be\u06cc \u062f\u0648\u0628\u0627\u0631\u06c1 \u0645\u06cc\u0632\u0628\u0627\u0646\u06cc \u0646\u06c1\u06cc\u06ba \u06a9\u06cc\u0627 \u06af\u06cc\u0627\u06d4 \u0688\u0627\u0624\u0646 \u0644\u0648\u0688 \u0627\u0635\u0644 \u0645\u0627\u062e\u0630 \u0633\u06d2 \u0646\u06cc\u0686\u06d2 \u062f\u06cc\u0627 \u06af\u06cc\u0627 \u06c1\u06d2\u06d4","tr":1},{"i":63,"a":"SUFI PARVEEN","t":"Mere Bullan Te Naa Dilwar Da | Sufi Parveen","p":"Jamendo","g":"regional","c":"full_verified_personal_nc","lic":"Creative Commons BY-NC-ND (icons cc-by + cc-nc + cc-nd on track page)","lu":null,"u":"https://www.jamendo.com/track/1406094/mere-bullan-te-naa-dilwar-da-or-sufi-parveen","dl":"https://www.jamendo.com/track/1406094/mere-bullan-te-naa-dilwar-da-or-sufi-parveen","ne":"Jamendo \u06a9\u0627 \u0622\u0641\u06cc\u0634\u0644 \u067e\u0644\u06cc\u0626\u0631 \u0627\u0633 \u0635\u0641\u062d\u06d2 \u0645\u06cc\u06ba \u0627\u06cc\u0645\u0628\u06cc\u0688 \u0646\u06c1\u06cc\u06ba \u06c1\u0648 \u0633\u06a9\u062a\u0627\u060c \u0627\u0633 \u0644\u06cc\u06d2 \u06cc\u06c1\u0627\u06ba \u067e\u0644\u06d2 \u0628\u06cc\u06a9 \u062f\u0633\u062a\u06cc\u0627\u0628 \u0646\u06c1\u06cc\u06ba \u2014 \u06a9\u0686\u06be \u0628\u06be\u06cc \u062f\u0648\u0628\u0627\u0631\u06c1 \u0645\u06cc\u0632\u0628\u0627\u0646\u06cc \u0646\u06c1\u06cc\u06ba \u06a9\u06cc\u0627 \u06af\u06cc\u0627\u06d4 \u0688\u0627\u0624\u0646 \u0644\u0648\u0688 \u0627\u0635\u0644 \u0645\u0627\u062e\u0630 \u0633\u06d2 \u0646\u06cc\u0686\u06d2 \u062f\u06cc\u0627 \u06af\u06cc\u0627 \u06c1\u06d2\u06d4","tr":1}];

(function(){
  var DATA = window.__RESEARCH_CATALOGUE__ || [];
  function esc(s){ return String(s == null ? '' : s).replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;').replace(/"/g,'&quot;'); }
  var CLS = {
    full_verified_personal_nc: { badge:'✓ تصدیق شدہ ڈاؤن لوڈ — صرف ذاتی، غیر تجارتی استعمال کے لیے', cls:'ok' },
    full_verified_commercial:  { badge:'✓ تصدیق شدہ ڈاؤن لوڈ کی اجازت', cls:'ok' },
    playable_only:             { badge:'▶ سٹریمنگ کی تصدیق شدہ — ڈاؤن لوڈ نہیں', cls:'play' },
    doubtful_license:          { badge:'لائسنس مشکوک — الگ قانونی جانچ باقی', cls:'doubt' },
    rights_unclear:            { badge:'حقوق غیر واضح — صرف فہرست', cls:'unclear' },
    sample_excluded:           { badge:'نمونہ — مکمل گانا نہیں', cls:'sample' }
  };
  var GROUPS = [
    ['urdu','اردو'], ['sindhi','سندھی'], ['hindi','ہندی'],
    ['jalal','جلال چانڈیو — انٹرنیٹ آرکائیو آئٹمز'],
    ['regional','علاقائی — پنجابی، سرائیکی، بلوچی، پشتو، بنگالی و صوفی'],
    ['samples','نمونے (مکمل گانے نہیں)']
  ];
  function srcLine(r){
    var id = String(r.u || '').replace(/^https?:\/\//, '');
    return '<p class="md-src"><span lang="ur">ماخذ:</span> <b>' + esc(r.p) + '</b> · ' + esc(id) + '</p>';
  }
  function licLine(r, linkable){
    if(!r.lic) return '<p class="rc-licline"><span lang="ur">لائسنس:</span> <span lang="ur">درج نہیں</span></p>';
    var name = esc(r.lic);
    if(linkable && r.lu) name = '<a href="' + esc(r.lu) + '" target="_blank" rel="noopener">' + name + '</a>';
    return '<p class="rc-licline"><span lang="ur">لائسنس:</span> ' + name + '</p>';
  }
  function playerHTML(r){
    if(r.e){
      return '<div class="md-pframe"><iframe class="md-pembed" src="' + esc(r.e) + '" height="' + (r.eh || 352) + '" loading="lazy" referrerpolicy="no-referrer-when-downgrade" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" allowfullscreen title="' + esc(r.p) + ' player — ' + esc(r.t) + '"></iframe>'
        + '<div class="md-pveil"><span>Loading official ' + esc(r.p) + ' player…</span><button type="button" class="btn sm md-preload">↻ Reload player</button></div>'
        + '<button type="button" class="md-preload md-preload-corner" title="Reload player" aria-label="Reload ' + esc(r.p) + ' player">↻</button></div>';
    }
    if(r.ne) return '<div class="rc-noembed" lang="ur">' + esc(r.ne) + '</div>';
    return '';
  }
  function actionsHTML(r){
    var h = '<div class="rc-dlrow">';
    if(r.c === 'full_verified_personal_nc' || r.c === 'full_verified_commercial'){
      h += '<span class="md-dl-status ok">✅ Download Allowed</span>';
      if(r.dl) h += '<a class="btn sm" href="' + esc(r.dl) + '"' + (r.dl.indexOf('.mp3') > -1 ? '' : ' target="_blank" rel="noopener"') + '>⬇ <span lang="ur">اصل ماخذ سے ڈاؤن لوڈ</span> (' + esc(r.p) + ')</a>';
      if(r.c === 'full_verified_personal_nc') h += '<span class="rc-ncnote" lang="ur">صرف ذاتی، غیر تجارتی استعمال کے لیے</span>';
    } else if(r.c === 'playable_only'){
      h += '<span class="md-dl-status locked">🔒 Streaming Only</span><span class="rc-ncnote" lang="ur">اس ریکارڈ کے حقوق ڈاؤن لوڈ کی اجازت نہیں دیتے — سننا سائٹ کے اندر ممکن ہے</span>';
    } else if(r.c === 'doubtful_license'){
      h += '<span class="md-dl-status unverified">⚠️ Download Unavailable</span><span class="rc-ncnote" lang="ur">اس ریکارڈ کے حقوق ڈاؤن لوڈ کی اجازت نہیں دیتے — الگ قانونی جانچ باقی ہے</span>';
    }
    h += '<button type="button" class="md-copybtn" data-rccopy="' + esc(r.u) + '">🔗 لنک کاپی کریں</button>';
    return h + '</div>';
  }
  function cardHTML(r){
    var meta = CLS[r.c] || CLS.rights_unclear;
    var listing = (r.c === 'rights_unclear' || r.c === 'sample_excluded');
    var h = '<article class="md-profile rc-card" data-rc-class="' + esc(r.c) + '" data-rc-idx="' + r.i + '">';
    h += '<div><span class="rc-status ' + meta.cls + '" lang="ur">' + esc(meta.badge) + '</span>';
    if(r.e) h += '<span class="md-np-badge">🔊 Now playing</span>';
    h += '</div>';
    h += '<h3>' + esc(r.t) + '</h3>';
    h += '<p class="md-meta">' + esc(r.a) + (r.tr ? ' · <span lang="ur">البم آئٹم —</span> ' + r.tr + ' <span lang="ur">ٹریک</span>' : '') + '</p>';
    h += srcLine(r);
    h += licLine(r, !listing);
    if(r.n) h += '<p class="rc-note" lang="ur">' + esc(r.n) + '</p>';
    if(!listing) h += playerHTML(r);
    else h += '<p class="rc-listline" lang="ur">یہ ریکارڈ صرف فہرست میں ہے — اس کے حقوق واضح نہیں، اس لیے یہاں نہ چلایا جا سکتا ہے نہ ڈاؤن لوڈ۔</p>';
    h += actionsHTML(r);
    return h + '</article>';
  }

  /* ---------------- lawful link resolver (Downloader box) ---------------- */
  function rcNorm(u){
    return String(u || '').trim().toLowerCase().replace(/^https?:\/\//, '').replace(/^www\./, '').split(/[?#]/)[0].replace(/\/+$/, '');
  }
  function rcMatchRecord(raw){
    var pasted = String(raw || '').trim();
    if(!pasted) return null;
    var n = rcNorm(pasted), i, r;
    for(i = 0; i < DATA.length; i++){ if(rcNorm(DATA[i].u) === n) return DATA[i]; }
    var m;
    if((m = pasted.match(/archive\.org\/(?:details|embed|download)\/([^/?#]+)/i))){
      for(i = 0; i < DATA.length; i++){ r = DATA[i]; if(r.p === 'Internet Archive' && (r.u.indexOf('/details/' + m[1]) > -1 || (r.e && r.e.indexOf('/embed/' + m[1]) > -1) || (r.dl && r.dl.indexOf('/download/' + m[1] + '/') > -1))) return r; }
    }
    if((m = pasted.match(/ccmixter\.org\/files\/([^/]+)\/(\d+)/i))){
      for(i = 0; i < DATA.length; i++){ r = DATA[i]; if(r.p === 'ccMixter' && r.u.toLowerCase().indexOf('/files/' + m[1].toLowerCase() + '/' + m[2]) > -1) return r; }
    }
    if((m = pasted.match(/jamendo\.com\/track\/(\d+)/i))){
      for(i = 0; i < DATA.length; i++){ r = DATA[i]; if(r.p === 'Jamendo' && r.u.indexOf('/track/' + m[1] + '/') > -1) return r; }
    }
    if((m = pasted.match(/audius\.co\/embed\/track\/([A-Za-z0-9]+)/))){
      for(i = 0; i < DATA.length; i++){ r = DATA[i]; if(r.e && r.e.indexOf('/embed/track/' + m[1]) > -1) return r; }
    }
    return null;
  }
  function rcMatchDirectory(raw){
    var d = window.MUSIC_DIRECTORY;
    if(!d || !d.songs) return null;
    var pasted = String(raw || '').trim();
    if(!pasted) return null;
    var n = rcNorm(pasted);
    for(var i = 0; i < d.songs.length; i++){
      var s = d.songs[i];
      if(!s) continue;
      if(s.id && pasted === s.id) return s;
      var link = (typeof window.mdSongLink === 'function') ? window.mdSongLink(s) : '';
      if(link && rcNorm(link) === n) return s;
      if(s.embed_url && rcNorm(s.embed_url) === n) return s;
      if(s.audio_url && rcNorm(s.audio_url) === n) return s;
      if(s.source_url && rcNorm(s.source_url) === n) return s;
    }
    return null;
  }
  function rcMatchAny(raw){
    var r = rcMatchRecord(raw);
    if(r) return { kind:'record', rec:r };
    var s = rcMatchDirectory(raw);
    if(s) return { kind:'directory', song:s };
    return null;
  }
  function dirCardHTML(s){
    var h = '<article class="md-profile rc-card" data-rc-class="directory">';
    h += '<div><span class="rc-status play" lang="ur">مرکزی میوزک ڈائریکٹری میں موجود ہے</span></div>';
    h += '<h3>' + esc(s.title) + '</h3>';
    h += '<p class="md-meta">' + esc(s.artist || '') + '</p>';
    h += '<p class="md-src"><span lang="ur">ماخذ:</span> <b>' + esc(s.source_name || s.source_id || '') + '</b></p>';
    if(s.license_label) h += '<p class="rc-licline"><span lang="ur">لائسنس:</span> ' + esc(s.license_label) + '</p>';
    h += '<div class="rc-dlrow">';
    h += '<button type="button" class="btn sm" data-rcdirshow="' + esc(s.title) + '">🔎 <span lang="ur">ڈائریکٹری میں دکھائیں</span></button>';
    if(s.download_allowed && s.download_audio_url){
      h += '<span class="md-dl-status ok">✅ Download Allowed</span><a class="btn sm" href="' + esc(s.download_audio_url) + '">⬇ <span lang="ur">اصل ماخذ سے ڈاؤن لوڈ</span></a>';
    } else {
      h += '<span class="md-dl-status locked">🔒 Streaming Only</span><span class="rc-ncnote" lang="ur">اس گانے کے حقوق ڈاؤن لوڈ کی اجازت نہیں دیتے — سننا سائٹ کے اندر ڈائریکٹری سے ممکن ہے</span>';
    }
    var link = (typeof window.mdSongLink === 'function') ? window.mdSongLink(s) : '';
    if(link) h += '<button type="button" class="md-copybtn" data-rccopy="' + esc(link) + '">🔗 لنک کاپی کریں</button>';
    return h + '</div></article>';
  }
  function rcResolve(){
    var inp = document.getElementById('rcDlInput');
    var box = document.getElementById('rcDlResult');
    if(!inp || !box) return;
    var val = inp.value || '';
    if(!val.trim()){ box.innerHTML = '<p class="rc-noembed" lang="ur">پہلے اوپر والے خانے میں لنک لگائیں۔</p>'; return; }
    var hit = rcMatchAny(val);
    if(!hit){ box.innerHTML = '<p class="rc-noembed" lang="ur">یہ لنک ہماری قانونی فہرست میں نہیں ہے</p>'; return; }
    box.innerHTML = '<h4 class="rc-group" lang="ur">نتیجہ</h4>' + (hit.kind === 'record' ? cardHTML(hit.rec) : dirCardHTML(hit.song));
  }

  /* ---------------- shelf render ---------------- */
  function build(){
    var host = document.getElementById('researchShelf');
    if(!host || host.getAttribute('data-rc-built')) return;
    host.setAttribute('data-rc-built', '1');
    var counts = { dl:0, play:0, doubt:0, unclear:0, sample:0 };
    DATA.forEach(function(r){
      if(r.c === 'full_verified_personal_nc' || r.c === 'full_verified_commercial') counts.dl++;
      else if(r.c === 'playable_only') counts.play++;
      else if(r.c === 'doubtful_license') counts.doubt++;
      else if(r.c === 'rights_unclear') counts.unclear++;
      else if(r.c === 'sample_excluded') counts.sample++;
    });
    var h = '<div class="sec-h"><span class="secic" aria-hidden="true"><svg width="23" height="23" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><use href="#ic-music"></use></svg></span><h2><span lang="ur">مفت قانونی موسیقی — تحقیقی فہرست</span></h2></div>';
    h += '<p class="rc-intro" lang="ur">یہ فہرست تحقیق کے لیے ہے؛ ہر ریکارڈ کے ساتھ اس کا ماخذ اور لائسنس لکھا ہے؛ جن کے حقوق واضح نہیں وہ صرف فہرست میں ہیں، چلائے یا ڈاؤن لوڈ نہیں جا سکتے۔</p>';
    h += '<div class="rc-dl-box"><h3 lang="ur">⬇ ڈاؤن لوڈر — قانونی لنک چیک</h3>'
      + '<p class="rc-intro" lang="ur">کسی گانے کا لنک یہاں لگائیں؛ اگر وہ ہماری قانونی فہرست میں ہوا تو اس کے جائز آپشن یہیں دکھیں گے۔ یہ حصہ کوئی فائل نہیں اتارتا — صرف فہرست سے ملا کر جائز راستہ دکھاتا ہے۔</p>'
      + '<div class="rc-dl-form"><input type="url" id="rcDlInput" dir="ltr" placeholder="https://…" aria-label="Paste a song link"><button type="button" class="btn" id="rcDlBtn"><span lang="ur">چیک کریں</span></button></div>'
      + '<div id="rcDlResult"></div></div>';
    h += '<div class="rc-counts">'
      + '<span class="rc-pill"><b>' + DATA.length + '</b> <span lang="ur">ریکارڈ</span></span>'
      + '<span class="rc-pill"><b>' + counts.dl + '</b> <span lang="ur">تصدیق شدہ ڈاؤن لوڈ</span></span>'
      + '<span class="rc-pill"><b>' + counts.play + '</b> <span lang="ur">سٹریمنگ</span></span>'
      + '<span class="rc-pill"><b>' + counts.doubt + '</b> <span lang="ur">مشکوک لائسنس</span></span>'
      + '<span class="rc-pill"><b>' + counts.unclear + '</b> <span lang="ur">صرف فہرست</span></span>'
      + '<span class="rc-pill"><b>' + counts.sample + '</b> <span lang="ur">نمونے</span></span></div>';
    GROUPS.forEach(function(g){
      var rs = DATA.filter(function(r){ return r.g === g[0]; });
      if(!rs.length) return;
      h += '<h3 class="rc-group" lang="ur">' + esc(g[1]) + ' (' + rs.length + ')</h3>';
      rs.forEach(function(r){ h += cardHTML(r); });
    });
    host.innerHTML = h;
    var btn = document.getElementById('rcDlBtn');
    if(btn) btn.addEventListener('click', rcResolve);
    var inp = document.getElementById('rcDlInput');
    if(inp) inp.addEventListener('keydown', function(e){ if(e.key === 'Enter'){ e.preventDefault(); rcResolve(); } });
    host.addEventListener('click', function(e){
      var cp = e.target && e.target.closest ? e.target.closest('[data-rccopy]') : null;
      if(cp){
        var url = cp.getAttribute('data-rccopy');
        var done = function(){ var old = cp.textContent; cp.textContent = '✓ کاپی ہو گیا'; setTimeout(function(){ cp.textContent = old; }, 1400); };
        if(navigator.clipboard && navigator.clipboard.writeText){ navigator.clipboard.writeText(url).then(done).catch(function(){ rcCopyFallback(url); done(); }); }
        else { rcCopyFallback(url); done(); }
        return;
      }
      var ds = e.target && e.target.closest ? e.target.closest('[data-rcdirshow]') : null;
      if(ds){
        var title = ds.getAttribute('data-rcdirshow') || '';
        var tog = document.getElementById('musicFolderToggle');
        var fb = document.getElementById('musicFolderBody');
        if(tog && fb && fb.hidden) tog.click();
        var si = document.getElementById('mdSearch');
        if(si){ si.value = title; si.dispatchEvent(new Event('input', { bubbles:true })); }
        var panel = document.getElementById('mdDirPanel');
        if(panel && panel.scrollIntoView) panel.scrollIntoView({ behavior:'smooth', block:'start' });
      }
    });
  }
  function rcCopyFallback(text){
    try{
      var ta = document.createElement('textarea');
      ta.value = text; ta.style.position = 'fixed'; ta.style.opacity = '0';
      document.body.appendChild(ta); ta.select();
      document.execCommand('copy');
      document.body.removeChild(ta);
    }catch(e){}
  }
  window.__RC_TEST__ = { matchRecord: rcMatchRecord, matchAny: rcMatchAny, cardHTML: cardHTML, data: DATA };
  if(document.readyState === 'loading') document.addEventListener('DOMContentLoaded', function(){ try{ build(); }catch(e){} });
  else { try{ build(); }catch(e){} }
})();
