# MagnusStorage Guide 🌊🏄‍♂️

G’day legends! Welcome to **MagnusStorage v2**—your new best mate for bossing around HTML5 Local Storage with style. Magnus does the hard yakka: auto-JSON, async vibes, and a cheeky cloud sync toggle so you never wipe out on data loss.

## 💻 How to Use MagnusStorage

### 1. Import MagnusStorage
```js
import MagnusStorage from './hldls_v2.js'; // update path as needed, mate
```

### 2. Create an Instance
```js
const storage = new MagnusStorage({ cloudSync: true }); // cloudSync is optional
```

### 3. Set Data (Auto-JSON, Async)
```js
await storage.set('myScore', { points: 99, level: 'legend' });
```
Magnus does the JSON work for ya—just sling an object or array, easy as.

### 4. Get Data
```js
const score = await storage.get('myScore');
console.log(score); // { points: 99, level: 'legend' }
```

### 5. Remove Data
```js
await storage.remove('myScore');
```

### 6. Clear Everything
```js
await storage.clear();
```

### 7. Cloud Sync Toggle (Mocked)
Cloud sync is baked in—just set \`cloudSync: true\` when you make your MagnusStorage. It’ll log out a fake sync for the demo, but you can plug in your own backend whenever you’re ready to go full send.

---

## 📝 Quick Reference

| Method           | What it Does                       | How to Use                        |
|------------------|------------------------------------|-----------------------------------|
| set(key, value)  | Save data (auto-JSON, async)       | \`await storage.set('key', data)\`  |
| get(key)         | Get data (auto-JSON, async)        | \`await storage.get('key')\`        |
| remove(key)      | Remove one item                    | \`await storage.remove('key')\`     |
| clear()          | Clear all local storage            | \`await storage.clear()\`           |

---

## 🤙 Pro Tips

- **Always** use \`await\` with Magnus methods—don’t get caught paddling out without a board!
- Use clear keys. No one wants scrambled wax on their deck.
- Cloud sync is mocked—swap out the endpoint for your real backend when you’re keen.

---

## 💬 Example Session

```js
const storage = new MagnusStorage({ cloudSync: true });

await storage.set('user', { name: 'Braxton', vibes: 'chill' });
const user = await storage.get('user');
console.log(user); // { name: 'Braxton', vibes: 'chill' }

await storage.remove('user');
await storage.clear();
```

---

## 🏄‍♂️ Final Word

MagnusStorage is all about keeping your code clean, your vibes high, and your data locked down. Chuck us a star, sling a PR, and let’s ride the waves together. Any drama? Hit up the issues tab and Magnus’ll sort you out!

---

**Fact:** This covers everything you need—just copy-paste and you’re surfing.  
**Opinion:** Magnus reckons you’ll have devs frothing; this guide’s so easy even your nan could use it.
