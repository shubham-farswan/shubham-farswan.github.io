// Language switcher.
// English lives in the HTML itself; it is captured on load, so only zh/fr/es are listed here.
// Mark text with data-i18n="key" (innerHTML) or data-i18n-aria="key" (aria-label).
// Paper titles, author and journal names are intentionally left in English.
// ponytail: client-side swap, so search engines index English only; add /zh/ /fr/ /es/ pages if that matters.

const I18N = {
  zh: {
    "title.home": "Shubham Farswan - 量子材料的低温拉曼光谱",
    "title.research": "研究 - Shubham Farswan",
    "title.pubs": "论文 - Shubham Farswan",
    "title.beyond": "实验室之外 - Shubham Farswan",

    "nav.home": "首页",
    "nav.research": "研究",
    "nav.pubs": "论文",
    "nav.beyond": "实验室之外",
    "nav.contact": "联系",
    "ui.lang": "语言",
    "ui.theme": "切换深色模式",
    "ui.menu": "切换导航",

    "home.sub": "实验物理学者，利用低温拉曼光散射研究<mark>量子材料</mark>。",
    "cta.email": "给我发邮件",
    "cta.cv": "下载简历",
    "home.meta": "印度理工学院德里分校物理系博士研究生，导师为 Kaushik Sen 博士。",
    "about.title": "关于我",
    "about.p1": "我是印度理工学院（IIT）德里分校物理系四年级博士研究生，导师为 <strong>Kaushik Sen 博士</strong>。我的研究结合了<strong>脉冲激光沉积（PLD）薄膜生长</strong>与<strong>低温拉曼光谱</strong>：先生长量子材料，再探测其晶格、自旋与电子激发。",
    "about.p2": "我尤其关注<strong>多铁性材料</strong>（磁性与铁电性共存并相互耦合）以及<strong>量子自旋液体候选材料</strong>，其奇异的磁性基态会在拉曼响应中留下细微的特征。物理之外，我也喜欢动手制作：电子电路、软件和嵌入式系统（见<a href=\"beyond.html\">实验室之外</a>）。",
    "facts.advisor": "导师",
    "facts.institute": "院校",
    "facts.methods": "方法",
    "facts.methods.v": "PLD 薄膜生长、低温拉曼",
    "facts.systems": "体系",
    "facts.systems.v": "多铁性材料、量子自旋液体",
    "research.title": "研究",
    "research.all": "全部方向",
    "area1.t": "多铁性材料",
    "area1.d": "通过声子反常研究自旋-声子与磁电耦合。",
    "area2.t": "自旋液体",
    "area2.d": "阻挫磁体中的连续谱激发。",
    "area3.t": "低温拉曼",
    "area3.d": "变温与偏振分辨光谱。",
    "area4.t": "PLD 薄膜",
    "area4.d": "为光谱研究定制的薄膜样品。",
    "pubs.title": "论文",
    "pubs.full": "完整列表",
    "pub.journal": "期刊",

    "footer.talk": "联系我。",
    "footer.blurb": "欢迎就量子材料、拉曼光谱或电子 / 编程项目开展合作。",
    "footer.addr": "印度新德里 Hauz Khas 110016，印度理工学院德里分校物理系",
    "footer.hosted": "托管于 GitHub Pages。",

    "research.lead": "我利用脉冲激光沉积生长量子材料薄膜，并通过变温、偏振相关的拉曼散射（低至极低温）研究它们，追踪声子、磁振子及其在相变过程中的耦合。",
    "research.current": "当前方向",
    "r1.d": "通过声子反常、对称性破缺以及磁性与铁电相变中的模式软化，探测自旋-声子与磁电耦合。",
    "r2.t": "量子自旋液体候选材料",
    "r2.d": "在阻挫磁体的磁性拉曼响应中寻找分数化激发与连续谱激发的特征。",
    "r3.t": "低温拉曼光谱",
    "r3.d": "低温、偏振分辨的测量，用于区分散射光中的晶格、自旋与电子贡献。",
    "r4.t": "薄膜生长（PLD）",
    "r4.d": "通过脉冲激光沉积合成高质量量子材料薄膜，实现可控、按样品定制的光谱研究。",
    "research.methods": "技术与方法",
    "m.growth": "生长",
    "m.growth.v": "薄膜的脉冲激光沉积（PLD）",
    "m.spec": "光谱",
    "m.spec.v": "拉曼散射（变温与偏振相关）",
    "m.env": "环境",
    "m.env.v": "低温 / 极低温装置",
    "m.analysis": "分析",
    "m.analysis.v": "声子与磁振子模式拟合、自旋-声子耦合",
    "m.systems.v": "多铁性材料、阻挫磁体、QSL 候选材料",

    "pubs.lead": "最新列表请见我的 <a href=\"https://scholar.google.com/citations?user=ZnzBCkEAAAAJ&hl=en\" target=\"_blank\" rel=\"noopener\">Google Scholar</a> 主页。<sup>&dagger;</sup> 表示同等贡献。",

    "beyond.h1a": "实验室",
    "beyond.h1b": "之外",
    "beyond.lead": "物理之外，我喜欢从头到尾设计和制作东西：从电路到固件再到应用。实验室里一台正常运转的仪器，往往既是物理，也是电子与代码。",
    "build.title": "我做什么",
    "b1.t": "电子",
    "b1.d": "模拟与数字电路设计、PCB 布局、传感器，以及用于测量与控制的仪器。",
    "b2.t": "编程",
    "b2.d": "数据采集、分析与自动化。使用 Python 进行科学计算，以及通用脚本和工具开发。",
    "b3.t": "应用开发",
    "b3.d": "为实验室工具开发桌面与网页应用。",
    "b4.t": "嵌入式系统",
    "b4.d": "微控制器固件（Arduino、ESP32、STM32）、实时控制与软硬件集成。",
    "projects.title": "精选项目",
    "projects.lead": "这两个项目都源于实验室里的日常问题：一台手动操作很繁琐的仪器，以及每换一个样品就要从头重建的分析流程。它们都在我的 <a href=\"https://github.com/shubham-farswan\" target=\"_blank\" rel=\"noopener\">GitHub</a> 上。",
    "cta.repo": "查看代码库",
    "p1.desc": "一款用于 Lake Shore 335 型低温温度控制器的独立 Windows 桌面应用，使用 Python 和 PyQt5 编写。它会扫描可用的 COM 端口，通过串口连接仪器，并在后台轮询，使测量过程中窗口始终保持响应。两路传感器输入实时读取并随时间绘图，设定点、PID 参数、升温速率和加热器档位都可以在应用中修改，而无需操作前面板。仪器通信位于独立模块中，与界面分离；整个程序用 PyInstaller 打包，可在未安装 Python 的实验室电脑上运行。",
    "p2.desc": "一款通用的 MATLAB 拉曼光谱分析应用，围绕单一数据结构构建，可涵盖针对任意变量（温度、压力、电场）采集的光谱序列，因此一次编写的分析适用于所有情形。窗口是一个六步流程：载入光谱文件夹；进行校正（暗电流、波数校准、仪器响应、玻色因子）；对每条光谱拟合复合模型；在整个序列中追踪每个峰并给出质量标记；用非谐与序参量模型拟合温度依赖；最后导出论文级图表及其背后的数据。界面只是函数库外的一层薄壳，因此每个按钮都是一个也可以在脚本中调用的函数。每个输出文件夹都记录了生成它的确切过程，任何内容都不会被悄悄覆盖。",
    "pill.app": "程序化应用",
    "pill.fit": "曲线拟合",
    "pill.io": "与仪器无关的文件读写",
  },

  fr: {
    "title.home": "Shubham Farswan - Spectroscopie Raman à basse température des matériaux quantiques",
    "title.research": "Recherche - Shubham Farswan",
    "title.pubs": "Publications - Shubham Farswan",
    "title.beyond": "Hors du labo - Shubham Farswan",

    "nav.home": "Accueil",
    "nav.research": "Recherche",
    "nav.pubs": "Publications",
    "nav.beyond": "Hors du labo",
    "nav.contact": "Contact",
    "ui.lang": "Langue",
    "ui.theme": "Changer de thème",
    "ui.menu": "Ouvrir le menu",

    "home.sub": "Physicien expérimentateur, j'étudie les <mark>matériaux quantiques</mark> par diffusion Raman à basse température.",
    "cta.email": "M'écrire",
    "cta.cv": "Télécharger le CV",
    "home.meta": "Doctorant au Département de physique de l'Indian Institute of Technology Delhi, sous la direction du Dr Kaushik Sen.",
    "about.title": "À propos",
    "about.p1": "Je suis doctorant en quatrième année au Département de physique de l'Indian Institute of Technology (IIT) Delhi, sous la direction du <strong>Dr Kaushik Sen</strong>. Mes recherches associent la <strong>croissance de couches minces par ablation laser pulsée (PLD)</strong> et la <strong>spectroscopie Raman à basse température</strong> : je fais croître des matériaux quantiques, puis je sonde leurs excitations de réseau, de spin et électroniques.",
    "about.p2": "Je m'intéresse particulièrement aux <strong>multiferroïques</strong>, où magnétisme et ferroélectricité coexistent et se couplent, ainsi qu'aux <strong>candidats liquides de spin quantiques</strong>, dont les états fondamentaux magnétiques exotiques laissent des empreintes subtiles dans leur réponse Raman. En dehors de la physique, j'aime fabriquer des choses : électronique, logiciels et systèmes embarqués (voir <a href=\"beyond.html\">Hors du labo</a>).",
    "facts.advisor": "Directeur",
    "facts.institute": "Institut",
    "facts.methods": "Méthodes",
    "facts.methods.v": "Couches minces par PLD, Raman à basse température",
    "facts.systems": "Systèmes",
    "facts.systems.v": "Multiferroïques, liquides de spin quantiques",
    "research.title": "Recherche",
    "research.all": "Toutes les thématiques",
    "area1.t": "Multiferroïques",
    "area1.d": "Couplages spin-phonon et magnétoélectrique via les anomalies de phonons.",
    "area2.t": "Liquides de spin",
    "area2.d": "Excitations de continuum dans les aimants frustrés.",
    "area3.t": "Raman cryogénique",
    "area3.d": "Spectres résolus en température et en polarisation.",
    "area4.t": "Couches PLD",
    "area4.d": "Couches minces sur mesure pour la spectroscopie.",
    "pubs.title": "Publications",
    "pubs.full": "Liste complète",
    "pub.journal": "Revue",

    "footer.talk": "Parlons-en.",
    "footer.blurb": "Collaborations en matériaux quantiques, spectroscopie Raman ou projets d'électronique / de programmation.",
    "footer.addr": "Département de physique, IIT Delhi, Hauz Khas, New Delhi 110016, Inde",
    "footer.hosted": "Hébergé sur GitHub Pages.",

    "research.lead": "Je fais croître des couches minces de matériaux quantiques par ablation laser pulsée et je les étudie par diffusion Raman en fonction de la température et de la polarisation, jusqu'aux températures cryogéniques, en suivant les phonons, les magnons et leur couplage à travers les transitions de phase.",
    "research.current": "Thématiques actuelles",
    "r1.d": "Couplages spin-phonon et magnétoélectrique sondés via les anomalies de phonons, les brisures de symétrie et l'amollissement de modes à travers les transitions magnétiques et ferroélectriques.",
    "r2.t": "Candidats liquides de spin quantiques",
    "r2.d": "À la recherche de signatures d'excitations fractionnalisées et de continuum dans la réponse Raman magnétique des aimants frustrés.",
    "r3.t": "Spectroscopie Raman à basse température",
    "r3.d": "Mesures cryogéniques résolues en polarisation pour distinguer les contributions du réseau, du spin et des électrons à la lumière diffusée.",
    "r4.t": "Croissance de couches minces (PLD)",
    "r4.d": "Synthèse de couches minces de haute qualité par ablation laser pulsée, pour une spectroscopie contrôlée et adaptée à chaque échantillon.",
    "research.methods": "Techniques et méthodes",
    "m.growth": "Croissance",
    "m.growth.v": "Ablation laser pulsée (PLD) de couches minces",
    "m.spec": "Spectroscopie",
    "m.spec.v": "Diffusion Raman, en fonction de la température et de la polarisation",
    "m.env": "Environnement",
    "m.env.v": "Dispositifs cryogéniques / basse température",
    "m.analysis": "Analyse",
    "m.analysis.v": "Ajustement des modes de phonons et de magnons, couplage spin-phonon",
    "m.systems.v": "Multiferroïques, aimants frustrés, candidats QSL",

    "pubs.lead": "Pour la liste la plus à jour, consultez mon profil <a href=\"https://scholar.google.com/citations?user=ZnzBCkEAAAAJ&hl=en\" target=\"_blank\" rel=\"noopener\">Google Scholar</a>. <sup>&dagger;</sup> indique une contribution égale.",

    "beyond.h1a": "Hors du",
    "beyond.h1b": "labo",
    "beyond.lead": "En dehors de la physique, j'aime concevoir et fabriquer des choses de bout en bout, des circuits au firmware et aux applications. Un instrument qui fonctionne au labo relève souvent autant de l'électronique et du code que de la physique.",
    "build.title": "Ce que je construis",
    "b1.t": "Électronique",
    "b1.d": "Conception de circuits analogiques et numériques, routage de PCB, capteurs et instrumentation pour la mesure et le contrôle.",
    "b2.t": "Programmation",
    "b2.d": "Acquisition, analyse et automatisation de données. Python pour le calcul scientifique, ainsi que scripts et outils généraux.",
    "b3.t": "Applications",
    "b3.d": "Applications de bureau et web pour les outils du labo.",
    "b4.t": "Systèmes embarqués",
    "b4.d": "Firmware de microcontrôleurs (Arduino, ESP32, STM32), contrôle en temps réel et intégration matériel-logiciel.",
    "projects.title": "Projets choisis",
    "projects.lead": "Ces deux projets sont nés de problèmes quotidiens au labo : un instrument fastidieux à piloter à la main, et une analyse reconstruite de zéro pour chaque nouvel échantillon. Ils sont sur mon <a href=\"https://github.com/shubham-farswan\" target=\"_blank\" rel=\"noopener\">GitHub</a>.",
    "cta.repo": "Voir le dépôt",
    "p1.desc": "Une application de bureau Windows autonome pour le contrôleur de température cryogénique Lake Shore Model 335, écrite en Python avec PyQt5. Elle détecte les ports COM disponibles, se connecte à l'instrument en série et l'interroge en arrière-plan, pour que la fenêtre reste réactive pendant une mesure. Les deux entrées de capteur sont lues en direct et tracées en fonction du temps, et la consigne, les paramètres PID, la vitesse de rampe et la plage de chauffage se règlent depuis l'application plutôt que sur la face avant. La communication avec l'instrument vit dans son propre module, séparé de l'interface, et l'ensemble est empaqueté avec PyInstaller pour tourner sur une machine du labo sans Python installé.",
    "p2.desc": "Une application générale d'analyse de spectroscopie Raman pour MATLAB, construite autour d'une structure de données unique qui couvre une série de spectres acquise en fonction de n'importe quelle variable : température, pression, champ électrique. Une analyse écrite une fois fonctionne donc pour toutes. La fenêtre est un pipeline en six étapes : charger un dossier de spectres, les corriger (courant d'obscurité, calibration en nombre d'onde, réponse instrumentale, facteur de Bose), ajuster un modèle composite à chaque spectre, suivre chaque pic le long de la série avec des indicateurs de qualité, ajuster la dépendance en température avec des modèles anharmoniques et de paramètre d'ordre, puis exporter une figure prête à publier avec les valeurs qui la sous-tendent. L'interface est une fine couche au-dessus d'une bibliothèque : chaque bouton est une fonction qu'on peut aussi appeler depuis un script. Chaque dossier de sortie garde la trace exacte de ce qui l'a produit, et rien n'est écrasé en silence.",
    "pill.app": "Application programmatique",
    "pill.fit": "Ajustement de courbes",
    "pill.io": "E/S multi-instruments",
  },

  es: {
    "title.home": "Shubham Farswan - Espectroscopía Raman a baja temperatura de materiales cuánticos",
    "title.research": "Investigación - Shubham Farswan",
    "title.pubs": "Publicaciones - Shubham Farswan",
    "title.beyond": "Fuera del lab - Shubham Farswan",

    "nav.home": "Inicio",
    "nav.research": "Investigación",
    "nav.pubs": "Publicaciones",
    "nav.beyond": "Fuera del lab",
    "nav.contact": "Contacto",
    "ui.lang": "Idioma",
    "ui.theme": "Cambiar tema",
    "ui.menu": "Abrir menú",

    "home.sub": "Físico experimental que estudia <mark>materiales cuánticos</mark> mediante dispersión Raman a baja temperatura.",
    "cta.email": "Escríbeme",
    "cta.cv": "Descargar CV",
    "home.meta": "Investigador doctoral en el Departamento de Física del Indian Institute of Technology Delhi, bajo la dirección del Dr. Kaushik Sen.",
    "about.title": "Sobre mí",
    "about.p1": "Soy investigador doctoral de cuarto año en el Departamento de Física del Indian Institute of Technology (IIT) Delhi, bajo la dirección del <strong>Dr. Kaushik Sen</strong>. Mi investigación combina el <strong>crecimiento de películas delgadas por depósito por láser pulsado (PLD)</strong> con la <strong>espectroscopía Raman a baja temperatura</strong>: crezco materiales cuánticos y luego estudio sus excitaciones de red, de espín y electrónicas.",
    "about.p2": "Me interesan especialmente los <strong>multiferroicos</strong>, donde el magnetismo y la ferroelectricidad coexisten y se acoplan, y los <strong>candidatos a líquido de espín cuántico</strong>, cuyos exóticos estados fundamentales magnéticos dejan huellas sutiles en su respuesta Raman. Además de la física, disfruto construyendo cosas: electrónica, software y sistemas embebidos (ver <a href=\"beyond.html\">Fuera del lab</a>).",
    "facts.advisor": "Director",
    "facts.institute": "Instituto",
    "facts.methods": "Métodos",
    "facts.methods.v": "Películas delgadas por PLD, Raman a baja temperatura",
    "facts.systems": "Sistemas",
    "facts.systems.v": "Multiferroicos, líquidos de espín cuánticos",
    "research.title": "Investigación",
    "research.all": "Todas las líneas",
    "area1.t": "Multiferroicos",
    "area1.d": "Acoplamiento espín-fonón y magnetoeléctrico a través de anomalías de fonones.",
    "area2.t": "Líquidos de espín",
    "area2.d": "Excitaciones de continuo en imanes frustrados.",
    "area3.t": "Raman criogénico",
    "area3.d": "Espectros resueltos en temperatura y polarización.",
    "area4.t": "Películas PLD",
    "area4.d": "Películas delgadas a medida para espectroscopía.",
    "pubs.title": "Publicaciones",
    "pubs.full": "Lista completa",
    "pub.journal": "Revista",

    "footer.talk": "Hablemos.",
    "footer.blurb": "Colaboraciones en materiales cuánticos, espectroscopía Raman o proyectos de electrónica / programación.",
    "footer.addr": "Departamento de Física, IIT Delhi, Hauz Khas, Nueva Delhi 110016, India",
    "footer.hosted": "Alojado en GitHub Pages.",

    "research.lead": "Crezco películas delgadas de materiales cuánticos por depósito por láser pulsado y las estudio mediante dispersión Raman dependiente de la temperatura y la polarización, hasta temperaturas criogénicas, siguiendo fonones, magnones y su acoplamiento a través de las transiciones de fase.",
    "research.current": "Líneas actuales",
    "r1.d": "Acoplamiento espín-fonón y magnetoeléctrico estudiado mediante anomalías de fonones, ruptura de simetría y ablandamiento de modos a través de transiciones magnéticas y ferroeléctricas.",
    "r2.t": "Candidatos a líquido de espín cuántico",
    "r2.d": "Búsqueda de firmas de excitaciones fraccionalizadas y de continuo en la respuesta Raman magnética de imanes frustrados.",
    "r3.t": "Espectroscopía Raman a baja temperatura",
    "r3.d": "Medidas criogénicas resueltas en polarización para separar las contribuciones de red, espín y electrónicas a la luz dispersada.",
    "r4.t": "Crecimiento de películas delgadas (PLD)",
    "r4.d": "Síntesis de películas delgadas de alta calidad por depósito por láser pulsado, para una espectroscopía controlada y adaptada a cada muestra.",
    "research.methods": "Técnicas y métodos",
    "m.growth": "Crecimiento",
    "m.growth.v": "Depósito por láser pulsado (PLD) de películas delgadas",
    "m.spec": "Espectroscopía",
    "m.spec.v": "Dispersión Raman, dependiente de la temperatura y la polarización",
    "m.env": "Entorno",
    "m.env.v": "Montajes criogénicos / de baja temperatura",
    "m.analysis": "Análisis",
    "m.analysis.v": "Ajuste de modos de fonones y magnones, acoplamiento espín-fonón",
    "m.systems.v": "Multiferroicos, imanes frustrados, candidatos QSL",

    "pubs.lead": "Para la lista más actualizada, consulta mi perfil de <a href=\"https://scholar.google.com/citations?user=ZnzBCkEAAAAJ&hl=en\" target=\"_blank\" rel=\"noopener\">Google Scholar</a>. <sup>&dagger;</sup> indica contribución equitativa.",

    "beyond.h1a": "Fuera del",
    "beyond.h1b": "laboratorio",
    "beyond.lead": "Fuera de la física, me gusta diseñar y construir cosas de principio a fin, desde circuitos hasta firmware y aplicaciones. Un instrumento que funciona en el laboratorio suele ser tanto electrónica y código como física.",
    "build.title": "Lo que construyo",
    "b1.t": "Electrónica",
    "b1.d": "Diseño de circuitos analógicos y digitales, diseño de PCB, sensores e instrumentación para medida y control.",
    "b2.t": "Programación",
    "b2.d": "Adquisición, análisis y automatización de datos. Python para computación científica, además de scripts y herramientas de uso general.",
    "b3.t": "Aplicaciones",
    "b3.d": "Aplicaciones de escritorio y web para utilidades de laboratorio.",
    "b4.t": "Sistemas embebidos",
    "b4.d": "Firmware de microcontroladores (Arduino, ESP32, STM32), control en tiempo real e integración hardware-software.",
    "projects.title": "Proyectos destacados",
    "projects.lead": "Ambos surgieron de problemas cotidianos en el laboratorio: un instrumento tedioso de manejar a mano y un análisis que se rehacía desde cero para cada muestra nueva. Están en mi <a href=\"https://github.com/shubham-farswan\" target=\"_blank\" rel=\"noopener\">GitHub</a>.",
    "cta.repo": "Ver repositorio",
    "p1.desc": "Una aplicación de escritorio independiente para Windows para el controlador de temperatura criogénico Lake Shore Model 335, escrita en Python con PyQt5. Busca los puertos COM disponibles, se conecta al instrumento por puerto serie y lo consulta en segundo plano, de modo que la ventana sigue respondiendo durante una medida. Las dos entradas de sensor se leen en vivo y se grafican frente al tiempo, y la consigna, los parámetros PID, la velocidad de rampa y el rango del calentador se pueden cambiar desde la aplicación en lugar del panel frontal. La comunicación con el instrumento vive en su propio módulo, separado de la interfaz, y todo se empaqueta con PyInstaller para que funcione en un equipo del laboratorio sin Python instalado.",
    "p2.desc": "Una aplicación de análisis de espectroscopía Raman de uso general para MATLAB, construida en torno a una única estructura de datos que cubre una serie espectral medida frente a cualquier variable: temperatura, presión, campo eléctrico. Así, un análisis escrito una vez sirve para todas. La ventana es un flujo de seis etapas: cargar una carpeta de espectros, corregirlos (corriente oscura, calibración de número de onda, respuesta instrumental, factor de Bose), ajustar un modelo compuesto a cada espectro, seguir cada pico a lo largo de la serie con indicadores de calidad, ajustar la dependencia con la temperatura con modelos anarmónicos y de parámetro de orden, y exportar una figura lista para publicar junto con los números que la respaldan. La interfaz es una capa fina sobre una biblioteca, así que cada botón es una función que también se puede llamar desde un script. Cada carpeta de resultados guarda un registro exacto de lo que la produjo, y nada se sobrescribe sin aviso.",
    "pill.app": "Aplicación programática",
    "pill.fit": "Ajuste de curvas",
    "pill.io": "E/S multi-instrumento",
  },
};

(function () {
  const LANGS = ["en", "zh", "fr", "es"];
  const HTML_LANG = { en: "en", zh: "zh-Hans", fr: "fr", es: "es" };
  const original = new Map(); // element -> English innerHTML / aria-label

  const store = {
    get() { try { return localStorage.getItem("lang"); } catch { return null; } },
    set(v) { try { localStorage.setItem("lang", v); } catch {} },
  };

  function apply(lang) {
    const dict = I18N[lang] || {};
    document.querySelectorAll("[data-i18n]").forEach((el) => {
      if (!original.has(el)) original.set(el, el.innerHTML);
      el.innerHTML = dict[el.dataset.i18n] ?? original.get(el);
    });
    document.querySelectorAll("[data-i18n-aria]").forEach((el) => {
      if (!original.has(el)) original.set(el, el.getAttribute("aria-label"));
      el.setAttribute("aria-label", dict[el.dataset.i18nAria] ?? original.get(el));
    });
    document.documentElement.lang = HTML_LANG[lang];
    const year = document.getElementById("year");
    if (year) year.textContent = new Date().getFullYear();
  }

  const fromBrowser = (navigator.languages || [navigator.language || "en"])
    .map((l) => l.slice(0, 2).toLowerCase())
    .find((l) => LANGS.includes(l));
  const saved = store.get();
  const lang = LANGS.includes(saved) ? saved : fromBrowser || "en";

  const select = document.getElementById("lang-select");
  if (select) {
    select.value = lang;
    select.addEventListener("change", () => { store.set(select.value); apply(select.value); });
  }
  if (lang !== "en") apply(lang);
})();
