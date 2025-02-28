export default {
    routes: [
      {
        method: "GET",
        path: "/bookings/check-all-data",
        handler: "booking.checkAllData",
        config: {
          auth: false,
        },
      },
      {
        method: "POST",
        path: "/bookings/read-all-data",
        handler: "booking.readAllData",
        config: {
          auth:false,
          policies: [],
          middlewares: [],
        },
      },
    ],
  };
  