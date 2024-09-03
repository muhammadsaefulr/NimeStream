import { Home, CalendarRange } from "lucide-react";
import { Link } from "react-router-dom";

const Sidebar = () => {
  const iconMap = {
    CalendarRange: CalendarRange,
    Home: Home,
  };

  interface MenuItem {
    key: number;
    icon: keyof typeof iconMap;
    title: string;
    link: string;
  }

  const dataSidebar: MenuItem[] = [
    { key: 1, icon: "Home", title: "Home", link: "/" },
    {
      key: 2,
      icon: "CalendarRange",
      title: "Ongoing",
      link: "/ongoing/page/0",
    },
  ];

  return (
    <div className="z-50 dark: bg-slate-700 light:bg-gray-200 min-h-full w-64">
      <div className="flex justify-center py-6">
        <div className="mx-3 flex">
          <div className="w-10">
            <img src="/icon.png" />
          </div>
          <p className="mx-2 mt-1 bg-gradient-to-r from-green-300 to-white text-transparent bg-clip-text tracking-tighter text-2xl font-semibold">
            NimeStream
          </p>
        </div>
      </div>
      <ul className="menu text-base-content gap-y-2">
        {dataSidebar.map((data, keyId) => {
          const IconComponent = iconMap[data.icon];
          return (
            <li
              key={keyId}
              className="flex gap-x-4 hover:border-l-8 border-green-500 rounded-lg"
            >
              <Link to={{ pathname: data.link }}>
                <IconComponent />
                <p className="text-md font-medium">{data.title}</p>
              </Link>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default Sidebar;
