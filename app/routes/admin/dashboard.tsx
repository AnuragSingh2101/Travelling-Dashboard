import React from "react";
import Header from "components/header";

const Dashboard = () => {
  const user = { name: "Anurag Singh" };
  return (
    <main className="dashboard wrapper">
      <Header
        title={`Welcome, ${user?.name ?? "Guest"} 👋`}
        description="Track activity, trends and popular destinations in real time"
      />
      DashBoard Page Content
    </main>
  );
};

export default Dashboard;
