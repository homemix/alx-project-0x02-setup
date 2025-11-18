export interface NavLink {
    href: string;
    label: string;
}

// Reusable Card Component
export interface CardProps {
    title: string;
    content: string;
}

// Post Structure
export interface Post {
    id: number;
    title: string;
    content: string;
}

// PostModal Props
export interface PostModalProps {
    isOpen: boolean;
    onClose: (): any;
    onAddPost: (post: Omit<Post, 'id'>) => void;
}