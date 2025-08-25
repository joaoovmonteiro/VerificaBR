// Using simple in-memory storage for this validation platform
// No persistent data storage needed for validation operations

export interface IStorage {
  // No persistent storage needed for validation operations
  // All validations are stateless
}

export class MemStorage implements IStorage {
  constructor() {
    // No storage required for validation operations
  }
}

export const storage = new MemStorage();
