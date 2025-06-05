// 书籍数据
const booksData = [
    {
        id: 1,
        title: "康熙的红票",
        author: "孙立天",
        category: "history",
        cover: "../accessories/img/kangxi.png",
        description: "2019年北京春季艺术品拍卖会上，出现了一张康熙皇帝1716年发去欧洲的谕令，内容是寻找他派去罗马多年而杳无音讯的洋钦差。这份谕令呈朱红色，历史上又称“红票”。因正史中没有记载，红票的来历一直成谜。康熙为何会派西洋传教士做钦差？派他们到欧洲去所为何事？\n" +
            "\n" +
            "本书以红票作为叙事切入点，抽丝剥茧，围绕清初皇室特别是康熙帝与汤若望、南怀仁为代表的北京传教士群体之间的互动，抉出了一段中国与西洋深度接触的往事。\n" +
            "\n" +
            "进入中国的西洋传教士，与中国各阶层有着广泛的接触，上至皇帝高官、下至贩夫走卒，他们的交往交织着文化碰撞与私人恩怨，纠缠着国际竞争与内闱宫斗。\n" +
            "\n" +
            "作者精读中西文献，细加论证，在诸如清初历狱、中西礼仪之争、雍正禁教等热点问题上均有原创性见解，并对流传已久的“闭关锁国”“朝贡体系”“文明冲突”等历史论调提出了质疑，是一本学术性与通俗性兼具的佳作。",
        pages: 400,
        status: "completed",
        startDate: "2025-03-12",
        endDate: "2025-03-21",
        notes: "",
        onlineLink: "../accessories/book/康熙的红票：全球化中的清朝.pdf",
        downloadLink: "../accessories/book/康熙的红票：全球化中的清朝.pdf",
        recommended: true
    },
    {
        id: 2,
        title: "CSAPP - 深入理解计算机系统",
        author: "Randal E. Bryant, David R. O'Hallaron",
        category: "computer",
        cover: "../accessories/img/csapp.png",
        description: "计算机神书hhh",
        pages: 1080,
        status: "paused",
        notes: "",
        onlineLink: "",
        downloadLink: "",
        recommended: true
    },
    {
        id: 3,
        title: "你当像鸟飞往你的山",
        author: "Tara Westover",
        category: "literature",
        cover: "../accessories/img/bird.png",
        description: "人们只看到我的与众不同：一个十七岁前从未踏入教室的大山女孩，却戴上一顶学历的高帽，熠熠生辉。只有我知道自己的真面目：我来自一个极少有人能想象的家庭。我的童年由垃圾场的废铜烂铁铸成，那里没有读书声，只有起重机的轰鸣。不上学，不就医，是父亲要我们坚持的忠诚与真理。父亲不允许我们拥有自己的声音，我们的意志是他眼中的恶魔。哈佛大学，剑桥大学，哲学硕士，历史博士……我知道，像我这样从垃圾堆里爬出来的无知女孩，能取得如今的成就，应当感激涕零才对。但我丝毫提不起热情。我曾怯懦、崩溃、自我怀疑，内心里有什么东西腐烂了，恶臭熏天。直到我逃离大山，打开另一个世界。那是教育给我的新世界，那是我生命的无限可能。",
        pages: 388,
        status: "completed",
        startDate: "2024-11-22",
        endDate: "2024-12-14",
        notes: "",
        onlineLink: "../accessories/book/你当像鸟飞往你的山 (塔拉·韦斯特弗（Tara Westover）) (Z-Library) 2.epub",
        downloadLink: "../accessories/book/你当像鸟飞往你的山 (塔拉·韦斯特弗（Tara Westover）) (Z-Library) 2.epub",
        recommended: true
    },
    {
        id: 4,
        title: "打开一颗心",
        author: "Stephen Westaby",
        category: "literature",
        cover: "../accessories/img/heart.png",
        description: "“我经手过12000颗心脏。”作者在心外科暨胸外科从业数十年，手术成绩卓著。本书即汇集了作者经历的一些经典案例（多数发生在1970年代至2000年代之间），也剖白了作者的心路历程。\n" +
            "\n" +
            "工薪家庭的穷小子，被幼年时的医学纪录片鼓舞，也被亲人的离世刺痛，终于将自己历练成一名杰出的心外科医生。他为面试的成功而激动地徜徉在伦敦河岸街头，为先天心脏病或气道重度灼伤的小儿开胸，为病人和家属的焦灼与渴望而奋战，为对抗次日手术的焦虑而深入沙特沙漠欣赏夜空，为尽力修补而果断切削垂危的心脏，为救命而与医务主任对抗、“擅自”为病人安装人工的“电池”心，在命悬一线的攻坚手术面前还能讲出冷笑话……一位艺业精湛、傲气十足又敬畏生命的外科医生形象跃然纸上。那些十几年甚至几十年前就存在的顶尖外科技术也令读者叹为观止。\n" +
            "\n" +
            "在展现心胸外科手术的神乎其技之余，作者也借病症、病患和自己的业务游历，揭示了人世百态，介绍了世界各地的风物文化，展现了一名外科医生眼中所见的悲伤与爱，以及对医疗制度、伦理和医学教育的反思，令读者收获很多感触和启发，是一部兼具叙事魅力、医学知识和奇迹的佳作。",
        pages: 344,
        status: "completed",
        startDate: "2025-01-16",
        endDate: "2025-01-24",
        notes: "",
        onlineLink: "../accessories/book/打开一颗心 ([英]斯蒂芬·韦斯塔比 [[英]斯蒂芬·韦斯塔比]) (Z-Library).pdf",
        downloadLink: "../accessories/book/打开一颗心 ([英]斯蒂芬·韦斯塔比 [[英]斯蒂芬·韦斯塔比]) (Z-Library).pdf",
        recommended: true
    },
    {
        id: 5,
        title: "房思琪的初恋乐园",
        author: "林奕含",
        category: "literature",
        cover: "../accessories/img/fangsiqi.png",
        description: '《房思琪的初恋乐园》是作家 林奕含 创作的长篇小说，首次出版于2017年2月。 该小说讲述了美丽的文学少女 房思琪 被补习班老师 李国华 长期性侵，最终精神崩溃的故事。',
        pages: 344,
        status: "completed",
        startDate: "2024-11-01",
        endDate: "2024-11-13",
        notes: "",
        onlineLink: "",
        downloadLink: "",
        recommended: false
    },
    {
        id: 6,
        title: "云边有个小卖部",
        author: "张嘉佳",
        category: "literature",
        cover: "../accessories/img/yunbian.png",
        description: '云边镇少年刘十三的成长故事。\n' +
            '\n' +
            '刘十三自幼与开小卖部的外婆相依为命，努力读书为了离开小镇，追寻远方与梦想。在城市里碰壁受挫的刘十三回到了小镇，与少时玩伴程霜重逢。小镇生活平静却暗潮汹涌，一个孤儿，一场婚礼，一场意外，几乎打破了所有人的生活。\n' +
            '\n' +
            '为了完成一个几乎不可能完成的任 务，刘十三拼尽全力，却不知道，生命中更重要的正在离自己而去。',
        pages: 272,
        status: "completed",
        startDate: "2024-11-14",
        endDate: "2024-11-21",
        notes: "",
        onlineLink: "",
        downloadLink: "",
        recommended: false
    },
    {
        id: 7,
        title: "平面国",
        author: "埃德温·A.艾勃特",
        category: "literature",
        cover: "../accessories/img/pingmianguo.png",
        description: '这是一本由正方形撰写的神奇回忆录。在正方形所在的二维世界平面国，只有长和宽，没有高，居民按形状被分成多个阶级：卑微的等腰三角形、普通的等边三角形、作为绅士的正方形和五边形、高贵的六边形和更多边形。一天，正方形遇到了来自三维世界空间国的球体，由此展开了一段神奇的空间之旅。这时，正方形才发现，真实的世界远远超出了想象，一个前所未有的维度在眼前展开……',
        pages: 150,
        status: "completed",
        startDate: "2024-12-14",
        endDate: "2024-12-18",
        notes: "",
        onlineLink: "",
        downloadLink: "",
        recommended: true
    },
    {
        id: 8,
        title: "奥斯维辛：一部历史",
        author: "劳伦斯·里斯",
        category: "history",
        cover: "../accessories/img/aosiweixin.png",
        description: '这是一本由正方形撰写的神奇回忆录。在正方形所在的二维世界平面国，只有长和宽，没有高，居民按形状被分成多个阶级：卑微的等腰三角形、普通的等边三角形、作为绅士的正方形和五边形、高贵的六边形和更多边形。一天，正方形遇到了来自三维世界空间国的球体，由此展开了一段神奇的空间之旅。这时，正方形才发现，真实的世界远远超出了想象，一个前所未有的维度在眼前展开……',
        pages: 324,
        status: "completed",
        startDate: "2024-12-19",
        endDate: "2025-01-15",
        notes: "",
        onlineLink: "",
        downloadLink: "",
        recommended: false
    },
    {
        id: 9,
        title: "埃隆·马斯克传",
        author: "[美]沃尔特·艾萨克森",
        category: "传记",
        cover: "../accessories/img/ailong.png",
        description: '埃隆马斯克的传记',
        pages: 608,
        status: "completed",
        startDate: "2025-01-20",
        endDate: "2025-03-12",
        notes: "",
        onlineLink: "",
        downloadLink: "",
        recommended: false
    },
    {
        id: 10,
        title: "纳瓦尔宝典",
        author: "[美] 埃里克·乔根森 / 纳瓦尔·拉威康特",
        category: "智慧的结晶",
        cover: "../accessories/img/nawaer.png",
        description: '致富不仅仅靠运气，幸福也不是从天而降的。积累财富和幸福生活都是我们可以且需要学习的技能。\n' +
            '\n' +
            '那么指导我们学习的原则和方法是什么？本书提供了原则和方法。这本书收集整理了硅谷知名天使投资人纳瓦尔的智慧箴言录，尤其是关于财富积累和幸福人生的原则与方法。\n' +
            '\n' +
            '在过去十年里，纳瓦尔通过推特、博客和播客等方式分享了他的人生智慧，分享如何不靠运气取得成功、如何利用专长和杠杆获得财富以及他的幸福哲学等内容，他的分享在网络上掀起了讨论热潮，受到大量网友的热爱和追捧。纳瓦尔不仅告诉了我们怎样致富，还告诉了我们怎样看待人生，怎样获得幸福。他对财富、人生的思考将帮助你走上自己独特的人生道路，过上更富有、更幸福的生活。',
        pages: 608,
        status: "completed",
        startDate: "2025-03-21",
        endDate: "2025-03-31",
        notes: " ",
        onlineLink: "",
        downloadLink: "",
        recommended: true
    },
    {
        id: 11,
        title: "当呼吸化为空气",
        author: "[美] 保罗·卡拉尼什 / Paul Kalanithi",
        category: "回忆录",
        cover: "../accessories/img/baoluo.png",
        description: '《当呼吸化为空气》不仅是一部关于生死的回忆录，更是一次对人性、爱与希望的深刻剖析。 它让我们重新审视自己的生活和价值观，思考生命的意义和价值所在。 通过保罗的故事，我们学会了珍惜眼前人、把握当下、用心去感受生活中的每一个美好瞬间；我们学会了面对困难和挑战时要保持坚韧和勇气；我们学会了用爱和希望去照亮自己和他人的道路。 愿我们都能像保罗一样，在生命的航程中勇敢前行、不忘初心、不负韶华。',
        pages: 272,
        status: "completed",
        startDate: "2025-04-26",
        endDate: "2025-04-29",
        notes: "",
        onlineLink: "",
        downloadLink: "",
        recommended: true
    },


];

// 渲染书籍卡片
function renderBooks(booksList) {
    const container = document.getElementById('booksContainer');
    container.innerHTML = '';

    if (booksList.length === 0) {
        container.innerHTML = '<div class="no-results" style="text-align:center; padding:40px; color:var(--text-color);">没有找到匹配的书籍</div>';
        return;
    }

    booksList.forEach(book => {
        const statusText = getStatusText(book.status);
        const statusClass = `status-${book.status}`;

        const card = document.createElement('div');
        card.className = 'book-card';
        card.innerHTML = `
                <div class="book-cover">
                    ${book.recommended ? '<div class="recommended-badge">推荐</div>' : ''}
                    <img src="${book.cover}" alt="${book.title}">
                </div>
                <div class="book-header">
                    <div class="book-category">${getCategoryName(book.category)}</div>
                    <div class="book-title">${book.title}</div>
                    <div class="book-author">${book.author}</div>
                </div>
                <div class="book-body">
                    <div class="reading-info">
                        <div class="reading-status ${statusClass}">${statusText}</div>
                        <div class="reading-dates">
                            ${book.startDate ? `<div>开始: ${book.startDate}</div>` : '<div>开始: --</div>'}
                            ${book.status === 'completed' ? `<div>结束: ${book.endDate}</div>` : '<div>结束: --</div>'}
               
                        </div>
                    </div>
                    <div class="book-actions">
                        <a href="#" class="btn" data-book="${book.id}">
                            <i class="fas fa-info-circle"></i> 详情
                        </a>
                    </div>
                    <div class="book-meta">
                        <div class="book-pages"><i class="fas fa-book"></i> ${book.pages}页</div>
                    </div>
                </div>
            `;
        container.appendChild(card);
    });

    // 添加书籍详情事件监听
    document.querySelectorAll('.book-card .btn').forEach(btn => {
        btn.addEventListener('click', function (e) {
            e.preventDefault();
            const bookId = this.getAttribute('data-book');
            showBookDetail(bookId);
        });
    });
}

// 获取状态文本
function getStatusText(status) {
    const statusMap = {
        'reading': '阅读中',
        'completed': '已读完',
        'paused': '暂停阅读',
        'not-started': '未开始'
    };
    return statusMap[status] || status;
}

// 获取分类名称
function getCategoryName(category) {
    const categories = {
        'literature': '文学',
        'computer': '计算机',
        'history': '历史',
    };
    return categories[category] || category;
}

// 显示书籍详情
function showBookDetail(bookId) {
    const book = booksData.find(b => b.id == bookId);
    if (!book) return;

    const statusText = getStatusText(book.status);
    const statusClass = `status-${book.status}`;

    const detailContainer = document.getElementById('bookDetail');
    detailContainer.innerHTML = `
            <div class="book-detail-cover">
                <img src="${book.cover}" alt="${book.title}">
            </div>
            <div class="book-detail-info">
                <h2 class="book-detail-title">${book.title}</h2>
                <div class="book-detail-author">${book.author}</div>

                <div class="book-detail-meta">
                    <div class="book-meta-item">
                        <i class="fas fa-tag"></i>
                        <span>${getCategoryName(book.category)}</span>
                    </div>
                    <div class="book-meta-item">
                        <i class="fas fa-book"></i>
                        <span>${book.pages}页</span>
                    </div>
                </div>

                <p class="book-detail-desc">${book.description}</p>

                <div class="book-detail-reading-info">
                    <h3><i class="fas fa-book-reader"></i> 阅读状态</h3>
                    <div class="reading-status ${statusClass}">${statusText}</div>

                    <div class="reading-dates-container">
                        <div class="reading-date">
                            <h4><i class="fas fa-play-circle"></i> 开始时间</h4>
                            <p>${book.startDate || '尚未开始'}</p>
                        </div>
                        ${book.endDate ? `
                        <div class="reading-date">
                            <h4><i class="fas fa-flag-checkered"></i> 结束时间</h4>
                            <p>${book.endDate}</p>
                        </div>
                        ` : ''}
                        ${book.status === 'reading' ? `` : ''}
                    </div>
                </div>

                <div class="book-detail-notes">
                    <h3><i class="fas fa-pencil-alt"></i> 我的读书笔记</h3>
                    <p>${book.notes}</p>
                </div>

                <div class="book-detail-actions">
                    <a href="${book.onlineLink}" class="btn" target="_blank">
                        <i class="fas fa-book-open"></i> 在线阅读
                    </a>
                    <a href="${book.downloadLink}" class="btn btn-outline" download>
                        <i class="fas fa-download"></i> 下载PDF
                    </a>
                    <a href="#" class="btn btn-outline" id="closeDetailBtn">
                        <i class="fas fa-times"></i> 关闭
                    </a>
                </div>
            </div>
        `;

    // 显示模态框
    document.getElementById('bookModal').style.display = 'block';

    // 添加关闭事件
    document.getElementById('closeDetailBtn').addEventListener('click', function (e) {
        e.preventDefault();
        closeBookDetail();
    });
}

// 关闭书籍详情
function closeBookDetail() {
    document.getElementById('bookModal').style.display = 'none';
}

// 初始渲染
renderBooks(booksData);

// 搜索功能
const searchInput = document.getElementById('bookSearch');
searchInput.addEventListener('input', function () {
    const searchTerm = this.value.toLowerCase();
    const filteredBooks = booksData.filter(book =>
        book.title.toLowerCase().includes(searchTerm) ||
        book.author.toLowerCase().includes(searchTerm) ||
        book.description.toLowerCase().includes(searchTerm) ||
        getCategoryName(book.category).toLowerCase().includes(searchTerm)
    );
    renderBooks(filteredBooks);
});

// 渲染时间轴
function renderTimeline() {
    const container = document.getElementById('timelineContainer');
    container.innerHTML = '';

    // 筛选出有开始时间的书籍并按开始时间排序
    const booksWithDates = booksData
        .filter(book => book.startDate)
        .sort((a, b) => new Date(b.startDate) - new Date(a.startDate));

    if (booksWithDates.length === 0) {
        container.innerHTML = '<div class="no-results" style="text-align:center; padding:40px; color:var(--text-color);">没有找到阅读记录</div>';
        return;
    }

    booksWithDates.forEach((book, index) => {
        const timelineItem = document.createElement('div');
        timelineItem.className = 'timeline-item';

        const statusText = getStatusText(book.status);
        const statusClass = `status-${book.status}`;

        timelineItem.innerHTML = `
                <div class="timeline-date">${book.startDate}</div>
                <div class="timeline-content">
                    <div class="timeline-cover">
                        <img src="${book.cover}" alt="${book.title}">
                    </div>
                    <div class="timeline-details">
                        <div class="book-category">${getCategoryName(book.category)}</div>
                        <h3 class="timeline-title">${book.title}</h3>
                        <div class="reading-status ${statusClass}" style="display:inline-block; margin-bottom:15px;">${statusText}</div>
                  
                    </div>
                </div>
            `;
        container.appendChild(timelineItem);
    });
}

renderTimeline();

// 分类筛选
const filterButtons = document.querySelectorAll('.filter-btn');
filterButtons.forEach(button => {
    button.addEventListener('click', function () {
        // 移除所有按钮的active类
        filterButtons.forEach(btn => btn.classList.remove('active'));
        // 给当前点击的按钮添加active类
        this.classList.add('active');

        const category = this.getAttribute('data-category');
        if (category === 'all') {
            renderBooks(booksData);
        } else {
            const filteredBooks = booksData.filter(book => book.category === category);
            renderBooks(filteredBooks);
        }
    });
});


// 关闭模态框事件
document.getElementById('closeModal').addEventListener('click', closeBookDetail);
window.addEventListener('click', function (e) {
    if (e.target === document.getElementById('bookModal')) {
        closeBookDetail();
    }
});

// 推荐书籍的事件处理
document.querySelectorAll('.books-grid .btn').forEach(btn => {
    btn.addEventListener('click', function (e) {
        e.preventDefault();
        const bookId = this.getAttribute('data-book');
        showBookDetail(bookId);
    });
});

