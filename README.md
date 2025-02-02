# **Web-Based Quiz Application with Gamification**

## **Overview**
This project is a web-based quiz application that includes gamification features. It uses a React-based frontend with state management through hooks to handle the user interface and quiz mechanics. The quiz fetches questions from an API, displays them with a timer, tracks lives, and provides instant feedback on correct or incorrect answers. It also includes a countdown before starting the quiz and a heart-based life system for added gamification.

---

## **Features**

1. **Start Countdown (3, 2, 1, Go!)**: 
   - A countdown is displayed before the quiz begins to build anticipation.
   - The countdown appears in a smooth animation without any distracting vertical lines.

2. **Question Display**: 
   - Each question is shown with multiple-choice options.
   - A timer starts when the first question appears, giving the user a limited amount of time to answer the quiz.

3. **Instant Feedback**: 
   - After selecting an option, users receive immediate feedback.
   - The correct answer turns green, and the incorrect one turns red.
   - A message shows the correct answer if the user selects the wrong one.

4. **Gamification - Lives and Scoring**: 
   - Users start with 5 lives, which are deducted when an incorrect answer is chosen.
   - Each correct answer increases the score by 10 points.
   - The quiz ends when the user runs out of lives or completes all questions.

5. **Results Summary**: 
   - After the quiz is over, the user sees their score.
   - An option to restart the quiz is available.

---

## **Technologies Used**

- **React.js**: Used for the frontend of the application.
- **CSS**: For styling the components and animations.
- **JavaScript**: The main programming language for handling logic and state management.
- **API**: Questions are fetched from an external API to populate the quiz.

---
## **Setup Instructions**

### **1. Clone the Repository**

git clone https://github.com/AkshatVishwakarma29/Quiz-web-application.git

### **2. Install Dependencies**
cd quiz-app
npm install

### **3. Run the Application**
npm start

The app will run locally on http://localhost:3000.