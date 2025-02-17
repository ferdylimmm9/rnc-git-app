# React Native Assessment

## User Story

1. **As a User, I should be able to view all open-source Repositories of the React Native Community:**
   - Repository name
   - Repository description
   - Pagination with a limit of 10 at a time
   
2. **As a User, I should be able to scroll down to load more Repositories.**

3. **As a User, I should be able to search for Repositories:**
   - Search using repository name

4. **As a User, I should be able to tap on a Repository and view its details in a separate screen:**
   - Repository name
   - Repository description
   - Number of stars
   - Number of forks
   - Number of watchers
   - Programming language

---

## Required Tools

- **Redux**: For state management
- **Redux Saga**: For side-effects management
- **Axios**: For making HTTP requests
- **React Hook**: For managing component states

---

## Additional Tools

- **expo-image**: Native image performance issues; expo-image is an alternative for better performance
- **@shopify/flash-list**: FlatList performance issues; flash list is an alternative
- **expo**: Used for debugging in development environments
- **react-native-mmkv**: Alternative to AsyncStorage with better performance
- **phosphor-react-native**: Icons library for React Native
- **react-native-safe-area-context**: Helps control the safe area on phones with notches
- **toastify-react-native**: Toast component for displaying messages
- **expo-clipboard**: Helps copy content to clipboard

---

## API List

1. **Get Details of React Native Community**
   ```http
   GET https://api.github.com/orgs/react-native-community
   ```

2. **Get All Open-Source Repositories (with Pagination)**
   ```http
   GET https://api.github.com/orgs/react-native-community/repos?per_page=10&page={page}
   ```

3. **Search for Repositories by Name**
   ```http
   GET https://api.github.com/search/repositories?q={query}+org:react-native-community
   ```

4. **Get Repository Details**
   ```http
   GET https://api.github.com/repos/react-native-community/{repo_name}
   ```

---

## UX Details

1. **Handle Network Error View**: Display appropriate error messages when network issues occur.
2. **Throttle Search Requests**: Minimize the number of requests sent to GitHub by implementing throttling.
3. **User Search History**: Store and retrieve user search history to enhance user experience.
4. **Pull-to-Refresh**: Implement pull-to-refresh functionality to fetch the latest data.
5. **Loading State View**: Show loading indicators when network requests are in progress.

---

## Technical Details

1. **Search Page Navigation**: Automatically focus the search input field when the user navigates to the search page.
2. **Pagination Handling**: Manually handle pagination for fetching repositories to optimize network requests.
3. **Save Search Results**: Store search results in **MMKV storage** after the user taps on a repository for viewing details.

---

## Design Inspiration

- **Instagram**
- **GitHub**

---

## Steps

1. **Create a React Native App**: Set up the basic project structure.
2. **Setup React Navigation**: Configure navigation for different screens.
3. **Add Design Tokens**: Implement design tokens for consistent UI across the app.
4. **Get Data from API & Design with Dummy**: Start by using dummy data to design the UI.
5. **Setup Redux and React Saga**: Set up Redux for state management and React Saga for side effects handling.
6. **Integrate APIs into Redux + React Saga**: Fetch real data from the GitHub API using Redux and React Saga.
7. **Replace Dummy Data with API Data**: Replace the dummy data with real data managed by Redux and fetched by React Saga.

---
