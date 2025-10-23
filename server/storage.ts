import { type Donation, type InsertDonation } from "@shared/schema";
import { randomUUID } from "crypto";

export interface IStorage {
  getDonation(id: string): Promise<Donation | undefined>;
  createDonation(donation: InsertDonation): Promise<Donation>;
  getAllDonations(): Promise<Donation[]>;
}

export class MemStorage implements IStorage {
  private donations: Map<string, Donation>;

  constructor() {
    this.donations = new Map();
  }

  async getDonation(id: string): Promise<Donation | undefined> {
    return this.donations.get(id);
  }

  async createDonation(insertDonation: InsertDonation): Promise<Donation> {
    const id = randomUUID();
    const donation: Donation = { 
      ...insertDonation,
      message: insertDonation.message ?? null,
      stripePaymentIntentId: insertDonation.stripePaymentIntentId ?? null,
      id,
      createdAt: new Date()
    };
    this.donations.set(id, donation);
    return donation;
  }

  async getAllDonations(): Promise<Donation[]> {
    return Array.from(this.donations.values());
  }
}

export const storage = new MemStorage();
