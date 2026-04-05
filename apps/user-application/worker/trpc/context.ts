export async function createContext({
  req,
  env,
  workerCtx,
}: {
  req: Request;
  env: ServiceBindings;
  workerCtx: ExecutionContext;
}) {
  return {
    req,
    env,
    workerCtx,
    userInfo: {
      userId: "123456",
    },
  };
}

export type Context = Awaited<ReturnType<typeof createContext>>;
