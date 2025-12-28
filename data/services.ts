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
    description: "This slot is reserved for a future innovative service.",
    url: "#",
    isComingSoon: true,
  },
  {
    id: "service-2",
    name: "Future Service 2",
    description: "Something amazing will be built here.",
    url: "#",
    isComingSoon: true,
  },
  {
    id: "service-3",
    name: "Future Service 3",
    description: "Currently in the ideation phase.",
    url: "#",
    isComingSoon: true,
  }
];
