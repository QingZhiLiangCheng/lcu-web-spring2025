

let coursesData = [
    {
        "id": 3,
        "name": "高等数学",
        "semester": "大一上",
        "category": "数学基础",
        "description": "学习微积分、级数、微分方程等数学基础，为计算机科学提供数学工具。",
        "url": "course-notes/advanced-math.html"
    },
    {
        "id": 1,
        "name": "C++",
        "semester": " spring2024 完结✅",
        "category": "专业课程",
        "description": "当时学cpp的时候还没有开始用obsidian, 所以没有留笔记，只留了大作业\n      学习期间我用封装继承多态, 函数模版, 虚函数, 抽象类, 运算符重载等实现一个List, LinkedList, ArrayList.\n      我的大作业是用Vue和Cpp写了一个酒店管理系统",
        "url": "https://qingzhiliangcheng.cn/high-language/cpp/cpp/"
    },
    {
        "id": 2,
        "name": "LCU数据结构",
        "semester": "date: 2024.09.20 - 2025.01.06完结✅",
        "category": "专业课程",
        "description": "大二上学期 spring2024\n当时才开始学着用obsidian这个笔记 记得很零散 而且水平有限\n     期末复习的专题整理的还不错\n      我数据结构课程设计小实验写的Unity自动生成迷宫 和 手搓红黑树和优先队列实现赫夫曼编码\n     大作业是用Rust写了一个简单的虚拟货币交易系统 但是最后因为当时水平的原因并没有真正完成",
        "url": "https://qingzhiliangcheng.cn/lcu%20datastructure/lcu%20datastructure/"
    },
    {
        "id": 4,
        "name": "线性代数",
        "semester": "大二上课程 fall2024",
        "category": "数学基础",
        "description": "学习矩阵、向量空间、线性变换等代数概念及其在计算机科学中的应用。",
        "url": "course-notes/linear-algebra.html"
    },
    {
        "id": 5,
        "name": "LCU计算机组成原理",
        "semester": "date: 2024.10.30 - 2025.01.03完结✅",
        "category": "专业课程",
        "description": "大二上课程 fall2024\n      教课的老师讲的很好\n     我当时还跟了哈工大刘宏伟老师的课 但是没有完全跟完(后面来不及了hhh)\n     我整理了跟课的笔记，最后面我总结了考试八个专题 大题都考到了 很骄傲hhh",
        "url": "https://qingzhiliangcheng.cn/lcu%20principles%20of%20computer%20composition/lcu%20principles%20of%20computer%20composition/"
    },
    {
        "id": 7,
        "name": "离散数学",
        "semester": "大二上课程 fall2024",
        "category": "数学基础",
        "description": "",
        "url": "course-notes/computer-org.html"
    },
    {
        "id": 8,
        "name": "LCU数据库",
        "semester": "date: 2024.04.09 - 至今",
        "category": "专业课程",
        "description": " LCU的数据库课程教材用的王珊老师的《数据库系统概论》,lab使用的是SQL Server数据库.\n      我从怎么在自己电脑上安装一个SQL Server数据库环境开始(也可以用实验室的电脑做实验 就不用自己在自己的电脑上装SQL Server环境了 我这里是主张用自己的电脑) 把lab的每一步都整理了下来\n      除此之外 我还整理了一些考试的考点",
        "url": "https://qingzhiliangcheng.cn/database%20systems/lcu%20database%20system/lcu%20database%20system/"
    },
    {
        "id": 8,
        "name": "LCU操作系统",
        "semester": "2024.04.12 - 至今",
        "category": "专业课程",
        "description": "LCU的操作系统课程汤小丹 汤子瀛老师的《计算机操作系统》 我们学校的老师也参与了编著.\n     操作系统课的实验分为三个部分 分别是进程调度实验, 资源管理实验和存储器管理实验。三个实验主要就是用C/C++编写模拟程序\n     个人感觉做着比CMU15445的Project简单很多.\n      我这里整理了一些复习笔记和详细的实验操作流程和一些小坑. \n      除此之外 我还整理了一些考试的考点",
        "url": "https://qingzhiliangcheng.cn/operating%20system/lcu%20operating%20system/lcu%20operating%20system/"
    },
    {
        "id": 8,
        "name": "LCU Web",
        "semester": "大三上课程 spring2025",
        "category": "专业课程",
        "description": "",
        "url": ""
    },
    {
        "id": 8,
        "name": "LCU Java",
        "semester": "大三上课程 spring2025",
        "category": "专业课程",
        "description": "",
        "url": ""
    },
    {
        "id": 8,
        "name": "LCU 算法设计与分析",
        "semester": "大三上课程 spring2025",
        "category": "专业课程",
        "description": "",
        "url": ""
    }
];

// 加载课程数据
/*async function loadCourses() {
    try {
        const response = await fetch('accessories/sc/course.json');
        if (!response.ok) throw new Error('网络响应异常');

        coursesData = await response.json();
        renderCourses(coursesData); // 初始渲染
    } catch (error) {
        console.error('加载失败:', error);
        document.getElementById('coursesContainer').innerHTML =
            '<div class="no-results">课程数据加载失败，请检查网络或稍后再试。</div>';
    }
}*/

renderCourses(coursesData);
// 渲染课程卡片
function renderCourses(coursesList) {
    const container = document.getElementById('coursesContainer');
    container.innerHTML = '';

    if (!coursesList || coursesList.length === 0) {
        container.innerHTML = '<div class="no-results">没有找到匹配的课程</div>';
        return;
    }

    coursesList.forEach(course => {
        const card = document.createElement('div');
        card.className = 'course-card';
        card.innerHTML = `
            <div class="course-header">
                <div class="course-title">
                    <i class="fas fa-book"></i> ${course.name}
                </div>
            </div>
            <div class="course-body">
                <p class="course-desc">${course.description}</p>
                <a href="${course.url}" class="btn" target="_blank">
                    <i class="fas fa-book"></i> 查看课程笔记
                </a>
                <div class="course-meta">
                    <div class="semester"><i class="fas fa-calendar"></i> ${course.semester}</div>
                </div>
            </div>
        `;
        container.appendChild(card);
    });
}

// 搜索功能
function setupSearch() {
    const searchInput = document.getElementById('searchInput');
    if (!searchInput) return;

    searchInput.addEventListener('input', function () {
        const searchTerm = this.value.toLowerCase();
        const filtered = coursesData.filter(course =>
            course.name.toLowerCase().includes(searchTerm) ||
            course.description.toLowerCase().includes(searchTerm)
        );
        renderCourses(filtered);
    });
}

// 分类筛选功能
function setupCategoryFilter() {
    const filterButtons = document.querySelectorAll('.filter-btn');
    if (!filterButtons.length) return;

    filterButtons.forEach(button => {
        button.addEventListener('click', function () {
            filterButtons.forEach(btn => btn.classList.remove('active'));
            this.classList.add('active');

            const category = this.getAttribute('data-category');
            if (category === 'all') {
                renderCourses(coursesData);
            } else {
                const filtered = coursesData.filter(course => course.category === category);
                renderCourses(filtered);
            }
        });
    });
}

// 页面加载完成后初始化
document.addEventListener('DOMContentLoaded', () => {
    loadCourses();       // 加载并渲染数据
    setupSearch();       // 设置搜索事件监听
    setupCategoryFilter(); // 设置分类筛选监听
});
