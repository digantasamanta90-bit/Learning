# Day 20 — React Project Task: Contact Book

**Level:** Intermediate  
**Concepts:** `useState`, controlled forms, two-way binding, props, component architecture, `.map()`, `.filter()`, conditional rendering, lifting state up

---

## What You Are Building

A **Contact Book** app where a user can:

- Add a new contact (name, phone, email, category)
- Search contacts by name or phone number in real time
- Filter contacts by category (Friends, Family, Work, Other)
- View a contact's full details
- Delete a contact
- See a count of total contacts

This is a **frontend-only** project — no API, no backend, no database.

---

## What It Should Look Like

```text
┌───────────────────────────────────────────────────────────────┐
│  📒  Contact Book                           Total: 6 contacts │
└───────────────────────────────────────────────────────────────┘

  [ + Add Contact ]

  🔍 Search...           Filter: [ All ▼ ]

  ┌─────────────────────────────────────────────────────────┐
  │  👤  Rahul Sharma        📱 9876543210    Work    [ 👁 ] [ 🗑 ] │
  ├─────────────────────────────────────────────────────────┤
  │  👤  Priya Mehta         📱 9123456780    Friends [ 👁 ] [ 🗑 ] │
  ├─────────────────────────────────────────────────────────┤
  │  👤  Amit Das            📱 9000011122    Family  [ 👁 ] [ 🗑 ] │
  ├─────────────────────────────────────────────────────────┤
  │  👤  Sneha Roy           📱 8899001122    Work    [ 👁 ] [ 🗑 ] │
  └─────────────────────────────────────────────────────────┘

  ── Detail Panel (shown when 👁 is clicked) ──────────────────
  │  👤 Rahul Sharma                                           │
  │  📱  9876543210                                            │
  │  📧  rahul@company.com                                     │
  │  🏷   Work                                                 │
  │                                            [ Close ]       │
  └────────────────────────────────────────────────────────────┘
```

---

## Component Structure

```text
src/
├── components/
│   ├── Header.jsx
│   ├── AddContactForm.jsx
│   ├── SearchBar.jsx
│   ├── ContactList.jsx
│   ├── ContactItem.jsx
│   └── ContactDetail.jsx
│
├── App.jsx
└── main.jsx
```

**All shared state lives in `App.jsx`.**

---

## Component Breakdown

---

### 1. `App.jsx` — The Brain

This is where all shared state lives.

**State you need:**

```jsx
const [contacts, setContacts]           = useState([]);
const [search, setSearch]               = useState("");
const [filter, setFilter]               = useState("All");
const [selectedContact, setSelectedContact] = useState(null);
const [showForm, setShowForm]           = useState(false);
```

**Functions to define in App.jsx:**

```jsx
// Add a new contact
const addContact = (contact) => { ... }

// Delete a contact by id
const deleteContact = (id) => { ... }

// Set which contact to view in the detail panel
const viewContact = (contact) => { ... }

// Close the detail panel
const closeDetail = () => { ... }
```

**Computed value — derive this from state, don't store it:**

```jsx
const filteredContacts = contacts
  .filter(c => filter === "All" || c.category === filter)
  .filter(c =>
    c.name.toLowerCase().includes(search.toLowerCase()) ||
    c.phone.includes(search)
  );
```

Pass `filteredContacts` (not `contacts`) into `ContactList`.

---

### 2. `Header.jsx` — Title Bar

A stateless component that displays the title and total contact count.

**Props:**

```jsx
<Header title="📒 Contact Book" total={contacts.length} />
```

Display:

```text
📒 Contact Book                    Total: 6 contacts
```

---

### 3. `AddContactForm.jsx` — Add New Contact

This component has its **own local state** for form fields.

**Props it receives:**

```jsx
<AddContactForm onAdd={addContact} onClose={() => setShowForm(false)} />
```

**Local state:**

```jsx
const [name, setName]       = useState("");
const [phone, setPhone]     = useState("");
const [email, setEmail]     = useState("");
const [category, setCategory] = useState("Friends");
```

**Form fields:**
- Text input — full name
- Text input — phone number
- Text input — email address
- Dropdown (`<select>`) — category: Friends, Family, Work, Other

**On submit**, pass this object to `onAdd`:

```jsx
{
  id: Date.now(),
  name: "Rahul Sharma",
  phone: "9876543210",
  email: "rahul@company.com",
  category: "Work"
}
```

**Validation:**
- Name must not be empty
- Phone must be exactly 10 digits (numbers only)
- Email must contain `@` and `.`
- Show inline error messages — no `alert()`

After successful submit: clear all fields and call `onClose()` to hide the form.

---

### 4. `SearchBar.jsx` — Search + Filter

A stateless component that renders the search input and the category filter dropdown.

**Props:**

```jsx
<SearchBar
  search={search}
  filter={filter}
  onSearchChange={setSearch}
  onFilterChange={setFilter}
/>
```

- Search input updates `search` on every keystroke — filtering is live (no submit button)
- Filter dropdown options: All, Friends, Family, Work, Other

---

### 5. `ContactList.jsx` — The List

Receives the **already-filtered** contacts array and renders them.

**Props:**

```jsx
<ContactList
  contacts={filteredContacts}
  onView={viewContact}
  onDelete={deleteContact}
/>
```

- If `contacts` is empty and there is no search/filter active: show `"No contacts yet. Add your first contact!"`
- If `contacts` is empty because of a search/filter: show `"No contacts match your search."`
- Renders one `<ContactItem>` per contact

---

### 6. `ContactItem.jsx` — Single Row

A stateless component that displays one contact row.

**Props:**

```jsx
<ContactItem
  contact={contact}
  onView={onView}
  onDelete={onDelete}
/>
```

Displays:
- 👤 Name
- 📱 Phone number
- Category badge/label
- 👁 View button — calls `onView(contact)`
- 🗑 Delete button — calls `onDelete(contact.id)`

---

### 7. `ContactDetail.jsx` — Detail Panel

A stateless component shown when the user clicks the View button on a contact.

**Props:**

```jsx
<ContactDetail contact={selectedContact} onClose={closeDetail} />
```

Displays all four fields (name, phone, email, category) in a nicely laid-out panel or card.

A "Close" button calls `onClose()`.

**In `App.jsx`, conditionally render this:**

```jsx
{selectedContact && (
  <ContactDetail contact={selectedContact} onClose={closeDetail} />
)}
```

---

## Behaviour Requirements

### Adding a Contact
1. Clicking "+ Add Contact" shows the `AddContactForm`
2. Validation runs on submit — inline errors shown if it fails
3. If validation passes, the contact is added and the form closes
4. The new contact appears in the list immediately

### Viewing a Contact
1. Clicking 👁 on any row sets `selectedContact` to that contact
2. `ContactDetail` panel appears with full information
3. Clicking "Close" sets `selectedContact` back to `null`

### Deleting a Contact
1. Clicking 🗑 removes that contact from the array immediately
2. If the deleted contact was being viewed in the detail panel, close the panel too

### Search (live — no button)
1. As the user types in the search box, the list filters instantly
2. Matches by name (case-insensitive) **or** phone number (partial match)
3. Search and category filter work **together** at the same time

### Category Filter
1. Picking a category shows only contacts in that category
2. Works together with the search input
3. Picking "All" shows every contact (still respects search input)

---

## Rules & Constraints

```text
✅ Must use
  - useState (in App.jsx and AddContactForm.jsx)
  - Controlled inputs — every input has value + onChange
  - e.preventDefault() on form submit
  - Props to pass data and callbacks between components
  - .filter() for search and category filtering
  - .map() to render the contact list
  - Conditional rendering for the form, detail panel, and empty states
  - Inline validation error messages

❌ Do NOT use
  - useEffect
  - useContext / useReducer / useRef
  - React Router
  - Any external library (except React itself)
  - alert() for validation
  - Array index as key — use contact.id
  - Backend or API
```

---

## Data Flow Diagram

```text
App.jsx
│
│  contacts[]       ──────────────────► ContactList.jsx
│  filteredContacts ──────────────────► ContactList.jsx
│  search            ─────────────────► SearchBar.jsx
│  filter            ─────────────────► SearchBar.jsx
│  selectedContact   ─────────────────► ContactDetail.jsx
│  showForm          ─────────────────► AddContactForm.jsx
│
│  addContact()     ──────────────────► AddContactForm.jsx
│  deleteContact()  ──────────────────► ContactList → ContactItem
│  viewContact()    ──────────────────► ContactList → ContactItem
│  closeDetail()    ──────────────────► ContactDetail.jsx
│
└── ContactList.jsx
      └── ContactItem.jsx (one per filtered contact)
            ├── calls onView(contact)   → App sets selectedContact
            └── calls onDelete(id)     → App removes from contacts[]
```

---

## Starter Data (for testing your UI)

Paste this into `App.jsx` while building — delete it once the form works:

```jsx
const [contacts, setContacts] = useState([
  { id: 1, name: "Rahul Sharma",  phone: "9876543210", email: "rahul@work.com",   category: "Work"    },
  { id: 2, name: "Priya Mehta",   phone: "9123456780", email: "priya@gmail.com",  category: "Friends" },
  { id: 3, name: "Amit Das",      phone: "9000011122", email: "amit@family.com",  category: "Family"  },
  { id: 4, name: "Sneha Roy",     phone: "8899001122", email: "sneha@office.com", category: "Work"    },
  { id: 5, name: "Dev Kumar",     phone: "7778889990", email: "dev@gmail.com",    category: "Friends" },
  { id: 6, name: "Nita Ghosh",    phone: "9988776655", email: "nita@home.com",    category: "Family"  },
]);
```

---

## Suggested Build Order

```text
Step 1  → Set up App.jsx with the starter contacts array in useState
Step 2  → Build ContactItem.jsx — display one contact row (hardcoded)
Step 3  → Build ContactList.jsx — render all contacts using .map()
Step 4  → Build Header.jsx with the total count
Step 5  → Wire up deleteContact in App.jsx — make 🗑 button work
Step 6  → Build ContactDetail.jsx (stateless panel)
Step 7  → Wire up viewContact and closeDetail — make 👁 button work
Step 8  → Build SearchBar.jsx with controlled search input
Step 9  → Add the filteredContacts computed value in App.jsx
Step 10 → Add category filter to SearchBar + wire it up
Step 11 → Build AddContactForm.jsx with controlled inputs
Step 12 → Wire up addContact and showForm toggle
Step 13 → Add form validation with inline error messages
Step 14 → Handle all empty states
Step 15 → Make sure deleting a viewed contact also closes the detail panel
```

---

## Completion Checklist

**Component structure**
- [ ] `Header.jsx` — shows title and total contact count via props
- [ ] `AddContactForm.jsx` — has own local `useState` for all 4 fields
- [ ] `SearchBar.jsx` — stateless, all state controlled from App.jsx
- [ ] `ContactList.jsx` — renders filtered list, handles both empty states
- [ ] `ContactItem.jsx` — stateless single row component
- [ ] `ContactDetail.jsx` — stateless detail panel

**State & data flow**
- [ ] All shared state (`contacts`, `search`, `filter`, `selectedContact`, `showForm`) lives in App.jsx
- [ ] `AddContactForm` has its own local state for form fields only
- [ ] `filteredContacts` is computed from state — not stored in state
- [ ] All callbacks passed as props — no child modifies parent state directly

**Form**
- [ ] All 4 inputs are controlled (value + onChange)
- [ ] `e.preventDefault()` on submit
- [ ] Name validation — cannot be empty
- [ ] Phone validation — must be exactly 10 digits
- [ ] Email validation — must contain `@` and `.`
- [ ] All inline errors, no `alert()`
- [ ] Form clears and closes after successful submit

**Core features**
- [ ] Add contact works and updates the list immediately
- [ ] Delete contact works and updates the list immediately
- [ ] Deleting the currently viewed contact also closes the detail panel
- [ ] View button opens the detail panel with correct data
- [ ] Close button hides the detail panel
- [ ] Search filters by name and phone in real time
- [ ] Category filter works
- [ ] Search + filter work together simultaneously
- [ ] `contact.id` used as key (not array index)
- [ ] Total count in header updates on add/delete

**Conditional rendering**
- [ ] Add form shown/hidden based on `showForm` state
- [ ] Detail panel shown only when `selectedContact !== null`
- [ ] Empty state shown when no contacts exist at all
- [ ] Empty state shown when search/filter has no results

---

## Bonus Challenges

Finish the core app completely before attempting these.

### Bonus 1 — Edit a Contact
Add an "Edit" button in the detail panel.
Clicking it pre-fills the `AddContactForm` with the contact's existing data.
Submitting should update that contact in the array — not add a new one.

### Bonus 2 — Persist to localStorage
Save the contacts array to `localStorage` on every change using `useEffect`.
Restore it on first render using a lazy initializer:

```jsx
const [contacts, setContacts] = useState(() => {
  const saved = localStorage.getItem("contacts");
  return saved ? JSON.parse(saved) : [];
});
```

### Bonus 3 — Sort Contacts
Add a sort control in `SearchBar`:
- A–Z by name
- Z–A by name
- Category

### Bonus 4 — Favourite Contacts
Add a "⭐ Favourite" toggle on each contact.
Favourite contacts always appear at the top of the list.
Add a "Favourites only" filter option.

---

## Key Concepts You Are Practising

| Concept | Where It Appears |
|---------|-----------------|
| `useState` with an array | `contacts[]` in App.jsx |
| `useState` with a string | `search`, `filter` in App.jsx |
| `useState` with an object | `selectedContact` in App.jsx |
| `useState` with a boolean | `showForm` in App.jsx |
| `useState` for forms | Local state in AddContactForm |
| Controlled inputs | All 4 fields in AddContactForm |
| `e.preventDefault()` | Form submit |
| Props — data down | App → all child components |
| Props — callbacks up | `onAdd`, `onDelete`, `onView`, `onClose`, `onFilterChange` |
| `.map()` for rendering | ContactList.jsx |
| `.filter()` for search + category | Computed value in App.jsx |
| Conditional rendering | Form toggle, detail panel, two distinct empty states |
| Lifting state up | All shared state in App.jsx |
| Immutable updates | `[...contacts, newContact]`, `contacts.filter(c => c.id !== id)` |
| Derived / computed state | `filteredContacts` — computed from state, not stored |
