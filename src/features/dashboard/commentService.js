export const getComments = async () => {
    try {
        const response = await fetch('https://jsonplaceholder.typicode.com/comments');
        if (!response.ok) {
            throw new Error(`Error: ${response.status}`);
        }

        const data = await response.json();
        return data;
    } catch (error) {
        console.error('Error fetching comments:', error);
        throw error;
    }
};
