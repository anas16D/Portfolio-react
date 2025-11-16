import ReactDOM from 'react-dom/client';
import App from'./App.js'
import './index.css'; // Importing the CSS file for styling
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

const container = document.getElementById('root');
const root = ReactDOM.createRoot(container);
const queryClient = new QueryClient();
root.render(
    <QueryClientProvider client={queryClient}>
        <App />
    </QueryClientProvider>
); 