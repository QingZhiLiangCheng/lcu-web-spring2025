let coursesData = [];

// 加载课程数据
async function loadCourses() {
    try {
        const response = await fetch('../accessories/sc/course.json');
        if (!response.ok) throw new Error('网络响应异常');

        coursesData = await response.json();
        renderCourses(coursesData); // 初始渲染
    } catch (error) {
        console.error('加载失败:', error);
        document.getElementById('coursesContainer').innerHTML =
            '<div class="no-results">课程数据加载失败，请检查网络或稍后再试。</div>';
    }
}

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
