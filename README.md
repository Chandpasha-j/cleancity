# 🧹 CleanCity Game

CleanCity is an interactive web-based educational game designed to teach waste management and environmental cleanliness. Players help clean up the city by correctly picking up litter and sorting standard waste into designated **Wet** and **Dry** waste bins.

---

## 🌐 Live Demo

The project is deployed and live on Netlify:  
👉 **[Play CleanCity Live](https://gleaming-youtiao-563bec.netlify.app/)**

---

## 📑 Table of Contents

- [Overview](#overview)
- [Game Features](#game-features)
- [Game Rules & Instructions](#game-rules--instructions)
- [Project Structure](#project-structure)
- [Tech Stack](#tech-stack)
- [Local Setup & Development](#local-setup--development)
- [Deployment](#deployment)

---

## 🍃 Overview

In CleanCity, you navigate through multiple urban environments (such as the **Garden** and the **Bus Stop**) to pick up various pieces of waste—including organic items, paper, and plastic wrappers—and dispose of them in the correct waste bins. 

---

## ✨ Game Features

* **Multiple Levels:** Progress through different city zones (Garden $\rightarrow$ Bus Stop).
* **Waste Sorting Mechanics:** Distinguish between **Wet Waste** (leaves, fruit) and **Dry Waste** (paper, wrappers).
* **Real-time Feedback:** Error alerts notify players if waste is delivered to the wrong bin.
* **Score System:** Earn points for every piece of litter correctly sorted.
* **Mobile & On-Screen D-Pad Support:** Compatible with desktop keyboard controls and touch screens via an integrated on-screen directional pad.

---

## 🎮 Game Rules & Instructions

1. **Controls:**
   - **Keyboard:** Use `Arrow Keys` ($\leftarrow$, $\rightarrow$, $\uparrow$, $\downarrow$) to navigate your character around the map.
   - **Mobile / Touch:** Use the on-screen DPAD buttons.
2. **Gameplay:**
   - Walk over an item to pick it up.
   - Carry the item to the correct bin:
     - 🍏 **Wet Bin:** Fruits, Leaves
     - 📄 **Dry Bin:** Paper, Wrappers
   - Touch the correct bin zone to drop off the item and earn **+10 Points**.
   - Clear all litter to advance to the next level.
3. **Restarting:**
   - Press **`R`** on your keyboard at any point during or after the game to reset and restart from Level 1.

---

## 📁 Project Structure

```text
CleanCity/
│
├── index.html          # Main HTML structure, Canvas viewport, and assets loader
├── code.js             # Core game logic, state management, and p5.js render loops
├── gamelab-api.js      # Game engine library and touch/mobile control handlers
├── gamelab.css         # Styling for canvas viewport and layout controls
├── p5.js               # p5.js graphic canvas framework
├── p5.play.js          # p5.play library for sprite animations and collision detection
└── assets/             # Animation assets and sprite images
