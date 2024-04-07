const SideNav = require('@/app/ui/dashboard/sidenav');

function Layout({ children }) {
  return (
    React.createElement("div", { className: "flex h-screen flex-col md:flex-row md:overflow-hidden" },
      React.createElement("div", { className: "w-full flex-none md:w-64" },
        React.createElement(SideNav, null)
      ),
      React.createElement("div", { className: "flex-grow p-6 md:overflow-y-auto md:p-12" }, children)
    )
  );
}

module.exports = Layout;
