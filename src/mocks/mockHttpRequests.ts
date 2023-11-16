console.log("process.env.APP_ENV", process.env.APP_ENV);

export const mockHttpRequests = async () => {
  if (typeof window === "undefined") {
    const { server } = await import("./server");
    server.listen();
  } else {
    const { worker } = await import("./browser");
    await worker.start();
  }
};
