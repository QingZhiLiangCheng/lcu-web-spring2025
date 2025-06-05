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
        publisher: "商务出版社",
        year: 2024,
        status: "completed",
        startDate: "2025-03-12",
        endDate: "2023-03-21",
        notes: "",
        onlineLink: "../accessories/book/康熙的红票：全球化中的清朝.pdf",
        downloadLink: "../accessories/book/康熙的红票：全球化中的清朝.pdf"
    },
    {
        id: 2,
        title: "CSAPP - 深入理解计算机系统",
        author: "Randal E. Bryant, David R. O'Hallaron",
        category: "computer",
        cover: "../accessories/img/csapp.png",
        description: "计算机神书hhh",
        pages: 1080,
        publisher: "机械工业出版社",
        year: 2016,
        rating: 4.9,
        status: "paused",
        notes: "",
        onlineLink: "",
        downloadLink: ""
    },
    {
        id: 3,
        title: "你当像鸟飞往你的山",
        author: "Tara Westover",
        category: "literature",
        cover: "../accessories/img/bird.png",
        description: "人们只看到我的与众不同：一个十七岁前从未踏入教室的大山女孩，却戴上一顶学历的高帽，熠熠生辉。只有我知道自己的真面目：我来自一个极少有人能想象的家庭。我的童年由垃圾场的废铜烂铁铸成，那里没有读书声，只有起重机的轰鸣。不上学，不就医，是父亲要我们坚持的忠诚与真理。父亲不允许我们拥有自己的声音，我们的意志是他眼中的恶魔。哈佛大学，剑桥大学，哲学硕士，历史博士……我知道，像我这样从垃圾堆里爬出来的无知女孩，能取得如今的成就，应当感激涕零才对。但我丝毫提不起热情。我曾怯懦、崩溃、自我怀疑，内心里有什么东西腐烂了，恶臭熏天。直到我逃离大山，打开另一个世界。那是教育给我的新世界，那是我生命的无限可能。",
        pages: 388,
        publisher: "南海出版公司",
        year: 2019,
        status: "completed",
        startDate: "2024-11-22",
        endDate: "2024-12-14",
        notes: "",
        onlineLink: "../accessories/book/你当像鸟飞往你的山 (塔拉·韦斯特弗（Tara Westover）) (Z-Library) 2.epub",
        downloadLink: "../accessories/book/你当像鸟飞往你的山 (塔拉·韦斯特弗（Tara Westover）) (Z-Library) 2.epub"
    },
    {
        id: 4,
        title: "",
        author: "Tara Westover",
        category: "literature",
        cover: "../accessories/img/bird.png",
        description: "人们只看到我的与众不同：一个十七岁前从未踏入教室的大山女孩，却戴上一顶学历的高帽，熠熠生辉。只有我知道自己的真面目：我来自一个极少有人能想象的家庭。我的童年由垃圾场的废铜烂铁铸成，那里没有读书声，只有起重机的轰鸣。不上学，不就医，是父亲要我们坚持的忠诚与真理。父亲不允许我们拥有自己的声音，我们的意志是他眼中的恶魔。哈佛大学，剑桥大学，哲学硕士，历史博士……我知道，像我这样从垃圾堆里爬出来的无知女孩，能取得如今的成就，应当感激涕零才对。但我丝毫提不起热情。我曾怯懦、崩溃、自我怀疑，内心里有什么东西腐烂了，恶臭熏天。直到我逃离大山，打开另一个世界。那是教育给我的新世界，那是我生命的无限可能。",
        pages: 388,
        publisher: "南海出版公司",
        year: 2019,
        status: "completed",
        startDate: "2024-11-22",
        endDate: "2024-12-14",
        notes: "",
        onlineLink: "../accessories/book/你当像鸟飞往你的山 (塔拉·韦斯特弗（Tara Westover）) (Z-Library) 2.epub",
        downloadLink: "../accessories/book/你当像鸟飞往你的山 (塔拉·韦斯特弗（Tara Westover）) (Z-Library) 2.epub"
    }
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
                    <div class="book-meta-item">
                        <i class="fas fa-calendar-alt"></i>
                        <span>出版年份: ${book.year}</span>
                    </div>
                    <div class="book-meta-item">
                        <i class="fas fa-building"></i>
                        <span>出版社: ${book.publisher}</span>
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
