# 海力士交易记录与走势预测系统 (SK Hynix Trend Predictor)

这是一个专为海力士（SK Hynix）股票交易数据设计的可视化仪表盘与走势智能预测系统。项目采用纯前端技术构建（HTML + Vanilla CSS + Vanilla JS），无需任何后端服务器即可运行，并且支持通过 GitHub API 进行多端云同步，非常适合直接部署在 **GitHub Pages (github.io)**。

## 🌟 主要功能

1. **交易数据仪表盘**：
   - 自动生成总记录天数、平均卖空比、外资流入占比统计。
   - 使用 Chart.js 生成“卖空比与外资比例走势折线图”以及“走势分布扇形图”。
   - 提供表格展示所有历史数据记录（支持按日期快速搜索与单条删除）。

2. **走势智能预测**：
   - 用户输入当前的个人、外资、机构资金净流向（正/负）与卖空比。
   - 系统将通过算法计算与历史数据的相似度（分类匹配 + 卖空比距离公式）。
   - 列出所有相似度较高（≥50%）的历史交易日，并重点对比**这些历史日期的次日（第二天）走势**。
   - 整合加权概率，计算出第二天最有可能的走势并给出置信度。

3. **记录录入与发布**：
   - 方便地录入当天的日期、外资比例、个人/外资/机构资金流向、卖空比和实际走势。
   - 录入后数据立即加入预测池中。

4. **GitHub 云端同步**：
   - 配置您的 GitHub 用户名、仓库和 Personal Access Token（只需要 contents 的写入权限）。
   - 开启后，网页会自动从您的 GitHub 仓库拉取 `data.json` 并合并。
   - 每次新增或删除记录，都会直接提交并推送至该仓库，自动触发 GitHub Pages 重新部署，实现真正的多端无缝使用。

---

## 🚀 部署到 GitHub Pages (github.io) 步骤

要实现随时随地访问，只需将此文件夹上传至 GitHub 并开启 Pages：

### 第一步：在 GitHub 上新建仓库
1. 登录您的 GitHub 账号。
2. 点击右上角的 **New repository**。
3. 填写仓库名称（例如 `sk-hynix-predictor`），建议设置为 **Public**（公开）或 **Private**（私有均可，GitHub Pages 现已支持私有库 Pages）。
4. 不要勾选 "Add a README file"，点击 **Create repository**。

### 第二步：推送代码至 GitHub
在本地该文件夹的命令行（如 Git Bash 或 PowerShell）下，依次运行以下命令：
```bash
# 初始化 Git 仓库
git init

# 将当前目录下所有文件添加到暂存区
git add .

# 提交至本地仓库
git commit -m "Initial commit of Hynix predictor"

# 关联远程仓库 (替换 <username> 和 <repo> 为你自己的)
git branch -M main
git remote add origin https://github.com/<username>/sk-hynix-predictor.git

# 推送代码
git push -u origin main
```

### 第三步：开启 GitHub Pages
1. 打开您的 GitHub 仓库页面，点击顶部的 **Settings** 选项卡。
2. 在左侧菜单中找到 **Pages** 并点击。
3. 在 **Build and deployment -> Source** 中选择 `Deploy from a branch`。
4. 在 **Branch** 下拉菜单中选择 `main` 分支，文件夹选择 `/ (root)`，点击右侧的 **Save** 按钮。
5. 等待 1~2 分钟，页面上方会出现您的专属访问链接，例如：`https://<your-username>.github.io/sk-hynix-predictor/`。

---

## 🔑 配置多端同步 (GitHub Sync)

要实现在任何设备（包括手机或 iPad）上录入新数据并保存，您需要在网站上配置同步参数：

1. **获取 GitHub 个人访问令牌 (Personal Access Token - PAT)**：
   - 访问 GitHub 并进入 **Settings -> Developer settings -> Personal access tokens -> Fine-grained tokens**。
   - 点击 **Generate new token**。
   - 令牌名称命名为 `hynix-sync-token`，在 **Repository access** 中选择 `Only select repositories` 并指定您创建的预测仓库。
   - 在 **Permissions -> Repository permissions** 下，将 **Contents** 设为 **Read and write**。
   - 点击 **Generate token** 并复制该令牌（如 `github_pat_xxxx`）。

2. **在网页端进行配置**：
   - 打开您的 github.io 页面或本地 `index.html`。
   - 点击左侧/顶部导航的 **系统设置**。
   - 填写您的 GitHub 用户名、仓库名称（如 `sk-hynix-predictor`）、分支名称（默认为 `main`）以及刚生成的 Token。
   - 点击 **测试连接**，提示成功后点击 **保存配置 & 立即同步**。

配置完成后，左下角的连接状态会变为绿色的 **已连接云端**。之后在任何地方新增或删除记录，数据都会永久安全地同步在您的 GitHub 仓库里！
