const PROJECTS_DATA = [
  {id:"P1",titleAl:"Ndarje Hapsirash dhe korimano shkallesh",titleEn:"Gold Ornamental Decorative Screen",descAl:"Panel dekorativ i punuar me dorë me detaje gold që shton elegancë dhe karakter çdo mjedisi. Ideal për ndarje hapësirash apo element arkitektonik dekorativ.",descEn:"Handcrafted decorative panel with gold ornamentation adding elegance and character to any space. Ideal as a room divider or architectural accent element.",cats:"Kangjella & Korimano,Dekor & CNC",year:2018,thumb:"fotot-compressed/P1/1.1.webp",gallery:["fotot-compressed/P1/1.1.webp", "fotot-compressed/P1/1.2.webp", "fotot-compressed/P1/1.3.webp", "fotot-compressed/P1/1.4.webp"]},
  {id:"P2",titleAl:"Pergole Çeliku për Restorant",titleEn:"Steel Pergola for Restaurant",descAl:"Strukturë pergole e personalizuar për terraca restoranti me dizajn të pastër dhe funksional. Zgjidhje ideale për ambiente gastronomike të jashtme.",descEn:"Custom pergola structure for restaurant terraces with a clean, functional design. The ideal solution for outdoor dining environments.",cats:"Struktura,Fasada",year:2019,thumb:"fotot-compressed/P2/2.1.webp",gallery:["fotot-compressed/P2/2.1.webp", "fotot-compressed/P2/2.2.webp", "fotot-compressed/P2/2.3.webp", "fotot-compressed/P2/2.4.webp", "fotot-compressed/P2/2.5.webp", "fotot-compressed/P2/2.6.webp", "fotot-compressed/P2/2.7.webp", "fotot-compressed/P2/2.8.webp", "fotot-compressed/P2/2.9.webp", "fotot-compressed/P2/2.10.webp", "fotot-compressed/P2/2.11.webp", "fotot-compressed/P2/2.12.webp", "fotot-compressed/P2/2.13.webp", "fotot-compressed/P2/2.14.webp", "fotot-compressed/P2/2.15.webp", "fotot-compressed/P2/2.16.webp", "fotot-compressed/P2/2.17.webp", "fotot-compressed/P2/2.18.webp", "fotot-compressed/P2/2.19.webp", "fotot-compressed/P2/2.20.webp", "fotot-compressed/P2/2.21.webp", "fotot-compressed/P2/2.22.webp", "fotot-compressed/P2/2.23.webp"]},
  {id:"P3",titleAl:"Montim Skeleti Strukturor Çeliku",titleEn:"Structural Steel Frame Assembly",descAl:"Montim profesional i skeletit strukturor çeliku me precizion të lartë teknik. Bazë e sigurt për ndërtime industriale dhe komerciale.",descEn:"Professional structural steel frame assembly with high technical precision. A reliable foundation for industrial and commercial constructions.",cats:"Struktura",year:2018,thumb:"fotot-compressed/P3/3.1.webp",gallery:["fotot-compressed/P3/3.1.webp", "fotot-compressed/P3/3.2.webp", "fotot-compressed/P3/3.3.webp", "fotot-compressed/P3/3.4.webp", "fotot-compressed/P3/3.5.webp", "fotot-compressed/P3/3.6.webp", "fotot-compressed/P3/3.7.webp", "fotot-compressed/P3/3.8.webp", "fotot-compressed/P3/3.9.webp", "fotot-compressed/P3/3.10.webp", "fotot-compressed/P3/3.11.webp"]},
  {id:"P4",titleAl:"Strukture Pergole stil Gazebo me Kolona Celiku",titleEn:"",descAl:"Strukturë pergole me stil gazebo, mbështetur mbi kolona çeliku - hapësirë e jashtme elegante që bashkon funksionin me formën.",descEn:"Gazebo-style pergola structure supported on steel columns - an elegant outdoor space where function meets architectural form.",cats:"Struktura",year:2019,thumb:"fotot-compressed/P4/4.1.webp",gallery:["fotot-compressed/P4/4.1.webp", "fotot-compressed/P4/4.2.webp", "fotot-compressed/P4/4.3.webp", "fotot-compressed/P4/4.4.webp", "fotot-compressed/P4/4.5.webp", "fotot-compressed/P4/4.6.webp", "fotot-compressed/P4/4.7.webp", "fotot-compressed/P4/4.8.webp", "fotot-compressed/P4/4.9.webp", "fotot-compressed/P4/4.10.webp"]},
  {id:"P5",titleAl:"Kapanon - Ndertese Industriale Celiku",titleEn:"Industrial Steel Building",descAl:"Ndërtesë industriale e plotë me skelet çeliku, fasadë e izoluar dhe sipërfaqe të gjera pune - ndërtuar për rezistencë dhe efikasitet.",descEn:"Complete industrial steel building with insulated facade and large working surfaces - built for durability and operational efficiency.",cats:"Struktura,Fasada",year:2018,thumb:"fotot-compressed/P5/5.1.webp",gallery:["fotot-compressed/P5/5.1.webp", "fotot-compressed/P5/5.2.webp", "fotot-compressed/P5/5.3.webp"]},
  {id:"P6",titleAl:"Gardh Dekorativ i Bardhë për Kopsht",titleEn:"White Decorative Garden Fence",descAl:"Gardh dekorativ i bardhë për kopësht, me dizajn të lehtë dhe elegant që rrethon hapësirat e jashtme me stil.",descEn:"White decorative garden fence with a light, elegant design that frames outdoor spaces with timeless charm.",cats:"Porta & Dyer",year:2019,thumb:"fotot-compressed/P6/6.1.webp",gallery:["fotot-compressed/P6/6.1.webp", "fotot-compressed/P6/6.2.webp", "fotot-compressed/P6/6.3.webp", "fotot-compressed/P6/6.4.webp", "fotot-compressed/P6/6.5.webp", "fotot-compressed/P6/6.6.webp", "fotot-compressed/P6/6.7.webp", "fotot-compressed/P6/6.8.webp", "fotot-compressed/P6/6.9.webp"]},
  {id:"P7",titleAl:"Arredim I brendshem banaku bari",titleEn:"Interior remodeling for a bar",descAl:"Arredim i brendshëm i banakut të barit me elementë çeliku dhe raft varës gotash - dizajn funksional me karakter.",descEn:"Interior bar counter fit-out with steel elements and overhead glass rack - functional design with striking character.",cats:"Arredim & Mobilje",year:2019,thumb:"fotot-compressed/P7/7.1.webp",gallery:["fotot-compressed/P7/7.1.webp", "fotot-compressed/P7/7.2.webp", "fotot-compressed/P7/7.3.webp", "fotot-compressed/P7/7.4.webp", "fotot-compressed/P7/7.5.webp", "fotot-compressed/P7/7.6.webp", "fotot-compressed/P7/7.7.webp"]},
  {id:"P8",titleAl:"Arredim dhe rikostruktim total te nje lokali",titleEn:"Full design and remodeling of a Bar",descAl:"Rimodelim dhe rindërtim i plotë i lokalit me elementë çeliku dhe rafte ekspozimi - hapësirë e transformuar nga zero.",descEn:"Full redesign and remodeling of a commercial venue with steel elements and display shelving - a space transformed from the ground up.",cats:"Arredim & Mobilje",year:2020,thumb:"fotot-compressed/P8/8.1.webp",gallery:["fotot-compressed/P8/8.1.webp", "fotot-compressed/P8/8.2.webp", "fotot-compressed/P8/8.3.webp", "fotot-compressed/P8/8.4.webp", "fotot-compressed/P8/8.5.webp", "fotot-compressed/P8/8.6.webp", "fotot-compressed/P8/8.7.webp", "fotot-compressed/P8/8.8.webp", "fotot-compressed/P8/8.9.webp", "fotot-compressed/P8/8.10.webp", "fotot-compressed/P8/8.11.webp"]},
  {id:"P9",titleAl:"Projekt Pergole me kangjella Dekorative",titleEn:"Decorative Pergola Design",descAl:"Pergole me kangjella dekorative - projekt i dizajnuar për hapësira të jashtme që kërkojnë stil dhe funksion.",descEn:"Pergola with decorative railings - designed for outdoor spaces that demand both style and purpose.",cats:"Struktura,Dekor & CNC",year:2019,thumb:"fotot-compressed/P9/9.1.webp",gallery:["fotot-compressed/P9/9.1.webp", "fotot-compressed/P9/9.2.webp", "fotot-compressed/P9/9.3.webp", "fotot-compressed/P9/9.4.webp"]},
  {id:"P10",titleAl:"Portë e jashtme e zezë Çeliku",titleEn:"Exterior Black Steel Door",descAl:"Derë e jashtme e zezë çeliku me dizajn vertikal dhe panel të gravuara - elegancë moderne për hyrjen kryesore.",descEn:"Exterior black steel door with vertical bar design and engraved panel detail - modern elegance for any main entrance.",cats:"Porta & Dyer",year:2020,thumb:"fotot-compressed/P10/10.1.webp",gallery:["fotot-compressed/P10/10.1.webp", "fotot-compressed/P10/10.2.webp", "fotot-compressed/P10/10.3.webp", "fotot-compressed/P10/10.4.webp", "fotot-compressed/P10/10.5.webp"]},
  {id:"P11",titleAl:"Portë e vogël e jashtme vile",titleEn:"Small Exterior vila door",descAl:"Derë e vogël e jashtme për vilë, me prerje dekorative floreale - e lehtë, elegante dhe e punuar me saktësi.",descEn:"Small exterior villa gate with floral laser-cut decoration - light, elegant, and crafted with precision.",cats:"Porta & Dyer,Dekor & CNC",year:2020,thumb:"fotot-compressed/P11/11.1.webp",gallery:["fotot-compressed/P11/11.1.webp", "fotot-compressed/P11/11.2.webp", "fotot-compressed/P11/11.3.webp", "fotot-compressed/P11/11.4.webp", "fotot-compressed/P11/11.5.webp"]},
  {id:"P12",titleAl:"Fasade Metalike me Panel Kompozit",titleEn:"Metal Facade with Composite Panel",descAl:"Fasadë metalike me panel kompozit e montuar në lartësi - kombinim i estetikës moderne me mbrojtje të jashtme afatgjatë.",descEn:"Metal facade with composite panel installed at height - a combination of modern aesthetics and long-lasting exterior protection.",cats:"Fasada",year:2020,thumb:"fotot-compressed/P12/12.1.webp",gallery:["fotot-compressed/P12/12.1.webp", "fotot-compressed/P12/12.2.webp", "fotot-compressed/P12/12.3.webp", "fotot-compressed/P12/12.4.webp", "fotot-compressed/P12/12.5.webp", "fotot-compressed/P12/12.6.webp", "fotot-compressed/P12/12.7.webp"]},
  {id:"P13",titleAl:"Shtesë e jashtme fasade",titleEn:"Exterior Fasade",descAl:"Shtese hoteli, zgjerim fasade, zmadhim dhe krijim hapsire te brendshme.",descEn:"Hotel extension with facade expansion, structural enlargement, and creation of interior living space.",cats:"Fasada,Struktura",year:2020,thumb:"fotot-compressed/P13/13.1.mp4",gallery:["fotot-compressed/P13/13.1.mp4", "fotot-compressed/P13/13.1.webp", "fotot-compressed/P13/13.2.webp", "fotot-compressed/P13/13.3.webp", "fotot-compressed/P13/13.4.webp", "fotot-compressed/P13/13.5.webp", "fotot-compressed/P13/13.6.webp", "fotot-compressed/P13/13.7.webp", "fotot-compressed/P13/13.8.webp", "fotot-compressed/P13/13.9.mp4", "fotot-compressed/P13/13.9.webp", "fotot-compressed/P13/13.10.webp", "fotot-compressed/P13/13.11.webp"]},
  {id:"P14",titleAl:"Portë Industriale për Pallate",titleEn:"Industrial Grade Gate",descAl:"Portë masive industriale me shirita horizontalë çeliku, ideale për hyrje fabrikash, depo dhe ambiente pallatesh të ndryshme.",descEn:"Massive industrial gate with horizontal steel bars, engineered for factory entrances, warehouses, and large residential complexes.",cats:"Porta & Dyer",year:2020,thumb:"fotot-compressed/P14/14.1.webp",gallery:["fotot-compressed/P14/14.1.webp", "fotot-compressed/P14/14.2.webp", "fotot-compressed/P14/14.3.webp", "fotot-compressed/P14/14.4.webp", "fotot-compressed/P14/14.5.webp", "fotot-compressed/P14/14.6.webp"]},
  {id:"P15",titleAl:"Dyer industriale, panele sanduici, dhe strukture celiku",titleEn:"Industrial Doors, with sandwich panels and steel frame",descAl:"Dyer industriale, panele sandwich dhe strukturë çeliku - sistem i plotë fasade për ambiente industriale me izolim dhe funksionalitet.",descEn:"Industrial doors, sandwich insulation panels, and steel frame - a complete facade system delivering insulation and functionality for industrial environments.",cats:"Porta & Dyer,Fasada,Struktura",year:2020,thumb:"fotot-compressed/P15/15.1.webp",gallery:["fotot-compressed/P15/15.1.webp", "fotot-compressed/P15/15.2.webp", "fotot-compressed/P15/15.3.webp", "fotot-compressed/P15/15.4.webp", "fotot-compressed/P15/15.5.webp", "fotot-compressed/P15/15.6.webp", "fotot-compressed/P15/15.7.webp", "fotot-compressed/P15/15.8.webp"]},
  {id:"P16",titleAl:"Ballkon me kangjell e farketuar me dekorime artizanale",titleEn:"Artistic Wrought Iron Balcony Railing",descAl:"Kangjellë ballkoni e farkëtuar me dekorime artizanale - çdo detaj i punuar me dorë për të krijuar karakter dhe elegancë të qëndrueshme.",descEn:"Wrought iron balcony railing with artisanal decorations - every detail hand-crafted to create lasting character and elegance.",cats:"Kangjella & Korimano,Dekor & CNC",year:2020,thumb:"fotot-compressed/P16/16.1.webp",gallery:["fotot-compressed/P16/16.1.webp", "fotot-compressed/P16/16.2.webp", "fotot-compressed/P16/16.3.webp", "fotot-compressed/P16/16.4.webp"]},
  {id:"P17",titleAl:"Veshje Muri Dekorative",titleEn:"Decorative Wall Cladding",descAl:"Veshje muri nga dyshemeja deri në tavan për brenda një ambienti luksoz.",descEn:"Floor-to-ceiling wall facade inside a luxury residential interior.",cats:"Fasada,Dekor & CNC",year:2020,thumb:"fotot-compressed/P17/17.1.webp",gallery:["fotot-compressed/P17/17.1.webp"]},
  {id:"P18",titleAl:"Shkalle Celiku me Dru dhe Metal",titleEn:"Steel Staircase with Wood and Metal",descAl:"Shkalle industriale, per ambiente te brendshme, per zyra ose/dhe duplex",descEn:"Industrial-grade steel staircase designed for interior office environments and duplex apartments.",cats:"Shkalle",year:2020,thumb:"fotot-compressed/P18/18.1.webp",gallery:["fotot-compressed/P18/18.1.webp", "fotot-compressed/P18/18.2.webp", "fotot-compressed/P18/18.3.webp", "fotot-compressed/P18/18.4.webp", "fotot-compressed/P18/18.5.webp", "fotot-compressed/P18/18.6.webp", "fotot-compressed/P18/18.7.webp", "fotot-compressed/P18/18.8.webp", "fotot-compressed/P18/18.9.webp", "fotot-compressed/P18/18.10.webp"]},
  {id:"P19",titleAl:"Prerje dekorative me precizion ne CNC",titleEn:"",descAl:"Prerje dekorative me precizion CNC - dizajne të sofistikuara të gdhendura me lazer në metal për efekt vizual maksimal.",descEn:"Precision CNC decorative cutting - intricate laser-engraved metal designs that deliver maximum visual impact.",cats:"Dekor & CNC",year:2022,thumb:"fotot-compressed/P19/19.1.webp",gallery:["fotot-compressed/P19/19.1.webp"]},
  {id:"P20",titleAl:"Kangjella te jashtme per hotele dhe pallate",titleEn:"Outer railing for hotels and buildings",descAl:"Kangjella të jashtme për hotele dhe pallate - konstruksion i fortë çeliku me dizajn të pastër për fasada të mëdha rezidenciale dhe hoteliere.",descEn:"Exterior railings for hotels and apartment buildings - robust steel construction with clean design for large residential and hospitality facades.",cats:"Kangjella & Korimano",year:2021,thumb:"fotot-compressed/P20/20.1.webp",gallery:["fotot-compressed/P20/20.1.webp", "fotot-compressed/P20/20.2.webp", "fotot-compressed/P20/20.3.webp", "fotot-compressed/P20/20.4.webp", "fotot-compressed/P20/20.5.webp"]},
  {id:"P21",titleAl:"Kangjella te jashtme per hotele dhe pallate",titleEn:"Outer railing for hotels and buildings",descAl:"Kangjella të jashtme për hotele dhe pallate - linja të pastra dhe material rezistent për hapësira publike me trafik të lartë.",descEn:"Exterior railings for hotels and buildings - clean lines and durable steel material built for high-traffic public spaces.",cats:"Kangjella & Korimano",year:2021,thumb:"fotot-compressed/P21/21.1.webp",gallery:["fotot-compressed/P21/21.1.webp", "fotot-compressed/P21/21.2.webp", "fotot-compressed/P21/21.3.webp", "fotot-compressed/P21/21.4.webp"]},
  {id:"P22",titleAl:"Porte Dyshe me Xham dhe Celik",titleEn:"Double Steel and Glass Door",descAl:"Portë dyshe me xham dhe çelik - dizajn bashkëkohor që bashkon transparencën e xhamit me forcën e strukturës metalike.",descEn:"Double steel and glass door - a contemporary design that merges the transparency of glass with the strength of steel.",cats:"Porta & Dyer",year:2021,thumb:"fotot-compressed/P22/22.1.webp",gallery:["fotot-compressed/P22/22.1.webp", "fotot-compressed/P22/22.2.webp", "fotot-compressed/P22/22.3.webp", "fotot-compressed/P22/22.4.webp", "fotot-compressed/P22/22.5.webp", "fotot-compressed/P22/22.6.webp", "fotot-compressed/P22/22.7.webp", "fotot-compressed/P22/22.8.webp", "fotot-compressed/P22/22.9.webp"]},
  {id:"P23",titleAl:"Porte Hyrese Ville me Dizajn Premium",titleEn:"Premium Villa Entry Gate",descAl:"Portë hyrëse vile me dizajn premium - detyra e parë e çdo vile është të lërë përshtypje, dhe kjo portë e bën pikërisht atë.",descEn:"Premium villa entry gate - the first impression of any villa matters, and this gate delivers it with authority and elegance.",cats:"Porta & Dyer",year:2021,thumb:"fotot-compressed/P23/23.1.webp",gallery:["fotot-compressed/P23/23.1.webp", "fotot-compressed/P23/23.2.webp", "fotot-compressed/P23/23.3.webp", "fotot-compressed/P23/23.4.webp", "fotot-compressed/P23/23.5.webp", "fotot-compressed/P23/23.6.webp", "fotot-compressed/P23/23.7.webp", "fotot-compressed/P23/23.8.webp"]},
  {id:"P24",titleAl:"Porta e Madhe e Kompleksit Industrial",titleEn:"Large Industrial Dual Gate",descAl:"Portë e madhe dyshe për kompleks industrial - ndërtuar për hyrje të rënda me funksionalitet maksimal dhe prezencë vizuale dominuese.",descEn:"Large dual gate for an industrial complex - built for heavy-duty access with maximum functionality and a dominant visual presence.",cats:"Porta & Dyer",year:2021,thumb:"fotot-compressed/P24/24.7.webp",gallery:["fotot-compressed/P24/24.7.webp", "fotot-compressed/P24/24.8.webp"]},
  {id:"P25",titleAl:"Parmake me Shirita Vertikale",titleEn:"Vertical Bar  Railing",descAl:"Parmakë me shirita vertikalë - dizajn minimal dhe i pastër që kombinohet me çdo stil arkitekturor modern.",descEn:"Vertical bar railings - minimal and clean design that pairs effortlessly with any modern architectural style.",cats:"Kangjella & Korimano",year:2021,thumb:"fotot-compressed/P25/25.1.webp",gallery:["fotot-compressed/P25/25.1.webp", "fotot-compressed/P25/25.2.webp", "fotot-compressed/P25/25.3.webp", "fotot-compressed/P25/25.4.webp", "fotot-compressed/P25/25.6.webp", "fotot-compressed/P25/25.7.webp"]},
  {id:"P26",titleAl:"Strukture biblioteke premium.",titleEn:"Premium Library structure",descAl:"Biblioteke premium qe mbulon faqen e murit te nje vile.",descEn:"Full wall-span premium library unit, custom-built to cover an entire villa wall with elegance and precision.",cats:"Arredim & Mobilje",year:2021,thumb:"fotot-compressed/P26/26.1.webp",gallery:["fotot-compressed/P26/26.1.webp", "fotot-compressed/P26/26.2.mp4", "fotot-compressed/P26/26.3.mp4"]},
  {id:"P27",titleAl:"Arredimi me elemente celiku.",titleEn:"Steel element redesigning",descAl:"Arredimi me elemente celiku te nje lokali",descEn:"Complete interior fit-out of a commercial space using custom steel elements and fixtures.",cats:"Arredim & Mobilje",year:2021,thumb:"fotot-compressed/P27/27.1.webp",gallery:["fotot-compressed/P27/27.1.webp", "fotot-compressed/P27/27.2.webp", "fotot-compressed/P27/27.3.mp4", "fotot-compressed/P27/27.4.mp4", "fotot-compressed/P27/27.5.mp4", "fotot-compressed/P27/27.6.mp4"]},
  {id:"P28",titleAl:"Porta Automatike me Shirita Horizontale",titleEn:"Automatic Horizontal Bar Gate",descAl:"Portë automatike me shirita horizontalë - operim me telekomandë, linja moderne dhe siguri e lartë për ambiente rezidenciale.",descEn:"Automatic horizontal bar gate - remote-controlled operation, modern lines, and high security for residential environments.",cats:"Porta & Dyer",year:2021,thumb:"fotot-compressed/P28/28.1.webp",gallery:["fotot-compressed/P28/28.1.webp", "fotot-compressed/P28/28.2.webp", "fotot-compressed/P28/28.3.webp", "fotot-compressed/P28/28.4.webp", "fotot-compressed/P28/28.5.webp"]},
  {id:"P29",titleAl:"Kangjella Ballkoni Forje Artistike",titleEn:"Artistic Wrought Iron Balcony Railing",descAl:"Kangjellë ballkoni e farkëtuar artistike - çdo element i formuar me dorë, me detaje ornamentale që reflektojnë pasionin për zanatin.",descEn:"Artistic wrought iron balcony railing - every element hand-shaped, with ornamental details that reflect a deep passion for the craft.",cats:"Kangjella & Korimano,Dekor & CNC",year:2020,thumb:"fotot-compressed/P29/29.1.webp",gallery:["fotot-compressed/P29/29.1.webp"]},
  {id:"P30",titleAl:"Gardh Metalik me Motiv Dekorativ",titleEn:"Metal Fence with Decorative Motif",descAl:"Gardh metalik me motiv dekorativ - kombinim i funksionit rrethues me estetikën artizanale që dallon pronën tuaj.",descEn:"Metal fence with decorative motif - combining perimeter function with artisanal aesthetics that make your property stand out.",cats:"Porta & Dyer,Dekor & CNC",year:2019,thumb:"fotot-compressed/P30/30.1.webp",gallery:["fotot-compressed/P30/30.1.webp"]},
  {id:"P31",titleAl:"Stacion autobuzi",titleEn:"Bus Station",descAl:"Stacion autobuzi i ndërtuar me strukturë çeliku - funksional, rezistent dhe i dizajnuar për ambiente publike me trafik të lartë.",descEn:"Bus station built with a steel structure - functional, durable, and designed for high-traffic public environments.",cats:"Struktura",year:2021,thumb:"fotot-compressed/P31/31.1.webp",gallery:["fotot-compressed/P31/31.1.webp", "fotot-compressed/P31/31.3.webp", "fotot-compressed/P31/31.4.webp", "fotot-compressed/P31/31.5.webp", "fotot-compressed/P31/31.7.mp4", "fotot-compressed/P31/31.8.mp4"]},
  {id:"P32",titleAl:"Bibliotekë private",titleEn:"Private Library",descAl:"Bibliotekë private e punuar me çelik dhe dru - e personalizuar për të mbushur murin dhe kthyer çdo libër në ekspozitë.",descEn:"Custom private library crafted in steel and wood - designed to span the full wall and turn every book into a display.",cats:"Arredim & Mobilje",year:2022,thumb:"fotot-compressed/P32/32.1.webp",gallery:["fotot-compressed/P32/32.1.webp", "fotot-compressed/P32/32.2.webp", "fotot-compressed/P32/32.3.webp", "fotot-compressed/P32/32.4.webp"]},
  {id:"P33",titleAl:"Strukture Celiku per Lokal Gastronomik",titleEn:"Steel Frame Structure for Restaurant",descAl:"Design Modern I nje bari, render dhe ide bashkekohore",descEn:"Modern bar interior design concept - rendered with contemporary ideas brought to life in steel and precision craftsmanship.",cats:"Struktura,Arredim & Mobilje",year:2021,thumb:"fotot-compressed/P33/33.1.webp",gallery:["fotot-compressed/P33/33.1.webp", "fotot-compressed/P33/33.2.webp"]},
  {id:"P35",titleAl:"Kangjella Ballkoni Forje Artistike",titleEn:"Artistic Wrought Iron Balcony Railing",descAl:"Kangjellë ballkoni e farkëtuar artistike - detaje ornamentale të punuara me dorë që i japin karakterin e shtëpisë tuaj.",descEn:"Artistic wrought iron balcony railing - hand-crafted ornamental details that define the character of your home.",cats:"Kangjella & Korimano,Dekor & CNC",year:2019,thumb:"fotot-compressed/P35/35.1.webp",gallery:["fotot-compressed/P35/35.1.webp", "fotot-compressed/P35/35.2.mp4"]},
  {id:"P36",titleAl:"Porte Hyrese Kompleksi Rezidencial",titleEn:"Residential Complex Entry Gate",descAl:"Portë hyrëse për kompleks rezidencial - dizajn solid dhe reprezentativ që vendos tonin e gjithë kompleksit.",descEn:"Residential complex entry gate - solid and representative design that sets the tone for the entire property.",cats:"Porta & Dyer",year:2021,thumb:"fotot-compressed/P36/36.1.webp",gallery:["fotot-compressed/P36/36.1.webp"]},
  {id:"P37",titleAl:"Siluete fytyre",titleEn:"Face silhouette",descAl:"Siluetë fytyrale e punuar me çelik, art dekorativ që kthen një imazh njerëzor në skulpturë metalike.",descEn:"Face silhouette",cats:"Dekor & CNC",year:2023,thumb:"fotot-compressed/P37/37.1.webp",gallery:["fotot-compressed/P37/37.1.webp", "fotot-compressed/P37/37.2.mp4", "fotot-compressed/P37/37.3.webp"]},
  {id:"P38",titleAl:"Rafte Ekspozuese Metalike",titleEn:"Metal Display Shelving",descAl:"Rafte ekspozuese metalike - ndërtuar për ekspozim produktesh me dizajn të pastër dhe strukturë të qëndrueshme.",descEn:"Metal display shelving - built for product exhibition with clean design and a durable steel structure.",cats:"Arredim & Mobilje",year:2022,thumb:"fotot-compressed/P38/38.1.webp",gallery:["fotot-compressed/P38/38.1.webp", "fotot-compressed/P38/38.2.webp", "fotot-compressed/P38/38.3.webp", "fotot-compressed/P38/38.4.webp", "fotot-compressed/P38/38.5.webp", "fotot-compressed/P38/38.6.mp4"]},
  {id:"P39",titleAl:"Sistem ajrimi dhe ndricimi për katin nendhe.",titleEn:"Natural ventilating and lumination of underground floor.",descAl:"Goje Ujku per vilat. Ndricon katin perdhe, krijon hapsire per ajrosje per katin nendhe. Sensor shiu. Xham I temperuar, e shkelshme.",descEn:"Premium villa skylight - illuminates the ground floor, ventilates the basement, rain-sensor operated, built with tempered walk-on glass.",cats:"Struktura,Dekor & CNC",year:2020,thumb:"fotot-compressed/P39/39.1.webp",gallery:["fotot-compressed/P39/39.1.webp", "fotot-compressed/P39/39.2.webp", "fotot-compressed/P39/39.3.webp", "fotot-compressed/P39/39.4.webp"]},
  {id:"P40",titleAl:"Kangjella Shkallesh me Motive valëzuese",titleEn:"Wavy Motif Staircase Railing",descAl:"kangjella te brendshme te farketuara, te punuara me dore",descEn:"Hand-forged interior railings, crafted by hand with artisanal detail and timeless character.",cats:"Kangjella & Korimano,Dekor & CNC",year:2019,thumb:"fotot-compressed/P40/40.1.webp",gallery:["fotot-compressed/P40/40.1.webp", "fotot-compressed/P40/40.2.webp", "fotot-compressed/P40/40.3.webp", "fotot-compressed/P40/40.4.webp", "fotot-compressed/P40/40.5.webp", "fotot-compressed/P40/40.6.webp", "fotot-compressed/P40/40.7.webp", "fotot-compressed/P40/40.8.webp", "fotot-compressed/P40/40.9.mp4"]},
  {id:"P41",titleAl:"Porte Metalike me Panel Dru Kompozit",titleEn:"Metal Gate with Composite Wood Panel",descAl:"MDF (kompresimi I drurit) I nderthurur me strukture metalike, biblioteke",descEn:"Custom library unit combining MDF compressed wood panels interwoven with a steel structural frame.",cats:"Porta & Dyer,Dekor & CNC",year:2023,thumb:"fotot-compressed/P41/41.1.webp",gallery:["fotot-compressed/P41/41.1.webp", "fotot-compressed/P41/41.2.webp"]},
  {id:"P42",titleAl:"Kangjella Shkallesh me Motiv Luleje",titleEn:"Floral Motif Staircase Railing",descAl:"kangjella te farketuara, me detaje te holla",descEn:"Hand-forged railings with fine ornamental details, where every curve reflects mastery and craftsmanship.",cats:"Kangjella & Korimano,Dekor & CNC",year:2019,thumb:"fotot-compressed/P42/42.1.webp",gallery:["fotot-compressed/P42/42.1.webp", "fotot-compressed/P42/42.2.webp", "fotot-compressed/P42/42.3.mp4", "fotot-compressed/P42/42.4.mp4"]},
  {id:"P43",titleAl:"Zgjidhje e plote e jashtme metalurgjike",titleEn:"Complete Exterior Metalwork",descAl:"kangjella rrethimi, edhe der e jashtme skorever me telekomand. Dhe dere e vogel per kembesoret",descEn:"Perimeter fence with a remote-controlled sliding gate and a separate pedestrian entry door - security and elegance in one.",cats:"Porta & Dyer,Kangjella & Korimano",year:2021,thumb:"fotot-compressed/P43/43.1.webp",gallery:["fotot-compressed/P43/43.1.webp", "fotot-compressed/P43/43.2.webp", "fotot-compressed/P43/43.3.webp", "fotot-compressed/P43/43.4.webp", "fotot-compressed/P43/43.5.webp", "fotot-compressed/P43/43.6.webp"]},
  {id:"P44",titleAl:"Ndarje Hapsirash",titleEn:"Space seperator",descAl:"Ndarese hapsire lokali e bere me prerje me lazer cnc, bashke me logon e lokalit.",descEn:"CNC laser-cut interior space divider featuring the venue's logo - functional design that doubles as a branded statement piece.",cats:"Dekor & CNC,Arredim & Mobilje",year:2022,thumb:"fotot-compressed/P44/44.1.webp",gallery:["fotot-compressed/P44/44.1.webp", "fotot-compressed/P44/44.2.webp", "fotot-compressed/P44/44.3.webp"]},
  {id:"P45",titleAl:"Kangjella te brendshme vile.",titleEn:"Interior Vertical Railings",descAl:"Kangjella të brendshme vertikale për vilë - linja të holla dhe të pastra që ndajnë hapësirat me elegancë.",descEn:"Interior vertical railings for a villa - slim, clean lines that divide spaces with understated elegance.",cats:"Kangjella & Korimano",year:2020,thumb:"fotot-compressed/P45/45.1.webp",gallery:["fotot-compressed/P45/45.1.webp", "fotot-compressed/P45/45.2.mp4", "fotot-compressed/P45/45.3.mp4"]},
  {id:"P46",titleAl:"Porte Rreshqitese Automatike",titleEn:"Automatic Sliding Gate",descAl:"Porte e jashtme me telekomande, prezence, dhe hyrje kryesore per kembesoret.",descEn:"Automated exterior gate with remote control and presence sensor, paired with a dedicated pedestrian entry - seamless access, premium security.",cats:"Porta & Dyer",year:2022,thumb:"fotot-compressed/P46/46.1.webp",gallery:["fotot-compressed/P46/46.1.webp", "fotot-compressed/P46/46.2.mp4"]},
  {id:"P47",titleAl:"Strukture Mbajtese",titleEn:"Holding structure",descAl:"Strukture metalike per mbajtjen e cullerit, sistem ngrohje ftohje",descEn:"Steel support structure engineered to house roofing systems and integrated heating-cooling equipment.",cats:"Struktura",year:2021,thumb:"fotot-compressed/P47/47.1.webp",gallery:["fotot-compressed/P47/47.1.webp", "fotot-compressed/P47/47.2.webp"]},
  {id:"P48",titleAl:"Render të ndryshëm",titleEn:"Rendered projects",descAl:"Punime te ndryshme ne render, deshira dhe fantazia juaj juaj, kthimi jon ne realitet",descEn:"Custom rendered steel works - your vision, your imagination, brought to life with precision and craftsmanship.",cats:"Dekor & CNC",year:2023,thumb:"fotot-compressed/P48/48.1.webp",gallery:["fotot-compressed/P48/48.1.webp", "fotot-compressed/P48/48.2.webp", "fotot-compressed/P48/48.3.webp", "fotot-compressed/P48/48.4.webp", "fotot-compressed/P48/48.5.webp", "fotot-compressed/P48/48.6.webp", "fotot-compressed/P48/48.7.webp", "fotot-compressed/P48/48.8.webp", "fotot-compressed/P48/48.9.webp", "fotot-compressed/P48/48.10.webp", "fotot-compressed/P48/48.11.webp"]},
  {id:"P50",titleAl:"Reklame e Jashtme",titleEn:"Business Displaying board",descAl:"Reklame Korten per veterinarin \"Vet Hospital, Liqeni I thate\"",descEn:"Corten steel signage crafted for Vet Hospital - raw, weathered aesthetics with lasting structural integrity.",cats:"Dekor & CNC",year:2024,thumb:"fotot-compressed/P50/50.1.webp",gallery:["fotot-compressed/P50/50.1.webp", "fotot-compressed/P50/50.2.webp", "fotot-compressed/P50/53.3.webp", "fotot-compressed/P50/53.4.webp"]},
  {id:"P51",titleAl:"Hije parkimi",titleEn:"Parking shade",descAl:"Dizanj modern, parkim I jashtem, per hijezim per makina",descEn:"Modern outdoor car canopy structure, designed to provide shade and weather protection with a clean architectural profile.",cats:"Struktura,Fasada",year:2023,thumb:"fotot-compressed/P51/51.1.webp",gallery:["fotot-compressed/P51/51.1.webp", "fotot-compressed/P51/51.2.webp", "fotot-compressed/P51/51.3.webp"]},
  {id:"P52",titleAl:"Ndertese Industriale Celiku",titleEn:"Industrial Steel Building",descAl:"Ndërtesë industriale çeliku - skelet i plotë metalik i projektuar dhe montuar për qëndrueshmëri maksimale dhe përdorim afatgjatë.",descEn:"Industrial steel building - full metal frame designed and assembled for maximum structural integrity and long-term use.",cats:"Struktura",year:2022,thumb:"fotot-compressed/P52/52.1.webp",gallery:["fotot-compressed/P52/52.1.webp", "fotot-compressed/P52/52.2.webp", "fotot-compressed/P52/52.3.webp", "fotot-compressed/P52/52.4.webp", "fotot-compressed/P52/52.5.webp", "fotot-compressed/P52/52.6.webp", "fotot-compressed/P52/52.7.webp", "fotot-compressed/P52/52.8.webp", "fotot-compressed/P52/52.9.webp", "fotot-compressed/P52/52.10.webp", "fotot-compressed/P52/52.11.webp"]},
  {id:"P53",titleAl:"Shkalle Spirale Celiku",titleEn:"Steel Spiral Staircase",descAl:"Elikoidal, shkalle e brendshme metalike spirale",descEn:"Helical interior spiral staircase - a flowing steel sculpture that commands attention in any space.",cats:"Shkalle",year:2021,thumb:"fotot-compressed/P53/53.1.webp",gallery:["fotot-compressed/P53/53.1.webp", "fotot-compressed/P53/53.2.webp", "fotot-compressed/P53/53.3.webp", "fotot-compressed/P53/53.4.mp4", "fotot-compressed/P53/53.5.mp4"]},
  {id:"P54",titleAl:"Baze Tavoline Celiku Forme X",titleEn:"Steel Table Base X-Shape",descAl:"Bazament tavoline bronz",descEn:"Bronze-finish steel table base - a statement piece that merges industrial strength with warm, luxury aesthetics.",cats:"Arredim & Mobilje",year:2023,thumb:"fotot-compressed/P54/54.1.webp",gallery:["fotot-compressed/P54/54.1.webp", "fotot-compressed/P54/54.2.webp", "fotot-compressed/P54/54.3.webp", "fotot-compressed/P54/54.4.webp"]},
  {id:"P55",titleAl:"Zgjidhje e plote e jashtme metalurgjike",titleEn:"Complete Exterior Metalwork",descAl:"Krijimi I dizanjeve dekorative per vila si ne shqiperi, dhe ne itali. Porta te blinduara me element xhami. Kangjella dekorative, Dere e jashtme makine me telekomand, dhe dere e vogel e jashtme per njerzit.",descEn:"Premium decorative villa works for projects in Albania and Italy - armored doors with glass, ornamental railings, remote-controlled vehicle gates, and pedestrian entries.",cats:"Porta & Dyer,Kangjella & Korimano,Dekor & CNC",year:2020,thumb:"fotot-compressed/P55/55.1.webp",gallery:["fotot-compressed/P55/55.1.webp", "fotot-compressed/P55/55.2.webp", "fotot-compressed/P55/55.3.webp", "fotot-compressed/P55/55.4.webp", "fotot-compressed/P55/55.5.webp", "fotot-compressed/P55/55.6.webp", "fotot-compressed/P55/55.7.webp"]},
  {id:"P56",titleAl:"Shkalle emergjence",titleEn:"Emergency Stairs",descAl:"Parapet (mbrojteset anesore) I shkalleve emergjente",descEn:"Emergency staircase parapet railings - built to safety standards without compromising on clean, industrial design.",cats:"Shkalle,Kangjella & Korimano",year:2021,thumb:"fotot-compressed/P56/56.1.webp",gallery:["fotot-compressed/P56/56.1.webp", "fotot-compressed/P56/56.2.webp", "fotot-compressed/P56/56.3.webp", "fotot-compressed/P56/56.4.webp", "fotot-compressed/P56/56.5.webp", "fotot-compressed/P56/56.6.webp"]},
  {id:"P57",titleAl:"Porte garazhdi industriale",titleEn:"Industrial Grade Gate",descAl:"Portë garazhi industriale - ndërtuar për ambiente pune intensive me mekanizëm rezistent dhe hapje funksionale.",descEn:"Industrial garage gate - built for heavy-duty work environments with a durable mechanism and reliable operation.",cats:"Porta & Dyer",year:2022,thumb:"fotot-compressed/P57/57.1.webp",gallery:["fotot-compressed/P57/57.1.webp", "fotot-compressed/P57/57.2.webp"]},
  {id:"P58",titleAl:"Strukture metalike dhe druri",titleEn:"Metal and wood construction",descAl:"kontinjer e kthyer ne shtepi me verante siper + shkalle te jashtme ne mal te zi.",descEn:"Shipping container converted into a home with a rooftop veranda and exterior steel staircase - built in Montenegro.",cats:"Struktura,Shkalle",year:2023,thumb:"fotot-compressed/P58/58.1.webp",gallery:["fotot-compressed/P58/58.1.webp"]},
  {id:"P59",titleAl:"Kormiano e jashtme",titleEn:"Outer railing",descAl:"Korimano e jashtme çeliku - e thjeshtë, e fortë, dhe e projektuar të qëndrojë në çdo kusht mjedisi.",descEn:"Exterior steel handrail - simple, strong, and built to withstand any environmental condition.",cats:"Kangjella & Korimano",year:2022,thumb:"fotot-compressed/P59/59.1.webp",gallery:["fotot-compressed/P59/59.1.webp", "fotot-compressed/P59/59.2.webp"]},
  {id:"P60",titleAl:"Rimodelim dyqani",titleEn:"Remodeling work",descAl:"Rimodelim i plotë dyqani me elementë çeliku - transformim hapësire komerciale me dizajn të ri dhe funksionalitet të rritur.",descEn:"Full shop remodeling with steel elements - a commercial space transformed with a fresh design and improved functionality.",cats:"Arredim & Mobilje",year:2023,thumb:"fotot-compressed/P60/60.1.webp",gallery:["fotot-compressed/P60/60.1.webp", "fotot-compressed/P60/60.2.webp", "fotot-compressed/P60/60.3.webp"]},
  {id:"P61",titleAl:"Dere e jashtme metalike dhe xhami",titleEn:"Steel and glass outer door",descAl:"Derë e jashtme metalike dhe xhami - kombinim i strukturës çeliku me panel xhami për pamje moderne dhe ndriçim natyral.",descEn:"Exterior steel and glass door - combining a steel frame with glass panels for a modern look and natural light flow.",cats:"Porta & Dyer",year:2022,thumb:"fotot-compressed/P61/61.1.webp",gallery:["fotot-compressed/P61/61.1.webp", "fotot-compressed/P61/61.2.mp4"]},
  {id:"P62",titleAl:"Mbajtese disqesh",titleEn:"Wheel Holder",descAl:"Mbajtëse diskësh metalike - element funksional i punuar me çelik për ruajtje dhe ekspozim të sigurt.",descEn:"Steel wheel/disc holder - a functional metal element for safe and organized storage and display.",cats:"Arredim & Mobilje",year:2024,thumb:"fotot-compressed/P62/62.1.webp",gallery:["fotot-compressed/P62/62.1.webp"]},
  {id:"P63",titleAl:"Shkalle dhe korimano",titleEn:"Stairs and railing",descAl:"Shkallë dhe korimano çeliku - sistem i plotë shkallësh me korimano të integruara për siguri dhe dizajn koherent.",descEn:"Steel staircase with integrated railing - a complete stair system where safety and design work as one.",cats:"Shkalle,Kangjella & Korimano",year:2021,thumb:"fotot-compressed/P63/63.1.webp",gallery:["fotot-compressed/P63/63.1.webp", "fotot-compressed/P63/63.3.webp"]},
  {id:"P64",titleAl:"Shkall per ambiente te brendshme",titleEn:"Interior Industrial Metal Staircase",descAl:"Shkallë metalike industriale e brendshme me skalina rrjete dhe kangjella solide, e projektuar për përdorim intensiv industrial.",descEn:"Interior industrial metal staircase with grating steps and solid railings, designed for intensive industrial use.",cats:"Shkalle",year:2020,thumb:"fotot-compressed/P64/64.1.webp",gallery:["fotot-compressed/P64/64.1.webp", "fotot-compressed/P64/64.2.mp4", "fotot-compressed/P64/64.3.webp"]},
  {id:"P65",titleAl:"Detaje inoksi",titleEn:"Shiny Countertop and details",descAl:"Detaje inoksi - sipërfaqe dhe elementë të punuar me çelik inox, me lustër të lartë dhe rezistencë ndaj korrozionit.",descEn:"Stainless steel details - surfaces and elements crafted in inox with a high-polish finish and superior corrosion resistance.",cats:"Arredim & Mobilje",year:2023,thumb:"fotot-compressed/P65/65.1.webp",gallery:["fotot-compressed/P65/65.1.webp", "fotot-compressed/P65/65.2.webp"]},
  {id:"P66",titleAl:"Punime te Brendshme Metalike",titleEn:"Indoor Metal Detailing Work",descAl:"Mbajtese e levizshme per televizore te medhenj per ambiente zyrash",descEn:"Mobile steel mount for large-format televisions, engineered for professional office and conference environments.",cats:"Arredim & Mobilje",year:2024,thumb:"fotot-compressed/P66/66.1.webp",gallery:["fotot-compressed/P66/66.1.webp", "fotot-compressed/P66/66.2.webp", "fotot-compressed/P66/66.3.webp"]},
  {id:"P67",titleAl:"Arredim I Brendshem Lokali",titleEn:"Interior Bar Redisigning",descAl:"Dizenjim I brendshem estetik per lokal, arredim",descEn:"Full aesthetic interior design and fit-out for a commercial venue, executed in steel with a refined finish.",cats:"Arredim & Mobilje",year:2022,thumb:"fotot-compressed/P67/67.1.webp",gallery:["fotot-compressed/P67/67.1.webp", "fotot-compressed/P67/67.2.mp4", "fotot-compressed/P67/67.3.mp4"]},
  {id:"P68",titleAl:"Shkalle likuidale, helix I brendshem",titleEn:"Spiral Staircase",descAl:"Shkallë elikoidale spirale - helikë e brendshme metalike që bashkon strukturën inxhinierike me bukurinë skulpturore.",descEn:"Helical spiral staircase - an interior metal helix that unites engineering structure with sculptural beauty.",cats:"Shkalle",year:2021,thumb:"fotot-compressed/P68/68.1.webp",gallery:["fotot-compressed/P68/68.1.webp", "fotot-compressed/P68/68.2.webp"]},
  {id:"P69",titleAl:"Strukture e Jashtem per Ashensor",titleEn:"Steelframe For Outdoor Lift",descAl:"Strukturë çeliku e jashtme për ashensor - skelet portant i projektuar për montimin e ashensorëve të jashtëm me siguri maksimale.",descEn:"Exterior steel frame for an outdoor lift - load-bearing structure engineered for the installation of external elevators with maximum safety.",cats:"Struktura",year:2023,thumb:"fotot-compressed/P69/69.1.webp",gallery:["fotot-compressed/P69/69.1.webp"]},
  {id:"P71",titleAl:"Tend Xhami dhe Celiku",titleEn:"Glass and Steel Roofing",descAl:"Tend per deren jashte, artizanale, e harketuar/punuar me dore.",descEn:"Handcrafted arched exterior door canopy - forged and shaped by hand for a bespoke, artisanal finish.",cats:"Porta & Dyer,Dekor & CNC",year:2019,thumb:"fotot-compressed/P71/71.1.webp",gallery:["fotot-compressed/P71/71.1.webp", "fotot-compressed/P71/71.2.webp"]},
  {id:"P72",titleAl:"Detaje Dere",titleEn:"Door Details",descAl:"Detaje te portave metalike te cilat perdoren brenda ne vila me ndare dhomat.",descEn:"Interior metal door details used in villas as elegant room dividers - where function meets refined design.",cats:"Porta & Dyer",year:2022,thumb:"fotot-compressed/P72/72.1.webp",gallery:["fotot-compressed/P72/72.1.webp", "fotot-compressed/P72/72.2.webp", "fotot-compressed/P72/72.3.webp"]},
  {id:"P73",titleAl:"Porte Hyrese Biznesi me Alumin dhe Celik",titleEn:"Business Entry with Aluminum and Steel",descAl:"Portë Hyrëse Biznesi me Çelik dhe Alekobond. (Flete alumini nga jashte me plastik brenda",descEn:"Business entry door built with steel and Alucobond panels - aluminum exterior with composite core for a sharp, professional facade.",cats:"Porta & Dyer,Fasada",year:2023,thumb:"fotot-compressed/P73/73.1.webp",gallery:["fotot-compressed/P73/73.1.webp", "fotot-compressed/P73/73.2.webp", "fotot-compressed/P73/73.3.webp", "fotot-compressed/P73/73.4.webp", "fotot-compressed/P73/73.5.webp"]},
  {id:"P74",titleAl:"Kangjella me Panel Dekorativ Laser",titleEn:"Railing with Laser-Cut Decorative Panel",descAl:"Kangjellë me panel dekorativ laser - prerje me lazer me motiv të sofistikuar e integruar në kangjellë për efekt vizual premium.",descEn:"Railing with laser-cut decorative panel - precision laser patterns integrated into the railing for a premium visual effect.",cats:"Kangjella & Korimano,Dekor & CNC",year:2024,thumb:"fotot-compressed/P74/74.1.webp",gallery:["fotot-compressed/P74/74.1.webp", "fotot-compressed/P74/74.2.webp"]},
  {id:"P75",titleAl:"Dere Celiku me gershetim xhami",titleEn:"Steel and glass inner door",descAl:"Dere e brendshme per apartamente ose vila. Detajet metalike dhe xham",descEn:"Interior door for apartments and villas - steel frame with glass inserts for a modern, light-filled feel.",cats:"Porta & Dyer",year:2023,thumb:"fotot-compressed/P75/75.1.webp",gallery:["fotot-compressed/P75/75.1.webp", "fotot-compressed/P75/75.2.webp"]},
  {id:"P76",titleAl:"Kangjella Balkon me Panel Celiku Perforuar",titleEn:"Balcony Railing with Perforated Steel Panel",descAl:"Kangjellë ballkoni me panel çeliku të perforuar - dizajn modern që ofron privatësi, ajrimin dhe estetikën njëkohësisht.",descEn:"Balcony railing with perforated steel panel - modern design that delivers privacy, ventilation, and aesthetics all at once.",cats:"Kangjella & Korimano,Dekor & CNC",year:2024,thumb:"fotot-compressed/P76/76.1.webp",gallery:["fotot-compressed/P76/76.1.webp", "fotot-compressed/P76/76.2.webp"]},
  {id:"P77",titleAl:"Harkim Celiku",titleEn:"Steel Warping",descAl:"Kalandrim (harkimi I metalit, pjesa e jashtme, harkim me presion dhe vaj) I llamarines se shkalles elikuidale",descEn:"Precision press-bending of sheet metal for the outer casing of a helical staircase - shaped under hydraulic pressure for a seamless curved finish.",cats:"Shkalle,Dekor & CNC",year:2022,thumb:"fotot-compressed/P77/77.1.webp",gallery:["fotot-compressed/P77/77.1.webp", "fotot-compressed/P77/77.2.webp", "fotot-compressed/P77/77.3.webp"]},
  {id:"P78",titleAl:"Kangjella Dritaresh",titleEn:"Window Steel Railing",descAl:"Kangjellë dritaresh çeliku - mbrojtje funksionale dhe estetike për dritare, e integruar me fasadën e ndërtesës.",descEn:"Window steel railing - functional and aesthetic protection for windows, seamlessly integrated with the building facade.",cats:"Kangjella & Korimano",year:2023,thumb:"fotot-compressed/P78/78.1.webp",gallery:["fotot-compressed/P78/78.1.webp", "fotot-compressed/P78/78.2.webp", "fotot-compressed/P78/78.3.webp"]},
  {id:"P79",titleAl:"Dekorim I Brendshem me rrjet te nje lokali.",titleEn:"Steel Net Decoration Bar",descAl:"Dekorim i brendshëm me rrjetë çeliku për lokal - ndarëse artistike që krijon atmosferë dhe identitet vizual unik.",descEn:"Interior steel net decoration for a bar - an artistic divider that creates atmosphere and a unique visual identity.",cats:"Arredim & Mobilje,Dekor & CNC",year:2022,thumb:"fotot-compressed/P79/79.1.webp",gallery:["fotot-compressed/P79/79.1.webp"]},
  {id:"P80",titleAl:"Kangjella me Panel Dekorativ Laser",titleEn:"Railing with Laser-Cut Decorative Panel",descAl:"Kangjella me cnc, dezinj modern",descEn:"Modern CNC-cut railing with precision laser patterns - clean lines and contemporary design in every detail.",cats:"Kangjella & Korimano,Dekor & CNC",year:2024,thumb:"fotot-compressed/P80/80.1.webp",gallery:["fotot-compressed/P80/80.1.webp"]},
  {id:"P81",titleAl:"Korimano e jashtme",titleEn:"Outer railing",descAl:"Korimano e jashtme çeliku - e projektuar për qëndrueshmëri afatgjatë dhe paraqitje të rregullt në çdo ambient të jashtëm.",descEn:"Exterior steel handrail - engineered for long-term durability and a clean appearance in any outdoor setting.",cats:"Kangjella & Korimano",year:2023,thumb:"fotot-compressed/P81/81.1.webp",gallery:["fotot-compressed/P81/81.1.webp"]},
  {id:"P82",titleAl:"Porte e jashtme skorever me pult",titleEn:"Remote Activated Car Gate",descAl:"Portë e jashtme me telekomandë - mekanizëm skorever i aktivizuar me pult, siguri e lartë dhe qasje e lehtë.",descEn:"Remote-activated exterior sliding gate - push-button operation, high security, and effortless access for vehicle entry.",cats:"Porta & Dyer",year:2024,thumb:"fotot-compressed/P82/82.1.webp",gallery:["fotot-compressed/P82/82.1.webp"]},
  {id:"P83",titleAl:"Dere e Jashtme Celiku",titleEn:"Steel Outer Gate",descAl:"Dere shpie e jashmte me dere druri nga brenda",descEn:"Exterior home entry door with a steel outer frame and a wood-paneled interior - combining security with warmth.",cats:"Porta & Dyer",year:2022,thumb:"fotot-compressed/P83/83.1.webp",gallery:["fotot-compressed/P83/83.1.webp"]},
  {id:"P84",titleAl:"Korimano te brendshme",titleEn:"Inner Railing",descAl:"Korimano të brendshme çeliku - dizajn i pastër dhe minimal i integruar me arkitekturën e brendshme të hapësirës.",descEn:"Interior steel handrails - clean and minimal design that integrates seamlessly with the interior architecture of any space.",cats:"Kangjella & Korimano",year:2023,thumb:"fotot-compressed/P84/84.1.webp",gallery:["fotot-compressed/P84/84.1.webp"]},
  {id:"P85",titleAl:"Korimano e brendshme e zeze",titleEn:"Inner Black Railing",descAl:"Korimano e brendshme e zezë çeliku - finish i zi mat që i shton karakter dhe thellësi çdo ambienti modern.",descEn:"Inner black steel railing - matte black finish that adds character and depth to any modern interior.",cats:"Kangjella & Korimano",year:2024,thumb:"fotot-compressed/P85/85.1.webp",gallery:["fotot-compressed/P85/85.1.webp"]},
  {id:"P86",titleAl:"Tavoline Ngrenieje me Baze Celiku",titleEn:"Steel Base Dining Table",descAl:"Tryezë ngrënieje me bazament çeliku - strukturë metalike e fortë dhe elegante që mban çdo sipërfaqe sipër.",descEn:"Dining table with a steel base - a strong and elegant metal structure that elevates any table surface above it.",cats:"Arredim & Mobilje",year:2023,thumb:"fotot-compressed/P86/86.1.webp",gallery:["fotot-compressed/P86/86.1.webp"]},
  {id:"P87",titleAl:"Korimano e Brendshme Fine",titleEn:"Fine looking Railing",descAl:"Korimano e brendshme fine - detaje metalike të holla dhe të lakuara me kujdes për ambient të rafinuar.",descEn:"Fine interior railing - slim, carefully curved metal details crafted for refined and sophisticated living spaces.",cats:"Kangjella & Korimano",year:2024,thumb:"fotot-compressed/P87/87.1.webp",gallery:["fotot-compressed/P87/87.1.webp"]},
  {id:"P88",titleAl:"Porte Dyfish Forje Klasike me Aksesore Ari",titleEn:"Classic Forged Double Gate with Gold Accents",descAl:"Portë dyshe klasike e farkëtuar me aksesore ari - elegancë tradicionale me aksesorë premium ari që nënvizojnë luksin.",descEn:"Classic forged double gate with gold accents - traditional elegance elevated by premium gold accessories that announce luxury.",cats:"Porta & Dyer,Dekor & CNC",year:2019,thumb:"fotot-compressed/P88/88.1.webp",gallery:["fotot-compressed/P88/88.1.webp"]},
  {id:"P89",titleAl:"Derë Celiku ne prodhim",titleEn:"Steel door in the works",descAl:"Dere e jashtme kembesori gjate procesit te prodhimit",descEn:"Pedestrian exterior door captured mid-production - a window into the precision and care behind every Worksteel build.",cats:"Porta & Dyer",year:2022,thumb:"fotot-compressed/P89/89.1.webp",gallery:["fotot-compressed/P89/89.1.webp", "fotot-compressed/P89/89.2.webp"]},
  {id:"P90",titleAl:"Kangjella Shkallesh Ngjyre Arte",titleEn:"Gold-Finish Staircase Railing",descAl:"Kangjellë shkallësh me ngjyrë ari - finish i artë dekorativ që kthën shkallët në element të theksuar arkitekturor.",descEn:"Gold-finish staircase railing - a decorative gold tone that transforms the staircase into a standout architectural feature.",cats:"Kangjella & Korimano,Dekor & CNC",year:2024,thumb:"fotot-compressed/P90/90.1.webp",gallery:["fotot-compressed/P90/90.1.webp"]},
  {id:"P91",titleAl:"Portë Celiku per Vila",titleEn:"Steel Villa Gate",descAl:"Portë çeliku për vilë - dizajn solid dhe reprezentativ, ndërtuar për siguri maksimale dhe prezencë dominuese.",descEn:"Steel villa gate - solid and representative design, built for maximum security and a commanding presence.",cats:"Porta & Dyer",year:2023,thumb:"fotot-compressed/P91/91.1.webp",gallery:["fotot-compressed/P91/91.1.webp"]},
  {id:"P92",titleAl:"Porte Floriri me Simbole Dekorative",titleEn:"Golden Gate with Decorative Symbols",descAl:"Portë me floriri dhe simbole dekorative - punë e farkëtuar me aksesorë ari dhe motive ornamentale për hyrje me karakter.",descEn:"Golden gate with decorative symbols - forged workmanship with gold accessories and ornamental motifs for a truly distinctive entrance.",cats:"Porta & Dyer,Dekor & CNC",year:2024,thumb:"fotot-compressed/P92/92.1.webp",gallery:["fotot-compressed/P92/92.1.webp"]},
  {id:"P93",titleAl:"Rafte të valëzuara",titleEn:"Waivy Shelfs",descAl:"Mbajtese metalike per dyqan kozmetike",descEn:"Custom steel display fixtures for a cosmetics retail store - clean, minimal, and built to showcase product with style.",cats:"Arredim & Mobilje",year:2023,thumb:"fotot-compressed/P93/93.1.webp",gallery:["fotot-compressed/P93/93.1.webp"]},
  {id:"P94",titleAl:"Kangjella Metalike per Restoranti",titleEn:"Metalic Restaurant Railing",descAl:"Kangjellë metalike për restorant - dizajn i qëndrueshëm dhe elegant i përshtatur për ambiente hoteliere dhe gastronomike.",descEn:"Metal railing for a restaurant - durable and elegant design tailored for hospitality and fine dining environments.",cats:"Kangjella & Korimano",year:2022,thumb:"fotot-compressed/P94/94.1.webp",gallery:["fotot-compressed/P94/94.1.webp"]},
  {id:"P95",titleAl:"Shtese kati",titleEn:"Building Floor raiser",descAl:"Shtesë kati me strukturë çeliku - zgjerim i sipërfaqes së ndërtesës me skelet metalik të qëndrueshëm dhe montim preciz.",descEn:"Building floor extension with a steel structure - expanding the property's footprint with a durable metal frame and precision installation.",cats:"Struktura,Fasada",year:2023,thumb:"fotot-compressed/P95/95.1.webp",gallery:["fotot-compressed/P95/95.1.webp", "fotot-compressed/P95/95.2.mp4"]},
  {id:"P96",titleAl:"Gril mbrojtese oxhaku.",titleEn:"Protective railing for a chimney",descAl:"Grilë mbrojtëse oxhaku - element i punuar me çelik për mbrojtje dhe estetikë të oxhakut të shtëpisë.",descEn:"Protective chimney steel grill - a custom steel element that secures and beautifies the home chimney opening.",cats:"Kangjella & Korimano",year:2024,thumb:"fotot-compressed/P96/96.1.webp",gallery:["fotot-compressed/P96/96.1.webp"]},
  {id:"P97",titleAl:"Bazament tavoline, me celik te zi",titleEn:"Black Steel Table Frame",descAl:"Bazament tryeze me çelik të zi - strukturë metalike e punuar në çelik të zi me finishe industriale dhe karakter të fortë.",descEn:"Black steel table base - a metal structure crafted in black steel with an industrial finish and strong character.",cats:"Arredim & Mobilje",year:2023,thumb:"fotot-compressed/P97/97.1.webp",gallery:["fotot-compressed/P97/97.1.webp"]},
  {id:"P99",titleAl:"Bazament tavoline  gold",titleEn:"Gold Coffee Table Frame",descAl:"Bazament tryeze kafeje me finish ari - strukturë elegante metalike me ton ari luksi, ideale për ambiente premium.",descEn:"Gold coffee table base - an elegant metal structure with a luxury gold tone, ideal for premium interior settings.",cats:"Arredim & Mobilje",year:2024,thumb:"fotot-compressed/P99/99.1.webp",gallery:["fotot-compressed/P99/99.1.webp"]},
  {id:"P100",titleAl:"Korimano e zezë me farkëtim",titleEn:"Black hand-shanped railing",descAl:"Korimano e zezë me farkëtim - punuar me dorë dhe formuar me farkëtim tradicional për karakter dhe origjinalitet unik.",descEn:"Black hand-forged railing - hand-crafted and shaped with traditional forging for unique character and originality.",cats:"Kangjella & Korimano,Dekor & CNC",year:2019,thumb:"fotot-compressed/P100/100.1.webp",gallery:["fotot-compressed/P100/100.1.webp"]},
  {id:"P101",titleAl:"Shkalle Celiku me Korimano Fine",titleEn:"Steel Staircase with a linear design",descAl:"Shkallë çeliku me korimano fine dhe dizajn linear - elegancë minimale që kombinon strukturën metalike me linja të pastra.",descEn:"Steel staircase with a fine linear railing - minimal elegance combining a steel structure with clean, precise lines.",cats:"Shkalle,Kangjella & Korimano",year:2024,thumb:"fotot-compressed/P101/101.1.webp",gallery:["fotot-compressed/P101/101.1.webp"]},
  {id:"P102",titleAl:"Detaje Kangjelle për Demonstrim",titleEn:"Railing Details Exibit",descAl:"Detaje kangjelle për demonstrim - ekspozim i aftësive teknike dhe artizanale të Worksteel në elemente kangjellash.",descEn:"Railing details exhibit - a showcase of Worksteel's technical and artisanal capabilities displayed in railing elements.",cats:"Kangjella & Korimano,Dekor & CNC",year:2023,thumb:"fotot-compressed/P102/102.1.webp",gallery:["fotot-compressed/P102/102.1.webp"]},
  {id:"P103",titleAl:"Rafte Celiku Ekspozite Produktesh",titleEn:"Steel Product Exhibition Shelving",descAl:"Rafte çeliku për ekspozitë produktesh - sistem raftesh metalik i projektuar për ekspozim profesional dhe vizibilitet maksimal.",descEn:"Steel product exhibition shelving - a metal shelving system designed for professional product display and maximum visibility.",cats:"Arredim & Mobilje",year:2024,thumb:"fotot-compressed/P103/103.1.webp",gallery:["fotot-compressed/P103/103.1.webp"]},
  {id:"P104",titleAl:"Gardhë I thjeshtë rrethues",titleEn:"Simple Outer Railing",descAl:"Gardh i thjeshtë rrethues - zgjidhje funksionale metalike për rrethimin e pronës me qëndrueshmëri dhe thjeshtësi.",descEn:"Simple perimeter fence - a functional metal solution for property enclosure with durability and clean simplicity.",cats:"Kangjella & Korimano",year:2022,thumb:"fotot-compressed/P104/104.1.webp",gallery:["fotot-compressed/P104/104.1.webp"]},
  {id:"P105",titleAl:"Detaje kangjelle te farketuara",titleEn:"Hand-Crafted Railing",descAl:"Detaje kangjellash të farkëtuara - punë artizanale me dorë që tregon nivelin e farkëtimit dhe saktësinë e Worksteel.",descEn:"Hand-crafted railing details - artisanal handwork that demonstrates Worksteel's level of forging mastery and precision.",cats:"Kangjella & Korimano,Dekor & CNC",year:2019,thumb:"fotot-compressed/P105/105.1.webp",gallery:["fotot-compressed/P105/105.1.webp"]},
  {id:"P106",titleAl:"Kornize Krevati Industrial Celik dhe Dru",titleEn:"Industrial Steel and Wood Bed Frame",descAl:"Kornizë krevati industrial çelik dhe dru - bashkim i fortë i metalit të zi me drurin natyral për estetikë moderne industriale.",descEn:"Industrial steel and wood bed frame - a bold combination of black steel and natural wood for a modern industrial aesthetic.",cats:"Arredim & Mobilje",year:2024,thumb:"fotot-compressed/P106/106.1.webp",gallery:["fotot-compressed/P106/106.1.webp"]},
  {id:"P107",titleAl:"Kangjella te farketuar dhe zinguar",titleEn:"Hand-Crafted Rust-Free Railing",descAl:"Kangjella të farkëtuara dhe të zingifikuara - punë me dorë e mbrojtur me zink për rezistencë maksimale ndaj ndryshkut.",descEn:"Hand-forged and galvanized railings - handcrafted work protected with zinc coating for maximum rust resistance and longevity.",cats:"Kangjella & Korimano",year:2023,thumb:"fotot-compressed/P107/107.1.webp",gallery:["fotot-compressed/P107/107.1.webp"]},
  {id:"P108",titleAl:"Porte Anesore e Vogel Rezidenciale",titleEn:"Small Residential Side Gate",descAl:"Portë anësore e vogël rezidenciale - hyrje këmbësorësh e ndërtuar me kujdes dhe dizajn koherent me portën kryesore.",descEn:"Small residential side gate - pedestrian entry built with care and design that matches the main gate coherently.",cats:"Porta & Dyer",year:2024,thumb:"fotot-compressed/P108/108.1.webp",gallery:["fotot-compressed/P108/108.1.webp"]},
  {id:"P109",titleAl:"Shkalle elekoitale grandioze",titleEn:"Grandious Spiral Staircase",descAl:"Shkallë elikoidale grandioze - shkallë spirale monumentale që bëhet pika qendrore vizuale e çdo hapësire ku vendoset.",descEn:"Grandiose spiral staircase - a monumental helical staircase that becomes the central visual focal point of any space.",cats:"Shkalle",year:2025,thumb:"fotot-compressed/P109/109.1.webp",gallery:["fotot-compressed/P109/109.1.webp", "fotot-compressed/P109/109.2.webp"]},
  {id:"P110",titleAl:"Elekoitale, ne ndertim e siper",titleEn:"Spiral Staircase in the Making",descAl:"Shkallë elikoidale në ndërtim e sipër - pamje nga procesi i prodhimit të një shkalle spirale, ku saktësia është thelbësore.",descEn:"Spiral staircase in the making - a glimpse into the production process where precision and craftsmanship define every step.",cats:"Shkalle",year:2025,thumb:"fotot-compressed/P110/110.1.webp",gallery:["fotot-compressed/P110/110.1.webp"]},
  {id:"P111",titleAl:"Kangjella me Panel Dekorativ, Prerje Laser",titleEn:"Railing with Laser-Cut Decorative Panel",descAl:"Kangjellë me panel dekorativ me prerje laser - motiv i sofistikuar i prerë me lazer që i shton thellësi dhe karakter kangjellës.",descEn:"Railing with laser-cut decorative panel - a sophisticated cut motif that adds depth and character to the railing design.",cats:"Kangjella & Korimano,Dekor & CNC",year:2024,thumb:"fotot-compressed/P111/111.1.webp",gallery:["fotot-compressed/P111/111.1.webp"]},
  {id:"P112",titleAl:"kondrabanak lokali ne modelim e siper",titleEn:"Bar Contertop in the making",descAl:"Kondrabanak lokali në modelim e sipër - fazë e prodhimit të banakut të lokalit, ku çdo detaj planifikohet me saktësi.",descEn:"Bar countertop in the making - production phase of a venue counter where every detail is planned and executed with precision.",cats:"Arredim & Mobilje",year:2025,thumb:"fotot-compressed/P112/112.1.webp",gallery:["fotot-compressed/P112/112.1.webp"]},
  {id:"P113",titleAl:"Portë e jashtme kundër ndryshkut",titleEn:"Rust-Free Outer Gate",descAl:"Portë e jashtme kundër ndryshkut - ndërtuar me material rezistent dhe trajtime mbrojtëse për jetëgjatësi maksimale.",descEn:"Rust-free exterior gate - built with resistant materials and protective treatments for maximum longevity in outdoor use.",cats:"Porta & Dyer",year:2023,thumb:"fotot-compressed/P113/113.1.webp",gallery:["fotot-compressed/P113/113.1.webp"]},
  {id:"P115",titleAl:"Shkalle e Jashtme Celiku",titleEn:"Exterior Steel Grating Staircase",descAl:"Shkallë e jashtme çeliku me grilë - strukturë e fortë metalike për hyrje të jashtme, e sigurt dhe e qëndrueshme.",descEn:"Exterior steel grating staircase - a robust metal structure for outdoor access, built for safety and long-term durability.",cats:"Shkalle",year:2024,thumb:"fotot-compressed/P115/115.1.webp",gallery:["fotot-compressed/P115/115.1.webp"]},
  {id:"P116",titleAl:"Demonstrim Aftesie: Kangjell me Farketim",titleEn:"Display of skills: Hand-bend Railing",descAl:"Demonstrim aftësie: Kangjellë me farkëtim - ekspozim i teknikës dhe kreativitetit të Worksteel në farkëtimin manual të metalit.",descEn:"Skills display: hand-bent railing - a demonstration of Worksteel's technique and creativity in manual metal forging and bending.",cats:"Kangjella & Korimano,Dekor & CNC",year:2025,thumb:"fotot-compressed/P116/116.1.webp",gallery:["fotot-compressed/P116/116.1.webp"]},
  {id:"P117",titleAl:"Korimano e brëndshme Metalike",titleEn:"Metal Floor-Level Railing",descAl:"Korimano e brendshme metalike - element i rëndësishëm sigurie dhe estetike i integruar me dyshemenë dhe arkitekturën e brendshme.",descEn:"Metal floor-level interior railing - a key safety and aesthetic element integrated with the flooring and interior architecture.",cats:"Kangjella & Korimano",year:2024,thumb:"fotot-compressed/P117/117.1.webp",gallery:["fotot-compressed/P117/117.1.webp"]},
  {id:"P118",titleAl:"Kangjella Ballkoni Moderne me element Floriri",titleEn:"Modern Balcony Railing with Gold Details",descAl:"Kangjellë ballkoni moderne me elementë floriri - dizajn bashkëkohor me detaje ari që ngrenë nivelin estetik të çdo ballkoni.",descEn:"Modern balcony railing with gold details - contemporary design with golden accents that elevate the aesthetic level of any balcony.",cats:"Kangjella & Korimano,Dekor & CNC",year:2025,thumb:"fotot-compressed/P118/118.1.webp",gallery:["fotot-compressed/P118/118.1.webp"]},
  {id:"P119",titleAl:"Kormiano Inoksi",titleEn:"Stainless Steel Spiral Staircase",descAl:"Korimano inoks - korimano e brendshme e punuar me çelik inox me sipërfaqe të pasqyrtë dhe rezistencë të lartë.",descEn:"Stainless steel handrail - interior handrail crafted in inox with a mirror-polished surface and superior corrosion resistance.",cats:"Kangjella & Korimano",year:2024,thumb:"fotot-compressed/P119/119.1.webp",gallery:["fotot-compressed/P119/119.1.webp"]},
  {id:"P120",titleAl:"Dere Celiku me gershetim xhami",titleEn:"Glass Incorporated Steel Door",descAl:"Derë çeliku me gërshetim xhami - strukturë metalike me panele xhami të integruara për kombinim optimal të sigurisë dhe dritës.",descEn:"Glass-incorporated steel door - metal structure with integrated glass panels for the optimal combination of security and natural light.",cats:"Porta & Dyer",year:2025,thumb:"fotot-compressed/P120/120.1.webp",gallery:["fotot-compressed/P120/120.1.webp"]},
  {id:"P121",titleAl:"Porte e jashtme me telekomand",titleEn:"Automatic Outer Steel Door",descAl:"Portë e jashtme automatike me telekomandë - operim i lehtë dhe i shpejtë, ndërtuar për besueshmëri dhe siguri afatgjatë.",descEn:"Automatic outer steel door with remote control - easy and fast operation, built for reliability and long-term security.",cats:"Porta & Dyer",year:2024,thumb:"fotot-compressed/P121/121.1.webp",gallery:["fotot-compressed/P121/121.1.webp"]},
  {id:"P122",titleAl:"Konstrukt per Politeknikun e arkitektures",titleEn:"Construct for the Architecture Polytechnic",descAl:"Konstrukt çeliku për Politenikun e Arkitekturës - strukturë metalike e projektuar dhe e montuar për institucione arsimore.",descEn:"Steel construct for the Architecture Polytechnic - a metal structure designed and assembled for educational institution use.",cats:"Struktura",year:2025,thumb:"fotot-compressed/P122/122.1.mp4",gallery:["fotot-compressed/P122/122.1.mp4", "fotot-compressed/P122/122.2.webp"]},
  {id:"P123",titleAl:"Porte Metalike me Panel Dru Kompozit",titleEn:"Metal Gate with Composite Wood Panel",descAl:"Portë metalike me panel druri kompozit - kombinim i strukturës çeliku me panel druri kompozit për pamje premium dhe qëndrueshmëri.",descEn:"Metal gate with composite wood panel - combining steel structure with composite wood panel for a premium look and lasting durability.",cats:"Porta & Dyer,Dekor & CNC",year:2024,thumb:"fotot-compressed/P123/123.1.webp",gallery:["fotot-compressed/P123/123.1.webp"]},
  {id:"P124",titleAl:"Panel Dekorativ Muri Metalik me Motiv",titleEn:"Decorative Metal Wall Panel with Motif",descAl:"Panel dekorativ muri metalik me motiv - art metalik i montuar në mur si element dekorativ dominues dhe identitar.",descEn:"Decorative metal wall panel with motif - metal art mounted on the wall as a dominant decorative and identity statement piece.",cats:"Fasada,Dekor & CNC",year:2025,thumb:"fotot-compressed/P124/124.1.webp",gallery:["fotot-compressed/P124/124.1.webp"]},
  {id:"P125",titleAl:"Porte Dyfish Automatike me Dizajn Horizontal",titleEn:"Automatic Double Gate with Horizontal Design",descAl:"Portë dyshe automatike me dizajn horizontal - shirita horizontalë dhe operim automatik për hyrje elegante dhe funksionale.",descEn:"Automatic double gate with horizontal design - horizontal bars and automatic operation for an elegant and functional entry.",cats:"Porta & Dyer",year:2024,thumb:"fotot-compressed/P125/125.webp",gallery:["fotot-compressed/P125/125.webp"]},
  {id:"P127",titleAl:"Porte e jashtme me detaje te gershetuara",titleEn:"Outer gate with intrecate details",descAl:"Portë e jashtme me detaje të gërshetuara - dizajn i pasur me motive të ndërthurura çeliku që tregojnë nivel të lartë artizanal.",descEn:"Outer gate with intricate woven details - a richly designed gate with interwoven steel motifs showcasing a high level of craftsmanship.",cats:"Porta & Dyer,Dekor & CNC",year:2025,thumb:"fotot-compressed/P127/127.1.webp",gallery:["fotot-compressed/P127/127.1.webp"]},
  {id:"P128",titleAl:"Detaje celiku",titleEn:"Steel Details",descAl:"Detaje çeliku - elementë të punuar me saktësi që tregojnë cilësinë e materialit dhe nivelit të punimit të Worksteel.",descEn:"Steel details - precisely crafted elements that showcase the quality of material and the standard of Worksteel's workmanship.",cats:"Dekor & CNC",year:2023,thumb:"fotot-compressed/P128/128.1.webp",gallery:["fotot-compressed/P128/128.1.webp"]},
  {id:"P129",titleAl:"Detaje farketimi",titleEn:"Hand-Crafted Details",descAl:"Detaje farkëtimi - elementë të farkëtuar me dorë që shfaqin artin dhe aftësinë teknike të zanatin tonë.",descEn:"Hand-crafted forging details - hand-forged elements that display the artistry and technical mastery of our craft.",cats:"Dekor & CNC",year:2022,thumb:"fotot-compressed/P129/129.1.webp",gallery:["fotot-compressed/P129/129.1.webp"]},
  {id:"P130",titleAl:"Kangjell me detale te lineare",titleEn:"Linear Details  Railing",descAl:"Kangjellë me detaje lineare - linja të pastra dhe ritmike metalike që krijojnë elegancë minimale dhe karakter arkitekturor.",descEn:"Linear details railing - clean, rhythmic metal lines that create minimal elegance and strong architectural character.",cats:"Kangjella & Korimano",year:2024,thumb:"fotot-compressed/P130/130.1.webp",gallery:["fotot-compressed/P130/130.1.webp"]},
  {id:"P131",titleAl:"Fasade Pallati",titleEn:"Building Fasade",descAl:"Fasadë pallati çeliku - veshje e jashtme metalike e montuar në pallat për mbrojtje dhe modernizim të fasadës.",descEn:"Building facade in steel - exterior metal cladding installed on a residential building for protection and modern facade renewal.",cats:"Fasada",year:2025,thumb:"fotot-compressed/P131/131.1.webp",gallery:["fotot-compressed/P131/131.1.webp"]},
  {id:"P132",titleAl:"Shkallë Celiku me Ndriçim",titleEn:"Back-lit Steel Stairs",descAl:"shkalle celiku te gershetuara me drru, me detaje drite per ambiente te brendshme",descEn:"Steel staircase interwoven with wood and integrated lighting details - crafted for refined interior spaces.",cats:"Shkalle,Dekor & CNC",year:2025,thumb:"fotot-compressed/P132/132.webp",gallery:["fotot-compressed/P132/132.webp"]},
  {id:"P133",titleAl:"Kangjella Celiku Dritareje Artizanale",titleEn:"Artisanal Steel Window Railing",descAl:"Kangjell e jashtme për vila, siguri maksimale",descEn:"Exterior villa railing built for maximum security - robust steel construction with a design that doesn't compromise on elegance.",cats:"Kangjella & Korimano",year:2024,thumb:"fotot-compressed/P133/133.1.webp",gallery:["fotot-compressed/P133/133.1.webp"]},
  {id:"P134",titleAl:"Vitrin per Akullore",titleEn:"Ice Cream Stand",descAl:"Vitrinë për akullore - strukturë dhe ekspozitor metalik i punuar posaçërisht për prezantim produktesh të ngrira.",descEn:"Ice cream display stand - a custom metal structure and display unit built specifically for presenting frozen products.",cats:"Arredim & Mobilje",year:2025,thumb:"fotot-compressed/P134/134.1.webp",gallery:["fotot-compressed/P134/134.1.webp"]},
  {id:"P135",titleAl:"Shkallë e Jashtme me Kangjella Dekorative",titleEn:"Exterior Staircase with Ornamental Railing",descAl:"Shkallë e jashtme me kangjella dekorative - strukturë e jashtme metalike me kangjella ornamentale për hyrje elegante.",descEn:"Exterior staircase with ornamental railing - an outdoor metal structure with decorative railings for an elegant, welcoming entry.",cats:"Shkalle,Kangjella & Korimano",year:2024,thumb:"fotot-compressed/P135/135.1.webp",gallery:["fotot-compressed/P135/135.1.webp"]},
  {id:"P136",titleAl:"Portë Industriale Solide me palosje me telekomand",titleEn:"Foldable Industrial Remote controlled steel gate",descAl:"Portë industriale e palosshme me telekomandë - dizajn solid dhe kompakt, hapet me pult për hyrje të mëdha industriale.",descEn:"Foldable industrial remote-controlled steel gate - solid and compact design that opens with a remote for large industrial access points.",cats:"Porta & Dyer",year:2025,thumb:"fotot-compressed/P136/136.1.webp",gallery:["fotot-compressed/P136/136.1.webp", "fotot-compressed/P136/136.2.webp"]},
  {id:"P137",titleAl:"Mbuluese Shiu",titleEn:"Outer Rain Cover",descAl:"fasade e jashtme e nxjerrur per parkim makine, krijim hije, bllookim djelli dhe shiu, golem",descEn:"Extended exterior facade structure for covered parking - engineered to block sun and rain while delivering a bold architectural statement.",cats:"Fasada,Struktura",year:2024,thumb:"fotot-compressed/P137/137.1.mp4",gallery:["fotot-compressed/P137/137.1.mp4"]},
  {id:"P138",titleAl:"Dere Hyrese Premium Rezidenciale",titleEn:"Premium Residential Entry Door",descAl:"Derë hyrëse premium rezidenciale - derë me dizajn të rafinuar dhe material premium çeliku për hyrje që lë përshtypje.",descEn:"Premium residential entry door - refined design and premium steel material for an entrance that makes a lasting impression.",cats:"Porta & Dyer",year:2025,thumb:"fotot-compressed/P138/138.1.webp",gallery:["fotot-compressed/P138/138.1.webp"]},
  {id:"P139",titleAl:"Kormiano e Farketuar",titleEn:"Hand-Shaped Railing",descAl:"Korimano e farkëtuar - punë klasike me dorë, ku metali formohet me forcë dhe saktësi për rezultat të qëndrueshëm dhe elegant.",descEn:"Hand-shaped forged railing - classic handwork where metal is formed with strength and precision for a lasting and elegant result.",cats:"Kangjella & Korimano,Dekor & CNC",year:2024,thumb:"fotot-compressed/P139/139.1.webp",gallery:["fotot-compressed/P139/139.1.webp"]}
];

// ========================
// PROJECT TITLE & META TRANSLATIONS
// ========================
const titleTranslations = {
  // Architecture
  'Sistem Dere Pivot':                'Pivot Entry System',
  'Parmak me Rrjetë Diamanti':        'Diamond Lattice Railing',
  'Parmak Ballkoni Ornamental':       'Ornamental Balcony Railing',
  'Ekran Metalik Dekorativ':          'Laser-Cut Metal Screen',
  'Shkallë Spirale Monumentale':      'Monumental Spiral Staircase',
  'Shkallë Aksesi të Jashtme':        'Exterior Access Staircase',
  'Shkallë Spirale Korten':           'Corten Spiral Staircase',
  'Shkallë e Varur':                  'Floating Staircase',
  'Shkallë e Jashtme':               'Commercial Exterior Staircase',
  'Detaj Kornize Çeliku':             'Black Steel Door Frame',
  'Skelet Strukturor Industrial':     'Industrial Structural Framework',
  'Veshje Muri Dekorative':           'Decorative Wall Cladding',
  'Parmak me Shufra Vertikale':       'Vertical Bar Railing',
  'Panel Hekuri Floral':              'Floral Scrollwork Panel',
  'Veshje Traversash Shkallësh':      'Stair Stringer Cladding',
  'Skelet Strukturor i Rëndë':        'Heavy Structural Framework',
  'Parmak Hekuri Ornamental':         'Ornamental Iron Railing',
  'Vizatimi Teknik i Parmakut':       'Railing Design Drawing',
  'Portë Rrëshqitëse e Zezë':         'Black Sliding Gate',
  'Shkallë Spirale Gri':              'Grey Spiral Staircase',
  'Derë Industriale me Dy Fletë':     'Bifold Industrial Door',
  'Strukturë Modulare Çeliku':        'Modular Steel Structure',
  'Montim Parmakësh në Punishte':     'Loop-Motif Railings',
  'Prodhim Serie i Gardhit':          'Fence Panel Batch',
  'Portë Hyrëse Automatike':          'Vertical Slat Driveway Gate',
  'Pamje Ajrore e Shkallëve':         'Aerial Stair Construction',
  'Veshje Kolone Inox':               'Column Cladding Panel',
  'Ansambël i Derës së Sigurisë':     'Security Door Assembly',
  // Objects
  'Unaza Koncentrike Çeliku':         'Concentric Steel Rings',
  'Raft Varës Gotash':                'Steel Hanging Rack',
  'Panel Artistik Korten':            'Corten Artistic Panel',
  'Sistem Rafti i Porositur':         'Custom Shelving System',
  'Tavolinë Pritjeje me Valë':        'Wavy Reception Desk',
  'Bordurë e Bazës Inox':             'Stainless Steel Base Trim',
  'Kolonë e Kanneluruar Bronzi':      'Fluted Bronze Column',
  'Raft me Rrjetë Inox':              'Expanded Mesh Shelf',
  'Kuti Metalike Shërbimi':           'Metal Utility Enclosure',
  'Detaj i Dorezës së Kutisë':        'Flush Enclosure Detail',
  'Rrafshi i Shkallëve Komerciale':   'Commercial Staircase Elevation',
  'Instalimi i Shkallëve Lisi':       'Oak Stair Installation',
};

const metaTranslations = {
  'Arkitekturë': 'Architecture',
  'Objekte':     'Objects',
  'Çelik':       'Steel',
};

// ========================
// PROJECT DATA
// ========================
const projectData = {
  // Architecture
  'Sistem Dere Pivot':              { category: 'Arkitekturë', year: '2022', client: 'Privat', desc: 'Kornizë çeliku e zezë me xham dhe panel anësor fiks.', descEn: 'Black steel frame with clear glass and fixed sidelight.' },
  'Parmak me Rrjetë Diamanti':      { category: 'Arkitekturë', year: '2022', client: 'Privat', desc: 'Panel metalik i porositur me medalion për Villa Xoxe.', descEn: 'Custom metal panel with medallion for Villa Xoxe.' },
  'Parmak Ballkoni Ornamental':     { category: 'Arkitekturë', year: '2020', client: 'Privat', desc: 'Punë hekuri me spirale dekorative për fasadë tulle.', descEn: 'Wrought-iron scrollwork patterns for brick facade.' },
  'Ekran Metalik Dekorativ':        { category: 'Arkitekturë', year: '2022', client: 'Privat', desc: 'Model gjeometrik i ndërthurur në çelik të prerë me lazer.', descEn: 'Geometric interlocking pattern in decorative steel.' },
  'Shkallë Spirale Monumentale':    { category: 'Arkitekturë', year: '2019', client: 'Privat', desc: 'Çelik helikal i bardhë me parmak të lakuar.', descEn: 'White helical steel with curved handrail.' },
  'Shkallë Aksesi të Jashtme':      { category: 'Arkitekturë', year: '2021', client: 'Privat', desc: 'Çelik gri dhe parmakë me shufra vertikale për ndërtesë kompozite.', descEn: 'Grey steel stairs and vertical bar railings for composite building.' },
  'Shkallë Spirale Korten':         { category: 'Arkitekturë', year: '2022', client: 'Privat', desc: 'Çelik korten helikal i rrethuar rreth një shtylle çeliku të zi.', descEn: 'Helical corten steel wrapped around a black steel column.' },
  'Shkallë e Varur':                { category: 'Arkitekturë', year: '2023', client: 'Privat', desc: 'Hapa lisi mbi çelik të lyer me pluhur dhe ndriçim LED.', descEn: 'Oak wood treads on powder-coated steel with integrated LED.' },
  'Shkallë e Jashtme':              { category: 'Arkitekturë', year: '2021', client: 'Privat', desc: 'Strukturë çeliku e pikturuar me të bardhë mbi fasadë xhami.', descEn: 'White painted steel structure on glass curtain wall.' },
  'Detaj Kornize Çeliku':           { category: 'Arkitekturë', year: '2023', client: 'Privat', desc: 'Detaj i bashkimit të këndit të kornizës me rrjetë çeliku.', descEn: 'Precision-welded corner junction of grid mullion pattern.' },
  'Skelet Strukturor Industrial':   { category: 'Arkitekturë', year: '2020', client: 'Privat', desc: 'Kolona çeliku dhe sistem trarësh çatie për përdorim tregtar.', descEn: 'Steel columns and roof truss system for commercial use.' },
  'Veshje Muri Dekorative':         { category: 'Arkitekturë', year: '2023', client: 'Privat', desc: 'Veshje muri nga dyshemeja deri në tavan për brenda një ambienti luksoz.', descEn: 'Floor-to-ceiling wall facade inside a luxury residential interior.' },
  'Parmak me Shufra Vertikale':     { category: 'Arkitekturë', year: '2022', client: 'Privat', desc: 'Parmak ballkoni prej çeliku të zi me balustrada të rrafshëta.', descEn: 'Black steel balcony railing with flat bar balusters.' },
  'Panel Hekuri Floral':            { category: 'Arkitekturë', year: '2021', client: 'Privat', desc: 'Ornament dekorativ hekuri gjatë fazës së fabrikimit.', descEn: 'Wrought-iron decorative tracery in the fabrication phase.' },
  'Veshje Traversash Shkallësh':    { category: 'Arkitekturë', year: '2021', client: 'Privat', desc: 'Panele anësore çeliku të bardha mbi shkallë betoni.', descEn: 'White steel side paneling on concrete staircase.' },
  'Skelet Strukturor i Rëndë':      { category: 'Arkitekturë', year: '2020', client: 'Privat', desc: 'Kolona çeliku dhe syneta për ndërtesë të madhe.', descEn: 'Steel columns and lateral bracing for large-scale building.' },
  'Parmak Hekuri Ornamental':       { category: 'Arkitekturë', year: '2021', client: 'Privat', desc: 'Shkallë hyrëse me motive rrethore të falsifikuara.', descEn: 'Entrance staircase with circular-loop motifs.' },
  'Vizatimi Teknik i Parmakut':     { category: 'Arkitekturë', year: '2022', client: 'Privat', desc: 'Plan teknik CAD për panel metalik me rrjetë diamanti.', descEn: 'Technical CAD plan for diamond lattice metal panel.' },
  'Portë Rrëshqitëse e Zezë':       { category: 'Arkitekturë', year: '2021', client: 'Privat', desc: 'Çelik i lyer me pluhur me dizajn gjeometrik.', descEn: 'Powder-coated steel with geometric panel layout.' },
  'Shkallë Spirale Gri':            { category: 'Arkitekturë', year: '2021', client: 'Privat', desc: 'Strukturë çeliku e lyer me pluhur në hapësirë betoni.', descEn: 'Powder-coated steel structure in raw concrete space.' },
  'Derë Industriale me Dy Fletë':   { category: 'Arkitekturë', year: '2020', client: 'Privat', desc: 'Çelik i lyer me pluhur të kuq për hyrje parkingu.', descEn: 'Red powder-coated steel for parking entrance.' },
  'Strukturë Modulare Çeliku':      { category: 'Arkitekturë', year: '2022', client: 'Privat', desc: 'Ndërtesë e veshur me shkallë aksesi të integruar.', descEn: 'Clad building with integrated black access staircase.' },
  'Montim Parmakësh në Punishte':   { category: 'Arkitekturë', year: '2021', client: 'Privat', desc: 'Set parmakësh çeliku gri gati për instalim.', descEn: 'Set of grey steel railings ready for site installation.' },
  'Prodhim Serie i Gardhit':        { category: 'Arkitekturë', year: '2022', client: 'Privat', desc: 'Panele metalike të fabrikuara në punishte.', descEn: 'Fabricated metal panels in the production workshop.' },
  'Portë Hyrëse Automatike':        { category: 'Arkitekturë', year: '2023', client: 'Privat', desc: 'Portë çeliku krem me shufra vertikale.', descEn: 'Automated cream powder-coated steel gate.' },
  'Pamje Ajrore e Shkallëve':       { category: 'Arkitekturë', year: '2022', client: 'Privat', desc: 'Pamje nga lart e paraqitjes së hapave të çelikut.', descEn: 'Top-down view of helical steel tread layout.' },
  'Veshje Kolone Inox':             { category: 'Arkitekturë', year: '2022', client: 'Privat', desc: 'Montim i panelit inox të brushuar rreth shtyllës së betonit.', descEn: 'Brushed stainless steel fit-out around concrete pillar.' },
  'Ansambël i Derës së Sigurisë':   { category: 'Arkitekturë', year: '2021', client: 'Privat', desc: 'Derë dhe portë metalike me dekorime të falsifikuara.', descEn: 'Black metal door and gate with ornamental scrollwork.' },
  // Objects
  'Unaza Koncentrike Çeliku':       { category: 'Objekte', year: '2022', client: 'Privat', desc: 'Instalacion dekorativ metalik i integruar me suva skulpturore.', descEn: 'Decorative metal installation integrated with sculptural plaster.' },
  'Raft Varës Gotash':              { category: 'Objekte', year: '2021', client: 'Privat', desc: 'Instalacion çeliku për bar me ndriçim Edison të integruar.', descEn: 'Custom bar installation with integrated Edison lighting.' },
  'Panel Artistik Korten':          { category: 'Objekte', year: '2021', client: 'Privat', desc: 'Çelik dekorativ i prerë me lazer për Universitetin Politeknik të Tiranës.', descEn: 'Laser-etched decorative steel for Polytechnic University of Tirana.' },
  'Sistem Rafti i Porositur':       { category: 'Objekte', year: '2022', client: 'Privat', desc: 'Korniza çeliku me furnir druri dhe ndriçim LED.', descEn: 'Steel frames with wood veneer and LED strip lighting.' },
  'Tavolinë Pritjeje me Valë':      { category: 'Objekte', year: '2022', client: 'Privat', desc: 'Çelik inox me lustër pasqyre për Europa Dental Hospital.', descEn: 'Mirror-polished stainless steel for Europa Dental Hospital.' },
  'Bordurë e Bazës Inox':           { category: 'Objekte', year: '2021', client: 'Privat', desc: 'Finalizimi i bordurës së çelikut inox në tavolinë të lakuar.', descEn: 'Finishing of brushed stainless steel on a curved counter.' },
  'Kolonë e Kanneluruar Bronzi':    { category: 'Objekte', year: '2022', client: 'Privat', desc: 'Kolonë metalike e skulpturuar si ndarëse hapësire.', descEn: 'Sculpted metal column serving as interior space divider.' },
  'Raft me Rrjetë Inox':            { category: 'Objekte', year: '2022', client: 'Privat', desc: 'Detaj i raftit prej rrjete çeliku inox me sfond të kuq.', descEn: 'Detail of stainless steel display rack with red backing.' },
  'Kuti Metalike Shërbimi':         { category: 'Objekte', year: '2022', client: 'Privat', desc: 'Strehim metalik rezistent ndaj motit mbi mur guri.', descEn: 'Powder-coated weatherproof housing on stone wall.' },
  'Detaj i Dorezës së Kutisë':      { category: 'Objekte', year: '2022', client: 'Privat', desc: 'Pamje e afërt e dorezës me kyç në kutinë metalike.', descEn: 'Close-up of lockable handle on powder-coated box.' },
  'Rrafshi i Shkallëve Komerciale': { category: 'Objekte', year: '2021', client: 'Privat', desc: 'Strukturë çeliku zigzag me lartësi të plotë në fasadë.', descEn: 'Full-height zigzag steel structure on glass facade.' },
  'Instalimi i Shkallëve Lisi':     { category: 'Objekte', year: '2022', client: 'Privat', desc: 'Strukturë druri dhe çeliku e përfunduar me shufra vertikale.', descEn: 'Completed wood and steel structure with floor-to-ceiling bars.' },
};

// ========================
// PROJECT MODAL
// ========================

// Cached modal element references (queried once, reused on every open)
var _modalEls = null;
function getModalEls() {
  if (_modalEls) return _modalEls;
  _modalEls = {
    category:   document.getElementById('modalCategory'),
    title:      document.getElementById('modalTitle'),
    desc:       document.getElementById('modalDesc'),
    year:       document.getElementById('modalYear'),
    client:     document.getElementById('modalClient'),
    mainImg:    document.getElementById('modalMainImg'),
    gallery:    document.getElementById('modalGallery'),
    img1:       document.getElementById('modalGalleryImg1'),
    img2:       document.getElementById('modalGalleryImg2'),
    img3:       document.getElementById('modalGalleryImg3'),
    relLabel:   document.getElementById('modalRelatedLabel'),
    relGrid:    document.getElementById('modalRelatedGrid'),
  };
  _modalEls.gallerySec = _modalEls.gallery ? _modalEls.gallery.querySelector('.project-modal-gallery-secondary') : null;
  return _modalEls;
}

// Pool of gallery images to cycle through
const galleryPool = [
  'fotot-compressed/P37/37.3.webp',
  'fotot-compressed/P128/128.1.webp',
  'fotot-compressed/P56/56.3.webp',
  'fotot-compressed/P109/109.1.webp',
  'fotot-compressed/P105/105.1.webp',
  'fotot-compressed/P115/115.1.webp',
  'fotot-compressed/P140/140.1.webp',
  'fotot-compressed/P43/43.5.webp',
];

function pickGalleryImgs(mainSrc) {
  // Pick 3 from pool that aren't the main image
  const pool = galleryPool.filter(s => !mainSrc.includes(s.split('/').pop()));
  const shuffled = pool.sort(() => 0.5 - Math.random());
  return shuffled.slice(0, 3);
}

function openProjectModal(card) {
  // Track which card is open so language switching can refresh the modal
  currentModalCard = card;

  // Read all data directly from card data attributes (stored at card creation time)
  const titleAl = card.dataset.titleAl || card.querySelector('.project-title').textContent.trim();
  const titleEn = card.dataset.titleEn || titleAl;
  const titleDisplay = currentLang === 'en' ? titleEn : titleAl;

  const descAl = card.dataset.descAl || '';
  const descEn = card.dataset.descEn || descAl;
  const descDisplay = currentLang === 'en'
    ? (descEn || descAl || 'Custom steel work by Work Steel.')
    : (descAl || 'Punim çeliku me porosi nga Work Steel.');

  const year = card.dataset.year || '';

  const categoryAl = card.dataset.categoryAl || card.querySelector('.project-meta').textContent.split('·')[0].trim() || 'Arkitekturë';
  const categoryEn = metaTranslations[categoryAl] || categoryAl;
  const categoryDisplay = currentLang === 'en' ? categoryEn : categoryAl;

  const mainImgSrc = card.querySelector('img').getAttribute('src');

  // Parse extra gallery photos (beyond the cover image)
  let galleryExtras = [];
  try {
    if (card.dataset.gallery) galleryExtras = JSON.parse(card.dataset.gallery);
  } catch(e) { galleryExtras = []; }

  // Populate modal header fields
  var m = getModalEls();
  m.category.textContent = categoryDisplay;
  m.title.textContent    = titleDisplay;
  m.desc.textContent     = descDisplay;
  m.year.textContent     = year;
  m.client.textContent   = 'Privat';
  m.mainImg.src          = mainImgSrc;
  m.mainImg.alt          = titleDisplay;

  // Gallery section — show only if there are extra photos beyond cover
  if (!galleryExtras || galleryExtras.length === 0) {
    m.gallery.style.display = 'none';
  } else {
    m.gallery.style.display = '';
    m.img1.src = galleryExtras[0];
    m.img1.alt = titleDisplay;
    if (galleryExtras.length === 1) {
      m.gallerySec.style.display = 'none';
    } else {
      m.gallerySec.style.display = '';
      m.img2.src = galleryExtras[1];
      m.img2.alt = titleDisplay;
      if (galleryExtras.length >= 3) {
        m.img3.parentElement.style.display = '';
        m.img3.src = galleryExtras[2];
        m.img3.alt = titleDisplay;
      } else {
        m.img3.parentElement.style.display = 'none';
      }
    }
  }

  // Related projects — random selection from same category, never the open card
  const t = translations[currentLang] || translations['al'];
  m.relLabel.textContent = t.modalRelated || 'PUNIME TË TJERA';
  const grid = m.relGrid;
  grid.innerHTML = '';
  const allCards = Array.from(document.querySelectorAll('.project-card'));
  // Build pool: same category, exclude current card — then shuffle for randomness
  let pool = allCards.filter(function(c) { return c !== card && c.dataset.categoryAl === categoryAl; });
  if (pool.length === 0) pool = allCards.filter(function(c) { return c !== card; });
  const others = shuffleArray(pool).slice(0, 3);
  others.forEach(function(c) {
    const relTitleAl = c.dataset.titleAl || '';
    const relTitleEn = c.dataset.titleEn || relTitleAl;
    const relTitle   = currentLang === 'en' ? relTitleEn : relTitleAl;
    const relCatAl   = c.dataset.categoryAl || '';
    const relCatEn   = metaTranslations[relCatAl] || relCatAl;
    const relCat     = currentLang === 'en' ? relCatEn : relCatAl;
    const relSrc     = c.querySelector('img').getAttribute('src');
    const div = document.createElement('div');
    div.className = 'modal-related-card';
    // Store bilingual data so switchLanguage can update without re-opening
    div.dataset.titleAl   = relTitleAl;
    div.dataset.titleEn   = relTitleEn;
    div.dataset.categoryAl = relCatAl;
    div.dataset.categoryEn = relCatEn;
    div.innerHTML = '<div class="modal-related-card-img"><img src="' + relSrc + '" alt="' + relTitle + '" loading="lazy" decoding="async"></div>'
      + '<p class="modal-related-card-title">' + relTitle + '</p>'
      + '<p class="modal-related-card-meta">' + relCat + ' · Çelik</p>';
    div.addEventListener('click', function() {
      var modal = document.getElementById('projectModal');
      if (modal.classList.contains('open')) {
        var content = modal.querySelector('.project-modal-content');
        content.style.animation = 'modalDismiss 0.28s cubic-bezier(0.55,0,1,0.45) both';
        setTimeout(function() {
          openProjectModal(c);
          modal.scrollTop = 0;
          content.style.animation = 'none';
          void content.offsetWidth;
          content.style.animation = 'modalReveal 0.55s cubic-bezier(0.16,1,0.3,1) both';
          setTimeout(function() { content.style.animation = ''; }, 560);
        }, 290);
      } else {
        openProjectModal(c);
      }
    });
    grid.appendChild(div);
  });

  const modal = document.getElementById('projectModal');
  modal.classList.add('open');
  modal.scrollTop = 0;
  document.body.style.overflow = 'hidden';

  // Browser back support
  history.pushState({ projectModal: true }, '');
}

function closeProjectModal() {
  const modal = document.getElementById('projectModal');
  modal.classList.add('closing');
  setTimeout(function() {
    modal.classList.remove('open', 'closing');
    document.body.style.overflow = '';
  }, 320);
}

// Browser back button closes modal
window.addEventListener('popstate', function(e) {
  const modal = document.getElementById('projectModal');
  if (modal.classList.contains('open')) {
    modal.classList.add('closing');
    setTimeout(function() {
      modal.classList.remove('open', 'closing');
      document.body.style.overflow = '';
    }, 320);
  }
});

document.addEventListener('keydown', (e) => {
  if (e.key === 'Escape') closeProjectModal();
});

// Delegated click handler for all project cards (static + dynamically cloned)
document.addEventListener('click', function(e) {
  var card = e.target.closest('.project-card');
  if (!card) return;
  e.preventDefault();
  openProjectModal(card);
});

// ========================
// NAVIGATION
// ========================
const pages = ['home','punet','arkitekture','objekte','sherbime','ekspertize','kontakt'];
let currentPage = 'home';

// ── OVERLAY COLOUR SYSTEM ──────────────────────────────────────────────
// Maps section CSS classes → background theme for the WS monogram & hamburger.
// Color theory: brass (warm gold) on dark, charcoal on cream/light, cream on bronze.
const SECTION_THEME_MAP = {
  'portfolio-section':     'light',
  'cat-section':           'light',
  'cat-hero':              'light',
  'faq-section':           'light',
  'domains-section':       'light',
  'steel-foundation':      'light',
  'services-editorial':    'bronze',
  'contact-types-section': 'light',
  'guiding-section':       'light',
  'exp-referencat':        'light',
};

function _getThemeAtY(pageId, checkY) {
  const pageEl = document.getElementById('page-' + pageId);
  if (!pageEl) return 'dark';
  const sections = pageEl.querySelectorAll('section, .cat-hero');
  let theme = 'dark';
  for (const sec of sections) {
    const r = sec.getBoundingClientRect();
    if (r.top <= checkY && r.bottom > checkY) {
      for (const cls in SECTION_THEME_MAP) {
        if (sec.classList.contains(cls)) { theme = SECTION_THEME_MAP[cls]; break; }
      }
      break;
    }
  }
  return theme;
}

function applyOverlayTheme(theme, skipHeader) {
  const mono  = document.getElementById('ws-monogram');
  const hb    = document.getElementById('hamburger');
  const hdr   = document.getElementById('site-header');
  if (!mono || !hb) return;

  mono.classList.remove('dark', 'on-bronze');
  hb.classList.remove('dark-bg', 'on-bronze');

  if (theme === 'light') {
    mono.classList.add('dark');
    hb.classList.add('dark-bg');
    if (!skipHeader) hdr && hdr.classList.add('light-theme');
  } else if (theme === 'bronze') {
    mono.classList.add('on-bronze');
    hb.classList.add('on-bronze');
    if (!skipHeader) hdr && hdr.classList.remove('light-theme');
  } else {
    if (!skipHeader) hdr && hdr.classList.remove('light-theme');
  }
}

function updateHeaderForPage(pageId) {
  // Active nav link
  document.querySelectorAll('.header-nav a').forEach(a => a.classList.remove('active-page'));
  var activePageId = (pageId === 'arkitekture' || pageId === 'objekte') ? 'punet' : pageId;
  const match = document.querySelector(`.header-nav a[data-page="${activePageId}"]`);
  if (match) match.classList.add('active-page');
  // Colour at scroll top (y=55 — centre of the fixed symbols)
  const theme = _getThemeAtY(pageId, 55);
  applyOverlayTheme(theme);
}

function updateOverlayOnScroll() {
  const theme = _getThemeAtY(currentPage, 55);
  applyOverlayTheme(theme, true); // skip header class — handled separately
}

function navigateTo(pageId) {
  if (pageId === currentPage) { window.scrollTo({ top: 0, behavior: 'smooth' }); return; }

  const prevPage = currentPage;
  currentPage = pageId;
  updateHeaderForPage(pageId);

  const oldEl = document.getElementById('page-' + prevPage);
  const newEl = document.getElementById('page-' + pageId);

  function revealCards() {
    if (pageId === 'punet') initPortfolio(pageId);
  }

  function enterCatTitle() {
    var title = newEl.querySelector('.cat-title');
    if (!title) return;
    title.classList.remove('title-entered');
    void title.offsetWidth;
    setTimeout(function() { title.classList.add('title-entered'); }, 60);
  }

  var scrollY = window.scrollY;
  var vh = window.innerHeight;
  var pageH = Math.max(oldEl.scrollHeight, vh);
  var pct = Math.max(0, Math.min(100, Math.round(((scrollY + vh * 0.5) / pageH) * 100)));
  oldEl.style.transformOrigin = 'center ' + pct + '%';
  oldEl.classList.add('page-exiting');

  setTimeout(function() {
    oldEl.classList.remove('active', 'page-exiting');
    oldEl.style.transformOrigin = '';
    newEl.classList.remove('no-enter-anim');
    newEl.classList.add('active', 'page-entering');
    window.scrollTo({ top: 0, behavior: 'instant' });

    if (pageId === 'punet') buildPunetGrid();
    enterCatTitle();

    setTimeout(function() {
      newEl.classList.remove('page-entering');
      newEl.classList.add('no-enter-anim');
      initScrollAnimations();
      revealCards();
    }, 260);
  }, 280);
}

// ========================
// HEADER SCROLL HIDE/SHOW
// ========================
let lastScroll = 0;
let scrollTicking = false;
const header = document.getElementById('site-header');

window.addEventListener('scroll', () => {
  if (!scrollTicking) {
    requestAnimationFrame(() => {
      const current = window.scrollY;
      const delta = current - lastScroll;
      // Only react to intentional scrolls (>6px), not micro-movements
      if (Math.abs(delta) > 6) {
        if (delta > 0 && current > 120) {
          header.classList.add('hidden');
        } else {
          header.classList.remove('hidden');
        }
        lastScroll = current;
      }
      updateOverlayOnScroll();
      scrollTicking = false;
    });
    scrollTicking = true;
  }
}, { passive: true });

// ========================
// SCROLL ANIMATIONS (Change 7: fix flickering)
// ========================
function initScrollAnimations() {
  var activePage = document.querySelector('.page.active');
  if (!activePage) return;

  // Apply staggered transition delays to visible project cards in grids
  activePage.querySelectorAll('.cat-grid, .portfolio-grid').forEach(function(grid) {
    var cards = grid.querySelectorAll('.project-card:not(.hidden-project)');
    cards.forEach(function(card, i) {
      // Stagger by row: cards 0+1 → 0s, cards 2+3 → 0.1s, etc.
      var delay = Math.floor(i / 2) * 0.1;
      card.style.setProperty('--stagger', delay + 's');
      card.classList.add('stagger-item');
    });
  });

  var selectors = '.fade-up:not(.hero-reveal), .fade-left:not(.hero-reveal), .fade-right:not(.hero-reveal), .img-reveal:not(.hero-reveal)';
  var els = activePage.querySelectorAll(selectors);

  var observer = new IntersectionObserver(function(entries) {
    entries.forEach(function(entry) {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        observer.unobserve(entry.target); // fire once only
      }
    });
  }, { threshold: 0.10, rootMargin: '0px 0px -60px 0px' });

  els.forEach(function(el) { observer.observe(el); });

  // Re-trigger word reveals on new page
  setTimeout(function() {
    activePage.querySelectorAll('.reveal-words').forEach(function(el) {
      var rect = el.getBoundingClientRect();
      if (rect.top < window.innerHeight) el.classList.add('words-visible');
    });
  }, 400);
}
initScrollAnimations();

// ========================
// FAQ ACCORDION
// ========================
function toggleFaq(btn) {
  const item = btn.closest('.faq-item');
  const answer = item.querySelector('.faq-a');
  const isOpen = btn.getAttribute('aria-expanded') === 'true';
  document.querySelectorAll('.faq-q[aria-expanded="true"]').forEach(function(b) {
    b.setAttribute('aria-expanded', 'false');
    b.closest('.faq-item').querySelector('.faq-a').classList.remove('open');
  });
  if (!isOpen) {
    btn.setAttribute('aria-expanded', 'true');
    answer.classList.add('open');
  }
}

// ========================
// CONTACT TYPE TOGGLE
// ========================
function toggleType(item) {
  const details = item.querySelector('.type-details');
  const isOpen = item.classList.contains('open');
  document.querySelectorAll('.contact-type-item').forEach(i => i.classList.remove('open'));
  document.querySelectorAll('.type-details').forEach(d => d.classList.remove('open'));
  if (!isOpen) {
    item.classList.add('open');
    details.classList.add('open');
  }
}

// ========================
// FILE UPLOAD ZONE
// ========================

var UPLOAD_ALLOWED_EXTS = ['jpg','jpeg','png','heic','pdf','dwg','dxf'];
var UPLOAD_MAX_SIZE = 10 * 1024 * 1024; // 10MB

function extIcon(name) {
  var ext = name.split('.').pop().toLowerCase();
  if (['jpg','jpeg','png','heic'].includes(ext)) return '🖼️';
  if (ext === 'pdf') return '📄';
  if (['dwg','dxf'].includes(ext)) return '📐';
  return '📎';
}

function initFileUpload(areaId, inputId, fileListId, promptId, addMoreBtnId, form) {
  var area       = document.getElementById(areaId);
  var input      = document.getElementById(inputId);
  var fileList   = document.getElementById(fileListId);
  var prompt     = document.getElementById(promptId);
  var addMoreBtn = document.getElementById(addMoreBtnId);

  if (!area || !input || !form) return;

  var dt = new DataTransfer();

  function renderList() {
    fileList.innerHTML = '';
    for (var i = 0; i < dt.files.length; i++) {
      var f = dt.files[i];
      var li = document.createElement('li');
      li.innerHTML =
        '<span class="file-icon">' + extIcon(f.name) + '</span>' +
        '<span class="file-info">' +
          '<span class="file-name">' + f.name + '</span>' +
          '<span class="file-type">' + f.name.split('.').pop().toUpperCase() + ' &mdash; ' + (f.size/1024/1024).toFixed(2) + ' MB</span>' +
        '</span>' +
        '<button class="file-remove" type="button" data-idx="' + i + '" title="Hiq skedarin">✕</button>';
      fileList.appendChild(li);
    }
  }

  // Use event delegation on fileList to avoid accumulating listeners
  fileList.addEventListener('click', function(e) {
    var btn = e.target.closest('.file-remove');
    if (!btn) return;
    e.stopPropagation();
    var idx = parseInt(btn.dataset.idx);
    var newDt = new DataTransfer();
    for (var j = 0; j < dt.files.length; j++) {
      if (j !== idx) newDt.items.add(dt.files[j]);
    }
    dt = newDt;
    renderList();
    updateUI();
  });

  function updateUI() {
    var hasFiles = dt.files.length > 0;
    prompt.style.display     = hasFiles ? 'none' : '';
    fileList.style.display   = hasFiles ? '' : 'none';
    addMoreBtn.style.display = hasFiles ? '' : 'none';
  }

  function addFiles(newFiles) {
    var rejected = [];
    for (var i = 0; i < newFiles.length; i++) {
      var f = newFiles[i];
      var ext = f.name.split('.').pop().toLowerCase();
      if (!UPLOAD_ALLOWED_EXTS.includes(ext)) { rejected.push(f.name + ' (lloj i palejueshëm / unsupported type)'); continue; }
      if (f.size > UPLOAD_MAX_SIZE) { rejected.push(f.name + ' (max 10MB)'); continue; }
      var dup = false;
      for (var j = 0; j < dt.files.length; j++) {
        if (dt.files[j].name === f.name && dt.files[j].size === f.size) { dup = true; break; }
      }
      if (!dup) dt.items.add(f);
    }
    if (rejected.length) alert('Skedarët e mëposhtëm u refuzuan:\n' + rejected.join('\n'));
    renderList();
    updateUI();
  }

  area.addEventListener('click', function(e) {
    if (e.target.closest('.file-remove') || e.target.closest('#' + addMoreBtnId)) return;
    input.click();
  });

  input.addEventListener('change', function() {
    addFiles(this.files);
    this.value = '';
  });

  area.addEventListener('dragover', function(e) { e.preventDefault(); area.classList.add('drag-over'); });
  area.addEventListener('dragleave', function() { area.classList.remove('drag-over'); });
  area.addEventListener('drop', function(e) {
    e.preventDefault();
    area.classList.remove('drag-over');
    addFiles(e.dataTransfer.files);
  });

  form.addEventListener('submit', function(e) {
    if (dt.files.length === 0) return;
    e.preventDefault();
    var formData = new FormData(form);
    formData.delete('attachments[]');
    for (var i = 0; i < dt.files.length; i++) { formData.append('attachments[]', dt.files[i]); }

    var submitBtn = form.querySelector('button[type="submit"]');
    var originalText = submitBtn.textContent;
    submitBtn.textContent = currentLang === 'en' ? 'Sending...' : 'Duke dërguar...';
    submitBtn.disabled = true;

    fetch(form.action, { method: 'POST', body: formData, headers: { 'Accept': 'application/json' } })
      .then(function(res) {
        if (res.ok) {
          submitBtn.textContent = currentLang === 'en' ? '✓ Sent!' : '✓ U dërgua!';
          form.reset();
          dt = new DataTransfer();
          renderList();
          updateUI();
          setTimeout(function() { submitBtn.textContent = originalText; submitBtn.disabled = false; }, 3500);
        } else {
          submitBtn.textContent = currentLang === 'en' ? 'Error — try again' : 'Gabim — riprovo';
          submitBtn.disabled = false;
        }
      })
      .catch(function() {
        submitBtn.textContent = currentLang === 'en' ? 'Error — try again' : 'Gabim — riprovo';
        submitBtn.disabled = false;
      });
  });
}

// Home page contact form upload
(function() {
  var area = document.getElementById('uploadArea');
  var form = area ? area.closest('section').querySelector('form.contact-form-ws') : null;
  initFileUpload('uploadArea', 'fileInput', 'fileList', 'uploadPrompt', 'addMoreBtn', form);
})();

// Kontakt page upload
(function() {
  initFileUpload('uploadAreaK', 'fileInputK', 'fileListK', 'uploadPromptK', 'addMoreBtnK', document.getElementById('ksContactForm'));
})();

// ========================
// MOBILE MENU
// ========================
var _menuScrollY = 0;
function openMobileMenu() {
  _menuScrollY = window.scrollY;
  document.getElementById('mobile-menu').classList.add('open');
  var hb = document.getElementById('hamburger');
  if (hb) hb.classList.add('menu-open');
  var mono = document.getElementById('ws-monogram');
  if (mono) mono.style.opacity = '0';
  document.body.style.overflow = 'hidden';
}
function closeMobileMenu() {
  document.getElementById('mobile-menu').classList.remove('open');
  var hb = document.getElementById('hamburger');
  if (hb) hb.classList.remove('menu-open');
  var mono = document.getElementById('ws-monogram');
  if (mono) mono.style.opacity = '';
  document.body.style.overflow = '';
  window.scrollTo(0, _menuScrollY);
}

// ========================
// LANGUAGE TOGGLE
// ========================
let currentLang = 'al';
let currentModalCard = null; // tracks whichever card the modal is showing

function shuffleArray(arr) {
  var a = arr.slice();
  for (var i = a.length - 1; i > 0; i--) {
    var j = Math.floor(Math.random() * (i + 1));
    var tmp = a[i]; a[i] = a[j]; a[j] = tmp;
  }
  return a;
}

const translations = {
  al: {
    // ── HOME ──
    heroStatement: '<span class="vh">Punime metalike me porosi — shkallë, parmakë dhe struktura çeliku të bëra me dorë në Tiranë.</span><span class="hero-line-1" aria-hidden="true">Punime metalike me porosi</span><span class="hero-line-2" aria-hidden="true">Shkallë,</span><span class="hero-line-3" aria-hidden="true">parmakë &amp; çelik</span><span class="hero-line-4" aria-hidden="true">me dorë — Tiranë.</span>',
    aboutText: 'Që nga viti 2018, kemi realizuar mbi 120 projekte për arkitektë, dizajnerë dhe klientë privatë në mbarë Shqipërinë. Çdo punim mban emrin tonë.',
    aboutCaption: 'Punishtja jonë ndodhet në zemër të Tiranës. Saldim TIG/MIG, prerje precize, finitura me dorë — çdo fazë brenda punishtjes sonë, pa ndërmjetës, pa kompromis.',
    btnOferte: 'KËRKO OFERTË FALAS',
    btnPunet: 'PUNËT',
    btnExpertiza: 'SHËRBIMET',
    missionText: 'Prodhim me porosi i strukturave dhe objekteve prej çeliku. Çdo punë fillon me një bisedë — dhe mbaron kur ju jeni plotësisht të kënaqur.',
    showMore: 'Për më shumë',
    servicesIntro: 'Nga shkallë spirale deri te skulptura metalike — çdo gjë kryhet brenda punishtjes sonë, pa ndërmjetës.',
    processLabel: 'PROCESI',
    processTitle: 'Si Punojmë',
    processLeadtime: 'Koha aktuale e pritjes: <strong>3–4 javë</strong> nga miratimi i vizatimeve.',
    step1Title: 'Biseda',     step1Desc: 'Takohemi, dëgjojmë dhe kuptojmë çfarë keni nevojë. Pa formula — vetëm bisedë e drejtpërdrejtë.', step1Time: 'Ofertë brenda 48 orëve',
    step2Title: 'Vizatimi',   step2Desc: 'Ndërtojmë vizatime teknike dhe modele 3D — ju miratoni çdo detaj para se të prekë çeliku.', step2Time: 'Vizatime brenda 5–7 ditëve',
    step3Title: 'Fabrikimi',  step3Desc: 'Punojmë brenda punishtjes sonë — saldim MIG/TIG, prerje me precizion, trajtim sipërfaqeje.', step3Time: 'Prodhim 3–6 javë',
    step4Title: 'Dorëzimi',   step4Desc: 'Ekipi ynë instalon, kontrollon dhe dorëzon. Nuk largohemi derisa gjithçka është si duhet.', step4Time: 'Garanci 2 vjet',
    contactLabel: 'KONTAKTO',
    contactTitle: 'Na Kontaktoni',
    formName: 'Emri', formEmail: 'Email', formPhone: 'Telefon', formMessage: 'Mesazhi',
    formFile: 'Bashkangjit Skedar', formSend: 'KËRKO OFERTË',
    uploadText: 'Shtoni foto këtu', uploadBtn: 'ZGJIDHNI FOTO',
    showProject: 'Shiko projektin',
    // ── NAV / FOOTER ──
    navArch: 'ARKITEKTURË', navObj: 'OBJEKTE', navServices: 'SHËRBIME',
    navExpertise: 'EKSPERTIZË', navContact: 'KONTAKT',
    mobileNavArch: 'Arkitekturë', mobileNavObj: 'Objekte',
    mobileNavServices: 'Shërbime', mobileNavExpertise: 'Ekspertizë', mobileNavContact: 'Kontakt',
    footerNavProjects: 'PUNËT', footerNavServices: 'SHËRBIMET', footerNavExpertise: 'EKSPERTIZË', footerNavContact: 'KONTAKT',
    footerTagline: 'Punime Metalike me Porosi · Custom Metalwork',
    footerCopyright: '© Work Steel që nga 2018',
    // ── PORTFOLIO ──
    archPageTitle: 'Arkitekturë',
    archFilterActive: 'Arkitekturë ×', archFilterOther: 'Objekte',
    objPageTitle: 'Objekte',
    objFilterOther: 'Arkitekturë', objFilterActive: 'Objekte ×',
    portfolioFilterLabel: 'FILTRO SIPAS',
    portfolioShowMore: 'SHFAQ MË SHUMË',
    // ── EKSPERTIZË ──
    expHeroLabel: 'Çfarë Bëjmë',
    expHeroTitle: 'Ekspertiza',
    expHeroTexts: [
      'Punishtja jonë është vendosur në Tiranë — një hapësirë ku çdo veglë ka vendin e saj dhe çdo saldim ka qëllim.',
      'Që nga viti 2018, kemi punuar me arkitektë, dekoratorë dhe privatë — duke ofruar strukturë, formë dhe rezistencë.',
      'Nuk premtojmë gjëra të mëdha — bëjmë punë të mirë, me kujdes, me kohë.',
      'Çdo projekt mban emrin tonë — dhe kjo gjë na angazhon plotësisht.'
    ],
    expAccordionTitles: ['Angazhimi', 'Cilësia', 'Teknika', 'Rrjeti', 'Afati Kohor'],
    expAccordionBodies: [
      'Marrim çdo projekt si të ishte i yni — nga vizatimi i parë deri te vidhosja e fundit.',
      'Çeliku që përdorim është i certifikuar. Saldimi kontrollohet. Asnjë copë nuk del nga punishtja pa aprovimin tonë.',
      'Zotërojmë prerjen me precizion, saldimin TIG/MIG dhe formimin manual — e gjitha brenda punishtjes.',
      'Bashkëpunojmë me arkitektë, dizajnerë dhe furnizues të selektuar — njerëz me të cilët ndajmë standardet.',
      'Respektojmë çdo afat të rënë dakord. Shumica e projekteve janë gati brenda 3–6 javësh.'
    ],
    expRefTitle: 'Me Kë Punojmë',
    expRefLabels: ['Marka', 'Dizajnerë, Krijues, Klientë Privatë', 'Kompani Prodhimi', 'Firma Arkitekture', 'Mbulesë'],
    // ── SHËRBIME ──
    servicesHeroTitle: 'Shërbimet',
    servicesHeroDesc: 'Punime çeliku me porosi — nga strukturat portante deri te objektet e veçanta. Gjithçka prodhuar brenda punishtjes.',
    servicesEditorialIntro: 'Çdo projekt fillon me një vizion. Ne e ndërtojmë atë me çelik.',
    servicesEditorialTitles: ['Arkitekturë', 'Dizajn &amp; Ambiente', 'Prodhime Artistike', 'Luksi', 'Struktur Metalike'],
    servicesEditorialSubs: ['Nën-kontraktim artistik', 'Prezantime, objekte', 'Teatër, kinema'],
    domainsLabel: 'FUSHAT E APLIKIMIT',
    domainsHeading: 'Ku Punon Work Steel',
    domainTitles: ['Arkitekturë', 'Dizajn Interior', 'Arte &amp; Skulpturë', 'Industri &amp; Ndërtim', 'Struktur Metalike', 'Luksi &amp; Prezantim'],
    domainDescs: [
      'Shkallë, railingë, dyer dhe struktura portante çeliku — punime të qëndrueshme për hapësirat tuaja.',
      'Raftë, elementë ndriçimi dhe detaje dekorative çeliku që i japin karakter çdo ambienti.',
      'Skulptura metalike dhe instalacione artistike me porosi — për hapësira publike dhe private.',
      'Struktura industriale, ura këmbësorësh dhe komponentë strukturorë me specifikime teknike.',
      'Elementë skenografike për teatër dhe produksione filmike — precizion dhe besueshmëri.',
      'Ekspozitorë, objekte luksi dhe instalacione unike për ambiente premium dhe showroom.'
    ],
    domainLink: 'MËSO MË SHUMË →',
    steelFoundationTexts: [
      'Çeliku nuk është thjesht një material — është baza e çdo gjëje që ndërtojmë. Rezistenca e tij, qëndrueshmëria dhe shumëllojshmëria e bëjnë atë materialin ideal për punën tonë.',
      'Çdo copë çeliku që kalon nëpër punishtjen tonë punësohet me kujdes dhe precizion — duke u shndërruar nga lëndë e parë në vepër të finalizuar.'
    ],
    qseHeadings: ['Cilësi', 'Siguri', 'Mjedisi'],
    qseSubheadings: ['Asnjë Kompromis', 'Ndërtuar për të Qëndruar', 'Çelik i Qëndrueshëm'],
    qseDescs: [
      'Çdo punë e Work Steel kalon kontrolle rigoroze të cilësisë. Përdorim çelik të certifikuar dhe teknika saldimi sipas standardeve EN ISO.',
      'Ekipi ynë ndjek protokolle strikte gjatë fabrikimit dhe instalimit. Strukturat tona janë projektuar për dekada.',
      'Çeliku është 100% i riciklueshëm. Work Steel minimizon mbetjet dhe ripërdor materialin sa herë është e mundur.'
    ],
    // ── KONTAKT ──
    kontaktHeroTitle: 'Kontakt',
    contactTypesLabel: 'KUSH JEMI NE PËR',
    contactTypeTitle1: 'Privatë', contactTypeMore1: 'Mëso më shumë',
    contactTypeDetail1: 'Punojmë direkt me individë — njerëz me një ide të qartë për hapësirën e tyre dhe shije për detajin. Nga skica e parë deri te vidhosja e fundit.',
    contactTypeTitle2: 'Arkitektë &amp; Dekoratorë', contactTypeMore2: 'Mëso më shumë',
    contactTypeDetail2: 'Work Steel është nën-kontraktor i preferuar i arkitektëve dhe dekoratorëve në Shqipëri. Ofrojmë vizatime teknike, modele 3D dhe zgjidhje çeliku me precizion.',
    guidingLabel: 'DUKE JU UDHËHEQUR',
    guidingStatement: 'Nuk transferojmë projekte dhe as nuk dërgojmë njerëz të panjohur. E njëjta dorë që diskuton projektin e bën atë — nga fillimi deri në fund.',
    kontaktSectionLabel: 'KONTAKTO',
    kontaktFormTitle: 'Na Kontaktoni',
    kontaktFormName: 'Emri', kontaktFormEmail: 'Email', kontaktFormPhone: 'Telefon', kontaktFormMessage: 'Mesazhi',
    kontaktFormSend: 'DËRGO',
    kontaktUploadText: 'Shtoni skedarë këtu', kontaktUploadBtn: 'Zgjidhni Skedarë', kontaktAddMore: '+ Shto më shumë',
    // ── MODAL ──
    modalBack: '← KTHEHU TE PUNËT',
    modalYear: 'VITI', modalClient: 'KLIENTI', modalMaterial: 'MATERIALI', modalMaterialVal: 'Çelik',
    modalRelated: 'PUNIME TË TJERA',
    punet_pageTitle: 'Punët',
    punet_filterAll: 'Të Gjitha',
    punet_filterArch: 'Shkallë',
    punet_filterObj: 'Kangjella & Korimano',
    punet_filterGates: 'Porta & Dyer',
    punet_filterStructures: 'Struktura',
    punet_filterInteriors: 'Arredim & Mobilje',
    punet_filterDecor: 'Dekor & CNC',
    punet_searchPlaceholder: 'Kërko punën...',
    punet_recLabel: 'Për më shumë',
    // ── FAQ ──
    faqLabel: 'PYETJE TË SHPESHTA',
    faqHeading: 'Çfarë Duhet të Dini',
    faqQ1: 'Sa kushton një shkallë çeliku me porosi?',
    faqA1: 'Çmimi varet nga dimensionet, materiali (çelik i lyer, inoks ose corten), forma dhe finitura. Projektet tona fillojnë nga 1 500 € dhe variojnë sipas kompleksitetit. Na kontaktoni për një vlerësim falas brenda 48 orëve.',
    faqQ2: 'Sa kohë zgjat prodhimi dhe instalimi?',
    faqA2: 'Shumica e projekteve janë gati brenda 3–6 javësh nga miratimi i vizatimeve. Vizatimet teknike dhe modelet 3D janë gati brenda 5–7 ditëve. Instalimi zakonisht kryhet brenda 1–2 ditëve pune.',
    faqQ3: 'A punoni jashtë Tiranës?',
    faqA3: 'Po. Kemi realizuar projekte në Durrës, Vlorë, Shkodër, Elbasan dhe qytete të tjera. Transporti dhe instalimi koordinohen nga ekipi ynë — pa ndërmjetës.',
    faqQ4: 'A ofrohet garanci për punimet?',
    faqA4: 'Po. Të gjitha punimet tona mbulohen nga garancia 2-vjeçare për defekte fabrikimi. Çeliku i trajtuar siç duhet zgjat dhjetëra vjet — dhe ne qëndrojmë pas çdo punë.',
    faqQ5: 'A mund të punoni nga vizatimet e arkitektit tim?',
    faqA5: 'Absolutisht. Jemi nën-kontraktorët e preferuar të shumë arkitektëve dhe dekoratorëve në Shqipëri. Pranojmë skica, AutoCAD, DXF, PDF ose thjesht një foto dhe idenë tuaj — dhe ndërtojmë nga zeroja.',
    faqQ6: 'Si funksionon pagesa dhe çfarë materialesh përdorni?',
    faqA6: 'Pagesa ndahet në tre faza: 30% paradhënie pas miratimit të vizatimeve, 40% gjatë prodhimit dhe 30% pas instalimit. Çeliku që përdorim është i certifikuar sipas standardeve europiane (EN) — inoks AISI 304/316, çelik konstruktiv S235/S355 dhe corten A606.',
    faqQ7: 'Çfarë ndodh nëse dizajni nuk më pëlqen?',
    faqA7: 'Para se të prekë çeliku, ju miratoni çdo detaj — vizatimet teknike dhe modelet 3D. Kemi të drejtë rishikimi pa kosto shtesë deri sa dizajni të jetë saktësisht si e dëshironi. Prodhimi fillon vetëm pas nënshkrimit të miratimit tuaj.',
    faqQ8: 'A mund të shoh punime të mëparshme para se të vendos?',
    faqA8: 'Po. Portfolioja jonë në këtë faqe tregon një pjesë të punimeve të realizuara. Gjithashtu mund të vizitoni faqen tonë në Instagram @work_steel_shpk ku publikojmë projekte të reja rregullisht. Me kërkesë, mund të organizojmë një vizitë te punimet e klientëve tanë.',
    // ── FORM / CONTACT ──
    formIntro: 'Gati për të filluar projektin tuaj? Na dërgoni mesazhin tuaj me foto dhe skica. Ju përgjigjemi brenda 24 orëve me një afat kohor dhe vlerësim çmimi.',
    formIntroK: 'Gati për të filluar projektin tuaj? Na dërgoni mesazhin tuaj me foto dhe skica — ju përgjigjemi brenda 24 orëve.',
    gdprText: 'Pranoj që të dhënat e mia të përdoren vetëm për t\'iu përgjigjur këtij mesazhi, sipas <a href="/privacy.html">Politikës së Privatësisë</a>.',
    gdprTextK: 'Pranoj politikën e privatësisë dhe përdorimin e të dhënave të mia për t\'iu përgjigjur mesazhit.',
    contactColAddress: 'Adresa',
    contactColHours: 'E Hënë — E Premte, 08:00 — 18:00',
    navArchitecture: 'Arkitekturë',
    navObjekte: 'Objekte',
    navSherbime: 'Shërbime',
    navKontakt: 'Kontakt',
    contactColContact: 'Kontaktet',
    contactColSocial: 'Mediat tona sociale',
    // ── COOKIE BANNER ──
    cookieText: 'Ne përdorim cookies për të analizuar trafikun dhe për të përmirësuar përvojën tuaj. Duke klikuar "Prano", ju pranoni përdorimin tonë të cookies. <a href="/privacy.html">Mëso më shumë</a>',
    cookieAccept: 'Prano',
    cookieDecline: 'Vetëm e nevojshme',
    // ── TRUST + MICROCOPY ──
    heroMicrocopy: 'Pa detyrim. Ofertë brenda 48 orëve.',
    trustProjects: 'Projekte',
    trustSince: 'Që nga',
    trustWarranty: 'Garanci',
    trustWarrantyNum: '2<span style="font-size:0.6em;opacity:0.7;">vjet</span>',
    heroCtaAria: 'Kërko ofertë falas',
    waAria: 'Kontakto Work Steel në WhatsApp',
    mobCtaCall: 'Telefono',
    mobCtaWa: 'WhatsApp',
    cookieAria: 'Njoftim për cookies',
    faqAria: 'Pyetje të shpeshta',
  },
  en: {
    // ── HOME ──
    heroStatement: '<span class="vh">Custom metalwork to order — staircases, railings and steel structures handcrafted in Tirana, Albania.</span><span class="hero-line-1" aria-hidden="true">Custom metalwork to order</span><span class="hero-line-2" aria-hidden="true">Staircases,</span><span class="hero-line-3" aria-hidden="true">railings &amp; steel</span><span class="hero-line-4" aria-hidden="true">handcrafted — Tirana.</span>',
    aboutText: 'Since 2018, we\'ve delivered 120+ projects for architects, designers and private clients across Albania. Every piece carries our name.',
    aboutCaption: 'Our workshop is in the heart of Tirana. TIG/MIG welding, precision cutting, hand finishing — every job handled in-house, without intermediaries or compromise.',
    btnOferte: 'REQUEST FREE QUOTE',
    btnPunet: 'PROJECTS',
    btnExpertiza: 'SERVICES',
    missionText: 'Custom fabrication of steel structures and objects. Every job starts with a conversation — and ends when you are fully satisfied.',
    showMore: 'To view more',
    servicesIntro: 'From spiral staircases to metal sculptures — everything made in our own workshop, without intermediaries.',
    processLabel: 'THE PROCESS',
    processTitle: 'How We Work',
    processLeadtime: 'Current lead time: <strong>3–4 weeks</strong> from drawing approval.',
    step1Title: 'The Conversation', step1Desc: 'We meet, listen, and understand what you need. No templates — just a direct conversation.', step1Time: 'Quote within 48 hours',
    step2Title: 'The Drawing',      step2Desc: 'Technical drawings and 3D models built to your specification — you approve every detail before steel is touched.', step2Time: 'Drawings within 5–7 days',
    step3Title: 'The Making',       step3Desc: 'We work in our own workshop — MIG/TIG welding, precision cutting, surface finishing.', step3Time: 'Fabrication 3–6 weeks',
    step4Title: 'The Handover',     step4Desc: "Our team installs, checks, and delivers. We don't leave until everything is right.", step4Time: '2-year warranty',
    contactLabel: 'CONTACT',
    contactTitle: 'Get in Touch',
    formName: 'Name', formEmail: 'Email', formPhone: 'Phone', formMessage: 'Message',
    formFile: 'Attach File', formSend: 'REQUEST QUOTE',
    uploadText: 'Drop photos here', uploadBtn: 'CHOOSE PHOTOS',
    showProject: 'View project',
    // ── NAV / FOOTER ──
    navArch: 'ARCHITECTURE', navObj: 'OBJECTS', navServices: 'SERVICES',
    navExpertise: 'EXPERTISE', navContact: 'CONTACT',
    mobileNavArch: 'Architecture', mobileNavObj: 'Objects',
    mobileNavServices: 'Services', mobileNavExpertise: 'Expertise', mobileNavContact: 'Contact',
    footerNavProjects: 'PROJECTS', footerNavServices: 'SERVICES', footerNavExpertise: 'EXPERTISE', footerNavContact: 'CONTACT',
    footerTagline: 'Custom Metalwork · Punime me Porosi',
    footerCopyright: '© Work Steel since 2018',
    // ── PORTFOLIO ──
    archPageTitle: 'Architecture',
    archFilterActive: 'Architecture ×', archFilterOther: 'Objects',
    objPageTitle: 'Objects',
    objFilterOther: 'Architecture', objFilterActive: 'Objects ×',
    portfolioFilterLabel: 'FILTER BY',
    portfolioShowMore: 'SHOW MORE',
    // ── EKSPERTIZË ──
    expHeroLabel: 'What We Do',
    expHeroTitle: 'Expertise',
    expHeroTexts: [
      'Our workshop is set in the centre of Tirana — a working space where every tool has its place and every weld has a purpose.',
      'Since 2018, we have worked with architects, interior designers, and private clients — delivering structure, form, and durability.',
      "We don't promise the extraordinary — we do good work, with care, on time.",
      'Every project carries our name — and that holds us to account.'
    ],
    expAccordionTitles: ['Commitment', 'Quality', 'Technique', 'Network', 'Delivery'],
    expAccordionBodies: [
      'We treat every project as our own — from the first drawing to the final screw.',
      'The steel we use is certified. Every weld is checked. Nothing leaves the workshop without our approval.',
      'We command precision cutting, TIG/MIG welding, and manual forming — all in-house.',
      'We collaborate with architects, designers, and selected suppliers who share our standards.',
      'We honour every agreed deadline. Most projects are ready within 3–6 weeks.'
    ],
    expRefTitle: 'Who We Work With',
    expRefLabels: ['Brands', 'Designers, Creators, Private Clients', 'Production Companies', 'Architecture Firms', 'Coverage'],
    // ── SHËRBIME ──
    servicesHeroTitle: 'Services',
    servicesHeroDesc: 'Custom steel fabrication — from load-bearing structures to singular objects. Everything produced in our own workshop.',
    servicesEditorialIntro: 'Every project begins with a vision. We build it in steel.',
    servicesEditorialTitles: ['Architecture', 'Design &amp; Interiors', 'Artistic Production', 'Luxury', 'Stage Design'],
    servicesEditorialSubs: ['Artistic sub-contracting', 'Presentations, objects', 'Theatre, film'],
    domainsLabel: 'DOMAINS OF APPLICATION',
    domainsHeading: 'Where Work Steel Operates',
    domainTitles: ['Architecture', 'Interior Design', 'Art &amp; Sculpture', 'Industry &amp; Construction', 'Stage Design', 'Luxury &amp; Exhibition'],
    domainDescs: [
      'Staircases, railings, doors, and load-bearing steel structures — durable work for your spaces.',
      'Shelving, lighting elements, and decorative steel details that give character to any interior.',
      'Custom metal sculptures and artistic installations — for public and private spaces alike.',
      'Industrial structures, pedestrian bridges, and structural components built to specification.',
      'Set elements for theatre and film productions — precision and reliability when it counts.',
      'Display stands, luxury objects, and bespoke installations for premium environments and showrooms.'
    ],
    domainLink: 'READ MORE →',
    steelFoundationTexts: [
      'Steel is not merely a material — it is the foundation of everything we build. Its strength, durability, and versatility make it the ideal choice for the work we do.',
      'Every piece of steel that passes through our workshop is handled with care and precision — transformed from raw material into finished work.'
    ],
    qseHeadings: ['Quality', 'Safety', 'Environment'],
    qseSubheadings: ['No Compromise', 'Built to Last', 'Sustainable Steel'],
    qseDescs: [
      'Every Work Steel piece passes rigorous quality checks. We use certified steel and welding techniques conforming to EN ISO standards.',
      'Our team follows strict protocols during fabrication and installation. Our steel structures are built to endure for decades.',
      'Steel is 100% recyclable. Work Steel minimises waste and reuses material wherever possible.'
    ],
    // ── KONTAKT ──
    kontaktHeroTitle: 'Contact',
    contactTypesLabel: 'WHO WE SERVE',
    contactTypeTitle1: 'Private Clients', contactTypeMore1: 'Learn more',
    contactTypeDetail1: 'We work directly with individuals — people with a clear vision for their space and an eye for detail. From the first sketch to the final fitting.',
    contactTypeTitle2: 'Architects &amp; Decorators', contactTypeMore2: 'Learn more',
    contactTypeDetail2: 'Work Steel is the preferred sub-contractor for architects and interior designers across Albania. We provide technical drawings, 3D models, and precision steel solutions.',
    guidingLabel: 'GUIDING YOU',
    guidingStatement: "We don't pass projects on or send unfamiliar faces. The same hands that discuss the brief are the ones that build it — start to finish.",
    kontaktSectionLabel: 'CONTACT',
    kontaktFormTitle: 'Get in Touch',
    kontaktFormName: 'Name', kontaktFormEmail: 'Email', kontaktFormPhone: 'Phone', kontaktFormMessage: 'Message',
    kontaktFormSend: 'SEND',
    kontaktUploadText: 'Drop files here', kontaktUploadBtn: 'Choose Files', kontaktAddMore: '+ Add more',
    // ── MODAL ──
    modalBack: '← RETURN TO PROJECTS',
    modalYear: 'YEAR', modalClient: 'CLIENT', modalMaterial: 'MATERIAL', modalMaterialVal: 'Steel',
    modalRelated: 'OTHER PROJECTS',
    punet_pageTitle: 'Works',
    punet_filterAll: 'All',
    punet_filterArch: 'Staircases',
    punet_filterObj: 'Railings',
    punet_filterGates: 'Gates & Doors',
    punet_filterStructures: 'Structures',
    punet_filterInteriors: 'Interiors & Furniture',
    punet_filterDecor: 'Decorative & CNC',
    punet_searchPlaceholder: 'Search works...',
    punet_recLabel: 'For more',
    // ── FAQ ──
    faqLabel: 'FREQUENTLY ASKED',
    faqHeading: 'What You Should Know',
    faqQ1: 'How much does a custom steel staircase cost?',
    faqA1: 'Pricing depends on dimensions, material (painted steel, stainless or corten), shape and finish. Our projects start from €1,500 and vary by complexity. Contact us for a free estimate within 48 hours.',
    faqQ2: 'How long does fabrication and installation take?',
    faqA2: 'Most projects are ready within 3–6 weeks of drawing approval. Technical drawings and 3D models are ready within 5–7 days. Installation is typically completed in 1–2 working days.',
    faqQ3: 'Do you work outside Tirana?',
    faqA3: 'Yes. We have completed projects in Durrës, Vlorë, Shkodër, Elbasan and other cities. Transport and installation are coordinated by our team — no intermediaries.',
    faqQ4: 'Is a warranty provided?',
    faqA4: 'Yes. All our work is covered by a 2-year warranty against manufacturing defects. Properly treated steel lasts decades — and we stand behind every piece we build.',
    faqQ5: "Can you work from my architect's drawings?",
    faqA5: "Absolutely. We are the preferred sub-contractor for many architects and interior designers in Albania. We accept sketches, AutoCAD, DXF, PDF or simply a photo and your idea — and we build from scratch.",
    faqQ6: 'How does payment work, and what materials do you use?',
    faqA6: 'Payment is split into three stages: 30% deposit on drawing approval, 40% during fabrication, and 30% on installation. All steel we use is certified to European standards (EN) — stainless AISI 304/316, structural steel S235/S355, and corten A606.',
    faqQ7: 'What if I don\'t like the design?',
    faqA7: 'Before any steel is touched, you approve every detail — technical drawings and 3D models. We offer unlimited revisions at no extra cost until the design is exactly right. Fabrication only begins after your signed approval.',
    faqQ8: 'Can I see previous work before deciding?',
    faqA8: 'Yes. Our portfolio on this site shows a selection of completed projects. You can also visit our Instagram @work_steel_shpk where we post new projects regularly. On request, we can arrange a visit to see our work at client premises.',
    // ── FORM / CONTACT ──
    formIntro: 'Ready to start your project? Send us a message with photos and sketches. We respond within 24 hours with a timeline and price estimate.',
    formIntroK: 'Ready to start your project? Send us a message with photos and sketches — we\'ll respond within 24 hours.',
    gdprText: 'I agree that my data will be used solely to respond to this message, in accordance with the <a href="/privacy.html">Privacy Policy</a>.',
    gdprTextK: 'I agree to the privacy policy and the use of my data to respond to this message.',
    contactColAddress: 'Address',
    contactColHours: 'Monday — Friday, 08:00 — 18:00',
    navArchitecture: 'Architecture',
    navObjekte: 'Objects',
    navSherbime: 'Services',
    navKontakt: 'Contact',
    contactColContact: 'Our Contacts',
    contactColSocial: 'Social',
    // ── COOKIE BANNER ──
    cookieText: 'We use cookies to analyse traffic and improve your experience. By clicking "Accept", you consent to our use of cookies. <a href="/privacy.html">Learn more</a>',
    cookieAccept: 'Accept',
    cookieDecline: 'Essential only',
    // ── TRUST + MICROCOPY ──
    heroMicrocopy: 'No obligation. Quote within 48 hours.',
    trustProjects: 'Projects',
    trustSince: 'Since',
    trustWarranty: 'Warranty',
    trustWarrantyNum: '2<span style="font-size:0.6em;opacity:0.7;">yr</span>',
    heroCtaAria: 'Request free quote',
    waAria: 'Contact Work Steel on WhatsApp',
    mobCtaCall: 'Call',
    mobCtaWa: 'WhatsApp',
    cookieAria: 'Cookie notification',
    faqAria: 'Frequently asked questions',
  }
};

function switchLanguage(lang) {
  currentLang = lang;
  const t = translations[lang];

  // ── Lang toggle buttons ──
  document.querySelectorAll('.lang-toggle').forEach(toggle => {
    toggle.querySelectorAll('button').forEach(b => {
      b.classList.toggle('active', b.textContent.trim() === (lang === 'al' ? 'AL' : 'EN'));
    });
  });

  // ── Header nav (update split-text spans or plain text) ──
  document.querySelectorAll('.header-nav a[data-page]').forEach(a => {
    const pg = a.getAttribute('data-page');
    let label = '';
    if (pg === 'arkitekture') label = t.navArch;
    else if (pg === 'objekte')      label = t.navObj;
    else if (pg === 'sherbime')     label = t.navServices;
    else if (pg === 'ekspertize')   label = t.navExpertise;
    else if (pg === 'kontakt')      label = t.navContact;
    if (!label) return;
    a.textContent = label;
  });
  document.dispatchEvent(new Event('langChanged'));

  // ── Mobile menu ──
  const mob = document.querySelectorAll('#mobile-menu a[onclick]');
  mob.forEach(a => {
    const oc = a.getAttribute('onclick') || '';
    if (oc.includes("'arkitekture'"))    a.textContent = t.mobileNavArch;
    else if (oc.includes("'objekte'"))   a.textContent = t.mobileNavObj;
    else if (oc.includes("'sherbime'"))  a.textContent = t.mobileNavServices;
    else if (oc.includes("'ekspertize'"))a.textContent = t.mobileNavExpertise;
    else if (oc.includes("'kontakt'"))   a.textContent = t.mobileNavContact;
  });

  // ── Footer nav (all footers) ──
  document.querySelectorAll('.footer-nav a[onclick]').forEach(a => {
    const oc = a.getAttribute('onclick') || '';
    if (oc.includes("'arkitekture'") || oc.includes("'punet'")) a.textContent = t.footerNavProjects;
    else if (oc.includes("'sherbime'"))   a.textContent = t.footerNavServices;
    else if (oc.includes("'ekspertize'")) a.textContent = t.footerNavExpertise;
    else if (oc.includes("'kontakt'"))    a.textContent = t.footerNavContact;
  });

  // ── Footer tagline & copyright ──
  document.querySelectorAll('.footer-tagline').forEach(el => el.textContent = t.footerTagline);
  document.querySelectorAll('.footer-bottom span:not(.lang-toggle)').forEach(el => {
    if (el.textContent.includes('Work Steel')) el.textContent = t.footerCopyright;
  });

  // ════════════════════════
  //  HOME PAGE
  // ════════════════════════
  const heroStatement = document.querySelector('.hero-statement');
  if (heroStatement) heroStatement.innerHTML = t.heroStatement;

  const aboutText = document.querySelector('.about-text-large');
  if (aboutText) aboutText.innerHTML = t.aboutText;
  const aboutCaption = document.querySelector('.about-caption');
  if (aboutCaption) aboutCaption.textContent = t.aboutCaption;

  const ctaPrimary = document.querySelector('.hero-ctas .hero-cta-primary span');
  if (ctaPrimary) ctaPrimary.textContent = t.btnOferte;
  const ctaBtns = document.querySelectorAll('.hero-ctas .btn-outline span');
  if (ctaBtns[0]) ctaBtns[0].textContent = t.btnPunet;
  if (ctaBtns[1]) ctaBtns[1].textContent = t.btnExpertiza;

  const missionAl = document.querySelector('.mission-text-al');
  const missionEn = document.querySelector('.mission-text-en');
  if (missionAl && missionEn) {
    missionAl.style.display = lang === 'al' ? '' : 'none';
    missionEn.style.display = lang === 'en' ? '' : 'none';
  }

  const servicesIntro = document.querySelector('#page-home .services-intro p');
  if (servicesIntro) servicesIntro.textContent = t.servicesIntro;

  const processSteps = document.querySelectorAll('.process-step');
  if (processSteps.length >= 4) {
    [[0,t.step1Title,t.step1Desc,t.step1Time],[1,t.step2Title,t.step2Desc,t.step2Time],[2,t.step3Title,t.step3Desc,t.step3Time],[3,t.step4Title,t.step4Desc,t.step4Time]].forEach(([i,ti,de,tm]) => {
      const s = processSteps[i];
      const tEl = s.querySelector('.step-title'); if (tEl) tEl.textContent = ti;
      const dEl = s.querySelector('.step-desc');  if (dEl) dEl.textContent = de;
      const mEl = s.querySelector('.step-time');  if (mEl && tm) mEl.textContent = tm;
    });
  }

  // Form labels now use data-i18n attributes — handled by the generic [data-i18n] loop below
  const sendBtn = document.querySelector('#page-home .btn-brass');
  if (sendBtn) sendBtn.textContent = t.formSend;

  document.querySelectorAll('[data-placeholder-al]').forEach(el => {
    el.placeholder = lang === 'al' ? el.dataset.placeholderAl : el.dataset.placeholderEn;
  });

  const upText = document.querySelector('#uploadPrompt p:not(.sub)');
  if (upText) upText.textContent = t.uploadText;
  const upBtn = document.querySelector('#uploadPrompt span.btn-pill, #uploadPrompt span');
  if (upBtn) upBtn.textContent = t.uploadBtn;

  const processLabelEl = document.querySelector('#page-home .process-section .section-label');
  if (processLabelEl) processLabelEl.textContent = t.processLabel;
  const processTitleEl = document.querySelector('#page-home .process-section .section-heading');
  if (processTitleEl) processTitleEl.textContent = t.processTitle;
  var processLeadtimeEl = document.getElementById('processLeadtime');
  if (processLeadtimeEl) processLeadtimeEl.innerHTML = t.processLeadtime;
  const contactLabelEl = document.querySelector('#page-home .contact-section .section-label');
  if (contactLabelEl) contactLabelEl.textContent = t.contactLabel;
  const contactTitleEl = document.querySelector('#page-home .contact-section h2');
  if (contactTitleEl) contactTitleEl.textContent = t.contactTitle;

  // ── FAQ section ──
  const faqLabelEl = document.querySelector('#page-home .faq-label');
  if (faqLabelEl) faqLabelEl.textContent = t.faqLabel;
  const faqHeadingEl = document.querySelector('#page-home .faq-heading');
  if (faqHeadingEl) faqHeadingEl.textContent = t.faqHeading;
  document.querySelectorAll('#page-home .faq-item[data-faq]').forEach(function(item) {
    var n = item.getAttribute('data-faq');
    var qEl = item.querySelector('.faq-q-text');
    var aEl = item.querySelector('.faq-a p');
    if (qEl && t['faqQ' + n]) qEl.textContent = t['faqQ' + n];
    if (aEl && t['faqA' + n]) aEl.textContent = t['faqA' + n];
  });

  // ── Form intros ──
  var homeFormIntro = document.getElementById('home-form-intro');
  if (homeFormIntro) homeFormIntro.textContent = t.formIntro;
  var kontaktFormIntro = document.getElementById('kontakt-form-intro');
  if (kontaktFormIntro) kontaktFormIntro.textContent = t.formIntroK;

  // ── GDPR consent texts ──
  var homeGdpr = document.getElementById('home-gdpr-text');
  if (homeGdpr) homeGdpr.innerHTML = t.gdprText;
  var kontaktGdpr = document.getElementById('kontakt-gdpr-text');
  if (kontaktGdpr) kontaktGdpr.innerHTML = t.gdprTextK;

  // ── Contact info labels & hours (data-i18n) ──
  document.querySelectorAll('[data-i18n]').forEach(function(el) {
    var key = el.getAttribute('data-i18n');
    if (t[key] !== undefined) el.textContent = t[key];
  });

  // ── Cookie banner ──
  var cookieBannerP = document.querySelector('#cookieBanner p');
  if (cookieBannerP) cookieBannerP.innerHTML = t.cookieText;
  var cookieBtns = document.querySelectorAll('#cookieBanner .cookie-actions button');
  if (cookieBtns[0]) cookieBtns[0].textContent = t.cookieAccept;
  if (cookieBtns[1]) cookieBtns[1].textContent = t.cookieDecline;

  // ── Hero microcopy + trust labels ──
  var heroMicro = document.getElementById('heroMicrocopy');
  if (heroMicro) heroMicro.textContent = t.heroMicrocopy;
  var trustWarrantyNumEl = document.getElementById('trustWarrantyNum');
  if (trustWarrantyNumEl) trustWarrantyNumEl.innerHTML = t.trustWarrantyNum;

  // ── Aria-label updates ──
  var heroCtaEl = document.getElementById('heroCtaPrimary');
  if (heroCtaEl) heroCtaEl.setAttribute('aria-label', t.heroCtaAria);
  var waFloat = document.querySelector('.wa-float');
  if (waFloat) waFloat.setAttribute('aria-label', t.waAria);
  var mobCallLbl = document.getElementById('mobCtaCallLabel');
  if (mobCallLbl) mobCallLbl.textContent = t.mobCtaCall;
  var mobWaLbl = document.getElementById('mobCtaWaLabel');
  if (mobWaLbl) mobWaLbl.textContent = t.mobCtaWa;
  var cookieBannerEl = document.getElementById('cookieBanner');
  if (cookieBannerEl) cookieBannerEl.setAttribute('aria-label', t.cookieAria);
  var faqSection = document.getElementById('faq');
  if (faqSection) faqSection.setAttribute('aria-label', t.faqAria);

  // ════════════════════════
  //  PUNET PAGE
  // ════════════════════════
  const punetTitle = document.querySelector('#page-punet .cat-title');
  if (punetTitle) punetTitle.innerHTML = '<em>' + t.punet_pageTitle + '</em>';
  const punetSM = document.querySelector('#punet-show-more .btn-pill');
  if (punetSM) punetSM.textContent = t.portfolioShowMore;
  const punetInp = document.getElementById('punet-search-input');
  if (punetInp) punetInp.placeholder = t.punet_searchPlaceholder;
  const punetRecLabel = document.getElementById('punet-rec-label');
  if (punetRecLabel) punetRecLabel.textContent = t.punet_recLabel;
  const punetChips = document.querySelectorAll('#punet-chips .punet-chip');
  if (punetChips[0]) punetChips[0].textContent = t.punet_filterAll;
  if (punetChips[1]) punetChips[1].textContent = t.punet_filterArch;
  if (punetChips[2]) punetChips[2].textContent = t.punet_filterObj;
  if (punetChips[3]) punetChips[3].textContent = t.punet_filterGates;
  if (punetChips[4]) punetChips[4].textContent = t.punet_filterStructures;
  if (punetChips[5]) punetChips[5].textContent = t.punet_filterInteriors;
  if (punetChips[6]) punetChips[6].textContent = t.punet_filterDecor;

  document.querySelectorAll('.filter-label').forEach(el => el.textContent = t.portfolioFilterLabel);

  document.querySelectorAll('.brass-circle').forEach(c => c.textContent = t.showProject);

  // Translate project card titles and meta
  document.querySelectorAll('.project-card').forEach(function(card) {
    var titleEl = card.querySelector('.project-title');
    var metaEl  = card.querySelector('.project-meta');
    if (titleEl && card.dataset.titleAl) {
      titleEl.textContent = lang === 'en' ? (card.dataset.titleEn || card.dataset.titleAl) : card.dataset.titleAl;
    }
    if (metaEl && card.dataset.metaAl) {
      metaEl.textContent = lang === 'en' ? (card.dataset.metaEn || card.dataset.metaAl) : card.dataset.metaAl;
    }
  });

  // ════════════════════════
  //  SHËRBIME PAGE
  // ════════════════════════
  const srvHT = document.querySelector('#page-sherbime .services-hero-title em');
  if (srvHT) srvHT.textContent = t.servicesHeroTitle;
  const srvHD = document.querySelector('#page-sherbime .services-hero-desc');
  if (srvHD) srvHD.textContent = t.servicesHeroDesc;
  const srvEI = document.querySelector('#page-sherbime .services-editorial .services-intro p');
  if (srvEI) srvEI.textContent = t.servicesEditorialIntro;

  document.querySelectorAll('#page-sherbime .editorial-item-title em').forEach((el, i) => {
    if (t.servicesEditorialTitles[i]) el.innerHTML = t.servicesEditorialTitles[i];
  });
  document.querySelectorAll('#page-sherbime .editorial-item-sub').forEach((el, i) => {
    if (t.servicesEditorialSubs[i]) el.textContent = t.servicesEditorialSubs[i];
  });

  const domsLabel = document.querySelector('#page-sherbime .domains-section .section-label');
  if (domsLabel) domsLabel.textContent = t.domainsLabel;
  const domsHd = document.querySelector('#page-sherbime .domains-heading');
  if (domsHd) domsHd.textContent = t.domainsHeading;

  document.querySelectorAll('#page-sherbime .domain-card').forEach((card, i) => {
    const tEl = card.querySelector('.domain-card-title');
    const dEl = card.querySelector('.domain-card-desc');
    const lEl = card.querySelector('.domain-card-link');
    if (tEl && t.domainTitles[i]) tEl.innerHTML = t.domainTitles[i];
    if (dEl && t.domainDescs[i]) dEl.textContent = t.domainDescs[i];
    if (lEl) lEl.textContent = t.domainLink;
  });

  document.querySelectorAll('#page-sherbime .steel-text p').forEach((p, i) => {
    if (t.steelFoundationTexts[i]) p.textContent = t.steelFoundationTexts[i];
  });

  document.querySelectorAll('#page-sherbime .qse-block').forEach((block, i) => {
    const hEl = block.querySelector('.qse-heading');
    const sEl = block.querySelector('h3.playfair');
    const dEl = block.querySelector('p');
    if (hEl && t.qseHeadings[i]) hEl.textContent = t.qseHeadings[i];
    if (sEl && t.qseSubheadings[i]) sEl.textContent = t.qseSubheadings[i];
    if (dEl && t.qseDescs[i]) dEl.textContent = t.qseDescs[i];
  });

  // ════════════════════════
  //  EKSPERTIZË PAGE
  // ════════════════════════
  const expT = document.querySelector('#page-ekspertize .exp-hero-title em');
  if (expT) expT.textContent = t.expHeroTitle;
  const expHL = document.querySelector('#page-ekspertize .exp-hero-label');
  if (expHL) expHL.textContent = t.expHeroLabel;

  const expTexts = document.querySelectorAll('#page-ekspertize .exp-hero-text p');
  if (t.expHeroTexts) t.expHeroTexts.forEach((txt, i) => { if (expTexts[i]) expTexts[i].textContent = txt; });

  const expAccTitles = document.querySelectorAll('#page-ekspertize .exp-accordion-title');
  if (t.expAccordionTitles) t.expAccordionTitles.forEach((ti, i) => { if (expAccTitles[i]) expAccTitles[i].textContent = ti; });

  const expAccBodies = document.querySelectorAll('#page-ekspertize .exp-accordion-body p');
  if (t.expAccordionBodies) t.expAccordionBodies.forEach((bd, i) => { if (expAccBodies[i]) expAccBodies[i].textContent = bd; });

  const expGuidLbl = document.querySelector('#page-ekspertize .guiding-section .section-label');
  if (expGuidLbl) expGuidLbl.textContent = t.guidingLabel;
  const expGuidStmt = document.querySelector('#page-ekspertize .guiding-statement');
  if (expGuidStmt) expGuidStmt.innerHTML = t.guidingStatement;

  // ════════════════════════
  //  KONTAKT PAGE
  // ════════════════════════
  const ktTL = document.querySelector('#page-kontakt .contact-types-left .section-label');
  if (ktTL) ktTL.textContent = t.contactTypesLabel;

  const ktItems = document.querySelectorAll('#page-kontakt .contact-type-item');
  [[0, t.contactTypeTitle1, t.contactTypeMore1, t.contactTypeDetail1],
   [1, t.contactTypeTitle2, t.contactTypeMore2, t.contactTypeDetail2]].forEach(([i, ti, mo, de]) => {
    if (!ktItems[i]) return;
    const tEl = ktItems[i].querySelector('.type-title');
    const mEl = ktItems[i].querySelector('.type-more');
    const dEl = ktItems[i].querySelector('.type-details p');
    if (tEl) tEl.innerHTML = ti;
    if (mEl) mEl.textContent = mo;
    if (dEl) dEl.textContent = de;
  });

  const ktSL = document.querySelector('#page-kontakt .ks-contact-section .section-label');
  if (ktSL) ktSL.textContent = t.kontaktSectionLabel;
  const ktFT = document.querySelector('#page-kontakt .contact-form-title');
  if (ktFT) ktFT.textContent = t.kontaktFormTitle;

  const ktLbls = document.querySelectorAll('#page-kontakt .ks-label');
  [[0,t.kontaktFormName],[1,t.kontaktFormEmail],[2,t.kontaktFormPhone],[3,t.kontaktFormMessage]].forEach(([i,v]) => {
    if (ktLbls[i]) ktLbls[i].textContent = v;
  });
  const ktSub = document.querySelector('#page-kontakt .ks-submit');
  if (ktSub) ktSub.textContent = t.kontaktFormSend;

  const ktUP = document.querySelector('#uploadPromptK p.ks-upload-p:not(.sub)');
  if (ktUP) ktUP.textContent = t.kontaktUploadText;
  const ktUB = document.querySelector('#uploadPromptK .ks-btn-pill');
  if (ktUB) ktUB.textContent = t.kontaktUploadBtn;
  const ktAM = document.getElementById('addMoreBtnK');
  if (ktAM) ktAM.textContent = t.kontaktAddMore;

  // ════════════════════════
  //  MODAL
  // ════════════════════════
  const mBack = document.querySelector('.project-modal-back');
  if (mBack) mBack.textContent = t.modalBack;

  const mStrongs = document.querySelectorAll('.project-modal-detail-item strong');
  if (mStrongs[0]) mStrongs[0].textContent = t.modalYear;
  if (mStrongs[1]) mStrongs[1].textContent = t.modalClient;
  if (mStrongs[2]) mStrongs[2].textContent = t.modalMaterial;

  const mMatVal = document.querySelector('.project-modal-detail-item:nth-child(3) span');
  if (mMatVal) mMatVal.textContent = t.modalMaterialVal;

  const mRel = document.getElementById('modalRelatedLabel');
  if (mRel) mRel.textContent = t.modalRelated;

  // ── Live-refresh open modal dynamic content ──────────────
  const openModal = document.getElementById('projectModal');
  if (openModal && openModal.classList.contains('open') && currentModalCard) {
    const mc = currentModalCard;

    // Title
    const mTitle = document.getElementById('modalTitle');
    if (mTitle) {
      mTitle.textContent = lang === 'en'
        ? (mc.dataset.titleEn || mc.dataset.titleAl || '')
        : (mc.dataset.titleAl || '');
    }

    // Category tag
    const mCat = document.getElementById('modalCategory');
    if (mCat) {
      const mcCatAl = mc.dataset.categoryAl || '';
      const mcCatEn = metaTranslations[mcCatAl] || mcCatAl;
      mCat.textContent = lang === 'en' ? mcCatEn : mcCatAl;
    }

    // Description
    const mDesc = document.getElementById('modalDesc');
    if (mDesc) {
      const dAl = mc.dataset.descAl || '';
      const dEn = mc.dataset.descEn || dAl;
      mDesc.textContent = lang === 'en'
        ? (dEn || dAl || 'Custom steel work by Work Steel.')
        : (dAl || 'Punim çeliku me porosi nga Work Steel.');
    }

    // Main image alt
    const mMainImg = document.getElementById('modalMainImg');
    if (mMainImg) {
      mMainImg.alt = lang === 'en'
        ? (mc.dataset.titleEn || mc.dataset.titleAl || '')
        : (mc.dataset.titleAl || '');
    }

    // Gallery image alts
    const gallAlt = lang === 'en'
      ? (mc.dataset.titleEn || mc.dataset.titleAl || '')
      : (mc.dataset.titleAl || '');
    ['modalGalleryImg1','modalGalleryImg2','modalGalleryImg3'].forEach(function(id) {
      var el = document.getElementById(id);
      if (el && el.src) el.alt = gallAlt;
    });

    // Related cards — update titles and metas using stored bilingual data attrs
    const relGrid = document.getElementById('modalRelatedGrid');
    if (relGrid) {
      relGrid.querySelectorAll('.modal-related-card').forEach(function(div) {
        const tEl = div.querySelector('.modal-related-card-title');
        const mEl = div.querySelector('.modal-related-card-meta');
        const imgEl = div.querySelector('img');
        if (tEl) {
          const newTitle = lang === 'en'
            ? (div.dataset.titleEn || div.dataset.titleAl || '')
            : (div.dataset.titleAl || '');
          tEl.textContent = newTitle;
          if (imgEl) imgEl.alt = newTitle;
        }
        if (mEl && div.dataset.categoryAl) {
          const rCatDisplay = lang === 'en'
            ? (div.dataset.categoryEn || div.dataset.categoryAl)
            : div.dataset.categoryAl;
          mEl.textContent = rCatDisplay + ' · Çelik';
        }
      });
    }
  }
}

document.addEventListener('click', function(e) {
  if (e.target.closest('.lang-toggle button')) {
    var btn = e.target.closest('.lang-toggle button');
    var lang = btn.textContent.trim() === 'AL' ? 'al' : 'en';
    switchLanguage(lang);
  }
});

// ========================
// CONTACT FORM (Formspree)
// ========================
// #ksContactForm has its own dedicated submit handler (file upload IIFE above)
document.querySelectorAll('.contact-form-ws:not(#ksContactForm)').forEach(form => {
  form.addEventListener('submit', async function(e) {
    e.preventDefault();
    const btn = this.querySelector('.btn-brass, .ks-submit');
    if (!btn) return;
    const origText = btn.textContent;
    btn.textContent = (currentLang==='en'?'Sending...':'Duke dërguar...');
    btn.disabled = true;

    try {
      const formData = new FormData(this);
      const resp = await fetch('https://formspree.io/f/xpzvkjqr', {
        method: 'POST',
        body: formData,
        headers: { 'Accept': 'application/json' }
      });
      if (resp.ok) {
        btn.textContent = currentLang==='en'?'✓ Sent!':'✓ U dërgua!';
        this.reset();
        setTimeout(() => { btn.textContent = origText; btn.disabled = false; }, 3000);
      } else {
        btn.textContent = currentLang==='en'?'Error — try again':'Gabim — riprovo';
        setTimeout(() => { btn.textContent = origText; btn.disabled = false; }, 3000);
      }
    } catch (err) {
      btn.textContent = currentLang==='en'?'Error':'Gabim';
      setTimeout(() => { btn.textContent = origText; btn.disabled = false; }, 3000);
    }
  });
});

// ========================
// PAGE LOAD ANIMATION
// ========================
// Strategy: start the splash the moment the DOM is parsed (fast).
// Gate Phase 2 on BOTH:
//   (a) a minimum display threshold so the animation always feels intentional, AND
//   (b) the page being fully loaded (images etc.)
// Whichever takes longer wins — the user never waits extra if the page was slow.

(function() {
  const THRESHOLD = 1000; // ms — minimum time the splash logo holds before flying

  history.scrollRestoration = 'manual';
  window.scrollTo(0, 0);

  const logo       = document.getElementById('splash-ws-logo');
  const splash     = document.getElementById('splash-screen');
  const wsMonogram = document.getElementById('ws-monogram');

  // Phase 1 — Fade logo in immediately (DOM is ready, no images needed)
  requestAnimationFrame(() => requestAnimationFrame(() => {
    logo.style.transition = 'opacity 0.55s cubic-bezier(0.16,1,0.3,1)';
    logo.style.opacity    = '1';
  }));

  // Two gates: threshold timer + page load. Phase 2 fires when both are done.
  let thresholdDone = false;
  let pageDone      = false;
  const splashStart = performance.now();

  function runPhase2() {
    if (!thresholdDone || !pageDone) return;

    // Phase 2 — logo flies to top-left corner, background fades out
    // Use transform-only animation (GPU composited, no layout reflow)
    const rect = logo.getBoundingClientRect();
    const targetX = 24 - rect.left;
    const targetY = 24 - rect.top;
    const scaleRatio = 30 / 62; // target font-size / initial font-size
    logo.style.transition = [
      'transform 0.92s cubic-bezier(0.76,0,0.24,1)',
      'opacity 0.3s ease 0.62s'
    ].join(', ');
    logo.style.transform = `translate(calc(-50% + ${targetX}px), calc(-50% + ${targetY}px)) scale(${scaleRatio})`;
    logo.style.opacity   = '0';
    setTimeout(() => splash.classList.add('fading'), 120);

    // Phase 3 — reveal monogram + trigger hero animations
    setTimeout(() => {
      wsMonogram.style.transition = 'opacity 0.3s ease';
      wsMonogram.style.opacity    = '1';
      logo.style.display          = 'none';
      document.querySelectorAll('.page.active .hero-reveal').forEach(el => {
        el.classList.add('visible');
      });
      setTimeout(() => {
        document.querySelectorAll('.page.active .hero-reveal.reveal-words').forEach(el => {
          el.classList.add('words-visible');
        });
      }, 250);
    }, 480); // 480ms after phase 2 starts (fly is 0.92s, reveal at ~halfway)
  }

  // Gate A — minimum threshold
  const elapsed = performance.now() - splashStart;
  const remaining = Math.max(0, THRESHOLD - elapsed);
  setTimeout(() => { thresholdDone = true; runPhase2(); }, remaining);

  // Gate B — page fully loaded (images, fonts, everything)
  if (document.readyState === 'complete') {
    pageDone = true;
  } else {
    window.addEventListener('load', () => { pageDone = true; runPhase2(); }, { once: true });
  }
})();


// ========================
// FILTER ANIMATIONS
// ========================

// Cat pages: animate current cards out, then navigate to other category
function filterCatAndNavigate(targetPage) {
  var activePage = document.querySelector('.page.active');
  if (!activePage) return;
  var cards = Array.from(activePage.querySelectorAll('.cat-grid .project-card'))
    .filter(function(c) { return c.style.display !== 'none'; });

  cards.forEach(function(card, i) {
    card.style.animationDelay = (i * 0.04) + 's';
    card.classList.add('card-exit');
  });

  var delay = Math.min(cards.length * 40 + 320, 600);
  setTimeout(function() {
    cards.forEach(function(c) { c.style.animationDelay = ''; });
    navigateTo(targetPage);
  }, delay);
}

// Home page: in-place animated filter (no page navigation)
function filterHomePortfolio(cat) {
  var grid = document.querySelector('#page-home .portfolio-grid');
  if (!grid) return;

  // Update active state on sidebar links
  document.querySelectorAll('#page-home .portfolio-sidebar .filter-item').forEach(function(a) {
    a.classList.remove('active');
    if (a.dataset.filterCat === cat) a.classList.add('active');
  });

  var cards = Array.from(grid.querySelectorAll('.project-card'));
  var toExit = [], toEnter = [];

  cards.forEach(function(card) {
    var cardCat = card.dataset.cat || '';
    var isVisible = card.style.display !== 'none';
    var matches = (cat === 'all') || (cardCat === cat);
    if (isVisible && !matches) toExit.push(card);
    if (!isVisible && matches) toEnter.push(card);
  });

  // Animate non-matching cards out
  toExit.forEach(function(card, i) {
    card.style.animationDelay = (i * 0.05) + 's';
    card.classList.remove('card-enter');
    card.classList.add('card-exit');
    setTimeout(function() {
      card.style.display = 'none';
      card.style.animationDelay = '';
      card.classList.remove('card-exit');
    }, 420 + i * 50);
  });

  // Animate matching cards in after exit clears
  var enterAfter = toExit.length > 0 ? 360 : 0;
  toEnter.forEach(function(card, i) {
    setTimeout(function() {
      card.style.display = '';
      card.style.animationDelay = (i * 0.05) + 's';
      void card.offsetWidth; // force reflow so animation restarts
      card.classList.remove('card-exit');
      card.classList.add('card-enter');
      setTimeout(function() {
        card.classList.remove('card-enter');
        card.style.animationDelay = '';
      }, 450 + i * 50);
    }, enterAfter);
  });
}

function toggleAccordion(item) {
  var isOpen = item.classList.contains('open');
  document.querySelectorAll('.exp-accordion-item').forEach(function(i) {
    i.classList.remove('open');
  });
  if (!isOpen) item.classList.add('open');
}

// ========================
// PORTFOLIO PAGINATION + COUNTER
// ========================
var portfolioShown = { punet: 0 };
var PORTFOLIO_BATCH = 6;

function buildPunetGrid() {
  var grid = document.getElementById('punet-all-grid');
  if (!grid) return;
  if (grid.children.length > 0) return; // already built

  PROJECTS_DATA.forEach(function(p) {
    var card = document.createElement('div');
    card.className = 'project-card';
    card.dataset.titleAl = p.titleAl;
    card.dataset.titleEn = p.titleEn;
    card.dataset.descAl  = p.descAl;
    card.dataset.descEn  = p.descEn;
    card.dataset.cats       = p.cats;
    card.dataset.categoryAl = p.cats.split(',')[0].trim();
    card.dataset.year       = p.year;
    card.dataset.gallery    = JSON.stringify(p.gallery);
    card.innerHTML =
      '<div class="card-img-wrap"><img src="' + p.thumb + '" alt="' + p.titleAl.replace(/"/g,'&quot;') + '" loading="lazy" decoding="async"></div>' +
      '<div class="card-body">' +
        '<span class="card-cat">' + p.cats.split(',')[0].trim() + '</span>' +
        '<h3 class="card-title" data-al="' + p.titleAl.replace(/"/g,'&quot;') + '" data-en="' + p.titleEn.replace(/"/g,'&quot;') + '">' + p.titleAl + '</h3>' +
        '<p class="card-desc" data-al="' + p.descAl.replace(/"/g,'&quot;') + '" data-en="' + p.descEn.replace(/"/g,'&quot;') + '">' + p.descAl + '</p>' +
      '</div>';
    card.addEventListener('click', function() { openProjectModal(card); });
    grid.appendChild(card);
  });

  // Reset search/filter state on every entry
  punetSearchState.query = '';
  punetSearchState.cat = 'all';
  var inp = document.getElementById('punet-search-input');
  if (inp) inp.value = '';
  var clr = document.getElementById('punet-search-clear');
  if (clr) clr.style.display = 'none';
  var rec = document.getElementById('punet-recommendations');
  if (rec) rec.style.display = 'none';
  document.querySelectorAll('#punet-chips .punet-chip').forEach(function(btn) {
    btn.classList.toggle('active', btn.dataset.cat === 'all');
  });
  applyPunetFilter();
}

// ========================
// PUNET SEARCH + FILTER
// ========================
var punetSearchState = { query: '', cat: 'all' };

function searchPunet(val) {
  punetSearchState.query = val.trim().toLowerCase();
  var clr = document.getElementById('punet-search-clear');
  if (clr) clr.style.display = punetSearchState.query ? '' : 'none';
  applyPunetFilter();
}

function clearPunetSearch() {
  punetSearchState.query = '';
  var inp = document.getElementById('punet-search-input');
  if (inp) inp.value = '';
  var clr = document.getElementById('punet-search-clear');
  if (clr) clr.style.display = 'none';
  applyPunetFilter();
}

function filterPunetCat(cat, btn) {
  punetSearchState.cat = cat;
  document.querySelectorAll('#punet-chips .punet-chip').forEach(function(b) {
    b.classList.toggle('active', b === btn);
  });
  applyPunetFilter();
}

function applyPunetFilter() {
  var grid = document.getElementById('punet-all-grid');
  if (!grid) return;
  var q   = punetSearchState.query;
  var cat = punetSearchState.cat;

  var allCards = Array.from(grid.querySelectorAll('.project-card'));
  var matched = [], unmatched = [];

  allCards.forEach(function(card) {
    var titleAl = (card.dataset.titleAl || '').toLowerCase();
    var titleEn = (card.dataset.titleEn || '').toLowerCase();
    var descAl  = (card.dataset.descAl  || '').toLowerCase();
    var descEn  = (card.dataset.descEn  || '').toLowerCase();
    var cardCat = card.dataset.categoryAl || '';

    var cardCats = (card.dataset.cats || cardCat).split(',').map(function(s){ return s.trim(); });
    var catMatch = (cat === 'all') || cardCats.some(function(c){ return c === cat; });
    var qMatch   = !q || titleAl.includes(q) || titleEn.includes(q) || descAl.includes(q) || descEn.includes(q);

    if (catMatch && qMatch) matched.push(card);
    else unmatched.push(card);
  });

  // Show matched, hide unmatched
  unmatched.forEach(function(c) { c.style.display = 'none'; c.classList.remove('visible','card-enter'); });
  matched.forEach(function(c, i) {
    c.classList.remove('hidden-project', 'card-exit');
    c.style.display = '';
    c.style.opacity = '0';
    setTimeout(function() {
      c.style.opacity = '';
      c.classList.add('card-enter', 'visible');
      setTimeout(function() { c.classList.remove('card-enter'); }, 400);
    }, i * 40);
  });

  // Update counter
  var curEl = document.getElementById('punet-counter-current');
  var totEl = document.getElementById('punet-counter-total');
  if (curEl) curEl.textContent = matched.length;
  if (totEl) totEl.textContent = matched.length;

  // Hide show-more when filtering/searching
  var btnWrap = document.getElementById('punet-show-more');
  if (btnWrap) btnWrap.style.display = (q || cat !== 'all') ? 'none' : (allCards.length > PORTFOLIO_BATCH ? '' : 'none');

  // Recommendations: show cards from unmatched set when there's a query
  renderPunetRecommendations(q ? unmatched : []);
}

function renderPunetRecommendations(pool) {
  var wrap = document.getElementById('punet-recommendations');
  var recGrid = document.getElementById('punet-rec-grid');
  if (!wrap || !recGrid) return;

  if (!pool.length) { wrap.style.display = 'none'; return; }

  var picks = pool.slice(0, 4);
  recGrid.innerHTML = '';
  picks.forEach(function(card) {
    var clone = card.cloneNode(true);
    clone.style.display = '';
    clone.style.opacity = '';
    clone.classList.remove('hidden-project', 'card-exit', 'card-enter');
    recGrid.appendChild(clone);
  });

  wrap.style.display = '';
}

// Hides all cards on a portfolio page and resets the batch counter.
// Returns the card NodeList so the caller can pass it straight to showBatch.
// Call this BEFORE making the page active to prevent any flash of old content.
function preInitPortfolio(pageId) {
  var page = document.getElementById('page-' + pageId);
  if (!page) return [];
  var allCards = Array.from(page.querySelectorAll('.cat-grid .project-card'));
  var total = allCards.length;

  allCards.forEach(function(c) {
    c.style.display = 'none';
    c.style.opacity = '';
    c.style.pointerEvents = '';
    c.classList.remove('visible', 'card-exit', 'card-enter');
    c.style.animationDelay = '';
  });
  portfolioShown[pageId] = 0;

  // Hide the counter + show-more bar until cards are ready
  var controls = page.querySelector('.portfolio-controls');
  if (controls) controls.classList.remove('controls-visible');

  // Update counters / show-more button
  var totalEl = document.getElementById('punet-counter-total');
  if (totalEl) totalEl.textContent = total;
  var btnId = 'punet-show-more';
  var btnWrap = document.getElementById(btnId);
  if (btnWrap) btnWrap.style.display = total > PORTFOLIO_BATCH ? '' : 'none';

  return allCards;
}

function initPortfolio(pageId) {
  var allCards = preInitPortfolio(pageId);
  showBatch(pageId, allCards);
}

function showBatch(pageId, allCards) {
  var start = portfolioShown[pageId];
  var end   = Math.min(start + PORTFOLIO_BATCH, allCards.length);
  var batchCount = end - start;

  for (var i = start; i < end; i++) {
    (function(card, delay) {
      card.classList.remove('hidden-project', 'card-exit', 'card-enter');
      card.style.display    = '';
      card.style.opacity    = '0';
      card.style.animationDelay = '';

      setTimeout(function() {
        card.style.opacity = '';
        card.style.pointerEvents = '';
        card.classList.add('card-enter', 'visible');
        setTimeout(function() { card.classList.remove('card-enter'); }, 400);
      }, delay);
    })(allCards[i], (i - start) * 48);
  }
  portfolioShown[pageId] = end;

  // Update counter value
  var curEl = document.getElementById('punet-counter-current');
  if (curEl) curEl.textContent = end;

  // Show/hide "show more" button
  var btnId = 'punet-show-more';
  var btnWrap = document.getElementById(btnId);
  if (btnWrap) {
    var remaining = allCards.length - end;
    btnWrap.style.display = remaining > 0 ? '' : 'none';
    var btnEl = btnWrap.querySelector('.btn-pill');
    if (btnEl) {
      var t = translations[currentLang];
      btnEl.textContent = t ? t.portfolioShowMore : 'SHFAQ MË SHUMË';
    }
  }

  // Fade in the controls bar only after the last card in this batch has entered.
  // Delay = last card's stagger + card animation duration.
  var page = document.getElementById('page-' + pageId);
  if (page) {
    var controls = page.querySelector('.portfolio-controls');
    if (controls) {
      var controlsDelay = (batchCount - 1) * 48 + 180;
      setTimeout(function() { controls.classList.add('controls-visible'); }, controlsDelay);
    }
  }
}

function showMoreProjects(pageId) {
  var page = document.getElementById('page-' + pageId);
  if (!page) return;
  // All cards (no filter — showBatch will pick up from where we left off)
  var allCards = Array.from(page.querySelectorAll('.cat-grid .project-card'));
  showBatch(pageId, allCards);
}

// Silently preload + decode all portfolio card images in the background.
// Runs after the page is idle so it never competes with the splash animation.
window.addEventListener('load', function() {
  requestIdleCallback(function() {
    document.querySelectorAll('.cat-grid .project-card img, .portfolio-grid .project-card img').forEach(function(img) {
      if (!img.src) return;
      var pre = new Image();
      pre.src = img.src;
      if (pre.decode) pre.decode().catch(function(){});
    });
  }, { timeout: 3000 });
});

// Init both portfolio counters on first load (home is default active page)
document.addEventListener('DOMContentLoaded', function() {
  // Pre-calculate totals and ensure controls bars start hidden on all portfolio pages
  // Controls bar starts hidden — only revealed by showBatch
  var punetPage = document.getElementById('page-punet');
  if (punetPage) {
    var controls = punetPage.querySelector('.portfolio-controls');
    if (controls) controls.classList.remove('controls-visible');
  }

  // Stamp bilingual data attributes on all project cards
  document.querySelectorAll('.project-card').forEach(function(card) {
    var titleEl = card.querySelector('.project-title');
    var metaEl  = card.querySelector('.project-meta');
    if (titleEl && !card.dataset.titleAl) {
      var alTitle = titleEl.textContent.trim();
      card.dataset.titleAl = alTitle;
      card.dataset.titleEn = titleTranslations[alTitle] || alTitle;
    }
    if (metaEl && !card.dataset.metaAl) {
      var alMeta = metaEl.textContent.trim();
      card.dataset.metaAl = alMeta;
      var parts = alMeta.split('·').map(function(s){ return s.trim(); });
      card.dataset.metaEn = parts.map(function(p){ return metaTranslations[p] || p; }).join(' · ');
    }
  });
});

// ========================
// SPLASH SCREEN
// ========================
window.addEventListener('load', function() {
  setTimeout(function() {
    const splash = document.getElementById('splash-screen');
    if (splash) splash.classList.add('hidden');
  }, 1500);
  // Init portfolio if a portfolio page is the initial active page
  var punetPg = document.getElementById('page-punet');
  if (punetPg && punetPg.classList.contains('active')) {
    buildPunetGrid();
    initPortfolio('punet');
  }
});

// ========================
// CUSTOM CURSOR
// ========================
(function() {
  const dot  = document.getElementById('cursor-dot');
  const ring = document.getElementById('cursor-ring');
  if (!dot || !ring) return;

  let mouseX = 0, mouseY = 0;
  let ringX = 0, ringY = 0;
  let rafId;

  document.addEventListener('mousemove', function(e) {
    mouseX = e.clientX;
    mouseY = e.clientY;
    dot.style.left  = mouseX + 'px';
    dot.style.top   = mouseY + 'px';
  }, { passive: true });

  function animateRing() {
    ringX += (mouseX - ringX) * 0.12;
    ringY += (mouseY - ringY) * 0.12;
    ring.style.left = ringX + 'px';
    ring.style.top  = ringY + 'px';
    rafId = requestAnimationFrame(animateRing);
  }
  animateRing();

  document.addEventListener('mouseover', function(e) {
    const el = e.target.closest('a, button, [onclick], .project-card, .filter-item, .social-icon, .exp-accordion-item, .contact-type-item');
    if (el) document.body.classList.add('cursor-hover');
  }, { passive: true });
  document.addEventListener('mouseout', function(e) {
    const el = e.target.closest('a, button, [onclick], .project-card, .filter-item, .social-icon, .exp-accordion-item, .contact-type-item');
    if (el) document.body.classList.remove('cursor-hover');
  }, { passive: true });

  document.addEventListener('mouseleave', function() {
    dot.style.opacity  = '0';
    ring.style.opacity = '0';
  });
  document.addEventListener('mouseenter', function() {
    dot.style.opacity  = '1';
    ring.style.opacity = '1';
  });
})();

// ========================
// WORD-BY-WORD REVEAL
// ========================
(function() {
  function splitIntoWords(el) {
    if (el.dataset.wordsSplit) return;
    el.dataset.wordsSplit = '1';
    // Collect text nodes and HTML elements separately
    var nodes = Array.from(el.childNodes);
    el.innerHTML = '';
    nodes.forEach(function(node) {
      if (node.nodeType === 3) { // text node
        var words = node.textContent.split(/(\s+)/);
        words.forEach(function(part) {
          if (/^\s+$/.test(part)) {
            el.appendChild(document.createTextNode(part));
          } else if (part.length > 0) {
            var span = document.createElement('span');
            span.className = 'wd';
            var inner = document.createElement('span');
            inner.className = 'wd-inner';
            inner.textContent = part;
            span.appendChild(inner);
            el.appendChild(span);
          }
        });
      } else {
        // preserve HTML elements (e.g. <em>, <span>)
        var child = node.cloneNode(true);
        // wrap the element in a .wd span
        var wrap = document.createElement('span');
        wrap.className = 'wd';
        var inner = document.createElement('span');
        inner.className = 'wd-inner';
        inner.appendChild(child);
        wrap.appendChild(inner);
        el.appendChild(wrap);
      }
    });
  }

  function staggerWords(el) {
    el.querySelectorAll('.wd-inner').forEach(function(w, i) {
      w.style.transitionDelay = (i * 70) + 'ms';
    });
  }

  var wordObserver = new IntersectionObserver(function(entries) {
    entries.forEach(function(entry) {
      if (entry.isIntersecting) {
        entry.target.classList.add('words-visible');
      }
    });
  }, { threshold: 0.18, rootMargin: '0px 0px -40px 0px' });

  function initWordReveal() {
    document.querySelectorAll('.page.active .reveal-words, .reveal-words').forEach(function(el) {
      if (!el.dataset.wordsSplit) {
        splitIntoWords(el);
        staggerWords(el);
      }
      wordObserver.observe(el);
      // If already in viewport (e.g. hero on load), trigger immediately after slight delay
      var rect = el.getBoundingClientRect();
      if (rect.top < window.innerHeight && rect.bottom > 0) {
        setTimeout(function() { el.classList.add('words-visible'); }, 300);
      }
    });
  }

  initWordReveal();
  if (typeof navigateTo === 'function') {
    var _origNav = navigateTo;
    window.navigateTo = function(pageId) {
      _origNav(pageId);
      setTimeout(initWordReveal, 400);
    };
  }
  document.addEventListener('pageNavigated', initWordReveal);
})();

// ========================
// PORTFOLIO CURSOR TRACKING
// ========================
(function() {
  var pc = document.getElementById('portfolio-cursor');
  if (!pc) return;

  var pcX = window.innerWidth / 2;
  var pcY = window.innerHeight / 2;
  var curX = pcX, curY = pcY;
  var visible = false;

  // Smoothly follow mouse
  (function animPC() {
    curX += (pcX - curX) * 0.14;
    curY += (pcY - curY) * 0.14;
    pc.style.left = curX + 'px';
    pc.style.top  = curY + 'px';
    requestAnimationFrame(animPC);
  })();

  document.addEventListener('mousemove', function(e) {
    pcX = e.clientX;
    pcY = e.clientY;
  }, { passive: true });

  // Show/hide based on hovering over .project-card
  document.addEventListener('mouseover', function(e) {
    if (e.target.closest('.project-card')) {
      if (!visible) { pc.classList.add('visible'); document.body.classList.add('on-portfolio-zone'); visible = true; }
    }
  }, { passive: true });
  document.addEventListener('mouseout', function(e) {
    if (e.target.closest('.project-card')) {
      var to = e.relatedTarget;
      if (!to || !to.closest('.project-card')) {
        pc.classList.remove('visible');
        document.body.classList.remove('on-portfolio-zone');
        visible = false;
      }
    }
  }, { passive: true });

  // Update label on language switch
  function updatePortfolioCursorLabel() {
    if (typeof currentLang !== 'undefined') {
      pc.textContent = currentLang === 'en' ? 'View project' : 'Shiko projektin';
    }
  }
  document.addEventListener('langChanged', updatePortfolioCursorLabel);
  updatePortfolioCursorLabel();
})();

// ============================================================
// PREMIUM SMOOTH SCROLL ENGINE
// Intercepts wheel events and applies lerp easing so scrolling
// feels slow, deliberate and flowing rather than instant.
// Only activates on non-touch (desktop) devices.
// ============================================================
(function() {
  if ('ontouchstart' in window) return; // leave mobile native

  // Remove CSS smooth-scroll so our engine takes full control
  document.documentElement.style.scrollBehavior = 'auto';

  // Always start at 0 — browser scroll restore is disabled by the load handler above
  var targetY  = 0;
  var currentY = 0;
  var ticking  = false;
  var EASE     = 0.072; // lower = slower / more flowing
  var MULTIPLIER = 0.9; // scale wheel delta (< 1 = slower input)

  function lerp(a, b, t) { return a + (b - a) * t; }

  window.addEventListener('wheel', function(e) {
    // Don't intercept scrolling inside the project modal
    var modal = document.getElementById('projectModal');
    if (modal && modal.classList.contains('open')) return;
    e.preventDefault();
    targetY += e.deltaY * MULTIPLIER;
    targetY = Math.max(0, Math.min(targetY, document.body.scrollHeight - window.innerHeight));
    if (!ticking) {
      ticking = true;
      requestAnimationFrame(tick);
    }
  }, { passive: false });

  function tick() {
    currentY = lerp(currentY, targetY, EASE);
    if (Math.abs(targetY - currentY) > 0.5) {
      window.scrollTo(0, currentY);
      requestAnimationFrame(tick);
    } else {
      window.scrollTo(0, targetY);
      currentY = targetY;
      ticking = false;
    }
  }

  // Keep targetY in sync when scroll happens via keyboard, anchor links, etc.
  window.addEventListener('scroll', function() {
    if (!ticking) {
      targetY  = window.scrollY;
      currentY = window.scrollY;
    }
  }, { passive: true });
})();

// ========================
// TOUCH TAP RIPPLE
// Shows a brief brass ring where the user taps, then disappears.
// Only runs on touch devices.
// ========================
(function() {
  if (!('ontouchstart' in window)) return;
  document.addEventListener('touchstart', function(e) {
    var touch = e.touches[0];
    var ripple = document.createElement('span');
    ripple.className = 'tap-ripple';
    ripple.style.left = touch.clientX + 'px';
    ripple.style.top  = touch.clientY + 'px';
    document.body.appendChild(ripple);
    setTimeout(function() { ripple.remove(); }, 480);
  }, { passive: true });
})();

// ========================
// MOBILE MENU LANG TOGGLE
// ========================
document.addEventListener('click', function(e) {
  var btn = e.target.closest('#mobile-menu .lang-toggle button');
  if (!btn) return;
  var lang = btn.textContent.trim() === 'AL' ? 'al' : 'en';
  switchLanguage(lang);
});
