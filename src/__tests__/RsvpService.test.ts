import { describe, it, expect, beforeEach } from "vitest";
import { RsvpService } from "../services/RsvpService";
import { Player } from "../models/Player";

describe("RsvpService", () => {
  let service: RsvpService;
  const player1: Player = { id: "1", name: "Alice" };
  const player2: Player = { id: "2", name: "Bob" };

  beforeEach(() => {
    service = new RsvpService();
  });

  it("should add a new RSVP", () => {
    service.addOrUpdateRsvp(player1, "Yes");
    expect(service.getCounts().total).toBe(1);
    expect(service.getCounts().confirmed).toBe(1);
  });

  it("should update RSVP for the same player", () => {
    service.addOrUpdateRsvp(player1, "Yes");
    service.addOrUpdateRsvp(player1, "No");
    expect(service.getCounts().confirmed).toBe(0);
    expect(service.getCounts().declined).toBe(1);
  });

  it("should count all types correctly", () => {
    service.addOrUpdateRsvp(player1, "Maybe");
    service.addOrUpdateRsvp(player2, "No");
    expect(service.getCounts()).toEqual({
      total: 2,
      confirmed: 0,
      declined: 1,
      maybe: 1
    });
  });

  it("should throw error on invalid RSVP", () => {
    expect(() => service.addOrUpdateRsvp(player1, "Definitely" as any)).toThrow();
  });
});
