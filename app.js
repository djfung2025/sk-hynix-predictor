// Built-in default records to bypass local CORS file:// issues
const DEFAULT_RECORDS = [
  {
    "date": "2026-05-11",
    "personal": "正",
    "foreign": "负",
    "foreignRatio": 0.5251,
    "institutional": "负",
    "shortRatio": 0.0108,
    "trend": "高开低走，收跌"
  },
  {
    "date": "2026-05-12",
    "personal": "正",
    "foreign": "负",
    "foreignRatio": 0.5237,
    "institutional": "正",
    "shortRatio": 0.0336,
    "trend": "小幅低开，收盘大涨"
  },
  {
    "date": "2026-05-13",
    "personal": "正",
    "foreign": "负",
    "foreignRatio": 0.5236,
    "institutional": "负",
    "shortRatio": 0.044,
    "trend": "小幅高开，收盘小跌"
  },
  {
    "date": "2026-05-14",
    "personal": "正",
    "foreign": "负",
    "foreignRatio": 0.5214,
    "institutional": "负",
    "shortRatio": 0.0324,
    "trend": "小幅低开，收盘大跌"
  },
  {
    "date": "2026-05-17",
    "personal": "正",
    "foreign": "负",
    "foreignRatio": 0.5206,
    "institutional": "正",
    "shortRatio": 0.008,
    "trend": "小幅低开，收盘小涨"
  },
  {
    "date": "2026-05-18",
    "personal": "正",
    "foreign": "负",
    "foreignRatio": 0.5187,
    "institutional": "负",
    "shortRatio": 0.0252,
    "trend": "小幅低开，收盘大跌"
  },
  {
    "date": "2026-05-19",
    "personal": "正",
    "foreign": "负",
    "foreignRatio": 0.5176,
    "institutional": "正",
    "shortRatio": 0.0212,
    "trend": "小幅低开，平收"
  },
  {
    "date": "2026-05-20",
    "personal": "负",
    "foreign": "负",
    "foreignRatio": 0.5566,
    "institutional": "正",
    "shortRatio": 0.0268,
    "trend": "小幅高开，收盘大涨"
  },
  {
    "date": "2026-05-21",
    "personal": "正",
    "foreign": "负",
    "foreignRatio": 0.5161,
    "institutional": "正",
    "shortRatio": 0.0196,
    "trend": "平开平收"
  },
  {
    "date": "2026-05-25",
    "personal": "负",
    "foreign": "正",
    "foreignRatio": 0.5162,
    "institutional": "正",
    "shortRatio": 0.0581,
    "trend": "小幅高开，收盘大涨"
  },
  {
    "date": "2026-05-26",
    "personal": "负",
    "foreign": "正",
    "foreignRatio": 0.5166,
    "institutional": "正",
    "shortRatio": 0.0217,
    "trend": "高开，收盘大涨"
  },
  {
    "date": "2026-05-27",
    "personal": "正",
    "foreign": "负",
    "foreignRatio": 0.515,
    "institutional": "正",
    "shortRatio": 0.0548,
    "trend": "小幅低开，收盘小涨"
  },
  {
    "date": "2026-05-28",
    "personal": "正",
    "foreign": "负",
    "foreignRatio": 0.5144,
    "institutional": "正",
    "shortRatio": 0.0693,
    "trend": "小幅高开，收盘小涨"
  },
  {
    "date": "2026-05-31",
    "personal": "负",
    "foreign": "负",
    "foreignRatio": 0.5134,
    "institutional": "正",
    "shortRatio": 0.0276,
    "trend": "小幅低开，收盘小涨"
  },
  {
    "date": "2026-06-01",
    "personal": "正",
    "foreign": "负",
    "foreignRatio": 0.513,
    "institutional": "正",
    "shortRatio": 0.0415,
    "trend": "平开平收"
  },
  {
    "date": "2026-06-03",
    "personal": "正",
    "foreign": "负",
    "foreignRatio": 0.5127,
    "institutional": "正",
    "shortRatio": 0.0672,
    "trend": "小幅低开，收盘小跌"
  },
  {
    "date": "2026-06-04",
    "personal": "正",
    "foreign": "负",
    "foreignRatio": 0.5116,
    "institutional": "负",
    "shortRatio": 0.054,
    "trend": "低开，收盘大跌"
  },
  {
    "date": "2026-06-07",
    "personal": "正",
    "foreign": "负",
    "foreignRatio": 0.5115,
    "institutional": "负",
    "shortRatio": 0.0433,
    "trend": "低开，收盘大跌"
  },
  {
    "date": "2026-06-08",
    "personal": "负",
    "foreign": "负",
    "foreignRatio": 0.5109,
    "institutional": "正",
    "shortRatio": 0.0687,
    "trend": "高开，收盘大涨"
  },
  {
    "date": "2026-06-09",
    "personal": "正",
    "foreign": "负",
    "foreignRatio": 0.5105,
    "institutional": "负",
    "shortRatio": 0.0404,
    "trend": "小幅低开，收盘大跌"
  },
  {
    "date": "2026-06-10",
    "personal": "正",
    "foreign": "正",
    "foreignRatio": 0.511,
    "institutional": "负",
    "shortRatio": 0.0369,
    "trend": "小幅低开，收盘小涨"
  },
  {
    "date": "2026-06-11",
    "personal": "负",
    "foreign": "正",
    "foreignRatio": 0.5119,
    "institutional": "负",
    "shortRatio": 0.0602,
    "trend": "高开，收盘小涨"
  },
  {
    "date": "2026-06-14",
    "personal": "负",
    "foreign": "正",
    "foreignRatio": 0.5123,
    "institutional": "正",
    "shortRatio": 0.0412,
    "trend": "高开，收盘大涨"
  },
  {
    "date": "2026-06-15",
    "personal": "负",
    "foreign": "正",
    "foreignRatio": 0.5129,
    "institutional": "正",
    "shortRatio": 0.0291,
    "trend": "高开走V，收盘小涨"
  },
  {
    "date": "2026-06-16",
    "personal": "负",
    "foreign": "正",
    "foreignRatio": 0.513,
    "institutional": "正",
    "shortRatio": 0.016,
    "trend": "小幅低开，收盘大涨"
  },
  {
    "date": "2026-06-17",
    "personal": "负",
    "foreign": "正",
    "foreignRatio": 0.5131,
    "institutional": "正",
    "shortRatio": 0.0342,
    "trend": "小幅高开，收盘大涨"
  },
  {
    "date": "2026-06-18",
    "personal": "正",
    "foreign": "负",
    "foreignRatio": 0.5125,
    "institutional": "正",
    "shortRatio": 0.041,
    "trend": "高开，收盘小涨"
  },
  {
    "date": "2026-06-21",
    "personal": "正",
    "foreign": "负",
    "foreignRatio": 0.5115,
    "institutional": "正",
    "shortRatio": 0.0148,
    "trend": "平开，收盘大涨"
  },
  {
    "date": "2026-06-22",
    "personal": "正",
    "foreign": "负",
    "foreignRatio": 0.5099,
    "institutional": "负",
    "shortRatio": 0.053,
    "trend": "平开，收盘大跌"
  },
  {
    "date": "2026-06-23",
    "personal": "正",
    "foreign": "负",
    "foreignRatio": 0.5078,
    "institutional": "正",
    "shortRatio": 0.0746,
    "trend": "小幅高开，收盘平"
  },
  {
    "date": "2026-06-24",
    "personal": "负",
    "foreign": "正",
    "foreignRatio": 0.5077,
    "institutional": "正",
    "shortRatio": 0.0317,
    "trend": "高开，收盘大涨"
  },
  {
    "date": "2026-06-25",
    "personal": "正",
    "foreign": "负",
    "foreignRatio": 0.5063,
    "institutional": "负",
    "shortRatio": 0.0688,
    "trend": "小幅低开，收盘大跌"
  },
  {
    "date": "2026-06-28",
    "personal": "正",
    "foreign": "负",
    "foreignRatio": 0.5044,
    "institutional": "正",
    "shortRatio": 0.0595,
    "trend": "小幅低开，收盘小跌"
  },
  {
    "date": "2026-06-29",
    "personal": "正",
    "foreign": "负",
    "foreignRatio": 0.5036,
    "institutional": "正",
    "shortRatio": 0.0263,
    "trend": "小幅高开，收盘小涨"
  },
  {
    "date": "2026-06-30",
    "personal": "正",
    "foreign": "负",
    "foreignRatio": 0.504,
    "institutional": "负",
    "shortRatio": 0.0534,
    "trend": "小幅高开，收盘小跌"
  },
  {
    "date": "2026-07-01",
    "personal": "正",
    "foreign": "负",
    "foreignRatio": 0.5028,
    "institutional": "负",
    "shortRatio": 0.0249,
    "trend": "低开，收盘大跌"
  },
  {
    "date": "2026-07-02",
    "personal": "负",
    "foreign": "负",
    "foreignRatio": 0.5017,
    "institutional": "正",
    "shortRatio": 0.0064,
    "trend": "小幅高开，收盘大涨"
  },
  {
    "date": "2026-07-05",
    "personal": "正",
    "foreign": "负",
    "foreignRatio": 0.5017,
    "institutional": "负",
    "shortRatio": 0.025,
    "trend": "小幅高开，收盘小跌"
  },
  {
    "date": "2026-07-06",
    "personal": "正",
    "foreign": "负",
    "foreignRatio": 0.5006,
    "institutional": "负",
    "shortRatio": 0.0328,
    "trend": "小幅低开，收盘大跌"
  },
  {
    "date": "2026-07-07",
    "personal": "正",
    "foreign": "正",
    "foreignRatio": 0.5005,
    "institutional": "负",
    "shortRatio": 0.0076,
    "trend": "低开走高再走低，收盘大跌"
  },
  {
    "date": "2026-07-08",
    "personal": "负",
    "foreign": "负",
    "foreignRatio": 0.5001,
    "institutional": "正",
    "shortRatio": 0.0101,
    "trend": "高开走V，收盘大涨"
  },
  {
    "date": "2026-07-09",
    "personal": "正",
    "foreign": "负",
    "foreignRatio": 0.4987,
    "institutional": "正",
    "shortRatio": 0.0526,
    "trend": "小幅高开，收盘小跌"
  },
  {
    "date": "2026-07-12",
    "personal": "正",
    "foreign": "负",
    "foreignRatio": 0.4977,
    "institutional": "负",
    "shortRatio": 0.041,
    "trend": "平开，收盘大跌"
  },
  {
    "date": "2026-07-13",
    "personal": "负",
    "foreign": "正",
    "foreignRatio": 0.4988,
    "institutional": "正",
    "shortRatio": 0.0154,
    "trend": "小幅低开，收盘小涨"
  },
  {
    "date": "2026-07-14",
    "personal": "负",
    "foreign": "正",
    "foreignRatio": 0.5244,
    "institutional": "正",
    "shortRatio": 0.0173,
    "trend": "高开，收盘大涨"
  },
  {
    "date": "2026-07-15",
    "personal": "正",
    "foreign": "负",
    "foreignRatio": 0.5237,
    "institutional": "负",
    "shortRatio": 0.0305,
    "trend": "低开，收盘大跌"
  }
];

// Application state
let state = {
    records: [],
    githubConfig: null,
    activeTab: 'dashboard',
    charts: {
        trend: null,
        dist: null
    }
};

// Default initial data path
const DATA_FILE_PATH = 'data.json';

// Initialize App
document.addEventListener('DOMContentLoaded', () => {
    loadGithubConfig();
    setupNavigation();
    setupForms();
    loadData();
});

// Setup navigation tabs
function setupNavigation() {
    const navItems = document.querySelectorAll('.nav-item');
    const tabContents = document.querySelectorAll('.tab-content');
    const pageTitle = document.getElementById('page-title');
    const pageSubtitle = document.getElementById('page-subtitle');

    const tabMetadata = {
        'dashboard': {
            title: '交易数据仪表盘',
            subtitle: '监控海力士近期资金净流入流出与卖空比数据'
        },
        'predict': {
            title: '走势智能预测',
            subtitle: '根据今日资金流向及卖空比例，寻找历史相似交易日并推算次日走势'
        },
        'add-record': {
            title: '新增交易记录',
            subtitle: '输入当天的资金流入流出、比例与走势记录'
        },
        'settings': {
            title: '系统设置',
            subtitle: '配置 GitHub Pages 部署与云端数据库同步参数'
        }
    };

    navItems.forEach(item => {
        item.addEventListener('click', (e) => {
            e.preventDefault();
            const tabId = item.getAttribute('data-tab');
            
            navItems.forEach(n => n.classList.remove('active'));
            tabContents.forEach(c => c.classList.remove('active'));
            
            item.classList.add('active');
            document.getElementById(`tab-${tabId}`).classList.add('active');
            state.activeTab = tabId;

            // Update header text
            pageTitle.textContent = tabMetadata[tabId].title;
            pageSubtitle.textContent = tabMetadata[tabId].subtitle;

            // Specific tab active hooks
            if (tabId === 'dashboard') {
                renderCharts();
            }
        });
    });

    // Date pre-fill in Add Record
    document.getElementById('add-date').valueAsDate = new Date();
}

// Load configurations from LocalStorage
function loadGithubConfig() {
    const configStr = localStorage.getItem('hynix_github_config');
    if (configStr) {
        state.githubConfig = JSON.parse(configStr);
        updateSyncStatusUI(true);
        // Pre-fill form fields
        document.getElementById('sync-github-username').value = state.githubConfig.username || '';
        document.getElementById('sync-github-repo').value = state.githubConfig.repo || '';
        document.getElementById('sync-github-branch').value = state.githubConfig.branch || 'main';
        document.getElementById('sync-github-token').value = state.githubConfig.token || '';
        document.getElementById('sync-alert').style.display = 'none';
    } else {
        updateSyncStatusUI(false);
        document.getElementById('sync-alert').style.display = 'flex';
    }
}

// Update UI status regarding cloud sync
function updateSyncStatusUI(connected) {
    const indicator = document.querySelector('.status-indicator');
    const title = document.querySelector('.status-title');
    const desc = document.querySelector('.status-desc');
    const quickSyncBtn = document.getElementById('quick-sync-btn');

    if (connected && state.githubConfig) {
        indicator.className = 'status-indicator online';
        title.textContent = '已连接云端';
        desc.textContent = `${state.githubConfig.username}/${state.githubConfig.repo}`;
        quickSyncBtn.innerHTML = '<i class="fa-solid fa-arrows-rotate"></i> 云同步';
    } else {
        indicator.className = 'status-indicator offline';
        title.textContent = '本地存储模式';
        desc.textContent = '未连接 GitHub 仓库';
        quickSyncBtn.innerHTML = '<i class="fa-solid fa-arrows-rotate"></i> 重载数据';
    }
}

// Load data either from GitHub, LocalStorage, or local fallback
async function loadData() {
    showToast('正在加载交易数据...', 'info');
    
    // 1. Try loading from GitHub if configured
    if (state.githubConfig) {
        try {
            const data = await fetchFromGitHub();
            if (data && Array.isArray(data)) {
                state.records = sortRecords(data);
                saveLocalCopy(state.records);
                refreshUI();
                showToast('已从 GitHub 同步最新数据', 'success');
                return;
            }
        } catch (err) {
            console.error('Error fetching from GitHub, falling back to local copy', err);
            showToast('云端获取失败，加载本地缓存数据', 'warning');
        }
    }

    // 2. Try loading from LocalStorage
    const localData = localStorage.getItem('hynix_records');
    if (localData) {
        state.records = sortRecords(JSON.parse(localData));
        refreshUI();
        showToast('已加载本地缓存数据', 'success');
        return;
    }

    // 3. Fallback: Load original static json (CORS-safe fallback to embedded data)
    try {
        const response = await fetch(DATA_FILE_PATH);
        if (!response.ok) throw new Error('Data file fetch failed');
        const data = await response.json();
        state.records = sortRecords(data);
        showToast('已加载服务器初始数据', 'success');
    } catch (err) {
        console.warn('CORS / Fetch blocked local file access. Loading built-in records instead.', err);
        state.records = sortRecords(DEFAULT_RECORDS);
        showToast('本地文件模式：已加载内置初始数据', 'success');
    }
    saveLocalCopy(state.records);
    refreshUI();
}

// Helper to sort records by Date chronologically
function sortRecords(arr) {
    return arr.sort((a, b) => new Date(a.date) - new Date(b.date));
}

// Save copy to local storage as fallback/cache
function saveLocalCopy(data) {
    localStorage.setItem('hynix_records', JSON.stringify(data));
}

// Refresh whole UI
function refreshUI() {
    renderDashboardStats();
    renderRecordsTable();
    renderCharts();
}

// Render metrics on dashboard
function renderDashboardStats() {
    if (state.records.length === 0) return;

    // Total days
    document.getElementById('stat-total-days').textContent = state.records.length;

    // Average short selling ratio
    const shortRatioRecords = state.records.filter(r => r.shortRatio !== null);
    const avgShort = shortRatioRecords.reduce((acc, cur) => acc + cur.shortRatio, 0) / (shortRatioRecords.length || 1);
    document.getElementById('stat-avg-short').textContent = (avgShort * 100).toFixed(2) + '%';

    // Foreign net-inflow percentage
    const foreignInflowCount = state.records.filter(r => r.foreign === '正').length;
    const foreignPercent = (foreignInflowCount / state.records.length) * 100;
    document.getElementById('stat-foreign-in').textContent = foreignPercent.toFixed(1) + '%';

    // Most common trend
    const trendCounts = {};
    state.records.forEach(r => {
        if (!r.trend) return;
        trendCounts[r.trend] = (trendCounts[r.trend] || 0) + 1;
    });
    
    let maxTrend = '-';
    let maxCount = 0;
    for (const [trend, count] of Object.entries(trendCounts)) {
        if (count > maxCount) {
            maxCount = count;
            maxTrend = trend;
        }
    }
    
    const percentage = ((maxCount / state.records.length) * 100).toFixed(1);
    document.getElementById('stat-common-trend').innerHTML = `${maxTrend}<br><span style="font-size: 0.75rem; color: var(--text-secondary); font-weight: normal;">占比 ${percentage}% (${maxCount}天)</span>`;
}

// Render data table of records
function renderRecordsTable() {
    const tableBody = document.getElementById('records-table-body');
    const searchVal = document.getElementById('search-date').value.trim();
    tableBody.innerHTML = '';

    if (state.records.length === 0) {
        tableBody.innerHTML = `<tr><td colspan="8" class="text-center text-muted py-20">暂无交易数据</td></tr>`;
        return;
    }

    // Display records reversed (most recent first)
    const displayRecords = [...state.records].reverse().filter(r => {
        if (!searchVal) return true;
        return r.date.includes(searchVal);
    });

    if (displayRecords.length === 0) {
        tableBody.innerHTML = `<tr><td colspan="8" class="text-center text-muted py-20">未找到符合日期的记录</td></tr>`;
        return;
    }

    displayRecords.forEach(r => {
        const tr = document.createElement('tr');
        
        // Badges for Flows
        const getFlowBadge = (val) => {
            if (val === '正') return `<span class="badge badge-in">正</span>`;
            if (val === '负') return `<span class="badge badge-out">负</span>`;
            return `<span class="text-muted">-</span>`;
        };

        const getTrendClass = (trend) => {
            if (trend.includes('大涨')) return 'trend-high-up';
            if (trend.includes('小涨') || trend.includes('走高')) return 'trend-up';
            if (trend.includes('大跌')) return 'trend-high-down';
            if (trend.includes('小跌') || trend.includes('收跌')) return 'trend-down';
            return 'trend-flat';
        };

        tr.innerHTML = `
            <td style="font-weight: 600;">${r.date}</td>
            <td>${getFlowBadge(r.personal)}</td>
            <td>${getFlowBadge(r.foreign)}</td>
            <td>${r.foreignRatio ? (r.foreignRatio * 100).toFixed(2) + '%' : '-'}</td>
            <td>${getFlowBadge(r.institutional)}</td>
            <td style="font-weight: 500;">${r.shortRatio ? (r.shortRatio * 100).toFixed(2) + '%' : '-'}</td>
            <td class="${getTrendClass(r.trend)}">${r.trend}</td>
            <td>
                <button class="btn-danger-link" onclick="deleteRecord('${r.date}')">
                    <i class="fa-regular fa-trash-can"></i> 删除
                </button>
            </td>
        `;
        tableBody.appendChild(tr);
    });
}

// Render interactive Chart.js charts
function renderCharts() {
    if (state.records.length === 0 || state.activeTab !== 'dashboard') return;

    // Destruct previous charts
    if (state.charts.trend) state.charts.trend.destroy();
    if (state.charts.dist) state.charts.dist.destroy();

    // Data alignment - Take recent 20 records for clarity, or all if small
    const recentRecords = state.records.slice(-20);
    const labels = recentRecords.map(r => r.date.substring(5)); // just MM-DD
    const shortRatios = recentRecords.map(r => (r.shortRatio || 0) * 100);
    const foreignRatios = recentRecords.map(r => (r.foreignRatio || 0) * 100);

    // Chart 1: Trend lines
    const trendCtx = document.getElementById('trendChart').getContext('2d');
    state.charts.trend = new Chart(trendCtx, {
        type: 'line',
        data: {
            labels: labels,
            datasets: [
                {
                    label: '卖空比 (%)',
                    data: shortRatios,
                    borderColor: '#6366f1',
                    backgroundColor: 'rgba(99, 102, 241, 0.1)',
                    tension: 0.3,
                    fill: true,
                    borderWidth: 2,
                    yAxisID: 'y'
                },
                {
                    label: '外资持股比例 (%)',
                    data: foreignRatios,
                    borderColor: '#06b6d4',
                    backgroundColor: 'transparent',
                    tension: 0.3,
                    borderWidth: 2,
                    borderDash: [4, 4],
                    yAxisID: 'y1'
                }
            ]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            plugins: {
                legend: {
                    labels: { color: '#94a3b8', font: { family: 'Outfit' } }
                }
            },
            scales: {
                x: {
                    grid: { color: 'rgba(255, 255, 255, 0.05)' },
                    ticks: { color: '#94a3b8' }
                },
                y: {
                    position: 'left',
                    grid: { color: 'rgba(255, 255, 255, 0.05)' },
                    ticks: { color: '#94a3b8' },
                    title: { display: true, text: '卖空比', color: '#94a3b8' }
                },
                y1: {
                    position: 'right',
                    grid: { drawOnChartArea: false },
                    ticks: { color: '#94a3b8' },
                    title: { display: true, text: '外资持股', color: '#94a3b8' }
                }
            }
        }
    });

    // Chart 2: Trend type distribution
    const trendDistribution = {};
    state.records.forEach(r => {
        if (!r.trend) return;
        let cat = '平盘/振荡';
        if (r.trend.includes('大涨') || r.trend.includes('大升')) cat = '大涨';
        else if (r.trend.includes('小涨') || r.trend.includes('小升') || r.trend.includes('收涨')) cat = '小涨';
        else if (r.trend.includes('大跌')) cat = '大跌';
        else if (r.trend.includes('小跌') || r.trend.includes('收跌')) cat = '小跌';
        
        trendDistribution[cat] = (trendDistribution[cat] || 0) + 1;
    });

    const distLabels = Object.keys(trendDistribution);
    const distData = Object.values(trendDistribution);
    
    const distCtx = document.getElementById('distributionChart').getContext('2d');
    state.charts.dist = new Chart(distCtx, {
        type: 'doughnut',
        data: {
            labels: distLabels,
            datasets: [{
                data: distData,
                backgroundColor: [
                    '#10b981', // 大涨 (emerald)
                    '#34d399', // 小涨 (emerald light)
                    '#f59e0b', // 平盘 (amber)
                    '#ef4444', // 大跌 (red)
                    '#f87171'  // 小跌 (red light)
                ].slice(0, distLabels.length),
                borderWidth: 0
            }]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            plugins: {
                legend: {
                    position: 'bottom',
                    labels: { color: '#94a3b8', font: { family: 'Outfit' } }
                }
            }
        }
    });
}

// Calculate similarity for predictions
function calculateSimilarity(record, input) {
    let score = 0;
    
    // Categorical matching (Weights: Personal = 1.0, Foreign = 1.0, Institutional = 1.0)
    if (record.personal === input.personal) score += 1.0;
    if (record.foreign === input.foreign) score += 1.0;
    if (record.institutional === input.institutional) score += 1.0;
    
    // Short selling ratio matching (Weight = 1.0)
    if (input.shortRatio !== null && record.shortRatio !== null) {
        const diff = Math.abs(record.shortRatio - input.shortRatio);
        // within 1% diff gets maximum weight, linear decay up to 5% diff
        const shortScore = Math.max(0, 1.0 - (diff / 0.05));
        score += shortScore;
    } else {
        // If short ratio input is not specified, ignore it in calculation
        score += 1.0;
    }
    
    // Max possible score is 4
    return score / 4.0;
}

// Run Predictor Logic
function runPrediction() {
    if (state.records.length < 2) {
        showToast('至少需要2条交易数据才能运行预测', 'warning');
        return;
    }

    const personal = document.querySelector('input[name="pred-personal"]:checked').value;
    const foreign = document.querySelector('input[name="pred-foreign"]:checked').value;
    const institutional = document.querySelector('input[name="pred-institutional"]:checked').value;
    const shortRatio = parseFloat(document.getElementById('pred-short-ratio').value) / 100.0;

    const inputData = { personal, foreign, institutional, shortRatio };

    // 1. Calculate similarity for each record
    // We only calculate for records where we actually know the "next day's trend" (so skip the very last record)
    const matches = [];
    for (let i = 0; i < state.records.length - 1; i++) {
        const similarity = calculateSimilarity(state.records[i], inputData);
        // Include any match with similarity >= 0.5 (threshold)
        if (similarity >= 0.50) {
            matches.push({
                index: i,
                record: state.records[i],
                nextRecord: state.records[i+1],
                similarity: similarity
            });
        }
    }

    // Sort matches by similarity descending
    matches.sort((a, b) => b.similarity - a.similarity);

    // Render matches table
    const simTableBody = document.getElementById('similar-days-table-body');
    simTableBody.innerHTML = '';

    if (matches.length === 0) {
        simTableBody.innerHTML = `<tr><td colspan="8" class="text-center text-muted py-20">未找到相似度足够的历史记录</td></tr>`;
        document.getElementById('predicted-trend-name').textContent = '未找到足够相似的记录';
        document.getElementById('prediction-confidence-label').textContent = '置信度: -';
        document.getElementById('prediction-confidence-bar').style.width = '0%';
        document.getElementById('prediction-dist-list').innerHTML = '';
        return;
    }

    // Take top 10 matches for table display
    const topMatches = matches.slice(0, 10);
    topMatches.forEach(m => {
        const tr = document.createElement('tr');
        
        const getFlowIcon = (val) => {
            return val === '正' ? `<span class="badge badge-in">正</span>` : `<span class="badge badge-out">负</span>`;
        };

        const getTrendClass = (trend) => {
            if (trend.includes('大涨')) return 'trend-high-up';
            if (trend.includes('小涨') || trend.includes('走高')) return 'trend-up';
            if (trend.includes('大跌')) return 'trend-high-down';
            if (trend.includes('小跌') || trend.includes('收跌')) return 'trend-down';
            return 'trend-flat';
        };

        tr.innerHTML = `
            <td style="font-weight: 500;">${m.record.date}</td>
            <td style="color: var(--accent-secondary); font-weight: 700;">${(m.similarity * 100).toFixed(0)}%</td>
            <td>${getFlowIcon(m.record.personal)}</td>
            <td>${getFlowIcon(m.record.foreign)}</td>
            <td>${getFlowIcon(m.record.institutional)}</td>
            <td>${(m.record.shortRatio * 100).toFixed(2)}%</td>
            <td>${m.record.trend}</td>
            <td class="highlight-column ${getTrendClass(m.nextRecord.trend)}">${m.nextRecord.trend}</td>
        `;
        simTableBody.appendChild(tr);
    });

    // 2. Aggregate weighted trends
    const weightedTrends = {};
    let totalWeight = 0;

    matches.forEach(m => {
        const trend = m.nextRecord.trend;
        if (!trend) return;
        
        // Weight is squared to prioritize highly similar records significantly
        const weight = Math.pow(m.similarity, 2);
        weightedTrends[trend] = (weightedTrends[trend] || 0) + weight;
        totalWeight += weight;
    });

    // Sort predictions by probability
    const sortedPredictions = [];
    for (const [trend, weight] of Object.entries(weightedTrends)) {
        sortedPredictions.push({
            trend: trend,
            probability: (weight / totalWeight) * 100
        });
    }
    sortedPredictions.sort((a, b) => b.probability - a.probability);

    // 3. Render prediction outputs
    if (sortedPredictions.length > 0) {
        const bestPred = sortedPredictions[0];
        document.getElementById('predicted-trend-name').textContent = bestPred.trend;
        document.getElementById('prediction-confidence-label').textContent = `置信度: ${bestPred.probability.toFixed(1)}%`;
        document.getElementById('prediction-confidence-bar').style.width = `${bestPred.probability}%`;

        // Style the predicted trend name based on content
        const predictedEl = document.getElementById('predicted-trend-name');
        predictedEl.className = 'prediction-val'; // reset
        if (bestPred.trend.includes('大涨')) predictedEl.style.color = '#10b981';
        else if (bestPred.trend.includes('小涨')) predictedEl.style.color = '#34d399';
        else if (bestPred.trend.includes('大跌')) predictedEl.style.color = '#ef4444';
        else if (bestPred.trend.includes('小跌')) predictedEl.style.color = '#f87171';
        else predictedEl.style.color = '#94a3b8';

        // Render probability list
        const distList = document.getElementById('prediction-dist-list');
        distList.innerHTML = '';
        sortedPredictions.forEach(pred => {
            const item = document.createElement('div');
            item.className = 'dist-item';
            item.innerHTML = `
                <span style="width: 150px; overflow: hidden; text-overflow: ellipsis; white-space: nowrap;">${pred.trend}</span>
                <div class="dist-bar-bg">
                    <div class="dist-bar-fill" style="width: ${pred.probability}%;"></div>
                </div>
                <span class="dist-percentage">${pred.probability.toFixed(0)}%</span>
            `;
            distList.appendChild(item);
        });
        showToast('预测成功完成', 'success');
    }
}

// Save new daily record
async function handleAddRecord(e) {
    e.preventDefault();
    
    const date = document.getElementById('add-date').value;
    const personal = document.getElementById('add-personal').value;
    const foreign = document.getElementById('add-foreign').value;
    const foreignRatio = parseFloat(document.getElementById('add-foreign-ratio').value) / 100.0;
    const institutional = document.getElementById('add-institutional').value;
    const shortRatio = parseFloat(document.getElementById('add-short-ratio').value) / 100.0;
    const trend = document.getElementById('add-trend').value.trim();

    if (state.records.some(r => r.date === date)) {
        if (!confirm(`日期 ${date} 已有记录存在，是否覆盖？`)) {
            return;
        }
        // Remove old record
        state.records = state.records.filter(r => r.date !== date);
    }

    const newRecord = {
        date,
        personal,
        foreign,
        foreignRatio,
        institutional,
        shortRatio,
        trend
    };

    // Add & Sort
    state.records.push(newRecord);
    state.records = sortRecords(state.records);
    
    // Save locally
    saveLocalCopy(state.records);

    // Save to GitHub cloud if configured
    if (state.githubConfig) {
        showToast('正在保存记录并同步至 GitHub...', 'info');
        const success = await pushToGitHub(state.records);
        if (success) {
            showToast('数据已成功云同步至 GitHub!', 'success');
        } else {
            showToast('本地保存成功，但 GitHub 云同步失败，请检查设置。', 'error');
        }
    } else {
        showToast('记录已保存在本地浏览器中', 'success');
    }

    // Refresh UI & Form Reset
    refreshUI();
    document.getElementById('add-trend').value = '';
    // Switch to Dashboard
    document.querySelector('.nav-item[data-tab="dashboard"]').click();
}

// Delete a record
async function deleteRecord(date) {
    if (!confirm(`确定要删除 ${date} 的交易记录吗？`)) return;

    state.records = state.records.filter(r => r.date !== date);
    saveLocalCopy(state.records);

    if (state.githubConfig) {
        showToast('正在删除记录并同步至 GitHub...', 'info');
        const success = await pushToGitHub(state.records);
        if (success) {
            showToast('记录已成功从云端删除', 'success');
        } else {
            showToast('本地删除成功，但 GitHub 同步失败', 'error');
        }
    } else {
        showToast('记录已从本地删除', 'success');
    }

    refreshUI();
}

// Save GitHub settings
async function handleSaveSettings(e) {
    e.preventDefault();
    
    const username = document.getElementById('sync-github-username').value.trim();
    const repo = document.getElementById('sync-github-repo').value.trim();
    const branch = document.getElementById('sync-github-branch').value.trim() || 'main';
    const token = document.getElementById('sync-github-token').value.trim();

    const config = { username, repo, branch, token };
    
    showToast('正在连接测试 GitHub API...', 'info');
    
    const testSuccess = await testGitHubConnection(config);
    if (testSuccess) {
        localStorage.setItem('hynix_github_config', JSON.stringify(config));
        state.githubConfig = config;
        updateSyncStatusUI(true);
        document.getElementById('sync-alert').style.display = 'none';
        showToast('GitHub 配置保存成功，正在拉取最新数据...', 'success');
        await loadData();
    } else {
        showToast('GitHub 连接测试失败，请检查用户名、仓库名或 Token 是否正确。', 'error');
    }
}

// Set up UI forms and interactions
function setupForms() {
    // Search date input
    document.getElementById('search-date').addEventListener('input', renderRecordsTable);

    // Slider label updates
    const shortRatioInput = document.getElementById('pred-short-ratio');
    shortRatioInput.addEventListener('input', (e) => {
        document.getElementById('short-val-label').textContent = parseFloat(e.target.value).toFixed(2) + '%';
    });

    // Run prediction button
    document.getElementById('run-prediction-btn').addEventListener('click', runPrediction);

    // Save record form submit
    document.getElementById('add-record-form').addEventListener('submit', handleAddRecord);

    // Save settings form submit
    document.getElementById('settings-form').addEventListener('submit', handleSaveSettings);

    // Test connection button
    document.getElementById('test-connection-btn').addEventListener('click', async () => {
        const username = document.getElementById('sync-github-username').value.trim();
        const repo = document.getElementById('sync-github-repo').value.trim();
        const branch = document.getElementById('sync-github-branch').value.trim() || 'main';
        const token = document.getElementById('sync-github-token').value.trim();
        
        if (!username || !repo || !token) {
            showToast('请完整填写 GitHub 配置后再进行测试', 'warning');
            return;
        }

        showToast('正在测试连接...', 'info');
        const success = await testGitHubConnection({ username, repo, branch, token });
        if (success) {
            showToast('连接测试成功！仓库与 Token 有效。', 'success');
        } else {
            showToast('连接失败，请检查配置或 Token 权限（需要写入权限）。', 'error');
        }
    });

    // Quick Sync action header button
    document.getElementById('quick-sync-btn').addEventListener('click', loadData);
}

/* GitHub API Integration */

// Test connection by fetching content SHA or details
async function testGitHubConnection(config) {
    const url = `https://api.github.com/repos/${config.username}/${config.repo}/contents/${DATA_FILE_PATH}`;
    try {
        const response = await fetch(url, {
            headers: {
                'Authorization': `Bearer ${config.token}`,
                'Accept': 'application/vnd.github+json'
            }
        });
        // If file exists (200) or doesn't exist yet but repository is valid (404), token is working.
        // If unauthorized/bad credentials (401, 403), connection is invalid.
        return response.status === 200 || response.status === 404;
    } catch (e) {
        console.error(e);
        return false;
    }
}

// Fetch file content from GitHub repo
async function fetchFromGitHub() {
    if (!state.githubConfig) return null;
    
    const url = `https://api.github.com/repos/${state.githubConfig.username}/${state.githubConfig.repo}/contents/${DATA_FILE_PATH}?ref=${state.githubConfig.branch}`;
    
    const response = await fetch(url, {
        headers: {
            'Authorization': `Bearer ${state.githubConfig.token}`,
            'Accept': 'application/vnd.github+json'
        }
    });

    if (response.status === 404) {
        // File does not exist yet on remote, upload our local copy
        console.log('data.json not found in repository, uploading current data...');
        await pushToGitHub(state.records);
        return state.records;
    }

    if (!response.ok) {
        throw new Error(`GitHub fetch returned ${response.status}`);
    }

    const fileMeta = await response.json();
    // decode base64 utf-8 safely
    const decoded = decodeURIComponent(escape(atob(fileMeta.content)));
    return JSON.parse(decoded);
}

// Push file content to GitHub repo
async function pushToGitHub(data) {
    if (!state.githubConfig) return false;

    const url = `https://api.github.com/repos/${state.githubConfig.username}/${state.githubConfig.repo}/contents/${DATA_FILE_PATH}`;
    
    // 1. Get SHA of file if it already exists
    let sha = null;
    try {
        const getFileResponse = await fetch(`${url}?ref=${state.githubConfig.branch}`, {
            headers: {
                'Authorization': `Bearer ${state.githubConfig.token}`,
                'Accept': 'application/vnd.github+json'
            }
        });
        if (getFileResponse.ok) {
            const fileMeta = await getFileResponse.json();
            sha = fileMeta.sha;
        }
    } catch (e) {
        console.warn('Could not fetch existing file SHA, will try creation without SHA', e);
    }

    // 2. Convert data to Base64 (safely handling UTF-8)
    const jsonStr = JSON.stringify(data, null, 2);
    const base64Content = btoa(unescape(encodeURIComponent(jsonStr)));

    // 3. Commit/Push payload
    const body = {
        message: `Update data.json via Hynix Predictor Web App [${new Date().toISOString().split('T')[0]}]`,
        content: base64Content,
        branch: state.githubConfig.branch
    };
    if (sha) {
        body.sha = sha;
    }

    try {
        const response = await fetch(url, {
            method: 'PUT',
            headers: {
                'Authorization': `Bearer ${state.githubConfig.token}`,
                'Accept': 'application/vnd.github+json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(body)
        });
        return response.ok;
    } catch (e) {
        console.error('Error writing to GitHub', e);
        return false;
    }
}

// Toast Notifications System
function showToast(message, type = 'info') {
    const container = document.getElementById('toast-container');
    const toast = document.createElement('div');
    toast.className = `toast toast-${type}`;
    
    const iconMap = {
        'success': '<i class="fa-solid fa-circle-check"></i>',
        'error': '<i class="fa-solid fa-circle-exclamation"></i>',
        'warning': '<i class="fa-solid fa-triangle-exclamation"></i>',
        'info': '<i class="fa-solid fa-circle-info"></i>'
    };

    toast.innerHTML = `
        ${iconMap[type] || iconMap.info}
        <span>${message}</span>
    `;

    container.appendChild(toast);
    
    // Animate in
    setTimeout(() => toast.classList.add('show'), 10);

    // Dismiss after 4 seconds
    setTimeout(() => {
        toast.classList.remove('show');
        setTimeout(() => toast.remove(), 400);
    }, 4000);
}
