 const menus = [
  {
    title: "Dashboard",
    path: "/dashboard",
    subMenu: [], 
  },
  {
    title: "Products",
    path: 
    "/products",
    subMenu: [
      {
        title: "Electronics",
        path: "/products/electronics",
      },
      {
        title: "Clothing",
        path: "/products/clothing",
      },
    ],
  },
  {
    title: "Settings",
    path: "/settings",
    subMenu: [
      {
        title: "Profile",
        path: "/settings/profile",
      },
      {
        title: "Account",
        path: "/settings/account",
      },
    ],
  },
];
export default menus;