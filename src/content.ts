// ============================================================================
// 全站文案集中管理：改这里即可全局生效
// 除姓名外，其余均为占位假数据，正式使用前请替换为你的真实信息
// ============================================================================

export const profile = {
  name: "唐仲麟",
  nameEn: "Tang Zhonglin",
  role: "某某专业 · 硕士研究生",
  school: "某某大学",
  schoolEn: "Example University",
  degree: "硕士研究生",
  major: "某某专业",
  location: "某市",
  tagline: "这里填写一句个人定位语（占位）。",
};

export const nav = [
  { id: "about", label: "关于我" },
  { id: "education", label: "教育背景" },
  { id: "skills", label: "核心技能" },
  { id: "projects", label: "项目实践" },
  { id: "gallery", label: "影像" },
];

export const about = {
  intro: [
    "你好，我是唐仲麟，一名硕士研究生。这里是我的个人简历网站，用于展示学习经历、研究方向与联系方式。（本段为占位文案，可替换为真实自我介绍。）",
    "以下内容均为示例占位，正式使用前请替换为你的真实信息。",
  ],
  facts: [
    { icon: "school", label: "就读院校", value: "某某大学" },
    { icon: "degree", label: "学历", value: "硕士研究生" },
    { icon: "flask", label: "专业方向", value: "某某专业" },
    { icon: "pin", label: "所在城市", value: "某市" },
  ],
};

export const education = {
  period: "20XX — 20XX", // 占位：替换为真实年份
  school: "某某大学",
  degree: "硕士研究生 · 某某专业方向",
  items: [
    "这里填写研究方向或主修课程（占位）",
    "这里填写在校经历或科研项目（占位）",
  ],
};

export type Skill = {
  icon: "flask" | "flame" | "microscope" | "atom" | "shield" | "trend";
  title: string;
  desc: string;
};

export const skills: Skill[] = [
  { icon: "flask", title: "专业技能一", desc: "这里填写技能描述（占位）" },
  { icon: "flame", title: "专业技能二", desc: "这里填写技能描述（占位）" },
  { icon: "microscope", title: "专业技能三", desc: "这里填写技能描述（占位）" },
  { icon: "atom", title: "专业技能四", desc: "这里填写技能描述（占位）" },
  { icon: "shield", title: "专业技能五", desc: "这里填写技能描述（占位）" },
  { icon: "trend", title: "专业技能六", desc: "这里填写技能描述（占位）" },
];

export type Project = {
  title: string;
  tag: string;
  desc: string;
  tags: string[];
};

export const projects: Project[] = [
  {
    title: "项目一（占位）",
    tag: "示例",
    desc: "这里填写项目描述（占位）。",
    tags: ["标签一", "标签二"],
  },
  {
    title: "项目二（占位）",
    tag: "示例",
    desc: "这里填写项目描述（占位）。",
    tags: ["标签一", "标签二"],
  },
  {
    title: "项目三（占位）",
    tag: "示例",
    desc: "这里填写项目描述（占位）。",
    tags: ["标签一", "标签二"],
  },
];

export const contact = {
  email: "example@example.com", // 占位：替换为真实邮箱
  phone: "138-0000-0000", // 占位：替换为真实电话
  phoneRaw: "13800000000",
  wechat: "xxxxxx", // 占位：替换为真实微信号
  location: "某市",
  note: "这里填写一句结束语（占位）。",
};

export type GalleryItem = {
  image: string;
  label: string;
  link: string;
};

export const gallery: GalleryItem[] = [
  { image: "https://picsum.photos/id/1015/900/1200", label: "Canyon", link: "#" },
  { image: "https://picsum.photos/id/1018/900/1200", label: "Ridgeline", link: "#" },
  { image: "https://picsum.photos/id/1039/900/1200", label: "Falls", link: "#" },
  { image: "https://picsum.photos/id/1043/900/1200", label: "Harbour", link: "#" },
  { image: "https://picsum.photos/id/1044/900/1200", label: "Skyline", link: "#" },
];

export const footer = {
  slogan: "这里填写一句签名（占位）",
};
