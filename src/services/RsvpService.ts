import { Player, RsvpEntry } from "../models/Player";
import { RsvpStatus, VALID_RSVP_STATUSES } from "../models/RsvpStatus";

/**
 * Service for managing RSVP entries for players.
 *
 * The `RsvpService` class provides methods to add or update RSVP entries,
 * retrieve confirmed attendees, and get RSVP counts categorized by their statuses.
 *
 * @remarks
 * - RSVP statuses must be valid and are checked against a predefined list.
 * - The service uses a `Map` to store RSVP entries, keyed by player IDs.
 *
 * @example
 * ```typescript
 * const rsvpService = new RsvpService();
 * rsvpService.addOrUpdateRsvp(player, "Yes");
 * const attendees = rsvpService.getConfirmedAttendees();
 * const counts = rsvpService.getCounts();
 * ```
 */
export class RsvpService {
  private rsvps: Map<string, RsvpEntry> = new Map();

  /**
   * Adds or updates an RSVP entry for a player with the specified status.
   *
   * @param player - The player for whom the RSVP is being added or updated.
   * @param status - The RSVP status to set for the player. Must be one of the valid RSVP statuses.
   * @throws {Error} If the provided RSVP status is invalid.
   */
  addOrUpdateRsvp(player: Player, status: RsvpStatus): void {
    if (!VALID_RSVP_STATUSES.includes(status)) {
      throw new Error(`Invalid RSVP status: ${status}`);
    }
    const entry: RsvpEntry = { player, status };
    this.rsvps.set(player.id, entry);
  }

  /**
   * Retrieves a list of players who have confirmed their attendance.
   *
   * This method filters the RSVP entries to include only those with a status of "Yes"
   * and maps them to their corresponding player objects.
   *
   * @returns {Player[]} An array of players who have confirmed their attendance.
   */
  getConfirmedAttendees(): Player[] {
    return Array.from(this.rsvps.values())
      .filter((entry) => entry.status === "Yes")
      .map((entry) => entry.player);
  }

  /**
   * Retrieves the RSVP counts categorized by their statuses.
   *
   * @returns An object containing the following properties:
   * - `total`: The total number of RSVP entries.
   * - `confirmed`: The number of RSVP entries with a status of "Yes".
   * - `declined`: The number of RSVP entries with a status of "No".
   * - `maybe`: The number of RSVP entries with any other status.
   */
  getCounts(): {
    total: number;
    confirmed: number;
    declined: number;
    maybe: number;
  } {
    let confirmed = 0, declined = 0, maybe = 0;
    for (const entry of this.rsvps.values()) {
      if (entry.status === "Yes") confirmed++;
      else if (entry.status === "No") declined++;
      else maybe++;
    }
    return {
      total: this.rsvps.size,
      confirmed,
      declined,
      maybe
    };
  }
}
