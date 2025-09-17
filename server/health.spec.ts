import { afterAll, beforeAll, describe, expect, it } from "vitest";
import http from "http";
import { createServer } from "./index";

let srv: http.Server;
let port: number;

beforeAll(async () => {
  const app = createServer();
  await new Promise<void>((resolve) => {
    srv = app.listen(0, () => resolve());
  });
  const address = srv.address();
  if (typeof address === "object" && address && "port" in address) {
    port = address.port as number;
  } else {
    throw new Error("Failed to get server port");
  }
});

afterAll(async () => {
  await new Promise<void>((resolve) => srv.close(() => resolve()));
});

describe("health endpoint", () => {
  it("returns ok", async () => {
    const res = await fetch(`http://127.0.0.1:${port}/health`);
    expect(res.status).toBe(200);
    const body = await res.json();
    expect(body).toEqual({ status: "ok" });
  });
});
