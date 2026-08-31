# 唐仲麟 · 个人简历网站

个人宣传网站（模板）。

## 技术栈
- React 19 + Vite 8 + TypeScript
- Tailwind CSS 4
- Framer Motion（动画）
- Lucide React（图标）

## 本地开发
```bash
npm install
npm run dev
```

## 构建
```bash
npm run build   # 产物输出到 dist/
```

## 部署
推送 `main` 分支后，GitHub Actions 会自动构建并部署到 GitHub Pages
（需在仓库 Settings → Pages 中将 Source 设为 **GitHub Actions**）。

所有文案集中在 `src/content.ts`，改这一处即可全局生效。
