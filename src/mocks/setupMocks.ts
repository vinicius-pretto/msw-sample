export const setupMocks = async () => {
  if (typeof window === "undefined") {
    const { mswServer } = await import("./server");
    mswServer.listen();
  } else {
    const { worker } = await import("./browser");
    return worker.start();
  }
};
