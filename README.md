# MindSlate Smart Listing Interface

A premium, performant React dashboard for reading blog posts, built as part of the Frontend Developer Intern assignment.

## ✨ Features

- **Smart Listing**: Fetches and displays posts from JSONPlaceholder API.
- **Search & Filters**: Debounced search by title and filtering by User ID.
- **Pagination**: Smooth navigation through large datasets.
- **Starring Interaction**: Mark posts as favorites with persistent state.
- **Theme Management**: Persistent Light and Dark themes with premium glassmorphism aesthetics.
- **Performance Optimized**: Component memoization and throttled manual refresh.

## 🚀 Setup Instructions

1. **Clone the project**
2. **Install dependencies**:
   ```bash
   npm install
   ```
3. **Run the development server**:
   ```bash
   npm run dev
   ```
4. **Build for production**:
   ```bash
   npm run build
   ```

## 🛠️ Tech Stack & Approach

- **Framework**: React 18 (Vite)
- **Styling**: Vanilla CSS with CSS Variables for theme tokens and glassmorphism.
- **Icons**: Lucide React
- **Persistence**: `localStorage` used for Theme and Starred Posts.

### API Handling & Performance
- **Custom Hooks**: `usePosts` handles data fetching, loading, and error states.
- **Throttling**: The "Refresh" action is throttled to prevent spamming the API (minimum 2-second interval).
- **Debouncing**: Search input uses a 300ms debounce to avoid excessive re-renders during typing.
- **Memoization**: `React.memo` and `useMemo` are utilized for `PostCard` rendering and filtering logic to ensure smooth performance even with 100+ items.

## 📸 Screenshots

- High-density Grid View
- Premium Dark/Light Theme Support
- Responsive Controls
