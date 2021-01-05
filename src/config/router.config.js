export const routesConfig = [
  {
    "id": "1",
    "icon": "dashboard",
    "name": "仪表盘",
    "route": "/dashboard"
  },
  {
    "id": "2",
    "breadcrumbParentId": "1",
    "name": "用户列表",
    "icon": "user",
    "route": "/user"
  },
  {
    "id": "21",
    "menuParentId": "-1",
    "breadcrumbParentId": "2",
    "name": "用户详情",
    "route": "/user/:id"
  }
]
