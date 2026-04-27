# 🚀 Other Techs – Docker Learning & Practice Repository

This repository contains my hands-on practice, notes, and mini-projects related to **Docker and containerization**. It includes conceptual notes, cheat sheets, and a sample Node.js application to understand Docker workflows in a practical way.

---

## 📂 Repository Structure

```
Other_Techs/
│
├── Docker/
│   ├── concepts.txt                # Notes on Docker concepts
│   ├── Docker CheatSheet.pdf      # Quick reference guide
│   ├── docker-testapp-main/       # Sample Node.js app for Docker practice
│   │   ├── server.js
│   │   ├── package.json
│   │   └── README.md
│
└── .git/                          # Git version control files
```

---

## 🐳 What This Repository Covers

- 📌 Docker basics (images, containers, volumes, networks)
- 📌 Docker commands and workflows
- 📌 Practical implementation using a Node.js app
- 📌 Notes + cheat sheets for quick revision

---

## 🛠️ Tech Stack

- **Docker**
- **Node.js**
- **Express.js**

---

## ⚙️ Getting Started

### 1️⃣ Clone the Repository

```
git clone https://github.com/your-username/Other_Techs.git
cd Other_Techs
```

---

### 2️⃣ Navigate to Docker App

```
cd Docker/docker-testapp-main
```

---

### 3️⃣ Install Dependencies

```
npm install
```

---

### 4️⃣ Run the App (Without Docker)

```
node server.js
```

---

### 5️⃣ Run with Docker (Basic Steps)

```
# Build Docker image
docker build -t my-node-app .

# Run container
docker run -p 3000:3000 my-node-app
```

---

## 📘 Learning Resources Included

- ✔️ `concepts.txt` → Core Docker concepts
- ✔️ Docker CheatSheet → Quick command reference
- ✔️ Sample app → Practical Docker usage

---

## 🎯 Purpose of This Repository

This repo is created to:

- Practice Docker from basics to intermediate level
- Build a strong understanding of containerization
- Prepare for real-world development and deployment scenarios

---

## 🚧 Future Improvements

- Add Docker Compose examples
- Multi-container applications
- CI/CD integration with Docker
- Kubernetes basics

---

## 🤝 Contributing

This is a personal learning repository, but suggestions and improvements are always welcome!

---

## 📄 License

This project is open-source and available under the MIT License.

---

## 👨‍💻 Author

**ABD**  
Computer Science Student | Aspiring Software Engineer  

---

⭐ If you found this helpful, consider giving it a star!
