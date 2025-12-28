export interface Service {
  id: string;
  name: string;
  description: string;
  url: string;
  isComingSoon?: boolean;
}

export const services: Service[] = [
  {
    id: "service-1",
    name: "Future Service 1",
    description: "革新的なアイデアを形にするための、最初の実験プロジェクト。",
    url: "#",
    isComingSoon: true,
  },
  {
    id: "service-2",
    name: "Future Service 2",
    description: "生活を少しだけ便利にする、シンプルなユーティリティツール。",
    url: "#",
    isComingSoon: true,
  },
  {
    id: "service-3",
    name: "Future Service 3",
    description: "まだ誰も見たことのない、新しい価値の創造。",
    url: "#",
    isComingSoon: true,
  }
];
