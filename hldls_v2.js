/**
 * hldls_v2.js
 * Magnus' next-gen Local Storage toolkit for JS legends.
 * Features: Auto-JSON, async wrappers, cloud sync toggle.
 *
 * HOW TO USE:
 *  const storage = new MagnusStorage({ cloudSync: true });
 *  await storage.set('score', { points: 100, level: 5 });
 *  const score = await storage.get('score');
 *  await storage.remove('score');
 *  await storage.clear();
 */

class MagnusStorage {
  constructor(options = {}) {
    this.cloudSync = !!options.cloudSync;
    this.cloudEndpoint = options.cloudEndpoint || 'https://example.com/api/sync'; // Mock endpoint
  }

  // Auto-JSON and async set
  async set(key, value) {
    try {
      const stringValue = JSON.stringify(value);
      localStorage.setItem(key, stringValue);

      if (this.cloudSync) {
        await this._cloudSync('set', key, value);
      }
    } catch (err) {
      throw new Error(`MagnusStorage: set failed for "${key}" - ${err.message}`);
    }
  }

  // Auto-JSON and async get
  async get(key) {
    try {
      const raw = localStorage.getItem(key);
      if (raw === null) return null;

      const value = JSON.parse(raw);

      if (this.cloudSync) {
        await this._cloudSync('get', key, value);
      }

      return value;
    } catch (err) {
      throw new Error(`MagnusStorage: get failed for "${key}" - ${err.message}`);
    }
  }

  // Remove key async
  async remove(key) {
    try {
      localStorage.removeItem(key);
      if (this.cloudSync) {
        await this._cloudSync('remove', key);
      }
    } catch (err) {
      throw new Error(`MagnusStorage: remove failed for "${key}" - ${err.message}`);
    }
  }

  // Clear all async
  async clear() {
    try {
      localStorage.clear();
      if (this.cloudSync) {
        await this._cloudSync('clear');
      }
    } catch (err) {
      throw new Error(`MagnusStorage: clear failed - ${err.message}`);
    }
  }

  // Mock cloud sync (replace with your cloud logic, mate)
  async _cloudSync(action, key, value) {
    // Surf's up: pretend to sync. Replace with real fetch for Firebase, Supabase, etc.
    return new Promise((resolve) => {
      setTimeout(() => {
        console.log(`[MagnusStorage cloud sync] Action: ${action}, Key: ${key}, Value:`, value);
        resolve();
      }, 300); // Simulate lag, brah
    });
  }
}

// HOW TO USE (quickstart):
// const storage = new MagnusStorage({ cloudSync: true });
// await storage.set('score', { points: 100, level: 5 });
// const score = await storage.get('score');
// await storage.remove('score');
// await storage.clear();

export default MagnusStorage;
