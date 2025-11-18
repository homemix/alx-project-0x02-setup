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
    onClose: ()=> void;
    onAddPost: (post: Omit<Post, 'id'>) => void;
}

export type ButtonSize = 'small' | 'medium' | 'large';
export type ButtonShape = 'rounded-sm' | 'rounded-md' | 'rounded-lg' | 'rounded-full';

export interface ButtonProps {
    children: React.ReactNode;
    size?: ButtonSize;
    shape?: ButtonShape;
    onClick?: () => void;
    type?: 'button' | 'submit' | 'reset';
    className?: string;
}
export interface PostProps {
    title: string;
    content: string;
    userId: number;
}

export interface UserProps {
    id: number;
    name: string;
    username: string;
    email: string;
    address: {
        street: string;
        suite: string;
        city: string;
        zipcode: string;
    };
    phone: string;
    website: string;
    company: {
        name: string;
    };
}