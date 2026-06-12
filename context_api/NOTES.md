# 📘 React Context API — How It Works in This Project

---

## 🔑 What is Context API?

Context API is React's built-in way to **share data between components** without passing props through every level (called "prop drilling").

Think of it like a **global store** that any component in the tree can read from.

---

## 🗂️ Project File Roles

| File | Role |
|---|---|
| `usercontext.js` | Creates the context (the "container") |
| `usercontexprovider.jsx` | Holds the shared state and provides it to the app |
| `App.jsx` | Wraps the app inside the Provider |
| `login.jsx` | WRITES to the context (sets name & password) |
| `profile.jsx` | READS from the context (displays name) |

---

## 🔄 Flow — Step by Step

```
usercontext.js
   ↓  creates the context
usercontexprovider.jsx
   ↓  holds state (name, password) + provides them globally
App.jsx
   ↓  wraps <Login> and <Profile> inside the Provider
Login.jsx  ──────────────────────────────────────────┐
   reads context → calls setname() / setpassword()   │
                                                      ↓
Profile.jsx                                     Context Store
   reads context → shows user.name              { name, setname,
                                                  password, setpassword }
```

---

## 📄 File-by-File Explanation

### 1. `usercontext.js` — Create the Context

```js
export const Usercontext = React.createContext(null);
```
- `createContext()` creates an empty "box" to hold shared data.
- We export it so other files can use it.

---

### 2. `usercontexprovider.jsx` — The Provider (State Owner)

```jsx
const [name, setname] = useState("")
const [password, setpassword] = useState("")

<Usercontext.Provider value={{ name, setname, password, setpassword }}>
    {children}
</Usercontext.Provider>
```
- Owns the **actual state** (`name`, `password`).
- Wraps `{children}` — meaning every child component gets access to the value.
- `value={{...}}` is what gets shared globally.

---

### 3. `App.jsx` — Wrap App in Provider

```jsx
<Usercontextprovider>
  <Login />
  <Profile />
</Usercontextprovider>
```
- By wrapping here, **both Login and Profile** can access the context.
- Without this wrapper, `useContext` would return `null`.

---

### 4. `login.jsx` — Consumer (Writer)

```jsx
const user = useContext(Usercontext)

user.setname(name)       // updates context state
user.setpassword(password)
```
- `useContext(Usercontext)` grabs the shared value from the Provider.
- Calling `user.setname()` updates state **inside the Provider**, which re-renders all consumers.

---

### 5. `profile.jsx` — Consumer (Reader)

```jsx
const user = useContext(Usercontext)

<p>Welcome, {user.name}!</p>
```
- Also uses `useContext` to read the same context.
- When `Login` updates `name`, **Profile automatically re-renders** with the new value.

---

## 💡 Key Concepts

| Concept | Meaning |
|---|---|
| `createContext()` | Creates the context object |
| `<Context.Provider value={...}>` | Provides data to all children |
| `useContext(Context)` | Any child reads the data |
| State in Provider | When state changes, all consumers re-render |

---

## ⚡ Why Not Just Use Props?

Without Context:
```
App → passes name → Login → passes name → SubComponent → passes name → DeepChild ❌ messy
```

With Context:
```
App (Provider holds name)
   └── DeepChild just calls useContext() ✅ clean
```

---

*Created for the `context_api` project — React Context API learning notes.*
