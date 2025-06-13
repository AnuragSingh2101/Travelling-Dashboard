import React from "react";
import { dashboardStats, user, allTrips, users} from "../../constants/index";
import Header from "components/header";
import { StatsCard, TripCard } from "components";



// const user = { name: "Anurag Singh" };

// const dashboardStats = {
//   totalUsers: 14261,
//   usersJoined: { currentMonth: 275, lastMonth: 123 },
//   totalTrips: 473,
//   tripsCreated: { currentMonth: 60, lastMonth: 65 },
//   activeUsers: { total: 120, currentMonth: 40, lastMonth: 25 },
// };


//   const allTrips = [{
//       id: 1,
//       name: "Tropical Rewind",
//       imageUrls: ["/assets/images/sample1.jpg"],
//       itinerary: [{ location: "Thailand" }],
//       tags: ["Adventure", "Culture"],
//       travelStyle: "Solo",
//       estimatedPrice: "$1,000",
//     },
//     {
//       id: 2,
//       name: "French Reverie",
//       imageUrls: ["/assets/images/sample2.jpg"],
//       itinerary: [{ location: "Paris" }],
//       tags: ["Relaxation", "Culinary"],
//       travelStyle: "Family",
//       estimatedPrice: "$2,000",
//     },
//     {
//       id: 3,
//       name: "Zen Break",
//       imageUrls: ["/assets/images/sample3.jpg"],
//       itinerary: [{ location: "Japan" }],
//       tags: ["Shopping", "Luxury"],
//       travelStyle: "Couple",
//       estimatedPrice: "$3,000",
//     },
//     {
//       id: 4,
//       name: "Adventure in Westeros",
//       imageUrls: ["/assets/images/sample4.jpg"],
//       itinerary: [{ location: "Croatia" }],
//       tags: ["Historical", "Culture"],
//       travelStyle: "Friends",
//       estimatedPrice: "$4,000",
//     },
// ];


const Dashboard = () => {
  return (
    <main className="dashboard wrapper">
      <Header
        title={`Welcome, ${user?.name ?? "Guest"} 👋`}
        description="Track activity, trends and popular destinations in real time"
      />

      <section className="flex flex-col gap-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full">
          <StatsCard
            headerTitle="Total Users"
            total={dashboardStats.totalUsers}
            currentMonthCount={dashboardStats.usersJoined.currentMonth}
            lastMonthCount={dashboardStats.usersJoined.lastMonth}
          />

          <StatsCard
            headerTitle="Total Trips"
            total={dashboardStats.totalTrips}
            currentMonthCount={dashboardStats.tripsCreated.currentMonth}
            lastMonthCount={dashboardStats.tripsCreated.lastMonth}
          />

          <StatsCard
            headerTitle="Total Active Users"
            total={dashboardStats.activeUsers.total}
            currentMonthCount={dashboardStats.activeUsers.currentMonth}
            lastMonthCount={dashboardStats.activeUsers.lastMonth}
          />
        </div>
      </section>

      <section className="container">
        <h1 className="text-xl font-semibold text-dark-100">Created Trips</h1>

        <div className="trip-grid">
          {allTrips.map((trip) => (
            <TripCard
              key={trip.id}
              id={trip.id.toString()}
              name={trip.name!}
              imageUrl={trip.imageUrls[0]}
              location={trip.itinerary?.[0]?.location ?? ""}
              tags={[trip.tags[0], trip.travelStyle]}
              price={trip.estimatedPrice!}
            />
          ))}
        </div>
      </section>
    </main>
  );
};

export default Dashboard;
