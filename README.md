# ⚙️ Faulty Calculator – JavaScript Beginner Project

This is a fun and beginner-friendly calculator project made using **JavaScript** that performs basic arithmetic operations — but with a twist! 💥

The calculator is **"faulty"** because **10% of the time**, it intentionally gives the wrong answer by using the wrong operator. It’s a great way to learn about functions, randomness, and conditional logic in JavaScript.

---

## 🧠 How It Works

- You input two numbers and an operator (`+`, `-`, `*`, or `/`)
- The calculator:
  - **Works correctly 90% of the time**
  - **Fails 10% of the time by swapping operators** using this logic:

| Actual Operator | Faulty Operator |
|-----------------|------------------|
| `+`             | `-`              |
| `-`             | `/`              |
| `*`             | `+`              |
| `/`             | `**` (Power)     |

- For example:
  - `10 + 5` might return `5`
  - `6 * 2` might return `8`

---

