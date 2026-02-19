# Allergen Label Displayer

A professional full-stack web application designed to help users identify potential allergens in their recipes. Users can upload Excel files containing multiple recipes, preview the extracted data, and process it to get a detailed terminal-style allergen report.

---

## 🚀 1. Setup Instructions

### Prerequisites
- **Node.js**: Ensure you have Node.js installed on your system.
- **npm**: Standard with Node.js.

### Installation & Running

#### 1. Clone & Setup Project
Navigate to the project root directory.

#### 2. Setup Backend Server
```bash
cd server
npm install
# Create a .env file and add ALLERGEN_API_URL=https://task.cover360.co.in/api/allergens
npm run dev
```
*The server runs on **port 5001**.*

#### 3. Setup Frontend Client
Open a new terminal window.
```bash
cd client
npm install
npm run dev
```
*The client runs on **http://localhost:5173**.*

---

### How to Use

1. **Upload**: On the Home page, click the upload box or drag and drop your `.xlsx` Excel file. The file should have columns like "Recipe Name" (or Product) and "Ingredients".
2. **Preview**: After a successful upload, you will see a table showing the extracted recipes and their ingredients. You can click **"Change File"** if you need to upload a different one.
3. **Process**: Click the **"Process Allergens"** button to analyze all recipes.
4. **View Results**:
   - Use the **Recipe Selector** dropdown to switch between different recipes.
   - View the **Allergen Report** displayed in a clean, mono-spaced terminal style.
   - Use the **"Back" (Return)** arrow icon to go back to the preview table.

---

## 🛠 2. Solution Explanation

### Technical Approach

- **Backend-First Processing**: I chose to handle Excel parsing and API integration on the backend. This ensures the client remains lightweight and the processing logic is centralized and secure.
- **Excel Parsing Interface**: Used the `xlsx` library to extract data. I implemented a **Robust Header Matching** logic that handles various column names (e.g., "Recipe Name" vs "Product") and case-insensitivity to make the app user-friendly.
- **State Management**: Implemented using **React Context API** (`RecipeContext`). This allows seamless state sharing (loading, error, recipe data) between the `FileUpload`, `RecipeTable`, and `AllergenDisplay` components without prop-drilling.
- **API Integration**: Integrated the external Allergen API. I added defensive measures like **Whitespace Trimming** for ingredients to improve match accuracy.
- **UI/UX Design**: Built with **Tailwind CSS**. I focused on a "Human-designed professional UI" that includes:
  - **React Hot Toast**: For immediate feedback on success/error.
  - **Two-Step Validation**: Allowing users to see what was parsed before hitting the API.
  - **Modular Architecture**: Clean separation between components, services, and routes.
- **Routing**: Implemented with `react-router-dom` to provide a scalable foundation for future pages.

### Potential Improvements

- **Scalability**:
  - Implement **WebSockets** for large file processing to provide real-time row-by-row updates.
  - Use **Redis** for caching common ingredient results to minimize API calls.
- **Optimizations**:
  - Add **Client-side Image Compression** if supporting image-based recipe uploads (OCR).
  - Implement **Batch Requests** if the external API supports processing multiple ingredients in one call.
- **UI Enhancements**:
  - Add **Dark Mode** support using Tailwind's theme system.
  - Implement a **Dashboard/History** page where users can save and revisit previous analyses.
  - Add **Export to PDF/Excel** functionality for the generated allergen report.

---

**Developed for Coding Challenge Verification**
